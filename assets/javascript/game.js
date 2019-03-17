var characterSelected = false;
var enemySelected = false;
var luke = {
	name: "Luke Skywalker",
	health: 150,
	attack: 5,
	baseAttack: 5
};
var obiwan = {
	name: "Obi-wan Kenobi",
	health: 100,
	attack: 10,
	baseAttack: 10
};
var sideous = {
	name: "Darth Sideous",
	health: 110,
	attack: 10,
	baseAttack: 10
};
var maul = {
	name: "Darth Maul",
	health: 90,
	attack: 20,
	baseAttack: 20
};
var character = {};
var enemy = {};
var lukeID = $("#luke");
var obiwanID = $("#obiwan");
var sideousID = $("#sideous");
var maulID = $("#maul");

$("#lukeHealth").html(luke.health);
$("#obiwanHealth").html(obiwan.health);
$("#sideousHealth").html(sideous.health);
$("#maulHealth").html(maul.health);

function initializeCharacter(selectedCharacter) {
	character.name = selectedCharacter.name;
	character.health = selectedCharacter.health;
	character.attack = selectedCharacter.attack;
	character.baseAttack = selectedCharacter.baseAttack;
}

function initializeEnemy(selectedEnemy) {
	enemy.name = selectedEnemy.name;
	enemy.health = selectedEnemy.health;
	enemy.attack = selectedEnemy.attack;
	enemy.baseAttack = selectedEnemy.baseAttack;
}
$("#attack").hide();
$("#enemiesHeader").hide();
$(document).ready(function() {
	$(lukeID).on("click", function() {
		$("#obiwan, #sideous, #maul").prependTo("#enemies");
		$(this).replaceWith(
			"<div class='col-md-2' id='selected'>" + $(this).html() + "</div>"
		);
		$(obiwanID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemy1'>" +
				$(obiwanID).html() +
				"</button>"
		);
		$(sideousID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemy2'>" +
				$(sideousID).html() +
				"</button>"
		);
		$(maulID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemy3'>" +
				$(maulID).html() +
				"</button>"
		);
		if (characterSelected == false) {
			initializeCharacter(luke);
			characterSelected = true;
			$("#enemiesHeader").show();
			$("#attack").show();
			$("#character").text("Selected Character");
			$("#status").text("Select an enemy");
			console.log("character selected: " + characterSelected);
		}
	});
	$(obiwanID).on("click", function() {
		$("#luke, #sideous, #maul").prependTo("#enemies");
		$(this).replaceWith(
			"<div class='col-md-2' id='selected'>" + $(this).html() + "</div>"
		);
		$(lukeID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemyLuke'>" +
				$(lukeID).html() +
				"</button>"
		);
		$(sideousID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemySideous'>" +
				$(sideousID).html() +
				"</button>"
		);
		$(maulID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemyMaul'>" +
				$(maulID).html() +
				"</button>"
		);
		if (characterSelected == false) {
			initializeCharacter(obiwan);
			characterSelected = true;
			$("#enemiesHeader").show();
			$("#attack").show();
			$("#character").text("Selected Character");
			$("#status").text("Select an enemy");
			console.log("character selected: " + characterSelected);
		}
	});
	$(sideousID).on("click", function() {
		$("#obiwan, #luke, #maul").prependTo("#enemies");
		$(this).replaceWith(
			"<div class='col-md-2' id='selected'>" + $(this).html() + "</div>"
		);
		$(obiwanID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemyObiwan'>" +
				$(obiwanID).html() +
				"</button>"
		);
		$(lukeID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemyLuke'>" +
				$(lukeID).html() +
				"</button>"
		);
		$(maulID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemyMaul'>" +
				$(maulID).html() +
				"</button>"
		);
		if (characterSelected == false) {
			initializeCharacter(sideous);
			characterSelected = true;
			$("#enemiesHeader").show();
			$("#attack").show();
			$("#character").text("Selected Character");
			$("#status").text("Select an enemy");
			console.log("character selected: " + characterSelected);
		}
	});
	$(maulID).on("click", function() {
		$("#obiwan, #sideous, #luke").prependTo("#enemies");
		$(this).replaceWith(
			"<div class='col-md-2' id='selected'>" + $(this).html() + "</div>"
		);
		$(obiwanID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemyObiwan'>" +
				$(obiwanID).html() +
				"</button>"
		);
		$(sideousID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemySideous'>" +
				$(sideousID).html() +
				"</button>"
		);
		$(lukeID).replaceWith(
			"<button class='col-md-2 btnCharacterEnemy' id='enemyLuke'>" +
				$(lukeID).html() +
				"</button>"
		);
		if (characterSelected == false) {
			initializeCharacter(maul);
			characterSelected = true;
			$("#enemiesHeader").show();
			$("#attack").show();
			$("#character").text("Selected Character");
			$("#status").text("Select an enemy");
			console.log("character selected: " + characterSelected);
		}
	});
	$("body").on("click", "#enemyLuke", function() {
		if (enemySelected == false) {
			initializeEnemy(luke);
			enemySelected = true;
			$("#enemyLuke").addClass("selectedEnemy");
			$("#status").hide();
			console.log("enemy selected: " + enemySelected);
		}
	});
	$("body").on("click", "#enemyObiwan", function () {
		if (enemySelected == false) {
			initializeEnemy(obiwan);
			enemySelected = true;
			$("#enemyObiwan").addClass("selectedEnemy");
			$("#status").hide();
			console.log("enemy selected: " + enemySelected);
		}
	});
	$("body").on("click", "#enemySideous", function () {
		if (enemySelected == false) {
			initializeEnemy(sideous);
			enemySelected = true;
			$("#enemySideous").addClass("selectedEnemy");
			$("#status").hide();
			console.log("enemy selected: " + enemySelected);
		}
	});
	$("body").on("click", "#enemyMaul", function () {
		if (enemySelected == false) {
			initializeEnemy(maul);
			enemySelected = true;
			$("#enemyMaul").addClass("selectedEnemy");
			$("#status").hide();
			console.log("enemy selected: " + enemySelected);
			console.log(enemy.name)
		}
	});
	$("#attack").on("click", function () {
		if (characterSelected == true && enemySelected == true) {
			$("#status").show();
			$("#status").text("You attacked " + enemy.name + "!");
			
		}
	})
});