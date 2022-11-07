
const btn = document.querySelector(".btn")
const ekr = document.querySelector(".ekr")
const btnr = document.querySelector(".btnr")
const div = document.querySelector(".div")

btn.addEventListener('click', () => {
    const abs = Math.round(Math.random() * 11)
    if (abs === 0) { ekr.textContent = "=============> Права рука кобаска"}
  if (abs === 1) { ekr.textContent = "=============> Права рука оливка" } 
     if (abs === 2) { ekr.textContent = "=============> Права рука сир"}
      if (abs === 3) { ekr.textContent = "=============> Ліва рука кобаска"}
       if (abs === 4) { ekr.textContent = "=============> Ліва рука оливка"}
    if (abs === 5) { ekr.textContent = "=============> Ліва рука сир" }
    if (abs === 6) { ekr.textContent = "=============> Права нога кобаска" }
     if (abs === 7) { ekr.textContent = "=============> Права нога оливка"}
      if (abs === 8) { ekr.textContent = "=============> Права нога сир"}
    if (abs === 9) { ekr.textContent = "=============> Ліва нога кобаска" }
    if (abs === 10) { ekr.textContent = "=============> Ліва нога оливка" }
    if (abs === 11) { ekr.textContent = "=============> Ліва нога сир" }
    
})

function getRandomHexColor() {
  const randomaizer = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomaizer
}
  btnr.addEventListener('click', ()  => {
    let color = getRandomHexColor();
    // ekr.style.color = color;
    div.style.backgroundColor = color;
  })

