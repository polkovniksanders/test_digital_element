import '../sass/index.scss' 
import openModal from "./components/modal"
import formModule from "./components/form"


//init after DOM
document.addEventListener('DOMContentLoaded', (e)=> {
  openModal()
  formModule()
})
