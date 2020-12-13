// Write your JavaScript code here!
window.addEventListener('load', function(event) {
   document.getElementById("faultyItems").style.visibility = "visible";
   //event handler for button click
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
   event.preventDefault();
      
      let pilotName = document.querySelector("input[name=pilotName]");
      //let pilotTest = Number(pilotName);
      let copilotName = document.querySelector("input[name=copilotName]");
      //let copilotTest = Number(copilotName);
      let fuelLevel = (document.querySelector("input[name=fuelLevel]").value)
     // let fuelLevelTest = Number(fuelLevel);
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      //let cargoMassTest = Number(cargoMass);
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel === "" || cargoMass === ""){
         alert("All fields required!")
         //event.preventDefault();
      } 
      else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel) ||  isNaN(cargoMass)) {
         alert("Incorrect data type!")
         //event.preventDefault();
      };
       console.log(`this is the value pilotName ${pilotName.value}`);
       console.log(`this is the value copilotName ${copilotName.value}`);
      // console.log(`this is the input value of fuelLevel ${fuelLevel}`);
      // console.log(`this is the input value of cargoMass ${cargoMass}`);
   
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} Ready`;
      
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     response.json().then(function(json) {
        //console.log(json);
        let randomNum = Math.floor(Math.random() * 6);
        let planetInfo = json[randomNum];
       const planet = document.getElementById("missionTarget")
       planet.innerHTML = `
       <h2>Mission Destination</h2>
        <ul id="planetList">
           <li>Name: ${planetInfo.name} </li>
           <li>Diameter: ${planetInfo.diameter} </li>
           <li>Star: ${planetInfo.star} </li>
           <li>Distance from Earth: ${planetInfo.distance} </li>
           <li>Number of Moons: ${planetInfo.moons} </li>
        </ul>
        <img src="${planetInfo.image}">`
   
        
     });
   });
   
   
   

   
   
   
   
});


