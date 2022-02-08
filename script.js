//Выпадающее меню
var menuElement = document.getElementById('mobile-menu');
        var titleElement = menuElement.querySelector('.mobile-menu-button');

        titleElement.onclick = function () {
            menuElement.classList.toggle('open');
        };


//Слайдеры
var slidersList = document.getElementsByClassName('slider');
var sliders = [];

for (k = 0; k < slidersList.length; k++) {
	sliders.push({
		slides: slidersList[k].getElementsByClassName('slide'),
		currentSlide: 0,
	});

	showSlides(sliders[k].slides, sliders[k].currentSlide);
}

function showSlides(slides, currentSlide) {
    	for (i = 0; i < slides.length; i++){
        	slides[i].style.display = 'none';
    	}

    	slides[currentSlide].style.display = 'block';
}

function minusSlide(sliderId) {
	var newCurrentSlide = sliders[sliderId].currentSlide - 1;

	if (newCurrentSlide < 0) {
		newCurrentSlide = sliders[sliderId].slides.length - 1;
	}

	showSlides(sliders[sliderId].slides, newCurrentSlide);

	sliders[sliderId].currentSlide = newCurrentSlide;
}

function plusSlide(sliderId) {
	var newCurrentSlide = sliders[sliderId].currentSlide + 1;
 
    	if (newCurrentSlide === sliders[sliderId].slides.length) {
        	newCurrentSlide = 0;
   	}

    	showSlides(sliders[sliderId].slides, newCurrentSlide);

	sliders[sliderId].currentSlide = newCurrentSlide;
}

function autoPlay() {
	for (j = 0; j < sliders.length; j++) {
		plusSlide(j);
	}
}

setInterval(autoPlay, 3000);
