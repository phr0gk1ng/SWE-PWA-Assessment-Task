const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(".database/data_source.db");

let myString = "[\n";
db.all("SELECT * FROM blocklist", function (err, rows) {
  let myCounter = 0;
  rows.forEach(function (row) {
    // for debugging
    // console.log(typeof row.ID + ": " + typeof row.Item_Name);
    myString =
      myString +
      '{\n"ID":"' + 
      row.ID +
      '",\n"Item_Name":"' +
      row.Item_Name +
      '",\n"Stackability":"' +
      row.Stackability +
      '",\n"Survival_Obtainable":"' +
      row.Survival_Obtainable +
      '",\n"Peaceful_Obtainable":"' +
      row.Peaceful_Obtainable +
      '",\n"Hunger":"' +
      row.Hunger +
      '",\n"Saturation":"' +
      row.Saturation +
      '",\n"Effect_when_Eaten":"' +
      row.Effect_when_eaten +
      '",\n"Is_Weapon":"' +
      row.Is_Weapon +
      '",\n"Attack_Speed":"' +
      row.Attack_Speed +
      '",\n"Attack_Damage":"' +
      row.Attack_Damage +
      '",\n"Damage_Per_Second":"' +
      row.Damage_Per_Second +
      '",\n"Breaking_Speed":"' +
      row.Breaking_Speed +
      '",\n"Cooldown_in_seconds)":"' +
      row.Cooldown_in_seconds +
      '",\n"Smeltable":"' +
      row.Smeltable +
      '",\n"Fuel_Duration":"' +
      row.Fuel_Duration +
      '",\n"Renewable":"' +
      row.Renewable;
    myCounter++;
    // console.log(myString)
    if (myCounter == rows.length) {
      myString = myString + '"\n}\n';
    } else {
      myString = myString + '"\n},\n';
    }
  });

  // console.log(myString);
  var fs = require("fs");
  fs.writeFile("public/frontEndData.json", myString + "]", function (err) {
    if (err) {
      console.log(err);
    }
  });
});

// Insert additional backend js above the express server configuration

const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(5000, () =>
  console.log(
    "Server is running on Port 5000, visit http://localhost:5000/ or http://127.0.0.1:5000 to access your website"
  )
);
