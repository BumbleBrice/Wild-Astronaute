"use strict"

function themePrint(themeTable){
	let zeroCount = 0;
	for(let val in themeTable)
		val === 0 ? zeroCount++;
	if(zeroCount === themeTable.length){
		$('planet').removeClass("invisibility");
		$('sattelite').removeClass("invisibility");
		$('star').removeClass("invisibility");
		$('galaxy').removeClass("invisibility");
	}
	themeTable[0] === 0 ? $('planet').addClass("invisibility") : $('planet').removeClass("invisibility");
	themeTable[1] === 0 ? $('sattelite').addClass("invisibility") : $('sattelite').removeClass("invisibility");
	themeTable[2] === 0 ? $('star').addClass("invisibility") : $('star').removeClass("invisibility");
	themeTable[3] === 0 ? $('galaxy').addClass("invisibility") : $('galaxy').removeClass("invisibility");
}

$(function(){
	let themeTable = [0, 0, 0, 0];
	$('#planet').bind('click', function(){
		themeTable[0] === 0 ? themeTable[0] = 1 : themeTable[0] = 0;;
		themePrint(themeTable);
	});
	$('#sattelite').bind('click', function(){
		themeTable[1] === 0 ? themeTable[1] = 1 : themeTable[1] = 0;
		themePrint(themeTable);
	});
	$('#star').bind('click', function(){
		themeTable[2] === 0 ? themeTable[2] = 1 : themeTable[2] = 0;
		themePrint(themeTable);
	});
	$('#galaxy').bind('click', function(){
		themeTable[3] === 0 ? themeTable[3] = 1 : themeTable[3] = 0;
		themePrint(themeTable);
	});
	});