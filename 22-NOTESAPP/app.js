document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-btn');
  const noteTitleInput = document.getElementById('add-note-title');
  const noteTextInput = document.getElementById('note-text');
  const yourNoteTitle = document.querySelector('.your-note-title');
  const yourNoteText = document.querySelector('.your-note-text');
  const clearAllBtn = document.querySelector('.clearAll');
  const clearBtn = document.querySelector('.clear');

  let nextNoteId = getNextNoteId();

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const noteObj = {
      idKey: nextNoteId,
      inputTitle: noteTitleInput.value,
      idNote: nextNoteId,
      noteText: noteTextInput.value,
    };

    localStorage.setItem(`noteKey_${nextNoteId}_note_${nextNoteId}`, JSON.stringify(noteObj));

    yourNoteTitle.textContent = noteObj.inputTitle;
    yourNoteText.textContent = noteObj.noteText;
    noteTitleInput.value = '';
    noteTextInput.value = '';

    nextNoteId++;
  });

  clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    yourNoteTitle.textContent = '';
    yourNoteText.textContent = '';
    nextNoteId = 1;
  });

  clearBtn.addEventListener('click', () => {
    localStorage.removeItem(`noteKey_${nextNoteId - 1}_note_${nextNoteId - 1}`);
    yourNoteTitle.textContent = '';
    yourNoteText.textContent = '';
    nextNoteId--;
  });

  function getNextNoteId() {
    let maxNoteId = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('noteKey_')) {
        const parts = key.split('_');
        const noteId = parseInt(parts[2]);
        if (noteId > maxNoteId) {
          maxNoteId = noteId;
        }
      }
    }
    return maxNoteId + 1;
  }

  // Edit button
  const editBtn = document.querySelector('.edit');
  editBtn.addEventListener('click', () => {
    noteTitleInput.value = yourNoteTitle.textContent;
    noteTextInput.value = yourNoteText.textContent;
    localStorage.removeItem(`noteKey_${nextNoteId - 1}_note_${nextNoteId - 1}`);
    yourNoteTitle.textContent = '';
    yourNoteText.textContent = '';
    nextNoteId--;
  });

    // // Load the latest note on page reload
    // const latestNoteKey = `noteKey_${nextNoteId - 1}_note_${nextNoteId - 1}`;
    // const latestNote = localStorage.getItem(latestNoteKey);
    // if (latestNote) {
    //   const parsedNote = JSON.parse(latestNote);
    //   yourNoteTitle.textContent = parsedNote.inputTitle;
    //   yourNoteText.textContent = parsedNote.noteText;
    // }
});
