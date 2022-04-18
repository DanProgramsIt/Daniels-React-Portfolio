import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";

function Navigation(props) {
  const tabs = ["About", "Portfolio", "Resume", "Contact"];

  return (
    <header className="navegation">
      <h2>
        <FontAwesomeIcon icon={faCode} style={{ fontSize: "20px" }} />
        Daniel Mendez
      </h2>
      <>
        <div>
          <Navbar>
            <ul className="nav nav-tabs justify-content-end">
              {tabs.map((tab) => (
                <li className="nav-item" key={tab}>
                  <a
                    href={"#" + tab.toLowerCase()}
                    onClick={() => props.setCurrentPage(tab)}
                    className={
                      props.currentPage === tab ? "navActive" : "nav-link"
                    }
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </Navbar>
        </div>
      </>
    </header>
  );
}

export default Navigation;
