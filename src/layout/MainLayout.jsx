import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
