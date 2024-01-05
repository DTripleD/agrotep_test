import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.scss";
import { useState } from "react";
import { ArrowRight, Briefcase, Info, Phone } from "lucide-react";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={`${css.sidebar} ${!isShown && css.sidebar_big}`}>
      <button
        onClick={() => setIsShown((prev) => !prev)}
        className={css.sidebar_button}
      >
        <ArrowRight
          className={`${css.icon_arrow} ${!isShown && css.is_active}`}
        />
      </button>
      <div className={css.nav_wrapper}>
        <NavLink to="/" className={css.nav_text}>
          <Briefcase />
          <span className={`${css.text_shown} ${!isShown && css.text_visible}`}>
            Головна
          </span>
        </NavLink>
        <NavLink to="/contacts" className={css.nav_text}>
          <Phone />
          <span className={`${css.text_shown} ${!isShown && css.text_visible}`}>
            Контакти
          </span>
        </NavLink>
        <NavLink to="/info" className={css.nav_text}>
          <Info />
          <span className={`${css.text_shown} ${!isShown && css.text_visible}`}>
            Про нас
          </span>
        </NavLink>
      </div>
      <ThemeToggler />
    </div>
  );
};

export default Sidebar;
