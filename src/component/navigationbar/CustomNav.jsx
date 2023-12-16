import  { useState } from "react";
import './_CustomNav.scss';
import {CiMenuBurger} from "react-icons/ci"

const CustomNav = ({ li }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <span className="burgerIcon"><img src="https://www.offidocs.com/images/logobirdblue.jpg" alt="" style={{width: '50px', height: "50px"}}/></span>
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i}>
            <span style={{color:"white"}} >{item[1]}</span>
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default CustomNav;