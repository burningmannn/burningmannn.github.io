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
    'description_skills_languages' : '<b>Languages: </b>&nbsp;Swift, CSS, PHP, Kotlin, SQL, C#.',
    'description_skills_stack' : '<b>Stack: </b>&nbsp;UIKit, SwiftUI, HTTP/HTTPS, SOLID.',
    'description_skills_tools' : '<b>Tools: </b>&nbsp;Jira, Git.',
    'name_of_first_company' : 'Promenergosafety',
    'description_of_first_company' : '<b>Description: </b>Development of enterprise equipment website.',
    'position_of_first_company' : '<b>Position: </b>Web developer.',
    'technologies_of_first_company' : '<b>Technologies: </b>CSS, PHP, MySQL, phpMyAdmin, JSON.',
    'one_place' : 'Yekaterinburg, Russia',
    'experience_work' : 'Experience',
    'a1': 'Harvard - CS50.',
    'a2': 'Stepik - Introduction to Kotlin JVM.',
    'a3': 'SwiftBook - Basics of programming.',
    'achievements': '<h3>My achievements</h3>',
    'skills': '<h3>Skills</h3>',
    'serov_place': 'Serov, Russia',
    'special_serov': 'Computer networks',
    'serov': 'Serov Metallurgical College',
    'ekb_place': 'Yekaterinburg, Russia',
    'special_ekb_two': 'Informatics and Computer Engineering',
    'special_ekb_one': 'Programming in computer systems',
    'ekb_two': 'Ural State Mining University',
    'ekb_one': 'Ural Polytechnic College',
    'education': '<h3>Education</h3>',
    'q8': 'I have an understanding of how to work with Docker, IBM MQ and Grafana.',
    'q7': 'Thinking over solutions to the problem before writing code.',
    'q6': 'Sociability and openness.',
    'q5': 'Ability to work with UIkit and SwiftUI.',
    'q4': 'Passion for iOS development.',
    'q3': 'Ability to plan their work and self-organization.',
    'q2': 'Working with MySQL databases.',
    'q1': 'Writing technical documentation for developed functional.',
    'description_text': 'Key skills and responsibilities:',
    'description': '<b>About me:</b> I have experience of passing a six-month internship in web development as part of a team. Developed a local site for accounting equipment at the enterprise, implemented access rights differentiation, developed the database itself consisting of several tables, added editing tables from the database directly on the site, implemented feedback with subsequent sending of messages to the companys mail, as well as creating reports on the desired selection and category.(Uploaded to the host promenergoekb.000webhostapp.com ). I do sports and have no bad habits.',
    'name': '<h1>Daniil Shutkin</h1><h2>Mobile developer</h2>',
    'theme': '<span>Dark Mode</span>',
    'language': '<span>Language</span>',
}; var ru = {
    'description_skills_languages' : '<b>Языки: </b>&nbsp;Swift, CSS, PHP, Kotlin, SQL, C#.',
    'description_skills_stack' : '<b>Стек: </b>&nbsp;UIKit, SwiftUI, HTTP/HTTPS, SOLID.',
    'description_skills_tools' : '<b>Инструменты: </b>&nbsp;Jira, Git.',
    'name_of_first_company' : 'Промэнергобезопасность',
    'description_of_first_company' : '<b>Описание: </b>Разработка сайта оборудования предприятия.',
    'position_of_first_company' : '<b>Позиция: </b>Web developer.',
    'technologies_of_first_company' : '<b>Технологии: </b>CSS, PHP, MySQL, phpMyAdmin, JSON.',
    'one_place' : 'Екатеринбург, Россия',
    'experience_work' : 'Опыт',
    'a1': 'Harvard - CS50.',
    'a2': 'Stepik - Введение в Kotlin JVM.',
    'a3': 'SwiftBook - Основы программирования.',
    'achievements': '<h3>Мои достижения</h3>',
    'skills': '<h3>Навыки</h3>',
    'serov_place': 'Серов, Россия',
    'special_serov': 'Компьютерные сети',
    'serov': 'Серовский Металлургический Техникум',
    'ekb_place': 'Екатеринбург, Россия',
    'special_ekb_two': 'Информатика и вычислительная техника',
    'special_ekb_one': 'Программирование в компьютерных системах',
    'ekb_two': 'Уральский Государственный Горный Университет',
    'ekb_one': 'Уральский Политехнический Колледж - МЦК',
    'education': '<h3>Образование</h3>',
    'q8': 'Имею понимание как работать с Doker, IBM MQ и Grafana',
    'q7': 'Обдумывание решений проблемы перед написанием кода.',
    'q6': 'Коммуникабельность и открытость.',
    'q5': 'Умение работать с UIkit и SwiftUI.',
    'q4': 'Увлеченность разработкой на iOS.',
    'q3': 'Способность к планированию своей работы и самоорганизация.',
    'q2': 'Работа с базами данных MySQL.',
    'q1': 'Написание технической документации для разрабатываемого функционала.',
    'description_text': 'Ключевые навыки и обязанности:',
    'description': '<b>О себе:</b> У меня есть опыт прохождения шестимесячной стажировки в области веб-разработки в составе команды. Разработал локальный сайт для учета оборудования на предприятии, реализовал разграничение прав доступа, разработал саму базу данных состоящую из нескольких таблиц, добавил редактирование таблиц из БД прямо на сайте, реализовал обратную связь с последующей отправкой сообщений на почту предприятия, а так же создание отчетов по нужной выборке и категории. (Выгрузил на хост promenergoekb.000webhostapp.com) Я занимаюсь спортом и не имею вредных привычек.',
    'name':'<h1>Даниил Шуткин</h1><h2>Мобильный разработчик</h2>',
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
