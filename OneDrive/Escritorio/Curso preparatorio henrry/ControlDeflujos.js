function Viajar(destino) {
    if ( destino === 'BRASIL') {
console.log("Gire a la IZQUIERDA");
}
else if (destino === 'ARGENTINA') {
console.log("Girar a la DERECHA");
} else { console.log('nos perdimos');
}
}

Viajar('prueba')
Viajar('BRASIL')
Viajar('ARGENTINA')

function puedemanejar(edad) {
    if (edad >= 18) {
        console.log('true');
    } else { console.log ('false');
}
}

puedemanejar(17)