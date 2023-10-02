window.onload = function() {
	console.log(555);
	let isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	console.log(isMobile);

	let body = document.querySelector('body')

	if (isMobile.any()) {
		body.classList.add('touch')
	} else {
		body.classList.add('mouse')
	}

	if(body.classList.contains('touch')){

		let buttons = document.querySelectorAll(".button")
		let menu = document.querySelector(".menu")
		let burger = document.querySelector(".burger")
		let burgerIcon = document.querySelector(".burger-button")

		buttons.forEach(function(button){
			button.addEventListener('click', function(){
				// console.log(e.target);
				this.nextElementSibling.classList.toggle('open')
			})
		})	

		burger.addEventListener('click', function(){
			menu.classList.toggle('open')
			burgerIcon.classList.toggle('burger_open')
		})

	}

}

