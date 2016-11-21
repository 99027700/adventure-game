ppdocument.getElementById('level_title').innerHTML = 'Start het spel';
document.getElementById('option1').innerHTML = 'start';


function level1(){
	console.log("level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Water uit zee drinken.';
	opt1.setAttribute("onClick", "javascript:levelshark();");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'iets anders te drinken zoeken.';
	opt2.setAttribute("onClick", "javascript:level2();");

	document.getElementById('level_text').innerHTML = 'Na een nacht flink zuipen word je met een stevige hoofdpijn wakker op een eiland.';
	document.getElementById('level_title').innerHTML = 'level 1';
	document.getElementById('level_image').src = 'img/eiland.jpg';
	document.getElementById('option2').style.display = 'inline-block';
}
function levelshark(){
	console.log("levelshark");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'opnieuw';
	opt1.setAttribute("onClick", "javascript:level1();");

	document.getElementById('level_text').innerHTML = 'Hier je dorst weg drinken is niet heel slim.';
	document.getElementById('level_title').innerHTML = 'RIP';
	document.getElementById('level_image').src = 'img/shark.jpg';
	document.getElementById('option2').style.display = 'none';
}
function level2(){
	console.log("level2");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'vuurtje maken';
	opt1.setAttribute("onclick",  "javascript:level3();")
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = '';
	opt2.setAttribute("onClick", "javascript:leveljaguar();");

	document.getElementById('level_text').innerHTML = 'Je hebt een kokosnoot gevonden met nog wat kokoswater erin. het word al snel donker en het koelt al snel af';
	document.getElementById('level_title').innerHTML = 'level 2';
	document.getElementById('level_image').src = 'img/kokosnoot.jpg';
	document.getElementById('option2').style.display = 'none';
}
function level3(){
	console.log("level3");

	var opt3 = document.getElementById('option3');
	opt3.setAttribute("onclick",  "javascript:level4();")

	document.getElementById('level_text').innerHTML = 'Je hebt een vuursteen gevonden gebruik hem';
	document.getElementById('level_image').src = 'img/kampvuur.jpg';
	document.getElementById('level_title').innerHTML = 'level 3';
	document.getElementById('option3').style.display = 'block';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('option1').style.display = 'none';
}

function level4(){
	console.log("level4");

	var opt1 = document.getElementById('option1')
	opt1.innerHTML = 'doorgaan.'
	opt1.setAttribute("onclick",  "javascript:level5();")


	document.getElementById('level_title').innerHTML = 'level 4';
	document.getElementById('option1').style.display = 'inline-block';
	document.getElementById('level_image').src = 'img/kampvuur1.jpg';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('level_text').innerHTML = 'Na een puur uur kloten is het vuur toch aan.';
	document.getElementById('option3').style.display = 'none';

}
function level5(){
	console.log("level5");

	var opt1 = document.getElementById('option1')
	opt1.innerHTML = 'Jezelf overgeven.'
	opt1.setAttribute("onclick",  "javascript:level6();")

	var opt2 = document.getElementById('option2')
	opt2.innerHTML = 'wegrennen.'
	opt2.setAttribute("onclick",  "javascript:levelspeer();")

	document.getElementById('level_text').innerHTML = 'Je viel in slaap en toen je wakker schrok stond er een stam naast je met speren. ';
	document.getElementById('level_image').src = 'img/tribe.jpg';
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('level_title').innerHTML = 'level 5';
}

function levelspeer(){
	console.log("levelspeer")

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'opnieuw';
	opt1.setAttribute("onClick", "javascript:level5();");

	document.getElementById('level_text').innerHTML = 'Ja ze kunnen best goed met speren gooien. ';
	document.getElementById('level_image').src = 'img/speer.jpg';
	document.getElementById('level_title').innerHTML = 'rip';
	document.getElementById('option2').style.display = 'none';
}

function level6(){
	console.log("level6");

	var opt4 = document.getElementById('option4');
	opt4.setAttribute("onclick",  "javascript:level7();")

	document.getElementById('option4').style.display = 'inline-block';
	document.getElementById('level_image').src = 'img/spit1.png';
	document.getElementById('level_title').innerHTML = 'level6';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('option1').style.display = 'none';
	document.getElementById('level_text').innerHTML = 'Je word meegenomen naar een spit! zoek iets scherps om jezelf los te snijden ';
}
function level7(){
	console.log("level7");

	var opt5 = document.getElementById('option5');
	opt5.setAttribute("onclick",  "javascript:leveltrap();")

	var opt6 = document.getElementById('option6');
	opt6.setAttribute("onclick",  "javascript:level8();")


	document.getElementById('level_image').src = 'img/run.jpg';
	document.getElementById('option4').style.display = 'none';
	document.getElementById('option6').style.display = 'block';
	document.getElementById('option5').style.display = 'block';
	document.getElementById('level_title').innerHTML = 'level7';
	document.getElementById('level_text').innerHTML = 'Het is je gelukt om los te komen maar de stam rent achter je aan kies welke kant je op wilt rechts naar het water en links het land weer in. ';
	

}
function level8(){
	console.log("level8");

	var opt7 = document.getElementById('option7');
	opt7.setAttribute("onclick",  "javascript:level9();")


	document.getElementById('level_image').src = 'img/boat.jpg';
	document.getElementById('option6').style.display = 'none';
	document.getElementById('option5').style.display = 'none';
	document.getElementById('level_text').innerHTML = 'je hebt een boot gevonden  ';
	document.getElementById('level_title').innerHTML = 'level 8';
	document.getElementById('option7').style.display = 'block';

}
function leveltrap(){
	console.log("leveltrap");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'opnieuw';
	opt1.setAttribute("onClick", "javascript:level7();");

	document.getElementById('level_image').src = 'img/trap.jpg';
	document.getElementById('level_text').innerHTML = 'Je viel in een val das niet echt slim he. ';
	document.getElementById('option1').style.display = 'none';
	document.getElementById('level_title').innerHTML = 'rip';



}
function level9(){
	console.log("level9");

	document.getElementById('level_text').innerHTML = 'Je hebt het veilig van het eiland afgemaakt! ';
	document.getElementById('level_image').src = 'img/weg1.jpg';
	document.getElementById('option7').style.display = 'none';
	document.getElementById('level_title').innerHTML = 'eind';



}