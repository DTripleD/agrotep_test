import { Trash } from "lucide-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteCat } from "../../redux/cats/catsSlice";

import css from "./CatList.module.scss";

const CatList = ({ data, index }) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td>{`${index + 1}. ${data.catName}`}</td>
        <td>{data.breed}</td>
        <td>{data.years} рік/років</td>
        <td>{data.receiving}</td>
        <td title={data.fact}>{data.fact}</td>
        <td>
          <button
            type="button"
            className={css.delete_button}
            onClick={() => dispatch(deleteCat(data.id))}
          >
            <Trash />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CatList;

CatList.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
