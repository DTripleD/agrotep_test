import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import css from "./MainPage.module.scss";
import CatList from "../../components/CatList/CatList";
import { Plus, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectOffice } from "../../redux/cats/catsSelectors";

import { addCat, deleteOffice } from "../../redux/cats/catsSlice";
import { filter } from "../../helpers/filter";
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const MainPage = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const [today, setToday] = useState(false);
  const [small, setSmall] = useState(false);

  const offices = useSelector(selectOffice);
  const dispatch = useDispatch();

  const addCatFunc = async (props) => {
    await dispatch(addCat({ data: props, selectedItem }));
  };

  return (
    <>
      <HeaderSection
        setToday={setToday}
        setSmall={setSmall}
        offices={offices}
      />

      <div className={css.table_wrapper}>
        {filter(today, small, offices).map((office, index) => (
          <table key={office.id} className={css.table}>
            <thead>
              <tr>
                <th colSpan="6" className={css.th}>
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
    </>
  );
};

export default MainPage;
