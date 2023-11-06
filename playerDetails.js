let urlData = location.href;
let newurl = new URL(urlData);
let playerurl = newUrl.searchParams.get("name"); console.log(playerurl);
console.log(playerUrl);
// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
 playersDetails = JSON.parse(localstorage.getItem("playerArray"));

let playerData = document.getElementById("player-details-con") 
for (var i = 0; i < playersDetails.length; i++) { 
    if (playersDetails[i].playerName == playerurl) {
    var playingorN = ""; 
    if (playersDetails[i].isPlaying == true) {
         playingorN = "Playing";
       
} else { 
    playingorN = "On Bench";
 }

playerData.innerHTML += `

<div id="player_detail-img">
<img src="${playersDetails[i].playerImg}" alt="">
</div>
<div id="new player det">
<table>
<tr>
<td>Player Name </td>
<td>${playersDetails[i].playerName} </td>
</tr>
<table>
<tr>
<td> Team Name </td>

<td> ${playersDetails[i].playerTeam} </td>

</tr>

<table>
<td> Team Code </td>

<td>${playersDetails[i].from} </td>

</tr>
<table>
<tr>

<td> Worth </td>

<td>${playersDetails[i].price} </td>

</tr>

<table>

<tr>

<td> Is playing </td>

<td> ${playingOrN} </td>

</tr>

</table>

</div>
 ` ;
}
}