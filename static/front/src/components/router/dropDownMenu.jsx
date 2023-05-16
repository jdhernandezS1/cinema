import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Header/nav.css";
import styles from "../../css/moviesGrid.module.css";
let moviesTitle = styles.moviesTitle
let hvrBounceIn = styles.hvrBounceIn
export function NavBarPhone() {
  const [open, setOpen] = useState(false);

  return (

    <div className="">
      <div className="menu-container ">
        <span className={moviesTitle + " " + hvrBounceIn} >
          OmeCast
        </span>
        <div className="menu-trigger" onClick={() => { setOpen(!open) }}>
          Menu
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>

          <ul className="menuPh">
            <DropDownItem name={"/Blog/"} text={'Blog'} />
            <DropDownItem name={"/Movies/"} text={'Movies'} />
            <DropDownItem name={"/About/"} text={'About Us'} />
          </ul>

        </div>
      </div>
    </div>
  );
}


function DropDownItem(props) {
  return (
    <li className="dropdownItem">
      <Link to={props.name} className="dropdownItem"> {props.text}</Link>
    </li>
  )
}
