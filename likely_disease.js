var ageGroupValue = 0;
var genderValue = 0;
var raceValue = 0;
var ethnicityValue = 0;

var clusterCenters = [[0.432675022595,0.584603772086,0.287420421703,0.0951115834219],[4.0,0.589634626529,0.147453232493,0.0314464123861], [2.55342053822,0.590980872652,0.225106687074,0.0219183004638], [3.03001268829,0.308520675407,0.160702085434,1.0],[0.224252455037,0.0,1.95665894295,0.476376475781],[0.297091030949,1.00036753975,1.97441274714,0.317543537246],[1.79963898917,0.69681218523,1.93670053929,0.631122699113],[3.36867453365,0.408751915864,1.78243884811,0.395599431783]];

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



function setAgeGroup(id, value){

    ageGroupValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    printCurrentValue();
}

function setGender(id, value){

    genderValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    printCurrentValue();
}
function setRace(id, value){

    raceValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    printCurrentValue();
}
function setEthnicity(id, value){

    ethnicityValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    printCurrentValue();
}

function printCurrentValue(){
    console.log(ageGroupValue);
    console.log(genderValue);
    console.log(raceValue);
    console.log(ethnicityValue);
}

function replotGraph(){
    console.log('lalala');
    var groupIndex = calculateGroupIndex();
}

function calculateGroupIndex(){
    var min_dist2;
    var min_index = 0;
    var this_data = [ageGroupValue, genderValue, raceValue, ethnicityValue];
    for(var i = 0; i < clusterCenters.length; i++){
        clusterCenter = clusterCenters[i];

        var dist2 = 0.0;
        for(var i = 0; i < 4; i++){
            dist2 += Math.sqrt(this_data[i] - clusterCenter[i]);
        }

        if(i == 0){
            min_dist2 = dist2;
        } else if(dist2 < min_dist2){
            min_dist2 = dist2;
            min_index = i;
        }

    }
    console.log('min dist2 is ' + min_dist2);
    console.log('this data belongs to group ' + min_index);
    return i;
}