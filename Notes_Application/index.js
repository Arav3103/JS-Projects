const containerElement = document.querySelector(".notes-container");
const createNoteElement = document.querySelector("#add-note");



function checkStorage(){
    let oldNotes = localStorage.getItem('Notes');
    containerElement.innerHTML = oldNotes;
}
checkStorage();
createNoteElement.addEventListener('click',()=>{
    let noteBox = document.createElement('div');
    let inputBoxElement = document.createElement('p');
    let deleteElement = document.createElement('i');
    noteBox.className = 'note';
    inputBoxElement.className = 'input-box';
    inputBoxElement.setAttribute('contenteditable',"true");
    deleteElement.className = 'fa-solid fa-trash';
    noteBox.appendChild(inputBoxElement);
    noteBox.appendChild(deleteElement);
    containerElement.appendChild(noteBox); 
}) 

containerElement.addEventListener('click',(e)=>{
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        const notesList = document.querySelectorAll(".input-box");
        notesList.forEach(note =>{
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


function updateStorage(){
    localStorage.setItem('Notes',containerElement.innerHTML);
}

document.addEventListener('keydown',event=>{
    if(event.key === "Enter"){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})