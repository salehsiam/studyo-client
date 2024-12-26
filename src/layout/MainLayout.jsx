import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../Pages/footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="bg-[#FFFDE7]">
      <nav className="bg-green-900 py-4 max-w-7xl mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-345px)] mb-10">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
