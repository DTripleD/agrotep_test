import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.scss";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase, Info, Phone } from "lucide-react";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={css.sidebar}>
      <button onClick={() => setIsShown((prev) => !prev)}>
        {isShown ? (
          <ArrowLeft className={css.icon_arrow} />
        ) : (
          <ArrowRight className={css.icon_arrow} />
        )}
      </button>
      <NavLink to="/" className={css.nav_text}>
        <Briefcase />
        {isShown && <span>Головна</span>}
      </NavLink>
      <NavLink to="/contacts" className={css.nav_text}>
        <Phone /> {isShown && <span>Контакти</span>}
      </NavLink>
      <NavLink to="/info" className={css.nav_text}>
        <Info /> {isShown && <span>Про нас</span>}
      </NavLink>
    </div>
  );
};

export default Header;
