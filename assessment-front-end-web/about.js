console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully!');
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let pic = document.getElementById('rubberduck');
var compliments = document.querySelectorAll('#compliment li')

pic.addEventListener('mouseover', function () {
	alert(compliments[Math.floor(Math.random()*compliments.length)].textContent);
})