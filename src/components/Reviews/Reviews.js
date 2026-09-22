import css from "./Reviews.module.css";

export default function Reviews() {
  const reviewsData = [
    {
      text: "«Терапія з Тетяною допомогла мені знайти внутрішню опору в період життєвої кризи, я нарешті зміг скинути тягар, та розібратися зі своїми емоціями.»",
      author: "Олександр, 27 роки",
    },
    {
      text: "«Дякую за дбайливий супровід крізь мою тривожність. Ті практичні інструменти, які ми розробили на сесіях, дійсно допомагають справлятися з повсякденними викликами на роботі, і не тільки.»",
      author: "Марія, 24 років",
    },
    {
      text: "«Завдяки Тетяні повністю змінився мій підхід до внутрішньої стійкості,я змогла переосмислити сценарії, які роками керували моїм життям. Це був найкращий внесок у власне ментальне здоров'я.»",
      author: "Олена, 41 рік",
    },
  ];

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.headerBlock}>
          <h2 className={css.mainTitle}>
            Відгуки <span className={css.italicWord}></span>
          </h2>
          {/* <p className={css.mainSubtitle}>
            Відгуки людей, які пройшли шлях внутрішніх змін та відновлення у
            безпечному терапевтичному просторі.
          </p> */}
        </div>

        <div className={css.grid}>
          {reviewsData.map((review, index) => (
            <div key={index} className={css.reviewCard}>
              <p className={css.text}>{review.text}</p>
              <div className={css.divider}></div>
              <span className={css.author}>{review.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
