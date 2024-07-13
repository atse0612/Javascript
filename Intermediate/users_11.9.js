const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const newUserMembers = users.map(function(user){
	return {fullName: `${users.firstName} ${users.LastName}`, //first and last name given in the return
	membershipStatus: user.points > 100 ? "Premium": "Standard"};	//will it be either premium or standard
});

// Getting the result after the map function
console.log(newUserMembers);
