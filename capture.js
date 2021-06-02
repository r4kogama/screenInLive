

let screenVideo = document.getElementById('video');


const initCapture = async () => {

    // getDisplayMedia-> devuelve una promesa que se resuelve en una
    // transmisión que contiene el contenido de la pantalla en vivo.
    try {
        //especificar qué tipos de pistas deben incluirse en la devolución MediaStream(interfaz que representa el flujo de contenido multimedia), 
        //asi como sus restrincciones audio o video
        var displayMediaOptions = {
            video: {
                cursor: "always"
            },
                audio: false
        };
        //srcObject -> propiedad de la HTMLMediaElement para admitir audio  y video
        screenVideo.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        console.dir(screenVideo);
    } catch (err) {
        console.error("Error: " + err);
    }


}


const stopCapture = () => {
    //devuelve un array  de lista de pistas de la captura en vivo
    let tracks = screenVideo.srcObject.getTracks();
    //detiene cada pista con el metodo stop
    tracks.forEach(track => track.stop());
    //la tranmision se desconecta
    screenVideo.srcObject = null;
}

const initEvents = () => {
    document.getElementById('start').addEventListener('click', initCapture, false);
    document.getElementById('stop').addEventListener('click', stopCapture, false);
}

window.addEventListener('load', initEvents);