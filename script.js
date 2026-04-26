


const { translations, mythData, stateDistrictData, voterIqData, candidateData, timelineData, electionResults2024 } = ElectWiseData;

const Nav = {
    _initialized: false,
    init: () => {
        if (Nav._initialized) {
            if (window.location.hash) Nav.show(window.location.hash.substring(1));
            else Nav.show('home');
            return;
        }
        Nav._initialized = true;
        // Handle ALL internal links (nav, hero buttons, quick-nav cards, guide buttons)
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            const href = link.getAttribute('href');
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection && targetSection.tagName === 'SECTION') {
                e.preventDefault();
                Nav.show(targetId);
                history.pushState(null, '', href);
            }
        });
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1);
            if (hash) Nav.show(hash);
        });
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.substring(1);
            Nav.show(hash || 'home');
        });
        if (window.location.hash) {
            const h = window.location.hash.substring(1);
            Nav.show(h);
            Nav.updateBg(h);
        } else {
            Nav.show('home');
            Nav.updateBg('home');
        }
    },
    show: (id) => {
        const next = document.getElementById(id);
        if (!next) return;

        const current = document.querySelector('section.visible');
        if (current && current.id === id) return;

        // Hide ALL sections to be safe
        document.querySelectorAll('section').forEach(s => {
            s.classList.remove('visible', 'fade-out');
        });

        // Show the target section
        next.classList.add('visible');
        window.scrollTo(0, 0);

        // Update Nav Active State
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });

        if (window.innerWidth <= 768) {
            const nl = document.querySelector('.nav-links');
            if (nl) nl.classList.remove('active');
        }

        setTimeout(() => {
            next.querySelectorAll('.card-entrance').forEach(c => c.classList.add('visible'));
            window.dispatchEvent(new Event('resize'));
        }, 50);

        Nav.updateBg(id);
    },
    updateBg: (id) => {
        const bg = document.getElementById('app-bg');
        if (!bg) return;
        bg.className = 'app-bg';
        const mappedId = ['home', 'simulation', 'timeline', 'results', 'eligibility'].includes(id) ? id : 'page';
        bg.classList.add('bg-' + mappedId);
    },
};


// Utility: LocalStorage wrapper
const LS = {
    get: (key) => localStorage.getItem('ElectWise_' + key),
    set: (key, val) => localStorage.setItem('ElectWise_' + key, val),
    getJSON: (key) => JSON.parse(localStorage.getItem('ElectWise_' + key) || 'null'),
    setJSON: (key, val) => localStorage.setItem('ElectWise_' + key, JSON.stringify(val))
};

// Font size toggle — cycles through 3 sizes
const fontSizes = ['16px', '19px', '22px'];
const fontLabels = ['A', 'A+', 'A++'];
let currentFontIndex = parseInt(localStorage.getItem('ElectWise_font_size') || '0');

function applyFontSize(index) {
    document.documentElement.style.fontSize = fontSizes[index];
    const btn = document.getElementById('fontToggleBtn');
    if (btn) btn.textContent = fontLabels[(index + 1) % 3];
    localStorage.setItem('ElectWise_font_size', index);
}

document.getElementById('fontToggleBtn')?.addEventListener('click', () => {
    currentFontIndex = (currentFontIndex + 1) % 3;
    applyFontSize(currentFontIndex);
});

// Translation toggle
let currentLang = localStorage.getItem('ElectWise_lang') || 'en';
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ElectWise_lang', lang);
    const t_map = translations[lang];
    if (t_map) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t_map[key]) el.textContent = t_map[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t_map[key]) el.placeholder = t_map[key];
        });
    }
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = lang === 'en' ? 'हिं' : 'EN';
    document.body.style.fontFamily = lang === 'hi'
        ? "'Poppins', 'Noto Sans Devanagari', sans-serif"
        : "'Poppins', sans-serif";

    // Update dynamic components
    if (typeof ElectWise !== 'undefined') {
        if (ElectWise.dashboard) ElectWise.dashboard.update();
        if (ElectWise.timeline) ElectWise.timeline.init();
        if (ElectWise.booths) ElectWise.booths.init();
        if (ElectWise.results) ElectWise.results.update(document.getElementById('resultsStateFilter')?.value || 'All India');
        if (ElectWise.candidate) ElectWise.candidate.render();
        if (ElectWise.myths) ElectWise.myths.init();
    }
}

const t = (key) => (translations[currentLang] && translations[currentLang][key]) || key;

document.getElementById('langToggleBtn')?.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'hi' : 'en');
});


// MAP UTILS
function updateMap(lat, lon, zoomLevel) {
    const offset = zoomLevel === 'district' ? 0.3 : 2.0;
    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - offset},${lat - offset},${lon + offset},${lat + offset}&layer=mapnik&marker=${lat},${lon}`;
    document.getElementById('map_iframe').src = src;
}

function generateBooths(stateName, districtName) {
    const types = ["Govt High School", "Panchayat Bhavan", "Municipal Hall", "Community Centre", "Primary School"];
    return types.map((type, i) => ({
        name: `${type} — ${districtName}`,
        number: `${stateName.substring(0, 2).toUpperCase()}-${districtName.substring(0, 3).toUpperCase()}-00${i + 1}`,
        address: `Ward ${i + 1}, ${districtName}, ${stateName}`,
        constituency: `${districtName} Constituency ${i + 1}`,
        distance: `${(0.5 + i * 0.8).toFixed(1)} km`,
        capacity: 800 + i * 100
    }));
}

const ElectWise = {
    state: {
        iqScore: LS.get('iqScore') || null,
        candFilter: LS.get('candFilter') || 'All',
        eligibility: LS.getJSON('eligibility'),
        votes: LS.getJSON('votes') || { "1": 0, "2": 0, "3": 0, "4": 0 },
        guideStep: parseInt(LS.get('guideStep')) || 1,
        guideComplete: LS.get('guideComplete') === 'true',
    },
    dashboard: {
        update: () => {
            const el = LS.get('eligibility');
            const iq = LS.get('iqScore');
            const sm = LS.get('simComplete');
            const gd = LS.get('guideComplete');
            const gs = LS.get('guideStep') || '1';
            const l = currentLang;

            const pending = l === 'en' ? 'Pending' : 'लंबित';
            const done = l === 'en' ? 'Done' : 'पूर्ण';

            const elEl = document.getElementById('dash-eligibility');
            if (elEl) elEl.innerHTML = el ? `✅ <span data-i18n="dash_el">Eligibility Check:</span> ${done}` : `⏳ <span data-i18n="dash_el">Eligibility Check:</span> ${pending}`;

            const qzEl = document.getElementById('dash-quiz');
            if (qzEl) qzEl.innerHTML = iq !== null ? `✅ <span data-i18n="dash_qz">Voter IQ:</span> ${iq}/200` : `⏳ <span data-i18n="dash_qz">Voter IQ:</span> ${l === 'en' ? 'Not Taken' : 'नहीं लिया'}`;

            const smEl = document.getElementById('dash-sim');
            if (smEl) smEl.innerHTML = sm ? `✅ <span data-i18n="dash_sm">Voting Simulation:</span> ${done}` : `⏳ <span data-i18n="dash_sm">Voting Simulation:</span> ${pending}`;

            const gdEl = document.getElementById('dash-guide');
            if (gdEl) gdEl.innerHTML = gd ? `✅ <span data-i18n="dash_gd">First-Time Guide:</span> ${done}` : `⏳ <span data-i18n="dash_gd">First-Time Guide:</span> ${l === 'en' ? `Step ${gs} of 5` : `चरण ${gs}/5`}`;

            let nextLink = '#eligibility';
            if (el && iq === null) nextLink = '#voteriq';
            else if (el && iq !== null && !sm) nextLink = '#simulation';
            else if (el && iq !== null && sm && !gd) nextLink = '#guide';
            else if (gd) nextLink = '#home';

            const btn = document.getElementById('dash-next-btn');
            if (btn) btn.setAttribute('href', nextLink);
        }
    },

    eligibility: {
        init: () => {
            if (ElectWise.state.eligibility) ElectWise.eligibility.showResult(ElectWise.state.eligibility);
            // Tooltip listener for Sound Mind
            document.querySelector('.tooltip-container')?.addEventListener('click', function (e) {
                this.classList.toggle('active');
                e.stopPropagation();
            });
            document.addEventListener('click', () => {
                document.querySelector('.tooltip-container')?.classList.remove('active');
            });
        },
        check: (e) => {
            if (e) e.preventDefault();
            const age = document.getElementById('el_age').value;
            const citizen = document.querySelector('input[name="el_cit"]:checked')?.value;
            const mind = document.querySelector('input[name="el_mind"]:checked')?.value;
            const reside = document.querySelector('input[name="el_res"]:checked')?.value;
            const crime = document.querySelector('input[name="el_crime"]:checked')?.value;

            if (!age || !citizen || !mind) { alert(t("please_fill_all")); return; }

            const isEligible = parseInt(age) >= 18 && citizen === 'yes' && mind === 'yes' && crime === 'no';
            ElectWise.state.eligibility = isEligible;
            LS.set('eligibility', isEligible);
            ElectWise.eligibility.showResult(isEligible);
            ElectWise.dashboard.update();
        },
        showResult: (isEligible) => {
            const result = document.getElementById('el_result');
            result.style.display = 'block';
            if (isEligible) {
                result.className = 'success';
                result.innerHTML = currentLang === 'en' ? "✅ You are ELIGIBLE to vote!<br><small>Register at voters.eci.gov.in (Form 6)</small>" : "✅ आप वोट देने के पात्र हैं!<br><small>voters.eci.gov.in पर पंजीकरण करें (फॉर्म 6)</small>";
            } else {
                result.className = 'error';
                result.innerHTML = currentLang === 'en' ? "❌ You are NOT ELIGIBLE to vote yet.<br><small>Must be 18+, an Indian citizen, and of sound mind.</small>" : "❌ आप अभी वोट देने के पात्र नहीं हैं।<br><small>18+ आयु, भारतीय नागरिक और स्वस्थ दिमाग का होना आवश्यक है।</small>";
            }
        }
    },

    timeline: {
        init: () => {
            const wrap = document.getElementById('tl_container');
            if (!wrap) return;
            const data = currentLang === 'en' ? ElectWiseData.timelineData_en : ElectWiseData.timelineData_hi;
            wrap.innerHTML = data.map((d, i) => `
                <div class="timeline-step ${i % 2 === 0 ? 'left' : 'right'} ${i === 0 ? 'active' : 'completed'}">
                    <div class="timeline-content" onclick="this.classList.toggle('expanded')">
                        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
                            <span style="background:${i === 0 ? 'var(--saffron)' : 'var(--green)'}; color:white; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; flex-shrink:0;">
                                ${i + 1}
                            </span>
                            <h4 style="margin:0; font-size:1rem;">${d.t.replace(/^\d+\.\s*/, '')}</h4>
                        </div>
                        <div class="timeline-details">
                            <p style="margin:0; color:#555;">${d.d}</p>
                        </div>
                        <p style="margin:0.5rem 0 0; font-size:0.85rem; color:#999;">${t("click_to")} ${i === 0 ? t("learn_more") : t("expand")} →</p>
                    </div>
                </div>
            `).join('');
        }
    },

    booths: {
        init: () => {
            const stateSel = document.getElementById('booth_state');
            if (!stateSel) return;
            stateSel.innerHTML = '<option value="">-- Select State / UT --</option>';
            Object.keys(stateDistrictData).sort().forEach(state => {
                stateSel.innerHTML += `<option value="${state}">${state}</option>`;
            });
            // Set initial India map
            ElectWise.booths.updateMap(20.5937, 78.9629, 'india');
        },
        updateDistricts: () => {
            const stateSel = document.getElementById('booth_state').value;
            const distSel = document.getElementById('booth_dist');
            const res = document.getElementById('booth_list');
            if (res) res.innerHTML = '';

            if (!stateSel) {
                distSel.innerHTML = '<option value="">Choose State First...</option>';
                distSel.disabled = true;
                // India view
                ElectWise.booths.updateMap(20.5937, 78.9629, 'india');
                return;
            }
            distSel.innerHTML = '<option value="">Choose District / City...</option>';
            Object.keys(stateDistrictData[stateSel].districts).sort().forEach(dist => {
                distSel.innerHTML += `<option value="${dist}">${dist}</option>`;
            });
            distSel.disabled = false;
            // State view
            ElectWise.booths.updateMap(stateDistrictData[stateSel].lat, stateDistrictData[stateSel].lon, 'state');
        },
        updateMap: (lat, lon, zoomLevel) => {
            let bboxStr = "";
            if (zoomLevel === 'india') bboxStr = "68.0,8.0,97.5,37.5";
            else {
                const offset = zoomLevel === 'district' ? 0.3 : 2.0;
                bboxStr = `${lon - offset},${lat - offset},${lon + offset},${lat + offset}`;
            }
            const marker = zoomLevel === 'india' ? '' : `&marker=${lat},${lon}`;
            const mapEl = document.getElementById('map_iframe');
            if (mapEl) mapEl.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bboxStr}&layer=mapnik${marker}`;
        },
        showBooths: () => {
            const state = document.getElementById('booth_state').value;
            const district = document.getElementById('booth_dist').value;
            const res = document.getElementById('booth_list');

            if (!state || !district) {
                if (res) res.innerHTML = '<p style="text-align:center; color:#999; padding:2rem;">Please select both state and district to see booths.</p>';
                return;
            }

            const distData = stateDistrictData[state]?.districts?.[district];
            if (!distData) {
                if (res) res.innerHTML = '<p style="text-align:center; color:#999; padding:2rem;">No booth data available for this selection.</p>';
                return;
            }

            ElectWise.booths.updateMap(distData.lat, distData.lon, 'district');

            // Show skeleton loading
            const skel = document.getElementById('booth_skeleton');
            if (skel) skel.style.display = 'block';

            setTimeout(() => {
                if (skel) skel.style.display = 'none';
                const types = ["Govt High School", "Panchayat Bhavan", "Municipal Hall", "Community Centre", "Primary School"];
                const booths = types.map((type, i) => ({
                    name: `${type} — ${district}`,
                    number: `${state.substring(0, 2).toUpperCase()}-${district.substring(0, 3).toUpperCase()}-00${i + 1}`,
                    address: `Ward ${i + 1}, ${district}, ${state}`,
                    constituency: `${district} Constituency ${i + 1}`,
                    distance: `${(0.5 + i * 0.8).toFixed(1)} km`,
                    capacity: 800 + i * 100
                }));

                res.innerHTML = `<h3 style="margin-bottom:1rem; color:var(--navy);">📍 Top 5 Nearest Booths in ${district}</h3>`;
                booths.forEach(b => {
                    res.innerHTML += `
                        <div style="background:var(--bg); padding:1rem; margin-bottom:1rem; border-radius:8px; border-left:4px solid var(--saffron); transition: transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform='none'">
                            <h4 style="margin-bottom:0.5rem;">${b.name} <span style="float:right; background:var(--saffron); color:white; padding:2px 8px; border-radius:12px; font-size:0.8rem;">${b.distance}</span></h4>
                            <p style="margin:0.5rem 0; font-size:0.9rem;">📍 ${b.address}</p>
                            <div style="font-size:0.8rem; color:#666; display:flex; gap:1rem; flex-wrap:wrap;">
                                <span>🏢 Booth: ${b.number}</span>
                                <span>👥 Capacity: ${b.capacity}</span>
                                <span>🗳️ ${b.constituency}</span>
                            </div>
                        </div>`;
                });
                res.innerHTML += '<p style="text-align:center; font-size:0.85rem; color:#d32f2f; margin-top:1rem;">⚠️ Booth locations are illustrative. Verify your actual booth at <a href="https://voters.eci.gov.in" target="_blank" style="color:var(--saffron); font-weight:600;">voters.eci.gov.in</a></p>';
            }, 500);
        }
    },

    constituency: {
        init: () => {
            const s = document.getElementById('constituencyState');
            if (!s) return;
            s.innerHTML = '<option value="">Choose State...</option>';
            Object.keys(stateDistrictData).sort().forEach(state => {
                s.innerHTML += `<option value="${state}">${state}</option>`;
            });
            s.addEventListener('change', function () {
                const d = document.getElementById('constituencyDistrict');
                d.innerHTML = '<option value="">Choose District / Region...</option>';
                if (this.value && stateDistrictData[this.value]) {
                    Object.keys(stateDistrictData[this.value].districts).sort().forEach(dist => {
                        d.innerHTML += `<option value="${dist}">${dist}</option>`;
                    });
                    d.disabled = false;
                } else {
                    d.disabled = true;
                }
            });
        },
        generateConstituencyResult: (state, district) => {
            // Simple deterministic seed based on state and district names
            const seed = (state + district).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
            const seededRandom = (s) => {
                const x = Math.sin(seed + s) * 10000;
                return x - Math.floor(x);
            };

            const statePartyData = {
                "Andhra Pradesh": { parties: ["TDP", "YSRCP", "BJP", "Others"], colors: ["#FFD700", "#009933", "#FF6600", "#888"] },
                "Telangana": { parties: ["BRS", "INC", "BJP", "Others"], colors: ["#FF69B4", "#0078D7", "#FF6600", "#888"] },
                "Delhi (NCT)": { parties: ["BJP", "AAP", "INC", "Others"], colors: ["#FF6600", "#0082CB", "#0078D7", "#888"] },
                "Maharashtra": { parties: ["BJP", "MVA", "INC", "Others"], colors: ["#FF6600", "#CC0000", "#0078D7", "#888"] },
                "Karnataka": { parties: ["INC", "BJP", "JD(S)", "Others"], colors: ["#0078D7", "#FF6600", "#006400", "#888"] },
                "Tamil Nadu": { parties: ["DMK", "AIADMK", "BJP", "Others"], colors: ["#CC0000", "#006400", "#FF6600", "#888"] },
                "Kerala": { parties: ["LDF", "UDF", "BJP", "Others"], colors: ["#DC143C", "#0078D7", "#FF6600", "#888"] },
                "Uttar Pradesh": { parties: ["BJP", "SP", "INC", "Others"], colors: ["#FF6600", "#DC143C", "#0078D7", "#888"] },
                "West Bengal": { parties: ["AITC", "BJP", "INC", "Others"], colors: ["#00BFFF", "#FF6600", "#0078D7", "#888"] },
                "Rajasthan": { parties: ["BJP", "INC", "BSP", "Others"], colors: ["#FF6600", "#0078D7", "#0000CD", "#888"] },
                "Gujarat": { parties: ["BJP", "INC", "AAP", "Others"], colors: ["#FF6600", "#0078D7", "#0082CB", "#888"] },
                "Bihar": { parties: ["JD(U)", "BJP", "RJD", "Others"], colors: ["#006400", "#FF6600", "#008000", "#888"] },
                "Punjab": { parties: ["AAP", "INC", "BJP", "Others"], colors: ["#0082CB", "#0078D7", "#FF6600", "#888"] },
                "Madhya Pradesh": { parties: ["BJP", "INC", "BSP", "Others"], colors: ["#FF6600", "#0078D7", "#0000CD", "#888"] }
            };

            const pd = statePartyData[state] || { parties: ["Party A", "Party B", "Party C", "Others"], colors: ["#FF6600", "#0078D7", "#006400", "#888"] };
            const pcts = [
                35 + Math.floor(seededRandom(1) * 20),
                25 + Math.floor(seededRandom(2) * 15),
                10 + Math.floor(seededRandom(3) * 10),
                5 + Math.floor(seededRandom(4) * 5)
            ];

            return {
                lokSabha: {
                    name: `${district} Lok Sabha Constituency`,
                    mp: "Data from ECI 2024",
                    party: pd.parties[0],
                    partyColor: pd.colors[0],
                    margin: 40000 + Math.floor(seededRandom(5) * 150000),
                    totalVotes: 600000 + Math.floor(seededRandom(6) * 500000)
                },
                vidhansabha: { name: `${district} Vidhan Sabha Constituency`, mla: "Data from State Election 2023/24", party: pd.parties[0], partyColor: pd.colors[0] },
                stats: { registered: 800000 + Math.floor(seededRandom(7) * 700000), turnout: 60 + Math.floor(seededRandom(8) * 20), male: 51, female: 49 },
                parties: pd.parties.map((p, i) => ({ name: p, pct: pcts[i], color: pd.colors[i] }))
            };
        },
        show: () => {
            const s = document.getElementById('constituencyState').value;
            const d = document.getElementById('constituencyDistrict').value;
            const r = document.getElementById('ce_result');
            const rc = document.getElementById('ce_result_content');
            if (!s || !d) { alert("Please select both State and Constituency."); return; }

            const data = ElectWise.constituency.generateConstituencyResult(s, d);

            // Trigger flash animation
            r.style.animation = 'none';
            r.offsetHeight; // trigger reflow
            r.style.animation = 'dataFlash 0.4s ease';

            r.style.display = 'block';

            rc.innerHTML = `
                <div class="const-header-row">
                    <div class="const-name-wrapper">
                        <h2>${d}<span class="const-state-name">(${s})</span></h2>
                    </div>
                    <div class="const-meta-label">
                        <span class="small-gray">Member of Parliament</span>
                        <div class="navy-bold">
                            <span class="live-indicator"></span>
                            Data from ECI 2024
                            <span class="verified-badge">✓</span>
                        </div>
                    </div>
                </div>

                <div class="party-badge" style="background:${data.lokSabha.partyColor};" title="Winning Party — 2024 General Election">
                    <div class="party-logo-circle"></div>
                    ${data.lokSabha.party}
                </div>

                <div class="stats-section-label">2024 Election Stats</div>

                <div class="stat-row">
                    <div class="stat-label">Margin</div>
                    <div class="stat-bar-track">
                        <div class="stat-bar-fill margin" style="width: 75%; animation: barGrow 1.2s cubic-bezier(0.23,1,0.32,1) 0.5s both;"></div>
                    </div>
                    <div class="stat-value margin" id="margin_val">0.0k</div>
                </div>

                <div class="stat-row">
                    <div class="stat-label">Voters</div>
                    <div class="stat-bar-track">
                        <div class="stat-bar-fill voters" style="width: 45%; animation: barGrow 1.2s cubic-bezier(0.23,1,0.32,1) 0.5s both;"></div>
                    </div>
                    <div class="stat-value voters" id="voters_val">0.0L</div>
                </div>

                <div class="const-action-buttons">
                    <button class="btn-const-action">📋 Search Affidavits</button>
                    <button class="btn-const-action">📊 View 2024 Results</button>
                </div>

                <div class="const-disclaimer-mini">
                    ⚠️ Constituency data shown here is illustrative/mock and may not be accurate. Verify details at eci.gov.in.
                </div>

                <div class="data-updated-toast">✓ Data Updated</div>
            `;

            // Count-up animations
            animateValue(document.getElementById('margin_val'), 0, data.lokSabha.margin / 1000, 1000, 'k');
            animateValue(document.getElementById('voters_val'), 0, data.lokSabha.totalVotes / 100000, 1000, 'L');

            // Remove toast after 2s
            setTimeout(() => {
                const toast = r.querySelector('.data-updated-toast');
                if (toast) {
                    toast.style.opacity = '0';
                    toast.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => toast.remove(), 500);
                }
            }, 2000);
        }
    },

    results: {
        partyColors: {
            "BJP": "#FF6600", "INC": "#0078D7", "SP": "#DC143C", "AITC": "#00BFFF", "DMK": "#CC0000",
            "TDP": "#FFD700", "JDU": "#006400", "YSRCP": "#009933", "SHS": "#F37020", "NCP": "#008000",
            "AAP": "#0082CB", "RJD": "#008000", "LJP": "#B22222", "BJD": "#006400", "CPI(M)": "#DC143C",
            "AGP": "#006400", "AIUDF": "#006400", "JDS": "#006400", "SAD": "#006400", "RLD": "#006400",
            "AIADMK": "#006400", "AIMIM": "#006400", "BRS": "#FF69B4", "Others": "#888888"
        },
        init: () => {
            const filter = document.getElementById('resultsStateFilter');
            if (filter) {
                while (filter.options.length > 1) filter.remove(1);
                Object.keys(electionResults2024).sort().forEach(state => {
                    if (state === "All India") return;
                    const opt = document.createElement('option');
                    opt.value = state;
                    opt.textContent = state;
                    filter.appendChild(opt);
                });
            }
            ElectWise.results.update('All India');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.res-bar-fill').forEach(bar => {
                            bar.style.width = bar.getAttribute('data-width');
                        });
                    }
                });
            }, { threshold: 0.1 });
            const resEl = document.getElementById('results');
            if (resEl) observer.observe(resEl);
        },
        update: (stateKey) => {
            const data = electionResults2024[stateKey];
            if (!data) return;

            // Update Total Seats
            const ts = document.getElementById('res_total_seats');
            if (ts) ts.textContent = data.totalSeats;

            // Show/Hide Alliance Stats (only for All India)
            const ndaStat = document.getElementById('res_nda_stat');
            const allianceGrid = document.getElementById('res_alliance_grid');
            if (stateKey === 'All India') {
                if (ndaStat) ndaStat.style.display = 'block';
                if (allianceGrid) allianceGrid.style.display = 'grid';
            } else {
                if (ndaStat) ndaStat.style.display = 'none';
                if (allianceGrid) allianceGrid.style.display = 'none';
            }

            // Update Party Grid
            const g = document.getElementById('results_party_grid');
            if (!g) return;
            g.innerHTML = '';

            const partyEntries = Object.entries(data.parties).sort((a, b) => b[1] - a[1]);
            const total = data.totalSeats;

            partyEntries.forEach(([name, seats]) => {
                const color = ElectWise.results.partyColors[name] || "#888888";
                const pct = (seats / (total || 1)) * 100;
                g.innerHTML += `
                    <div class="party-card" style="border-left-color: ${color};">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                            <div>
                                <h3 style="margin:0; color:white;">${name}</h3>
                                <div style="font-size:0.8rem; color:#ddd;">${t("res_2024_seats")}</div>
                            </div>
                            <div style="font-size:2rem; font-weight:bold; color:${color};">${seats}</div>
                        </div>
                        <div class="res-bar-track">
                            <div class="res-bar-fill" style="width: 0%; background: ${color};" data-width="${pct}%"></div>
                        </div>
                    </div>
                `;
            });

            // Update Stacked Bar
            const sb = document.getElementById('res_stacked_bar');
            if (sb) {
                sb.innerHTML = partyEntries.map(([name, seats]) => {
                    const color = ElectWise.results.partyColors[name] || "#888888";
                    const pct = ((seats / (total || 1)) * 100).toFixed(1);
                    const label = pct > 3 ? `${name} ${seats}` : (pct > 1 ? name : '');
                    return `<div class="stacked-segment" style="width: ${pct}%; background: ${color}; color: ${color === '#FFD700' ? 'black' : 'white'};" title="${name}: ${seats} (${pct}%)">${label}</div>`;
                }).join('');
            }

            setTimeout(() => {
                g.querySelectorAll('.res-bar-fill').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }, 50);
        }
    },

    candidate: {
        init: () => {
            ElectWise.candidate.render('All');
        },
        render: (filter) => {
            if (!filter) filter = document.getElementById('cand_party_filter').value || 'All';
            LS.set('candFilter', filter);
            ElectWise.state.candFilter = filter;

            const g = document.getElementById('cand_grid');
            if (!g) return;
            g.innerHTML = '';

            let filtered = candidateData;
            if (filter !== 'All') filtered = candidateData.filter(c => c.party === filter);

            if (filtered.length === 0) {
                g.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:2rem;">${t("no_candidates_found")}</div>`;
                return;
            }

            filtered.forEach((c, idx) => {
                const pCol = ElectWise.results.partyColors[c.party] || "#888888";
                g.innerHTML += `
                    <div class="candidate-card">
                        <div class="cand-header">
                            <div class="cand-avatar" style="background:${pCol};">${c.name.charAt(0)}</div>
                            <h3 style="margin-bottom:0.25rem;">${c.name}</h3>
                            <div style="font-size:0.85rem; font-weight:bold; color:${pCol};">${c.party}</div>
                            <div style="font-size:0.85rem; color:#666;">${c.const}</div>
                        </div>
                        <div class="cand-tabs">
                            <div class="cand-tab active" onclick="ElectWise.candidate.tab(this, 'overview')">${t("cand_overview_tab")}</div>
                            <div class="cand-tab" onclick="ElectWise.candidate.tab(this, 'election')">${t("cand_election_tab")}</div>
                        </div>
                        <div class="cand-tab-content overview active">
                            <p><strong>${t("cand_role_lbl")}:</strong> ${c.role}</p>
                            <p><strong>${t("cand_exp_lbl")}:</strong> ${c.exp}</p>
                            <p><strong>${t("cand_party_lbl")}:</strong> ${c.party}</p>
                            <p><strong>${t("cand_const_lbl")}:</strong> ${c.const}</p>
                        </div>
                        <div class="cand-tab-content election">
                            <p><strong>${t("cand_alliance_lbl")}:</strong> ${c.overview.alliance}</p>
                            <p><strong>${t("cand_prev_res_lbl")}:</strong> ${c.electionInfo.prevResult}</p>
                            <p><strong>${t("cand_votes_lbl")}:</strong> ${c.electionInfo.votes}</p>
                            <p><strong>${t("cand_vote_share_lbl")}:</strong> ${c.electionInfo.voteShare}</p>
                            <p><strong>${t("cand_margin_lbl")}:</strong> ${c.electionInfo.margin}</p>
                        </div>
                    </div>
                `;
            });
        },
        tab: (el, type) => {
            const card = el.closest('.candidate-card');
            card.querySelectorAll('.cand-tab').forEach(t => t.classList.remove('active'));
            card.querySelectorAll('.cand-tab-content').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            card.querySelector('.cand-tab-content.' + type).classList.add('active');
        }
    },

    voteriq: {
        idx: 0, score: 0, qns: [],
        start: () => {
            const name = document.getElementById('iq_name').value.trim();
            if (!name) { alert("Please enter your name for the certificate."); return; }

            document.getElementById('cert_name').innerText = name;
            ElectWise.voteriq.idx = 0; ElectWise.voteriq.score = 0;

            // Pick a balanced mix to ensure total possible = 200 pts
            const easy = voterIqData.filter(q => q.diff === 1).sort(() => 0.5 - Math.random()).slice(0, 4);
            const med = voterIqData.filter(q => q.diff === 2).sort(() => 0.5 - Math.random()).slice(0, 2);
            const hard = voterIqData.filter(q => q.diff === 3).sort(() => 0.5 - Math.random()).slice(0, 4);
            
            ElectWise.voteriq.qns = [...easy, ...med, ...hard].sort(() => 0.5 - Math.random());

            const start = document.getElementById('iq_start');
            const result = document.getElementById('iq_result');
            const active = document.getElementById('iq_active');

            if (start && start.classList.contains('active')) {
                start.classList.add('zoom-out');
                setTimeout(() => {
                    start.classList.remove('active', 'zoom-out');
                    if (active) {
                        active.classList.add('active', 'zoom-in');
                        setTimeout(() => active.classList.remove('zoom-in'), 400);
                    }
                }, 350);
            } else if (result && result.classList.contains('active')) {
                result.classList.add('zoom-out');
                setTimeout(() => {
                    result.classList.remove('active', 'zoom-out');
                    if (active) {
                        active.classList.add('active', 'zoom-in');
                        setTimeout(() => active.classList.remove('zoom-in'), 400);
                    }
                }, 350);
            } else {
                if (active) active.classList.add('active');
            }
            ElectWise.voteriq.showQ();
        },
        showQ: () => {
            const q = ElectWise.voteriq.qns[ElectWise.voteriq.idx];
            document.getElementById('iq_progress').innerText = `Question ${ElectWise.voteriq.idx + 1} of 10`;

            const badge = document.getElementById('iq_badge');
            badge.innerText = q.diff === 1 ? 'EASY (10 pts)' : q.diff === 2 ? 'MEDIUM (20 pts)' : 'HARD (30 pts)';
            badge.style.background = q.diff === 1 ? '#e8f5e9' : q.diff === 2 ? '#fff8e1' : '#ffebee';
            badge.style.color = q.diff === 1 ? '#2e7d32' : q.diff === 2 ? '#f57f17' : '#c62828';

            document.getElementById('iq_q').innerText = q.q;
            document.getElementById('iq_feedback').innerText = "";
            document.getElementById('iq_next_btn').style.display = 'none';

            const opts = document.getElementById('iq_opts');
            opts.innerHTML = '';
            q.o.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'btn-secondary';
                btn.style.width = '100%'; btn.style.marginBottom = '10px'; btn.style.textAlign = 'left';
                btn.innerText = `${String.fromCharCode(65 + i)}. ${opt}`;
                btn.onclick = () => ElectWise.voteriq.check(i, btn);
                opts.appendChild(btn);
            });
        },
        check: (sel, btn) => {
            const q = ElectWise.voteriq.qns[ElectWise.voteriq.idx];
            const opts = document.getElementById('iq_opts').children;
            for (let b of opts) b.disabled = true;

            const fdbk = document.getElementById('iq_feedback');
            if (sel === q.a) {
                btn.style.background = 'var(--green)'; btn.style.color = 'white'; btn.style.borderColor = 'var(--green)';
                ElectWise.voteriq.score += q.pts;
                fdbk.innerText = "✅ Correct! " + q.exp; fdbk.style.color = "var(--green)";
            } else {
                btn.style.background = '#d32f2f'; btn.style.color = 'white'; btn.style.borderColor = '#d32f2f';
                opts[q.a].style.background = 'var(--green)'; opts[q.a].style.color = 'white'; opts[q.a].style.borderColor = 'var(--green)';
                fdbk.innerText = "❌ Incorrect. " + q.exp; fdbk.style.color = "#d32f2f";
            }
            document.getElementById('iq_next_btn').style.display = 'inline-block';
        },
        next: () => {
            const active = document.getElementById('iq_active');
            active.classList.add('zoom-out');

            setTimeout(() => {
                active.classList.remove('zoom-out');
                ElectWise.voteriq.idx++;
                if (ElectWise.voteriq.idx < ElectWise.voteriq.qns.length) {
                    ElectWise.voteriq.showQ();
                    active.classList.add('zoom-in');
                    setTimeout(() => active.classList.remove('zoom-in'), 400);
                } else {
                    ElectWise.voteriq.end();
                }
            }, 350);
        },
        end: async () => {
            const active = document.getElementById('iq_active');
            const result = document.getElementById('iq_result');

            if (active) {
                active.classList.add('zoom-out');
                setTimeout(() => {
                    active.classList.remove('active', 'zoom-out');
                    if (result) {
                        result.classList.add('active', 'zoom-in');
                        setTimeout(() => result.classList.remove('zoom-in'), 400);
                    }
                }, 350);
            } else {
                if (result) result.classList.add('active');
            }

            const sc = ElectWise.voteriq.score;
            const name = document.getElementById('iq_name')?.value || "Voter";
            document.getElementById('iq_score_txt').innerText = sc;
            document.getElementById('cert_score').innerText = `${sc}/200`;
            document.getElementById('cert_name').innerText = name;

            let grade = "";
            if (sc >= 180) grade = "Democracy Champion";
            else if (sc >= 140) grade = "Informed Voter";
            else if (sc >= 100) grade = "Civic Learner";
            else grade = "Beginner Voter";

            document.getElementById('cert_grade').innerText = grade;
            const d = new Date();
            document.getElementById('cert_date').innerText = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

            // SUBMIT TO BACKEND FOR OFFICIAL CERTIFICATE
            const codeEl = document.getElementById('cert_code_display');
            if (codeEl) codeEl.innerText = "Generating official code...";

            try {
                const response = await fetch('/api/quiz/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ score: sc, name: name })
                });
                const data = await response.json();
                if (data.certificate_code) {
                    if (codeEl) codeEl.innerText = `CERTIFICATE ID: ${data.certificate_code}`;
                    ElectWise.voteriq.lastCertCode = data.certificate_code;
                }
            } catch (err) {
                console.error("Backend Error:", err);
                if (codeEl) codeEl.innerText = "Offline Mode (No Verification Code)";
            }

            if (!ElectWise.state.iqScore || sc > ElectWise.state.iqScore) {
                LS.set('iqScore', sc);
                ElectWise.state.iqScore = sc;
            }
            Nav.init();
            ElectWise.dashboard.update();
            createConfetti();
        },
        print: () => {
            const name = document.getElementById('cert_name')?.innerText || 'Voter';
            const score = document.getElementById('cert_score')?.innerText || '0';
            const grade = document.getElementById('cert_grade')?.innerText || 'Learner';
            const date = document.getElementById('cert_date')?.innerText || new Date().toLocaleDateString();
            const certCode = ElectWise.voteriq.lastCertCode || "GENERATING... (Wait 2 seconds)";

            const printWin = window.open('', '_blank', 'width=900,height=700');
            printWin.document.write(`<!DOCTYPE html>
<html><head><title>ElectWise Certificate - ${name}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { 
    font-family: 'Poppins', sans-serif; 
    display: flex; align-items: center; justify-content: center; 
    min-height: 100vh; 
    background: linear-gradient(135deg, #e8eaf6, #f3e5f5, #e8eaf6);
    padding: 1.5rem;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  .cert-outer {
    max-width: 700px; width: 100%;
    border: 4px solid #0B1F4F;
    border-radius: 16px;
    overflow: hidden;
    background: white;
    box-shadow: 0 20px 60px rgba(11,31,79,0.2);
  }
  .tricolor-bar { height: 10px; background: linear-gradient(to right, #FF6B1A 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #138808 66.66%); }
  .cert-inner {
    margin: 12px;
    border: 2px solid #C5960C;
    border-radius: 8px;
    padding: 2.5rem 2rem;
    background: linear-gradient(135deg, #fffdf5 0%, #fff8e1 40%, #fff3e0 70%, #fffdf5 100%);
    position: relative;
  }
  .corner { position: absolute; width: 40px; height: 40px; }
  .corner-tl { top: 8px; left: 8px; border-top: 3px solid #C5960C; border-left: 3px solid #C5960C; }
  .corner-tr { top: 8px; right: 8px; border-top: 3px solid #C5960C; border-right: 3px solid #C5960C; }
  .corner-bl { bottom: 8px; left: 8px; border-bottom: 3px solid #C5960C; border-left: 3px solid #C5960C; }
  .corner-br { bottom: 8px; right: 8px; border-bottom: 3px solid #C5960C; border-right: 3px solid #C5960C; }
  .emblem {
    width: 72px; height: 72px; margin: 0 auto 1rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #0B1F4F, #1a3a7a);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 15px rgba(11,31,79,0.3);
    font-size: 2rem;
  }
  .cert-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.2rem; color: #0B1F4F;
    letter-spacing: 3px; text-transform: uppercase;
    margin-bottom: 0.2rem;
  }
  .cert-subtitle {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1rem; color: #C5960C;
    letter-spacing: 4px; text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .gold-line {
    width: 220px; height: 2px; margin: 0 auto 1.2rem;
    background: linear-gradient(to right, transparent, #FF6B1A, #C5960C, #138808, transparent);
  }
  .certify-text {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1rem; font-style: italic; color: #666;
    margin-bottom: 0.5rem;
  }
  .cert-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.5rem; color: #FF6B1A;
    font-weight: 700; margin-bottom: 0.3rem;
    line-height: 1.3;
  }
  .name-underline {
    width: 200px; height: 2px; margin: 0 auto 1.2rem;
    background: linear-gradient(to right, transparent, #C5960C, transparent);
  }
  .score-label { font-size: 1rem; color: #444; margin-bottom: 0.4rem; }
  .score-badge {
    display: inline-block;
    background: linear-gradient(135deg, #0B1F4F, #1a3a7a);
    color: white; padding: 0.5rem 2rem;
    border-radius: 30px; font-size: 1.5rem;
    font-weight: 700; letter-spacing: 2px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(11,31,79,0.3);
  }
  .grade-label { font-size: 1rem; color: #444; margin-bottom: 0.2rem; }
  .grade-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.8rem; color: #138808;
    font-weight: 700; margin-bottom: 1rem;
  }
  .divider {
    width: 300px; height: 1px; margin: 0 auto 1.5rem;
    background: linear-gradient(to right, transparent, #C5960C, transparent);
  }
  .footer-row {
    display: flex; justify-content: space-between;
    align-items: flex-end; padding-top: 0.5rem;
  }
  .footer-line { border-bottom: 2px solid #C5960C; width: 120px; margin-bottom: 5px; }
  .footer-text { font-size: 0.75rem; color: #666; font-family: 'Playfair Display', Georgia, serif; }
  .medal { font-size: 3rem; line-height: 1; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2)); }
  .verified { font-size: 0.6rem; color: #C5960C; font-weight: 700; letter-spacing: 2px; margin-top: 3px; }
  .stars { color: #C5960C; font-size: 0.9rem; letter-spacing: 4px; margin-bottom: 0.8rem; }
  @media print {
    body { background: white !important; padding: 0.5rem; }
    .cert-outer { box-shadow: none; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
</style>
</head>
<body>
  <div class="cert-outer">
    <div class="tricolor-bar"></div>
    <div class="cert-inner">
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
      <div style="text-align:center;">
        <div class="emblem">🗳️</div>
        <div class="cert-title">ElectWise</div>
        <div class="cert-subtitle">${t("cert_civic_iq")}</div>
        <div class="gold-line"></div>
        <div class="stars">★ ★ ★ ★ ★</div>
        <div class="certify-text">${t("cert_proudly")}</div>
        <div class="cert-name">${name}</div>
        <div class="name-underline"></div>
        <div class="score-label">${t("cert_achieved")}</div>
        <div class="score-badge">${score}</div>
        <div class="grade-label">${t("cert_title_earned")}</div>
        <div class="grade-title">🏆 ${grade}</div>
        <div class="divider"></div>
        <div class="footer-row">
          <div style="text-align:left;">
            <div class="footer-line"></div>
            <div class="footer-text">${t("cert_date")}: <strong>${date}</strong></div>
          </div>
          <div style="text-align:center;">
            <div class="medal">🏅</div>
            <div class="verified">${t("cert_verified")}</div>
          </div>
          <div style="text-align:right;">
            <div class="footer-line" style="margin-left:auto;"></div>
            <div class="footer-text"><strong style="color:#0B1F4F;">ElectWise</strong><br>${t("cert_platform")}</div>
          </div>
        </div>
        <div style="font-family: monospace; font-size: 0.7rem; color: #888; margin-top: 1rem; opacity: 0.8;">VERIFICATION ID: ${certCode}</div>
      </div>
    </div>
    <div class="tricolor-bar"></div>
  </div>
<script>
  window.onload = function() {
    setTimeout(function() { window.print(); }, 1000);
  };
<\/script>
</body></html>`);
            printWin.document.close();
        },
        share: () => {
            const sc = ElectWise.voteriq.score;
            const text = currentLang === 'en'
                ? `I scored ${sc}/200 on the ElectWise Voter IQ Challenge! 🗳️ Test your knowledge at ElectWise.`
                : `मैंने ElectWise Voter IQ चैलेंज में ${sc}/200 स्कोर किया! 🗳️ ElectWise पर अपना ज्ञान परखें।`;
            if (navigator.share) {
                navigator.share({ title: 'ElectWise Voter IQ', text: text }).catch(() => { });
            } else {
                navigator.clipboard.writeText(text).then(() => alert(currentLang === 'en' ? 'Score copied to clipboard!' : 'स्कोर क्लिपबोर्ड पर कॉपी किया गया!')).catch(() => alert(text));
            }
        }
    },

    myths: {
        init: () => {
            const container = document.getElementById('myths_container');
            if (!container) return;
            container.innerHTML = '';
            const data = currentLang === 'en' ? ElectWiseData.mythData_en : ElectWiseData.mythData_hi;
            data.forEach((item, i) => {
                const card = document.createElement('div');
                card.className = 'myth-card-wrapper';
                card.style.cssText = 'perspective: 1000px; height: 230px; cursor: pointer;';
                card.innerHTML = `
                <div class="myth-card-inner" id="mythInner${i}" style="
                    position: relative; width: 100%; height: 100%;
                    transform-style: preserve-3d;
                    transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
                ">
                    <div class="myth-front" style="
                    position: absolute; width: 100%; height: 100%;
                    backface-visibility: hidden; -webkit-backface-visibility: hidden;
                    background: #FFF0F0; border-radius: 14px;
                    border-left: 4px solid #e53935;
                    padding: 1.5rem; box-sizing: border-box;
                    display: flex; flex-direction: column; justify-content: center;
                    box-shadow: 0 4px 20px rgba(229,57,53,0.10);
                    ">
                    <div style="color:#e53935;font-weight:700;font-size:0.85rem;margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:1px;">❌ ${t("myth_badge")}</div>
                    <div style="color:#0B1F4F;font-weight:600;font-size:0.95rem;line-height:1.5;">${item.myth}</div>
                    <div style="color:#888;font-size:0.75rem;margin-top:0.8rem;">${t("myth_click")}</div>
                    </div>
                    <div class="myth-back" style="
                    position: absolute; width: 100%; height: 100%;
                    backface-visibility: hidden; -webkit-backface-visibility: hidden;
                    background: #F0FFF4; border-radius: 14px;
                    border-left: 4px solid #138808;
                    padding: 1.5rem; box-sizing: border-box;
                    display: flex; flex-direction: column; justify-content: center;
                    transform: rotateY(180deg);
                    box-shadow: 0 4px 20px rgba(19,136,8,0.10);
                    ">
                    <div style="color:#138808;font-weight:700;font-size:0.85rem;margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:1px;">✅ ${t("fact_badge")}</div>
                    <div style="color:#0B1F4F;font-weight:600;font-size:0.9rem;line-height:1.5;">${item.fact}</div>
                    <div style="color:#666;font-size:0.75rem;margin-top:0.8rem;font-style:italic;">📋 ${item.source}</div>
                    </div>
                </div>`;
                card.addEventListener('click', () => {
                    const inner = document.getElementById(`mythInner${i}`);
                    inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
                });
                container.appendChild(card);
            });

            document.getElementById('flipAllBtn')?.addEventListener('click', () => {
                const data = currentLang === 'en' ? ElectWiseData.mythData_en : ElectWiseData.mythData_hi;
                data.forEach((_, i) => document.getElementById(`mythInner${i}`).style.transform = 'rotateY(180deg)');
            });
            document.getElementById('resetMythBtn')?.addEventListener('click', () => {
                const data = currentLang === 'en' ? ElectWiseData.mythData_en : ElectWiseData.mythData_hi;
                data.forEach((_, i) => document.getElementById(`mythInner${i}`).style.transform = 'rotateY(0deg)');
            });
        }
    },

    sim: {
        currentStep: 1,
        selectedCandidate: null,
        candidateNames: { 1: '🌸 Priya Sharma (NPP)', 2: '🌾 Rajesh Kumar (BJD)', 3: '🌊 Sunita Patel (DA)', 4: '✖️ NOTA' },
        nextStep: (n) => {
            const current = document.querySelector('.sim-step.active');
            const target = document.getElementById(`sim-step-${n}`);

            if (current) {
                current.classList.add('fade-out');
                setTimeout(() => {
                    current.classList.remove('active', 'fade-out');
                    if (target) {
                        target.classList.add('active');
                        // Immediate scroll to container if not visible
                        const container = document.querySelector('.sim-container');
                        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 300);
            } else {
                if (target) target.classList.add('active');
            }
            ElectWise.sim.currentStep = n;
        },
        verify: () => {
            const nameEl = document.getElementById('simVoterName');
            const idEl = document.getElementById('simVoterId');
            const ageEl = document.getElementById('simVoterAge');
            const msgEl = document.getElementById('sim_verify_msg');
            const proceedBtn = document.getElementById('sim_proceed_btn');
            const verifyBtn = document.getElementById('sim_verify_btn');

            if (!nameEl || !idEl || !ageEl || !msgEl) return;

            const name = nameEl.value.trim();
            const id = idEl.value.trim();
            const age = parseInt(ageEl.value);

            // Reset
            msgEl.style.display = 'none';
            msgEl.innerText = "";
            proceedBtn.style.display = 'none';

            if (!name || !id || !ageEl.value) {
                alert(t("sim_please_fill"));
                return;
            }

            // Constraints: Name (Alphabets + Spaces), ID (Numbers), Age (18+)
            const nameCheck = /^[A-Za-z\s]+$/.test(name);
            const idCheck = /^\d+$/.test(id);

            if (!nameCheck) {
                msgEl.innerText = t("sim_error_name");
                msgEl.style.color = "#FF6B1A";
                msgEl.style.display = 'block';
                return;
            }

            if (!idCheck) {
                msgEl.innerText = t("sim_error_id");
                msgEl.style.color = "#FF6B1A";
                msgEl.style.display = 'block';
                return;
            }

            if (age < 18) {
                msgEl.innerText = t("sim_error_age");
                msgEl.style.color = "#FF6B1A";
                msgEl.style.display = 'block';
                return;
            }

            // Success
            msgEl.innerText = t("sim_success_verify");
            msgEl.style.color = "#138808";
            msgEl.style.display = 'block';

            const successIcon = document.getElementById('sim_success_icon');
            if (successIcon) {
                successIcon.style.display = 'block';
                successIcon.style.animation = 'revealUp 0.5s forwards';
            }

            proceedBtn.style.display = 'inline-block';
            verifyBtn.disabled = true;
            nameEl.disabled = true;
            idEl.disabled = true;
            ageEl.disabled = true;
        },
        selectCandidate: (n) => {
            ElectWise.sim.selectedCandidate = n;
            document.querySelectorAll('.evm-btn').forEach(b => b.style.background = 'white');
            const btns = document.querySelectorAll('.evm-btn');
            if (btns[n - 1]) btns[n - 1].style.background = '#e3f2fd';
            document.getElementById('sim_confirm_btn').disabled = false;
            // Beep
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                osc.type = 'sine'; osc.frequency.setValueAtTime(800, ctx.currentTime);
                osc.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.3);
            } catch (e) { }
        },
        castVote: () => {
            if (!ElectWise.sim.selectedCandidate) { alert('Select a candidate first!'); return; }
            const n = ElectWise.sim.selectedCandidate;
            const name = ElectWise.sim.candidateNames[n] || 'Unknown';
            // Update votes
            let v = ElectWise.state.votes;
            v[n] = (v[n] || 0) + 1;
            LS.setJSON('votes', v);
            ElectWise.state.votes = v;
            // Show VVPAT
            ElectWise.sim.nextStep(4);
            const slip = document.getElementById('vvpat_slip_content');
            if (slip) {
                slip.innerHTML = `<strong>${name}</strong><br>Vote Recorded Successfully<br>${new Date().toLocaleTimeString()}`;
                slip.classList.remove('printing'); // Reset
                void slip.offsetWidth; // Trigger reflow
                slip.classList.add('printing');
            }
            setTimeout(() => {
                const btn = document.getElementById('sim_vvpat_next');
                if (btn) btn.style.display = 'inline-block';
            }, 2000);
        },
        showResults: () => {
            ElectWise.sim.nextStep(6);
            LS.set('simComplete', 'true');
            ElectWise.state.simComplete = true;
            ElectWise.dashboard.update();
            const v = ElectWise.state.votes;
            const total = Object.values(v).reduce((a, b) => a + b, 0) || 1;
            const container = document.getElementById('sim_results_container');
            if (container) {
                container.innerHTML = Object.entries(ElectWise.sim.candidateNames).map(([id, name]) => {
                    const count = v[id] || 0;
                    const pct = ((count / total) * 100).toFixed(1);
                    return `
                        <div style="margin-bottom:1.5rem;" class="reveal active">
                            <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;font-weight:600;">
                                <span style="color:white;">${name}</span>
                                <span style="color:var(--gold);" class="stat-number-small" data-target="${count}">${count} votes</span>
                            </div>
                            <div style="background:rgba(255,255,255,0.1);border-radius:10px;height:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.05);">
                                <div class="progress-bar-fill" style="background:linear-gradient(90deg, var(--gold), #ffca28);height:100%;border-radius:10px;width:0%;transition:width 1.5s cubic-bezier(0.23, 1, 0.32, 1);" data-pct="${pct}"></div>
                            </div>
                        </div>
                    `;
                }).join('');

                // Animate progress bars after injection
                setTimeout(() => {
                    container.querySelectorAll('.progress-bar-fill').forEach(bar => {
                        bar.style.width = bar.getAttribute('data-pct') + '%';
                    });
                }, 100);
            }
        },
        reset: () => {
            ElectWise.state.votes = { '1': 0, '2': 0, '3': 0, '4': 0 };
            LS.setJSON('votes', ElectWise.state.votes);
            ElectWise.sim.selectedCandidate = null;
            ElectWise.sim.currentStep = 1;
            // Reset UI
            document.querySelectorAll('.sim-step').forEach(s => s.classList.remove('active'));
            document.getElementById('sim-step-1')?.classList.add('active');
            document.querySelectorAll('.evm-btn').forEach(b => b.style.background = 'white');
            const cb = document.getElementById('sim_confirm_btn'); if (cb) cb.disabled = true;
            const vm = document.getElementById('sim_verify_msg'); if (vm) vm.style.display = 'none';
            const pb = document.getElementById('sim_proceed_btn'); if (pb) pb.style.display = 'none';
            const vb = document.getElementById('sim_verify_btn'); if (vb) vb.disabled = false;
            const si = document.getElementById('sim_success_icon'); if (si) si.style.display = 'none';
            const vn = document.getElementById('sim_vvpat_next'); if (vn) vn.style.display = 'none';
            LS.set('simComplete', '');
            ElectWise.state.simComplete = false;
            ElectWise.dashboard.update();
        }
    },

    guide: {
        currentStep: 1,
        totalSteps: 5,
        move: (dir) => {
            const next = ElectWise.guide.currentStep + dir;
            if (next < 1 || next > ElectWise.guide.totalSteps) return;

            document.getElementById(`step${ElectWise.guide.currentStep}`).classList.remove('active');
            ElectWise.guide.currentStep = next;
            document.getElementById(`step${ElectWise.guide.currentStep}`).classList.add('active');

            document.getElementById('step-indicator').innerText = `Step ${ElectWise.guide.currentStep} of ${ElectWise.guide.totalSteps}`;
            document.getElementById('prevBtn').disabled = (ElectWise.guide.currentStep === 1);
            document.getElementById('nextBtn').innerText = (ElectWise.guide.currentStep === ElectWise.guide.totalSteps) ? 'Finish' : 'Next';

            if (ElectWise.guide.currentStep === ElectWise.guide.totalSteps) {
                LS.set('guideComplete', 'true');
                ElectWise.dashboard.update();
            }
        },
        updateUI: () => {
            // Placeholder for compatibility
        }
    }
};

const setupStatsCounter = () => {
    const statItems = document.querySelectorAll('.stat-number');
    const statObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const target = parseFloat(e.target.getAttribute('data-target'));
                const suffix = e.target.getAttribute('data-suffix') || '';
                let count = 0;
                const inc = target / 50;
                const timer = setInterval(() => {
                    count += inc;
                    if (count >= target) { count = target; clearInterval(timer); }
                    e.target.textContent = (Math.round(count * 100) / 100) + suffix;
                }, 30);
                statObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    statItems.forEach(el => statObs.observe(el));
};

function createConfetti() {
    const canvas = document.getElementById('confetti_canvas');
    if (!canvas) return;
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particles = [];
    const colors = ['#FF6B1A', '#138808', '#0B1F4F', '#F0A500'];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2, dx: Math.random() * 2 - 1, dy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
    function animateConfetti() {
        if (canvas.style.display === 'none') return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.fill();
            p.x += p.dx; p.y += p.dy;
            if (p.y > canvas.height) p.y = -10;
        });
        requestAnimationFrame(animateConfetti);
    }
    animateConfetti();
    setTimeout(() => { canvas.style.display = 'none'; }, 3000);
}

// Mobile menu
function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('active'));
});

// Global aliases for HTML onclick compatibility
function showConstituency() { ElectWise.constituency.show(); }
function renderCandidates(filter) { ElectWise.candidate.render(filter); }
function moveGuide(dir) { ElectWise.guide.move(dir); }

// Init
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    applyFontSize(currentFontIndex);
    setupStatsCounter();
    Nav.init();
    ElectWise.dashboard.update();
    ElectWise.eligibility.init();
    ElectWise.timeline.init();
    ElectWise.booths.init();
    ElectWise.constituency.init();
    ElectWise.results.init();
    ElectWise.candidate.init();
    ElectWise.myths.init();
    ElectWise.guide.updateUI();

    // Eligibility form submit
    const elForm = document.getElementById('eligibility-form');
    if (elForm) elForm.addEventListener('submit', (e) => ElectWise.eligibility.check(e));

    // Mobile hamburger
    document.getElementById('mobileMenuBtn')?.addEventListener('click', toggleMobileMenu);

    const bestIq = ElectWise.state.iqScore;
    const bestIqEl = document.getElementById('iq_best_score');
    if (bestIq && bestIqEl) {
        bestIqEl.innerText = `Your Best Score: ${bestIq}`;
    }

    // Populate state dropdown in eligibility
    const elState = document.getElementById('el_state');
    if (elState) {
        elState.innerHTML = '<option value="">Select State/UT...</option>';
        Object.keys(stateDistrictData).sort().forEach(s => {
            elState.innerHTML += `<option value="${s}">${s}</option>`;
        });
    }

    // Animate cards on home section load
    setTimeout(() => {
        document.querySelectorAll('#home .reveal').forEach(c => c.classList.add('active'));
    }, 300);

    // Initialize Premium Motion System
    ElectWise.motion.init();
});



// Premium Motion Design System
ElectWise.motion = {
    init: () => {
        ElectWise.motion.initScrollReveal();
        ElectWise.motion.initTiltEffects();
        ElectWise.motion.initParallax();
        ElectWise.motion.initRipples();
        ElectWise.motion.initTimelineWave();
        ElectWise.motion.initEligibilityRipple();
    },

    initScrollReveal: () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    if (entry.target.classList.contains('stat-number')) {
                        ElectWise.motion.animateNumber(entry.target);
                    }
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .stat-number').forEach((el, i) => {
            // Apply staggered delay if it's in a grid
            const grid = el.closest('.grid-2, .grid-3, .stats-bar');
            if (grid) {
                const index = Array.from(grid.querySelectorAll('.reveal, .stat-number')).indexOf(el);
                el.style.transitionDelay = `${index * 100}ms`;
            }
            revealObserver.observe(el);
        });
    },

    initTiltEffects: () => {
        if (window.innerWidth < 768) return; // Disable on mobile

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // Skip tilt effect for booth section cards
            if (card.closest('#booths')) return;

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20; // Max 5-10 deg
                const rotateY = (centerX - x) / 20;

                card.style.setProperty('--tilt-x', `${rotateX}deg`);
                card.style.setProperty('--tilt-y', `${rotateY}deg`);
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            });
        });
    },

    initParallax: () => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.getElementById('home');
            if (hero && scrolled < 800) {
                const shapes = hero.querySelectorAll('.hero-shape');
                shapes.forEach((shape, i) => {
                    const speed = 0.1 * (i + 1);
                    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
                });
            }
        });
    },

    animateNumber: (el) => {
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        const easeOutQuint = (t) => 1 + (--t) * t * t * t * t;

        const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuint(progress);

            const current = target * easedProgress;

            if (target % 1 === 0) {
                el.innerText = Math.floor(current) + suffix;
            } else {
                el.innerText = current.toFixed(2) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    },

    initRipples: () => {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-primary, .btn-secondary, .btn-outline');
            if (!btn) return;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            btn.appendChild(ripple);

            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            ripple.addEventListener('animationend', () => ripple.remove());
        });
    },

    initTimelineWave: () => {
        const canvas = document.getElementById('timeline-wave-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let points = [];
        let tick = 0;

        const resize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            width = canvas.width = rect.width;
            height = canvas.height = rect.height;

            points = [];
            const spacing = 45;
            const rows = Math.ceil(height / spacing) + 2;
            const cols = Math.ceil(width / spacing) + 2;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    points.push({
                        baseX: c * spacing,
                        baseY: r * spacing
                    });
                }
            }
        };

        window.addEventListener('resize', resize);
        resize();

        const animate = () => {
            // Self-heal if initialized while hidden
            if (points.length === 0) {
                resize();
                requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, width, height);
            tick += 0.03; // Slightly decreased speed for a smoother, premium feel

            points.forEach(p => {
                const dist = (p.baseX * 0.005) + (p.baseY * 0.005);
                const wave = Math.sin(tick + dist) * 20;

                const drawX = p.baseX + Math.cos(tick + dist) * 8;
                const drawY = p.baseY + wave;

                const depthFactor = drawY / height;
                const opacity = 0.15 + (depthFactor * 0.35);
                const radius = 1.2 + (depthFactor * 1.5);

                ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;

                ctx.beginPath();
                ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
    },

    initEligibilityRipple: () => {
        const canvas = document.getElementById('eligibility-ripple-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let ripples = [];
        let symbols = [];
        let tick = 0;

        const resize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;

            // Create static/faint symbols
            symbols = [];
            for (let i = 0; i < 15; i++) {
                symbols.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: 20 + Math.random() * 40,
                    opacity: 0.12 + Math.random() * 0.1,
                    speed: 0.1 + Math.random() * 0.2
                });
            }
        };

        window.addEventListener('resize', resize);
        resize();

        const createRipple = () => {
            ripples.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: 0,
                maxR: 100 + Math.random() * 200,
                opacity: 0.3
            });
        };

        const animate = () => {
            if (width === 0 || height === 0) {
                resize();
                requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, width, height);
            tick += 0.01;

            // Draw Symbols (?)
            ctx.font = 'bold 40px Outfit';
            symbols.forEach(s => {
                s.y -= s.speed;
                if (s.y < -50) s.y = height + 50;
                ctx.fillStyle = `rgba(0, 0, 0, ${s.opacity})`;
                ctx.fillText('?', s.x, s.y);
            });

            // Draw Ripples
            if (Math.random() < 0.02) createRipple();

            ripples.forEach((r, i) => {
                r.r += 2;
                r.opacity -= 0.003;

                ctx.strokeStyle = `rgba(0, 162, 255, ${r.opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
                ctx.stroke();

                if (r.opacity <= 0) ripples.splice(i, 1);
            });

            requestAnimationFrame(animate);
        };

        animate();
    }
};

// Global Animation Utilities
function animateValue(el, start, end, duration, suffix) {
    let startTime = null;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = progress * (end - start) + start;
        el.textContent = current.toFixed(1) + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Global function for HTML onclick
function showConstituency() {
    ElectWise.constituency.show();
}

// IntersectionObserver for Constituency Section Animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Re-trigger animations for children
                const title = entry.target.querySelector('.const-explorer-title');
                const underline = entry.target.querySelector('.const-title-underline');
                const leftCard = entry.target.querySelector('.constituency-left-card');
                const rightCard = entry.target.querySelector('.constituency-right-card');

                if (title) { title.style.animation = 'none'; title.offsetHeight; title.style.animation = 'titleReveal 0.7s cubic-bezier(0.23,1,0.32,1)'; }
                if (underline) { underline.style.animation = 'none'; underline.offsetHeight; underline.style.animation = 'lineGrow 0.8s cubic-bezier(0.23,1,0.32,1) forwards'; }
                if (leftCard) { leftCard.style.animation = 'none'; leftCard.offsetHeight; leftCard.style.animation = 'slideInLeft 0.6s cubic-bezier(0.23,1,0.32,1) 0.1s both'; }
                if (rightCard) { rightCard.style.animation = 'none'; rightCard.offsetHeight; rightCard.style.animation = 'slideInRight 0.6s cubic-bezier(0.23,1,0.32,1) 0.2s both'; }
            }
        });
    }, { threshold: 0.2 });

    const constituencySection = document.getElementById('constituency');
    if (constituencySection) observer.observe(constituencySection);

    // Ripple effect for Analyze Data button
    const btnAnalyze = document.getElementById('btnAnalyze');
    if (btnAnalyze) {
        btnAnalyze.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            ripple.addEventListener('animationend', () => ripple.remove());
        });
    }

    // Loading shimmer for dropdowns
    const stateSelect = document.getElementById('constituencyState');
    const distSelect = document.getElementById('constituencyDistrict');
    if (stateSelect && distSelect) {
        stateSelect.addEventListener('change', () => {
            if (stateSelect.value) {
                distSelect.classList.add('loading');
                setTimeout(() => {
                    distSelect.classList.remove('loading');
                }, 1000);
            }
        });
    }
});

