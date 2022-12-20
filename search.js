var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var reset = document.querySelector('#reset_button')


//Function to reset the search list
reset.addEventListener('click', function resetFunction() {
    li = document.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        li[i].style.display = "block";
    }
})

//Function to search the list
btn.addEventListener('click', function myFunction() {

    //variable
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById('myInput');

    filter = input.value.toUpperCase();
    filterArray = filter.split(" ");

    //Get the list items

    ul = document.getElementById('myUL');

    li = document.getElementsByTagName('li');

    //clear all the list items

    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }

    //Go through list
    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        txtValue = txtValue.toUpperCase().toUpperCase();

        filterArray2 = txtValue.split(" ");

        var counter = 0;

        //Check how many matches there is
        for (j = 0; j < filterArray.length; j++) {
            if (filterArray.some(term => txtValue.includes(term))) {
                li[i].style.display = "block";
                counter++;
            }
        }
        const intersection = filterArray2.filter(element => filterArray.includes(element));
        li[i].style.order = -1 * intersection.length;
    }
}
)

var input2 = document.getElementById('myInput');

input2.addEventListener("keypress", function (event) {

    var filter, ul, li, a, i, txtValue;

    filter = input2.value.toUpperCase();
    filterArray = filter.split(" ");
    ul = document.getElementById('myUL');
    li = document.getElementsByTagName('li');

    if (event.key === "Enter") {

        //Reset the List
        for (i = 0; i < li.length; i++) {
            li[i].style.display = "none";
        }

        //Go through list
        for (i = 0; i < li.length; i++) {

            a = li[i].getElementsByTagName("p")[0];
            txtValue = a.textContent || a.innerText;
            txtValue = txtValue.toUpperCase().toUpperCase();

            filterArray2 = txtValue.split(" ");

            var counter = 0;

            //Check how many matches there is
            for (j = 0; j < filterArray.length; j++) {
                if (filterArray.some(term => txtValue.includes(term))) {
                    li[i].style.display = "block";
                    counter++;
                }
            }

            const intersection = filterArray2.filter(element => filterArray.includes(element));
            li[i].style.order = -1 * intersection.length;
        }
    }
})

// Get the modal image tag
var modal = document.getElementById("myModal");
console.log(modal);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modalImage = document.getElementById("modal-image");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function galleryFunction1(smallImg) {
    modalImage.src = smallImg.src
    modal.style.display = "block";
    // modalImage.src = src;
    htmlAfter = document.getElementsByTagName('html::after');
    console.log("This is HTML after " + htmlAfter);
    //htmlAfter.style.display = "block";
};