let image=document.querySelector('.slider img');
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let slideIndex=0;
let dot=document.querySelector('span');
let images=[
    './images/image1.png',
    './images/image2.jpg',
    './images/image4.jpeg'
]

image.src=images[slideIndex];

function autoPlay() {
    slideIndex++;
    if(slideIndex > images.length - 1) {
        slideIndex = 0
    }
    image.src = images[slideIndex];
}
next.onclick=()=>{
    autoPlay();
}

prev.onclick = () => {
    slideIndex--;
    if(slideIndex === -1) {
        slideIndex = images.length - 1;
    }
    image.src = images[slideIndex]
}

