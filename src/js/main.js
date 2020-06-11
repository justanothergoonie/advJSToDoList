// console.log('helo wrld');
// var theList = document.querySelector('.todo'),
// 	item = document.querySelector('.new-item'),
// 	addBttn = document.querySelector('.add-item'),
// 	remainingCount = document.querySelector('.total'),
// 	completeCount = document.querySelector('.done-total'),
// 	importCount = document.querySelector('.import-total'),
// 	banishComplete = document.querySelector('.clear-finished');
// remainingCount.innerText = '0';

// var updateItemCount = function () {
// 	(remainingCount.innerText = document.querySelectorAll(
// 		//sets the innerText of the remainingCount to that of the amount of li items that do not have the class of 'finished'
// 		'li:not(.finished'
// 	).length),
// 		(completeCount.innerText = document.querySelectorAll(
// 			'li.finished'
// 		).length),
// 		(importCount.innerText = document.querySelectorAll(
// 			'li.important'
// 		).length);
// };

// updateItemCount();

// var isFieldValid = function () {
// 		return (
// 			'' !== item.value.trim() ||
// 			(alert(
// 				"I'm sorry Chris, I'm afraid I Can't do that... Dasiy, Dais.."
// 			),
// 			!1)
// 		);
// 	},

// 	addItem = function () {
// 		if (isFieldValid()) {
// 			var newItem = document.createElement('li'),
// 				itemButton = document.createElement('button'),
// 				importantButton = document.createElement('div');
// 			itemButton.innerText = '❌';
// 			importantButton.innerText = '❕';
// 			itemButton.addEventListener('click', function () {
// 				newItem.classList.toggle('finished');
// 				newItem.classList.contains('finished')
// 					? (itemButton.innerText = '✅')
// 					: (itemButton.innerText = '❌');
// 				updateItemCount();
// 			}),
// 				importantButton.addEventListener('click', function () {
// 					newItem.classList.toggle('important');
// 					newItem.classList.contains('important')
// 						? (importantButton.innerText = '❗')
// 						: (importantButton.innerText = '❕');
// 					updateItemCount();
// 				}),
// 				(newItem.innerText = item.value);
// 			theList.appendChild(newItem);
// 			newItem.appendChild(itemButton);
// 			newItem.appendChild(importantButton);
// 			item.value = '';
// 			item.placeholder = 'Please Enter New Item';
// 			item.focus();
// 			updateItemCount();
// 		}
// 	},

// 	removeItems = function () {
// 		for (
// 			var e = document.querySelectorAll('.finished'), t = 0;
// 			t < e.length;
// 			t++
// 		)
// 			e[t].remove();
// 		updateItemCount();
// 	};

// addBttn.addEventListener('click', addItem),
// 	window.addEventListener('keyup', function () {
// 		'Enter' === event.code && addItem();
// 	}),

// 	banishComplete.addEventListener('click', removeItems);
new toDoList({});

new toDoItem({});
