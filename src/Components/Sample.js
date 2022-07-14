import React from 'react';

anychart.onDocumentReady(function() {

    // set the data
    var data = {
      header: ["Name", "Death toll"],
      rows: [
        ["2 wheelers", 10],
        ["4 wheelers", 10],
        ["Online", 10],
        ["Cash", 10],
        
    ]};

    // create the chart
   var chart = anychart.bar();

    // add data
    chart.data(data);

    // set the chart title
    chart.title("The deadliest earthquakes in the XXth century");


  // draw
  chart.container("container");
  chart.draw();
});

function Sample(){
    return(
        <div>
            <div id="container"></div>
        </div>
    )
}

export default Sample;