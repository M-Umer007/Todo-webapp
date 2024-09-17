document.addEventListener('DOMContentLoaded', ()=>{

    const addButton = document.getElementById('add-button') as HTMLButtonElement;
    const inputField = document.getElementById('input-field') as HTMLInputElement;
    const taskList = document.getElementById('task-list') as HTMLUListElement;

    addButton.addEventListener('click',()=>{
        const taskText = inputField.value;              //assig inputfield inside content of user into task text

        if (taskText.trim()==='') return;               //if user type nothiong add add return nothing

        const listItem = document.createElement('li')  //creates a new list on add clicking 
        listItem.textContent = taskText;                //assign it to taskText


        // Create Edit Button
        const editButton = document.createElement('button');//creating edit button
        editButton.textContent = 'Edit';                    //button textcontent "Edit"
        editButton.addEventListener('click', () => {        // Button click event
            listItem.innerHTML = '';                            // Clear all content inside the list item
            const newInput = document.createElement('input'); // Create a new input field
            newInput.value = listItem.textContent ?? '';      // Set the input field's value to the current text of the list item                        
            listItem.appendChild(newInput);                  // Append the new input field to the list item
        
            // Create Save Button
            const saveButton = document.createElement('button'); // Create a new button element for saving changes
            saveButton.textContent = 'Save';                      // Set the button's text to "Save"
            saveButton.addEventListener('click', () => {          // Add a click event listener to the Save button
                listItem.textContent = newInput.value;            // Update the list item's text with the input field's value
                listItem.appendChild(editButton);                 // Re-add the Edit button to the list item
                listItem.appendChild(deleteButton);               // Re-add the Delete button to the list item
            });
        
            listItem.appendChild(saveButton);                    // Add the Save button to the list item
        });
        
        const deleteButton = document.createElement('button')   //create delete button
        deleteButton.textContent='Delete';                       // text content 'Delete'
        deleteButton.addEventListener('click',()=>{                // onclick
            taskList.removeChild(listItem);                         //removeList item on click
        })

        //append edit button inside list item
        listItem.appendChild(editButton)  
        //append delete button inside list item                          
        listItem.appendChild(deleteButton);


        //append the list item inside the task list
        taskList.appendChild(listItem);
        
        //now when the add button is clicked remove the textcontent to '' means remove the current content inside input field
        inputField.value='';
    })
})