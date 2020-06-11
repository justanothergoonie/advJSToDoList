class toDoList {
	theList = document.querySelector('.todo');
	item = document.querySelector('.new-item');
	addBttn = document.querySelector('.add-item');
	remainingCount = document.querySelector('.total');
	completeCount = document.querySelector('.done-total');
	importCount = document.querySelector('.import-total');
	banishComplete = document.querySelector('.clear-finished');

	options = {};

	constructor(parameters) {
		console.log('toDoList()', parameters);
	}

	addItem(event) {}
}
