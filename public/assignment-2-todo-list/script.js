// Select the page elements once so event handlers can update them as needed.
const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const taskError = document.querySelector('#task-error')
const taskList = document.querySelector('#task-list')
const emptyState = document.querySelector('#empty-state')
const taskCount = document.querySelector('#task-count')

let nextTaskId = 1

// Keep the empty message and task count in sync with the list in the DOM.
function updateListSummary() {
  const totalTasks = taskList.children.length
  emptyState.hidden = totalTasks > 0
  taskCount.textContent = `${totalTasks} ${totalTasks === 1 ? 'task' : 'tasks'}`
}

// Create a list item and its controls with DOM methods, then add it to the page.
function createTask(taskText) {
  const taskId = nextTaskId
  nextTaskId += 1

  const listItem = document.createElement('li')
  listItem.className = 'task-item'

  const checkbox = document.createElement('input')
  checkbox.className = 'task-checkbox'
  checkbox.type = 'checkbox'
  checkbox.id = `task-${taskId}`
  checkbox.setAttribute('aria-label', `Complete task: ${taskText}`)

  const taskLabel = document.createElement('label')
  taskLabel.className = 'task-label'
  taskLabel.htmlFor = checkbox.id
  taskLabel.textContent = taskText

  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-button'
  deleteButton.type = 'button'
  deleteButton.textContent = 'Delete'
  deleteButton.setAttribute('aria-label', `Delete task: ${taskText}`)

  // A checkbox toggles the completed style on its own list item.
  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('is-complete', checkbox.checked)
  })

  // Removing a task also refreshes the empty message and task count.
  deleteButton.addEventListener('click', () => {
    listItem.remove()
    updateListSummary()
    taskInput.focus()
  })

  listItem.append(checkbox, taskLabel, deleteButton)
  taskList.append(listItem)
  updateListSummary()
}

// Listen for form submission so Enter and the Add Task button both work.
taskForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const taskText = taskInput.value.trim()

  if (taskText === '') {
    taskError.textContent = 'Please enter a task before adding it.'
    taskInput.setAttribute('aria-invalid', 'true')
    taskInput.focus()
    return
  }

  taskError.textContent = ''
  taskInput.removeAttribute('aria-invalid')
  createTask(taskText)
  taskForm.reset()
  taskInput.focus()
})

// Clear the validation message as soon as the user starts correcting the input.
taskInput.addEventListener('input', () => {
  if (taskInput.value.trim() !== '') {
    taskError.textContent = ''
    taskInput.removeAttribute('aria-invalid')
  }
})

// Set the initial empty state and count when the page loads.
updateListSummary()
