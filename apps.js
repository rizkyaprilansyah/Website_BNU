document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        id: {
            "nav-home": "home",
            "nav-about": "Tentang Kami",
            "nav-team": "Struktur Tim",
            "nav-facilities": "Fasilitas",
            "nav-gallery": "Agenda Pelatihan",
            "nav-location": "Lokasi",
            "hero-title": "Selamat Datang di <span>BNI CORPORATE UNIVERSITY</span>",
            "hero-desc": "Menjadi Pusat Pembelajaran & Pengembangan Keunggulan SDM BNI untuk menciptakan Insan BNI yang berintegritas, terampil, dan profesional.",
            "hero-btn": "Selengkapnya",
            "about-title": "<span>Tentang</span> Kami",
            "about-desc": "Operation & Support Banking Academy Officer berpartisipasi aktif dalam penyelenggaraan pembelajaran dengan berbagai metode pembelajaran (in-class, e-learning, social learning, dan lain-lain), baik di Kantor Pusat maupun Kantor Wilayah.",
            "about-visi-title": "Visi Kami",
            "about-visi-text": "Menjadi entitas pembelajaran kelas dunia untuk melahirkan pemimpin holistic dan profesional lembaga keuangan BNI yang unggul.",
            "about-misi-title": "Misi Kami",
            "about-misi-text": "1. Menyediakan sistem dan solusi pembelajaran kolaboratif yang mampu mendukung tujuan perusahaan<br>2. Membangun kemitraan sinergis yang profesional dan berintegritas<br>3. Berperan dalam mencerdaskan masyarakat.",
            "about-stat-title-1": "Alumni Terlatih",
            "about-stat-title-2": "Pelatihan terlaksana",
            "about-stat-title-3": "Penghargaan Global",
            "team-title": "<span>Tim</span> Kami",
            "team-subtitle": "Orang-orang profesional dan berintegritas tinggi di balik BNU Surabaya.",
            "team-role-leader": "Team Leader",
            "team-role-bina": "Bina",
            "team-role-tad": "TAD",
            "team-role-security": "Security",
            "team-role-it": "IT & Jaringan",
            "facilities-title": "<span>Fasilitas</span> Kami",
            "facilities-desc": "Dalam menjalankan program pembelajaran dan pengembangan, BNI Corporate University didukung oleh berbagai fasilitas modern kelas dunia.",
            "slide-tag-1": "Learning Environment",
            "slide-title-1": "Gedung Pembelajaran Modern",
            "slide-desc-1": "Ruang belajar yang dinamis untuk merangsang kreativitas dan kompetensi unggulan.",
            "slide-tag-2": "Collaborative Spaces",
            "slide-title-2": "Kolaborasi & Sinergi",
            "slide-desc-2": "Area kolaboratif terbuka untuk berdiskusi, berbagi ide, dan bekerja bersama.",
            "slide-tag-3": "Executive Academy",
            "slide-title-3": "Pendidikan Kepemimpinan",
            "slide-desc-3": "Kelas eksekutif dengan fasilitas terbaik bagi para calon pemimpin masa depan BNI.",
            "floor-7-btn": "Lantai 7",
            "floor-8-btn": "Lantai 8",
            "fac-7-n1": "Cafe",
            "fac-7-n2": "Lounge",
            "fac-7-n3": "Dummy Bank",
            "fac-7-n4": "Auditorium",
            "fac-7-n5": "Laboratorium Komputer",
            "fac-7-n6": "Musholla",
            "fac-8-n1": "Cafe",
            "fac-8-n2": "Lounge",
            "fac-8-n3": "Ruang Learn",
            "fac-8-n4": "Ruang Grow",
            "fac-8-n5": "Ruang Lead",
            "fac-8-n6": "Ruang Meeting",
            "fac-8-n7": "Laktasi",
            "fac-8-n8": "Mushola",
            "agenda-title": "Agenda <span>Pelatihan</span>",
            "agenda-subtitle": "Jadwal pelatihan yang terdapat di BNI Corporate University Regional Surabaya",
            "agenda-tab-ongoing": "Sedang Berjalan",
            "agenda-tab-upcoming": "Akan Datang",
            "agenda-loading-text": "Memuat agenda dari Google Calendar...",
            "agenda-error-msg": "Gagal memuat agenda pelatihan.",
            "agenda-retry": "Coba Lagi",
            "agenda-empty-ongoing": "Tidak ada pelatihan yang sedang berjalan saat ini.",
            "agenda-empty-upcoming": "Belum ada jadwal pelatihan mendatang.",
            "footer-disclaimer-1": "BNI berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK) & Bank Indonesia (BI).",
            "footer-disclaimer-2": "BNI merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS). Maksimum nilai simpanan yang dijamin LPS per Nasabah adalah Rp 2 miliar."
        },
        en: {
            "nav-home": "home",
            "nav-about": "About Us",
            "nav-team": "Team Structure",
            "nav-facilities": "Facilities",
            "nav-gallery": "Training Agenda",
            "nav-location": "Location",
            "hero-title": "Welcome to <span>BNI CORPORATE UNIVERSITY</span>",
            "hero-desc": "Becoming the Center of Learning & Development of BNI HR Excellence to create BNI people with integrity, skill, and professionalism.",
            "hero-btn": "Learn More",
            "about-title": "<span>About</span> Us",
            "about-desc": "BNI Corporate University is committed to developing the best competencies of BNI employees through structured, innovative, and international standard learning programs to nurture future banking leaders.",
            "about-visi-title": "Our Vision",
            "about-visi-text": "To become a world-class banking HR development center producing professional leaders with integrity.",
            "about-misi-title": "Our Mission",
            "about-misi-text": "To organize innovative, modern technology-based learning programs that support the achievement of BNI's business strategies.",
            "about-stat-title-1": "Trained Alumni",
            "about-stat-title-2": "Completed Training",
            "about-stat-title-3": "Global Awards",
            "team-title": "<span>Our</span> Team",
            "team-subtitle": "Professional and high-integrity people behind the capacity development of BNI HR.",
            "team-role-leader": "Team Leader",
            "team-role-bina": "Bina",
            "team-role-tad": "TAD",
            "team-role-security": "Security",
            "team-role-it": "IT & Network",
            "facilities-title": "Our <span>Facilities</span>",
            "facilities-desc": "In carrying out learning and development programs, BNI Corporate University is supported by various world-class modern facilities.",
            "slide-tag-1": "Learning Environment",
            "slide-title-1": "Modern Learning Building",
            "slide-desc-1": "A dynamic learning space to stimulate creativity and superior competence.",
            "slide-tag-2": "Collaborative Spaces",
            "slide-title-2": "Collaboration & Synergy",
            "slide-desc-2": "Open collaborative area to discuss, share ideas, and work together.",
            "slide-tag-3": "Executive Academy",
            "slide-title-3": "Leadership Education",
            "slide-desc-3": "Executive classes with the best facilities for future BNI leaders.",
            "floor-7-btn": "7th Floor",
            "floor-8-btn": "8th Floor",
            "fac-7-n1": "Cafe",
            "fac-7-n2": "Lounge",
            "fac-7-n3": "Dummy Bank",
            "fac-7-n4": "Auditorium",
            "fac-7-n5": "Computer Laboratory",
            "fac-7-n6": "Prayer Room",
            "fac-8-n1": "Cafe",
            "fac-8-n2": "Lounge",
            "fac-8-n3": "Learn Room",
            "fac-8-n4": "Grow Room",
            "fac-8-n5": "Lead Room",
            "fac-8-n6": "Meeting Room",
            "fac-8-n7": "Lactation Room",
            "fac-8-n8": "Prayer Room",
            "agenda-title": "Training <span>Agenda</span>",
            "agenda-subtitle": "Training schedule at BNI Corporate University Regional Surabaya",
            "agenda-tab-ongoing": "Ongoing",
            "agenda-tab-upcoming": "Upcoming",
            "agenda-loading-text": "Loading agenda from Google Calendar...",
            "agenda-error-msg": "Failed to load training agenda.",
            "agenda-retry": "Try Again",
            "agenda-empty-ongoing": "There is no ongoing training at the moment.",
            "agenda-empty-upcoming": "There are no upcoming training schedules.",
            "footer-disclaimer-1": "BNI is licensed and supervised by the Financial Services Authority (OJK) & Bank Indonesia (BI).",
            "footer-disclaimer-2": "BNI is a participant of the Indonesia Deposit Insurance Corporation (LPS) guarantee program. The maximum deposit value guaranteed by LPS per customer is IDR 2 billion."
        }
    };

    const langOptions = document.querySelectorAll(".lang-option");

    function setLanguage(lang) {
        if (!translations[lang]) return;

        localStorage.setItem("preferred-lang", lang);

        langOptions.forEach(option => {
            if (option.getAttribute("data-lang") === lang) {
                option.classList.add("active");
            } else {
                option.classList.remove("active");
            }
        });

        const htmlKeys = ["about-title", "team-title", "hero-title", "facilities-title", "agenda-title", "about-misi-text", "about-visi-text"];
        const elements = document.querySelectorAll("[data-translate]");
        elements.forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                if (htmlKeys.includes(key)) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    langOptions.forEach(option => {
        option.addEventListener("click", () => {
            const lang = option.getAttribute("data-lang");
            setLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem("preferred-lang") || "id";
    setLanguage(savedLang);

    if (typeof feather !== "undefined") {
        feather.replace();
    }

    const floorTabs = document.querySelectorAll(".floor-tab-btn");
    const floorContainers = document.querySelectorAll(".facilities-grid-container");

    floorTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            floorTabs.forEach(t => t.classList.remove("active"));
            floorContainers.forEach(c => c.classList.remove("active"));
            tab.classList.add("active");
            const targetFloor = tab.getAttribute("data-floor");
            const targetContainer = document.getElementById(targetFloor);
            if (targetContainer) {
                targetContainer.classList.add("active");
            }
        });
    });

    // Initialize: Show 1st floor by default
    if (floorContainers.length > 0) {
        floorContainers[0].classList.add("active");
        if (floorTabs.length > 0) {
            floorTabs[0].classList.add("active");
        }
    }


    const GCAL_API_KEY = "AIzaSyAjjAQHSM_8vt2KkYLwLiSIHNTXBQoL8I0";
    const GCAL_ID = "rizkydani456@gmail.com";
    const MAX_RESULTS = 20;
    function renderEventCard(event, isOngoing = false) {
        const title = event.summary || "Pelatihan";
        const description = event.description || "Tidak ada deskripsi.";
        const location = event.location || "Lokasi belum ditentukan";

        const startRaw = event.start.dateTime || event.start.date;
        const endRaw = event.end.dateTime || event.end.date;
        const startDate = new Date(startRaw);
        const endDate = new Date(endRaw);

        const formattedDate = startDate.toLocaleDateString("id-ID", {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        });
        const formattedTime = event.start.dateTime
            ? startDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB"
            : "Sepanjang hari";

        const endFormatted = event.end.dateTime
            ? endDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB"
            : "";

        const liveBadge = isOngoing
            ? `<span class="badge-live"><span class="live-dot"></span>LIVE</span>`
            : "";

        return `
        <div class="event-card ${isOngoing ? "event-card--live" : ""}">
            <div class="event-card-top">
                <div class="event-date-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    ${formattedDate}
                </div>
                ${liveBadge}
            </div>
            <h3 class="event-title">${title}</h3>
            <p class="event-time">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${formattedTime}${endFormatted ? " &ndash; " + endFormatted : ""}
            </p>
            <p class="event-desc">${description}</p>
            <div class="event-location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${location}
            </div>
        </div>`;
    }
    function renderEmpty(containerId, translationKey) {
        const el = document.getElementById(containerId);
        if (el) {
            const currentLang = localStorage.getItem("preferred-lang") || "id";
            const message = translations[currentLang] && translations[currentLang][translationKey] 
                ? translations[currentLang][translationKey] 
                : "";

            el.innerHTML = `
            <div class="agenda-empty">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <p data-translate="${translationKey}">${message}</p>
            </div>`;
        }
    }
    window.fetchCalendarEvents = async function () {
        const loadingEl = document.getElementById("agenda-loading");
        const errorEl = document.getElementById("agenda-error");
        const errorMsg = document.getElementById("agenda-error-msg");
        const tabOngoing = document.getElementById("tab-ongoing");
        const tabUpcoming = document.getElementById("tab-upcoming");

        // Reset state
        if (loadingEl) { loadingEl.style.display = "flex"; }
        if (errorEl) { errorEl.style.display = "none"; }
        if (tabOngoing) { tabOngoing.style.display = "none"; }
        if (tabUpcoming) { tabUpcoming.style.display = "none"; }

        const now = new Date();
        const timeMin = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GCAL_ID)}/events`
            + `?key=${GCAL_API_KEY}`
            + `&timeMin=${timeMin}`
            + `&singleEvents=true`
            + `&orderBy=startTime`
            + `&maxResults=${MAX_RESULTS}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                const msg = errData?.error?.message || `HTTP ${response.status}`;
                throw new Error(msg);
            }

            const data = await response.json();

            if (loadingEl) { loadingEl.style.display = "none"; }
            if (tabOngoing) { tabOngoing.style.display = ""; }
            if (tabUpcoming) { tabUpcoming.style.display = ""; }

            const ongoingContainer = document.getElementById("events-ongoing");
            const upcomingContainer = document.getElementById("events-upcoming");

            const items = data.items || [];

            const ongoingEvents = items.filter(e => {
                const start = new Date(e.start.dateTime || e.start.date);
                const end = new Date(e.end.dateTime || e.end.date);
                return start <= now && end >= now;
            });

            const upcomingEvents = items.filter(e => {
                const start = new Date(e.start.dateTime || e.start.date);
                return start > now;
            });

            if (ongoingContainer) {
                if (ongoingEvents.length === 0) {
                    renderEmpty("events-ongoing", "agenda-empty-ongoing");
                } else {
                    ongoingContainer.innerHTML = ongoingEvents.map(e => renderEventCard(e, true)).join("");
                }
            }

            if (upcomingContainer) {
                if (upcomingEvents.length === 0) {
                    renderEmpty("events-upcoming", "agenda-empty-upcoming");
                } else {
                    upcomingContainer.innerHTML = upcomingEvents.map(e => renderEventCard(e, false)).join("");
                }
            }

            const tabBtns = document.querySelectorAll(".agenda-tab-btn");
            if (tabBtns[0]) {
                tabBtns[0].innerHTML = `<span class="pulse-dot"></span>Sedang Berjalan
                    <span class="tab-count">${ongoingEvents.length}</span>`;
            }
            if (tabBtns[1]) {
                tabBtns[1].innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Akan Datang <span class="tab-count">${upcomingEvents.length}</span>`;
            }

        } catch (err) {
            console.error("Gagal fetch Google Calendar:", err);
            if (loadingEl) { loadingEl.style.display = "none"; }
            if (errorEl) { errorEl.style.display = "flex"; }
            if (errorMsg) { errorMsg.textContent = `Gagal memuat agenda: ${err.message}`; }
        }
    };
    const agendaTabBtns = document.querySelectorAll(".agenda-tab-btn");
    agendaTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            agendaTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const targetTab = btn.getAttribute("data-tab");
            document.querySelectorAll(".agenda-tab-content").forEach(content => {
                content.classList.remove("active");
            });
            const targetEl = document.getElementById("tab-" + targetTab);
            if (targetEl) targetEl.classList.add("active");
        });
    });

    fetchCalendarEvents();


});
