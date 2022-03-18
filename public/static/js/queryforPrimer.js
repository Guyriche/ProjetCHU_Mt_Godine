// get the form from DOM (Document object model)
var form = document.getElementById("Scheme-form");
var nom_v = document.getElementById("name_scheme");

var PRIMER_MIN_TM  = document.getElementById("PrimerTmMin");
var PRIMER_MAX_TM = document.getElementById("PrimerTmMax");
var PRIMER_OPT_TM = document.getElementById("PrimerTmOpt");

var PRIMER_SIZE_MIN = document.getElementById("PrimerSizeMin");
var PRIMER_SIZE_MAX = document.getElementById("PrimerSizeMax");
var PRIMER_SIZE_OPT = document.getElementById("PrimerSizeOpt");

var AMPLICON_SIZE_MIN = document.getElementById("ProductSizeMin");
var AMPLICON_SIZE_MAX = document.getElementById("ProductSizeMax");

var FASTAFILE = document.getElementById("file-scheme");
var CONSENSUS = document.getElementById("consensus");
var OVERLAP = document.getElementById("targetoverlap");
//var MODE = document.querySelector("input[name='Scheme']:checked");
var MODE = document.getElementById("Normal");

form.onsubmit = function (event){
    var xhr = new XMLHttpRequest();
    var data = new FormData(form);
    var consensus = $(CONSENSUS).val()

    let config = {
        "PRIMER_SIZE_RANGES": {
            "DEFAULT": [parseInt(PRIMER_SIZE_MIN.value), parseInt(PRIMER_SIZE_MAX.value), parseInt(PRIMER_SIZE_OPT.value)],
            "HIGH_GC": [parseInt(PRIMER_SIZE_MIN.value), parseInt(PRIMER_SIZE_MAX.value), parseInt(PRIMER_SIZE_OPT.value)],
        },
        "PRIMER_MIN_TM": parseInt(PRIMER_MIN_TM.value),
        "PRIMER_MAX_TM": parseInt(PRIMER_MAX_TM.value),
        "PRIMER_OPT_TM": parseInt(PRIMER_OPT_TM.value),

        "AMPLICON_SIZE_MIN": parseInt(AMPLICON_SIZE_MIN.value),
        "AMPLICON_SIZE_MAX": parseInt(AMPLICON_SIZE_MAX.value),
        "CONSENSUS" : consensus,
        "TARGET_OVERLAP" : parseInt(OVERLAP.value),
    }

    // Add extra data to form before submission

    var mode = MODE.checked ? "False" : "True";
    data.append("ProgrammeName", nom_v.value);
    data.append("Highgc", mode);
    data.append("Config", JSON.stringify(config));
    var files_list = [];
    for (let i = 0; i < FASTAFILE.files.length; i++){
        data.append(FASTAFILE.files[i].name, FASTAFILE.files[i]);
        files_list.push(FASTAFILE.files[i].name);
    }
    data.append("Files", files_list)
    //data.append("FastaName", FASTAFILE.files);
    console.log(nom_v.value);
    console.log(JSON.stringify(config));
    console.log((FASTAFILE.files));
    console.log(mode);

    // open Request
    xhr.open('POST', 'http://127.0.0.1:5000/primal');

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
                $('#myModal').modal('hide');
            }
            form.reset(); // reset form after AJAX Success.
        }
    }

    // Dont Submit the Form
    return false;
}

/*Fonction de validation du Fichier FASTA ENvoyer */

function Validation(){
    var FastaName = document.getElementById("file-scheme");
    var valeur = FastaName.value;
    var extension = /(\.fasta |\.fa)$/i;

    if(!extension.exec(valeur)){
        alert("Format de fichier non Valide");
        FastaName.value = "";
        return false;
    }/* else {
        if(FastaName.files && FastaName.files[0]){
            //alert('Format de fichier valide');
        }
    }*/
}

/*document.getElementById("Scheme-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var data = new FormData(this);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if(this.readyState == 4 && this.status == 200){
            console.log(this.response);
        }else if (this.readyState == 4){
            alert("Une erreur est survenu... ");
        }
    };

    xhr.open("POST", "http://127.0.0.1:5000/primal");
    xhr.responseType = "json";
    xhr.send(data);

    return false;
});*/

 // Selection de mon Button de validation

/*let btnValidation = document.querySelector("button");
console.log(btnValidation);

btnValidation.addEventListener("click", ()=> {

    // recuperate the Data of formulate

    // stocker les saisies dans le local Storage
    localStorage.setItem("Nom du Programme", document.querySelector("#name_scheme").value);
    console.log(document.querySelector("#name_scheme").value)

    localStorage.setItem("Primer Size Min", document.querySelector("#PrimerSizeMin").value);
    localStorage.setItem("Primer Size Opt", document.querySelector("#PrimerSizeOpt").value);
    localStorage.setItem("Primer Size Max", document.querySelector("#PrimerSizeMax").value);
    localStorage.setItem("Primer Tm Min", document.querySelector("#PrimerSizeMin").value);
    localStorage.setItem("Primer Tm Opt", document.querySelector("#PrimerSizeOpt").value);
    localStorage.setItem("Primer Tm Max", document.querySelector("#PrimerSizeMax").value);

    localStorage.setItem("Product Size Min", document.querySelector("#ProductSizeMin").value);
    localStorage.setItem("Product Size Max", document.querySelector("#ProductSizeMax").value);

});
*/
