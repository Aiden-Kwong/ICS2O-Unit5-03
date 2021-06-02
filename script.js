// This event listener detects when the button is clicked.
document.getElementById('button').addEventListener('click', message)

// The function 'message' displays the value of the id 'input', which is the text field.
function message () {
  alert(document.getElementById('input').value)
}
