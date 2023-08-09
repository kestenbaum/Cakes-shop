import React, {FC} from 'react';

import styles from "@/styles/Footer.module.css"
import FooterBtn from "@/components/Footer/FooterBtn";
import android from "@/assets/icons/android.png"
import apple from "@/assets/icons/apple.png"
import {getFooterMenu} from "@/data";
import FooterMenu from "@/components/Footer/FooterMenu";
import FooterContact from "@/components/Footer/FooterContact";



const Footer:FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    {getFooterMenu.map(element => {
                        return  <FooterMenu
                            title={element.title}
                            mass={element.mass}
                            id={element.id}
                        />
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
                 <FooterContact/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;