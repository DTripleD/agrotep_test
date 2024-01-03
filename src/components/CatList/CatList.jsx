import PropTypes from "prop-types";
import css from "./CatList.module.scss";

const CatList = ({ data, id }) => {
  return (
    <div className={css.cat_wrapper}>
      <p>{id + 1}</p>
      <p>{data.catName}</p>
      <p>{data.breed}</p>
      <p>{data.years}</p>
      <p>{data.receiving}</p>
      <p>{data.fact}</p>
    </div>
  );
};

export default CatList;

CatList.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
};
