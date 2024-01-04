import css from "./ThemeToggler.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../redux/theme/themeSlice";
import { selectTheme } from "../../redux/theme/themeSelectors";

export const ThemeToggler = () => {
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const theme = useSelector(selectTheme);
  const isChecked = theme === "dark" ? false : true;

  return (
    <label className={css.theme_label}>
      <input
        checked={isChecked}
        type="checkbox"
        className={css.theme_input}
        onChange={handleToggleTheme}
      />
      <div className={css.switch}>
        <div></div>
        <div></div>
        <span></span>
      </div>
    </label>
  );
};

export default ThemeToggler;
