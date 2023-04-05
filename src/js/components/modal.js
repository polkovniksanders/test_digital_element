const openModal = () => {

  const element = document.querySelector(".open-modal")
  const body = document.querySelector('body')
  const close = document.querySelector(".modal--close")
  const modalBlock = document.querySelector(".modal--content")

  const closeModal = () => {
    document.querySelector(".modal").style.display = "none"
  }

  element.addEventListener("click", function() {
    document.querySelector(".modal-js").style.display = "block"
    body.classList.add('overflow-hidden')
  })

  close.addEventListener("click", function () {
    closeModal()
    body.classList.remove('overflow-hidden')
  })

  window.onclick = function (event) {
    if (event.target.contains(modalBlock) && event.target !== modalBlock) {
      closeModal()
    }
  }

}

export default openModal
