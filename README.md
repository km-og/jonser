Разработала многостраничный сайт для продукции Jonser.

Сайт на основе CRA, в работе использовала React Router, хуки (useState, useEffect, useContext), grid, flex. Верстка адаптивная, но не pixel perfect, все расхождения от макета согласованы с заказчиком.

Функционал формы обратной связи реализовала с помощью fetch-запроса и модуля Node.js - nodemailer. Поля валидируются перед отправкой, также проверка полей проходит на бэкенде.

Т.к. на сайте много изображений, все фотографии конвертировала в webp формат для более быстрой загрузки страниц и в некоторых местах настроила отложенную загрузку.
Написала простенький слайдер. Скоро планирую добавить листание по свайпам.
Использовала константы в CSS для обозначения цветов.
Добавила мета-теги для поднятия сайта в поисковиках, ускорила индексацию через Яндекс.Вебмастер и Google Search Console.

Добавила админ-панель, чтобы заказчик мог самостоятельно вносить изменения. Для этого создала NoSQL базу данных - MongoDB, добавила авторизацию админа и интерфейс добавления / удаления товаров. Сделала валидацию полей в интерфейсе и на сервере, проверка происходит с помощью регулярных выражений. Валидацию формы добавления модели сделала с помощью React Hook Form, т.к. там очень много полей. Роуты создаются после получения информации с сервера. Добавила редактирование информации (цен товаров) по просьбе заказчика. Предусмотрела случай, когда данные с сервера не подтянулись, либо пришел пустой объект, пользователи будут попадать на Blank Page. Также создала страницу Not Found, если пользователь попал на несуществующую страницу.

Сам сайт выложила на облачный сервер, где использовала менеджер процессов (pm2), чтобы бэкенд работал всегда; настроила конфигурационный файл nginx, чтобы фронтенд раздавался на домене, а бэкенд на поддомене. Еще подключила SSL-сертификат.
Бэкенд загружаю на сервер из git-репозитория, а фронтенд собираю локально и загружаю готовую папку на сервер.

Стек:
HTML, CSS , React, Node.js, express.js, MongoDB

Ссылка на сайт:
https://jonser.ru/

Репозиторий бэкенда:
https://github.com/km-og/jonser_backend

Ссылка на макет:
https://www.figma.com/file/gtt4oIMpDzlT5KbS46ZXv3/Web-Jonser-(Copy)?type=design&node-id=2454%3A182&mode=design&t=8DSppLyqLoUVGygd-1
