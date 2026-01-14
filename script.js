// Click event
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("message").textContent = "Button Clicked!";
});

// Mouseover event
document.getElementById("btn").addEventListener("mouseover", function () {
    this.style.backgroundColor = "green";
});

// Mouseout event
document.getElementById("btn").addEventListener("mouseout", function () {
    this.style.backgroundColor = "#007bff";
});

// Input event
document.getElementById("nameInput").addEventListener("input", function () {
    document.getElementById("message").textContent =
        "Hello, " + this.value;
});