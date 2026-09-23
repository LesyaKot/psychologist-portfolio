import Link from "next/link";
import Image from "next/image";
import css from "./page.module.css";
import Faq from "@/components/Faq/Faq";
import Approach from "@/components/Approach/Approach";
import CallToAction from "@/components/CallToAction/CallToAction";
import ScrollToTop from "@/components/ScrollToTop.js/ScrollToTop";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <main>
      <div className={css.container}>
        <div className={css.heroFlex}>
          <div className={css.textContent}>
            <p className={css.overtitle}>Тетяна Колеснікова</p>
            <p className={css.overtitle}>Дипломований психолог</p>
            <p className={css.overtitle}>Сертифікований клінічний психолог</p>

            {/* <h1 className={css.title}>
              Простір, щоб дихати.
              <br />
              <span className={css.italicRow}>Місце, щоб зцілюватись.</span>
            </h1> */}

            <p className={css.description}>
              Коли всередині важко — не обов'язково справлятися з усім
              самостійно. Допомагаю краще зрозуміти себе, свої почуття та те, що
              відбувається у стосунках і житті. Тривога • вигорання • самооцінка
              • стосунки • особисті межі • життєві зміни Тут не потрібно бути
              «правильним». Тут можна бути собою.
            </p>

            <Link href="/contact" className={css.btn}>
              Записатися на консультацію
            </Link>
          </div>

          <div className={css.imageCard}>
            <Image
              src="/ava.png"
              alt="Психолог Тетяна Колеснікова"
              fill
              priority
              className={css.img}
            />
          </div>
        </div>
      </div>
      <Approach />
      {/* <Faq /> */}
      <CallToAction />
      <ScrollToTop />
      {/* <Reviews /> */}
    </main>
  );
}
