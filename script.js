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

      let fuelLevel = (document.querySelector("input[name=fuelLevel]"))
      let fuelLevelTest = Number(fuelLevel.value);

      let cargoMass = (document.querySelector("input[name=cargoMass]"));
      let cargoMassTest = Number(cargoMass.value);

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields required!")
         //event.preventDefault();
      } 
      else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevelTest) ||  isNaN(cargoMassTest)) {
         alert("Incorrect data type!")
         //event.preventDefault();
      }

      // console.log(`this is the value pilotName ${pilotName.value}`);
      // console.log(`this is the value copilotName ${copilotName.value}`);
      // console.log(`this is the input value of fuelLevel ${fuelLevel.value}`);
      // console.log(`this is the input typeof of fuelLevelTest ${typeof fuelLevelTest}`);
      // console.log(`this is the input value of cargoMass ${cargoMass.value}`);
      // console.log(`this is the input typeof of cargoMassTest ${typeof cargoMassTest}`);
   
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} Ready`;

      if (fuelLevel.value < 10000 && cargoMass.value > 10000){
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey!";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off!";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
         document.getElementById("launchStatus").style.color = '#6441A4';
         document.getElementById("launchStatus").style.textShadow = '5px 5px 10px red';
      };

      // if (cargoMass.value > 10000){
      //    document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
      //    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
      //    document.getElementById("launchStatus").style.color = '#6441A4';
      //    document.getElementById("launchStatus").style.textShadow = '5px 5px 10px red';
      // };

      if (fuelLevel.value > 10000 && cargoMass.value < 10000){
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for takeoff!";
         document.getElementById("launchStatus").style.color = '#1B4D3E';
         document.getElementById("launchStatus").style.textShadow = '5px 5px 10px green';
      };
      
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


