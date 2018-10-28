"use strict";
$(document).ready(() => {

    let counter1 = 0;  
    let counter2 = 0;  


    $(document).on("click", ".cat-img-1", (event) => {
        counter1 = counter1 + 1;   
        
        $(".counter-cat-1").html("");
        $(".counter-cat-1").html(`<p>You've clicked ${counter1} times.</p>`);
    });


    $(document).on("click", ".cat-img-2", (event) => {
        counter2 = counter2 + 1;   
        
        $(".counter-cat-2").html("");
        $(".counter-cat-2").html(`<p>You've clicked ${counter2} times.</p>`);
    });

});