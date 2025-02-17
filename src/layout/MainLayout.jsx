import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../Pages/footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="bg-accent">
      <nav className="flex justify-center bg-primary backdrop-blur-xl fixed top-0 z-10 w-full">
        <Navbar></Navbar>
      </nav>

      <main className="mx-auto min-h-[calc(100vh-345px)] mb-10">
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
