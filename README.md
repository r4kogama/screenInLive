# API de captura de pantalla

La API de captura de pantalla incorpora la Media Capture y Streams API permitiendo al usuario seleccionar una pantalla o parte de una pantalla (como una ventana) para capturar como una transmisión de video. Esta transmisión se puede grabar o compartir con otras personas a través de la red.

## Conceptos

Esta api presenta unicamente un metodo **MediaDevices.getDisplayMedia()**, dandole al usuario la posibiliad de seleccionar la pantalla o partes de la pantalla.

```javascript
//getDisplayMedia() llama a la instancia de Media navigator.mediaDevices:

let capturaEnVivo = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

//displayMediaOptions propiedades restrictivas

```
Este metodo devuelve una `promise` esta se resuelve con un MediaStream que contiene el área de visualización seleccionada por el usuario. La MediaStrem es una interfaz que representa un flujo de contenido de pistas multimedia, como puede ser pistas de vídeo o audio. 


## Agregar propiedades restrictivas

### MediaTrackConstraints

La manera en que quieres que se vea la transmision:
- Si se desea que se vea el cursor cuando esta en movimiento o siempre visible.
- El tipo de pantalla a capturar.
- Si la pantalla a trasmitir esta fuera del pantalla o no es visible en pantalla. Se configura de esta manera como valor true.

### MediaTrackSettings

Las propiedades constraints tienen sus ajustes como en el caso del cursor donde se puede configurar tres estados: **always, motion o never**.
La superficie a visualizar mediante los valores: **application, browser, monitor, o window**.
O el valor boleano **True** si lo que se esta capturando no se corresponde directamente con una sola área de visualización en pantalla.

### MediaTrackSupportedConstraints

Admision a los 3 tipos de resticciones mediante booleanos **true**

***Ejemplo de Constraints:***

```javascript
let displayMediaOptions = {
            video: {
                cursor: "always"
            },
            audio: {
                 echoCancellation: true,
                 noiseSuppression: true,
                 sampleRate: 44100
            }
        };
```
