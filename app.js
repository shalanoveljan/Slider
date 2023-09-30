let image=document.querySelector('.slider img');
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let slideIndex=0;
let dots=document.querySelectorAll('.alldot span');
let images=[
    './images/image1.png',
    './images/image2.jpg',
    './images/image4.jpeg'
]


image.src=images[slideIndex];
image.setAttribute('id',slideIndex);

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
}, 4000);
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
    dot.onclick = function() {       
        let data_id = this.getAttribute('data-id')
        for(let i=0; i<images.length;i++) {
            if(document.querySelector('img').getAttribute('id') === data_id) {
                document.querySelector('img').classList.remove('d-none') 
            }
            else{
                document.querySelector('img').classList.add('d-none') 
            }
        }
        
    }
}
