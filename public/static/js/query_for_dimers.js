// get the form from DOM (Document object model)

var form = document.getElementById("dimers");
var nom_v = document.getElementById("name_output_Dimers");

var TSVFILE = document.getElementById("tsv_file");

form.onsubmit = function (event){
    var xhr = new XMLHttpRequest();
    var data = new FormData(form);

    // Add extra data to form before submission

    data.append("ProgrammeName", nom_v.value);
    // console.log(nom_v.value)
    var files_list_tsv = [];
    for (let i = 0; i < TSVFILE.files.length; i++){
        data.append(TSVFILE.files[i].name, TSVFILE.files[i]);
        files_list_tsv.push(TSVFILE.files[i].name);
    }
    data.append("Files", files_list_tsv)
/*    console.log(nom_v.value);
    console.log((TSVFILE.files));*/

        // open Request
    xhr.open('POST', 'http://127.0.0.1:5000/dimer');

    //Send the form data
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if(xhr.readyState == XMLHttpRequest.DONE){
            form.reset(); // reset form after AJAX Success.
        }
    }

    // Dont Submit the Form
    return false;

}