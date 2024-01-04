import PropTypes from "prop-types";
// import css from "./CatList.module.scss";

const CatList = ({ data, id }) => {
  return (
    <tbody>
      <tr>
        <td>{`${id + 1}. ${data.catName}`}</td>
        <td>{data.breed}</td>
        <td>{data.years}</td>
        <td>{data.receiving}</td>
        <td>{data.fact}</td>
      </tr>
    </tbody>
  );
};

export default CatList;

CatList.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
};
