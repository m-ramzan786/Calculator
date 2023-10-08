let user_input = document.getElementById('user-input')
let button = document.querySelectorAll('.button')
let backspace = document.querySelectorAll('.backspace')

button.forEach(element => {
    element.addEventListener ('click', (e) => {
        if
        (e.target.textContent === "C") {
            user_input.innerHTML = "";
        }
        else if
        (e.target.textContent === "X") {
            user_input.innerHTML = user_input.innerHTML.slice(0, -1);
        }
        else if
        (e.target.textContent === "=") {
            user_input.innerHTML = eval(user_input.innerHTML);
        }
        else
        {
            user_input.innerHTML += e.target.textContent;
        }
        user_input.scrollLeft = user_input.scrollWidth;
    })
})