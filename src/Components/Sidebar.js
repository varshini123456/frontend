import React from "react";
import "./CSS/Sidebar.css"
import pms from './Icons/pms.svg'
import dbimg from './Icons/dashboard.svg'
import tp from './Icons/totalParking.svg'
import revenue from './Icons/revenue.svg'
import site from './Icons/site.svg'
import review from './Icons/review.svg'
import area from './Icons/area.svg'
import adv from './Icons/adv.svg'
import labour from './Icons/labour.svg'
import mall from './Icons/mall.svg'
import siteReg from './Icons/siteReg.svg'
import user from './Icons/user.svg'
import logout from './Icons/logout.svg'
import vector from './Icons/vector.svg'
import logout1 from './Images/logout1.png'
import $ from 'jquery'

$(function() {
    $('#sidebarCollapse').on('click', function(){
        $('#sidebar').toggleClass('active');
    });
    if( $(document).width() < 769){
        $('#but').show()
    }
    else{
        $('#but').hide();
    }

});

function Sidebar(){

    

    return (
        <div>
            <div>
                <div className="sidebar" id="sidebar" >
                    <div className="title">
                        <header><img className="pms" src={pms} alt="logo"/><span>Park Me </span><span style={{"color": "#01B050"}}>Safe</span></header>
                    </div>
                    <div>
                        <a href="#dashboard"><img className="links" src={dbimg} alt="dashboard" /> Dashboard</a>
                        <a href="#parking"><img className="links" src={tp} alt="parking" />Total parking</a>
                        <a href="#revenue"><img className="links" src={revenue} alt="revenue" /> Total Revenue</a>
                        <a href="#site"><img className="links" src={site} alt="site" /> Total sites</a>
                        <a href="#review"><img className="links" src={review} alt="review" /> Customer review</a>
                        <a href="#siteReg"><img className="links" src={siteReg} alt="Site registration" /> Site registration</a>
                        {/* <a href="#labour"><img className="links" src={labour} alt="Labour company" /> Labour company <img className="arrow" src={vector} alt="vector" /></a>
                        <a href="#area"><img className="links" src={area} alt="Area manager" /> Area manager <img className="arrow" src={vector} alt="vector" /></a> */}

                        <div className="dropdown">
                        <span ><img className="links" src={labour} alt="Labour company" /> Labour company <img className="arrow" src={vector} alt="vector" /></span>
                        <div className="dropdown-content">
                        <a href="#dashboard">List</a>
                        <a href="#dashboard">Labour company Registration</a>
                        <a href="#dashboard">Guard List</a>
                        <a href="#dashboard">Payment Closing History</a>
                        </div>
                        </div>

                        <div className="dropdown">
                        <span ><img className="links" src={area} alt="Area manager" /> Area manager <img className="arrow" src={vector} alt="vector" /></span>
                        <div className="dropdown-content">
                        <a href="#dashboard"> List</a>
                        <a href="#dashboard"> Area Manager Registration</a>
                        </div>
                        </div>

                        <a href="#mall"><img className="links" src={mall} alt="Mall owner registration" /> Mall owner registration</a>
                        <a href="#user"><img className="links" src={user} alt="User management" /> User management</a>
                        <a href="#adv"><img className="links" src={adv} alt="Advertise" /> Advertise</a>
                    </div>
                    <div className="logout">
                        <img src={logout1} alt="curve" style={{width: '100%', height:'50px'}} />
                        <a href="#logout" className="centered"><img className="links1" src={logout} alt="logout" /> Log out</a>
                    </div>
                </div>

                <div id="but">
                    <button id="sidebarCollapse"><i class="fa-solid fa-bars"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;