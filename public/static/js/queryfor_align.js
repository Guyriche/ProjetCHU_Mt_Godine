// get the form from DOM (Document object model)

var form = document.getElementById("align");
var nom_v = document.getElementById("nameDocumentOut");

var refs = document.getElementById("refs");
var read = document.getElementById("reads");


form.onsubmit = function (event){
    var xhr = new XMLHttpRequest();
    var data = new FormData(form);

    // Add extra data to form before submission

    data.append("NameOutput", nom_v.value);
    // console.log(nom_v.value)
    var files_refs= [];
    for (let i = 0; i < refs.files.length; i++){
        data.append(refs.files[i].name, refs.files[i]);
        files_refs.push(refs.files[i].name);
    }
    data.append("Refs", files_refs);
    data.append("Read", read.files[0]);

    console.log(files_refs)

        // open Request
    xhr.open('POST', 'http://127.0.0.1:8080/align');

    //Send the form data
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.response == 'Done'){
/*                $('#myModal').addClass("loader");

                setTimeout(function (){
                    $('#myModal').addClass("finished");
                    $('#myModal').removeClass("loader");
                })*/
                $('#myModalalign').modal('hide');
            }
            //form.reset(); // reset form after AJAX Success.
        }
    }

    // Dont Submit the Form
    return false;

}

