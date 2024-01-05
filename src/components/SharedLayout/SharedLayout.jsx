import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import css from "./SharedLayout.module.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/theme/themeSelectors";

const SharedLayout = () => {
  const theme = useSelector(selectTheme);
  const isChecked = theme === "dark" ? false : true;

  return (
    <div className={`${css.container} ${isChecked && css.dark_theme}`}>
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <section className={css.section}>
            <div className={css.page_container}>
              <Outlet />
            </div>
          </section>
        </main>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
