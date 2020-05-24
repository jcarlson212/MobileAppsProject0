const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //alert('New TODO button clicked!')

  countNode = document.getElementById("item-count")
  count = parseInt(countNode.textContent)
  uncheckedCountNode = document.getElementById("unchecked-count")
  uncheckedCount = parseInt(uncheckedCountNode.textContent)

  count = count + 1
  uncheckedCount = uncheckedCount + 1

  let list = document.getElementById("todo-list")
  let element = document.createElement("li")
  element.className = "todo-container"

  let nameElement = document.createElement("p")
  nameElement.textContent = "item number " + String(count)
  let checkBox = document.createElement("button")
  checkBox.className = "todo-checkbox"
  checkBox.textContent = "Check"
  checkBox.addEventListener("click", (event) => {
    if (element.style.color != "red") {
      uncheckedCountNode = document.getElementById("unchecked-count")
      uncheckedCount = parseInt(uncheckedCountNode.textContent)
      uncheckedCount = uncheckedCount - 1
      uncheckedCountNode.textContent = String(uncheckedCount)
      element.style.color = "red"
    } 
  })
  let deleteElement = document.createElement("button")
  deleteElement.className = "todo-delete"
  deleteElement.textContent = "Delete"
  deleteElement.addEventListener("click", (event) => {
    countNode = document.getElementById("item-count")
    count = parseInt(countNode.textContent)
    count = count - 1
    countNode.textContent = String(count)
    if (element.style.color != "red") {
      uncheckedCountNode = document.getElementById("unchecked-count")
      uncheckedCount = parseInt(uncheckedCountNode.textContent)
      uncheckedCount = uncheckedCount - 1
      uncheckedCountNode.textContent = String(uncheckedCount)
    }


    list.removeChild(element)
    element.remove()
  })

  element.appendChild(nameElement)
  element.appendChild(checkBox)
  element.appendChild(deleteElement)
  list.appendChild(element)


  countNode.textContent = String(count)
  uncheckedCountNode.textContent = String(uncheckedCount)
}
