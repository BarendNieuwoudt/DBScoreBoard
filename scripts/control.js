let timerInterval;
let timeLeft = 180;
let gameTimerInterval;
let gameTimeLeft = 900;

function updateTimer() {
	const minutes = Math.floor(timeLeft / 60);
	let seconds = timeLeft % 60;
	seconds = seconds < 10 ? `0${seconds}` : seconds;
	document.getElementById('timer').innerText = `${minutes}:${seconds}`;
	updateScoreboard();
}

function startTimer() {
	// Clicking the button twice makes the thing count 
	// down twice as fast. This is a problem.
	timerInterval = setInterval(() => {
		if (timeLeft <= 0) {
			clearInterval(timerInterval);
			alert('Time is up!');
		} else {
			timeLeft--;
			updateTimer();
		}
	}, 1000);
}

function pauseTimer() {
	clearInterval(timerInterval);
}

function stopTimer() {
	clearInterval(timerInterval);
	timeLeft = 180;
	updateTimer();
}

function setCustomTime() {
	const timeInput = document.getElementById('timeInput').value;
	const [minutes, seconds] = timeInput.split(':').map(part => parseInt(part, 10));
	if (!isNaN(minutes) && !isNaN(seconds)) {
		timeLeft = minutes * 60 + seconds;
		updateTimer();
	} else {
		alert('Invalid time format! Please use mm:ss format.');
	}
}

function updateGameTimer() {
	const minutes = Math.floor(gameTimeLeft / 60);
	let seconds = gameTimeLeft % 60;
	seconds = seconds < 10 ? `0${seconds}` : seconds;
	document.getElementById('gameTimer').innerText = `${minutes}:${seconds}`;
	updateScoreboard();
}

function startGameTimer() {
	// Clicking the button twice makes the thing count 
	// down twice as fast. This is a problem.
	gameTimerInterval = setInterval(() => {
		if (gameTimeLeft <= 0) {
			clearInterval(gameTimerInterval);
			alert('Time is up!');
		} else {
			gameTimeLeft--;
			updateGameTimer();
		}
	}, 1000);
}

function pauseGameTimer() {
	clearInterval(gameTimerInterval);
}

function stopGameTimer() {
	clearInterval(gameTimerInterval);
	gameTimeLeft = 900;
	updateGameTimer();
}

function setCustomGameTime() {
	const timeInput = document.getElementById('gameTimeInput').value;
	const [minutes, seconds] = gameTimeInput.split(':').map(part => parseInt(part, 10));
	if (!isNaN(minutes) && !isNaN(seconds)) {
		gameTimeLeft = minutes * 60 + seconds;
		updateGameTimer();
	} else {
		alert('Invalid time format! Please use mm:ss format.');
	}
}

function updateScore(team, p) {
	const pointsElement = document.getElementById(`${team}Points`);
	let points = parseInt(pointsElement.innerText, 10);
	points = points + p;
	pointsElement.innerText = points;
	updateScoreboard();
}

function updateScoreboard() {
	localStorage.setItem('team1Name', document.getElementById('team1Name').value);
	localStorage.setItem('team1Points', document.getElementById('team1Points').innerText);
	localStorage.setItem('team2Name', document.getElementById('team2Name').value);
	localStorage.setItem('team2Points', document.getElementById('team2Points').innerText);
	localStorage.setItem('timer', document.getElementById('timer').innerText);
	localStorage.setItem('gameTimer', document.getElementById('gameTimer').innerText);
}

updateScoreboard();