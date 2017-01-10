//Shells and shots
c37$AP = {name: "37mm M3", shellType: "AP", b_factor: 6410, muzzle_vel: 792, mass: 0.87, filler: 0,
pen100: 80, pen200: 75, pen300: 70, pen400: 67, pen500: 63, pen600: 59, pen700: 55, pen800: 52, pen900: 48, pen1000: 45,
pen1100: 42, pen1200: 40, pen1300: 37, pen1400: 35, pen1500: 33, pen1600: 31, pen1700: 29, pen1800: 27, pen1900: 25, pen2000: 23};

c57$AP = {name: "57mm 6P", shellType: "AP", b_factor: 4711, muzzle_vel: 899, mass: 2.00, filler: 0,
pen100: 141, pen200: 136, pen300: 129, pen400: 123, pen500: 118, pen600: 112, pen700: 106, pen800: 101, pen900: 97,
pen1000: 93, pen1100: 89, pen1200: 84, pen1300: 80, pen1400: 76, pen1500: 73, pen1600: 70, pen1700: 67, pen1800: 63, pen1900: 60,
pen2000: 58};

c76$APCBC = {name: "76mm M1", shellType: "APCBC", b_factor: 2321, muzzle_vel: 792, mass: 7.00, filler: 65,
pen100: 127, pen200: 125, pen300: 122, pen400: 119, pen500: 116, pen600: 114, pen700: 111, pen800: 109, pen900: 106,
pen1000: 104, pen1100: 102, pen1200: 99, pen1300: 97, pen1400: 95, pen1500: 93, pen1600: 91, pen1700: 88, pen1800: 86, pen1900: 84,
pen2000: 82};

c76$HVAP = {name: "76mm M1", shellType: "HVAP/APCR", b_factor: 3192, muzzle_vel: 1032, mass: 3.4, core: 1.8,
pen100: 182, pen200: 178, pen300: 173, pen400: 170, pen500: 166, pen600: 162, pen700: 158, pen800: 154, pen900: 150,
pen1000: 146, pen1100: 142, pen1200: 139, pen1300: 136, pen1400: 132, pen1500: 129, pen1600: 126, pen1700: 122, pen1800: 119, pen1900: 116,
pen2000: 113};

//Targets
t$1 = {
	
	name: "Light tank",
	//Chassi
	upperFront_s: 2.5 * 0.8,
	upperFront_t: 30,
	lowerFront_s: 2.5 * 0.5,
	lowerFront_t: 25,
	side_s: 4.5 * 1.6,
	side_t: 20,
	upperRear_s: 2.5 * 0.8,
	upperRear_t: 20,
	lowerRear_s: 2.5 * 0.5,
	lowerRear_t: 15,
	
	//Turret
	turretFront_s: 2.3 * 0.9,
	turretFront_t: 30,
	turretSide_s: 2.8 * 1.6,
	turretSide_t: 20,
	turretRear_s: 2.2 * 0.9,
	turretRear_t: 20,
}

t$2 = {
	
	name: "Medium tank",
	//Chassi
	upperFront_s: 2.5 * 0.8,
	upperFront_t: 50,
	lowerFront_s: 2.5 * 0.5,
	lowerFront_t: 35,
	side_s: 4.5 * 1.6,
	side_t: 30,
	upperRear_s: 2.5 * 0.8,
	upperRear_t: 25,
	lowerRear_s: 2.5 * 0.5,
	lowerRear_t: 20,
	
	//Turret
	turretFront_s: 2.3 * 0.9,
	turretFront_t: 55,
	turretSide_s: 2.8 * 1.6,
	turretSide_t: 35,
	turretRear_s: 2.2 * 0.9,
	turretRear_t: 20,
}

t$3 = {
	
	name: "Medium tank no. 2",
	//Chassi
	upperFront_s: 2.8 * 1.0,
	upperFront_t: 80,
	lowerFront_s: 2.8 * 0.7,
	lowerFront_t: 50,
	side_s: 4.8 * 1.8,
	side_t: 50,
	upperRear_s: 2.8 * 1.0,
	upperRear_t: 30,
	lowerRear_s: 2.8 * 0.7,
	lowerRear_t: 25,
	
	//Turret
	turretFront_s: 2.3 * 0.9,
	turretFront_t: 70,
	turretSide_s: 2.8 * 1.6,
	turretSide_t: 45,
	turretRear_s: 2.2 * 0.9,
	turretRear_t: 30,
}

t$4 = {
	
	name: "Heavy tank",
	//Chassi
	upperFront_s: 3.0 * 1.2,
	upperFront_t: 100,
	lowerFront_s: 3.0 * 0.9,
	lowerFront_t: 80,
	side_s: 5.2 * 2.0,
	side_t: 85,
	upperRear_s: 3.0 * 1.2,
	upperRear_t: 70,
	lowerRear_s: 3.0 * 0.9,
	lowerRear_t: 50,
	
	//Turret
	turretFront_s: 2.8 * 1.2,
	turretFront_t: 130,
	turretSide_s: 3.0 * 1.8,
	turretSide_t: 90,
	turretRear_s: 2.7 * 0.9,
	turretRear_t: 70,
}

//Resources
res$money = 100;
range = 0;
//Display
function display(s, t, a) {
	document.getElementById("ID_money").innerHTML = "Money: " + res$money.toFixed(2);
	document.getElementById("ID_cannon").innerHTML = "Gun: " + s;
	document.getElementById("ID_ammo").innerHTML = "Shell: " + a;
	document.getElementById("ID_range").innerHTML = "Range: " + range + " " + "m";
	document.getElementById("ID_target").innerHTML = "Target: " + t;

}

display();

function penResult(s, t) {
	if (s.pen600 > t.upperFront_t) {
		range = 600;
		display(s.name, t.name, s.shellType);
		var result$pen = "Penetration";
		var result$dmg = "Some damage";
	} else {
		range = 600;
		display(s.name, t.name, s.shellType);
		var result$pen = "No penetration";
		var result$dmg = "Some damage";
	}
	
	document.getElementById("ID_results_pen").innerHTML = result$pen;
	document.getElementById("ID_results_dmg").innerHTML = result$dmg;
}
penResult(c76$HVAP, t$3);

function show() {
	document.getElementById("ID_upgradesBox").classList.toggle("box_row_h");
}

function choose(x) {
	switch (x) {
		case "c":
			document.getElementById("ID_cannons").classList.toggle("box_column_h")
			break;
			
		case "s":
			document.getElementById("ID_shells").classList.remove("box_column_h")
			document.getElementById("ID_shells").classList.add("box_column")
			break;
			
		case "r":
			document.getElementById("ID_ranges").classList.remove("box_column_h")
			document.getElementById("ID_ranges").classList.add("box_column")
			break;
			
		case "t":
			document.getElementById("ID_targets").classList.remove("box_column_h")
			document.getElementById("ID_targets").classList.add("box_column")
			break;
	}
}

function play() {
	
}
