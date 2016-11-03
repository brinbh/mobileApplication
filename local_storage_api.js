function validateForm(){
                var x = Number(document.getElementById("bgColor").value);
                if (x == null || x == ""){
                    alert("A number of 6 digits must be entered.")
                    return false;
                }
                else {
                    document.getElementById("output").innerHTML = x;
                    createStorage();
                }
            }
function createStorage(){
    var bgColorForm = document.getElementById('bgColor');
    document.getElementById("output").innerHTML = "createStorage() called";
    if(!localStorage.getItem('bgColor')){
        document.getElementById("output").innerHTML = "Call populateStorage()";
        populateStorage();    
    }
    else {
        setStyles();
    }

}

function populateStorage(){
    //Create new data items; two arguments: key of data and value
    localStorage.setItem('bgColor',document.getElementById('bgColor').value);
    
}

function setStyles(){
    document.getElementById("output").innerHTML = "setStyles() called";
    //Retrieve data from local storage; takes key of data item
    var currentColor = localStorage.getItem('bgColor');
    
    //Set values displayed in the form; keep in sync with loaded pages
    document.getElementById('bgColor').value = currentColor;
    
    //Update the styles on page
    htmlElem.style.backgroundColor = '#' + currentColor;
    
}

//onchage handles each element as soon as it is entered into the form
bgColorForm.onchange = populateStorage;




