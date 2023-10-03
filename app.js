let image=document.querySelector('.slider img');
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let dots=document.querySelectorAll('.alldot span');
var slideIndex=0;

const images=[

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
    image.setAttribute('id',slideIndex);
}

setInterval(() => {
    autoPlay();
}, 5000);
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

for(let dot of dots) {
    dot.onclick = function(e) {
        console.log(1);


        let data_id = e.target.getAttribute('data-id')


        image.src=images[data_id-1];

    }
}



