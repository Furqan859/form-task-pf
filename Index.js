

function handleFormSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let formJSON = Object.fromEntries(data.entries());
    let dataObj = JSON.stringify(formJSON,null,2);
    localStorage.setItem('dataObj', dataObj);

}

let form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);


function fileValidation(field) {
    var fileInput = document.getElementById('uploadFile').value;
    var allowExtension = /(\.pdf|\.doc)$/i;
    if (!allowExtension.exec(fileInput)) {
        alert("failed");
        field.form.reset();

        return false;
    }

}


function dateStartChange(extension) {
    var EndDate = document.getElementById('end').value;
    var StartDate = document.getElementById('start').value;
    var extension = StartDate > EndDate;
    if (!extension) {
        alert("start date is less than end date");
        date.form.reset();
        return false;

    }
}

function dateEndChange(extension) {
    var EndDate = document.getElementById('end').value;
    var StartDate = document.getElementById('start').value;
    var extension = StartDate < EndDate;
    if (!extension) {
        alert("end date is greater than start date");
        date.form.reset();
        return false;

    }
}




