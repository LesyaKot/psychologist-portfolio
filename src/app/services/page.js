import Link from "next/link";
import Image from "next/image";
import css from "./services.module.css";

export default function ServicesPage() {
  const stepsData = [
    {
      num: "01",
      title: "ЗУСТРІЧ-ЗНАЙОМСТВО",
      text: "На першій консультації ми знайомимося та формуємо чіткі запити з якими будемо працювати",
    },
    {
      num: "02",
      title: "ПІДБІР МЕТОДІВ ТА ІНСТРУМЕНТІВ",
      text: "На цьому етапі я визначаю техніки, які ми будемо використовувати в процесі нашого спілкування",
    },
    {
      num: "03",
      title: "КОНСУЛЬТУВАННЯ",
      text: "Кількість зустрічей залежить від конкретного випадку. Працювати з одним питанням, чи обирати більше запитів - залежить від вашого бажання та готовності",
    },
    {
      num: "04",
      title: "РЕЗУЛЬТАТ",
      text: "Моя ціль - турботлива та лагідна, але дієва трансформація моїх клієнтів, яка безперечно приводить до бажаних результатів",
    },
  ];

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
            sizes="320px"
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

      
      <div className={css.processSection}>
        <h2 className={css.processMainTitle}>Як ми працюємо</h2>

        <div className={css.stepsList}>
          {stepsData.map((step, index) => (
            <div key={index} className={css.stepItem}>
              <div className={css.stepNumber}>{step.num}</div>
              <div className={css.stepContent}>
                <h3 className={css.stepTitle}>{step.title}</h3>
                <p className={css.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
