// document.getElementById("count-el").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")


function increment() {
   count += 1
   countEl.innerText = count
}

function save() {
   let prev_count =  count + " - "
   saveEL.textContent += prev_count
   countEl.textContent = 0
   count = 0
}
