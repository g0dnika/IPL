var counter = 1;

setInterval(function () {

document.getElementById('radio' + counter).checked = true; counter++; if (counter> 4) { counter = 1;}

}, 3000);

// slider code ends

// team and player data 
var playerData = [

{

"id": 0, 
"playerName": "Hardik Pandya",
 "from": "GT", 
 "price": "12.50 Cr",
  "isplaying": true,
   "description": "All-rounder",
    "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot.png",
     "playerTeam": "Gujarat Titan"
},
{
"id": 1,
 "playerName": "Mohammad Shami", 
 "from": "GT", 
 "price": "10.00 Cr",
  "isplaying": true,
   "description": "Bowler",
    "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot.png",
     "player Team": "Gujarat Titan"
},
{
    "id": 2,
 "playerName": "shubman gill", 
 "from": "GT", 
 "price": "10.00 Cr",
  "isplaying": false,
   "description": "Bowler",
    "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot.png",
     "player Team": "Gujarat Titan"
},
{
"id": 3,
"playerName": "Jayant Yadav",
"from": "GT",
"price": "2.00 cr",
"isplaying":true,
"description": "All-rounder",
"playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png",
"player team":"Gujarat Titan"
},
{
"id": 4,

"playertiame": "Rashid Khan",

"from": "GT",

"price": "1.30 cr",

"isPlaying": true,

"description": "Bowler",

"playerImg": "https://assets.ipltze.com/ipl/IPLHeadshot2022/2885.png",

"playerTeam":"Gujarat Titan"
},
{

"id": 5,

"playerName": "Virat Kohli",

"from": "RCB",

"price": "13.00 Cr",

"isplaying": true,

"description": "Batsman",

"playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",

"player Team": "Royal Challengers Bangalore"
},
{

"id": 6,

"playertiane": "Glenn Maxwell",

"from": "RCB",

"price": "10.25 Cr",

"isPlaying": true,

"description": "All-rounder",

"playerIng": "https://assets.ipltze.com/ipl/IPLHeadshot2022/282.png",

 "playerTeam": "Royal Challengers Bangalore"
},
{
"id": 7,

"playerName": "Shahbaz Ahmed",

"from": "RCB",

"price": "1.00cr", "isplaying": true,

"description": "Batsman",

"playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png", 
 
"player Team": "Royal challengers Bangalore"
},
{
"id": 8,
"playerName": "Mohhamad Siraj",
"from": "RCB",
"price": "5.0cr", "isPlaying": true,
"description": "Batsman",
"playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot 2022/3840.png",
"playerTeam": "Royal Challengers Bangalore"
},
{
    "id": 9,
    "playerName": "Harshal patel",
    "from": "RCB",
    "price": "5.0cr", "isPlaying": true,
    "description": "Bowler",
    "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot 2022/3840.png",
    "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 10, 
"playerName": "Rohit sharma",
 "from": "MI",
  "price": "19 cr", 
  "isplaying": true,
   "description": "Batsman", 
   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot 2022/2975.png", 
   "playerTeam": "Mumbai Indians"
},
{
"id": 11, 
"playerName": "Ishan Kishan",
 "from": "MI",
  "price": "17.50 cr", 
  "isplaying": true,
   "description": "Batsman", 
   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot 2022/2975.png", 
   "playerTeam": "Mumbai Indians"
},
{
    "id": 12,
     "playerName": "Jasprit Bumrah",
      "from": "MI",
       "price": "7.50 Cr", 
       "isplaying": true,
        "description": "Bowler", 
        "playerImg": "https://assets.ipltze.com/ipl/ IPLHeadshot2022/1124.png",
         "player Team": "Mumbai Indians" 
},
{
"id": 13, 
"playerName": "Mayank Markande",
 "from": "MI",
  "price": "1.50 cr",
   "isplaying": true, 
   "description": "Batsman", 
   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/4951.png", 
   "playerTeam": "Mumbal Indians"
},
{
    "id": 14, 
    "playerName": "suryakumar yadav",
     "from": "MI",
      "price": "15 cr",
       "isplaying": true, 
       "description": "Batsman", 
       "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/4951.png", 
       "playerTeam": "Mumbal Indians"
    },
    {
        "id": 15, 
        "playerName": "Deepak chahar",
         "from": "CSK",
          "price": "15 cr",
           "isPlaying": true, 
           "description": "Bowler", 
           "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/5431.png",
            "playerTeam": "Chennai Super Kings"},
            {
                "id": 16, 
                "playerName": "Shivam Dube",
                 "from": "CSK",
                  "price": "07.50 cr",
                   "isPlaying": true, 
                   "description": "Bowler", 
                   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/5431.png",
                    "playerTeam": "Chennai Super Kings"
            },
            {
                "id": 17, 
                "playerName": "asif ali",
                 "from": "CSK",
                  "price": "4.0 cr",
                   "isPlaying": true, 
                   "description": "Bowler", 
                   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/5431.png",
                    "playerTeam": "Chennai Super Kings"},
                    {
                        "id": 18, 
                        "playerName": "MS Dhoni",
                         "from": "CSK",
                          "price": "17.50 cr",
                           "isPlaying": true, 
                           "description": "Batsman", 
                           "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/5431.png",
                            "playerTeam": "Chennai Super Kings"},
{
"id": 19, 
"playerName": "ruturaj gaikwad",
 "from": "CSK",
  "price": "07.50 cr",
   "isPlaying": true, 
   "description": "Batsman", 
   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/5431.png",
    "playerTeam": "Chennai Super Kings"
},
{
    "id": 20, 
    "playerName": "Rishabh Pant", 
    "from": "DC",
     "isPlaying": true,
     "description": "Batsman",
      "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/2972.png", 
      "playerTeam": "Delhi Capitals"
},
{
"id": 21,
 "playerName": "Mandeep Singh",
  "from": "DC",
   "price": "1.50 cг",
    "isPlaying": true, 
    "description": "Batsman",
     "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/72.png",
      "playerTeam": "Delhi Capitals"
},
{

"id": 22,
 "playerName": "talit Yadav",
  "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/6879.png",
"from": "DC", 
"price": "1.50 Cr",
"isPlaying": true,
"description": "Bowler",
"playerTeam": "Delhi Capitals"
},
{
"id": 23, 
"playerName": "Prithvi shaw", 
"playerImg": "https://assets.iplt2o.com/ipl/ IPLHeadshot2022/3764.png",
"from": "DC", 
"price": "18.50 cr", 
"isPlaying": true,
 "description": "Batsman",
   "playerTeam": "Delhi Capitals"
},
{
    "id": 24, 
    "playerName": "jos buttler", 
    "playerImg": "https://assets.iplt2o.com/ipl/ IPLHeadshot2022/3764.png",
    "from": "DC", 
    "price": "18.50 cr", 
    "isPlaying": true,
     "description": "Batsman",
       "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 25,
        "playerName": "Riyan Parag", 
        "from": "RR", 
        "playerImg": "https://assets.ipltzo.com/ipl/ IPLHeadshot2022/4445.png",
        "price": "03.50 cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerTeam": "Rajasthan Royals"
        },
        {
            "id": 26,
            "playerName": "navdeep saini", 
            "from": "RR", 
            "playerImg": "https://assets.ipltzo.com/ipl/ IPLHeadshot2022/4445.png",
            "price": "03.50 cr",
            "isPlaying": true,
            "description": "Bowler",
            "playerTeam": "Rajasthan Royals"
            },
{
"id": 27,
"playerName": "sanju samson", 
"from": "RR", 
"playerImg": "https://assets.ipltzo.com/ipl/ IPLHeadshot2022/4445.png",
"price": "14 cr",
"isPlaying": true,
"description": "Batsman",
"playerTeam": "Rajasthan Royals"
},
{
"id": 28,
 "playerName": "Davdutt Paddikal",
  "from": "RR",
   "price": "07.50 сг",
    "isPlaying": true, 
    "description": "Bowler", 
    "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot 2022/5438.png",
 "playerTeam": "Rajasthan Rovals"
},
{
 "id": 29,
"playerName": "shreyas Iyer",
 "from": "KKR",
"price": "10.50 сг",
"isPlaying": true,
"description": "Batsman",
"playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot 2022/1563.png",
"playerTeam": "Kolkata Knight Riders",
},
{
    "id": 30,
    "playerName": "rahmanullah gurbaz",

"from": "KKR",

"price": "18.50 Cr",

"isPlaying": false,

"description": "Batsman", 
"playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/20580.png",
 "playerTeam": "Kolkata Knight Riders" 
},
{
"id": 31,
 "playerName": "Pat Cummins",
  "from": "KKR", 
  "price": "10.50 сг",
"isPlaying": true,
  "description": "Bowler", 
  "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/488.png",
   "playerTeam": "Kolkata Knight Riders"
},
{
"id": 32, 
"playerName": "Ashok Sharma",
 "from": "KKR", 
 "price": "18 Cr", 
 "isPlaying": true,
  "description": "Batsman",
   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/20584.png",
    "playerTeam": "Kolkata Knight Riders"
},
{
"id": 33,
 "playerName": "Rinku Singh",
  "from": "KKR", 
  "price": "10.50 cr",
   "isPlaying": true,
"description": "All-rounder",
 "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
 "playerTeam": "Kolkata Knight Riders"
},
{
"id": 34,
"playerName": "Rahul Tripathi",
"from": "SH",
"price": "10.50 Cr",
"isPlaying": true,
"description": "All-rounder",
 "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
 "playerTeam": "Sunrises Hyderabad"
},
{
"id": 35,
"playerName": "Anukul Sharma",
"from": "SH",
"price": "10.50 cr",
"isplaying": true,
"description": "Aatseaa",
"playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
"playerTeam": "Sunrises Hyderabad"
},
{
"id": 36,
 "playerName": "Abdul Samad",
  "from": "SH",
   "price": "5.50 Cr",
    "isPlaying": true, 
    "description": "Bowler",
     "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/19352.png", 
     "playerTeam": "Sunrises Hyderabad"
},
{
"id": 37,
 "playerName": "Nicolas Pooran", 
 "from": "SH",
  "price": "3.50 cr", 
  "isPlaying": false,
   "description": "All-rounder", 
   "playerImg": "https://assets.iplt20.com/ipl/ IPLHeadshot2022/1703.png",
    "playerTeam": "Sunrises Hyderabad"
},
];
    var teamData=[
{

"id": 0,
 "teamFullName": "Mumbai Indians",
  "sName": "MI", 
  "fullSname":"MI (Mumbai Indians)", 
  "teamIcon": "https://bcciplayerimages.s3.ap-south-1. amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
   "WonCount": 5,
},
{
    "id":1,
"teamFullName": "Chennai Super Kings",
 "sName": "CSK", 
 "fullSname":"CSK (Chennai Super King)",
 "teamIcon": "https://bcciplayerimages.s3.ap-south-1. amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig. png",
  "WonCount": 4,
},
{
"id": 2,
"teamFullName": "Royal Challengers Bangalore",
"sName": "RCB",
"fullSname":"RCB (Royal challengers Bangalore)",
"teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig. png",
 "WonCount": 0,
},
{
"id": 3, 
"teamFullName": "Kolkata Knight Riders", 
"sName": "KKR",
 "fullSname":"KKR (Kolkata Knight Riders)", 
 "teamIcon": "https://bcciplayerimages.s3.ap-south-1. amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig. png", 
 "WonCount": 2,
},
{
    "id": 4,
"teamFullName": "Delhi Capitals",
 "sName": "DC",
 "fullSname": "DC (Delhi Capitals)",
"teamIcon": "https://bcciplayerimages.s3.ap-south-1. amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
"WonCount": 2,
},
{
"id": 5,

"teamFullName": "Gujarat Titan",

"sName": "GT",
 "fullSname":"GT (Gujarat Tistan)",

"teamIcon": "https://bcciplayerimages.s3.ap-south-1. amazonaws.com/ipl/61/Logos/Roundbig/Grroundbig.png", 
"WonCount": 2,
},
{
"id": 6, 
"teamFullName": "Rajasthan Royals", 
"sName": "RR", 
"fullSname": "RR (Rajasthan Royals)",
 "teamIcon": "https://bcciplayerimages.s3.ap-south-1. amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
  "WonCount": 1,
},
{
    "id": 7,
"teamFullName": "Sunrises Hyderabad",
 "sName": "SH",
"fullSname":"SH (Sunrises Hyderabad)",
 "teamIcon": "https://bcciplayerimages.s3.ap-south-1. amazonaws.com/ipl/SRH/Logos/Roundtrig/SRHroundbig. png",
  "WonCount": 1,
 },
];

var addteamclicked=()=>{
window.open("./addTeam.html","_self")
 }
var addPlayerClicked=()=>{
window.open("./addPlayer.html","_self")
 }
let detailofTeam = [];

let detailofPlayer = [];

var teamGrid = document.getElementById("container_teams")

if(localStorage.getItem("teamArray") === null) localStorage.setItem("teamArray", JSON.stringify (teamData));

if(localstorage.getItem("playerArray") === null) localstorage.setItem("playerArray", JSON.stringify (playerData));

detailofTeam = JSON.parse(localstorage.getItem ("teamArray"));

detailofPlayer = JSON.parse(localStorage.getItem ("playerArray"));

// search bar code goes here

var suggestArray=[];

for(var i=0;i<detailofTeam.length; i++)
{ 
    suggestArray.push(detailofTeam[i].sName)
}
let searchBar = document.querySelector(".search-input");

let inputBox = searchBar.querySelector("input");

let suggBox = searchBar.querySelector(".autocom-box");

let icon= searchBar.querySelector(".icon");

inputBox.onkeyup = (e)=>{

if(e.keyCode=13){
     icon.click()
     }
let userData = e.target.value;
let emptyArray = [];
if(userData) {
emptyArray= suggestArray.filter((data)=>{

return data.toLocaleLowerCase().startsWith (userData.toLocaleLowerCase());
 });

emptyArray= emptyArray.map((data)=>{

return data = '<li>${data}</li>';
});

searchBar.classList.add("active");
 showSuggestions(emptyArray);

let allList = suggBox.querySelectorAll("li");

for (let i = 0; i < allList.length; i++) {

allList[i].setAttribute("onclick", "currentLi (this)");

}

}else{ searchBar.classList.remove("active");
}
} 
    function currentli(element){
    
    let selectData = element.textContent;
    
    inputBox.value = selectData;
    
    icon.onclick = ()=>{
    
    window.open('./teams.html?name=${element.textContent} ',"_self")
    } 
    searchBar.classList.remove("active");
}
    function showSuggestions(list){
    
    let listData;
    
    if(!list.length) {
    
    userValue = inputBox.value;
    
    
    listData = '<li>${userValue}</li>';}
    else{ listData = list.join(''); }
    
    suggBox.innerHTML = listData;
    
    }
    
    // search bar code ends here
    
    // grid cards for teams goes here
    
    var teamMainBox=document.getElementById("container_teams")
     for(var i=0;i<detailofTeam.length; i++) {
     teamwinBox.innerHTML +=
    <div onclick="makethisinclick('$(i)')" class="minibox">
    
    <img src="${detailofTeam[i].teamIcon)" class="mainimage" alt=""/>
    
    <div class="dataodcard">
    
    <p class="text1"> ${detailofTeam[i].teamFullName} </p>
    
    <p class="text2"> Won Count: ${detailofTeam[i].WonCount} </p>
    
    </div>
    
    </div>
    
    }
    
    function makethisinclick(res){
    
    var clickedCard=detailofTeam[res].sName
    
    window.open("./teams.html?name=${clickedCard}","_self")
    
    }