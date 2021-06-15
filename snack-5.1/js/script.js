// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var scuderia = [
    {   
        peso : 40,
        nome : 'bruno'
        
    },
    {   peso : 60,
        nome : 'mario'
        
    },
    {   peso : 50,
        nome : 'franco'
        
    },
    {   peso : 20,
        nome : 'carlo'
        
    }

];


var pesoMinimo = scuderia[0];


for ( var i = 1; i < scuderia.length; i++){
    if (scuderia[i].peso < pesoMinimo.peso ){
        pesoMinimo = scuderia[i];
    }
}

console.log(pesoMinimo);