var xAxisStripLinesArray = [];
var yAxisStripLinesArray = [];

var color = "black";

var chart1 = new CanvasJS.Chart("chart1", {
    theme: "light1",
    // animationEnabled: true,
    zoomEnabled: true,
    title: {
        text: "ECG",
        horizontalAlign: "left",
        fontColor: color
    },
    subtitles: [
        {
            text: "No. 797024",
            horizontalAlign: "left"
        }
    ],
    axisY: {
        stripLines: yAxisStripLinesArray,
        gridColor: color,
        lineColor: color,
        tickThickness: 0,
        labelFormatter: function (e) {
            // return e.value;
            return ''
        }
    },
    axisX: {
        stripLines: xAxisStripLinesArray,
        // maximum:8000,
        minimum:0,
        gridColor: color,
        lineColor: color,
        tickThickness: 0,
        labelFormatter: function (e) {
            return e.value +'S';
        }
    },
    data: [
        {
            type: "spline",
            color: "black",
            dataPoints: dps1
        },
        {
            type: "spline",
            color: "black",
            dataPoints: dps2
        },
        {
            type: "spline",
            color: "black",
            dataPoints: dps3
        },
        {
            type: "spline",
            color: "black",
            dataPoints: dps4
        },
        {
            type: "spline",
            color: "black",
            dataPoints: dps5
        },
        {
            type: "spline",
            color: "black",
            dataPoints: dps6
        },
    ]
});




// addDataPoints(chart1);
addStripLines(chart1);

// function addDataPoints(chart1) {
//     for (var i = 0; i < dataPointsArray1.length; i++) {
//         dps1.push({ y: dataPointsArray1[i] });
//     }
//     chart1.render();
// }

function addStripLines(chart1) {
    //StripLines
    // for (var i = 0; i < chart1.axisY; i = i + chart1.axisY.interval / 10) {
    //     if (i % chart.axisY.interval != 0)
    //         yAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
    // }
    for (
        var i = chart1.axisX;
        i < chart1.axisX;
        i = i + chart1.axisX.interval / 10
    ) {
        if (i % chart1.axisX.interval != 0)
            xAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
    }
    chart1.render();
}

// //chart 2 start

// var chart2 = new CanvasJS.Chart("chart2", {
//     theme: "light1",
//     // animationEnabled: true,
//     zoomEnabled: true,
//     title: {
//         text: "ECG",
//         horizontalAlign: "left",
//         fontColor: color
//     },
//     subtitles: [
//         {
//             text: "Date / Timestamp 2018/08/19 11:45:01",
//             horizontalAlign: "left"
//         }
//     ],
//     axisY: {
//         stripLines: yAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     axisX: {
//         stripLines: xAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     data: [
//         {
//             type: "spline",
//             color: "black",
//             dataPoints: dps2
//         }
//     ]
// });



// // addDataPoints(chart2);
// addStripLines(chart2);

// // function addDataPoints(chart2) {
// //     for (var i = 0; i < dataPointsArray2.length; i++) {
// //         dps2.push({ y: dataPointsArray2[i] });
// //     }
// //     chart2.render();
// // }

// function addStripLines(chart2) {
//     //StripLines
//     for (var i = 0; i < chart2.axisY; i = i + chart2.axisY.interval / 10) {
//         if (i % chart.axisY.interval != 0)
//             yAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     for (
//         var i = chart2.axisX;
//         i < chart2.axisX;
//         i = i + chart2.axisX.interval / 10
//     ) {
//         if (i % chart2.axisX.interval != 0)
//             xAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     chart2.render();
// }

// //chart 3 start

// var chart3 = new CanvasJS.Chart("chart3", {
//     theme: "light1",
//     // animationEnabled: true,
//     zoomEnabled: true,
//     title: {
//         text: "ECG",
//         horizontalAlign: "left",
//         fontColor: color
//     },
//     subtitles: [
//         {
//             text: "Date / Timestamp 2018/08/19 11:45:01",
//             horizontalAlign: "left"
//         }
//     ],
//     axisY: {
//         stripLines: yAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     axisX: {
//         stripLines: xAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     data: [
//         {
//             type: "spline",
//             color: "black",
//             dataPoints: dps3
//         }
//     ]
// });

// // addDataPoints(chart3);
// addStripLines(chart3);

// // function addDataPoints(chart3) {
// //     for (var i = 0; i < dataPointsArray3.length; i++) {
// //         dps3.push({ y: dataPointsArray3[i] });
// //     }
// //     chart3.render();
// // }

// function addStripLines(chart3) {
//     //StripLines
//     for (var i = 0; i < chart3.axisY; i = i + chart3.axisY.interval / 10) {
//         if (i % chart.axisY.interval != 0)
//             yAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     for (
//         var i = chart3.axisX;
//         i < chart3.axisX;
//         i = i + chart3.axisX.interval / 10
//     ) {
//         if (i % chart3.axisX.interval != 0)
//             xAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     chart3.render();
// }

// //chart 4 start

// var chart4 = new CanvasJS.Chart("chart4", {
//     theme: "light1",
//     // animationEnabled: true,
//     zoomEnabled: true,
//     title: {
//         text: "ECG",
//         horizontalAlign: "left",
//         fontColor: color
//     },
//     subtitles: [
//         {
//             text: "Date / Timestamp 2018/08/19 11:45:01",
//             horizontalAlign: "left"
//         }
//     ],
//     axisY: {
//         stripLines: yAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     axisX: {
//         stripLines: xAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     data: [
//         {
//             type: "spline",
//             color: "black",
//             dataPoints: dps4
//         }
//     ]
// });

// // addDataPoints(chart4);
// addStripLines(chart4);

// // function addDataPoints(chart4) {
// //     for (var i = 0; i < dataPointsArray4.length; i++) {
// //         dps4.push({ y: dataPointsArray4[i] });
// //     }
// //     chart4.render();
// // }

// function addStripLines(chart4) {
//     //StripLines
//     for (var i = 0; i < chart4.axisY; i = i + chart4.axisY.interval / 10) {
//         if (i % chart.axisY.interval != 0)
//             yAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     for (
//         var i = chart4.axisX;
//         i < chart4.axisX;
//         i = i + chart4.axisX.interval / 10
//     ) {
//         if (i % chart4.axisX.interval != 0)
//             xAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     chart4.render();
// }

// //chart 5 start

// var chart5 = new CanvasJS.Chart("chart5", {
//     theme: "light1",
//     // animationEnabled: true,
//     zoomEnabled: true,
//     title: {
//         text: "ECG",
//         horizontalAlign: "left",
//         fontColor: color
//     },
//     subtitles: [
//         {
//             text: "Date / Timestamp 2018/08/19 11:45:01",
//             horizontalAlign: "left"
//         }
//     ],
//     axisY: {
//         stripLines: yAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     axisX: {
//         stripLines: xAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     data: [
//         {
//             type: "spline",
//             color: "black",
//             dataPoints: dps5
//         }
//     ]
// });

// // addDataPoints(chart5);
// addStripLines(chart5);

// // function addDataPoints(chart5) {
// //     for (var i = 0; i < dataPointsArray5.length; i++) {
// //         dps5.push({ y: dataPointsArray5[i] });
// //     }
// //     chart5.render();
// // }

// function addStripLines(chart5) {
//     //StripLines
//     for (var i = 0; i < chart5.axisY; i = i + chart5.axisY.interval / 10) {
//         if (i % chart.axisY.interval != 0)
//             yAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     for (
//         var i = chart5.axisX;
//         i < chart5.axisX;
//         i = i + chart5.axisX.interval / 10
//     ) {
//         if (i % chart5.axisX.interval != 0)
//             xAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     chart5.render();
// }

// //chart 6 start

// var chart6 = new CanvasJS.Chart("chart6", {
//     theme: "light1",
//     // animationEnabled: true,
//     zoomEnabled: true,
//     title: {
//         text: "ECG",
//         horizontalAlign: "left",
//         fontColor: color
//     },
//     subtitles: [
//         {
//             text: "Date / Timestamp 2018/08/19 11:45:01",
//             horizontalAlign: "left"
//         }
//     ],
//     axisY: {
//         stripLines: yAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     axisX: {
//         stripLines: xAxisStripLinesArray,
//         gridColor: color,
//         lineColor: color,
//         tickThickness: 0,
//         labelFormatter: function (e) {
//             return e.value;
//         }
//     },
//     data: [
//         {
//             type: "spline",
//             color: "black",
//             dataPoints: dps6
//         }
//     ]
// });

// // addDataPoints(chart6);
// addStripLines(chart6);

// // function addDataPoints(chart6) {
// //     for (var i = 0; i < dataPointsArray6.length; i++) {
// //         dps6.push({ y: dataPointsArray6[i] });
// //     }
// //     chart6.render();
// // }

// function addStripLines(chart6) {
//     //StripLines
//     for (var i = 0; i < chart6.axisY; i = i + chart6.axisY.interval / 10) {
//         if (i % chart.axisY.interval != 0)
//             yAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     for (
//         var i = chart6.axisX;
//         i < chart6.axisX;
//         i = i + chart6.axisX.interval / 10
//     ) {
//         if (i % chart6.axisX.interval != 0)
//             xAxisStripLinesArray.push({ value: i, thickness: 0.7, color: color });
//     }
//     chart6.render();
// }