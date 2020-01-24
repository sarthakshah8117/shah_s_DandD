(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img');

	function changeImageSet(){
		// chnge all the image elements on page ==> draggable image sources,
		// and set the drop zone background
		debugger;
	}

	// add event handling here ==> how is the user going to use our app?
	// what triggers do we need?

	// click on the buttom buttons to change the puzzle image we are working on
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet))

})();
