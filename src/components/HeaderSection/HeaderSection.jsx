import { useDispatch } from "react-redux";
import { addOffice } from "../../redux/cats/catsSlice";
import css from "./HeaderSection.module.scss";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import {getCatFact} from "../../helpers/getCatFact.js";

const HeaderSection = ({ setToday, setSmall, offices }) => {
  const dispatch = useDispatch();

  const newOffice = async () => {
      const fact = await getCatFact();

   await dispatch(
      addOffice({
        officeName: "Кабінет",
        data: [
          {
            catName: "Мурзик",
            breed: "Мейкун",
            years: 1,
            receiving: "03.01.2024",
            fact,
            id: nanoid(),
          },
        ],
        id: offices.length,
      })
    );
  };

  return (
    <div className={css.filter_wrapper}>
      <button onClick={newOffice} className={css.new_office__button}>
        Новий кабінет
      </button>
      <label className={css.filter_label}>
        <input type="checkbox" onClick={(e) => setToday(e.target.checked)} />
        сьогодні
      </label>
      <label className={css.filter_label}>
        <input type="checkbox" onClick={(e) => setSmall(e.target.checked)} />
        Котенята
      </label>
    </div>
  );
};

export default HeaderSection;

HeaderSection.propTypes = {
  setToday: PropTypes.func,
  setSmall: PropTypes.func,
  offices: PropTypes.array,
};
