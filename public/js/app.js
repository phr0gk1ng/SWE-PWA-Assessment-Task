let result = "";
fetch("./frontEndData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  data.forEach(({ ID, Item_Name, Stackability, Survival_Obtainable, Peaceful_Obtainable, Hunger, Saturation, Effect_When_Eaten, Is_Weapon, Attack_Speed, Attack_Damage, Damage_Per_Second, Breaking_Speed, Cooldown_in_seconds, Smeltable, Fuel_Duration, Renewable} = rows) => {
    result += `
        <div class="card">
        
        <h1 class="card-name">${Item_Name}</h1>
        <p class="card-about">${Stackability}</p>
        
        </div>
        `;
  });
  document.querySelector(".container").innerHTML = result;
}

if ("serviceworker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceworker
        .register("js/serviceworker.js")
        .then((res) => console.log("service worker registered"))
        .catch((err) => console.log("service worker not registered", err));
    });
  }

  // <img class="card-image" src="${image}" alt="Product image for the ${Item_Name} VSCode extension."/>
  // <a class="card-link" href="${hyperlink}"><button class="btn">Read More</button></a>