/**
 * CareFlow Memorial Hospital & Research Centre
 * Core Queue Synchronization & Clinical State Engine
 */

// Shared State Structure
const DEFAULT_STATE = {
  activeDept: 'cardiology',
  departments: {
    cardiology: {
      name: 'Cardiology OPD',
      doctor: 'Dr. Arjun Mehta',
      room: 'Room 104, 1st Floor',
      prefix: 'A',
      currentServingNum: 109,
      avgWaitPerPatientMin: 4,
      queue: [
        { token: 'A-109', name: 'Devji Bhai Solanki', status: 'serving', time: '10:35 AM' },
        { token: 'A-110', name: 'Rajesh Sharma', status: 'next', time: '10:45 AM' },
        { token: 'A-111', name: 'Meena Ben Patel', status: 'waiting', time: '10:50 AM' },
        { token: 'A-112', name: 'Devendra Joshi', status: 'waiting', time: '10:55 AM' },
        { token: 'A-113', name: 'Kavita Sundaram', status: 'waiting', time: '11:00 AM' },
        { token: 'A-114', name: 'Mohd. Zubair Khan', status: 'waiting', time: '11:05 AM' },
        { token: 'A-115', name: 'Pooja Bhatt', status: 'waiting', time: '11:10 AM' },
        { token: 'A-116', name: 'Girish Chandra Vyas', status: 'waiting', time: '11:15 AM' },
        { token: 'A-117', name: 'Ayush Kumar Singh (You)', status: 'waiting', time: '11:20 AM' },
        { token: 'A-118', name: 'Bhavna Ben Shah', status: 'waiting', time: '11:25 AM' },
        { token: 'A-119', name: 'Rameshwar Lal', status: 'waiting', time: '11:30 AM' },
        { token: 'A-120', name: 'Sunita Chauhan', status: 'waiting', time: '11:35 AM' }
      ]
    },
    orthopaedics: {
      name: 'Orthopaedics OPD',
      doctor: 'Dr. Neha Shah',
      room: 'Room 208, 2nd Floor',
      prefix: 'B',
      currentServingNum: 204,
      avgWaitPerPatientMin: 5,
      queue: [
        { token: 'B-204', name: 'Harish Bhai Parmar', status: 'serving', time: '10:30 AM' },
        { token: 'B-205', name: 'Anita Verma', status: 'next', time: '10:40 AM' },
        { token: 'B-206', name: 'Kishanlal Gupta', status: 'waiting', time: '10:45 AM' }
      ]
    },
    medicine: {
      name: 'General Medicine OPD',
      doctor: 'Dr. Rohan Patel',
      room: 'Room 112, 1st Floor',
      prefix: 'C',
      currentServingNum: 315,
      avgWaitPerPatientMin: 3.5,
      queue: [
        { token: 'C-315', name: 'Sureshbhai Rana', status: 'serving', time: '10:38 AM' },
        { token: 'C-316', name: 'Pramila Trivedi', status: 'next', time: '10:42 AM' }
      ]
    },
    paediatrics: {
      name: 'Paediatrics OPD',
      doctor: 'Dr. Ananya Iyer',
      room: 'Room 105, 1st Floor',
      prefix: 'D',
      currentServingNum: 402,
      avgWaitPerPatientMin: 4.5,
      queue: [
        { token: 'D-402', name: 'Master Aarav Shah', status: 'serving', time: '10:32 AM' },
        { token: 'D-403', name: 'Baby Diya Mehta', status: 'next', time: '10:45 AM' }
      ]
    }
  },
  userToken: {
    token: 'A-117',
    dept: 'cardiology',
    name: 'Ayush Kumar Singh',
    phone: '+91 98765 43210',
    date: '12 Sep 2026',
    timeSlot: '11:00 AM - 11:30 AM'
  },
  auditLog: [
    { time: '10:35:12 AM', text: 'Dr. Arjun Mehta called Token A-109 into Room 104 (Cardiology)' },
    { time: '10:30:45 AM', text: 'Dr. Neha Shah called Token B-204 into Room 208 (Orthopaedics)' },
    { time: '10:28:10 AM', text: 'Dr. Rohan Patel called Token C-314 into Room 112 (General Medicine)' },
    { time: '10:25:00 AM', text: 'Dr. Arjun Mehta completed consultation for Token A-108' }
  ]
};

// Initialize State from localStorage or default
function getAppState() {
  try {
    const saved = localStorage.getItem('careflow_state_v2');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error reading localStorage:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveAppState(state) {
  try {
    localStorage.setItem('careflow_state_v2', JSON.stringify(state));
    // Broadcast to other tabs
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'STATE_UPDATED', state });
    }
  } catch (e) {
    console.error('Error saving localStorage:', e);
  }
}

// Set up Broadcast Channel for real-time multi-tab communication
let broadcastChannel = null;
if (typeof BroadcastChannel !== 'undefined') {
  broadcastChannel = new BroadcastChannel('careflow_sync_channel');
  broadcastChannel.onmessage = (event) => {
    if (event.data && event.data.type === 'STATE_UPDATED') {
      onStateSyncReceived(event.data.state);
    }
  };
}

// Fallback window storage event for broader compatibility
window.addEventListener('storage', (e) => {
  if (e.key === 'careflow_state_v2' && e.newValue) {
    try {
      const state = JSON.parse(e.newValue);
      onStateSyncReceived(state);
    } catch (err) {}
  }
});

// Sound Generator for Hospital Chime (Web Audio API)
function playHospitalChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const now = ctx.currentTime;
    
    // Note 1: E5 (659.25 Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.18); // Glide to E5
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.9);

    // Note 2: G5 (783.99 Hz)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(783.99, now + 0.22);
    gain2.gain.setValueAtTime(0.15, now + 0.22);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.22);
    osc2.stop(now + 1.2);
  } catch (e) {
    console.log('Audio chime not permitted without user interaction yet');
  }
}

// Global notification toast
function showHospitalToast(message, type = 'info') {
  let container = document.getElementById('hospital-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'hospital-toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `hospital-toast ${type === 'alert' ? 'toast-alert' : type === 'emergency' ? 'toast-emergency' : ''}`;
  toast.innerHTML = `
    <div style="flex-grow: 1;">
      <div style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 2px;">
        Hospital Announcement
      </div>
      <div>${message}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --------------------------------------------------------------------------
// Doctor Desk Logic (doctor.html)
// --------------------------------------------------------------------------
function doctorCallNextPatient() {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  
  if (!dept || !dept.queue || dept.queue.length === 0) {
    showHospitalToast('No more patients in queue for this session.', 'alert');
    return;
  }

  // Find current serving index
  const currentIdx = dept.queue.findIndex(p => p.status === 'serving');
  const nextIdx = dept.queue.findIndex(p => p.status === 'next');

  if (currentIdx !== -1) {
    dept.queue[currentIdx].status = 'completed';
  }

  let newlyCalledToken = null;
  let newlyCalledName = null;

  if (nextIdx !== -1) {
    dept.queue[nextIdx].status = 'serving';
    dept.currentServingNum = parseInt(dept.queue[nextIdx].token.replace(/[^0-9]/g, ''), 10);
    newlyCalledToken = dept.queue[nextIdx].token;
    newlyCalledName = dept.queue[nextIdx].name;

    // Set next patient
    const waitingList = dept.queue.filter(p => p.status === 'waiting');
    if (waitingList.length > 0) {
      waitingList[0].status = 'next';
    }
  } else {
    // If no explicit 'next', pick first waiting
    const waitingIdx = dept.queue.findIndex(p => p.status === 'waiting');
    if (waitingIdx !== -1) {
      dept.queue[waitingIdx].status = 'serving';
      dept.currentServingNum = parseInt(dept.queue[waitingIdx].token.replace(/[^0-9]/g, ''), 10);
      newlyCalledToken = dept.queue[waitingIdx].token;
      newlyCalledName = dept.queue[waitingIdx].name;

      const nextWaiting = dept.queue.find((p, idx) => idx > waitingIdx && p.status === 'waiting');
      if (nextWaiting) nextWaiting.status = 'next';
    } else {
      // Autogenerate next token sequence if demo runs out
      const nextNum = dept.currentServingNum + 1;
      const tokStr = `${dept.prefix}-${nextNum}`;
      dept.currentServingNum = nextNum;
      dept.queue.push({
        token: tokStr,
        name: 'Walk-in Patient',
        status: 'serving',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      newlyCalledToken = tokStr;
      newlyCalledName = 'Walk-in Patient';
    }
  }

  // Add to hospital audit log
  const nowTime = new Date().toLocaleTimeString();
  state.auditLog.unshift({
    time: nowTime,
    text: `${dept.doctor} called Token ${newlyCalledToken} (${newlyCalledName}) into ${dept.room}`
  });
  if (state.auditLog.length > 20) state.auditLog.pop();

  saveAppState(state);
  playHospitalChime();
  showHospitalToast(`Called Token ${newlyCalledToken} (${newlyCalledName}) into ${dept.room}`, 'info');
  renderDoctorDesk();
}

function doctorRecallCurrent() {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  const current = dept.queue.find(p => p.status === 'serving');
  if (current) {
    playHospitalChime();
    showHospitalToast(`Repeat Call: Token ${current.token} (${current.name}) to ${dept.room}`, 'alert');
  }
}

function doctorAddWalkin() {
  const name = prompt("Enter Patient Name for walk-in OPD token:", "New Walk-in Patient");
  if (!name) return;

  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  const maxTokenNum = dept.queue.reduce((max, p) => {
    const num = parseInt(p.token.replace(/[^0-9]/g, ''), 10);
    return num > max ? num : max;
  }, dept.currentServingNum);

  const newToken = `${dept.prefix}-${maxTokenNum + 1}`;
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  dept.queue.push({
    token: newToken,
    name: name,
    status: 'waiting',
    time: now
  });

  state.auditLog.unshift({
    time: new Date().toLocaleTimeString(),
    text: `OPD Reception issued Token ${newToken} for ${name} (${dept.name})`
  });

  saveAppState(state);
  showHospitalToast(`Issued Walk-in Token ${newToken} for ${name}`, 'info');
  renderDoctorDesk();
}

function renderDoctorDesk() {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  if (!dept) return;

  const currentServingEl = document.getElementById('doc-serving-token');
  const currentPatientNameEl = document.getElementById('doc-serving-name');
  const currentServingTimeEl = document.getElementById('doc-serving-time');
  const queueTableBody = document.getElementById('doc-queue-tbody');

  const currentPatient = dept.queue.find(p => p.status === 'serving') || {
    token: `${dept.prefix}-${dept.currentServingNum}`,
    name: 'Consultation Complete',
    time: '—'
  };

  if (currentServingEl) currentServingEl.textContent = currentPatient.token;
  if (currentPatientNameEl) currentPatientNameEl.textContent = currentPatient.name;
  if (currentServingTimeEl) currentServingTimeEl.textContent = `Called at: ${currentPatient.time || '—'}`;

  if (queueTableBody) {
    queueTableBody.innerHTML = '';
    const activeAndWaiting = dept.queue.filter(p => p.status !== 'completed');

    if (activeAndWaiting.length === 0) {
      queueTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 24px; color: var(--text-muted);">No remaining patients in current session.</td></tr>';
      return;
    }

    activeAndWaiting.forEach((item, index) => {
      const tr = document.createElement('tr');
      if (item.status === 'serving') tr.className = 'serving-row';

      const estWaitMin = item.status === 'serving' ? '—' : `~${index * dept.avgWaitPerPatientMin} min`;
      const pillClass = item.status === 'serving' ? 'pill-next' : item.status === 'next' ? 'pill-next' : 'pill-waiting';
      const statusLabel = item.status === 'serving' ? 'Now Serving' : item.status === 'next' ? 'Next Due' : 'In Queue';

      tr.innerHTML = `
        <td><span class="token-tag">${item.token}</span></td>
        <td><strong>${item.name}</strong></td>
        <td><span class="status-pill ${pillClass}">${statusLabel}</span></td>
        <td style="font-family: var(--font-mono);">${estWaitMin}</td>
        <td>
          ${item.status === 'serving' 
            ? '<button class="btn btn-sm btn-terracotta" onclick="doctorRecallCurrent()">Repeat Call</button>' 
            : `<button class="btn btn-sm btn-secondary" onclick="doctorCallSpecificToken('${item.token}')">Call Now</button>`}
        </td>
      `;
      queueTableBody.appendChild(tr);
    });
  }
}

function doctorCallSpecificToken(targetToken) {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  
  const current = dept.queue.find(p => p.status === 'serving');
  if (current) current.status = 'completed';

  const target = dept.queue.find(p => p.token === targetToken);
  if (target) {
    target.status = 'serving';
    dept.currentServingNum = parseInt(target.token.replace(/[^0-9]/g, ''), 10);
    
    state.auditLog.unshift({
      time: new Date().toLocaleTimeString(),
      text: `${dept.doctor} directly called Token ${target.token} (${target.name})`
    });

    saveAppState(state);
    playHospitalChime();
    showHospitalToast(`Called Token ${target.token} (${target.name})`, 'info');
    renderDoctorDesk();
  }
}

// --------------------------------------------------------------------------
// Patient Page Logic (patient.html)
// --------------------------------------------------------------------------
function renderPatientPage() {
  const state = getAppState();
  const userTokenData = state.userToken || DEFAULT_STATE.userToken;
  const dept = state.departments[userTokenData.dept || 'cardiology'];
  if (!dept) return;

  const currentServingNum = dept.currentServingNum;
  const userNum = parseInt(userTokenData.token.replace(/[^0-9]/g, ''), 10);

  const patientsAhead = Math.max(0, userNum - currentServingNum - 1);
  const estimatedWaitMin = Math.max(0, (userNum - currentServingNum) * dept.avgWaitPerPatientMin);

  // Update DOM elements
  const elUserToken = document.getElementById('patient-user-token');
  const elCurrentServing = document.getElementById('patient-current-serving');
  const elPatientsAhead = document.getElementById('patient-ahead-count');
  const elWaitTime = document.getElementById('patient-wait-estimate');
  const elDeptName = document.getElementById('patient-dept-name');
  const elDoctorName = document.getElementById('patient-doctor-name');
  const elRoomName = document.getElementById('patient-room-name');
  const elPatientName = document.getElementById('patient-name-display');
  const elPatientPhone = document.getElementById('patient-phone-display');
  const elStatusBanner = document.getElementById('patient-status-alert');

  if (elUserToken) elUserToken.textContent = userTokenData.token;
  if (elCurrentServing) elCurrentServing.textContent = `${dept.prefix}-${currentServingNum}`;
  if (elPatientsAhead) elPatientsAhead.textContent = `${patientsAhead} ${patientsAhead === 1 ? 'patient' : 'patients'}`;
  if (elWaitTime) elWaitTime.textContent = currentServingNum >= userNum ? 'Due Now' : `${estimatedWaitMin} min`;
  if (elDeptName) elDeptName.textContent = dept.name;
  if (elDoctorName) elDoctorName.textContent = dept.doctor;
  if (elRoomName) elRoomName.textContent = dept.room;
  if (elPatientName) elPatientName.textContent = userTokenData.name;
  if (elPatientPhone) elPatientPhone.textContent = userTokenData.phone;

  // Progress track
  const progressTrack = document.getElementById('patient-progress-fill');
  if (progressTrack) {
    const totalInitialAhead = 8;
    const completedAhead = Math.max(0, totalInitialAhead - patientsAhead);
    const pct = Math.min(100, Math.max(10, (completedAhead / totalInitialAhead) * 100));
    progressTrack.style.width = `${pct}%`;
  }

  // Turn announcement alerts
  if (elStatusBanner) {
    if (currentServingNum === userNum) {
      elStatusBanner.className = 'status-alert-box alert-now-serving';
      elStatusBanner.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 14px; height: 14px; background: var(--accent-success); border-radius: 50%;"></div>
          <div>
            <h4 style="color: var(--accent-success); margin: 0; font-family: var(--font-sans); font-weight: 700;">YOUR TURN NOW</h4>
            <p style="margin: 2px 0 0 0; font-size: 0.95rem;">Please enter <strong>${dept.room}</strong> immediately. Dr. Arjun Mehta is ready for your consultation.</p>
          </div>
        </div>
      `;
    } else if (patientsAhead <= 2 && patientsAhead > 0) {
      elStatusBanner.className = 'status-alert-box alert-approaching';
      elStatusBanner.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="width: 14px; height: 14px; background: var(--accent-amber); border-radius: 50%;"></div>
          <div>
            <h4 style="color: var(--accent-amber); margin: 0; font-family: var(--font-sans); font-weight: 700;">YOUR TURN IS APPROACHING</h4>
            <p style="margin: 2px 0 0 0; font-size: 0.95rem;">Only <strong>${patientsAhead} patients ahead</strong>. Please proceed to the 1st Floor Waiting Lounge outside <strong>${dept.room}</strong>.</p>
          </div>
        </div>
      `;
    } else if (currentServingNum > userNum) {
      elStatusBanner.className = 'status-alert-box';
      elStatusBanner.innerHTML = `
        <h4 style="color: var(--text-muted); margin: 0; font-family: var(--font-sans); font-weight: 700;">TOKEN ALREADY CALLED</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.9rem;">Your token was previously called. If you missed your call, please report to the OPD Nurse Desk at ${dept.room}.</p>
      `;
    } else {
      elStatusBanner.className = 'status-alert-box';
      elStatusBanner.innerHTML = `
        <h4 style="margin: 0; font-size: 0.95rem; font-family: var(--font-sans); font-weight: 700;">OPD QUEUE STATUS: NORMAL FLOW</h4>
        <p style="margin: 2px 0 0 0; font-size: 0.85rem; color: var(--text-muted);">Please remain in the hospital cafeteria or patient waiting areas. This screen updates in real time.</p>
      `;
    }
  }
}

function patientSearchCustomToken() {
  const tokenInput = prompt("Enter your Token Number (e.g. A-117, B-205, C-316):", "A-117");
  if (!tokenInput) return;
  const clean = tokenInput.trim().toUpperCase();

  const state = getAppState();
  state.userToken.token = clean;
  if (clean.startsWith('B')) state.userToken.dept = 'orthopaedics';
  else if (clean.startsWith('C')) state.userToken.dept = 'medicine';
  else if (clean.startsWith('D')) state.userToken.dept = 'paediatrics';
  else state.userToken.dept = 'cardiology';

  saveAppState(state);
  showHospitalToast(`Tracking Token ${clean}`, 'info');
  renderPatientPage();
}

// --------------------------------------------------------------------------
// Homepage Queue Widget Logic (index.html)
// --------------------------------------------------------------------------
function renderHomeQueueWidget() {
  const state = getAppState();
  const select = document.getElementById('home-dept-select');
  const deptKey = select ? select.value : (state.activeDept || 'cardiology');
  const dept = state.departments[deptKey] || state.departments.cardiology;

  const elServing = document.getElementById('home-queue-serving');
  const elWait = document.getElementById('home-queue-wait');
  const elAhead = document.getElementById('home-queue-ahead');
  const elDoctor = document.getElementById('home-queue-doctor');
  const elRoom = document.getElementById('home-queue-room');

  const servingNum = dept.currentServingNum;
  const totalWaiting = dept.queue.filter(p => p.status === 'waiting' || p.status === 'next').length;
  const avgWait = Math.round(totalWaiting * dept.avgWaitPerPatientMin);

  if (elServing) elServing.textContent = `${dept.prefix}-${servingNum}`;
  if (elWait) elWait.textContent = `~${avgWait} min`;
  if (elAhead) elAhead.textContent = `${totalWaiting} in queue`;
  if (elDoctor) elDoctor.textContent = dept.doctor;
  if (elRoom) elRoom.textContent = dept.room;
}

// --------------------------------------------------------------------------
// Hospital Operations Admin Page Logic (hospital.html)
// --------------------------------------------------------------------------
function renderHospitalAdmin() {
  const state = getAppState();

  // Aggregate Stats
  let totalWaiting = 0;
  let totalAvgWaitSum = 0;
  let deptCount = 0;

  for (let key in state.departments) {
    const d = state.departments[key];
    const waitList = d.queue.filter(p => p.status === 'waiting' || p.status === 'next');
    totalWaiting += waitList.length;
    totalAvgWaitSum += (waitList.length * d.avgWaitPerPatientMin);
    deptCount++;
  }

  const overallAvgWait = Math.round(totalAvgWaitSum / (deptCount || 1));

  const elTotalWait = document.getElementById('admin-stat-waiting');
  const elAvgWait = document.getElementById('admin-stat-avgwait');
  if (elTotalWait) elTotalWait.textContent = totalWaiting;
  if (elAvgWait) elAvgWait.textContent = `${overallAvgWait} min`;

  // Render Table
  const tableBody = document.getElementById('admin-dept-tbody');
  if (tableBody) {
    tableBody.innerHTML = '';
    for (let key in state.departments) {
      const d = state.departments[key];
      const waitCount = d.queue.filter(p => p.status === 'waiting' || p.status === 'next').length;
      const waitTime = Math.round(waitCount * d.avgWaitPerPatientMin);
      const statusLabel = waitCount > 15 ? 'Heavy' : waitCount > 6 ? 'Busy' : 'Normal';
      const pillClass = waitCount > 15 ? 'pill-next' : waitCount > 6 ? 'pill-waiting' : 'pill-completed';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${d.name}</strong></td>
        <td>${d.doctor}</td>
        <td><span class="token-tag">${d.prefix}-${d.currentServingNum}</span></td>
        <td style="font-family: var(--font-mono); font-weight: 600;">${waitCount}</td>
        <td style="font-family: var(--font-mono);">${waitTime} min</td>
        <td><span class="status-pill ${pillClass}">${statusLabel}</span></td>
      `;
      tableBody.appendChild(tr);
    }
  }

  // Render Audit Log
  const logList = document.getElementById('admin-audit-log-list');
  if (logList && state.auditLog) {
    logList.innerHTML = '';
    state.auditLog.forEach(item => {
      const li = document.createElement('li');
      li.className = 'audit-log-item';
      li.innerHTML = `
        <span class="audit-time">${item.time}</span>
        <span class="audit-desc">${item.text}</span>
      `;
      logList.appendChild(li);
    });
  }
}

// --------------------------------------------------------------------------
// ICU Plain Language Multi-Lingual Switcher (icu.html)
// --------------------------------------------------------------------------
const ICU_TRANSLATIONS = {
  en: {
    title: "In Simple Language",
    text: "The patient's condition is currently stable and the medical team is continuing to monitor them closely. Vital signs are within expected supportive ranges, and breathing support remains standard as planned for recovery.",
    teamQuote: '"Patient remains stable under current supportive care. The medical team continues close monitoring."',
    disclaimer: "Assisted explanation — This explanation only simplifies information provided by the healthcare team. It does not provide a diagnosis or medical prediction."
  },
  hi: {
    title: "सरल भाषा में सारांश",
    text: "मरीज की स्थिति वर्तमान में स्थिर है और मेडिकल टीम लगातार नजदीकी निगरानी रख रही है। सभी महत्वपूर्ण शारीरिक मानक (वाइटल्स) सहायक स्तर पर सामान्य हैं तथा रिकवरी योजना के अनुसार सामान्य श्वसन सहयोग जारी है।",
    teamQuote: '"सहायक चिकित्सा के अंतर्गत मरीज की स्थिति स्थिर बनी हुई है। मेडिकल टीम निरंतर गहन निगरानी कर रही है।"',
    disclaimer: "सहायक सारांश — यह व्याख्या केवल स्वास्थ्य टीम द्वारा दी गई जानकारी को सरल बनाती है। यह कोई प्रत्यक्ष निदान या चिकित्सकीय भविष्यवाणी प्रदान नहीं करती है।"
  },
  gu: {
    title: "સરળ ભાષામાં વિગત",
    text: "દર્દીની હાલત હાલમાં સ્થિર છે અને તબીબી ટીમ સતત નજીકથી દેખરેખ રાખી રહી છે. તમામ મહત્વપૂર્ણ શારીરિક પરિમાણો અપેક્ષિત સ્તરે સામાન્ય છે અને રિકવરી પ્લાન મુજબ સહાયક સારવાર ચાલુ છે.",
    teamQuote: '"દર્દીની સ્થિતિ હાલમાં સ્થિર છે અને મેડિકલ ટીમ સતત દેખરેખ રાખી રહી છે."',
    disclaimer: "સહાયક સરળ સમજણ — આ સમજૂતી ફક્ત મેડિકલ ટીમ દ્વારા પૂરી પાડવામાં આવેલી માહિતીને સરળ બનાવે છે. તે કોઈ નિદાન અથવા આગાહી કરતી નથી."
  }
};

function switchIcuLanguage(lang) {
  const content = ICU_TRANSLATIONS[lang] || ICU_TRANSLATIONS.en;
  
  const textEl = document.getElementById('icu-simple-text');
  const quoteEl = document.getElementById('icu-medical-quote');
  const disclaimerEl = document.getElementById('icu-disclaimer-text');

  if (textEl) textEl.textContent = content.text;
  if (quoteEl) quoteEl.textContent = content.teamQuote;
  if (disclaimerEl) disclaimerEl.textContent = content.disclaimer;

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// --------------------------------------------------------------------------
// OPD Token Generation & Appointment Modal Workflow
// --------------------------------------------------------------------------
function openAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  if (modal) modal.classList.add('active');
}

function closeAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  if (modal) modal.classList.remove('active');
}

function handleBookTokenSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modal-patient-name').value || 'Patient';
  const phone = document.getElementById('modal-patient-phone').value || '+91 98765 43210';
  const deptKey = document.getElementById('modal-dept-select').value || 'cardiology';

  const state = getAppState();
  const dept = state.departments[deptKey];
  
  const maxTokenNum = dept.queue.reduce((max, p) => {
    const num = parseInt(p.token.replace(/[^0-9]/g, ''), 10);
    return num > max ? num : max;
  }, dept.currentServingNum);

  const newToken = `${dept.prefix}-${maxTokenNum + 1}`;
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  dept.queue.push({
    token: newToken,
    name: name,
    status: 'waiting',
    time: now
  });

  state.userToken = {
    token: newToken,
    dept: deptKey,
    name: name,
    phone: phone,
    date: '12 Sep 2026',
    timeSlot: 'Today, Next Available'
  };

  state.auditLog.unshift({
    time: new Date().toLocaleTimeString(),
    text: `New OPD Token ${newToken} generated online for ${name} (${dept.name})`
  });

  saveAppState(state);
  closeAppointmentModal();
  showHospitalToast(`Token ${newToken} generated successfully! Redirecting to live receipt...`, 'info');

  setTimeout(() => {
    window.location.href = 'patient.html';
  }, 800);
}

// --------------------------------------------------------------------------
// Global State Synchronization Handler
// --------------------------------------------------------------------------
function onStateSyncReceived(state) {
  renderDoctorDesk();
  renderPatientPage();
  renderHomeQueueWidget();
  renderHospitalAdmin();
}

// Mobile Menu Toggle
function toggleMobileNav() {
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('mobile-active');
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderDoctorDesk();
  renderPatientPage();
  renderHomeQueueWidget();
  renderHospitalAdmin();

  // Setup home dept select listener if present
  const homeDeptSelect = document.getElementById('home-dept-select');
  if (homeDeptSelect) {
    homeDeptSelect.addEventListener('change', () => {
      renderHomeQueueWidget();
    });
  }
});
