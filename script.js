
// Step 1: Create a variable
let count = 0;

// Step 2: Select HTML elements
const countDisplay = document.getElementById("count");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const plusFiveBtn = document.getElementById("plusFive");

// Step 3: Update counter display
function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "#667eea";
    }
}

// Step 4: Increase button
increaseBtn.addEventListener("click", function() {
    count++;
    updateDisplay();
});

// Step 5: Decrease button
decreaseBtn.addEventListener("click", function() {
    if (count > 0) {
        count--;
    }
    updateDisplay();
});

// Step 6: Reset button
resetBtn.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});

// Step 7: Increase by 5
plusFiveBtn.addEventListener("click", function() {
    count += 5;
    updateDisplay();
});
