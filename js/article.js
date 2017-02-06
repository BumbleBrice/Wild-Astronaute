"use strict"

$(function(){
	let isPrinted = false;
		$(".articleMini").bind("click", (e) => {
			let minArticle = event.currentTarget;
			if(!isPrinted){
				console.log($(minArticle).html()); 
				let newArticle = '<div class="articleMax">';
				newArticle += $(minArticle).html();
				newArticle += '</div>';
				$(".col70").html(newArticle);
				isPrinted = true;
				console.log(isPrinted);
			}
			else{
				$(".articleMax").remove();
				isPrinted = false;
				console.log(isPrinted);
			}
		});
	});