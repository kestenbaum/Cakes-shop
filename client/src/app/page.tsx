import React from "react";

import styles from "@/app/MainPage.module.css"
import Link from "next/link";

export default function Home() {
   return (
       <div
           className={styles.wrapper}
       >
           <div className="container">
               <section
                   className={styles.page}
               >
                   <div className={styles.wrapperTitle}>
                       <h1
                           className={styles.title}
                       >
                          <Link
                              className={styles.link__catalog}
                              href={"/catalog"}
                          >
                              К сладостям
                          </Link>
                       </h1>
                   </div>
               </section>
           </div>
       </div>
   )
}
