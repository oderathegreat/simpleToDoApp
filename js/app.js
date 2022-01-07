let addToDoButton = document.getElementById("addToDo"); 
let toDo_Container = document.getElementById("todocontainer");
let inputtxtfield = document.getElementById("inputField");



addToDoButton.addEventListener('click', function(){

    var paragraph = document.createElement('p');
    paragraph.innerText =  document.getElementById("inputField").value;
    toDo_Container.appendChild(paragraph);
    inputtxtfield.value = "";

    //paragraph.innerText = "";


    //adds line - through to the list
    paragraph.addEventListener('click', function(){

        paragraph.style.textDecoration = "line-through";
    
    });

    //double click removes item from the list
    paragraph.addEventListener('dblclick', function(){

     toDo_Container.removeChild(paragraph);
     

    });
    

   // console.log('Some click event is happeing');
})

//highlight


