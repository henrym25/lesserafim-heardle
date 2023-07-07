import Info from "./Info";
import Help from "./Help";

const Header = () => {
  return (
    <div className="text-white w-screen border-b-white border-b-2 h-20 flex">
      <div className="w-1/6 flex overflow-hidden left-0 align-middle ml-8">
        <div className="w-1/4 m-auto text-center -mr-16">
          <Info />
        </div>
        <div className="w-1/4 m-auto text-center">
          <Help />
        </div>
      </div>
      <div className="my-auto w-4/6 text-center text-2xl">
        LE SSERAFIM Heardle
      </div>
    </div>
  );
};

export default Header;
