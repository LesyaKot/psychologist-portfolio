import Link from "next/link";
import Image from "next/image";
import css from "./services.module.css";

export default function ServicesPage() {
  return (
    <main className={css.container}>
      <div className={css.headerBlock}>
        <h1 className={css.mainTitle}>
          Терапевтичний <span className={css.italicWord}>простір</span>
        </h1>
      </div>

      <div className={css.contentGrid}>
        <div className={css.imageWrapper}>
          <Image
            src="/services-photo.png"
            alt="Індивідуальна терапія з Тетяною Колесниковою"
            fill
            priority
            className={css.photo}
          />
        </div>

        <div className={css.textBlock}>
          <h2 className={css.serviceTitle}>Індивідуальна сесія</h2>

          <div className={css.descriptionBlock}>
            <p className={css.paragraph}>
              Персоналізовані індивідуальні зустрічі, створені для того, щоб
              допомогти вам знайти ясність, прожити складні емоції та впевнено
              рухатися вперед. Ми дбайливо зануримося у вашу особисту історію,
              щоб виявити приховані життєві сценарії, кинути виклик
              обмежувальним переконанням та сформувати надійний набір
              інструментів для внутрішньої стійкості.
            </p>
          </div>

          <Link href="/contact" className={css.linkBtn}>
            Записатись на сесію →
          </Link>
        </div>
      </div>
    </main>
  );
}
