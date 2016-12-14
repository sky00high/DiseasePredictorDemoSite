var ageGroupValue = 0;
var genderValue = 0;
var raceValue = 0;
var ethnicityValue = 0;

var clusterCenters = [[0.432675022595,0.584603772086,0.287420421703,0.0951115834219],[4.0,0.589634626529,0.147453232493,0.0314464123861], [2.55342053822,0.590980872652,0.225106687074,0.0219183004638], [3.03001268829,0.308520675407,0.160702085434,1.0],[0.224252455037,0.0,1.95665894295,0.476376475781],[0.297091030949,1.00036753975,1.97441274714,0.317543537246],[1.79963898917,0.69681218523,1.93670053929,0.631122699113],[3.36867453365,0.408751915864,1.78243884811,0.395599431783]];
var group0Diseases = [
    {
        name: 'Mood Disorders',
        code: '657',
        cost: 9914,
        lengthOfStay: 8.83,
        p: 3.95
    },
    {
        name:'Substance-RLTD Disorder',
        code:'661',
        cost:6326,
        lengthOfStay:7.24,
        p:2.24
    },
    {
        name:'Asthma',
        code:'128',
        cost:7213,
        lengthOfStay:2.29,
        p:1.98
    },
    {
        name:'Schezophrenia Psych Disorder',
        code:'659',
        cost:19779,
        lengthOfStay:16.56,
        p:1.84
    },
    {
        name:'Eplepsy/Convulsions',
        code:'83',
        cost:9415,
        lengthOfStay:2.85,
        p:1.71
    }
];

var group1Disease = [
    {
        name:'Congestive Heart Failure',
        code:'108',
        cost:14066,
        lengthOfStay:6.24,
        p:5.27
    },
    {
        name:'Septicemia',
        code:'2',
        cost:22947,
        lengthOfStay:9.46,
        p:6.93
    },
    {
        name:'Dysrhythmia',
        code:'106',
        cost:13132,
        lengthOfStay:4.46,
        p:3.87
    },
    {
        name:'Pneumonia',
        code:'122',
        cost:12496,
        lengthOfStay:6.6,
        p:3.12
    },
    {
        name:'Coronary Ahteroscler',
        code:'101',
        cost:19713,
        lengthOfStay:3.97,
        p:2.31
    }
];

var group2Disease = [
    {
        name:'Osteoarthritis',
        code:'203',
        cost:18378,
        lengthOfStay:3.17,
        p:3.23
    },
    {
        name:'Mood Disorders',
        code:'657',
        cost:1159,
        lengthOfStay:10.25,
        p:2.97
    },
    {
        name:'Alcohol-related Disorder',
        code:'660',
        cost:7202,
        lengthOfStay:5.97,
        p:2.78
    },
    {
        name:'Chest Pain',
        code:'102',
        cost:5879,
        lengthOfStay:1.96,
        p:2.64
    },
    {
        name:'Coronary Atheroscler',
        code:'101',
        cost:18328,
        lengthOfStay:3.33,
        p:2.19
    }
];



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
    //printCurrentValue();
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
        for(var j = 0; j < 4; j++){
            dist2 += Math.pow(this_data[j] - clusterCenter[j], 2);
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
    return min_index;
}
function calculateGroupIndexWithCustomData(data){
    var min_dist2;
    var min_index = 0;
    var this_data = data;
    for(var i = 0; i < clusterCenters.length; i++){
        clusterCenter = clusterCenters[i];

        var dist2 = 0.0;
        for(var j = 0; j < 4; j++){
            dist2 += Math.pow(this_data[j] - clusterCenter[j], 2);
        }

        if(i == 0){
            min_dist2 = dist2;
        } else if(dist2 < min_dist2){
            min_dist2 = dist2;
            min_index = i;
        }

    }
    //console.log('min dist2 is ' + min_dist2);
    //console.log('this data belongs to group ' + min_index);
    return min_index;
}

function test(){
    var testDir = {};
    for(var i = 0 ;i < 5; i++){
        for(var j = 0 ;j < 4; j++){
            for(var z = 0 ;z < 2; z++){
                var data = [i,1, j,z];
                var gi = calculateGroupIndexWithCustomData(data);
                if(testDir[gi] == null) testDir[gi] = 0;
                else testDir[gi] += 1;
                
            }
        }

    }
    console.log(testDir);
        
}