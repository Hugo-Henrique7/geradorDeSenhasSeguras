import  {  nanoid  }  from  'nanoid';
import "./style.css"

const passwordBtnEl = document.querySelector("button");
const displayPassWordEl = document.querySelector("h2");

passwordBtnEl.addEventListener("click", () => {
  const randomPassword = nanoid()
  displayPassWordEl.innerHTML = randomPassword
}) 