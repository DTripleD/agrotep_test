import css from "./InfoPage.module.scss";

const InfoPage = () => {
  return (
    <>
      <h1 className={css.contacts_title}>
        Лідер міжнародних рефрижераторних перевезень
      </h1>

      <p className={css.contacts_about}>
        Багаторічний досвід роботи і незмінна якість наших послуг дозволяє нам
        утримувати позицію лідера галузі рефрижераторних перевезень та
        розширювати обсяг клієнтів та партнерів.
      </p>
      <h2 className={css.work_title}>Ми забезпечуємо:</h2>
      <ul>
        <li className={css.list_item}>
          Міжнародні та внутрішні автомобільні перевезення рефрижераторним
          автотранспортом
        </li>
        <li className={css.list_item}>
          Міжнародні та внутрішні автомобільні перевезення тентованими
          напівпричепами
        </li>
        <li className={css.list_item}>
          Міжнародні та внутрішні автомобільні перевезення небезпечних вантажів
        </li>
        <li className={css.list_item}>Перевезення негабаритних вантажів</li>
      </ul>
    </>
  );
};

export default InfoPage;
