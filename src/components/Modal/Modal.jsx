import { useEffect, useState } from "react";
import css from "./Modal.module.scss";
import PropTypes from "prop-types";
import { day, month, year } from "../../helpers/date";

import allCatsBreed from "../../../cats.json";
import { XCircle } from "lucide-react";

const Modal = ({ isHidden, setIsHidden, addCatFunc }) => {
  const [catName, setCatName] = useState("");
  const [breed, setBreed] = useState("");
  const [years, setYears] = useState("");
  const [receiving, setReceiving] = useState("");
  const [fact, setFact] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    addCatFunc({ catName, breed, years, receiving, fact });

    setIsHidden(true);
    resetForm();
  };

  useEffect(() => {
    resetForm();
    if (!isHidden) {
      fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => setFact(data.fact))
        .catch((error) => console.log(error));
    }
  }, [isHidden]);

  const resetForm = () => {
    setCatName("");
    setBreed("");
    setYears("");
    setReceiving("");
    setFact("");
  };

  return (
    <div className={`${css.backdrop} ${isHidden ? css.is_hidden : ""}`}>
      <div className={css.modal}>
        <button
          className={css.modal__close}
          onClick={() => setIsHidden(!isHidden)}
        >
          <XCircle className={css.close_icon} />
        </button>

        <p className={css.modal__article}>Додати котика</p>
        <form
          name="modal-form"
          className={css.modal__group}
          onSubmit={handleFormSubmit}
        >
          <label className={css.modal__label}>
            Ім`я
            <input
              required
              value={catName}
              type="text"
              id="user_name"
              name="user_name"
              className={css.modal__input}
              onChange={(e) => setCatName(e.target.value)}
            />
          </label>

          <label className={css.modal__label}>
            Порода
            <select
              required
              value={breed}
              type="text"
              id="user_phone"
              name="user_phone"
              className={css.modal__input}
              onChange={(e) => setBreed(e.target.value)}
            >
              <option value="">--Виберіть породу--</option>
              {allCatsBreed.map((cat) => (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <label className={css.modal__label}>
            Вік
            <input
              required
              value={years}
              type="number"
              min={0.1}
              max={50}
              step={0.1}
              id="user_mail"
              name="user_mail"
              className={css.modal__input}
              onChange={(e) => setYears(e.target.value)}
            />
          </label>

          <label htmlFor="user_mail" className={css.modal__label}>
            Дата запису
            <input
              required
              value={receiving}
              type="date"
              min={`${year}-${month}-${day}`}
              id="user_mail"
              name="user_mail"
              className={css.modal__input}
              onChange={(e) => setReceiving(e.target.value)}
            />
          </label>

          <label className={css.modal__label} htmlFor="user_message">
            Факт
            <textarea
              required
              value={fact}
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
  addCatFunc: PropTypes.func,
};
