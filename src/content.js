import logo from '@/assets/images/holzringe_transparent_512_cutbw.png';

export const projectName = "HOLZRINGE";

export const headerContent = {
    logolink: logo,
    srmenutip: "Открыть меню",
    menu: {
        menuhome: {name: "Главная", link: "/"},
        menugallery: {name: "Галлерея", link: "/gallery"},
        menubenefits: {name: "Преимущества", link: "/benefits"},
        menucontacts: {name: "Контакты", link: "/contacts"}
    },
}

export const footerContent = {
    holz: "https://holzringe.ru/",
    creator: "https://mladich.com/",
    year: new Date().getFullYear(),
}

export const contactOptions = {
    phone: "#",
    whatsapp: "#",
    viber: "#",
    telegram: "#",
}

export const contactsPage = {
    conditionsTitle: "Условия заказа",
    conditionsCalls: "Ежедневно с 9:00 до 21:00 по МСК",
    conditions: 'Выезд по Москве для консультации и предварительного просмотра объекта бесплатный. По Московской области 500 рублей. Услуги и сроки реставрации обговариваются после просмотра объекта. Стоимость работ от 1400 руб за м². Для выполнения циклёвочных работ вы оплачиваете материалы, после чего их привозят на объект. Минимальный заказ от 15 метров.',
    aboutTitle: "О нас",
    about: "Более 4 лет мы профессионально занимаемся реставрацией паркета и элементов декора из дерева в Москве и Московской области. Во время работы используется только собственное оборудование Lagler: Hummel, Trio, Flip. И профессиональная химия: Ciranova, Bona, Konig, Berger.",
    form: {
        mailLabel: "Ваш email",
        mailPlaceholder: "vyatich@yandex.ru",
        nameLabel: "Ваше имя",
        namePlaceholder: "Добрыня",
        locationLabel: "Локация",
        locations: {
            one: "Москва",
            two: "Московская область",
            three: "Другой регион"
        },
        messageLabel: "Сообщение",
        messagePlaceholder: "Опишите детали Вашего заказа",
        fileLabel: "Прикрепить файл",
        filePlaceholder: "Дополнительные детали по заказу, например фото.",
        sendButton: "Отправить"
    }
}

export const benefitsPage = {
    subheaderP: "Что Вы получите выбрав нас:"
}

export const galleryPage = {
    images: [
        { after: "", before: 'https://1.bp.blogspot.com/-Obtd1tUq1Oo/U6woYy5Uq0I/AAAAAAAAkMo/PxDgOOHyTcQ/s1600/ozadje_psj_6_3.jpg', alt: 'cave', reviewer: 'Andrey1', review: 'Wsjo zbs', comment: "Жопу порвал за этот паркет ёбаный", },
        { after: "", before: 'https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2020/04/23133412/grotte-son-doong-vietnam.jpg', alt: 'cave', reviewer: 'Andrey2', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://bonpic.com/download_img.php?dimg=7157&raz=1440x900', alt: 'cave', reviewer: 'Andrey3', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://www.nastol.com.ua/pic/201405/1440x900/nastol.com.ua-98779.jpg', alt: 'cave', reviewer: 'Andrey4', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://www.desktopbackground.org/download/1440x900/2012/04/15/374861_cave-nature-landscape-wallpapers-hd_1600x1071_h.jpg', alt: 'cave', reviewer: 'Andrey5', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://www.zastavki.com/pictures/1440x900/2017World_Marble_Cathedral_cave_on_the_shores_of_Lake_General_Carrera__Patagonia_Chile_112735_14.jpg', alt: 'cave', reviewer: 'Andrey6', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://namonitore.ru/uploads/catalog/nature/meksika_underground_lake_in_a_cavern_1440.webp', alt: 'cave', reviewer: 'Andrey7', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://cdn.fishki.net/upload/post/2019/04/21/2954536/21c1416c453b6facac7d26f4dcad3e5c.jpg', alt: 'cave', reviewer: 'Andrey8', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://www.desktopbackground.org/download/1440x900/2011/01/09/139423_glacier-cave-wallpapers-wallpaper_1920x1080_h.jpg', alt: 'cave', reviewer: 'Andrey9', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://www.desktopbackground.org/download/1440x900/2012/04/15/374779_adventure-journal-wallpapers-wednesday-cave-mexico_1680x1050_h.jpg', alt: 'cave', reviewer: 'Andrey10', review: 'Wsjo zbs', comment: "", },
        { after: "", before: 'https://10wallpaper.com/wallpaper/1440x900/1401/cave_in_valley-Nature_HD_Wallpaper_1440x900.jpg', alt: 'cave', reviewer: 'Andrey11', review: 'Wsjo zbs', comment: "", }
    ],
    reviewTitle: "Отзыв клиента",
    commentTitle: "Наш комментарий",
    beforeTitle: "было",
    afterTitle: "стало"
}