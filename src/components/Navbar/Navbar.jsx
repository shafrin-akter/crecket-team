import dollar from "../../assets/dollar.png";
import logo from "../../assets/logo.png";
const Navbar = ({ balance }) => {
  return (
    <div>
      <div className="navbar md:w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="">
            <img className="w-[60px] h-[60px]" src={logo} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span>{balance}</span>
          <p>Coin</p>
          <img src={dollar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
