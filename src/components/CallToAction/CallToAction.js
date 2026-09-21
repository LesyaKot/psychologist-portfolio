import Link from "next/link";
import css from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <blockquote className={css.quote}>
          «Найважливіші стосунки у вашому житті — це стосунки з самим собою.»
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
