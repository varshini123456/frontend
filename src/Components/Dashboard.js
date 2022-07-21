import React from 'react';
import "./CSS/Dashboard.css"
import filter from './Icons/filter.svg'
import eye from './Icons/eye.svg'
import bike from './Icons/bike.svg'
import car from './Icons/car.svg'

import Bargraph from './Bargraph';
import BikePieChart from './BikePieChart';
import CarPieChart from './CarPieChart'



function Dashboard(){

   
    return (
        <div class="box">
            <div class="filters">
                <span class="filtericon" ><img class="filter" src={filter} alt="filter"/>Filter</span>
                <div>
                    <div class="boxfilter">
                        <div class="dailyfilter">
                            <div class="daily">
                            Select
                            </div>
                            <div class="dropdown-arrow"></div>
                            <div class="dropdown-menu">
                                <ul> 
                                    <li>Daily</li>
                                    <li>Monthly</li>
                                </ul>
                            </div>
                        </div>

                        <div class="custom">
                            <input type="date" 
                            value="2018-07-22"
                            min="2018-01-01" />
                        </div>
                        <div class="to">
                            <p>To</p>
                        </div>
                        <div class="custom1">
                            <input type="date" 
                            value="2018-07-22"
                            min="2018-01-01" />
                        </div>
                    </div>
                </div>
                
            </div>
            <br />
            <div class="dashboardDetails">
                <div class="container">
                    <div class="row">
                        <div class="col da-col ">
                            <p class="da-text">Total parking book</p>
                            <div class="row">
                                <div class="col">
                                    <img src={bike} alt="bike" className='car'/>
                                </div>
                                <div class="col">
                                    <img src={car} alt="car" className='car'/>
                                </div>
                                <div class="col">
                                    <BikePieChart />
                                </div>
                                <div class="col">
                                    <CarPieChart />
                                </div>
                            </div>
                        </div>
                        <div class="col da-col 1">
                            <p class="da-text1">Total Revenue</p>
                            <Bargraph />
                        </div>
                        <div class="w-100"></div>
                        <div class="col da-col ">
                            <p class="da-text">Total Sites</p>
                            <div class="row" >
                                <div class="col eye" >
                                    <button><img src={eye} alt="eye" />View</button>
                                </div>
                            </div>
                        </div>
                        <div class="col da-col ">
                            <p class="da-text">Customer review</p>
                            <div className='row'>
                                <div className='col da-reviews'>
                                    <p className='da-review-name'>John :</p>
                                    <br />
                                    <p className='da-review'>Best parking and good management</p>
                                </div>
                                <div className='w-100'></div>
                                <div className='col da-more'>
                                    <button >View more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;