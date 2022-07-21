import React from "react";
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    Cell,
    ResponsiveContainer
  } from "recharts";

function Bargraph(){

    const data = [
        { name: "2 wheelers", count: 120 },
        { name: "4 wheelers", count: 150 },
        { name: "Online", count: 100 },
        { name: "Cash", count: 180 },
      ];

    const barColors = ['#40B763','#0F75BC','#79CD92','rgba(15, 117, 188, 0.6)']

    return(
        <div>
            <div >
                <div >
                    <ResponsiveContainer width="110%" height={196} >
                        <BarChart
                        width={400}
                        height={196}
                        data={data}
                        margin={{
                            top: 5,
                            right: 70,
                            left: -30,
                            bottom: 15,
                        }}
                        barSize={20}
                    
                        >
                            <XAxis
                                dataKey="name"
                                scale="point"
                                padding={{ left: 11, right: 10 }}
                                fontSize={10}
                            />
                            <YAxis fontSize={14}/>
                            <Tooltip />
                            <Legend width={100} wrapperStyle={{ top:4 , left: "68%",  lineHeight: '40px' }}/>
                            <CartesianGrid strokeDasharray="4 4" />
                            <Bar dataKey="count" fill="#8884d8" background={{ fill: "#eee" }} >
                                {
                                    data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                                    ))
                                }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Bargraph