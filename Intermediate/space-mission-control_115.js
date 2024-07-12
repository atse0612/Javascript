// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
const oneTimeTasks = []; 
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	oneTimeTasks.push({function: func, delay: delay});
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for (const oneTimeTask of oneTimeTasks){
		setTimeout(oneTimeTask.function, oneTimeTask.delay);
	}

}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	console.log("Detecting conditions...."); //Identify the conditions that are out there
	// Condition metrics
	monitoringTaskId = setInterval(
		function ()
		{
			console.log("Examining the space station...");

			/* Condition checks. */
			const oxygenLevel = Math.random() * 100; // Oxygen level
			const powerStatus = Math.random() > 0.1 ? "Stable" : "Critical"; // Status of power
			const communicationCheck = Math.random() > 0.05 ? "All systems go" : "Communication error"; // communication system check
			console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`);
		},
		2000
	); // Adjust this interval as needed.

}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskId);
	console.log("Monitoring has stopped. Give an update.")
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	let remainder = duration; //another variable to store duration
	console.log("Countdown: ${remainingTime} seconds remaining"); //printing in a statement

	//Countdown Timer ID function
	const countdownID = setInterval(
		function(){
			remainder--;
			console.log("T-minus ${remainder} seconds");

			if (remainder <= 0){
				clearInterval();
				console.log("Liftoff! The rocket has successfully launched into space!");
			}
		}
	)

}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	startMonitoring(); // Identify the conditions
	addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
	addOneTimeTask(stopMonitoring, 10000); // Stops monitoring before the countdown.
	addOneTimeTask(function () {startCountdown(10);}, 15000); // Countdown started

	runOneTimeTasks(); // Run all the tasks at once if they are one-time

}

scheduleMission(); // Starts the mission.
