import React from "react";
import "./CSS/TotalParking.css"

import filter from './Icons/filter.svg'
import excel from './Icons/excel.svg'

import $ from 'jquery'

function TotalParking(){

    $(function () {
        $('#myTable').DataTable({
          "scrollX": true
        });
        $('.dataTables_length').addClass('bs-select');
      });

    return(
        <div className="box-park">
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <h3 className="h2-title">Total Parking</h3>
                    </div>
                </div>

                <div className="ml-lg-5  ml-md-1 ">
                    <div className="filtericon pl-md-3 ml-md-5" ><img className="filter" src={filter} alt="filter"/>Filter</div>
                    <div>
                        <div className="boxfilter pl-md-5 ml-md-4 pr-md-5">
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

                            <div className="custom-park">
                                <input type="date" 
                                value="2018-07-22"
                                min="2018-01-01" />
                            </div>
                            <div className="to">
                                <p>To</p>
                            </div>
                            <div className="custom1-park">
                                <input type="date" 
                                value="2018-07-22"
                                min="2018-01-01" />
                            </div>

                            <div>
                                <div className="row ml-3 mt-2 pb-0">
                                    <div className="col-12 text-sm-left text-md-right col-xs-left">
                                        <button type="button" className="btn ">
                                            <img src={excel} alt="excel" width={"50%"} />
                                            <br></br>
                                            <p style={{fontSize: 7, fontFamily: 'Open Sans', fontWeight:150}}>click here to download</p>
                                        </button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                
                    <div className="col-sm-12">
                        <div className="table responsive table-park">
                            <table id="myTable" role="grid" className="table table-striped table-sm table-css table-responnsive " cellspacing="0" width="100%">
                                <thead>
                                    <tr role="row">
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Sr.No

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Vehicle Type

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Vehicle No.

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">User Name

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Payment Status

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Parking Booking

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Parking Slot

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Check in

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Check Out

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">Site Name

                                        </th>
                                        <th className="th-sm" tabindex="0" aria-controls="dtBasicExample" rowspan="1" colspan="1" style={{width:"53px"}} aria-sort="descending">User profile

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                    </tr>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr role="row">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                
                

            </div>
        </div>
    )
}

export default TotalParking