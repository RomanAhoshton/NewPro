const burger_menu=document.querySelector(".burger_menu");
const header_list=document.querySelector(".header_list");


// const Burger_line1=document.querySelector(".Burger_line1");
// const Burger_line2=document.querySelector(".Burger_line2");

burger_menu.addEventListener("click", () =>{
    burger_menu.classList.toggle("active");
    header_list.classList.toggle("active");
    
   
  
    // Burger_line1.classList.toggle("active");
    // Burger_line2.classList.toggle("active");
    


});



