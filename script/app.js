(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
	gameBoard = document.querySelector('.puzzle-board'),
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleZone = document.querySelector('.puzzle-pieces');


	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet() {
		// chnge all the image elements on page ==> draggable image sources,
		pieceNames.forEach((piece, index) => {

		 puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
		 puzzlePieces[index].id = `${piece + this.dataset.puzzleref}`;
	 });



		// and set the drop zone background image based on the puzle the user selects.
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;

		//debugger;
	}

	function allowDrag(event) {
		console.log('Started dragging an image' );

		event.dataTransfer.setData("text/plain", this.id);
	}

	// function allowDragOver(event) {
	// 	event.preventDefault();
	// 	console.log('dragged over a drop zone' );
	// }



	function allowDragOver(event) {
		if(this.childNodes.length == 0){
			event.preventDefault();
			console.log('drag over a drop zone');

		}
		// event.dataTransfer.setData("src", this.class);
	}

	function allowDrop(event) {
		// event.preventDefault();
		console.log('dropped on a drop zone' );

		let currentImage = event.dataTransfer.getData("text/plain");

		//add that image to whatever drop zone we are dropping our image on
		event.target.appendChild(document.querySelector(`#${currentImage}`));

		
	}
	function  resetButtons ()
	{
		for (let s=0; 
			s < puzzlePieces.length;
			s++){
			puzzleZone.appendChild(puzzlePieces[s]);
		// debugger;
		}
	}

	// add event handling here ==> how is the user going to use our app?
	// what triggers do we need?

	// click on the buttom buttons to change the puzzle image we are working on
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
	puzzleButtons.forEach(button => button.addEventListener('click', resetButtons));




	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));


	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});




	// call the function and pass in the nav button as reference
	// research call, apply and bind -> look at MDN
	changeImageSet.call(puzzleButtons[0]);
})();
