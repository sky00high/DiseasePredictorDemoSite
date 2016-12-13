$(document).ready(function(){
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["disease1", "disease2", "disease3", "disease4", "disease5"],
            datasets: [{
                label: 'Diseases that NY state inpatient with similar charasristic as you have',
                data: [0.5, 0.3, 0.2, 0.05, 0.05],
                borderWidth: 1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });



    var data = {
        datasets: [
                {
                    label: 'disease1',
                    data: [
                        {
                            x: 10000,
                            y: 50,
                            r: 10
                        }
                    ],
                    backgroundColor:"#FF6384",
                    hoverBackgroundColor: "#FF6384",
                },
                            {
                    label: 'sisease2',
                    data: [
                        {
                            x: 20000,
                            y: 60,
                            r: 10
                        }
                    ],
                    backgroundColor:"#FF6384",
                    hoverBackgroundColor: "#FF6384",
                },
                            {
                    label: 'disease3',
                    data: [
                        {
                            x: 30000,
                            y: 40,
                            r: 10
                        }
                    ],
                    backgroundColor:"#FF6384",
                    hoverBackgroundColor: "#FF6384",
                },
                            {
                    label: 'disease4',
                    data: [
                        {
                            x: 50000,
                            y: 10,
                            r: 10
                        }
                    ],
                    backgroundColor:"#FF6384",
                    hoverBackgroundColor: "#FF6384",
                },
                            {
                    label: 'diease5',
                    data: [
                        {
                            x: 70000,
                            y: 80,
                            r: 10
                        }
                    ],
                    backgroundColor:"#FF6384",
                    hoverBackgroundColor: "#FF6384",
                },
            ]
    };
    options = {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'average expense'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'average hospital duration'
          }
        }]
      }     
    };
    var ctx2 = document.getElementById("myChart2");
    var myBubbleChart = new Chart(ctx2,{
        type: 'bubble',
        data: data,
        options:options
    });
});