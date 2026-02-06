// Get all elements
const targetKeyElement = document.getElementById('targetKey');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');
const timerElement = document.getElementById('timer');
const feedbackElement = document.getElementById('feedback');
const startBtn = document.getElementById('startBtn');
const gameOver = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');
const correctCountElement = document.getElementById('correctCount');
const wrongCountElement = document.getElementById('wrongCount');
const accuracyElement = document.getElementById('accuracy');

// Game variables
let score = 0;
let highScore = 0;
let timeLeft = 30;
let gameActive = false;
let currentKey = '';
let correctCount = 0;
let wrongCount = 0;
let timerInterval;

// Array of keys to use in the game
const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
              'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Event listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
document.addEventListener('keydown', handleKeyPress);

// Start Game Function
function startGame() {
    // Reset values
    score = 0;
    timeLeft = 30;
    correctCount = 0;
    wrongCount = 0;
    gameActive = true;
    
    // Update display
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    correctCountElement.textContent = correctCount;
    wrongCountElement.textContent = wrongCount;
    accuracyElement.textContent = '100%';
    feedbackElement.textContent = '';
    
    // Hide start button
    startBtn.style.display = 'none';
    
    // Generate first random key
    generateRandomKey();
    
    // Start timer
    timerInterval = setInterval(updateTimer, 1000);
}

// Handle Key Press
function handleKeyPress(e) {
    if (!gameActive) return;
    
    const pressedKey = e.key.toUpperCase();
    
    // Find the virtual key element
    const virtualKey = document.querySelector(`[data-key="${pressedKey}"]`);
    
    if (pressedKey === currentKey) {
        // Correct key pressed
        score += 10;
        correctCount++;
        
        // Update feedback
        feedbackElement.textContent = '✅ Correct!';
        feedbackElement.className = 'feedback correct';
        
        // Visual feedback on virtual keyboard
        if (virtualKey) {
            virtualKey.classList.add('correct');
            setTimeout(() => {
                virtualKey.classList.remove('correct');
            }, 300);
        }
        
        // Update score
        updateScore();
        
        // Generate new key
        generateRandomKey();
        
    } else if (keys.includes(pressedKey)) {
        // Wrong key pressed (but it's a valid game key)
        wrongCount++;
        
        // Update feedback
        feedbackElement.textContent = '❌ Wrong Key!';
        feedbackElement.className = 'feedback wrong';
        
        // Visual feedback on virtual keyboard
        if (virtualKey) {
            virtualKey.classList.add('wrong');
            setTimeout(() => {
                virtualKey.classList.remove('wrong');
            }, 300);
        }
        
        // Update stats
        updateScore();
    }
}

// Generate Random Key
function generateRandomKey() {
    const randomIndex = Math.floor(Math.random() * keys.length);
    currentKey = keys[randomIndex];
    targetKeyElement.textContent = currentKey;
    
    // Highlight the target key on virtual keyboard
    const allKeys = document.querySelectorAll('.key');
    allKeys.forEach(key => key.classList.remove('active'));
    
    const targetVirtualKey = document.querySelector(`[data-key="${currentKey}"]`);
    if (targetVirtualKey) {
        targetVirtualKey.classList.add('active');
    }
}

// Update Score and Stats
function updateScore() {
    scoreElement.textContent = score;
    correctCountElement.textContent = correctCount;
    wrongCountElement.textContent = wrongCount;
    
    // Calculate accuracy
    const totalAttempts = correctCount + wrongCount;
    if (totalAttempts > 0) {
        const accuracy = Math.round((correctCount / totalAttempts) * 100);
        accuracyElement.textContent = accuracy + '%';
    }
}

// Update Timer
function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    
    // Change color when time is running out
    if (timeLeft <= 10) {
        timerElement.style.color = '#e74c3c';
    }
    
    // End game when timer reaches 0
    if (timeLeft <= 0) {
        endGame();
    }
}

// End Game
function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    
    // Update high score
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
        localStorage.setItem('highScore', highScore);
    }
    
    // Show final score
    finalScoreElement.textContent = score;
    
    // Show game over screen
    gameOver.classList.add('show');
    
    // Clear feedback
    feedbackElement.textContent = '';
    
    // Remove active state from virtual keyboard
    const allKeys = document.querySelectorAll('.key');
    allKeys.forEach(key => key.classList.remove('active'));
}

// Restart Game
function restartGame() {
    // Hide game over screen
    gameOver.classList.remove('show');
    
    // Reset timer color
    timerElement.style.color = 'white';
    
    // Start new game
    startGame();
}

// Load high score from localStorage on page load
window.addEventListener('load', () => {
    const savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore) {
        highScore = parseInt(savedHighScore);
        highScoreElement.textContent = highScore;
    }
});