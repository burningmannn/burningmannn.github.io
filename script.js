let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a, .mobile-tabbar .tab-link')

const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd';

async function fetchTonPrice() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Получаем цену TON в USD
    const tonPrice = data['the-open-network'].usd.toFixed(2);
    const tonPriceElement = document.getElementById('eth-price');

    // Обновляем содержимое HTML
    tonPriceElement.textContent = `TON Price: $${tonPrice}`;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}

// Вызываем функцию при загрузке страницы
fetchTonPrice();

function copyAddress() {
    const address = document.getElementById('eth-address').textContent;
    navigator.clipboard.writeText(address)
    .then(() => {
        alert('Address copied to clipboard!');
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Active nav/tab link on scroll
window.addEventListener('scroll', () => {
  const top = window.scrollY;
  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.includes('#' + id)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    const expanded = navbar.classList.contains('active');
    menuIcon.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

// Переключение темы и языка
document.addEventListener('DOMContentLoaded', () => {
    // Сброс якоря и скролл наверх, чтобы не было автоперехода к донату
    if (location.hash) {
        history.replaceState(null, null, ' ');
        window.scrollTo(0, 0);
    }
    const themeToggleButton = document.getElementById('theme-toggle');
    const languageToggleButton = document.getElementById('language-toggle');
    // Mobile sheet controls
    const settingsTab = document.getElementById('tab-settings');
    const sheet = document.getElementById('settings-sheet');
    const sheetBackdrop = document.getElementById('sheet-backdrop');
    const sheetClose = document.getElementById('settings-close');
    const langEnBtn = document.getElementById('language-toggle-mobile-en');
    const langRuBtn = document.getElementById('language-toggle-mobile-ru');
    const themeMobileDark = document.getElementById('theme-mobile-dark');
    const themeMobileLight = document.getElementById('theme-mobile-light');
    const menuIcon = document.getElementById('menu-icon');

    // Определяем словари для языков
    const firstName = { en: "Daniil", ru: "Даниил" };
    const lastName = { en: "Shutkin", ru: "Шуткин" };
    const content = {
        en: { 
            home: "About", 
            experience: "Experience", 

            projects: "Projects", 
            donate: "Donate",
            donate_me: "Donate",
            donate_me_span: "Me",
            experience: "Experience",

            timeline_date_two: "2019 - 2022",
            timeline_place_two: "Ural Polytechnic College",
            timeline_speciality_two: "Programming in computer systems",
            timeline_date_three: "2022 - 2025",
            timeline_place_three: "Ural State Mining University",
            timeline_speciality_three: "Informatics and Computer Science",

            timeline_date_five: "Nov 2023 - Presently",
            place_work_two: "Yekaterinburg Metro",
            timeline_work_two: "<strong>Position:</strong> Software Engineer",
            projects: "Projects",
            
            float_code: "Code",
            float_design: "Design",
            float_innovation: "Innovation",
            label_language: "Language",
            label_theme: "Theme",
            culon_description: "Landing page with Telegram Mini App integration. Service operates on VLESS protocol with automated payment processing via Telegram Stars and webhook integration for instant verification."
        },
        ru: { 
            home: "О себе", 
            experience: "Опыт", 

            projects: "Проекты", 
            donate: "Пожертвовать",
            donate_me: "Пожертвовать",
            donate_me_span: "мне",
            experience: "Опыт",

            timeline_date_two: "2019 - 2022",
            timeline_place_two: "Уральский Политехнический Колледж",
            timeline_speciality_two: "Программирование в компьютерных системах",
            timeline_date_three: "2022 - 2025",
            timeline_place_three: "Уральский Государственный Горный Университет",
            timeline_speciality_three: "Информатика и вычислительная техника",

            timeline_date_five: "Ноябрь 2023 - Настоящее время",
            place_work_two: "Екатеринбургский Метрополитен",
            timeline_work_two: "<strong>Позиция:</strong> Инженер-программист",
            projects: "Проекты",
            
            float_code: "Код",
            float_design: "Дизайн",
            float_innovation: "Инновации",
            label_language: "Язык",
            label_theme: "Тема",
            culon_description: "Лендинг с Telegram Mini App интеграцией. Сервис работает на протоколе VLESS с автоматизированной обработкой платежей через Telegram Stars и webhook интеграцией для мгновенной верификации."
        }
    };

    // Устанавливаем текущую тему и язык
    const currentTheme = localStorage.getItem('theme') || 'dark';
    let currentLanguage = localStorage.getItem('language') || 'en';
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    menuIcon.classList.toggle('light-theme', currentTheme === 'light');
    document.documentElement.lang = currentLanguage;
    updateContent(currentLanguage);
    // Initialize mobile controls state
    if (themeMobileDark && themeMobileLight) {
        themeMobileDark.classList.toggle('active', currentTheme !== 'light');
        themeMobileLight.classList.toggle('active', currentTheme === 'light');
    }
    if (langEnBtn && langRuBtn) {
        langEnBtn.classList.toggle('active', currentLanguage === 'en');
        langRuBtn.classList.toggle('active', currentLanguage === 'ru');
    }

    // Обработчик для переключения темы
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        menuIcon.classList.toggle('light-theme', newTheme === 'light');
        if (themeMobileDark && themeMobileLight) {
          themeMobileDark.classList.toggle('active', newTheme !== 'light');
          themeMobileLight.classList.toggle('active', newTheme === 'light');
        }
    });

    // Обработчик для переключения языка
    languageToggleButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'ru' : 'en'; // Обновляем текущий язык
        localStorage.setItem('language', currentLanguage);
        document.documentElement.lang = currentLanguage;
        updateContent(currentLanguage);
        if (langEnBtn && langRuBtn) {
            langEnBtn.classList.toggle('active', currentLanguage === 'en');
            langRuBtn.classList.toggle('active', currentLanguage === 'ru');
        }
    });

    // Bottom sheet open/close
    function openSheet() {
        sheet.setAttribute('aria-hidden', 'false');
        sheet.classList.add('open');
        sheetBackdrop.hidden = false;
    }
    function closeSheet() {
        sheet.classList.remove('open');
        sheet.setAttribute('aria-hidden', 'true');
        sheetBackdrop.hidden = true;
    }
    if (settingsTab && sheet && sheetBackdrop) {
        settingsTab.addEventListener('click', (e) => { e.preventDefault(); openSheet(); });
        sheetBackdrop.addEventListener('click', closeSheet);
        if (sheetClose) sheetClose.addEventListener('click', closeSheet);
    }

    // Mobile theme segmented control
    if (themeMobileDark && themeMobileLight) {
        themeMobileDark.addEventListener('click', () => {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            menuIcon.classList.remove('light-theme');
            themeMobileDark.classList.add('active');
            themeMobileLight.classList.remove('active');
        });
        themeMobileLight.addEventListener('click', () => {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            menuIcon.classList.add('light-theme');
            themeMobileLight.classList.add('active');
            themeMobileDark.classList.remove('active');
        });
    }

    // Mobile language segmented control
    if (langEnBtn && langRuBtn) {
        langEnBtn.addEventListener('click', () => {
            currentLanguage = 'en';
            localStorage.setItem('language', currentLanguage);
            document.documentElement.lang = currentLanguage;
            updateContent(currentLanguage);
            langEnBtn.classList.add('active');
            langRuBtn.classList.remove('active');
        });
        langRuBtn.addEventListener('click', () => {
            currentLanguage = 'ru';
            localStorage.setItem('language', currentLanguage);
            document.documentElement.lang = currentLanguage;
            updateContent(currentLanguage);
            langRuBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        });
    }

    // Функция для обновления контента на странице
    function updateContent(language) {
        const elements = Array.from(document.querySelectorAll('[data-translate]'));
        // 1. Плавно скрыть все элементы
        elements.forEach(el => el.classList.add('fade-text'));
        setTimeout(() => {
            // 2. Поменять текст, когда opacity=0
            elements.forEach(element => {
            // Не переводим карточки доната
            if (
                element.closest('.donate-card')
            ) {
                return;
            }
            const key = element.getAttribute('data-translate');
            if (content[language][key]) {
                element.innerHTML = content[language][key];
            }
        });
            // 3. Плавно показать все элементы
            setTimeout(() => {
                elements.forEach(el => el.classList.remove('fade-text'));
            }, 30); // небольшая задержка для плавности
        }, 350); // время совпадает с transition в CSS
        // Обновляем имя и фамилию
        document.querySelector('.firstName').textContent = firstName[language];
        document.querySelector('.lastName').textContent = lastName[language];
    }
});

let items = document.querySelectorAll('.slider .item');

// Устанавливаем активную карточку на индекс средней карточки
let active = Math.floor(items.length / 2);

function loadShow() {
  let stt = 0;

  // Удаляем класс active у всех карточек
  items.forEach(item => {
    item.classList.remove('active');
  });

  // Устанавливаем класс active для текущей активной карточки
  items[active].classList.add('active');

  // Настройки для активного элемента
  items[active].style.transform = `none`;
  items[active].style.opacity = 1;
  items[active].style.zIndex = 1; // Активная карточка всегда поверх
  // Разрешаем клики на кнопки только для активной карточки
  const activeButton = items[active].querySelector('.btn');
  if (activeButton) activeButton.style.pointerEvents = 'auto';

  // Настройки для элементов справа от активного
  for (let i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${220 * stt}px) scale(${1 - 0.1 * stt}) perspective(16px) rotateY(-1deg)`; // увеличили сдвиг
    items[i].style.opacity = stt > 2 ? 0 : 0.35; // Прозрачность для элементов справа
    items[i].style.zIndex = 0; // Все элементы справа от активного будут на одном уровне

    // Запрещаем клики на кнопках неактивных карточек
    const rightButton = items[i].querySelector('.btn');
    if (rightButton) rightButton.style.pointerEvents = 'none';
  }

  stt = 0;

  // Настройки для элементов слева от активного
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-220 * stt}px) scale(${1 - 0.1 * stt}) perspective(16px) rotateY(1deg)`; // увеличили сдвиг
    items[i].style.opacity = stt > 2 ? 0 : 0.35; // Прозрачность для элементов слева
    items[i].style.zIndex = 0; // Все элементы слева от активного будут на одном уровне

    // Запрещаем клики на кнопках неактивных карточек
    const leftButton = items[i].querySelector('.btn');
    if (leftButton) leftButton.style.pointerEvents = 'none';
  }
}

// Инициализация отображения слайдера
loadShow();

// Обработчики для кликов по соседним карточкам
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Проверяем, является ли текущий элемент соседним
    if (Math.abs(index - active) === 1) {
      active = index; // Переключаем активный элемент
      loadShow(); // Обновляем отображение слайдера
    }
  });
});

// Smooth scroll with header offset for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      // Dynamic header offset: 0 on mobile when header hidden
      const headerEl = document.querySelector('.header');
      const isHeaderVisible = headerEl && getComputedStyle(headerEl).display !== 'none';
      const headerOffset = isHeaderVisible ? 96 : 12;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Touch support for mobile devices - timeline cards (moved out of anchor loop)
const timelineCards = document.querySelectorAll('.timeline-content');

timelineCards.forEach(card => {
  card.addEventListener('touchstart', function() { this.classList.add('touch-active'); });
  card.addEventListener('touchend', function() { setTimeout(() => this.classList.remove('touch-active'), 150); });
  card.addEventListener('touchcancel', function() { this.classList.remove('touch-active'); });
  card.addEventListener('mouseleave', function() { this.classList.remove('touch-active'); });
});

// Reveal on scroll via IntersectionObserver
(function initRevealOnScroll(){
  const revealEls = [];
  document.querySelectorAll('.heading, .timeline-item, .item, .donate-card, .hero-text, .hero-actions, .avatar-block').forEach(el => {
    el.classList.add('reveal');
    revealEls.push(el);
  });
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  revealEls.forEach(el => io.observe(el));
})();

// Spiral preloader with animated dots
(function initPreloader(){
  const preloader = document.getElementById('preloader');
  const spiralContainer = document.getElementById('spiral');
  if (!preloader || !spiralContainer) return;

  // Lock scroll while preloader is visible
  document.documentElement.classList.add('lock-scroll');
  document.body.classList.add('lock-scroll');

  // Адаптивный размер для мобильных устройств
  function getSpiralSize() {
    if (window.innerWidth <= 360) return 200;
    if (window.innerWidth <= 480) return 250;
    if (window.innerWidth <= 768) return 300;
    return 400;
  }

  function createSpiral() {
    // Очищаем контейнер
    spiralContainer.innerHTML = '';
    
    const SIZE = getSpiralSize();
    const N = Math.floor(SIZE * 1.5); // total dots (пропорционально размеру)
    const DOT_RADIUS = Math.max(1, SIZE / 200); // адаптивный радиус точек
    const MARGIN = Math.max(2, SIZE / 100); // адаптивные отступы
    const DURATION = 3; // seconds per pulse cycle
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); // 2π/φ²
    const CENTER = SIZE / 2;
    const MAX_RADIUS = CENTER - MARGIN - DOT_RADIUS;
    const svgNS = "http://www.w3.org/2000/svg";

    // Создаем SVG корень
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", SIZE);
    svg.setAttribute("height", SIZE);
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    // Генерируем и анимируем точки
    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_RADIUS;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      // Создаем SVG круг
      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", DOT_RADIUS);
      svg.appendChild(c);

      // Анимация радиуса
      const animR = document.createElementNS(svgNS, "animate");
      animR.setAttribute("attributeName", "r");
      animR.setAttribute(
        "values",
        `${DOT_RADIUS * 0.6};${DOT_RADIUS * 1.8};${DOT_RADIUS * 0.6}`
      );
      animR.setAttribute("dur", `${DURATION}s`);
      animR.setAttribute("begin", `${frac * DURATION}s`);
      animR.setAttribute("repeatCount", "indefinite");
      animR.setAttribute("calcMode", "spline");
      animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animR);


    }

    spiralContainer.appendChild(svg);
  }

  // Создаем спираль сразу
  createSpiral();

  // Обновляем размер при изменении размера окна
  window.addEventListener('resize', () => {
    setTimeout(() => {
      createSpiral();
    }, 100);
  });

  // Скрываем прелоадер после загрузки
  function hidePreloader() {
    setTimeout(() => {
      // Сначала исчезает текст
      const welcomeText = document.getElementById('welcome-text');
      if (welcomeText) {
        welcomeText.style.animation = 'welcomeDisappear 0.8s ease-in forwards';
      }
      
      // Затем скрываем весь прелоадер
      setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 700);
        // Unlock scroll when preloader removed
        document.documentElement.classList.remove('lock-scroll');
        document.body.classList.remove('lock-scroll');
      }, 800);
    }, 3500); // Показываем спираль 3.5 секунды
  }

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
  }
})();
