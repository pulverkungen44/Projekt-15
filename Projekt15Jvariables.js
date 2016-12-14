//Variables
p$auto_dmg = 1;
e$auto_dmg = 0;
p$health = 10;
e$health = 10;


//Properties
p$tank = {health: p$health, auto_dmg: p$auto_dmg};
e$tank = {health: e$health, auto_dmg: e$auto_dmg, number: 1};

//Resources
res$money = 100;

//Display
function display() {
	document.getElementById("ID_plr_health").innerHTML = "Player health: " + p$tank.health.toFixed(2);
	document.getElementById("ID_enm_health").innerHTML = "Enemy health: " + e$tank.health.toFixed(2);
	document.getElementById("ID_money").innerHTML = "Money: " + res$money.toFixed(2);
	document.getElementById("ID_plr_auto_dmg").innerHTML = "DPS: " + p$tank.auto_dmg.toFixed(2);
	document.getElementById("enemyTank").innerHTML = "Enemy number " + e$tank.number;
}
setTimeout(display, 100);
setInterval(checkIfDead, 100);
dmg_interval = setInterval(dmg, 1000);

function checkIfDead() {
	if (e$tank.health < 1) {
		e$tank.number += 1;
		e$tank.health = 10;
		res$money += 1 + (0.1 * e$tank.number);
		display();
	} else {}
}

function dmg() {
	e$tank.health -= p$tank.auto_dmg;
	display();
}

function upgrade(type, cal) {
	if (type == "cannon") {
		if (cal == 37) {
			var prc = 50;
				if (res$money >= prc) {
					p$tank.auto_dmg *= 2;
					res$money -= prc;
					display();
				} 
		} else if (cal == 40) {
			var prc = 100;
				if (res$money >= prc) {
					p$tank.auto_dmg *= 3;
					res$money -= prc;
					display();
				} 
		} else {
			window.alert("You can't afford this upgrade");
		}
	} else if (type == "turret") {
		var prc = 100;
		if (res$money >= prc) {
			clearInterval(dmg_interval);
			dmg_interval = setInterval(dmg, 990);
			res$money -= prc;
			prc *= 1.02;
			display();
		} else {
		window.alert("You can't afford this upgrade");
		}
	}

}

function show() {
	document.getElementById("ID_upgradesBox").classList.toggle("box_row_h");
	document.getElementById("ID_upgradesBox").classList.toggle("box_row");
}