document.querySelector('.container').addEventListener('click', (e) => {
  let target = e.target
  if (target.classList.contains('card')) {
    document.querySelector('.active').classList.remove('active')
    target.classList.add('active')
  }
})