// import Link from "next/link";
// import Image from "next/image";
// import css from "./page.module.css";
// import Faq from "@/components/Faq/Faq";
// import Approach from "@/components/Approach/Approach";
// import CallToAction from "@/components/CallToAction/CallToAction";
// import ScrollToTop from "@/components/ScrollToTop.js/ScrollToTop";
// import Reviews from "@/components/Reviews/Reviews";

// export default function Home() {
//   return (
//     <main>
//       <div className={css.container}>
//         <div className={css.heroFlex}>
//           <div className={css.textContent}>
//             <p className={css.overtitle}>Тетяна Колеснікова</p>
//             {/* <p className={css.overtitle}>Дипломований психолог</p>  */}
//             <p className={css.overtitle}>Сертифікований клінічний психолог</p>

//             {/* <h1 className={css.title}>
//               Простір, щоб дихати.
//               <br />
//               <span className={css.italicRow}>Місце, щоб зцілюватись.</span>
//             </h1> */}
//             {/* <div className={css.descriptionwrap}>
//               <p className={css.description}>
//                 Коли всередині важко — не обов'язково справлятися з усім
//                 самостійно.
//               </p>
//               <p className={css.description}>
//                 Допомагаю краще зрозуміти себе, свої почуття та те, що
//                 відбувається у стосунках і житті.
//               </p>
//               <p className={css.description}>
//                 Тривога • вигорання • самооцінка • стосунки • особисті межі •
//                 життєві зміни
//               </p>
//               <p className={css.description}>
//                 Тут не потрібно бути «правильним». Тут можна бути собою.
//               </p>
//             </div> */}

//             <div className={css.descriptionBlock}>
//               <p className={css.description}>
//                 Коли всередині важко — не обов'язково справлятися з усім
//                 самостійно. Допомагаю краще зрозуміти себе, свої почуття та те,
//                 що відбувається у стосунках і житті.
//               </p>
//               <p className={css.manifest}>
//                 Тут не потрібно бути «правильним». Тут можна бути собою.
//               </p>
//               <div className={css.tagContainer}>
//                 <span className={css.tag}>Тривога</span>
//                 <span className={css.tag}>Вигорання</span>
//                 <span className={css.tag}>Самооцінка</span>
//                 <span className={css.tag}>Стосунки</span>
//                 <span className={css.tag}>Особисті межі</span>
//                 <span className={css.tag}>Життєві зміни</span>
//               </div>
//             </div>

//             <Link href="/contact" className={css.btn}>
//               Записатися на консультацію
//             </Link>
//           </div>

//           <div className={css.imageCard}>
//             <Image
//               src="/photoTanya2.jpg"
//               alt="Психолог Тетяна Колеснікова"
//               fill
//               priority
//               className={css.img}
//             />
//           </div>
//         </div>
//       </div>
//       <Approach />
//       {/* <Faq /> */}
//       <CallToAction />
//       <ScrollToTop />
//       {/* <Reviews /> */}
//     </main>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import css from "./page.module.css";
import Approach from "@/components/Approach/Approach";
import ScrollToTop from "@/components/ScrollToTop.js/ScrollToTop";
import CallToAction from "@/components/CallToAction/CallToAction";

export default function Home() {
  return (
    <main>
      <section className={css.container}>
        <div className={css.contentGrid}>
          <div className={css.textContent}>
            <h1 className={css.overtitle}>Тетяна Колеснікова</h1>
            <h2 className={css.subtitle}>Сертифікований клінічний психолог</h2>

            <div className={css.textBlock}>
              <p className={css.description}>
                Коли всередині важко — не обов'язково справлятися з усім
                самостійно. Допомагаю краще зрозуміти себе, свої почуття та те,
                що відбувається у стосунках і житті.
              </p>

              <p className={css.description}>
                Тут не потрібно бути «правильним». Тут можна бути собою.
              </p>

              <div className={css.tagContainer}>
                <span className={css.tag}>Тривога</span>
                <span className={css.tag}>Вигорання</span>
                <span className={css.tag}>Самооцінка</span>
                <span className={css.tag}>Стосунки</span>
                <span className={css.tag}>Особисті межі</span>
                <span className={css.tag}>Життєві зміни</span>
              </div>

              <div className={css.btnWrapper}>
                <Link href="/contact" className={css.btn}>
                  Записатися на консультацію
                </Link>
              </div>
            </div>
          </div>

          <div className={css.imageWrapper}>
            <Image
              src="/photoTanya2.jpg"
              alt="Психолог Тетяна Колеснікова"
              width={500}
              height={600}
              priority
              className={css.photo}
            />
          </div>
        </div>
      </section>

      <Approach />
      <CallToAction />
      <ScrollToTop />
    </main>
  );
}
