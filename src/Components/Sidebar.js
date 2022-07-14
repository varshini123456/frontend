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

function Sidebar(){
    return (
        <div>
            <div>
                <div class="sidebar">
                    <div class="title">
                        <header><img class="pms" src={pms} alt="logo"/><span>Park Me </span><span style={{"color": "#01B050"}}>Safe</span></header>
                    </div>
                    <div>
                        <a href="#dashboard"><img class="links" src={dbimg} alt="dashboard" /> Dashboard</a>
                        <a href="#parking"><img class="links" src={tp} alt="parking" />Total parking</a>
                        <a href="#revenue"><img class="links" src={revenue} alt="revenue" /> Total Revenue</a>
                        <a href="#site"><img class="links" src={site} alt="site" /> Total sites</a>
                        <a href="#review"><img class="links" src={review} alt="review" /> Customer review</a>
                        <a href="#siteReg"><img class="links" src={siteReg} alt="Site registration" /> Site registration</a>
                        <a href="#labour"><img class="links" src={labour} alt="Labour company" /> Labour company <img class="arrow" src={vector} alt="vector" /></a>
                        <a href="#area"><img class="links" src={area} alt="Area manager" /> Area manager <img class="arrow" src={vector} alt="vector" /></a>
                        <a href="#mall"><img class="links" src={mall} alt="Mall owner registration" /> Mall owner registration</a>
                        <a href="#user"><img class="links" src={user} alt="User management" /> User management</a>
                        <a href="#adv"><img class="links" src={adv} alt="Advertise" /> Advertise</a>
                    </div>
                    <div class="logout">
                        <a href="#logout"><img class="links1" src={logout} alt="logout" /> Log out</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;