/*
userinputs : {
"PRIMER_SIZE_RANGES" : {
     "DEFAULT" : (MIN, MAX, OPT),
     "HIGH_GC" : (MIN, MAX, OPT),
},
"PRIMER_MIN_TM" : MIN,
"PRIMER_MAX_TM":  MAX,
"PRIMER_OPT_TM" : OPT,
"AMPLICON_SIZE_MIN" : MIN,
"AMPLICON_SIZE_MAX" : MAX,
},

"nameOutput" : name,

'FileFasta : .fasta, .fa
 */

/*function requete(fichier){
    var demo = document.getElementById("demo");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (){
        //console.log(this);

        if(this.readyState == 4 && this.status == 200){
            demo.innerHTML = this.responseText;
        }else  if(this.readyState == 4 && this.status == 404) {
            alert('Erreur 404 :/');
        }
    };

    xhr.open("GET", "http://127.0.0.1:5000/primal", true);
    xhr.responseType = "text";
    xhr.send();
}

document.getElementById("Schemeform").addEventListener("submit", function (e){
    e.preventDefault();

    var fichierArecupérer = document.getElementById("name_scheme").value;
    console.log(fichierArecupérer);
    requete(fichierArecupérer);

    return false;
})
*/

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

form.onsubmit = function (event){
    var xhr = new XMLHttpRequest();
    var data = new FormData(form);

    let config = {
        "PRIMER_SIZE_RANGES": {
            "DEFAULT": (PRIMER_SIZE_MIN.value, PRIMER_SIZE_MAX.value, PRIMER_SIZE_OPT.value),
            "HIGH_GC": (PRIMER_SIZE_MIN.value, PRIMER_SIZE_MAX.value, PRIMER_SIZE_OPT.value),
        },
        "PRIMER_MIN_TM": PRIMER_MIN_TM.value,
        "PRIMER_MAX_TM": PRIMER_MAX_TM.value,
        "PRIMER_OPT_TM": PRIMER_OPT_TM.value,

        "AMPLICON_SIZE_MIN": AMPLICON_SIZE_MIN.value,
        "AMPLICON_SIZE_MAX": AMPLICON_SIZE_MAX.value,
    }

    // Add extra data to form before submission

    data.append("Programme_name", nom_v.value);
    data.append("config", JSON.stringify(config));
    // data.append("FASTANAME", )

    // open Request
    xhr.open('POST', 'http://127.0.0.1:5000/primal');

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
