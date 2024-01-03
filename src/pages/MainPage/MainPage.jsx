import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import css from "./MainPage.module.scss";
import CatList from "../../components/CatList/CatList";

const MainPage = () => {
  const [offices, setOffices] = useState([
    {
      officeName: "Кабінет",
      data: [
        {
          catName: "Мурзик",
          breed: "Мейкун",
          years: "1 рік",
          receiving: "03.01.2024",
          fact: "Fdfdsfdfggdggd",
        },
      ],
      id: 0,
    },
    {
      officeName: "Кабінет2",
      data: [
        {
          catName: "Мурзик",
          breed: "Мейкун",
          years: "1 рік",
          receiving: "03.01.2024",
          fact: "Fdfdsfdfggdggd",
        },
      ],
      id: 1,
    },
  ]);
  const [isHidden, setIsHidden] = useState(true);

  const [selectedItem, setSelectedItem] = useState(0);

  const newOffice = () => {
    setOffices((prev) => [
      ...prev,
      {
        officeName: "Кабінет",
        data: {
          catName: "Мурзик",
          breed: "Мейкун",
          years: "1 рік",
          receiving: "03.01.2024",
          fact: "Fdfdsfdfggdggd",
        },
      },
    ]);
  };

  const addCat = (props) => {
    // Копия полного масива
    const updatedOffices = [...offices];

    // Офис который нам нужно было найти
    const officeToUpdate = updatedOffices.find(
      (office) => office.id === selectedItem
    );

    if (officeToUpdate) {
      // Обьект который будем запихивать
      const newData = {
        ...props,
      };

      console.log(officeToUpdate.data);

      officeToUpdate.data = [...officeToUpdate.data, newData];

      setOffices(updatedOffices);
    }
  };

  console.log(offices);

  return (
    <div>
      <button onClick={newOffice}>Новий кабінет</button>
      <label>
        <input type="checkbox" />
        сьогодні
      </label>
      <label>
        <input type="checkbox" />
        Котенята
      </label>
      <div>
        {offices.map((office, index) => (
          <div key={index}>
            {console.log(office)}
            <div className={css.office_wrapper}>
              <div>
                {office.officeName}
                {index}
              </div>
              <button
                type="button"
                data-modal-open
                onClick={(prevState) => {
                  setSelectedItem(index);
                  setIsHidden(!prevState);
                }}
              >
                New cat
              </button>
            </div>

            {office.data.map((d) => (
              <CatList key={d.catName} data={d} />
            ))}
          </div>
        ))}
      </div>
      <Modal isHidden={isHidden} setIsHidden={setIsHidden} addCat={addCat} />
    </div>
  );
};

export default MainPage;
