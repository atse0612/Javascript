/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function logAnimalSightings (...animals)
{
	console.log(`Animal Sightings: ${animals}`);
}

logAnimalSightings("Elephant", "Rhino", "Tiger");


/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const combinedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(`Combined Habitats: ${combinedHabitats}`);



/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
	...rhinoStatus,
	population: 520,
	status: "Vulnerable"
};
console.log(`Updated Rhino Status: ${updatedRhinoStatus}`);



/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionGeneticProfile = {
	...lionProfile,
	genetics: "Diverse"
};
console.log(`Original Lion Profile: ${lionProfile}`);
console.log(`Lion Genetic Profile:" ${lionGeneticProfile}`);

/*
 * Observations:
 * TODO: Explain here.
 // Making modifications from a composite object will have an impact with the original one. 
 By doing that, the referencing will have an impact to inherit its class. 

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const updatedEcosystemHealth = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Plentiful"}};
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Updated Ecosystem Health:", updatedEcosystemHealth);


/*
 * Observations:
 * TODO: Explain here.*/
// Making a nested property from a shallow copy will impact the original object.
// By doing that, the shallow object will reference the original one and inherit its class where the spread operator allows that.  