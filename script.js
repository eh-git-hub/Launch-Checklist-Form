// Write your JavaScript code here!
window.addEventListener('load', function() {
   //event handler for button click
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let fuelLevelConvert = parseInt(fuelLevel, 10);
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      let cargoMassConvert = parseInt(cargoMass, 10);

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel === "" || cargoMass === ""){
         alert("All fields required!")
         event.preventDefault();
      } 
      //TODO: Fix validation of datatype
      else if (pilotName.value !== typeof "string" || copilotName.value !== typeof "string" || fuelLevelConvert !== typeof "number" || cargoMassConvert !== typeof "number") {
         alert("Incorrect data type!")
         event.preventDefault();
      };

      console.log(`this is the value pilotName ${pilotName.value}`);
      console.log(`this is the typeof pilotName ${typeof pilotName.value}`);
      console.log(`this is the value copilotName ${copilotName.value}`);
      console.log(`this is the typeof copilotName ${typeof copilotName.value}`);

      console.log("\n");

      console.log(`this is the value of fuelLevelConvert ${fuelLevelConvert}`);
      console.log(`this is the typeof fuelLevelConvert ${typeof fuelLevelConvert}`);
      console.log(`this is the value of cargoMassConvert ${cargoMassConvert}`)
      console.log(`this is the typeof cargoMassConvert ${typeof cargoMassConvert}`)

      console.log("\n");

      console.log(`this is the input value of fuelLevel ${fuelLevel}`);
      console.log(`this is the typeof fuelLevel ${typeof fuelLevel}`);
      console.log(`this is the input value of cargoMass ${cargoMass}`);
      console.log(`this is the typeof cargoMass ${typeof cargoMass}`);
      
   });

});

//    let form = document.querySelector("form");
//    form.addEventListener("submit", function(event){
//       let pilotName = document.querySelector("input[name=pilotName]");
//       let copilotName = document.querySelector("input[name=copilotName]");
//       let fuelLevel = document.querySelector("input[name=fuelLevel]");
//       let cargoMass = document.querySelector("input[name=cargoMass]");
//       if (pilotName.value === "" || pilotName.value !== typeof "string"){
//          alert("All fields required!")
//          event.preventDefault();
//       };
//       if (copilotName.value === "" || copilotName.value !== typeof "string"){
//          alert("All fields required!")
//          event.preventDefault();
//       };
//       if (fuelLevel.value === "" || fuelLevel.value !== typeof "number"){
//          alert("All fields required!")
//          event.preventDefault();
//       };
//       if (cargoMass.value === "" || cargoMass.value !== typeof "number"){
//          alert("All fields required!")
//          event.preventDefault();
//       }
//    });
// });

                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
