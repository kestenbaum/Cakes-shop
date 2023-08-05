import React, {FC} from 'react';

import Link from "next/link";

import styles from "@/styles/Footer.module.css"
import FooterBtn from "@/components/Footer/FooterBtn";
import android from "@/assets/icons/android.png"
import apple from "@/assets/icons/apple.png"
import {getFooterMenu} from "@/data";



const Footer:FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    {getFooterMenu.map(element => {
                        return  <div key={element.id}>
                            <h3 className={styles.title}>{element.title}</h3>
                                <ul className={styles.list} key={element.id}>
                                    {element.mass.map(link =>
                                        <li><Link href={"/"} className={styles.link}/>{link.link}</li>
                                    )}
                                </ul>
                        </div>
                    })}
                  <div>
                      <h4 className={styles.titleH4}>
                          Наши приложения
                      </h4>
                      <FooterBtn
                          img={android}
                          alt={"android"}
                          download={"Загрузите в "}
                          services={"App store"}
                      />
                      <FooterBtn
                          img={apple}
                          alt={"apple"}
                          download={"Доступно в "}
                          services={"Google play"}
                      />
                  </div>
                  <div className={styles.contact}>
                      <h4 className={styles.titleH4}>Контакты</h4>
                      <span className={styles.number}>+390876758734</span>
                      <span className={styles.call}>Бесплатный звонок по Украине</span>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;