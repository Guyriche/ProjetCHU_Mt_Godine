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

window.addEventListener('load', function (){
    var nomProgramme = document.getElementById("name-scheme");
    var file = {
        dom : document.getElementById("file"),
        binary : null
    };

    // API fileReader pour accéder au contenu du fichier

    var reader = new FileReader();

    reader.addEventListener("load", function (){
        file.binary = reader.result;
    });

    // si le fichier est deja choisi alors on doit le lire directement
    if(file.dom.files[0]) {
        reader.readAsBinaryString(file.dom.files[0]);
    }

    // sinon lisons le fichier une fois que l'user l'aurai charger
    file.dom.addEventListener("change", function () {
        if(reader.readyState == FileReader.LOADING){
            reader.abort();
        }
        reader.readAsBinaryString(file.dom.files[0]);
    });

    // Fonction principal : SendData

    function sendData(){
        console.log('coucou')
        // s'il y a un fichier sélectionner, attendre sa lecture
        // sinon on retarde l'exécution de la fonction

        if(!file.binary && file.dom.files.length > 0){
            setTimeout(sendData, 10);
            return;
        }

        // pour construire notre requête de données de formulaire en plusieurs parties
        // nous avons besoin d'une instance de XMLHTTPRequest

        var XHR = new XMLHttpRequest();

        var boundary = "blob";

        var data="";

        // si l'user à sélectionner un fichier,
        if(file.dom.files[0]) {
            // Lancer une partie de la request du corps

            data += "--" + boundary + "\r\n";

            data += 'content-disposition: form-data';
            +'name = "' + file.dom.name + '"; '
            + 'filename = "' + file.dom.files[0].name + '"\r\n';

            data += 'Content-Type: ' + file.dom.files[0].type + '\r\n';

            data += '\r\n';

            data += file.binary + '\r\n';
        }

            // pour les données du nom du programme

            data += "--" + boundary + "\r\n";

            data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
            data += text.value + "\r\n";

            data += "--" + boundary + "--";

            XHR.addEventListener('load', function (event){
                alert('Ouais ! Données expédiées et réponse chargée.');
            });

            XHR.addEventListener('error',function (event){
                alert('Oups! Queslque chose s\'est mal passé.');
            });

            XHR.open('POST', 'https:/example.com/cors.php');

            XHR.setRequestHeader('Content-Type', 'multipart/form-data; boundatry=' +boundary);

            XHR.send(data);

    }
        var form = document.getElementById("form");

        form.addEventListener('submit', function (event){
            console.log('tototo')
            event.preventDefault();
            sendData();
        });
    });