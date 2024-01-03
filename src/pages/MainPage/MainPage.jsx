import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import css from "./MainPage.module.scss";
import CatList from "../../components/CatList/CatList";
import { Plus } from "lucide-react";

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
  ]);
  const [isHidden, setIsHidden] = useState(true);

  const [selectedItem, setSelectedItem] = useState(0);

  const newOffice = () => {
    setOffices((prev) => [
      ...prev,
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
        id: offices.length,
      },
    ]);
  };

  const addCat = (props) => {
    const updatedOffices = [...offices];

    const officeToUpdate = updatedOffices.find(
      (office) => office.id === selectedItem
    );

    if (officeToUpdate) {
      const newData = {
        ...props,
      };

      officeToUpdate.data = [...officeToUpdate.data, newData];

      setOffices(updatedOffices);
    }
  };

  return (
    <main className={css.main_wrapper}>
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
            <div className={css.office_wrapper}>
              <div>
                {office.officeName}
                {index + 1}
              </div>
              <button
                type="button"
                data-modal-open
                onClick={(prevState) => {
                  setSelectedItem(index);
                  setIsHidden(!prevState);
                }}
              >
                <Plus />
              </button>
            </div>

            {office.data.map((d, index) => (
              <CatList key={d.catName} data={d} id={index} />
            ))}
          </div>
        ))}
      </div>
      <Modal isHidden={isHidden} setIsHidden={setIsHidden} addCat={addCat} />
    </main>
  );
};

export default MainPage;
