const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Location of Water
const firstWaterCreature = mythicalCreatures.find(function(creature){
	return creature.type === "water"; //return water creatures
});
console.log(firstWaterCreature.name); //printing the result of the water creature

// Griffin index
const griffinIndex = mythicalCreatures.findIndex(function(creature){
	return creature.name === "Griffin";
});
console.log(griffinIndex);//printing the result of griffinIndex

//Enchanted Forest Creature
const enchantedForestCreature = mythicalCreatures.find(function(creature){
	return creature.lastSeen === "Enchanted Forest" 
});
console.log(enchantedForestCreature.name); //printing the result of the last seen location

