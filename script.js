const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Add new note
addBtn.addEventListener('click', () => {
  const newNoteText = prompt('Enter new note:');
  if (newNoteText) {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <label>${newNoteText}</label>
      <button class="editBtn">✏️</button>
      <button class="deleteBtn">❌</button>
    `;
    todoList.appendChild(li);
    attachEvents(li);
  }
});

// Search notes
searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  Array.from(todoList.children).forEach((li) => {
    const text = li.querySelector('label').textContent.toLowerCase();
    li.style.display = text.includes(searchTerm) ? '' : 'none';
  });
});

// Attach events to new or existing list items
function attachEvents(li) {
  const deleteBtn = li.querySelector('.deleteBtn');
  const editBtn = li.querySelector('.editBtn');

  deleteBtn.addEventListener('click', () => li.remove());

  editBtn.addEventListener('click', () => {
    const label = li.querySelector('label');
    const newText = prompt('Edit note:', label.textContent);
    if (newText) {
      label.textContent = newText;
    }
  });
}

// Attach events to existing list items
Array.from(todoList.children).forEach(attachEvents);
