// console.log('helo wrld')

// let theList = document.querySelector('.todo')
// let item = document.querySelector('.new-item')
// let addBttn = document.querySelector('.add-item')
// let leftCount = document.querySelector('.total')
// let doneCount = document.querySelector('.done-total')
// let importCount = document.querySelector('.import-total')
// let banishComplete = document.querySelector('.clear-finished')
// let todo = []
// let finished = []

// leftCount.innerText = todo.length

// let updateItemCount = () => {
// 	leftCount.innerText = todo.length - finished.length
// 	doneCount.innerText =document.querySelectorAll('li.finished').length
// 	importCount.innerText = document.querySelectorAll('li.important').length
// 	// console.log(todo.length)
// 	// console.log(finished.length)
// }
// updateItemCount()

//  let isFieldValid = () => {
//  	if (item.value === ""){
//  		alert("I Know Not Doing Anything Sounds Awesome But I Need You To Still Type Something In");
//  		return false;
//  	}
//  	return true
//  }

// let addItem = () => {
// 	if (isFieldValid()) {
// 		let newItem = document.createElement('li')
// 		let checkyBox = document.createElement('button')
// 		let important = document.createElement('div')

// 		todo.push(newItem)
// 		checkyBox.innerText = '❌'
// 		important.innerText = '❕'
// 		updateItemCount()

// 		checkyBox.addEventListener('click' , function(){
// 			newItem.classList.toggle('finished')
// 			if ( newItem.classList.contains('finished') ) {
// 				newItem.classList.remove('important')
// 				checkyBox.innerText = '✅'
// 				important.innerText = '❕'
// 				important.classList.remove('important')
// 				if (finished.indexOf(newItem) === -1) {
// 					finished.push(newItem)
// 				}
// 				updateItemCount()
// 			} else {
// 				checkyBox.innerText = '❌'
// 				let foundItemIndex = finished.indexOf(newItem)
// 				finished.splice(foundItemIndex, 1)
// 				updateItemCount()
// 			}
// 			console.log('finished', finished)
// 		})
// 		important.addEventListener('click', () =>{
// 			newItem.classList.toggle('important')
// 			if (newItem.classList.contains('finished') ) {
// 				newItem.classList.remove('important')
// 			} else if (newItem.classList.contains('important') ) {
// 				important.innerText = '❗'
// 			} else {
// 				important.innerText = '❕'
// 			}
// 			updateItemCount()
// 		})

// 		newItem.innerText = item.value
// 		theList.appendChild(newItem)
// 		newItem.appendChild(checkyBox)
// 		newItem.appendChild(important)
// 		item.value = ''
// 		item.placeholder = 'Please Enter New Item'
// 	}
// }

// let removeItems = () => {
// 	let markForBanish = document.querySelectorAll('.finished')
// 	for (var i = 0; i < markForBanish.length; i++) {
// 		markForBanish[i].remove()
// 	}
// 	updateItemCount()
// }

// addBttn.addEventListener('click', addItem)
// window.addEventListener('keyup', function(){
// 	if (event.code === "Enter"){
// 		addItem()
// 	}
// })

// banishComplete.addEventListener('click', removeItems)
console.log('helo wrld');
var theList = document.querySelector('.todo'),
	item = document.querySelector('.new-item'),
	addBttn = document.querySelector('.add-item'),
	leftCount = document.querySelector('.total'),
	doneCount = document.querySelector('.done-total'),
	importCount = document.querySelector('.import-total'),
	banishComplete = document.querySelector('.clear-finished');
leftCount.innerText = '0';
var updateItemCount = function () {
	(leftCount.innerText = document.querySelectorAll(
		'li:not(.finished'
	).length),
		(doneCount.innerText = document.querySelectorAll('li.finished').length),
		(importCount.innerText = document.querySelectorAll(
			'li.important'
		).length);
};
updateItemCount();
var isFieldValid = function () {
		return (
			'' !== item.value.trim() ||
			(alert(
				"I'm sorry Chris, I'm afraid I Can't do that... Dasiy, Dais.."
			),
			!1)
		);
	},
	addItem = function () {
		if (isFieldValid()) {
			var e = document.createElement('li'),
				t = document.createElement('button'),
				n = document.createElement('div');
			(t.innerText = '❌'),
				(n.innerText = '❕'),
				t.addEventListener('click', function () {
					e.classList.toggle('finished'),
						e.classList.contains('finished')
							? (t.innerText = '✅')
							: (t.innerText = '❌'),
						updateItemCount();
				}),
				n.addEventListener('click', function () {
					e.classList.toggle('important'),
						e.classList.contains('important')
							? (n.innerText = '❗')
							: (n.innerText = '❕'),
						updateItemCount();
				}),
				(e.innerText = item.value),
				theList.appendChild(e),
				e.appendChild(t),
				e.appendChild(n),
				(item.value = ''),
				(item.placeholder = 'Please Enter New Item'),
				item.focus(),
				updateItemCount();
		}
	},
	removeItems = function () {
		for (
			var e = document.querySelectorAll('.finished'), t = 0;
			t < e.length;
			t++
		)
			e[t].remove();
		updateItemCount();
	};
addBttn.addEventListener('click', addItem),
	window.addEventListener('keyup', function () {
		'Enter' === event.code && addItem();
	}),
	banishComplete.addEventListener('click', removeItems);
