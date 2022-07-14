import React from "react";
import avatar from './Icons/avatar.svg'
import "./CSS/Navbar.css"

function Navbar(){
    return (
        <div class="nav">
            <div class="topnav">
                <div class="time">
                    <p>11:30</p>
                </div>
                <div class="search-container">
                    <form action="#func">
                    <input type="text" placeholder="Search.." name="search" />
                    </form>
                </div>
                <div>
                    <img src={avatar} class="avatar" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;