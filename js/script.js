let audio = document.querySelector('.audio')
let play = document.querySelector('.play')
let name1 = 'bass.wav'
play.classList.add('play1')
audio.setAttribute('src', name1)

function playMusic() {
  play.classList.remove('play1')
  play.classList.add('pause')
  audio.play()
}

function pauseMusic() {
  play.classList.remove('pause')
  play.classList.add('play1')
  audio.pause()
}

play.addEventListener('click',() => {
  
  if(play.classList.contains('play1')) {
    playMusic()
  } else {
    pauseMusic()
  }
  
})