import { useState } from "react";
import css from "./Modal.module.scss";
import PropTypes from "prop-types";

const Modal = ({ isHidden, setIsHidden, addCat }) => {
  const [catName, setCatName] = useState("");
  const [breed, setBreed] = useState("");
  const [years, setYears] = useState("");
  const [receiving, setReceiving] = useState("");
  const [fact, setFact] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addCat({ catName, breed, years, receiving, fact });
  };

  return (
    <div className={`${css.backdrop} ${isHidden ? css.is_hidden : ""}`}>
      <div className={css.modal}>
        <button
          className={css.modal__close}
          onClick={() => setIsHidden(!isHidden)}
        ></button>

        <p className={css.modal__article}>Додати котика</p>
        <form
          name="modal-form"
          className={css.modal__group}
          onSubmit={handleFormSubmit}
        >
          <label className={css.modal__label}>
            Ім`я
            <input
              type="text"
              id="user_name"
              name="user_name"
              className={css.modal__input}
              onChange={(e) => setCatName(e.target.value)}
            />
          </label>

          <label className={css.modal__label}>
            Порода
            <input
              type="text"
              id="user_phone"
              name="user_phone"
              className={css.modal__input}
              onChange={(e) => setBreed(e.target.value)}
            />
          </label>

          <label className={css.modal__label}>
            Вік
            <input
              type="text"
              id="user_mail"
              name="user_mail"
              className={css.modal__input}
              onChange={(e) => setYears(e.target.value)}
            />
          </label>

          <label htmlFor="user_mail" className={css.modal__label}>
            Дата запису
            <input
              type="text"
              id="user_mail"
              name="user_mail"
              className={css.modal__input}
              onChange={(e) => setReceiving(e.target.value)}
            />
          </label>

          <label className={css.modal__label} htmlFor="user_message">
            Факт
            <textarea
              className={css.modal__message}
              name="user_message"
              id="user_message"
              placeholder="Введіть текст"
              onChange={(e) => setFact(e.target.value)}
            ></textarea>
          </label>

          <button type="submit" className={css.modal__btn}>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  isHidden: PropTypes.bool,
  setIsHidden: PropTypes.func,
  addCat: PropTypes.func,
};
