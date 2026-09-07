  // ============================================================
  //  SPREAD CONTENT
  //  Each spread has: theme, left html, right html
  // ============================================================
  const spreads = [
    // 0 — ABOUT (landing spread)
    {
      theme: 'about',
      key: 'about',
      label: 'about',
      left: `
        <div class="tape" style="width:110px; top:24px; left:32px; transform:rotate(-6deg); --tape-color: rgba(214,162,60,0.75);"></div>
        <div class="tape" style="width:110px; top:24px; right:52px; transform:rotate(4deg); --tape-color: rgba(196,106,70,0.65);"></div>
        <div class="eyebrow">about</div>
        <h1 class="page-title">hi, i'm<br>Hari Priya ✿</h1>
        <p class="body-text" style="margin-top:6px; max-width: 92%;">
          i'm a Rutgers student combining computer science, information technology,
          design, and visual effects. this scrapbook holds the work i'm building at
          the intersection of creative ideas and technical systems.
        </p>
        <div style="display:flex; align-items:flex-start; gap:22px; margin-top: 22px;">
          <div class="polaroid" style="width: 150px; flex-shrink:0;">
            <div class="polaroid-img" style="height: 170px;">add portrait.jpg</div>
            <div class="polaroid-caption">— hi that's me</div>
          </div>
          <div style="padding-top: 14px;">
            <div class="handwritten" style="transform: rotate(-2deg);">
              currently:<br>
              <span style="color: var(--burgundy);">building creative-tech<br>projects + seeking internships ↓</span>
            </div>
          </div>
        </div>
        <div class="signature" style="margin-top: auto; align-self: flex-start;">— Hari Priya</div>
        <div class="pin" style="top: 18px; right: 20px;"></div>
      `,
      right: `
        <div class="eyebrow">what i do</div>
        <h2 class="page-title" style="font-size: clamp(26px,3.2vw,38px);">a little bit of<br>everything</h2>

        <div style="margin-top: 16px;">
          <div class="discipline-row">
            <div class="discipline-num">01</div>
            <div class="discipline-body">
              <div class="discipline-title">UI / UX Design</div>
              <div class="discipline-sub">research-led interfaces and prototypes</div>
            </div>
            <span class="sticker blue">figma</span>
          </div>
          <div class="discipline-row">
            <div class="discipline-num">02</div>
            <div class="discipline-body">
              <div class="discipline-title">Frontend Development</div>
              <div class="discipline-sub">accessible experiences built for the web</div>
            </div>
            <span class="sticker green">react</span>
          </div>
          <div class="discipline-row">
            <div class="discipline-num">03</div>
            <div class="discipline-body">
              <div class="discipline-title">Software Engineering</div>
              <div class="discipline-sub">Python, Java, databases, and applied AI</div>
            </div>
            <span class="sticker mustard">python</span>
          </div>
          <div class="discipline-row">
            <div class="discipline-num">04</div>
            <div class="discipline-body">
              <div class="discipline-title">Houdini · VFX</div>
              <div class="discipline-sub">crowd simulation and procedural workflows</div>
            </div>
            <span class="sticker dark">houdini</span>
          </div>
        </div>

        <div class="flip-hint">turn the page →</div>
      `
    },

    // 1 — UI/UX
    {
      theme: 'uiux',
      key: 'work',
      label: 'work — ui/ux',
      left: `
        <div class="eyebrow">selected work — 01</div>
        <h1 class="page-title">ui / ux<br>design</h1>
        <p class="body-text" style="margin-top: 6px; max-width: 90%;">
          <strong style="color:var(--ink);">Cognify</strong> is a browser accessibility tool
          designed for people with dyslexia, ADHD, and ESL needs. I led the UI/UX work,
          shaping a clear interface around a broad set of reading and focus tools.
        </p>
        <div class="photo" style="width: 100%; height: 210px; margin-top: 18px;">add Cognify interface screenshot</div>
        <div style="margin-top: 12px; display:flex; gap: 6px; flex-wrap: wrap;">
          <span class="sticker blue">figma</span>
          <span class="sticker mustard">user research</span>
          <span class="sticker green">prototyping</span>
        </div>
      `,
      right: `
        <div class="eyebrow">process</div>
        <h2 class="subhead">from idea → award-winning prototype</h2>
        <div style="display:flex; gap: 14px; margin-top: 10px;">
          <div class="photo" style="width: 48%; height: 120px; transform: rotate(-2deg);">add early prototype</div>
          <div class="photo" style="width: 48%; height: 120px; transform: rotate(2deg);">add final interface</div>
        </div>
        <p class="body-text" style="margin-top: 16px;">
          <strong style="color: var(--ink);">Role:</strong> UI/UX lead + frontend contributor<br>
          <strong style="color: var(--ink);">Built:</strong> 3 interactive Figma prototypes<br>
          <strong style="color: var(--ink);">Features:</strong> spacing, filters, Pomodoro,
          text-to-speech, AI summaries, and translation
        </p>
        <div class="handwritten" style="margin-top: auto; color: var(--burgundy); transform: rotate(-2deg);">
          → MLH “Best Failure to Launch” at HackRU
        </div>
        <div class="paperclip" style="top: 20px; right: 40px;"></div>
      `
    },

    // 2 — FRONTEND
    {
      theme: 'frontend',
      key: 'work',
      label: 'work — frontend',
      left: `
        <div class="eyebrow">selected work — 02</div>
        <h1 class="page-title">design<br>fellowship</h1>
        <p class="body-text" style="margin-top: 6px; max-width: 90%;">
          During the Creative Labs Fellowship, I worked on a 10-week team product
          from early research through a polished prototype and shared design system.
        </p>
        <div class="photo" style="width: 100%; height: 200px; margin-top: 18px;">add final fellowship mockup</div>
        <div style="margin-top: 12px; display:flex; gap: 6px; flex-wrap: wrap;">
          <span class="sticker green">prototyping</span>
          <span class="sticker mustard">user research</span>
          <span class="sticker terracotta">design systems</span>
        </div>
      `,
      right: `
        <div class="eyebrow">my process</div>
        <h2 class="subhead">research → structure → prototype</h2>
        <div class="code-chip" style="margin-top: 10px;">
          01 &nbsp; interviews + think-aloud testing<br>
          02 &nbsp; personas + user flows<br>
          03 &nbsp; wireframes + design system<br>
          04 &nbsp; interactive prototype + iteration
        </div>
        <p class="body-text" style="margin-top: 14px;">
          I learned how to turn messy feedback into focused design decisions,
          document reusable components, and communicate rationale to collaborators.
        </p>
        <div class="handwritten" style="margin-top: auto; transform: rotate(-1.5deg); color: var(--sage);">
          team size → 5 collaborators
        </div>
      `
    },

    // 3 — SWE
    {
      theme: 'swe',
      key: 'work',
      label: 'work — swe',
      left: `
        <div class="eyebrow">selected work — 03</div>
        <h1 class="page-title">engineering<br>+ applied AI</h1>
        <p class="body-text" style="margin-top: 6px; max-width: 90%;">
          Through CodePath and the Blueprint Backend Fellowship, I have been building
          practical foundations in APIs, databases, backend systems, and AI-powered products.
        </p>
        <div class="photo" style="width: 100%; height: 170px; margin-top: 18px;">add project architecture or demo</div>
        <div style="margin-top: 12px; display:flex; gap: 6px; flex-wrap: wrap;">
          <span class="sticker mustard">python</span>
          <span class="sticker dark">sql</span>
          <span class="sticker terracotta">generative AI</span>
        </div>
      `,
      right: `
        <div class="eyebrow">approach</div>
        <h2 class="subhead">problem → approach → result</h2>
        <div class="body-text" style="margin-top: 12px; line-height: 1.85;">
          <strong style="color: var(--ink); font-family: var(--font-hand-2); font-size: 15px;">The problem</strong><br>
          Build software that connects a usable interface to reliable application logic.<br><br>

          <strong style="color: var(--ink); font-family: var(--font-hand-2); font-size: 15px;">The approach</strong><br>
          Practice through Flask/SQLite projects, API integration, classification,
          prompt design, and model evaluation.<br><br>

          <strong style="color: var(--ink); font-family: var(--font-hand-2); font-size: 15px;">The result</strong><br>
          A growing toolkit across Java, Python, web development, SQL, and applied AI.
        </div>
        <div class="handwritten" style="margin-top: auto; color: var(--burgundy); transform: rotate(-2deg);">
          current focus → full-stack projects with thoughtful UX
        </div>
      `
    },

    // 4 — HOUDINI
    {
      theme: 'houdini',
      key: 'work',
      label: 'work — houdini',
      left: `
        <div class="eyebrow">selected work — 04</div>
        <h1 class="page-title">houdini<br>· vfx</h1>
        <p class="body-text" style="margin-top: 6px; max-width: 90%;">
          I am learning Houdini through crowd simulations and procedural workflows,
          connecting my programming background with my goal of working in VFX and animation technology.
        </p>
        <div class="video-frame" style="width: 100%; height: 230px; margin-top: 18px;">
          <div class="play-btn">▶</div>
          add crowd simulation playblast
        </div>
        <div style="margin-top: 12px; display:flex; gap: 6px; flex-wrap: wrap;">
          <span class="sticker dark">houdini</span>
          <span class="sticker terracotta">crowds</span>
          <span class="sticker mustard">procedural VFX</span>
        </div>
      `,
      right: `
        <div class="eyebrow">breakdown</div>
        <h2 class="subhead">crowd system breakdown</h2>
        <div class="video-frame" style="width: 100%; height: 180px; margin-top: 10px;">
          <div class="play-btn">▶</div>
          add node graph or terrain test
        </div>
        <p class="body-text" style="margin-top: 14px;">
          <strong style="color: var(--ink);">Techniques:</strong> crowd sourcing, states,
          terrain projection, and agent behavior<br>
          <strong style="color: var(--ink);">Program:</strong> Academy Software Foundation Summer Learning Program<br>
          <strong style="color: var(--ink);">Goal:</strong> creative technology and Pipeline TD work
        </p>
      `
    },

    // 5 — RESUME
    {
      theme: 'resume',
      key: 'resume',
      label: 'resume',
      left: `
        <div class="eyebrow">resume — the paper trail</div>
        <h1 class="page-title">experience</h1>

        <div style="margin-top: 12px;">
          <div class="timeline-item">
            <div class="timeline-role">CodePath Applied AI Participant</div>
            <div class="timeline-where">
              <span>CodePath</span>
              <span>Summer 2026</span>
            </div>
            <p class="body-text" style="margin-top: 6px; font-size: 12.5px;">
              Built skills in prompt engineering, model evaluation, APIs, and applied generative AI.
            </p>
          </div>
          <div class="timeline-item">
            <div class="timeline-role">Summer Learning Program Mentee</div>
            <div class="timeline-where">
              <span>Academy Software Foundation</span>
              <span>Jun–Jul 2026</span>
            </div>
            <p class="body-text" style="margin-top: 6px; font-size: 12.5px;">
              Selected for a 20-person cohort focused on open-source software and VFX careers.
            </p>
          </div>
          <div class="timeline-item">
            <div class="timeline-role">Backend Software Engineering Fellow</div>
            <div class="timeline-where">
              <span>Blueprint</span>
              <span>Feb–May 2026</span>
            </div>
            <p class="body-text" style="margin-top: 6px; font-size: 12.5px;">
              Practiced Python, SQL, APIs, databases, and backend application development.
            </p>
          </div>
        </div>
        <div class="paperclip" style="top: 26px; right: 28px;"></div>
      `,
      right: `
        <div class="eyebrow">education & skills</div>
        <h2 class="subhead">education</h2>
        <div class="timeline-item">
          <div class="timeline-role">Computer Science + Information Technology & Informatics</div>
          <div class="timeline-where">
            <span>Rutgers University–New Brunswick</span>
            <span>Expected 2028</span>
          </div>
        </div>

        <h2 class="subhead" style="margin-top: 20px;">skills</h2>
        <div style="display:flex; gap: 6px; flex-wrap: wrap; margin-top: 6px;">
          <span class="sticker blue">Figma</span>
          <span class="sticker green">HTML / CSS</span>
          <span class="sticker mustard">Python</span>
          <span class="sticker dark">Java</span>
          <span class="sticker terracotta">SQL</span>
          <span class="sticker burgundy">Generative AI</span>
        </div>

        <h2 class="subhead" style="margin-top: 20px;">tools i live in</h2>
        <p class="body-text">Figma · VS Code · Houdini · Maya · Git/GitHub · Adobe Creative Cloud</p>

        <p class="body-text" style="margin-top:18px;"><strong style="color:var(--ink);">Also:</strong> Dining Services student worker · WiCS member · HackHERS volunteer · Creative Labs</p>
      `
    },

    // 6 — CONTACT
    {
      theme: 'contact',
      key: 'contact',
      label: 'contact',
      left: `
        <div class="eyebrow">contact</div>
        <h1 class="page-title" style="color:#fff;">say hi ✿</h1>
        <p class="body-text" style="margin-top: 6px;">
          thanks for flipping through. i'm always happy to talk about design,
          software, VFX, or projects that combine all three. easiest way to reach me:
        </p>

        <div style="margin-top: 24px;">
          <div class="handwritten" style="font-size: 28px; color: #fff;">
            <a href="mailto:ht422@scarletmail.rutgers.edu" style="color:var(--burgundy);">ht422@scarletmail.rutgers.edu</a>
          </div>
          <div class="body-text" style="margin-top: 12px;">
            Add your LinkedIn and GitHub URLs here before publishing.
          </div>
        </div>

        <div class="handwritten" style="margin-top: auto; color: rgba(255,255,255,0.85); transform: rotate(-2deg);">
          based in New Jersey<br>
          open to internships and creative-tech opportunities
        </div>
      `,
      right: `
        <div class="eyebrow" style="color:rgba(255,255,255,0.7);">back cover</div>
        <h2 class="page-title" style="color: #fff;">the end.</h2>
        <p class="body-text">
          this portfolio is built as an interactive HTML scrapbook.
          it will keep growing as I finish new design, software, and VFX projects.
        </p>

        <div class="tape" style="width: 120px; top: 40%; right: 20%; transform: rotate(-12deg); --tape-color: rgba(255,255,255,0.4);"></div>

        <div style="margin-top: auto; text-align: right;">
          <div class="signature" style="font-size: 34px;">— Hari Priya</div>
          <div class="body-text" style="margin-top: 6px; opacity: 0.7;">© 2026</div>
        </div>
      `
    }
  ];

  // ============================================================
  //  DOM refs
  // ============================================================
  const stage      = document.querySelector('.stage');
  const boardLeft  = document.getElementById('boardLeft');
  const boardRight = document.getElementById('boardRight');
  const flipLeaf   = document.getElementById('flipLeaf');
  const leafFront  = document.getElementById('leafFront');
  const leafBack   = document.getElementById('leafBack');
  const btnPrev    = document.getElementById('btnPrev');
  const btnNext    = document.getElementById('btnNext');
  const progressEl = document.getElementById('progress');
  const navLinks   = document.querySelectorAll('.site-nav a');
  const brandHome  = document.getElementById('brandHome');

  const TOTAL = spreads.length;
  let currentSpread = 0;
  let isFlipping = false;

  // Scale the complete object as one unit so its internal layout never reflows.
  function fitBookToViewport(){
    const horizontalRoom = Math.max(0, window.innerWidth - 48);
    const verticalRoom = Math.max(0, window.innerHeight - 132);
    const scale = 0.88 * Math.min(
      1,
      horizontalRoom / 1448,
      verticalRoom / 825
    );

    document.documentElement.style.setProperty(
      '--book-scale',
      Math.max(0, scale).toFixed(4)
    );
  }

  // Drag the notebook as one unit while leaving its page and tab controls usable.
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let workspaceOffsetX = 0;
  let workspaceOffsetY = 0;

  function setWorkspaceOffset(nextX, nextY){
    const workspace = document.querySelector('.craft-workspace');
    const maxX = Math.max(0, (workspace.offsetWidth - stage.clientWidth) / 2);
    const maxY = Math.max(0, (workspace.offsetHeight - stage.clientHeight) / 2);
    workspaceOffsetX = Math.min(maxX, Math.max(-maxX, nextX));
    workspaceOffsetY = Math.min(maxY, Math.max(-maxY, nextY));
    document.documentElement.style.setProperty('--workspace-x', `${workspaceOffsetX}px`);
    document.documentElement.style.setProperty('--workspace-y', `${workspaceOffsetY}px`);
  }

  function isInteractiveTarget(target){
    return target.closest('button, a, input, textarea, select, video');
  }

  stage.addEventListener('pointerdown', event => {
    if (event.button !== 0 || isInteractiveTarget(event.target)) return;

    isDragging = true;
    dragStartX = event.clientX - workspaceOffsetX;
    dragStartY = event.clientY - workspaceOffsetY;
    stage.classList.add('is-dragging');
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener('pointermove', event => {
    if (!isDragging) return;

    setWorkspaceOffset(event.clientX - dragStartX, event.clientY - dragStartY);
  });

  function stopDragging(event){
    if (!isDragging) return;

    isDragging = false;
    stage.classList.remove('is-dragging');
    if (stage.hasPointerCapture(event.pointerId)) {
      stage.releasePointerCapture(event.pointerId);
    }
  }

  stage.addEventListener('pointerup', stopDragging);
  stage.addEventListener('pointercancel', stopDragging);

  // ============================================================
  //  Render helpers
  // ============================================================
  function applyBoard(el, side, i){
    el.className = `board board-${side} theme-${spreads[i].theme}`;
    el.innerHTML = spreads[i][side];
  }
  function applyFace(el, face, side, i){
    el.className = `face ${face} theme-${spreads[i].theme}`;
    el.innerHTML = spreads[i][side];
  }
  function updateNav(){
    const s = spreads[currentSpread];
    progressEl.textContent = `${s.label} — ${currentSpread + 1}/${TOTAL}`;
    btnPrev.disabled = currentSpread === 0;
    btnNext.disabled = currentSpread === TOTAL - 1;
    navLinks.forEach(a => {
      const t = parseInt(a.dataset.target, 10);
      // highlight the nav item whose key group we're in
      const linkKey = spreads[t] ? spreads[t].key : null;
      a.classList.toggle('active', s.key === linkKey);
    });
  }

  function returnHome(){
    if (isFlipping) return;
    currentSpread = 0;
    setWorkspaceOffset(0, 0);
    applyBoard(boardLeft, 'left', currentSpread);
    applyBoard(boardRight, 'right', currentSpread);
    updateNav();
  }

  // ============================================================
  //  Flip animation (single animating leaf; no ghost pages)
  // ============================================================
  function flipTo(target){
    if (isFlipping) return;
    if (target === currentSpread) return;
    if (target < 0 || target >= TOTAL) return;

    isFlipping = true;
    const src = currentSpread;
    const forward = target > src;

    // Configure the animating leaf so its two faces show:
    //   - what's leaving (visible now)
    //   - what's arriving (visible when flip finishes)
    if (forward) {
      applyFace(leafFront, 'front', 'right', src);     // right page leaving
      applyFace(leafBack,  'back',  'left',  target);  // left page arriving

      // Board that will be REVEALED at end (right side) — set now, hidden by leaf.front
      applyBoard(boardRight, 'right', target);
    } else {
      applyFace(leafFront, 'front', 'right', target);  // right page arriving
      applyFace(leafBack,  'back',  'left',  src);     // left page leaving

      // Board that will be REVEALED at end (left side) — set now, hidden by leaf.back
      applyBoard(boardLeft, 'left', target);
    }

    const startRot = forward ? 0 : -180;
    const endRot   = forward ? -180 : 0;

    flipLeaf.style.transform = `rotateY(${startRot}deg)`;
    flipLeaf.style.display = 'block';
    flipLeaf.classList.add('is-flipping');

    // wait a frame so the initial transform paints
    requestAnimationFrame(() => {
      const anim = flipLeaf.animate(
        [
          { transform: `rotateY(${startRot}deg)` },
          { transform: `rotateY(${endRot}deg)` }
        ],
        { duration: 900, easing: 'cubic-bezier(0.55, 0.05, 0.25, 1)', fill: 'forwards' }
      );

      anim.onfinish = () => {
        // Update the OTHER board (currently hidden under the leaf's landing face)
        if (forward) {
          applyBoard(boardLeft, 'left', target);
        } else {
          applyBoard(boardRight, 'right', target);
        }

        // one frame later, hide the leaf so exposed boards take over cleanly
        requestAnimationFrame(() => {
          flipLeaf.style.display = 'none';
          flipLeaf.classList.remove('is-flipping');
          currentSpread = target;
          updateNav();
          isFlipping = false;
        });
      };
    });
  }

  // ============================================================
  //  Event wiring
  // ============================================================
  document.querySelectorAll('.turn-zone, .page-side-zone').forEach(z => {
    z.addEventListener('click', () => {
      if (z.dataset.dir === 'next') flipTo(currentSpread + 1);
      else flipTo(currentSpread - 1);
    });
  });
  btnNext.addEventListener('click', () => flipTo(currentSpread + 1));
  btnPrev.addEventListener('click', () => flipTo(currentSpread - 1));
  brandHome.addEventListener('click', returnHome);

  navLinks.forEach(a => {
    a.addEventListener('click', () => {
      flipTo(parseInt(a.dataset.target, 10));
    });
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') flipTo(currentSpread + 1);
    if (e.key === 'ArrowLeft')  flipTo(currentSpread - 1);
  });
  window.addEventListener('resize', () => {
    fitBookToViewport();
    setWorkspaceOffset(workspaceOffsetX, workspaceOffsetY);
  }, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      fitBookToViewport();
      setWorkspaceOffset(workspaceOffsetX, workspaceOffsetY);
    }, { passive: true });
  }

  // ============================================================
  //  Init — book opens directly on About
  // ============================================================
  fitBookToViewport();
  applyBoard(boardLeft,  'left',  currentSpread);
  applyBoard(boardRight, 'right', currentSpread);
  updateNav();
