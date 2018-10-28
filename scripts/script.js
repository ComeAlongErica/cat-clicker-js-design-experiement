"use strict";
$(document).ready(() => {
    let catArray = [
        {
            name: "Jayne Cobb",
            url: "images/cat-photo-1.jpg"
        },
        {
            name: "Malcolm Reynolds",
            url: "images/cat-photo-2.jpg"
        },
        {
            name: "Kaylee Frye",
            url: "images/cat-photo-3.jpeg"
        },
        {
            name: "Zoe Washburne",
            url: "images/cat-photo-4.jpeg"
        },
        {
            name: "River Tam",
            url: "images/cat-photo-5.jpg"
        }
    ];

    const pageSetup = () => {
        for (let i = 0; i < catArray.length; i++) {
            let cat = catArray[i]; // specific cat we are on
            let counter = 0;

            let list = document.createElement('p'); //creates element
            list.textContent = cat.name; // give element content

            //creates event listener for element
            list.addEventListener("click", (function (catCopy) {
                return function () {
                    //increases counter
                    counter = counter + 1;

                    $(".display-cat").html(""); // clears container
                    $(".counter-cat").remove() //clears previous count

                    $(".display-cat").append(
                        `<p class="cat-name">${catCopy.name}</p>
                         <img src="${catCopy.url}">
                         <div class="counter-cat">${catCopy.name} has been clicked ${counter} times.</div>
                         `);
                };
            })(cat));

            $(".cat-name-list").append(list);
        };

    };

    pageSetup();

});

