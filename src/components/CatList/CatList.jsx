import PropTypes from "prop-types";
import css from "./CatList.module.scss";

const CatList = ({ data }) => {
  return (
    <div className={css.cat_wrapper}>
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
};
