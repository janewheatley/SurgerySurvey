//let hiddenMed = document.querySelector('.questionMed');
//let hiddenMedQ = document.querySelector(".hiddenQ");
//let initialH2 = hiddenMedQ.innerHTML;
//
////whenever i call the function, whatever is in the parenthesis is going to be known as element within the function
//function selectMeds(element) {
//    //when you set the variable to element, it enables you to onclick on the thises instead of when you getElementbyId and it only finds the first one
//    let checkBox = element;
//    //    let checkBox = document.getElementById("medType");
//    //    let text = document.getElementById("text");
//
//    if (checkBox.checked == true) {
//        hiddenMed.classList.remove("hidden");
//        let medName = checkBox.value;
//        hiddenMedQ.innerHTML = initialH2 + medName + "?";
//
//
//
//    } else {
//                let hiddenMed = document.querySelector('.questionMed');
//                hiddenMed.classList.add("hidden");
//                hiddenMedQ.innerHTML = initialH2;
//    }
//}
Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


//you can add html into javascript with <>
//what do the backticks do?
//how does ${} work?

function addDropDown(id, title) {
    var newDD = `<div class="container question questionMed" id="div-${id}">
  <h2>Did you need a refill of ${title}?</h2>
  <select class="form-control" id="dropdown-${id}">
                    <option>Select an Option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
</div>`;
    var div = document.getElementById('endOfPage');

    //insert html inside the element, after the last child 
    div.insertAdjacentHTML('beforeend', newDD);
}

function removeDD(id) {
    document.getElementById(id).remove();
}

//whenever i call the function, whatever is in the parenthesis is going to be known as element within the function
function selectMeds(element) {
    //when you set the variable to element, it enables you to onclick on the thises instead of when you getElementbyId and it only finds the first one
    let checkBox = element;

    if (checkBox.checked == true) {
        //calling the function and adding the med name as the attributes
        addDropDown(checkBox.value, checkBox.value);
    } else {
        removeDD('div-' + checkBox.value);
    }
}

let submitClick = document.querySelector(".submit")

submitClick.onclick = function () {
    window.location.href = "submit.html";
}
