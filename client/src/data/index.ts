import {FooterMenuProps, IconsProps, NavProps} from "@/interface";

export const getDataIcons: IconsProps[] = [
    {
        id: 1,
        height: 37,
        width: 37,
        href: "/favorites",
        src: "/icons/likes.png",
        alt: "likes",
    },
    {
        id: 2,
        height: 40,
        width: 40,
        href: "/profile",
        src: "/icons/profile.png",
        alt: "profile"
    },
    {
        id: 3,
        height: 40,
        width: 40,
        href: "/bucket",
        src: "/icons/bucket.png",
        alt: "basket"
    },
]

export const getDataNav: NavProps[] = [
    {
        id: 1,
        href: "/catalog",
        title: "Обзоры"
    },
    {
        id: 2,
        href: "/",
        title: "О компании"
    },
    {
        id: 3,
        href: "/",
        title: "Отзывы"
    },
    {
        id: 4,
        href: "/",
        title: "Доставка"
    },
]

export const getFooterMenu:FooterMenuProps[] = [
    {
        id: 1,
        title: "Каталог продукции",
        mass: [
            {
                id: 1,
                link: "Наборы",
                href: "/catalog"
            },
            {
                id: 2,
                link: "Акции",
                href: "/action"
            },
            {
                id: 3,
                link: "Новинки",
                href: "/news"
            },
        ],
    },
    {
      id: 2,
      title: "О магазине",
      mass: [
          {
              id: 1,
              link: "Отзывы",
              href: "/reviews"
          },
          {
              id: 2,
              link: "Видео",
              href: "/video"
          },
          {
              id: 3,
              link: "Вопросы/ответы",
              href: "/question"
          },
      ],
    },
    {
        id: 3,
        title: "Для покупателей",
        mass:  [
            {
                id: 1,
                link: "Оплата",
                href: "/payment"
            },
            {
                id: 2,
                link: "Как заказать",
                href: "/help"
            },
            {
                id: 3,
                link: "Доставка",
                href: "/delivery"
            },
        ],
    }
]