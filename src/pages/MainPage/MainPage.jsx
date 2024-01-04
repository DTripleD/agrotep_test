import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import css from "./MainPage.module.scss";
import CatList from "../../components/CatList/CatList";
import { Plus, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectOffice } from "../../redux/cats/catsSelectors";
import { day, month, year } from "../../helpers/date";
import { addCat, addOffice, deleteOffice } from "../../redux/cats/catsSlice";

const MainPage = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const [today, setToday] = useState(false);
  const [small, setSmall] = useState(false);

  const offices = useSelector(selectOffice);
  const dispatch = useDispatch();

  const filter = () => {
    if (!today && !small) {
      return offices;
    }

    if (today && small) {
      return offices
        .map((office) => ({
          ...office,
          data: office.data.filter((item) => item.years <= 2),
        }))
        .map((office) => ({
          ...office,
          data: office.data.filter(
            (item) => item.receiving === `${year}-${month}-${day}`
          ),
        }));
    }

    if (small && !today) {
      return offices.map((office) => ({
        ...office,
        data: office.data.filter((item) => item.years <= 2),
      }));
    }

    if (today && !small) {
      return offices.map((office) => ({
        ...office,
        data: office.data.filter(
          (item) => item.receiving === `${year}-${month}-${day}`
        ),
      }));
    }
  };

  const newOffice = () => {
    dispatch(
      addOffice({
        officeName: "Кабінет",
        data: [
          {
            catName: "Мурзик",
            breed: "Мейкун",
            years: 1,
            receiving: "03.01.2024",
            fact: "Fdfdsfdfggdggd",
            id: "dsfsdfsdfsdf",
          },
        ],
        id: offices.length,
      })
    );
  };

  const addCatFunc = async (props) => {
    await dispatch(addCat({ data: props, selectedItem }));
  };

  return (
    <main className={css.main_wrapper}>
      <button onClick={newOffice} className={css.new_office}>
        Новий кабінет
      </button>
      <label>
        <input type="checkbox" onClick={(e) => setToday(e.target.checked)} />
        сьогодні
      </label>
      <label>
        <input type="checkbox" onClick={(e) => setSmall(e.target.checked)} />
        Котенята
      </label>

      <div className={css.table_wrapper}>
        {filter().map((office, index) => (
          <table key={office.id}>
            <thead>
              <tr>
                <th colSpan="6">
                  <div className={css.table_head}>
                    <div>
                      {office.officeName}
                      {index + 1}
                    </div>
                    <div>
                      <button
                        type="button"
                        className={css.plus_button}
                        data-modal-open
                        onClick={(prevState) => {
                          setSelectedItem(office.id);
                          setIsHidden(!prevState);
                        }}
                      >
                        <Plus />
                      </button>
                      <button
                        type="button"
                        className={css.plus_button}
                        onClick={() => dispatch(deleteOffice(office.id))}
                      >
                        <Trash />
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            {office.data.map((d, index) => (
              <CatList key={index} data={d} index={index} />
            ))}
          </table>
        ))}
      </div>

      <Modal
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        addCatFunc={addCatFunc}
      />
    </main>
  );
};

export default MainPage;
