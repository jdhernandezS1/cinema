import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Header/nav.css";
import styles from "../../css/moviesGrid.module.css";
let moviesTitle = styles.moviesTitle
let hvrBounceIn = styles.hvrBounceIn


export function NavBarPhone() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDiv(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (

    <div className="">
      <div className="menu-container " ref={containerRef}>
        <Link to="/">
          <span className={moviesTitle + " " + hvrBounceIn} >
            OmeCast
          </span>
        </Link>
        <div className="menu-trigger" onClick={() => { 
          setOpen(!open)  
          setShowDiv(true);}}>
          Menu
        </div>
        {showDiv && (
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>

            <ul className="menuPh">
              <DropDownItem name={"/Blog/"} text={'Blog'} />
              <DropDownItem name={"/Movies/"} text={'Movies'} />
              <DropDownItem name={"/About/"} text={'About Us'} />
            </ul>

          </div>
        )}
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
