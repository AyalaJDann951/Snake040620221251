document.addEventListener('DOMContentLoaded', (){
  const squares = document.querySelectorAll('.grid div')
  const grid = document.querySelector('.grid')
  const scoreDisplay = document.querySelector('.countScore')
  const startBtn = document.querySelector('.start')
  const livesDisplay = document.querySelector('.countLives')
  
  const  WIDTH = 30
  let currentIndex
  let appleIndex
  let currentSnake
  let direction
  let score, lives, speed, intervalTime, interval, stopGame
  
  lives = 0
  score = 0

  function control(e){
    alert(e.keyCode)
  }

  document.addEventListener('keydown', control)
  startBtn.addEventListener('click')
})
