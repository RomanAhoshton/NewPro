const burger_menu=document.querySelector(".burger_menu");
const header_list=document.querySelector(".header_list");
const body_lock=document.querySelector(".body_lock");




burger_menu.addEventListener("click", () =>{
    burger_menu.classList.toggle("active");
    header_list.classList.toggle("active");
    body_lock.classList.toggle("lock");
    
   
  
   
    


});



