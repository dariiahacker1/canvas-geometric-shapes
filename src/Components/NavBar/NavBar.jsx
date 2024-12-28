import React, {useState} from 'react';
import './NavBar.css'
import {Link} from "react-router-dom";

function NavBar() {

    const [menu, setMenu] = useState("cube");

    return (
        <div className="NavBar">
            <div className="logo-name-container">

                <h3 className="name">CROSS SECTIONS</h3>
            </div>

            <div className="shapes">
                <Link to="/cube" style={{textDecoration: 'none'}} onClick={() => setMenu("cube")}>
                    <h3>CUBE</h3>
                    {menu === "cube" ? <hr/>:null}
                </Link>
                <Link to="/sphere" style={{textDecoration: 'none'}} onClick={() => setMenu("sphere")}>
                    <h3>SPHERE</h3>
                    {menu === "sphere" ? <hr/>:null}
                </Link>
                <Link to="/pyramid" style={{textDecoration: 'none'}} onClick={() => setMenu("pyramid")}>
                    <h3>PYRAMID</h3>
                    {menu === "pyramid" ? <hr/>:null}
                </Link>
            </div>

        </div>
    );
}

export default NavBar;