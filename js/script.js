/*things left to do
<<<<<<< HEAD
1)fix hide/show problem -> reversal
2)add animation to transitions (intro, end, reload)
3)add man from anotherplace walking across black lodge
4)play again button blinking 
5)make player images transparent bgs 
6)make all owl images same sizes*/
=======
BIG BUG: REMOVE ABILITY TO CLICK ON AN ALREADY SHOWN IMG

-add man from anotherplace walking across black lodge
*/
>>>>>>> master

var remainingMatches = 6; 
$(document).ready(function(){
	console.log("jquery loaded");
<<<<<<< HEAD
	/*Board is random set of 15 pairs, 30 boxes
	Player 1 turn lasts until the 2 clicks do not match
	after player 1 doesn't get a match, player 2 goes
	continue process until board = 0
	each match gives the player +1 
	each match subtracts 1 from board total (board total starts at 6)
	once all matchs are made, announce winner
	winner is determined by whichever player has more points
	show winning image on center of screen with reset button to reset JUST board */

	/*Bonus: when a match is made, show info about that owl */


	//Generate Imgs in Divs
	//Hide Imgs behind div, to be revealed on click
	//if two imgs match
		//-1 to board
		//++ to player
	//if player doesn't match imgs, cover the imgs back up,
	//switch player
	//continue until board = 0
=======
	
	/*Bonus: when a match is made, show info about that owl */

>>>>>>> master
var player1Score = 0; //add 1 for each match
var player2Score = 0; //add 1 for each match	
var memorySquare = $(".memorySquare"); //squares to append images to
var playerTurn = 0; //controls turns 
var player1 = "player1";
var player2 = "player2";
var player = player1;
var memoryContainer = "#memoryContainer";
var i = 0;
var imageSource = [
	"img/barnOwl.jpg",
	"img/eagleOwl.jpg",
	"img/elfOwl.jpg",
	"img/greatHornedOwl.jpg",
	"img/longEaredOwl.jpg",
	"img/sawWhetOwl.jpg",
	"img/barnOwl.jpg",
	"img/eagleOwl.jpg",
	"img/elfOwl.jpg",
	"img/greatHornedOwl.jpg",
	"img/longEaredOwl.jpg",
	"img/sawWhetOwl.jpg"
	
	]
	var totalImages = [];
	var randomImages = [];
// $(".memorySquare img").hide();
// $(".owlImage").hide();
function randomize(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


//Display Game Board - intro 

$(".enter").click(function(){
	clearPlayers();
	$(".introduction").hide();
	$(".container").show();
<<<<<<< HEAD
	$(".player1Stats, .player2Stats").show();
=======
	$("header").show();
>>>>>>> master
		generateImages();
	})

//Generate Imgs in Divs
var generateImages = function() {
	i = 0;
	totalImages = []; //new array from randomImages
	randomImages = randomize(imageSource);
	for (i=0; i < randomImages.length; i ++){
		totalImages.push(randomImages[i]);
		var squ = $(memorySquare[i]).find("img");
		var attr = squ.attr("src");
		if (squ.attr("src") === "#"){
			squ.attr("src", randomImages[i]);
			console.log("inside img loop");
		}
		// console.log(totalImages);
		}
	$(".owlImage").hide();
	};

var findPair = function(){
	//if all images are hidden, allow to show two - base on clicks
	clicks = 0;
	var click1 = null;
	var click2 = null;
<<<<<<< HEAD
	//if two images match then pair + point
	//if no match, flip again
	//THIS NEEDS TO BE REVERSED POST TESTING
		$(".cover").click(function(){
			// while (player === player1){
				if(clicks == 0){
					click1 = $(this).children().show();
					clicks ++;
				}
				else if(clicks == 1){
					click2 = $(this).children().show();
					clicks ++;
					$(makeMatch(click1, click2));
				}			
=======
	//add if click1 and click2 are both visible, do nothing
		$(".cover").click(function(){
			// while (player === player1){
				if(clicks == 0){
					click1 = $(this).children().fadeIn( "slow", function() {
					    // Animation complete
					  });

					clicks ++;
				}
				else if(clicks == 1){
					click2 = $(this).children().fadeIn( "slow", function() {
					    // Animation complete
					  });
					// $(this).off('click');
					clicks ++;
					$(makeMatch(click1, click2));
				}	
					
>>>>>>> master
		})
};

var switchPlayer = function(){
		if (playerTurn%2 === 0){
			player = player1;
<<<<<<< HEAD
			console.log("player 1 turn")
		}else {
			player = player2;
=======
			//opacity 
			$(".player1Stats").css( "opacity", 1.0 );
			$(".player2Stats").css( "opacity", 0.3 );
			console.log("player 1 turn")
		}else {
			player = player2;
			$(".player2Stats").css( "opacity", 1.0 );
			$(".player1Stats").css( "opacity", 0.3 );
>>>>>>> master
			console.log("player 2 turn")
		}
	}


var makeMatch = function(x,y){
	var xImageUrl = x.attr("src");
	var yImageUrl = y.attr("src");
		if (xImageUrl === yImageUrl){
			clicks = 0;
<<<<<<< HEAD
=======
				// //remove class '.cover'
				// $(xImageUrl).unbind('click');
				// $(yImageUrl).unbind('click');
>>>>>>> master
			x = null;
			y = null;
			remainingMatches --;
			if(player === player1){
<<<<<<< HEAD
=======
				//change img src to winner for both
>>>>>>> master
				player1Score ++;
				$(".player1Stats p").text(player1Score);
			}
			if(player === player2){
				player2Score ++;
				$(".player2Stats p").text(player2Score);
			}
			console.log('match');
			}
		else if (xImageUrl != yImageUrl){
			console.log("no match");
<<<<<<< HEAD
			x.hide(); //CHANGE THIS TO HIDE
			y.hide(); //CHANGE THIS TO HIDE
=======
			//parent of xImageUrl and yImageUrl bind()
			// $(".cover").bind("click", function(){

			// });	
			x.fadeOut( "slow", function() {
			    // Animation complete
			  });
			y.fadeOut( "slow", function() {
			    // Animation complete
			  });
>>>>>>> master
			yImageUrl = null;
			xImageUrl = null;
			x = null;
			y = null;
			clicks = 0;
			playerTurn ++; //controls board switch
			console.log('no match');
			switchPlayer();
			return;
			}
	}

var clearBoard = function(){
	i = 0;
	for (i=0; i < imageSource.length; i ++){
		var squ = $(memorySquare[i]).find("img");
		var attr = squ.attr("src");
		if (squ.attr("src") != "#"){
			squ.attr("src", "#");
			console.log("clearBoard");
		}
	}
}
var clearPlayers = function(){
	player1Score = 0;
	player2Score = 0;
	$(".player1Stats p").text(player1Score);
	$(".player2Stats p").text(player2Score);
}

$(".container").on("mousemove", (function(){
	if (remainingMatches === 0) {
<<<<<<< HEAD
		console.log("remaining matches is: " + remainingMatches);
		clearBoard();
		findWinner();
		$(".boardResetContainer").show();
=======
		$(".boardResetContainer").show();
		console.log("remaining matches is: " + remainingMatches);
		clearBoard();
		findWinner();
>>>>>>> master
		$("#memoryContainer").hide();
		remainingMatches = 6;
		player = player1;
		i = 0;
		clicks = 0;
		$(".reset").click(function(){
			clearPlayers();
			$(".boardResetContainer").hide();
<<<<<<< HEAD
			$("#memoryContainer, .memorySquare, .memorySquare img, .cover, .owlImage").show();
=======
			$("#memoryContainer, .memorySquare, .memorySquare img, .cover, .owlImage").fadeIn( "slow", function() {
					    // Animation complete
					  });
>>>>>>> master
			generateImages();
			})

		}
	 }));

var findWinner = function(){
	if (player1Score > player2Score){
		$(".winner").append("Player 1, you win this time.")
		console.log("player1 wins");
	}
	if (player1Score === player2Score){
		$(".winner").append("It's a tie.")
		console.log("tie");
	}
	if (player2Score > player1Score){
		$(".winner").append("Player 2, nice memory.")
		console.log("player2 wins");
	}
}
<<<<<<< HEAD
=======

//controls both enter and reset buttons, little animation
var buttonAnimateIn = function(){
	$("button").animate({ 
		backgroundColor: 'rgba(112,56,47,0.4)',
		letterSpacing: "1.3px"
	}, 1000, buttonAnimateOut);
};

var buttonAnimateOut = function(){
	$("button").animate({ 
		backgroundColor: 'rgba(112,56,47,1.0)',
		letterSpacing: "1.5px"
		}, 800, buttonAnimateIn);
	};
	buttonAnimateIn();

	$('button').click(function(){
		$('button').stop();
		})

buttonAnimateOut();
>>>>>>> master
generateImages();
findPair();	

});

<<<<<<< HEAD
=======



>>>>>>> master
