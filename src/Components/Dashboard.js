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
        <div className="box">
            <div className="filters">
                <span className="filtericon" ><img className="filter" src={filter} alt="filter"/>Filter</span>
                <div>
                    <div className="boxfilter">
                        <div className="dailyfilter">
                            <div className="daily">
                            Select
                            </div>
                            <div className="dropdown-arrow"></div>
                            <div className="dropdown-menu">
                                <ul> 
                                    <li>Daily</li>
                                    <li>Monthly</li>
                                </ul>
                            </div>
                        </div>

                        <div className="custom">
                            <input type="date" 
                            value="2018-07-22"
                            min="2018-01-01" />
                        </div>
                        <div className="to">
                            <p>To</p>
                        </div>
                        <div className="custom1">
                            <input type="date" 
                            value="2018-07-22"
                            min="2018-01-01" />
                        </div>
                    </div>
                </div>
                
            </div>
            <br />
            <div className="dashboardDetails">
                <div className="container">
                    <div className="row">
                        <div className="col da-col ">
                            <p className="da-text">Total parking book</p>
                            <div className="row">
                                <div className="col">
                                    <img src={bike} alt="bike" className='car'/>
                                </div>
                                <div className="col">
                                    <img src={car} alt="car" className='car'/>
                                </div>
                                <div className="col">
                                    <BikePieChart />
                                </div>
                                <div className="col">
                                    <CarPieChart />
                                </div>
                            </div>
                        </div>
                        <div className="col da-col ">
                            <p className="da-text1">Total Revenue</p>
                            <Bargraph />
                        </div>
                        <div className="w-100"></div>
                        <div className="col da-col ">
                            <p className="da-text">Total Sites</p>
                            <div className="row" >
                                <div className="col eye" >
                                    <button><img src={eye} alt="eye" />View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col da-col ">
                            <p className="da-text">Customer review</p>
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