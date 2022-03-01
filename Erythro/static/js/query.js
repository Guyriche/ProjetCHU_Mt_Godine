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
console.log(nom_v);

form.onsubmit = function (event){
    var xhr = new XMLHttpRequest();
    var data = new FormData(form);

    // Add extra data to form before submission

    data.append("Programme_name", nom_v.value);

    // open Request
    xhr.open('POST', 'http://127.0.0.1:5000/primal');

    //Send the form data
    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState == XMLHttpRequest.DONE){
            form.reset(); // reset form after AJAX Success.
        }
    }

    // Dont Submit the Form
    return false;
}

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
