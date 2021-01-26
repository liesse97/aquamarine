const questions= document.querySelectorAll(".question");
const arrow = document.querySelectorAll("arrow_click");
const textAnswer= document.querySelectorAll(".answer");

questions.forEach(item =>{
    item.addEventListener('click',openFaq)
})

function openFaq(e){
   
    if (e.target.classList.contains('que_btn')){
        e.target.classList.toggle('display')
    }

    if(e.target.classList.contains('display')){
         e.target.nextElementSibling.style.display = 'block';
  
        e.target.querySelector('span').innerHTML= '<i class="fas fa-angle-up"></i>';
    } else{
       
             e.target.nextElementSibling.style.display = 'none';
        e.target.querySelector('span').innerHTML= '<i class="fas fa-angle-down"></i>';
        
}
}



