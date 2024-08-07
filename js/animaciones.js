// let animadoizq = document.querySelectorAll(".animadoizq");
let animado = document.querySelectorAll(".animado");
let animadodos = document.querySelectorAll(".animadodos");

// let animadocirc = document.querySelectorAll(".animadocirc");

// function mostrarScrollizq() {
//     let scrollTop = document.documentElement.scrollTop;
//     for (var i=0; i < animadoizq.length; i++){
//         let alturaAnimado = animadoizq[i].offsetTop;
//         if ((alturaAnimado -500) < scrollTop){
            
//             animadoizq[i].style.opacity=1;
//             animadoizq[i].classList.add("mostrarIzquierda");
//         }else {
//             animadoizq[i].style.opacity=0;
//             animadoizq[i].classList.remove("mostrarIzquierda");}
//     }
// }

function mostrarScrollderc() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if ((alturaAnimado-400) < scrollTop) {
            animado[i].style.opacity=1;            
            animado[i].classList.add("mostrarDerecha");
        }
        // if ((alturaAnimado - 500) < scrollTop){
        //     animadoderc[i].style.opacity=1;
        //     animadoderc[i].classList.add("mostrarDerecha");
        // }else {
        //     animadoderc[i].style.opacity=0;
        //     animadoderc[i].classList.remove("mostrarDerecha");}
    }
}
function mostrarScrolldos() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadodos.length; i++){
        let alturaAnimado = animadodos[i].offsetTop;
        if ((alturaAnimado) < scrollTop) {
            animadodos[i].style.opacity=1;            
            animadodos[i].classList.add("mostrarDOS");
        }
    }
}

// function mostrarScrollcirc() {
//     let scrollTop = document.documentElement.scrollTop;
//        for (var i=0; i < animadocirc.length; i++){
//         let alturaAnimado = animadocirc[i].offsetTop;
//         if ((alturaAnimado -500) < scrollTop){
//            animadocirc[i].style.opacity=1;
//           animadocirc[i].classList.add("mostrarCirculo");
//         }else {
//             animadocirc[i].style.opacity=0;
//             animadocirc[i].classList.remove("mostrarCirculo");}
//     }
// }  

// window.addEventListener('scroll', mostrarScrollizq);
window.addEventListener('scroll', mostrarScrollderc);
window.addEventListener('scroll', mostrarScrolldos);

// window.addEventListener('scroll', mostrarScrollcirc);

// btncerrar.addEventListener('click', function(){
//     overlay.classList.remove('active');
//     popup.classList.remove('active');
// });
