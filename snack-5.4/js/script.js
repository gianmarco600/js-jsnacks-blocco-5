// Crea un array di 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var zucchine = [
    {
        nome : 'var1',
        peso : 1,
        lunghezza : 7
    },
    {
        nome : 'var2',
        peso : 2,
        lunghezza : 12
    },
    {
        nome : 'var3',
        peso : 3,
        lunghezza : 10
    },
    {
        nome : 'var4',
        peso : 4,
        lunghezza : 30
    },
    {
        nome : 'var5',
        peso : 5,
        lunghezza : 14
    },
    {
        nome : 'var6',
        peso : 6,
        lunghezza : 9
    },
    {
        nome : 'var7',
        peso : 7,
        lunghezza : 15
    },
    {
        nome : 'var8',
        peso : 8,
        lunghezza : 34
    },
    {
        nome : 'var9',
        peso : 9,
        lunghezza : 56
    },
    {
        nome : 'var10',
        peso : 10,
        lunghezza : 45
    },
];

var zucchineG = [];
var zucchineP = [];
document.getElementById('output1').innerHTML = ' lista zucchine corte ';
document.getElementById('output2').innerHTML = ' lista zucchine corte ';
for (var i = 0; i < zucchine.length; i++){
    if (zucchine[i].lunghezza < 15){
        zucchineP.push(zucchine[i]);
        document.getElementById('output1').innerHTML +='<li>' + zucchine[i].nome + '</li>';
    }
    else{
        zucchineG.push(zucchine[i]);
        document.getElementById('output2').innerHTML +='<li>' + zucchine[i].nome + '</li>';
    }
}
console.log(zucchineP);
console.log(zucchineG);

function sum(array){
    var tot =0;
    for (var i = 0; i < array.length; i++){
        tot += array[i].peso;
    }
    return tot;
}

document.getElementById('print1').innerHTML= 'il peso totale delle zucchhine più lunghe di 15 cm è = ' + sum(zucchineG);
document.getElementById('print2').innerHTML= 'il peso totale delle zucchhine più corte di 15 cm è = ' + sum(zucchineP);
