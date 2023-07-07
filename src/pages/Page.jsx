import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Page = () => {
  return (
    <div className="bg-[#1F1F1F] h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Page;
