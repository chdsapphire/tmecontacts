// ==UserScript==
// @name         tmecontacts
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Add a Telegram button next to "Александр Богатырёв"
// @author       You
// @match        https://bestdating.planfix.com/user/*
// @match        https://bestdating.planfix.com/contact/*
// @grant        none
// @grant        none
// @updateURL    https://github.com/chdsapphire/tmecontacts/raw/main/tmecontacts.user.js
// @downloadURL  https://github.com/chdsapphire/tmecontacts/raw/main/tmecontacts.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Define your links and Telegram channels
    var links = [
        {
            //Паша Бачинский
            id: 2221,
            link: 'https://t.me/user_pavel'
        },
         {
            //Денис Сергиенко
            id: 12195,
            link: 'https://t.me/den_777V'
        },
         {
            //Дмитрий Гадалин
            id: 13967,
            link: 'https://t.me/tatarbolgar'
        },
         {
            //Наталия Дарийчук
            id: 11977,
            link: 'https://t.me/dariychuk21'
        },
         {
            //Игорь Кондрашенко
            id: 2204,
            link: 'https://t.me/Igor8842'
        },
         {
            //Снежана Билявская
            id: 37,
            link: 'https://t.me/SnezhanaGlamour'
        },
         {
            //Константин Дыбля
            id: 2205,
            link: 'https://t.me/kostya_belozerov'
        },
         {
            //Сергей Карпюк
            id: 2225,
            link: 'https://t.me/bezdar07'
        },
         {
            //Никита Еронов
            id: 22074,
            link: 'https://t.me/Nikita1292Sapphire'
        },
         {
            //Ксюша Нацибулина
            id: 2218,
            link: 'https://t.me/x_v_vv'
        },
         {
            //Дарья Балашова
            id: 44,
            link: 'https://t.me/daria_glamour_agency'
        },
         {
            //Екатерина Подгайченко
            id: 29064,
            link: 'https://t.me/homie1996'
        },
         {
            //Владислав Шевченко
            id: 1966,
            link: 'https://t.me/lemprav'
        },
         {
            //Вадим Агиенко
            id: 1964,
            link: 'https://t.me/welcometolachance'
        },
         {
            //Юлия Валериевна Федоренко
            id: 36338,
            link: 'https://t.me/Juliee_1'
        },
         {
            //Дмитрий Витальевич Заволокин
            id: 80333,
            link: 'https://t.me/Tomikqq'
        },
         {
            //Дмитрий Вовк
            id: 23508,
            link: 'https://t.me/dvovk17'
        },
         {
            //Денис Владимирович Корчик
            id: 67179,
            link: 'https://t.me/sanyaivanovv'
        },
         {
            //Женя Захарченко
            id: 1968,
            link: 'https://t.me/Jenya008'
        },
         {
            //Александр Владимирович Ларионенко
            id: 60402,
            link: 'https://t.me/alex_la10'
        },
         {
            //Елена Вячеславовна Шульга
            id: 60403,
            link: 'https://t.me/alenadanulenko'
        },
         {
            //Стас Оскольский
            id: 2190,
            link: 'https://t.me/flashAurum'
        },
         {
            //Александр Владимирович Богатырёв
            id: 75477,
            link: 'https://t.me/bogatyrev123'
        },
         {
            //Анна Сергеевна Петренко
            id: 9643,
            link: 'https://t.me/annaann123'
        },
         {
            //Алексей Кузнецов
            id: 1960,
            link: 'https://t.me/whymepls'
        },
         {
            //Виталий Вячеславович Морозов
            id: 92776,
            link: 'https://t.me/w_eltschmerz'
        },
         {
            //Дарья Андреевна Быкова
            id: 43328,
            link: 'https://t.me/Sweety4Sweet'
        },
         {
            //Юлия Игоревна Рудакова
            id: 43330,
            link: 'https://t.me/Sammy_Li'
        },
         {
            //Максим Якубов
            id: 2187,
            link: 'https://t.me/ADGLC'
        },
         {
            //Юра Сапрунов
            id: 2191,
            link: 'https://t.me/nilsJensen93'
        },
         {
            //Александр Файсальевич Попов
            id: 79173,
            link: 'https://t.me/ShxGlamour'
        },
         {
            //Мария Сергеевна Кузнецова
            id: 5308,
            link: 'https://t.me/maria_k16'
        },
         {
            //Ярослав Зуб
            id: 107886,
            link: 'https://t.me/blue_sky_black_death'
        },
         {
            //Антон Владимирович Исевич
            id: 43501,
            link: 'https://t.me/kukusik322'
        },
         {
            //Марк Игоревич Леонов
            id: 75476,
            link: 'https://t.me/Mark_678'
        },
         {
            //Александр Сергеевич Курило
            id: 5793,
            link: 'https://t.me/alexandr_000123'
        },
         {
            //Александра Александровна Порплица
            id: 75515,
            link: 'https://t.me/mamyna_satana'
        },
         {
            //Алиса Александровна Демьянова
            id: 35243,
            link: 'https://t.me/alisa_lisa8998'
        },
         {
            //Альбина Бондаренко
            id: 2207,
            link: 'https://t.me/alkila'
        },
         {
            //Анастасия Ященко
            id: 51698,
            link: 'https://t.me/hrnn7'
        },
         {
            //Анастасия Андреевна Чурилина
            id: 74675,
            link: 'https://t.me/Penchuxa'
        },
         {
            //Татьяна Александровна Конопацкая
            id: 43409,
            link: 'https://t.me/tanya90999'
        },
         {
            //Олег Звирко
            id: 20633,
            link: 'https://t.me/zvirko'
        },
         {
            //Олег Звирко
            id: 20633,
            link: 'https://t.me/zvirko'
        },
         {
            //Анна Фарбей
            id: 51696,
            link: 'https://t.me/justasann'
        },
         {
            //Анна Олеговна Глаголь
            id: 77558,
            link: 'https://t.me/anna_glagol'
        },
         {
            //Виктор Коневский
            id: 28191,
            link: 'https://t.me/Niakrris'
        },
         {
            //Виктория Грицай
            id: 88709,
            link: 'https://t.me/viktoriya_gritsay'
        },
         {
            //Влад Сергун
            id: 1935,
            link: 'https://t.me/krosDream'
        },
         {
            //Владислав Приймак
            id: 75509,
            link: 'https://t.me/VladPryimak'
        },
         {
            id: 33870,
            link: 'https://t.me/Elena_222617'
        },
         {
            id: 2215,
            link: 'https://t.me/es_buena_idea'
        },
         {
            id: 61031,
            link: 'https://t.me/Michail_G'
        },
         {
            id: 37864,
            link: 'https://t.me/NikRonZ'
        },
    ];

    // Get the current URL and contact ID
    var url = window.location.href;
    var id = url.split('/').pop();

    // Check if the current URL is in the list of links
    for (var i = 0; i < links.length; i++) {
        if (links[i].id == id) {
            // If it is, redirect to the corresponding Telegram channel
            window.location.replace(links[i].link);
            break;
        }
    }
})();