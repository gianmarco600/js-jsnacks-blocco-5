// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
        nome : 'var1',
        peso : 1,
        lunghezza : 10
    },
    {
        nome : 'var2',
        peso : 2,
        lunghezza : 10
    },
    {
        nome : 'var3',
        peso : 3,
        lunghezza : 10
    },
    {
        nome : 'var4',
        peso : 4,
        lunghezza : 10
    },
    {
        nome : 'var5',
        peso : 5,
        lunghezza : 10
    },
    {
        nome : 'var6',
        peso : 6,
        lunghezza : 10
    },
    {
        nome : 'var7',
        peso : 7,
        lunghezza : 10
    },
    {
        nome : 'var8',
        peso : 8,
        lunghezza : 10
    },
    {
        nome : 'var9',
        peso : 9,
        lunghezza : 10
    },
    {
        nome : 'var10',
        peso : 10,
        lunghezza : 10
    },
];

document.getElementById('somma').addEventListener('click' , sum);


for (var i = 0; i < zucchine.length; i++){
    zucchine[i].peso = Math.floor(Math.random()*15) + 5;
    document.getElementById('output').innerHTML += '<li> peso ' + zucchine[i].nome + ' = ' + zucchine[i].peso + '</li>';
}


function sum(){
    document.getElementById('output').innerHTML = '';
    var tot = 0;
    for (var i = 0; i < zucchine.length; i++){
        tot += zucchine[i].peso;
        document.getElementById('output').innerHTML += '<li>' + zucchine[i].nome + '  = ' + zucchine[i].peso + ' + </li>';
    }
    document.getElementById('output').innerHTML += '<li> = ' + tot + '</li>';
}