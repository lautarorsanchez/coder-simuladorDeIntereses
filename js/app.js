// Funcion para determinar presupuesto

function obtenerPresupuesto(){
    let presupuesto = parseInt(prompt('💸💳 Simule su crédito 💳💸 \n Ingresa tu presupuesto de crédito: '))
    while(isNaN(presupuesto)){
        presupuesto = parseInt(prompt('Ingresa un presupuesto válido'))
    }
    return presupuesto
}

// Llamada a la función presupuesto

const presupuesto = obtenerPresupuesto()

// Función que solicita precio al usuario
function obtenerPrecio(){
    let precio = parseInt(prompt('Ingrese el precio de su producto: '))
    while(isNaN(precio)){
        precio = parseInt(prompt('Ingresa un precio válido'))
    }

    while(presupuesto < precio){
        precio = parseInt(prompt('Tu presupuesto es insuficiente para esta compra, elige otro monto: '))
    }
    return precio
}

// Llamada a la función precios

const precio = obtenerPrecio()

// Funcion para obtener cantidad de cuotas 
function cantidadCuotas(){
    let cuotas = parseInt(prompt('Ingrese la cantidad de cuotas: \n 3 Cuotas (5% Interés) \n 6 Cuotas (10% Interés) \n 9 Cuotas (15% Interés) \n 12 Cuotas (20% Interés)'))
    while (!(cuotas == 3 || cuotas == 6 || cuotas == 9 || cuotas == 12)) {
        cuotas = parseInt(prompt("Debe ingresar un número de cuotas válido (3, 6, 9, o 12)"))
          }
    return parseInt(cuotas)
} 

// Llamada a la funcion cuotas    

const cuotas = cantidadCuotas()

// Funcion para determinar Interés       
function calcularInteres(nCuotas){
    let interes
    switch (nCuotas) {
        case 3: 
            interes = 105 
            break;
        case 6:
            interes = 110
            break;
        case 9:
            interes = 115
            break;
        case 12:
            interes = 120
            break;    
        default:
           // alert('Ingrese numero valido')
            break;
    }
        return interes     
}


// Llamada a la funcion interes
    
 const intereses = calcularInteres(cuotas)
 
 // Funcion que calcula el interes final
 
function matematica(cuotas, precio, interes, presupuesto){
    while (presupuesto < (precio / 100) * interes){
        alert('Con los intereses, tu presupuesto no alcanza para este producto 😢')
        break
    } 
    
    alert(`Calculadora de crédito para ${cuotas} cuotas:
     Presupuesto: ${presupuesto}
     Precio inicial: ${precio}
     Precio total con intereses: ${(precio / 100) * interes}
     Precio de las cuotas: ${((precio / 100) * interes) / cuotas}
     Mejor efectivo 😉`)
}
    
// Llamada a la funcion que calcula el interes
    
matematica(cuotas, precio, intereses, presupuesto)
    


/*

ALGORITMO
1- Pedirle al usuario que ingrese el precio de su producto (funcion isNan?)
2- Pedirle al usuario que ingrese la cantidad de cuotas en las que desea abonar (3,6,9,12) si ingresa otro número, repetir
3- Calcular el precio que ingresó el usuario + interés y mostrar valor de cuota y valor total

*/


