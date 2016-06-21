// var stable = {
// 		horses: [
// {
// 	name: 'Prancy',
// 	color: 'brown'
// },
// {
// 	name: 'Buttercup',
// 	color: 'yellow'
// },
// {
// 	name: 'Big Brown',
// 	color: 'fawn'
// 		}
// 	]
// };

// // function feed(horses){
// // 	var numHorses = horses.length;
// // 	for (var i = 0; i < numHorses; i++) {
// // 		console.log(horses[i].name + ': thanks for feedings me');
// // 	}
// // }

// // feed(stable.horses);

// function brush(horses){
// 	var numHorses = horses.length;
// 	var vaccinatedHorses = horses.map(function(horse){
// 		if(horse.color === 'brown'){
// 			horse.vaccinated = true;
// 		}
// 			return horse;
// 	});
// 	console.log('done brushing');
// }

[2, 7, 9].forEach(function(element, index) {
	console.log(element + " " + index);
})

var farm = {
	address: 'My street',
	type: 'corn'
};

for (prop in farm) {
		console.log(prop + ': ' + farm[prop]);
}
// // feed(stable.horses);
// brush(stable.horses


	//typeof is how you check