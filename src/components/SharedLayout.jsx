import { Suspense } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const SharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
