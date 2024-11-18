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
        <img class="card-image" src="${image}" alt="Product image for the ${name} VSCode extension."/>
        <h1 class="card-name">${name}</h1>
        <p class="card-about">${about}</p>
        <a class="card-link" href="${hyperlink}"><button class="btn">Read More</button></a>
        </div>
        `;
  });
  document.querySelector(".container").innerHTML = result;
}