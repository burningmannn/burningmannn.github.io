var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function() {
    transition();
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

function transition() {
    document.documentElement.classList.add('transition');
    setTimeout(function() {
        document.documentElement.classList.remove('transition');
    },
        250)
}
var en = {
    'description_skills_languages' : '<b>Languages: </b>&nbsp;Swift, Kotlin, SQL.',
    'description_skills_stack' : '<b>Stack: </b>&nbsp;Dashboards, Docker, JSON, REST API, UIKit, SwiftUI, Jira, XML<!--Unit testing, SQLite, Lottie Animation -->, Git.',
    'description_skills_tools' : '<b>Tools: </b>&nbsp;SOLID, MVC, MVVM.',
    'name_of_two_company' : 'Yekaterinburg Metro ',
    'description_of_two_company' : '<b>Description: </b><br>- Support for systems working with biometrics, setting up monitoring (Zabbix, Grafana) of the metro system and analyzing logs.<br>- A small part of working with PostgreSQL, optimizing old code, using transactions, as well as creating reports using JOINs.<br>- Experience with Docker and Docker-Compose to containerize applications and manage their deployment.<br>- Continuous‌ (CI/CD) integration to automate build and deployment processes.<br>- Setting up SSH connections via Xshell/Termius/MobaXterm. Uploading equipment logs via WinSCP.',
    'position_of_two_company' : '<b>Position: </b> System Engineer-Programmer',
    'technologies_of_two_company' : '<b>Technologies: </b>Zabbix, PostgreSQL, CI/CD',
    'two_place' : 'Yekaterinburg, Russia',
	'work_date_two' : 'Nov 2023 - Presently',
    'name_of_first_company' : 'JSC "Vector"',
    'description_of_first_company' : '<b>Description: </b><br>- Windows/RedOS administration using PowerShell and Bash scripts (CLI Linux).<br>- Setting up Hyper-V and VMWare.<br>- Working with SQL Oracle (for reporting), using EXCEL dashboards in work, office work (report on the work done).<br>- Assisting staff in CRM.<br>- Setting up camera monitoring via SmartPSS.',
    'position_of_first_company' : '<b>Position: </b>Computer Center Technician',
    'technologies_of_first_company' : '<b>Technologies: </b>Oracle SQL, PowerShell, CLI Linux(Bash)',
    'one_place' : 'Yekaterinburg, Russia',
	'work_date_one' : 'June 2023 - Nov 2023',
    'experience_work' : '<h3>Experience 💼</h3>',
    'skills': '<h3>Skills 🏆</h3>',
    'serov_place': 'Serov, Russia',
    'special_serov': '• Computer networks',
    'serov': 'Serov Metallurgical College',
    'ekb_place': 'Yekaterinburg, Russia',
    'special_ekb_two': '• Informatics and Computer Engineering',
    'special_ekb_one': '• Programming in computer systems',
    'ekb_two': 'Ural State Mining University',
    'ekb_one': 'Ural Polytechnic College',
    'education': '<h3>Education 🎓</h3>',
    'description': '<b>About me:</b> I have experience of completing a six-month internship in the field of web development as part of a team. Developed a local site for accounting equipment at the enterprise, implemented access rights differentiation, developed the database itself consisting of several tables, added editing tables from the database directly on the site, implemented feedback. (Uploaded to the host <a class="linksite" href="https://safeindustri.000webhostapp.com">safeindustri.000webhostapp.com</a>).',
    'name': '<h1>Daniil Shutkin 👨‍💻</h1><h2>Mobile developer</h2>',
    'theme': '<span>Dark Mode</span>',
    'language': '<span>Language</span>',
}; var ru = {
    'description_skills_languages' : '<b>Языки: </b>&nbsp;Swift, Kotlin, SQL.',
    'description_skills_stack' : '<b>Стек: </b>&nbsp;Dashboards, Docker, JSON, REST API, UIKit, SwiftUI, Jira, XML<!--Unit testing, SQLite, Lottie Animation -->, Git.',
    'description_skills_tools' : '<b>Инструменты: </b>&nbsp;SOLID, MVC, MVVM.',
    'name_of_two_company' : 'Екатеринбургский метрополитен',
    'description_of_two_company' : '<b>Описание: </b><br>- Поддержка систем работы с биометрией, настройка мониторинга (Zabbix, Grafana) системы работы метрополитена и анализ логов.<br>- Небольшая часть работы с PostgreSQL, оптимизирую старый код, использую транзакции, а так же создание отчетов с помощью JOINs.<br>- Опыт работы с Docker и Docker-Compose для контеи‌неризации приложений‌ и управления их развертыванием.<br>- Интеграция непрерывной‌ (CI/CD) для автоматизации процессов сборки и развертывания.<br>- Настройка подключений по SSH через Xshell/Termius/MobaXterm. Выгрузка логов по оборудованию через WinSCP.',
    'position_of_two_company' : '<b>Позиция: </b> Системный Инженер-Программист',
    'technologies_of_two_company' : '<b>Технологии: </b>Zabbix, PostgreSQL, CI/CD',
    'two_place' : 'Екатеринбург, Россия',
	'work_date_two' : 'Ноя 2023 - Сейчас',
    'name_of_first_company' : 'АО "Вектор"',
    'description_of_first_company' : '<b>Описание: </b><br>- Администрирование Windows/RedOS с помощью скриптов PowerShell и Bash (CLI Linux).<br>- Настройка Hyper-V и VMWare.<br>- Работа с SQL Oracle (для отчетности), ипользование в работе EXCEL дашбордов, делопроизводство (отчёт о проделанной работе).<br>- Помощь персоналу в CRM.<br>- Настройка мониторинга камер по SmartPSS.',
    'position_of_first_company' : '<b>Позиция: </b>Техник Вычислительного Центра',
    'technologies_of_first_company' : '<b>Технологии: </b>Oracle SQL, PowerShell, CLI Linux(Bash)',
    'one_place' : 'Екатеринбург, Россия',
	'work_date_one' : 'Июнь 2023 - Ноя 2023',
    'experience_work' : '<h3>Опыт 💼</h3>',
    'skills': '<h3>Навыки 🏆</h3>',
    'serov_place': 'Серов, Россия',
    'special_serov': '• Компьютерные сети',
    'serov': 'Серовский Металлургический Техникум',
    'ekb_place': 'Екатеринбург, Россия',
    'special_ekb_two': '• Информатика и вычислительная техника',
    'special_ekb_one': '• Программирование в компьютерных системах',
    'ekb_two': 'Уральский Государственный Горный Университет',
    'ekb_one': 'Уральский Политехнический Колледж - МЦК',
    'education': '<h3>Образование 🎓</h3>',
    'description': '<b>О себе:</b> Есть опыт прохождения шестимесячной стажировки в области веб-разработки в составе команды. Разработал локальный сайт для учета оборудования на предприятии, реализовал разграничение прав доступа, разработал саму базу данных состоящую из нескольких таблиц, добавил редактирование таблиц из БД прямо на сайте, реализовал обратную связь. (Выгрузил на хост <a class="linksite" href="https://safeindustri.000webhostapp.com">safeindustri.000webhostapp.com</a>).',
    'name':'<h1>Даниил Шуткин 👨‍💻</h1><h2>Мобильный разработчик</h2>',
    'theme': '<span>Dark Mode</span>',
    'language': '<span>Language</span>',
}; 
changeLagnuage();
function changeLagnuage() {
    let language = lang.checked ? ru: en; document.querySelectorAll('[text], [data-text]').forEach(el => {
    var attr = el.hasAttribute('data-text') ? 'data-text' : 'text';
    el.innerHTML = language[el.getAttribute(attr)];
    })
}
