import { Data } from './Data.js';

export const Button = function(Tower) {
  const TowerData = Data.Towers[Tower];
  const TowerName = TowerData.Name;
  const Cost = TowerData.Cost;

  var newButton = document.createElement("button");
  newButton.className = "TowerButton";
  newButton.innerText = TowerName;
  newButton.id = TowerName+"_Button";
  
  document.getElementById("TowerList").appendChild(newButton);

  return newButton;

}