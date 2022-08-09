console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Have a nice day');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);