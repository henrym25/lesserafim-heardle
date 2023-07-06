import Info from "./Info";
import Help from "./Help";

const Header = () => {
  return (
    <div className="text-white w-screen border-b-white border-b-2 h-20 text-center flex-auto justify-center align-middle">
      <Info />
      <Help />
      <div className="text-center border-red-100 border-2">
        LE SSERAFIM Heardle
      </div>
    </div>
  );
};

export default Header;
