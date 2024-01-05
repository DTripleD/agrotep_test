import css from "./ContactsPage.module.scss";

const ContactsPage = () => {
  return (
    <>
      <h1 className={css.contacts_title}>Contacts</h1>

      <p className={css.contacts_about}>
        Now I am actively looking for work opportunities and if you have
        interesting offers, you can contact me in any way convenient for you:
      </p>
      <ul className={`${css.list} ${css.contacts_list}`}>
        <li className={css.contacts__item}>
          <p className={css.contacts__list_text}>LinkedIn:&#160;</p>{" "}
          <a
            className={`${css.link} ${css.contacts_link}`}
            href="https://www.linkedin.com/in/danylo-deineka/"
          >
            click
          </a>
        </li>
        <li className={css.contacts__item}>
          <p className={css.contacts__list_text}>Gmail:&#160;</p>
          <a
            className={`${css.link} ${css.contacts_link}`}
            href="mailto:danildeineka22@gmail.com"
          >
            danildeineka22@gmail.com
          </a>
        </li>
        <li className={css.contacts__item}>
          <p className={css.contacts__list_text}>GitHub:&#160;</p>
          <a
            className={`${css.link} ${css.contacts_link}`}
            href="https://github.com/DTripleD"
          >
            click
          </a>
        </li>
        <li className={css.contacts__item}>
          <p className={css.contacts__list_text}>Telegram:&#160;</p>
          <a
            className={`${css.link} ${css.contacts_link}`}
            href="https://t.me/TripleDD"
          >
            click
          </a>
        </li>
      </ul>
    </>
  );
};

export default ContactsPage;
