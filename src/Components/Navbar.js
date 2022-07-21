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

          if( $(document).width() < 769){
            $('.search-container').hide();
            $('#searchicon').show();
        }
        else{
            $('#searchicon').hide();
        }
    });

    return (
        <div className="nav">
            <div className="topnav" id="myTopnav">
                <div className="time">
                    <p>11:30</p>
                </div>
                <i id="searchicon" class="fa fa-search" aria-hidden="true"></i>
                <div className="search-container">
                    <form action="#func">
                    <input type="text" placeholder="Search.." name="search" />
                    </form>
                </div>
                <div>
                    <img src={avatar} className="avatar" alt="avatar" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;