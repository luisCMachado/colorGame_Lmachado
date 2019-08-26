let numSquares = 6,
	colors = [],
	pickedColor = null,
	h1 = document.querySelector("h1"),
	colorBox = document.querySelectorAll(".gameSquare"),
	messages = document.querySelector(".message"),
	colordisplay = document.querySelector(".colordisplay"),
	newColor = document.querySelector(".newColors"),
	levelButtons = document.querySelectorAll(".level");

function restart() {
	newColor.textContent = "New Colors"
	colors = generateNewColors(numSquares)
	let random = Math.floor(Math.random() * colors.length);
	pickedColor = colors[random]
	colordisplay.textContent = pickedColor;
	messages.textContent = "";
	for (let i = 0; i < colorBox.length; i++) {
		if (colors[i]) {
			colorBox[i].style.display = "block";
			colorBox[i].style.backgroundColor = colors[i];
		} else {
			colorBox[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "blue";
}

newColor.addEventListener("click", function () {
	restart();
})

function setuplevelButtons() {
	for (let i = 0; i < levelButtons.length; i++) {
		levelButtons[i].addEventListener("click", function () {
			h1.style.backgroundColor = "blue";
			messages.textContent = "";
			levelButtons[0].classList.remove("selected");
			levelButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
			restart();
		})
	}
}

function arrangeSquares() {
	for (let i = 0; i < colorBox.length; i++) {
		colorBox[i].style.backgroundColor = colors[i];
		colorBox[i].addEventListener("click", function () {
			let clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messages.textContent = "Correct!";
				newColor.textContent = "Play Again"
				changecolors(clickedColor);
			} else {
				this.style.backgroundColor = "rgb(23, 23, 23)";
				messages.textContent = "Try Again";
			}
		})
	}
}

function changecolors(color) {
	for (let i = 0; i < colorBox.length; i++) {
		colorBox[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function generateNewColors(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		let number = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
		arr.push(number);
	}
	return arr;
}

setuplevelButtons();
arrangeSquares();
restart();