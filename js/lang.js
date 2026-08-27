document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.projects": "Proyectos",
      "nav.guides": "Guías",
      "nav.blog": "Blog",
      "nav.contact": "Contacto",

      "lang.button": "Cambiar idioma",

      "meta.description": "Portfolio de ciberseguridad, pentesting y Writeups de @wbossw.",
      "meta.og.title": "wbossw - Ciberseguridad & Pentesting & Bug Bounty",
      "meta.og.description": "Auditorías ofensivas, laboratorios y recursos de seguridad.",
      "logo.alt": "wbossw logo",

      "page.title": "wbossw Hacker Ético",

      "home.terminal": "wbossw@root:~$ Sistema inicializado. Investigación activa.",

      "home.description": "Investigador de seguridad especializado en Bug Bounty, Pentesting y análisis de vulnerabilidades. Cuento con experiencia evaluando la seguridad en sistemas e infraestructuras Linux y Windows, aplicaciones web, APIs y sistemas basados en modelos de lenguaje (LLMs). Mi foco principal es la identificación de fallos de seguridad con impacto real, abarcando desde vulnerabilidades de control de acceso y lógica de negocio hasta debilidades en entornos de IA. Este portfolio reúne una selección de proyectos, herramientas desarrolladas, writeups e investigaciones. Sirve tanto de registro para mi aprendizaje continuo como de plataforma para compartir recursos y reflejar mi compromiso con la divulgación responsable.",

      "skills.vulnerability.title": "Investigación de Vulnerabilidades",
      "skills.vulnerability.description": "Identificación, análisis y divulgación responsable de vulnerabilidades de seguridad en aplicaciones web, APIs y sistemas basados en inteligencia artificial (LLMs). Especializado en el descubrimiento de fallos con impacto real.",

      "skills.evidence.title": "Análisis de evidencias",
      "skills.evidence.description": "Recopilación, preservación y análisis técnico de evidencias digitales obtenidas durante investigaciones de seguridad. Enfocado en la validación de vulnerabilidades, el estudio de indicadores y la documentación de hallazgos de forma precisa.",

      "skills.pentesting.title": "Pentesting",
      "skills.pentesting.description": "Evaluación de la seguridad de aplicaciones y servicios mediante metodologías ofensivas para identificar vulnerabilidades y proporcionar recomendaciones técnicas orientadas a su mitigación.",

      "skills.tools.title": "Desarrollo de Herramientas",
      "skills.tools.description": "Diseño y desarrollo de herramientas y automatizaciones orientadas a optimizar tareas de auditoría, análisis de seguridad e investigación de vulnerabilidades.",

      "social.github": "Perfil de GitHub",
      "social.contact": "Contacto",
      "social.discoveries": "Descubrimientos",

      "ticker.text": "wbossw • Bug Bounty Hunter • Ciberseguridad & Hacking Ético • Writeups Hack The Box (HTB) & Hack My VM • Certificaciones • Recursos"
    },

    en: {
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.guides": "Guides",
      "nav.blog": "Blog",
      "nav.contact": "Contact",

      "lang.button": "Change language",

      "meta.description": "Cybersecurity, pentesting and writeup portfolio by @wbossw.",
      "meta.og.title": "wbossw - Cybersecurity & Pentesting & Bug Bounty",
      "meta.og.description": "Offensive security assessments, labs and security resources.",
      "logo.alt": "wbossw logo",

      "page.title": "wbossw Ethical Hacker",

      "home.terminal": "wbossw@root:~$ System initialized. Research active.",

      "home.description": "Security researcher specializing in Bug Bounty, Pentesting, and vulnerability analysis. Experienced in assessing the security of Linux and Windows systems and infrastructure, web applications, APIs, and systems based on large language models (LLMs). My primary focus is identifying security flaws with real-world impact, ranging from access control and business logic vulnerabilities to weaknesses in AI environments. This portfolio brings together a selection of projects, tools I have developed, writeups, and security research. It serves both as a record of my continuous learning and as a platform for sharing resources and reflecting my commitment to responsible disclosure.",

      "skills.vulnerability.title": "Vulnerability Research",
      "skills.vulnerability.description": "Identification, analysis, and responsible disclosure of security vulnerabilities in web applications, APIs, and systems based on artificial intelligence (LLMs). Specialized in discovering security flaws with real-world impact.",

      "skills.evidence.title": "Evidence Analysis",
      "skills.evidence.description": "Collection, preservation, and technical analysis of digital evidence obtained during security investigations. Focused on vulnerability validation, indicator analysis, and accurate documentation of findings.",

      "skills.pentesting.title": "Pentesting",
      "skills.pentesting.description": "Security assessment of applications and services using offensive methodologies to identify vulnerabilities and provide technical recommendations aimed at mitigating them.",

      "skills.tools.title": "Tool Development",
      "skills.tools.description": "Design and development of tools and automation aimed at optimizing security auditing, analysis, and vulnerability research tasks.",

      "social.github": "GitHub Profile",
      "social.contact": "Contact",
      "social.discoveries": "Discoveries",

      "ticker.text": "wbossw • Bug Bounty Hunter • Cybersecurity & Ethical Hacking • Hack The Box (HTB) & Hack My VM Writeups • Certifications • Resources"
    }
  };

  let currentLang = localStorage.getItem('site_lang') || 'es';

  const langBtn = document.getElementById('lang-btn');
  const langLabel = document.getElementById('lang-label');

  function applyLanguage(lang) {
    if (!translations[lang]) {
      lang = 'es';
    }

    const dictionary = translations[lang];

    const textElements = document.querySelectorAll('[data-i18n]');

    textElements.forEach(el => {
      const key = el.getAttribute('data-i18n');

      if (dictionary[key] !== undefined) {
        el.textContent = dictionary[key];
      }
    });

    const attrElements = document.querySelectorAll('[data-i18n-attr]');

    attrElements.forEach(el => {
      const config = el.getAttribute('data-i18n-attr');
      const separatorIndex = config.indexOf(':');

      if (separatorIndex === -1) {
        return;
      }

      const attrName = config.substring(0, separatorIndex);
      const key = config.substring(separatorIndex + 1);

      if (dictionary[key] !== undefined) {
        el.setAttribute(attrName, dictionary[key]);
      }
    });

    document.documentElement.setAttribute('lang', lang);

    if (langLabel) {
      langLabel.textContent = lang === 'es' ? 'ES' : 'EN';
    }

    localStorage.setItem('site_lang', lang);
    currentLang = lang;
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const targetLang = currentLang === 'es' ? 'en' : 'es';

      applyLanguage(targetLang);
    });
  }

  applyLanguage(currentLang);
});