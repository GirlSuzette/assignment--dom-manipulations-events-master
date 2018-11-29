// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */
document.querySelector(".btn-toggle-menu").addEventListener("click", function () {

    if (document.querySelector(".answer-box nav").className === 'nav-menu') {
        document.querySelector(".answer-box nav").className = "nav-menu-hidden";
        document.querySelector(".btn-toggle-menu").innerHTML = "Show nav";

    } else {
        document.querySelector(".answer-box nav").className = "nav-menu";
        document.querySelector(".btn-toggle-menu").innerHTML = "Hide nav";
    }
})


/* TASK 2 -- Select/Deslect an Icon */
document.querySelectorAll(".option").forEach(function (div) {
    div.addEventListener('click', function (e) {
        if (e.currentTarget.className === "option") {
            e.currentTarget.classList.add('selected')
        } else {
            e.currentTarget.classList.remove('selected')
        }

    })
})


/* TASK 3 -- Increase total number*/
document.querySelectorAll(".point").forEach(function (btn) {
    btn.addEventListener('click', function () {
        var suma = document.querySelector(".total-points");
        suma.textContent = parseInt(suma.textContent) + parseInt(btn.textContent)


    })
})


/* TASK 4 (Adventure Mode)-- Move Item List to List */


/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */