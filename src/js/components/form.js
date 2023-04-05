const formModule = () => {

  const form = document.querySelector('.form')
  const emailField = document.querySelector('.email-field')
  const emailInput = document.querySelector('.email')
  const errorEmail = document.querySelector('.error-mail')
  const nameField = document.querySelector('.name-field')
  const nameInput = document.querySelector('.name')
  const errorName = document.querySelector('.error-name')

  function checkEmail () {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (emailInput?.value?.length < 3) {
      return errorEmail.innerHTML = `<p>Too shorten email</p>`
    }
    if (!emailInput.value.match(emailPattern)) {
      return errorEmail.innerHTML = `<p>Please enter a valid email</p>`
    }
    emailField.classList.remove('invalid')
  }

  function checkName (e) {
    const minNameLength = 2
    const namePattern = /^[a-zA-Z ]*$/
    if (nameInput && nameInput.value <= minNameLength) {
      return (
        errorName.innerHTML = `<p>Too shorten name</p>`,
        nameInput.style.border = '1px solid red'
      )
    }
    if (!nameInput.value.match(namePattern)) {
      return (
        errorName.innerHTML = `<p>Please enter only text</p>`,
        nameInput.style.border = '1px solid red'
      )
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkEmail()
    checkName(e)
  })

}



export default formModule
