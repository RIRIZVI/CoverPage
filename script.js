/* ==========================================================================
   CoverCraft Academic Cover Page Generator - Main Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Preset Data Configuration
  const PRESETS = {
    sau: {
      universityName: "SYLHET AGRICULTURAL UNIVERSITY",
      institutionSubtitle: "Sylhet-3100",
      subtitleColor: "#008000",
      logo: "StAU_logo_main.jpeg",
      showDivider: true,
      documentPrefix: "Assignment on",
      assignmentTitle: "Single Cell Protein",
      courseTitle: "Food and Beverage Biotechnology (Theory)",
      courseCode: "PIB-311(T)",
      submittedByHeader: "Submitted By",
      submittedBy: [
        "Arafath Chowdhury",
        "ID: 2206007",
        "Level-3, Semester-1",
        "Session: 2021-2022",
        "Faculty of Biotechnology and Genetic Engineering",
        "Sylhet Agricultural University,",
        "Sylhet-3100"
      ],
      submittedToHeader: "Submitted To",
      submittedTo: [
        "Ms. Mahmuda Akther Moli",
        "Assistant Professor",
        "Dept. of Pharmaceuticals and Industrial Biotechnology",
        "Faculty of Biotechnology and Genetic Engineering",
        "Sylhet Agricultural University,",
        "Sylhet-3100"
      ],
      submissionDate: "22 July 2026",
      accentColor: "#0c542c",
      fontFamily: "'EB Garamond', Georgia, serif"
    },
    buet: {
      universityName: "BANGLADESH UNIVERSITY OF ENGINEERING AND TECHNOLOGY",
      institutionSubtitle: "Dhaka-1000",
      subtitleColor: "#000080",
      logo: "StAU_logo_main.jpeg",
      showDivider: true,
      documentPrefix: "Lab Report on",
      assignmentTitle: "Implementation of Digital Signal Processing Filters",
      courseTitle: "Digital Signal Processing Laboratory",
      courseCode: "EEE 310",
      submittedByHeader: "Submitted By",
      submittedBy: [
        "Tanvir Hasan",
        "Student ID: 1906042",
        "Section A, Group 3",
        "Department of Electrical Engineering",
        "BUET, Dhaka-1000"
      ],
      submittedToHeader: "Submitted To",
      submittedTo: [
        "Dr. Md. Kamrul Islam",
        "Professor",
        "Department of Electrical Engineering",
        "BUET, Dhaka-1000"
      ],
      submissionDate: "15 August 2026",
      accentColor: "#0f4c81",
      fontFamily: "Georgia, serif"
    },
    du: {
      universityName: "UNIVERSITY OF DHAKA",
      institutionSubtitle: "Dhaka-1000, Bangladesh",
      subtitleColor: "#8b0000",
      logo: "StAU_logo_main.jpeg",
      showDivider: true,
      documentPrefix: "Term Paper on",
      assignmentTitle: "Macroeconomic Analysis & Trade Policies",
      courseTitle: "International Economics & Trade",
      courseCode: "ECON-401",
      submittedByHeader: "Submitted By",
      submittedBy: [
        "Nusrat Jahan",
        "Roll No: 45",
        "Department of Economics",
        "University of Dhaka"
      ],
      submittedToHeader: "Submitted To",
      submittedTo: [
        "Dr. Rafiqul Ahmed",
        "Associate Professor",
        "Department of Economics",
        "University of Dhaka"
      ],
      submissionDate: "10 September 2026",
      accentColor: "#8b0000",
      fontFamily: "'Merriweather', serif"
    },
    sust: {
      universityName: "SHAHJALAL UNIVERSITY OF SCIENCE & TECHNOLOGY",
      institutionSubtitle: "Kumargaon, Sylhet-3114",
      subtitleColor: "#006a4e",
      logo: "StAU_logo_main.jpeg",
      showDivider: true,
      documentPrefix: "Project Report on",
      assignmentTitle: "Web Application Architecture & Microservices",
      courseTitle: "Advanced Software Engineering",
      courseCode: "CSE 433",
      submittedByHeader: "Submitted By",
      submittedBy: [
        "Samiul Haque",
        "Registration No: 2019331052",
        "Dept. of Computer Science & Engineering",
        "SUST, Sylhet"
      ],
      submittedToHeader: "Submitted To",
      submittedTo: [
        "Dr. M. Zafar Iqbal",
        "Professor",
        "Dept. of Computer Science & Engineering",
        "SUST, Sylhet"
      ],
      submissionDate: "05 October 2026",
      accentColor: "#006a4e",
      fontFamily: "'Playfair Display', serif"
    },
    custom: {
      universityName: "YOUR UNIVERSITY NAME HERE",
      institutionSubtitle: "City, Country",
      subtitleColor: "#10b981",
      logo: "StAU_logo_main.jpeg",
      showDivider: true,
      documentPrefix: "Assignment Title",
      assignmentTitle: "Enter Your Main Topic Here",
      courseTitle: "Enter Course Title Here",
      courseCode: "COURSE-101",
      submittedByHeader: "Submitted By",
      submittedBy: ["Student Name", "ID Number", "Department"],
      submittedToHeader: "Submitted To",
      submittedTo: ["Teacher Name", "Designation", "Department"],
      submissionDate: "22 July 2026",
      accentColor: "#1f2937",
      fontFamily: "'EB Garamond', Georgia, serif"
    }
  };

  // State Management Variables
  let state = { ...PRESETS.sau };
  let currentZoom = 100;

  // DOM Elements - Form Controls
  const presetSelect = document.getElementById('presetSelect');
  const universityNameInput = document.getElementById('universityName');
  const institutionSubtitleInput = document.getElementById('institutionSubtitle');
  const subtitleColorInput = document.getElementById('subtitleColor');
  const showDividerCheckbox = document.getElementById('showDivider');
  const documentPrefixInput = document.getElementById('documentPrefix');
  const assignmentTitleInput = document.getElementById('assignmentTitle');
  const courseTitleInput = document.getElementById('courseTitle');
  const courseCodeInput = document.getElementById('courseCode');
  const submittedByHeaderInput = document.getElementById('submittedByHeader');
  const submittedToHeaderInput = document.getElementById('submittedToHeader');
  const submittedByListContainer = document.getElementById('submittedByList');
  const submittedToListContainer = document.getElementById('submittedToList');
  const submissionDateInput = document.getElementById('submissionDate');
  const tableHeaderBgColorInput = document.getElementById('tableHeaderBgColor');
  const fontFamilySelect = document.getElementById('fontFamilySelect');
  const paperMarginInput = document.getElementById('paperMargin');
  const tableBorderWidthInput = document.getElementById('tableBorderWidth');
  const showPageBorderCheckbox = document.getElementById('showPageBorder');
  const logoFileInput = document.getElementById('logoFileInput');
  const logoSizeInput = document.getElementById('logoSize');

  // DOM Elements - Paper Preview Targets
  const coverPaper = document.getElementById('coverPagePaper');
  const viewUniversityName = document.getElementById('viewUniversityName');
  const viewLogoWrapper = document.getElementById('viewLogoWrapper');
  const viewLogo = document.getElementById('viewLogo');
  const viewSubtitle = document.getElementById('viewSubtitle');
  const viewDivider = document.getElementById('viewDivider');
  const viewDocPrefix = document.getElementById('viewDocPrefix');
  const viewTopicTitle = document.getElementById('viewTopicTitle');
  const viewCourseTitle = document.getElementById('viewCourseTitle');
  const viewCourseCode = document.getElementById('viewCourseCode');
  const viewHeaderSubmittedBy = document.getElementById('viewHeaderSubmittedBy');
  const viewHeaderSubmittedTo = document.getElementById('viewHeaderSubmittedTo');
  const viewCellSubmittedBy = document.getElementById('viewCellSubmittedBy');
  const viewCellSubmittedTo = document.getElementById('viewCellSubmittedTo');
  const viewSubmissionDate = document.getElementById('viewSubmissionDate');

  // Initialize App
  function init() {
    setupTabSwitching();
    setupEventListeners();
    setupLogoUpload();
    setupColorSwatches();
    
    // Check local storage or load default SAU preset
    const saved = localStorage.getItem('covercraft_state');
    if (saved) {
      try {
        state = JSON.parse(saved);
      } catch (e) {
        state = { ...PRESETS.sau };
      }
    }
    
    populateFormFromState();
    renderPreview();
  }

  // Tab Navigation Handling
  function setupTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
      });
    });
  }

  // Populate Input Controls from Current State
  function populateFormFromState() {
    universityNameInput.value = state.universityName || '';
    institutionSubtitleInput.value = state.institutionSubtitle || '';
    subtitleColorInput.value = state.subtitleColor || '#008000';
    showDividerCheckbox.checked = state.showDivider !== false;
    documentPrefixInput.value = state.documentPrefix || '';
    assignmentTitleInput.value = state.assignmentTitle || '';
    courseTitleInput.value = state.courseTitle || '';
    courseCodeInput.value = state.courseCode || '';
    submittedByHeaderInput.value = state.submittedByHeader || 'Submitted By';
    submittedToHeaderInput.value = state.submittedToHeader || 'Submitted To';
    submissionDateInput.value = state.submissionDate || '';
    tableHeaderBgColorInput.value = state.accentColor || '#0c542c';
    fontFamilySelect.value = state.fontFamily || "'EB Garamond', Georgia, serif";

    renderDynamicList('submittedBy', state.submittedBy, submittedByListContainer);
    renderDynamicList('submittedTo', state.submittedTo, submittedToListContainer);

    if (state.logo) {
      viewLogo.src = state.logo;
      document.getElementById('logoPreview').src = state.logo;
      viewLogoWrapper.style.display = 'flex';
    } else {
      viewLogoWrapper.style.display = 'none';
    }

    updateActiveSwatch(state.accentColor);
  }

  // Render Dynamic Input Row Lists (Submitted By & Submitted To)
  function renderDynamicList(key, items, container) {
    container.innerHTML = '';
    items.forEach((itemText, index) => {
      const row = document.createElement('div');
      row.className = 'field-item-row';
      row.innerHTML = `
        <input type="text" value="${escapeHtml(itemText)}" data-key="${key}" data-index="${index}">
        <button type="button" class="btn-row-del" data-key="${key}" data-index="${index}" title="Remove line">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      container.appendChild(row);
    });

    // Attach row input events
    container.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', (e) => {
        const k = e.target.dataset.key;
        const idx = parseInt(e.target.dataset.index);
        state[k][idx] = e.target.value;
        saveAndRender();
      });
    });

    // Attach row delete events
    container.querySelectorAll('.btn-row-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const button = e.target.closest('.btn-row-del');
        const k = button.dataset.key;
        const idx = parseInt(button.dataset.index);
        state[k].splice(idx, 1);
        renderDynamicList(k, state[k], container);
        saveAndRender();
      });
    });
  }

  // Render High-Fidelity Paper Preview
  function renderPreview() {
    viewUniversityName.textContent = state.universityName;
    viewSubtitle.textContent = state.institutionSubtitle;
    viewSubtitle.style.color = subtitleColorInput.value;
    
    viewDivider.style.display = showDividerCheckbox.checked ? 'block' : 'none';
    viewDocPrefix.textContent = state.documentPrefix;
    viewTopicTitle.textContent = state.assignmentTitle;
    viewCourseTitle.textContent = state.courseTitle;
    viewCourseCode.textContent = state.courseCode;

    viewHeaderSubmittedBy.textContent = state.submittedByHeader;
    viewHeaderSubmittedTo.textContent = state.submittedToHeader;

    // Render Submitted By cells
    viewCellSubmittedBy.innerHTML = state.submittedBy
      .map(line => `<div class="person-detail-line">${escapeHtml(line)}</div>`)
      .join('');

    // Render Submitted To cells
    viewCellSubmittedTo.innerHTML = state.submittedTo
      .map(line => `<div class="person-detail-line">${escapeHtml(line)}</div>`)
      .join('');

    viewSubmissionDate.textContent = `Date of Submission: ${state.submissionDate}`;

    // Apply CSS Custom Variables to Paper
    document.documentElement.style.setProperty('--paper-accent-color', tableHeaderBgColorInput.value);
    document.documentElement.style.setProperty('--paper-subtitle-color', subtitleColorInput.value);
    document.documentElement.style.setProperty('--paper-font', fontFamilySelect.value);
    document.documentElement.style.setProperty('--paper-margin', `${paperMarginInput.value}mm`);
    document.documentElement.style.setProperty('--paper-table-border-width', `${tableBorderWidthInput.value}px`);

    // Outer Border Frame
    if (showPageBorderCheckbox.checked) {
      coverPaper.classList.add('show-border');
    } else {
      coverPaper.classList.remove('show-border');
    }
  }

  function saveAndRender() {
    localStorage.setItem('covercraft_state', JSON.stringify(state));
    renderPreview();
  }

  // Setup Form Control Event Listeners
  function setupEventListeners() {
    presetSelect.addEventListener('change', (e) => {
      const selectedKey = e.target.value;
      if (PRESETS[selectedKey]) {
        state = JSON.parse(JSON.stringify(PRESETS[selectedKey]));
        populateFormFromState();
        saveAndRender();
      }
    });

    universityNameInput.addEventListener('input', (e) => {
      state.universityName = e.target.value;
      saveAndRender();
    });

    institutionSubtitleInput.addEventListener('input', (e) => {
      state.institutionSubtitle = e.target.value;
      saveAndRender();
    });

    subtitleColorInput.addEventListener('input', (e) => {
      state.subtitleColor = e.target.value;
      saveAndRender();
    });

    showDividerCheckbox.addEventListener('change', (e) => {
      state.showDivider = e.target.checked;
      saveAndRender();
    });

    documentPrefixInput.addEventListener('input', (e) => {
      state.documentPrefix = e.target.value;
      saveAndRender();
    });

    assignmentTitleInput.addEventListener('input', (e) => {
      state.assignmentTitle = e.target.value;
      saveAndRender();
    });

    courseTitleInput.addEventListener('input', (e) => {
      state.courseTitle = e.target.value;
      saveAndRender();
    });

    courseCodeInput.addEventListener('input', (e) => {
      state.courseCode = e.target.value;
      saveAndRender();
    });

    submittedByHeaderInput.addEventListener('input', (e) => {
      state.submittedByHeader = e.target.value;
      saveAndRender();
    });

    submittedToHeaderInput.addEventListener('input', (e) => {
      state.submittedToHeader = e.target.value;
      saveAndRender();
    });

    submissionDateInput.addEventListener('input', (e) => {
      state.submissionDate = e.target.value;
      saveAndRender();
    });

    // Today's Date Quick Action Button
    document.getElementById('btnSetToday').addEventListener('click', () => {
      const today = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formatted = today.toLocaleDateString('en-GB', options);
      submissionDateInput.value = formatted;
      state.submissionDate = formatted;
      saveAndRender();
    });

    // Add Dynamic Line Buttons
    document.getElementById('btnAddSubmittedBy').addEventListener('click', () => {
      state.submittedBy.push('New Detail Line');
      renderDynamicList('submittedBy', state.submittedBy, submittedByListContainer);
      saveAndRender();
    });

    document.getElementById('btnAddSubmittedTo').addEventListener('click', () => {
      state.submittedTo.push('New Detail Line');
      renderDynamicList('submittedTo', state.submittedTo, submittedToListContainer);
      saveAndRender();
    });

    tableHeaderBgColorInput.addEventListener('input', (e) => {
      state.accentColor = e.target.value;
      updateActiveSwatch(e.target.value);
      saveAndRender();
    });

    fontFamilySelect.addEventListener('change', (e) => {
      state.fontFamily = e.target.value;
      saveAndRender();
    });

    paperMarginInput.addEventListener('input', (e) => {
      document.getElementById('paperMarginVal').textContent = e.target.value;
      saveAndRender();
    });

    tableBorderWidthInput.addEventListener('input', (e) => {
      document.getElementById('tableBorderVal').textContent = e.target.value;
      saveAndRender();
    });

    showPageBorderCheckbox.addEventListener('change', () => {
      saveAndRender();
    });

    // Logo Size Range Slider
    logoSizeInput.addEventListener('input', (e) => {
      const px = e.target.value;
      document.getElementById('logoSizeVal').textContent = px;
      viewLogo.style.height = `${px}px`;
    });

    // App Header Actions
    document.getElementById('btnPrint').addEventListener('click', () => {
      window.print();
    });

    document.getElementById('btnDownloadPng').addEventListener('click', exportPng);

    document.getElementById('btnReset').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all fields to default SAU template data?')) {
        state = JSON.parse(JSON.stringify(PRESETS.sau));
        presetSelect.value = 'sau';
        populateFormFromState();
        saveAndRender();
      }
    });

    document.getElementById('btnThemeToggle').addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      const icon = document.querySelector('#btnThemeToggle i');
      if (document.body.classList.contains('theme-light')) {
        icon.className = 'fa-solid fa-sun';
      } else {
        icon.className = 'fa-solid fa-moon';
      }
    });

    // Zoom Controls
    document.getElementById('btnZoomIn').addEventListener('click', () => setZoom(currentZoom + 10));
    document.getElementById('btnZoomOut').addEventListener('click', () => setZoom(currentZoom - 10));
    document.getElementById('btnZoomFit').addEventListener('click', fitZoomToStage);
  }

  // Zoom Handler
  function setZoom(val) {
    currentZoom = Math.max(40, Math.min(150, val));
    coverPaper.style.transform = `scale(${currentZoom / 100})`;
    document.getElementById('zoomLevelText').textContent = `${Math.round(currentZoom)}%`;
  }

  function fitZoomToStage() {
    const stage = document.getElementById('stageViewport');
    const availableWidth = stage.clientWidth - 80;
    const paperWidth = coverPaper.offsetWidth;
    if (paperWidth > 0) {
      const fitRatio = (availableWidth / paperWidth) * 100;
      setZoom(fitRatio);
    }
  }

  // Color Swatch Handler
  function setupColorSwatches() {
    const swatches = document.querySelectorAll('.swatch');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        const color = swatch.getAttribute('data-color');
        tableHeaderBgColorInput.value = color;
        state.accentColor = color;
        updateActiveSwatch(color);
        saveAndRender();
      });
    });
  }

  function updateActiveSwatch(color) {
    document.querySelectorAll('.swatch').forEach(s => {
      if (s.getAttribute('data-color').toLowerCase() === color.toLowerCase()) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  }

  // Logo Upload & Restore Setup
  function setupLogoUpload() {
    logoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          state.logo = event.target.result;
          document.getElementById('logoPreview').src = state.logo;
          viewLogo.src = state.logo;
          viewLogoWrapper.style.display = 'flex';
          saveAndRender();
        };
        reader.readAsDataURL(file);
      }
    });

    document.getElementById('btnRemoveLogo').addEventListener('click', () => {
      state.logo = null;
      viewLogoWrapper.style.display = 'none';
      saveAndRender();
    });

    document.getElementById('btnRestoreSauLogo').addEventListener('click', () => {
      state.logo = 'StAU_logo_main.jpeg';
      document.getElementById('logoPreview').src = 'StAU_logo_main.jpeg';
      viewLogo.src = 'StAU_logo_main.jpeg';
      viewLogoWrapper.style.display = 'flex';
      saveAndRender();
    });
  }

  // PNG Export Function
  function exportPng() {
    // Temporarily reset zoom scale for pixel-perfect render
    const origTransform = coverPaper.style.transform;
    coverPaper.style.transform = 'none';

    html2canvas(coverPaper, {
      scale: 2, // High resolution 2x DPI
      useCORS: true,
      logging: false
    }).then(canvas => {
      coverPaper.style.transform = origTransform;
      const link = document.createElement('a');
      link.download = `CoverPage_${state.assignmentTitle.replace(/[^a-z0-9]/gi, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }).catch(err => {
      coverPaper.style.transform = origTransform;
      alert('Could not export PNG image. Please try downloading as PDF / Print instead.');
    });
  }

  // Helper Utility: Escape HTML text to prevent XSS
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Run initialization
  init();
});
