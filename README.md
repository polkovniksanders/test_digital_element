## Макет для работы

[https://www.figma.com/file/PIsFSnRdbH3UbiKyluclzh/de-landingpage](https://www.figma.com/file/PIsFSnRdbH3UbiKyluclzh/de-landingpage)


## Требования к сборке проекта

-   Использовать task-менеджер, препроцессоры/постпроцессоры (gulp/webpack/vite & postcss/less/sass/stylus);

-   Использовать линтирование: ESLint и StyleLint;

-   Будет плюсом использование HTML-шаблонизаторов и сжатие статических файлов при билде.




## Требования к HTML/CSS

-   Использовать БЭМ, валидную и семантически верную разметку;

-   Верстать при помощи flex или grid, адаптировав макет до 360px;

-   Использовать формат SVG для иконок;

-   Проверить на кроссбраузерность (Edge, Chrome, Firefox, а также последние версии мобильные браузеров);

-   Не использовать Bootstrap или любые другие сторонние сетки;

-   Модальные окна должны закрываться как по клику на крестик, так и по клику на фоновую тень. При появлении окна необходимо блокировать возможность скроллинга страницы (стиль модального окна и фонового оверлея задавать самостоятельно);

-   Будет плюсом применение различных эффектов и анимаций.


## Требования к JavaScript

-   Необходимо использовать ES6+;

-   Нельзя добавлять сторонние библиотеки, код должен быть на чистом JS и не содержать console.log, alert, лишних комментариев;

-   Необходимо семантически грамотно присваивать имена методам и переменным;

-   События на элементах должны содержать в себе лишь вызов метода обработчика события;

-   Будет плюсом использовать классы и модульный подход при написании функционала.


## Задание

1.  Сверстать фрейм "Homepage" (фрейм “Contact us” верстать не нужно) с учетом указанных выше требований;

2.  Сделать открытие модального окна при клике на кнопку “Let’s Talk" на главной странице. В модальном окне должна находиться форма. Форму взять с фрейма "Contact Us".

3.  Сделать валидацию для формы без использования стандартного браузерного функционала (атрибутов required).

4.  При успешной валидации реализовать отправку формы (url для отправки может быть любым);

5.  После успешной отправки формы показать попап с текстом "Your message successfully sent" или иным подобным.


## На что обратить особое внимание

1.  Возможность переиспользовать код там, где это возможно;

2.  Понятность файловой структуры, разделение CSS-блоков и JS-модулей на отдельные файлы;

3.  Качество верстки на мобильных устройствах и планшетах;

4.  Работоспособность сборки в dev- и prod-режимах;

5.  Минимум критических или устаревших npm-зависимостей.
