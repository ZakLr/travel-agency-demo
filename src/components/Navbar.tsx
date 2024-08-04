import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import PopupMenu from "./PopupMenu";
const Navbar = ({ navlinks }: any) => {
  const [popupState, setPopupState] = useState(false);
  const [navState, setNavState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  // console.log(popupState)

  return (
    <>
      <header
        className={`
        nav-default ${navState && "nav-sticky"}
      `}
      >
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={`/`} className="flex items-center">
            <h1 className="text-4xl md:text-3xl">LOGO</h1>
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val: any, i: any) => (
              <li key={i}>
                <a href={val.id}>{val.link}</a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <a
                href="#contact"
                type="button" className="rounded-xl bg-primary p-3 px-7 text-base">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer  text-2xl"
                onClick={onTriggerPopup}
              >
                &#9776;
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
    </>
  );
};

export default Navbar;
