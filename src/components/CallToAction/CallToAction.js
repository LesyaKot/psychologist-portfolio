import Link from "next/link";
import css from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <blockquote className={css.quote}>
          «Вам не потрібно ставати іншою людиною. Іноді потрібно лише нарешті
          дозволити собі бути собою».
        </blockquote>

        <div className={css.divider}></div>

        <div className={css.btnWrapper}>
          <Link href="/contact" className={css.btn}>
            Записатись на сесію →
          </Link>
        </div>
      </div>
    </section>
  );
}
