$(document).ready(function(){
	$("button").click(function(){

		if($(this).hasClass("red")){
			// $("body").removeClass("red,green,orange");
				if($("body").hasClass("green")){
				// Remove green class
					$("body").removeClass("green");
				}
				if($("body").hasClass("orange")){
					$("body").removeClass("orange");
				}
			$("body").toggleClass("red");
			}
		else if($(this).hasClass("green")){
			// $("body").removeClass("red,green,orange");
			if($("body").hasClass("red")){
				// Remove green class
					$("body").removeClass("red");
				}
				if($("body").hasClass("orange")){
					$("body").removeClass("orange");
				}
			$("body").toggleClass("green");
			}
		else if($(this).hasClass("orange")){
			// $("body").removeClass("red,green,orange");
				if($("body").hasClass("red")){
				// Remove green class
					$("body").removeClass("red");
				}
				if($("body").hasClass("green")){
					$("body").removeClass("green");
				}
			$("body").toggleClass("orange");
			}
		});
	});

	