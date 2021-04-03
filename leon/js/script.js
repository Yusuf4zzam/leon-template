// Creaing The Toggle Bars
let parent = document.querySelector(".bars"); 
let main_list = document.querySelector(".main-list");

parent.addEventListener("click", () => {
    main_list.classList.toggle("active");
});
