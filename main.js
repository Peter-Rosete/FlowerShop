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