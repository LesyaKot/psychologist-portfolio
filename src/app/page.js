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
            <p className={css.overtitle}>Ліцензований клінічний психолог</p>

            <h1 className={css.title}>
              Простір, щоб дихати.
              <br />
              <span className={css.italicRow}>Місце, щоб зцілюватись.</span>
            </h1>

            <p className={css.description}>
              Експертний супровід крізь тривогу, травми та життєві зміни.
              Відновіть зв'язок зі своїм справжнім "я" в атмосфері глибокого
              розуміння та опори.
            </p>

            <Link href="/contact" className={css.btn}>
              почати терапію
            </Link>
          </div>

          <div className={css.imageCard}>
            <Image
              src="/ava.png"
              alt="Психолог Тетяна Колесникова"
              fill
              priority
              className={css.img}
            />
          </div>
        </div>
      </div>
      <Approach />
      <Faq />
      <CallToAction />
      <ScrollToTop />
      <Reviews />
    </main>
  );
}
