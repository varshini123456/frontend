import React from "react";
import avatar from './Icons/avatar.svg'
import "./CSS/Navbar.css"
import $ from 'jquery'

function Navbar(){

    $(function(){
        $(".fa-search").on('click', function() {
            $(".search-container").toggle();
            $("input[type='text']").focus();
          });

        if($(window).width() < 992){
            $('.search-container').hide();
        }

    });

    return (
        <div className="nav">
            <div className="topnav" id="myTopnav">
                <div className="time">
                    <p>11:30</p>
                </div>
                <div className="d-lg-none d-xl-none">
                    <i  id="searchicon" class="fa fa-search"  ></i>
                </div>
                <div className="search-container d-lg-block d-xl-block" id="searchform">
                    <form action="#func">
                    <input type="text" placeholder="Search.." name="search" />
                    </form>
                </div>
                    <img src={avatar} className="avatar" alt="avatar" />
            </div>
        </div>
    );
}

export default Navbar;