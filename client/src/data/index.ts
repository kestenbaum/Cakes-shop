import {FooterMenuProps, IconsProps, IProfileAsideElement, IProfileMenuElement, NavProps} from "@/interface";

import {CgProfile} from "react-icons/cg";
import {MdOutlineContactMail} from "react-icons/md";
import {BsReverseListColumnsReverse, BsTruck} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {TbPigMoney} from "react-icons/tb";
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import {IoMdLogIn} from "react-icons/io";
import {GrCircleInformation} from "react-icons/gr";

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
        href: "/basket",
        src: "/icons/bucket.png",
        alt: "basket"
    },
]

export const getDataNav: NavProps[] = [
    {
        id: 1,
        href: "/catalog",
        title: "Каталог"
    },
    {
        id: 2,
        href: "/",
        title: "О компании"
    },
    {
        id: 3,
        href: "/reviews",
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

export const getAsideProfilePage:IProfileAsideElement[] = [
    {
        id: 1,
        img: CgProfile,
        href: "/",
        link: "User Surname"
    },
    {
        id: 2,
        img: BsReverseListColumnsReverse,
        href: "/",
        link: "Мои заказы"
    },
    {
        id: 3,
        img: AiOutlineHeart,
        href: "/",
        link: "Список желаний"
    },
    {
        id: 4,
        img: TbPigMoney,
        href: "/",
        link: "Мой кошелек"
    },
    {
        id: 5,
        img: RiMoneyDollarCircleLine,
        href: "/",
        link: "Мой бонусный счет"
    },
]

export const getMenuProfilePage:IProfileMenuElement[] = [
    {
        id: 1,
        img: CgProfile,
        title: 'Личные данные',
        content: "Личные данные"
    },
    {
        id: 1,
        img: MdOutlineContactMail,
        title: 'Контакты',
        content: "Контакты"
    },
    {
        id: 1,
        img: BsTruck,
        title: 'Адрес доставки',
        content: "Адрес доставки"
    },
    {
        id: 1,
        img: IoMdLogIn,
        title: 'Логин',
        content: "Логин"
    },
    {
        id: 1,
        img: GrCircleInformation,
        title: 'Дополнительная информация',
        content: "Дополнительная информация"
    }
]