import logo from '@/assets/images/holzringe_transparent_512_cutbw.png';

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