import { Outlet } from "react-router-dom";
import Header from "./components/Headers";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Root;
