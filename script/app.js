(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
	gameBoard = document.querySelector('.puzzle-board'),
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img');


	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet(){
		// chnge all the image elements on page ==> draggable image sources,
		pieceNames.forEach((piece, index) => puzzlePieces [index].src = `images/${piece + this.dataset.puzzleref}.jpg`);


		// and set the drop zone background image based on the puzle the user selects.
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;

		//debugger;
	}

	// add event handling here ==> how is the user going to use our app?
	// what triggers do we need?

	// click on the buttom buttons to change the puzzle image we are working on
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet))


	// call the function and pass in the nav button as reference
	// research call, apply and bind -> look at MDN
	changeImageSet.call(puzzleButtons[0]);
})();
