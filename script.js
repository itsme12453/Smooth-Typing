window.onload = function(e){
    const container = document.getElementById("container");
    let slider = document.getElementById("myRange");
    let sliderValueSpan = document.getElementById("sliderValue");

    window.addEventListener("keydown", function(e){
        type(e.key)
    });

    slider.addEventListener("input", function() {
        let sliderValue = slider.value;

        document.documentElement.style.setProperty('--smooth-typing-speed', sliderValue + 's');

        sliderValueSpan.textContent = sliderValue + 's';
    });
}

function isValidKey(key) {
    return /^[a-zA-Z0-9 ?'"{}*&^%$£@!#,.<>]$/.test(key);
}

let prevPos;

function type(key){
    if (isValidKey(key)){
        const char = document.createElement('span');
        const cursor = document.getElementById("cursor");

        char.textContent = key === ' ' ? '\u00A0' : key; // Use non-breaking space for space character
        char.classList.add("showChar");
        container.appendChild(char);


        const spans = document.querySelectorAll('.showChar');
        const lastSpan = spans[spans.length - 1];
        const rect = lastSpan.getBoundingClientRect();
        cursor.style.left = (rect.right - container.getBoundingClientRect().left) + 'px';


        cursor.style.top = (rect.top - container.getBoundingClientRect().top) - 4 + 'px';
        console.log(rect.top);
        console.log(cursor.getBoundingClientRect().top)
    }
}