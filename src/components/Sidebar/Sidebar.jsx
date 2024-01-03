import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.scss";
import { useState } from "react";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={css.sidebar}>
      <button onClick={() => setIsShown((prev) => !prev)}>Show</button>
      <NavLink to="/" className={css.nav_text}>
        + {isShown && <span>Головна</span>}
      </NavLink>
      <NavLink to="/contacts" className={css.nav_text}>
        + {isShown && <span>Контакти</span>}
      </NavLink>
      <NavLink to="/info" className={css.nav_text}>
        + {isShown && <span>Про нас</span>}
      </NavLink>
    </div>
  );
};

export default Header;
