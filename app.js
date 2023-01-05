// grabbing all the necessary stuffs
const output = document.getElementById('output')
const cpBtn = document.getElementById('cpBtn')

// copy function
const copyBitch = () => {
	navigator.clipboard.writeText(output.innerText)
	alert(`${output.innerText}`)
}
cpBtn.onclick = () => copyBitch()


function updateClock() {
	const clock = document.getElementById('clock').innerHTML = new Date();
}
    
window.onload = () =>{
  setInterval(updateClock);
}
