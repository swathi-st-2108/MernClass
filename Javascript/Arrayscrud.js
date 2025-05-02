let Travelsname= new Array("jolly","sky","wonder");

let Adding=()=>{
    let newvalue=document.getElementById("Travels").value;
    Travelsname.push(newvalue);
    alert(newvalue +" added to the array.");
    Printall()
}

var Printall=()=>{
    let temp=""

    Travelsname.map((getting)=>{
        temp+="<tr><td><ul><li>"+getting+"</li></ul></td></tr>";
})
    document.getElementById("List").innerHTML=<table><thead bgcolor='red'><tr><th>TravelsList</th></tr></thead><tbody bgcolor='pink'></tbody></table>;
}