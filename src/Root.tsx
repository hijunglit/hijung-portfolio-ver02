import { Outlet } from "react-router-dom";
import Header from "./components/Headers";

function Root() {
  return (
    <>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </>
  );
}
export default Root;
