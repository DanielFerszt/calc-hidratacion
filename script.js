const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

// function calcular(peso){
//     if (peso != ''){
//         let resto = peso
//         let res = 0
//         if (peso > 20){
//             console.log(peso)
//             let calc = resto-20
//             res = res + calc*20
//             resto = resto-calc
//         }
//         console.log('res', res)
//         if (peso > 10){
//             let calc = resto-10
//             res = res + calc*50
//             console.log('calc', calc)
//             resto = resto-calc
//         }
//         res = res + resto*100
        
//         console.log('por hora', res/24)
//         console.log('m + m/2', res*1.5/24)
//         RESULTADO.innerHTML = res + 'cc'
//         RESULTADO.style.display = "block"
//         ERROR.style.display = "none"

//     } else {
//         ERROR.style.display = "block"
//         RESULTADO.style.display = "display"
//     }
// }
