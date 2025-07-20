let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

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

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(id);
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
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
    const menuIcon = document.getElementById('menu-icon');

    // Определяем словари для языков
    const firstName = { en: "Daniil", ru: "Даниил" };
    const lastName = { en: "Shutkin", ru: "Шуткин" };
    const content = {
        en: { 
            home: "About", 
            experience: "Experience", 
            skills: "Skills", 
            testimonials: "Testimonials", 
            projects: "Projects", 
            donate: "Donate",
            donate_me: "Donate",
            donate_me_span: "Me",
            about_text: "I had another page with a bunch of projects, but unfortunately Github itself deleted my account without explanation. So I started from scratch.",
            experience: "Experience",
            timeline_date_one: "2018-2019",
            timeline_place_one: "Serov Metallurgical College",
            timeline_speciality_one: "Computer networks",
            timeline_date_two: "2019 - 2022",
            timeline_place_two: "Ural Polytechnic College",
            timeline_speciality_two: "Programming in computer systems",
            timeline_date_three: "2022 - 2025",
            timeline_place_three: "Ural State Mining University",
            timeline_speciality_three: "Informatics and Computer Science",
            timeline_date_four: "June 2023 - Nov 2023",
            place_work_one: "JSC 'Vector'",
            timeline_work_one: "<strong>Description:</strong> <br>- Administration of Windows/RedOS using PowerShell and Bash scripts (CLI Linux). <br>- Setting up Hyper-V and VMWare. <br>- Working with SQL Oracle (for reporting), using EXCEL dashboards in work, office work (report on the work done). <br>- Assisting staff with CRM. <br><strong>Position:</strong> Computer center technician <br><strong>Technologies:</strong> Oracle SQL, PowerShell, CLI Linux(Bash)",
            timeline_date_five: "Nov 2023 - Presently",
            place_work_two: "Yekaterinburg Metro",
            timeline_work_two: "<strong>Description:</strong> <br>- Support for systems working with biometrics, setting up monitoring (Zabbix, Grafana) of the metro system and analyzing logs. <br>- A small part of working with PostgreSQL, optimizing old code, using transactions, as well as creating reports using JOINs. <br>- Experience with Docker and Docker-Compose to containerize applications and manage their deployment. <br>- Continuous (CI/CD) integration to automate build and deployment processes. <br>- Setting up SSH connections via Xshell/Termius/MobaXterm. Uploading equipment logs via WinSCP. <br><strong>Position:</strong> System Engineer <br><strong>Technologies:</strong> Zabbix, PostgreSQL, CI/CD",
            projects: "Projects",
            about: "About",
            role: "I'm a<span class=\"lastName\">Developer</span>",
            hero_description: "Cultured person, employed, neatly dressed,<br>friendly and polite",
            float_code: "Code",
            float_design: "Design",
            float_innovation: "Innovation",
            scroll: "Scroll",
            label_language: "Language",
            label_theme: "Theme"
        },
        ru: { 
            home: "О себе", 
            experience: "Опыт", 
            skills: "Навыки", 
            testimonials: "Отзывы", 
            projects: "Проекты", 
            donate: "Пожертвовать",
            donate_me: "Пожертвовать",
            donate_me_span: "мне",
            about_text: "У меня была еще одна страница с кучей проектов, но, к сожалению, сам Github удалил мою учетную запись без объяснения причин. Поэтому я начал с нуля.",
            experience: "Опыт",
            timeline_date_one: "2018-2019",
            timeline_place_one: "Серовский металлургический колледж",
            timeline_speciality_one: "Компьютерные сети",
            timeline_date_two: "2019 - 2022",
            timeline_place_two: "Уральский Политехнический Колледж",
            timeline_speciality_two: "Программирование в компьютерных системах",
            timeline_date_three: "2022 - 2025",
            timeline_place_three: "Уральский Государственный Горный Университет",
            timeline_speciality_three: "Информатика и вычислительная техника",
            timeline_date_four: "Июнь 2023 - Ноябрь 2023",
            place_work_one: "JSC 'Vector'",
            timeline_work_one: "<strong>Описание:</strong> <br>- Администрирование Windows/RedOS с использованием скриптов PowerShell и Bash (CLI Linux). <br>- Настройка Hyper-V и VMWare. <br>- Работа с SQL Oracle (для составления отчетов), использование dashboards EXCEL в работе, делопроизводство (отчет о проделанной работе). <br>- Помощь персоналу с CRM. <br><strong>Позиция:</strong> Техник вычислительного центра <br><strong>Технологии:</strong> Oracle SQL, PowerShell, CLI Linux(Bash)",
            timeline_date_five: "Ноябрь 2023 - Настоящее время",
            place_work_two: "Екатеринбургский Метрополитен",
            timeline_work_two: "<strong>Описание:</strong> <br>- Поддержка систем, работающих с биометрией, настройка мониторинга (Zabbix, Grafana) системы метро и анализ логов. <br>- Небольшая часть работы с PostgreSQL, оптимизации старого кода, использования транзакций, а также создания отчетов с помощью JOINs. <br>- Опыт работы с Docker и Docker-Compose для контейнеризации приложений и управления их развертыванием. <br>- Непрерывная (CI/CD) интеграция для автоматизации процессов сборки и развертывания. <br>- Настройка SSH-соединений через Xshell/Termius/MobaXterm. Выгрузка данных оборудования через WinSCP. <br><strong>Позиция:</strong> Системный Инженер <br><strong>Технологии:</strong> Zabbix, PostgreSQL, CI/CD",
            projects: "Проекты",
            about: "О себе",
            role: "Я —&nbsp;<span class=\"lastName\">Разработчик</span>",
            hero_description: "Культурный человек, трудоустроен, опрятно одет,<br>дружелюбен и вежлив",
            float_code: "Код",
            float_design: "Дизайн",
            float_innovation: "Инновации",
            scroll: "Листай",
            label_language: "Язык",
            label_theme: "Тема"
        }
    };

    // Устанавливаем текущую тему и язык
    const currentTheme = localStorage.getItem('theme') || 'dark';
    let currentLanguage = localStorage.getItem('language') || 'en';
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    menuIcon.classList.toggle('light-theme', currentTheme === 'light');
    updateContent(currentLanguage);

    // Обработчик для переключения темы
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        menuIcon.classList.toggle('light-theme', newTheme === 'light');
    });

    // Обработчик для переключения языка
    languageToggleButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'ru' : 'en'; // Обновляем текущий язык
        localStorage.setItem('language', currentLanguage);
        updateContent(currentLanguage);
    });

    // Функция для обновления контента на странице
    function updateContent(language) {
        const elements = Array.from(document.querySelectorAll('[data-translate]'));
        // 1. Плавно скрыть все элементы
        elements.forEach(el => el.classList.add('fade-text'));
        setTimeout(() => {
            // 2. Поменять текст, когда opacity=0
            elements.forEach(element => {
            // Не переводим карточки проектов и доната
            if (
                element.closest('.slider .item') ||
                element.closest('.donate-card') ||
                element.closest('.project-info')
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
  activeButton.style.pointerEvents = 'auto'; // Разрешаем клики на кнопке активной карточки

  // Настройки для элементов справа от активного
  for (let i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${220 * stt}px) scale(${1 - 0.1 * stt}) perspective(16px) rotateY(-1deg)`; // увеличили сдвиг
    items[i].style.opacity = stt > 2 ? 0 : 0.6; // Прозрачность для элементов справа
    items[i].style.zIndex = 0; // Все элементы справа от активного будут на одном уровне

    // Запрещаем клики на кнопках неактивных карточек
    const rightButton = items[i].querySelector('.btn');
    rightButton.style.pointerEvents = 'none'; // Запрещаем клики на кнопке неактивной карточки
  }

  stt = 0;

  // Настройки для элементов слева от активного
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-220 * stt}px) scale(${1 - 0.1 * stt}) perspective(16px) rotateY(1deg)`; // увеличили сдвиг
    items[i].style.opacity = stt > 2 ? 0 : 0.6; // Прозрачность для элементов слева
    items[i].style.zIndex = 0; // Все элементы слева от активного будут на одном уровне

    // Запрещаем клики на кнопках неактивных карточек
    const leftButton = items[i].querySelector('.btn');
    leftButton.style.pointerEvents = 'none'; // Запрещаем клики на кнопке неактивной карточки
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
      const headerOffset = 96; // высота вашей шапки в px
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});