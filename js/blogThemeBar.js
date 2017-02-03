"use strict"

function themePrint(themeTable){
	let zeroCount = 0;

	for(let val of themeTable){
		if(val === 0)
			zeroCount++;
	}
	if(zeroCount === themeTable.length){
		$('.planet').removeClass("invisibility");
		$('.satellite').removeClass("invisibility");
		$('.star').removeClass("invisibility");
		$('.galaxy').removeClass("invisibility");
		return;
	}
	themeTable[0] === 1 ? $('.planet').removeClass("invisibility") : $('.planet').addClass("invisibility");
	themeTable[1] === 1 ? $('.satellite').removeClass("invisibility") : $('.satellite').addClass("invisibility");
	themeTable[2] === 1 ? $('.star').removeClass("invisibility") : $('.star').addClass("invisibility");
	themeTable[3] === 1 ? $('.galaxy').removeClass("invisibility") : $('.galaxy').addClass("invisibility");
}

$(function(){
	let themeTable = [0, 0, 0, 0];
	$('#planet').bind('click', function(){
		themeTable[0] === 0 ? themeTable[0] = 1 : themeTable[0] = 0;
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