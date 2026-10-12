(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EMAIL = 'aaliraza2010@gmail.com';

  /* Prevent pinch-zoom on mobile */
  document.addEventListener('gesturestart', function (e) { e.preventDefault(); }, { passive: false });
  document.addEventListener('gesturechange', function (e) { e.preventDefault(); }, { passive: false });
  document.addEventListener('gestureend', function (e) { e.preventDefault(); }, { passive: false });
  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (e) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
  }, { passive: false });


  /* ================= DATA ================= */
  var STAGES = [
    { id: 'progress', name: 'In Progress' },
    { id: 'live', name: 'Live' },
    { id: 'delivered', name: 'Delivered' },
    { id: 'next', name: 'Up Next' }
  ];

  var PROJECTS = [
    { id: 'astra', stage: 'live', name: 'Astra Driving School', client: 'Manchester, UK', tags: [['Live Client', 'green'], ['9+ workflows', 'blue'], ['Ticketing', 'gray']] },
    { id: 'cih', stage: 'live', name: 'CIH Urology Website', client: 'Capital International Hospital, Islamabad', tags: [['Live Website', 'green'], ['Built in GHL', 'blue'], ['Custom Code', 'gray']] },
    { id: 'dealer', stage: 'progress', name: 'Car Dealership CRM Snapshot', client: 'Automotive', tags: [['Snapshot', 'purple'], ['Voice AI', 'blue'], ['Funnel', 'gray']] },
    { id: 'raza', stage: 'delivered', name: 'Raza & Associates', client: 'Legal intake automation', tags: [['Portfolio Build', 'amber'], ['Conversation AI', 'blue']] },
    { id: 'veclar', stage: 'delivered', name: 'Instant Lead Response', client: 'Veclar Technologies', tags: [['Agency Work', 'gray'], ['SMS', 'blue']] },
    { id: 'you', stage: 'next', name: 'Your project', client: 'Let us talk', tags: [['Discovery call', 'blue']], dashed: true }
  ];

  var DETAIL = {
    astra: {
      tag: ['Live Client · Manchester, UK', 'green'],
      sum: 'A live GoHighLevel system handling customer inquiries across two departments, built from scratch.',
      built: [
        '19+ interconnected workflows handling 3,000+ monthly inquiries',
        'Two-department ticket and routing pipeline with custom fields',
        'Hour-level stagnation alerts using Wait and If/Else steps, because native Stale Opportunities only works at day level',
        'No-reply alert automations so quiet conversations are never missed',
        'Call routing troubleshooting and bulk contact management'
      ],
      stack: ['GoHighLevel', 'Workflows', 'Pipelines', 'Custom Fields', 'If/Else Logic'],
      out: ['Inquiries reach the correct department automatically', 'Staff are alerted when a ticket stalls or a customer goes quiet'],
      flow: 'stale'
    },
    cih: {
      tag: ['Live Website · Islamabad', 'green'],
      sum: 'A multi-page medical website for a urology clinic, built inside GoHighLevel with custom HTML, CSS and JavaScript.',
      site: { url: 'https://cihurology.com', label: 'cihurology.com', head: 'Clear diagnosis. Focused treatment. Better outcomes.' },
      built: [
        'Full multi-page site on its own domain: Home, About, Team, Blog, Contact and nine service pages',
        'Home page with hero slider, services, doctor profile, care process, symptoms guide, FAQ and map footer',
        'Services dropdown linking to every service page, structured for local SEO',
        'WhatsApp booking buttons with pre-filled messages, plus click-to-call',
        'Meta titles and descriptions, canonical tags and Google Tag Manager',
        'Static site converted into scoped GoHighLevel custom code, with full-width and sticky navigation fixes for the page builder'
      ],
      stack: ['GoHighLevel Websites', 'Custom Code', 'HTML / CSS / JS', 'WhatsApp Click-to-Chat', 'SEO', 'Google Tag Manager'],
      out: ['Live at cihurology.com', 'Patients can book by WhatsApp or phone from any page']
    },
    dealer: {
      tag: ['Snapshot Build · Automotive', 'purple'],
      sum: 'A reusable GoHighLevel snapshot covering the dealership customer journey.',
      built: [
        'Sales, Service and Trade-In pipelines',
        'Lead-capture website and funnel',
        'Email marketing automations',
        'Calendar configured for the Voice AI agent',
        'Review request automation',
        'Custom fields and forms packaged into the snapshot',
        'Detailed technical breakdown document for the client'
      ],
      stack: ['GoHighLevel Snapshots', 'Funnels', 'Voice AI', 'Email Automation', 'Calendars'],
      out: ['One deployable snapshot instead of manual setup per account', 'Leads, service bookings and reviews handled in one system'],
      flow: 'review'
    },
    raza: {
      tag: ['Portfolio Build · Legal Intake', 'amber'],
      sum: 'An end-to-end legal intake system that qualifies, routes, books and signs up new clients.',
      built: [
        'Conversation AI with urgency detection and urgency-based routing',
        'If/Else branching to separate case types',
        'Case-type-specific Round Robin calendars for consultations',
        'Document collection reminders with escalation ladders',
        'E-signature retainer triggers',
        'Separate post-consultation review request workflow'
      ],
      stack: ['Conversation AI', 'Round Robin Calendars', 'E-Signatures', 'Workflows', 'If/Else Logic'],
      out: ['Urgent matters are identified and prioritised automatically', 'Intake, scheduling, documents and retainers run without manual chasing'],
      flow: 'legal'
    },
    veclar: {
      tag: ['Agency Work · Veclar Technologies', 'gray'],
      sum: 'Automation that replies to every inbound text and missed call within seconds.',
      built: [
        'Instant automatic reply to every inbound text and missed call for the in-house sales team',
        'Support workflows that auto-flag unresponsive leads and unresolved queries',
        'Sub-account configuration with pipelines, custom fields and user permissions',
        'GoHighLevel forms connected to live ad campaigns, routing leads into marketing funnels'
      ],
      stack: ['GoHighLevel', 'SMS Automation', 'Missed Call Text-Back', 'Forms', 'Ad Integrations'],
      out: ['Meaningfully reduced lead response time', 'Less manual outreach and tracking for sales and support teams'],
      flow: 'mctb'
    },
    you: {
      tag: ['Up Next · Discovery', 'blue'],
      sum: 'Tell me where leads are slipping through and I will map the system that catches them.',
      built: ['Short discovery call to understand your funnel', 'Workflow map of the lead journey', 'Build, test and handover'],
      stack: ['GoHighLevel', 'Workflows', 'Funnels', 'AI Chatbots', 'Integrations'],
      out: ['Faster lead response', 'Fewer manual follow-ups', 'A system your team can actually use'],
      mail: true
    }
  };

  /* Workflow steps. type: trigger | action | wait | if. An "if" step holds br: [{l, c, steps}] */
  function S(t, h, d, br) { return { t: t, h: h, d: d, br: br }; }
  function B(l, c, steps) { return { l: l, c: c, steps: steps }; }

  var FLOWS = {
    engine: {
      name: 'Omnichannel Lead Nurture & Booking Engine',
      used: 'Lead generation builds',
      steps: [
        S('trigger', 'Facebook Lead Ad Submitted', 'A new lead arrives from a connected ad form'),
        S('action', 'Create / Update Contact', 'Source and campaign tags are applied'),
        S('action', 'Create Opportunity', 'Lead is placed in the Sales pipeline at New Lead'),
        S('action', 'Send Instant SMS + Email', 'First response goes out within seconds'),
        S('action', 'Conversation AI', 'Qualifies interest, budget and timeline in chat'),
        S('if', 'Lead Score', 'What did the AI find?', [
          B('Hot', 'red', [
            S('action', 'Notify Sales Rep', 'SMS and app notification'),
            S('action', 'Voice AI Call', 'Calls the lead and offers a booking slot'),
            S('wait', 'Wait 15 minutes', 'Give the lead time to book'),
            S('if', 'Appointment booked?', 'Check the calendar', [
              B('Yes', 'green', [
                S('action', 'Move to Appointment Set', 'Opportunity stage updated'),
                S('action', 'Send Confirmation', 'Reminders at 24 hours and 1 hour')
              ]),
              B('No', 'amber', [
                S('action', 'Create Call Task', 'Assigned to the rep with a due time'),
                S('action', 'Send Booking Link', 'SMS with the calendar link')
              ])
            ])
          ]),
          B('Warm', 'amber', [
            S('action', 'Add to Nurture Sequence', 'Alternating email and SMS'),
            S('wait', 'Wait 2 days', 'Let the sequence run'),
            S('if', 'Replied or clicked?', 'Engagement check', [
              B('Yes', 'green', [
                S('action', 'Re-score as Hot', 'Moves into the Hot path')
              ]),
              B('No', 'gray', [
                S('action', 'Send Final Offer', 'Last message in the sequence'),
                S('wait', 'Wait 5 days', 'Final pause'),
                S('action', 'Move to Cold', 'Opportunity stage updated')
              ])
            ])
          ]),
          B('Cold', 'gray', [
            S('action', 'Tag: Long-term Nurture', 'Removed from active sales follow-up'),
            S('action', 'Monthly Newsletter', 'Stays in touch at low frequency'),
            S('wait', 'Wait 30 days', 'Long pause before re-engaging'),
            S('action', 'Re-engagement SMS', 'Checks if timing has changed')
          ])
        ])
      ]
    },
    mctb: {
      name: 'Missed Call Text-Back',
      used: 'Instant Lead Response',
      steps: [
        S('trigger', 'Missed Call', 'An inbound call is not answered'),
        S('action', 'Send SMS', 'Instant text reply sent to the caller within seconds'),
        S('action', 'Create / Update Opportunity', 'Lead is placed in the sales pipeline'),
        S('action', 'Internal Notification', 'The sales team is alerted'),
        S('wait', 'Wait', 'Give the lead time to reply'),
        S('if', 'Did the lead reply?', 'Check for an inbound message', [
          B('Replied', 'green', [S('action', 'Move to Contacted', 'Opportunity stage updated')]),
          B('No reply', 'amber', [S('action', 'Create Call-back Task', 'Assigned to the sales team')])
        ])
      ]
    },
    stale: {
      name: 'Stagnation Alert (hour-level)',
      used: 'Astra Driving School',
      steps: [
        S('trigger', 'Opportunity Created', 'A new inquiry enters a department pipeline'),
        S('wait', 'Wait', 'Hours, not days. Native Stale Opportunities only supports day-level'),
        S('if', 'Still in the same stage?', 'Compare the current stage', [
          B('Still open', 'red', [S('action', 'Alert Department Owner', 'Internal notification with the ticket link')]),
          B('Moved on', 'green', [S('action', 'End Workflow', 'Nothing to do')])
        ])
      ]
    },
    legal: {
      name: 'Legal Intake and Urgency Routing',
      used: 'Raza & Associates',
      steps: [
        S('trigger', 'Inbound Conversation', 'A prospect contacts the firm'),
        S('action', 'Conversation AI', 'Qualifies the matter and detects urgency'),
        S('if', 'Is the matter urgent?', 'Urgency detected by the AI', [
          B('Urgent', 'red', [
            S('action', 'Alert the Team', 'Priority internal notification'),
            S('action', 'Book Priority Consultation', 'Case-type Round Robin calendar'),
            S('action', 'Request Documents', 'Reminders with an escalation ladder'),
            S('action', 'Send Retainer', 'E-signature retainer is triggered')
          ]),
          B('Standard', 'blue', [
            S('action', 'Send Calendar Link', 'Case-type specific booking page'),
            S('action', 'Request Documents', 'Reminders with an escalation ladder'),
            S('action', 'Send Retainer', 'E-signature retainer is triggered'),
            S('action', 'Request Review', 'Post-consultation review request')
          ])
        ])
      ]
    },
    review: {
      name: 'Review Request',
      used: 'Car Dealership Snapshot',
      steps: [
        S('trigger', 'Appointment Showed', 'Customer attended a sales or service visit'),
        S('wait', 'Wait', 'Short delay after the visit'),
        S('action', 'Send SMS', 'Review request with a direct link'),
        S('wait', 'Wait', 'A few days'),
        S('action', 'Send Email', 'Friendly reminder if no review has been left')
      ]
    }
  };

  var INTEG = [
    ['GH', 'GoHighLevel', 'CRM, pipelines, funnels, calendars, snapshots', true],
    ['AI', 'Conversation AI', 'Chatbots that qualify and route leads', true],
    ['VA', 'Voice AI', 'AI receptionist and calendar booking', true],
    ['SM', 'A2P SMS', 'Compliant messaging and large SMS campaigns', true],
    ['ZP', 'Zapier', 'Connect GHL to the rest of your stack', true],
    ['MK', 'Make', 'Multi-step scenarios and data routing', true],
    ['WH', 'Webhooks', 'Custom data flow between systems', true],
    ['FB', 'Facebook Lead Ads', 'Automatic lead capture and routing', true],
    ['JS', 'HTML / CSS / JS', 'Custom code inside GoHighLevel pages', false],
    ['RC', 'React', 'Frontend builds outside the CRM', false]
  ];

  var SITES = [
    {
      id: 'cih-home',
      name: 'CIH Urology',
      domain: 'cihurology.com',
      url: 'https://cihurology.com',
      blurb: 'Main multi-page medical website for Capital International Hospital, built in GoHighLevel with custom code.',
      tags: ['Live', 'GHL Website']
    },
    {
      id: 'dr-fazal',
      name: 'Dr Fazal Abbas',
      domain: 'Doctor page',
      url: 'https://cihurology.com/dr-fazal-abbas',
      blurb: 'Doctor profile page for Dr Fazal Abbas on the CIH Urology site.',
      tags: ['Live', 'Doctor page']
    },
    {
      id: 'dr-ayesha',
      name: 'Dr Ayesha Ashraf Cheema',
      domain: 'Doctor page',
      url: 'https://cihurology.com/dr-ayesha-ashraf-cheema',
      blurb: 'Doctor profile page for Dr Ayesha Ashraf Cheema.',
      tags: ['Live', 'Doctor page']
    },
    {
      id: 'dr-saima',
      name: 'Dr Saima Muhammad Ali',
      domain: 'Doctor page',
      url: 'https://cihurology.com/dr-saima-muhammad-ali',
      blurb: 'Doctor profile page for Dr Saima Muhammad Ali.',
      tags: ['Live', 'Doctor page']
    },
    {
      id: 'dr-shah',
      name: 'Dr Shah Hasan',
      domain: 'Doctor page',
      url: 'https://cihurology.com/dr-shah-hasan',
      blurb: 'Doctor profile page for Dr Shah Hasan.',
      tags: ['Live', 'Doctor page']
    },
    {
      id: 'dr-misbah',
      name: 'Dr Misbah',
      domain: 'Doctor page',
      url: 'https://cihurology.com/dr-misbah',
      blurb: 'Doctor profile page for Dr Misbah.',
      tags: ['Live', 'Doctor page']
    }
  ];

  /* ================= ROUTER ================= */
  var views = ['dashboard', 'conversations', 'opportunities', 'workflows', 'sites', 'integrations', 'email', 'phone'];
  var counted = false;

  function show(v) {
    if (views.indexOf(v) < 0) v = 'dashboard';
    $$('.gx-view').forEach(function (el) { el.classList.toggle('on', el.id === 'v-' + v); });
    $$('.gx-nav a').forEach(function (a) { a.classList.toggle('active', a.dataset.view === v); });
    if (location.hash !== '#' + v) history.replaceState(null, '', '#' + v);
    window.scrollTo(0, 0);
    if (v === 'dashboard') countUp();
    if (v === 'conversations') { var pill = $('.gx-pill'); if (pill) pill.style.display = 'none'; scrollThread(); }
    closeSide();
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-view]');
    if (t) { e.preventDefault(); show(t.dataset.view); }
  });

  /* ================= SIDEBAR TOGGLE ================= */
  var side = $('#gx-side'), sideOv = $('#gx-side-ov'), sideTog = $('#gx-side-toggle');
  var gxRoot = $('#gx');
  function isMobile() { return window.innerWidth <= 860; }
  function openSide() {
    if (!side) return;
    if (isMobile()) {
      side.classList.add('open');
      if (sideOv) sideOv.classList.add('open');
    } else if (gxRoot) {
      gxRoot.classList.remove('side-collapsed');
    }
  }
  function closeSide() {
    if (!side) return;
    if (isMobile()) {
      side.classList.remove('open');
      if (sideOv) sideOv.classList.remove('open');
    }
    /* desktop: do not auto-collapse on nav click */
  }
  function toggleSide() {
    if (isMobile()) {
      if (side.classList.contains('open')) closeSide();
      else openSide();
    } else if (gxRoot) {
      gxRoot.classList.toggle('side-collapsed');
    }
  }
  if (sideTog) {
    sideTog.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleSide();
    });
  }
  if (sideOv) sideOv.addEventListener('click', closeSide);
  var sideOpenBtn = $('#gx-side-open');
  if (sideOpenBtn) sideOpenBtn.addEventListener('click', openSide);

  /* ================= COUNT UP ================= */
  function countUp() {
    if (counted) return;
    counted = true;
    $$('[data-count]').forEach(function (el) {
      var end = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec || 0, 10);
      var suf = el.dataset.suffix || '', comma = el.dataset.comma;
      function fmt(n) {
        var s = n.toFixed(dec);
        if (comma) s = Number(s).toLocaleString('en-US');
        return s + suf;
      }
      if (reduce) { el.textContent = fmt(end); return; }
      var t0 = performance.now(), dur = 1100;
      (function tick(now) {
        var p = Math.min((now - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(end * eased);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  /* ================= KANBAN ================= */
  var board = $('#gx-board');
  var dragId = null, dragged = false;

  function chip(t) { return '<span class="gx-chip gx-' + t[1] + '">' + t[0] + '</span>'; }

  function renderBoard() {
    if (!board) return;
    board.innerHTML = STAGES.map(function (s) {
      var items = PROJECTS.filter(function (p) { return p.stage === s.id; });
      return '<div class="gx-col" data-stage="' + s.id + '"><div class="gx-col-h">' + s.name + '<span>' + items.length + '</span></div>' +
        items.map(function (p) {
          return '<div class="gx-opp' + (p.dashed ? ' dash' : '') + '" draggable="true" data-id="' + p.id + '" data-text="' + (p.name + ' ' + p.client + ' ' + p.tags.map(function (t) { return t[0]; }).join(' ')).toLowerCase() + '">' +
            '<h4>' + p.name + '</h4><small>' + p.client + '</small><div class="gx-tags">' + p.tags.map(chip).join('') + '</div>' +
            '<div class="gx-opp-f"><span class="gx-av">AR</span><span>View details →</span></div></div>';
        }).join('') + '</div>';
    }).join('');
    renderBars();
    applySearch();
  }

  if (board) {
    board.addEventListener('dragstart', function (e) {
      var c = e.target.closest('.gx-opp'); if (!c) return;
      dragId = c.dataset.id; dragged = true; c.classList.add('drag');
      e.dataTransfer.effectAllowed = 'move';
      try { e.dataTransfer.setData('text/plain', dragId); } catch (x) {}
    });
    board.addEventListener('dragend', function () {
      $$('.gx-opp.drag').forEach(function (c) { c.classList.remove('drag'); });
      $$('.gx-col.over').forEach(function (c) { c.classList.remove('over'); });
      setTimeout(function () { dragged = false; }, 50);
    });
    board.addEventListener('dragover', function (e) {
      var col = e.target.closest('.gx-col'); if (!col) return;
      e.preventDefault();
      $$('.gx-col.over').forEach(function (c) { if (c !== col) c.classList.remove('over'); });
      col.classList.add('over');
    });
    board.addEventListener('drop', function (e) {
      var col = e.target.closest('.gx-col'); if (!col || !dragId) return;
      e.preventDefault();
      var p = PROJECTS.filter(function (x) { return x.id === dragId; })[0];
      if (p) p.stage = col.dataset.stage;
      dragId = null;
      renderBoard();
    });
    board.addEventListener('click', function (e) {
      var c = e.target.closest('.gx-opp');
      if (c && !dragged) openDrawer(c.dataset.id);
    });
  }

  function renderBars() {
    var el = $('#gx-bars');
    if (!el) return;
    var max = Math.max.apply(null, STAGES.map(function (s) { return PROJECTS.filter(function (p) { return p.stage === s.id; }).length; })) || 1;
    el.innerHTML = STAGES.map(function (s) {
      var n = PROJECTS.filter(function (p) { return p.stage === s.id; }).length;
      return '<div class="gx-bar-row"><span>' + s.name + '</span><div class="gx-bar-t"><div class="gx-bar-f" style="width:' + (n / max * 100) + '%"></div></div><b>' + n + '</b></div>';
    }).join('');
  }

  /* ================= DRAWER ================= */
  var drawer = $('#gx-drawer'), ov = $('#gx-ov'), lastFocus = null;

  function list(a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; }

  function openDrawer(id) {
    var d = DETAIL[id], p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!d || !p) return;
    var btns = '', pre = '';
    if (d.site) {
      btns += '<a class="gx-btn gx-primary" href="' + d.site.url + '" target="_blank" rel="noopener">Visit ' + d.site.label + ' ↗</a>';
      pre = '<div class="gx-browser"><div class="gx-bb"><i></i><i></i><i></i><span>' + d.site.label + '</span></div>' +
        '<div class="gx-bbody"><small>CIH UROLOGY</small><h3>' + d.site.head + '</h3></div></div>';
    }
    if (d.flow) btns += '<button class="gx-btn gx-primary" data-flow="' + d.flow + '">Open related workflow</button>';
    if (d.mail) btns += '<a class="gx-btn gx-primary" href="mailto:' + EMAIL + '?subject=Project%20inquiry">Email me about your project</a>';
    $('#gx-db').innerHTML =
      '<h2>' + p.name + '</h2><p class="gx-lead">' + d.sum + '</p>' + pre +
      '<h5>What I built</h5>' + list(d.built) +
      '<h5>Stack</h5><div class="gx-tags">' + d.stack.map(function (s) { return '<span class="gx-chip gx-gray">' + s + '</span>'; }).join('') + '</div>' +
      '<h5>Outcome</h5>' + list(d.out) +
      '<div class="gx-df">' + btns + '</div>';
    lastFocus = document.activeElement;
    drawer.classList.add('open'); ov.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    $('#gx-db').scrollTop = 0;
    $('#gx-dx').focus();
  }
  function closeDrawer() {
    drawer.classList.remove('open'); ov.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (lastFocus) lastFocus.focus();
  }
  if ($('#gx-dx')) $('#gx-dx').addEventListener('click', closeDrawer);
  if (ov) ov.addEventListener('click', closeDrawer);
  if (drawer) drawer.addEventListener('click', function (e) {
    var b = e.target.closest('[data-flow]');
    if (b) { closeDrawer(); show('workflows'); openFlow(b.dataset.flow); }
  });

  /* ================= WORKFLOWS ================= */
  function countSteps(steps) {
    var n = 0;
    steps.forEach(function (s) {
      n++;
      if (s.br) s.br.forEach(function (b) { n += countSteps(b.steps); });
    });
    return n;
  }

  var wlist = $('#gx-wlist');
  if (wlist) {
    wlist.innerHTML = Object.keys(FLOWS).map(function (k) {
      var f = FLOWS[k];
      return '<tr class="gx-wrow" data-flow="' + k + '" data-text="' + (f.name + ' ' + f.used).toLowerCase() + '"><td><b>' + f.name + '</b>' +
        (f.complex ? '<span class="gx-chip gx-purple">Complex</span>' : '') + '</td><td><span class="gx-chip gx-green">Published</span></td><td>' + f.used + '</td><td>' + countSteps(f.steps) + ' steps</td></tr>';
    }).join('');
    wlist.addEventListener('click', function (e) {
      var r = e.target.closest('[data-flow]'); if (r) openFlow(r.dataset.flow);
    });
  }

  var builder = $('#gx-builder'), flowEl = $('#gx-flow'), timers = [];
  var ICON = { trigger: '⚡', action: '✉️', wait: '⏱️', if: '🔀' };
  var LABEL = { trigger: 'Trigger', action: 'Action', wait: 'Wait', if: 'If / Else' };

  function card(s) {
    return '<div class="gx-step"><div class="gx-si gx-t-' + s.t + '">' + ICON[s.t] + '</div><div><small>' + LABEL[s.t] + '</small><b>' + s.h + '</b><p>' + s.d + '</p></div></div>';
  }
  function seq(steps) {
    var h = '';
    steps.forEach(function (s, i) {
      if (i > 0) h += '<div class="gx-conn"></div>';
      h += card(s);
      if (s.br) {
        h += '<div class="gx-conn"></div><div class="gx-branches">' +
          s.br.map(function (b) {
            return '<div class="gx-bcol"><span class="gx-lab gx-lab-' + b.c + '">' + b.l + '</span><div class="gx-conn gx-short"></div>' + seq(b.steps) + '</div>';
          }).join('') + '</div>';
      }
    });
    return h;
  }

  /* Zoom state */
  var zoomLevel = 1;
  function setZoom(z) {
    zoomLevel = Math.max(0.4, Math.min(1.6, z));
    if (flowEl) flowEl.style.transform = 'scale(' + zoomLevel + ')';
    var lvl = $('#gx-zlevel');
    if (lvl) lvl.textContent = Math.round(zoomLevel * 100) + '%';
  }
  function openFlow(key) {
    var f = FLOWS[key]; if (!f || !builder || !flowEl) return;
    $('#gx-bname').textContent = f.name;
    $('#gx-bused').textContent = 'Used in ' + f.used + ' · simplified example · ' + countSteps(f.steps) + ' steps';
    var last = f.steps[f.steps.length - 1];
    flowEl.innerHTML = seq(f.steps) + (last.br ? '' : '<div class="gx-conn"></div><div class="gx-end">END</div>');
    setZoom(1);
    builder.classList.add('open');
    builder.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var bc = $('.gx-bc', builder);
    bc.scrollTop = 0; bc.scrollLeft = 0;
    timers.forEach(clearTimeout); timers = [];
    var step = f.complex ? 90 : 160;
    $$('.gx-step, .gx-conn, .gx-lab, .gx-end', flowEl).forEach(function (el, i) {
      timers.push(setTimeout(function () { el.classList.add('in'); }, reduce ? 0 : step * i + 80));
    });
    setTimeout(function () {
      var mobile = window.innerWidth < 700;
      if (mobile) setZoom(0.7);
      else setZoom(1);
      setTimeout(function () {
        var first = flowEl.querySelector('.gx-step');
        if (first && bc) {
          /* Center first step in the viewport */
          var fr = first.getBoundingClientRect();
          var br = bc.getBoundingClientRect();
          var targetLeft = bc.scrollLeft + (fr.left - br.left) - (br.width / 2) + (fr.width / 2);
          var targetTop = bc.scrollTop + (fr.top - br.top) - (mobile ? 24 : 40);
          bc.scrollLeft = Math.max(0, targetLeft);
          bc.scrollTop = Math.max(0, targetTop);
        } else if (bc) {
          bc.scrollLeft = Math.max(0, (bc.scrollWidth - bc.clientWidth) / 2);
          bc.scrollTop = 0;
        }
      }, mobile ? 120 : 60);
    }, 50);
  }
  function closeFlow() {
    if (!builder) return;
    builder.classList.remove('open');
    builder.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    timers.forEach(clearTimeout); timers = [];
    setZoom(1);
  }
  if ($('#gx-bback')) $('#gx-bback').addEventListener('click', closeFlow);
  document.addEventListener('click', function (e) {
    var t = e.target.closest('.gx-zbtn') || e.target;
    if (t.id === 'gx-zin') setZoom(zoomLevel + 0.15);
    if (t.id === 'gx-zout') setZoom(zoomLevel - 0.15);
    if (t.id === 'gx-zfit' || t.id === 'gx-zreset') {
      var bc = $('.gx-bc', builder);
      if (bc && flowEl) {
        var pad = 40;
        var scaleW = (bc.clientWidth - pad) / Math.max(flowEl.scrollWidth, 1);
        var scaleH = (bc.clientHeight - pad) / Math.max(flowEl.scrollHeight, 1);
        var fit = Math.min(1, Math.max(0.4, Math.min(scaleW, scaleH)));
        setZoom(fit);
        setTimeout(function () {
          bc.scrollLeft = Math.max(0, (flowEl.scrollWidth * zoomLevel - bc.clientWidth) / 2);
          bc.scrollTop = 0;
        }, 50);
      } else setZoom(1);
    }
  });
  document.addEventListener('wheel', function (e) {
    if (builder && builder.classList.contains('open') && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
    }
  }, { passive: false });

  /* ================= INTEGRATIONS ================= */
  var igrid = $('#gx-igrid');
  if (igrid) {
    igrid.innerHTML = INTEG.map(function (i) {
      var tag = i[3] ? '<span class="gx-chip gx-green">Connected</span>' : '';
      return '<div class="gx-int" data-text="' + (i[1] + ' ' + i[2]).toLowerCase() + '"><div class="gx-int-i">' + i[0] + '</div><h4>' + i[1] + '</h4><p>' + i[2] + '</p>' + tag + '</div>';
    }).join('');
  }

  /* ================= SITES ================= */
  var sitesEl = $('#gx-sites');
  if (sitesEl) {
    sitesEl.innerHTML = SITES.map(function (s) {
      var actions = '';
      if (s.url) {
        actions = '<a class="gx-btn gx-primary" href="' + s.url + '" target="_blank" rel="noopener">Preview ↗</a>';
      } else {
        actions = '<button class="gx-btn" data-view="opportunities">View in pipeline</button>';
      }
      return '<div class="gx-site" data-text="' + (s.name + ' ' + s.domain + ' ' + s.blurb).toLowerCase() + '">' +
        '<div class="gx-site-preview"><span>' + s.domain + '</span><b>' + s.name + '</b></div>' +
        '<div class="gx-site-body"><h4>' + s.name + '</h4><p>' + s.blurb + '</p>' +
        '<div class="gx-tags" style="margin-bottom:12px">' + s.tags.map(function (t) { return '<span class="gx-chip gx-blue">' + t + '</span>'; }).join('') + '</div>' +
        '<div class="gx-site-actions">' + actions + '</div></div></div>';
    }).join('');
  }

  /* ================= CHAT – collect email ================= */
  var thread = $('#gx-thread'), msgInput = $('#gx-msg'), topic = '';
  var visitorEmail = '';
  var chatStep = 'topic'; /* topic | email | message */

  function scrollThread() { if (thread) thread.scrollTop = thread.scrollHeight; }
  function bubble(text, who) {
    if (!thread) return;
    var d = document.createElement('div');
    d.className = 'gx-m ' + who; d.textContent = text;
    thread.appendChild(d); scrollThread();
  }
  function bubbleHtml(html, who) {
    if (!thread) return;
    var d = document.createElement('div');
    d.className = 'gx-m ' + who; d.innerHTML = html;
    thread.appendChild(d); scrollThread();
  }
  function reply(text, delay) { setTimeout(function () { bubble(text, 'in'); }, reduce ? 0 : delay); }
  function replyHtml(html, delay) { setTimeout(function () { bubbleHtml(html, 'in'); }, reduce ? 0 : delay); }

  if (thread) {
    bubble('Hi, I am Ali. I build GoHighLevel systems for agencies and service businesses.', 'in');
    reply('What would you like to automate? Pick a topic or type your own.', 500);
  }

  var quick = $('#gx-quick');
  if (quick) {
    quick.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      topic = b.textContent;
      bubble(topic, 'out');
      chatStep = 'email';
      reply('Great choice. Please share your email so I can reply to you directly.', 600);
      if (msgInput) {
        msgInput.placeholder = 'Your email address';
        msgInput.type = 'email';
        msgInput.focus();
      }
    });
  }

  var compose = $('#gx-compose');
  if (compose) {
    compose.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = msgInput ? msgInput.value.trim() : '';
      if (!text) return;

      if (chatStep === 'email' || (!visitorEmail && /@/.test(text))) {
        /* treat as email */
        visitorEmail = text;
        bubble(text, 'out');
        if (msgInput) {
          msgInput.value = '';
          msgInput.type = 'text';
          msgInput.placeholder = 'Type your message / query';
        }
        chatStep = 'message';
        reply('Thanks! Now tell me a bit about your business or what you need automated. Press Send when ready. It will open an email to me with your details.', 500);
        return;
      }

      if (chatStep === 'topic' && !topic) {
        topic = text;
        bubble(text, 'out');
        if (msgInput) msgInput.value = '';
        chatStep = 'email';
        reply('Got it. Please share your email so I can get back to you.', 500);
        if (msgInput) {
          msgInput.placeholder = 'Your email address';
          msgInput.type = 'email';
          msgInput.focus();
        }
        return;
      }

      /* final message — open mailto */
      bubble(text, 'out');
      if (msgInput) msgInput.value = '';

      var subject = encodeURIComponent('Portfolio inquiry' + (topic ? ': ' + topic : ''));
      var bodyLines = [];
      if (visitorEmail) bodyLines.push('From: ' + visitorEmail);
      if (topic) bodyLines.push('Topic: ' + topic);
      bodyLines.push('');
      bodyLines.push(text);
      var body = encodeURIComponent(bodyLines.join('\n'));
      var mailUrl = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;

      var a = document.createElement('a');
      a.href = mailUrl;
      a.target = '_self';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(function () {
        bubbleHtml('If the email app did not open, <a href="' + mailUrl + '">tap here to send email to Ali</a>. I will reply to ' + (visitorEmail || 'the address you used') + '.', 'in');
      }, 600);

      chatStep = 'done';
    });
  }

  /* ================= COPY + EMAIL / PHONE PAGE FORMS ================= */
  function copyText(str, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(str).then(function () {
        if (btn) {
          var prev = btn.textContent;
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = prev; }, 1500);
        }
      }).catch(function () {});
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy]');
    if (!btn) return;
    e.preventDefault();
    copyText(btn.getAttribute('data-copy'), btn);
  });

  var emailForm = $('#gx-email-form');
  if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var em = ($('#gx-email-in') || {}).value || '';
      var subj = ($('#gx-email-subj') || {}).value || '';
      var q = ($('#gx-email-q') || {}).value || '';
      if (!em || !q) return;
      var subject = encodeURIComponent(subj || ('Portfolio inquiry from ' + em));
      var body = encodeURIComponent('From: ' + em + '\n\n' + q);
      var mailUrl = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
      var a = document.createElement('a');
      a.href = mailUrl;
      a.target = '_self';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  var phoneForm = $('#gx-phone-form');
  if (phoneForm) {
    phoneForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var ph = ($('#gx-phone-in') || {}).value || '';
      var note = ($('#gx-phone-note') || {}).value || '';
      if (!ph) return;
      var subject = encodeURIComponent('Callback request from portfolio');
      var body = encodeURIComponent('Phone: ' + ph + '\nPreferred time / note: ' + note);
      var mailUrl = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
      var a = document.createElement('a');
      a.href = mailUrl;
      a.target = '_self';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  /* ================= SEARCH ================= */
  var q = $('#gx-q');
  function applySearch() {
    if (!q) return;
    var v = q.value.trim().toLowerCase();
    $$('.gx-opp, .gx-wrow, .gx-int, .gx-site').forEach(function (el) {
      el.classList.toggle('gx-hide', !!v && (el.dataset.text || '').indexOf(v) < 0);
    });
  }
  if (q) {
    q.addEventListener('input', function () {
      applySearch();
      var v = q.value.trim();
      if (v) {
        var curEl = $('.gx-nav a.active');
        var cur = curEl ? curEl.dataset.view : '';
        if (['opportunities', 'workflows', 'integrations', 'sites'].indexOf(cur) < 0) show('opportunities');
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); if (q) q.focus(); }
    if (e.key === 'Escape') {
      if (builder && builder.classList.contains('open')) closeFlow();
      else if (drawer && drawer.classList.contains('open')) closeDrawer();
      else if (isMobile() && side && side.classList.contains('open')) closeSide();
    }
  });

  /* ================= INIT ================= */
  renderBoard();
  show((location.hash || '#dashboard').slice(1));
})();
