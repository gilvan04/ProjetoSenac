const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carrosseliner = document.querySelector('.carrosseliner');

let currentIndex = 0;

nextButton.addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % carrosseliner.children.length;
    updateCarrossel();
});

prevButton.addEventListener('click', () =>{
    currentIndex = (currentIndex - 1) % carrosseliner.children.length;
    updateCarrossel();
});

function updateCarrossel(){
    const offset = -currentIndex * carrosseliner.offsetWidth;
    carrosseliner.style.transform = `translateX(${offset}px)`
}

