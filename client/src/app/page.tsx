import React from "react";

import styles from "@/styles/MainPage.module.css"

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
                           К сладостям
                       </h1>
                   </div>
               </section>
           </div>
       </div>
   )
}
