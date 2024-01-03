import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import { lazy } from "react";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const InfoPage = lazy(() => import("./pages/InfoPage/InfoPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
