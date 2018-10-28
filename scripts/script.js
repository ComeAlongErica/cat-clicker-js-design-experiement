"use strict";
$(document).ready(() => {

    let counter = 0;  

    $(document).on("click", ".cat-img", (event) => {
        counter= counter + 1;  
        $(".counter").html("");
        $(".counter").html(`<p>You've clicked ${counter} times.</p>`);
    });
});