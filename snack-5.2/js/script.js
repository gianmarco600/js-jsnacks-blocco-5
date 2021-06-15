// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti

var squadre = [
    {
        nome : 'lazio',
        punti : 0,
        falli: 0
    },
    {
        nome : 'roma',
        punti : 0,
        falli: 0
    },
    {
        nome : 'milan',
        punti : 0,
        falli: 0
    },
    {
        nome : 'inter',
        punti : 0,
        falli: 0
    },
    {
        nome : 'napoli',
        punti : 0,
        falli: 0
    }
];

console.log(squadre);
document.getElementById('btn').addEventListener('click', randomScore);

function randomScore(){
    document.getElementById('output').innerHTML = '';
    for (var i = 0; i < squadre.length; i++){
        squadre[i].punti = 10 + Math.floor(Math.random()*40);
        squadre[i].falli = Math.floor(Math.random()*20);
        document.getElementById('output').innerHTML += '<li>' + squadre[i].nome +'----> '+ 'punti: ' + squadre[i].punti + ', falli: ' + squadre[i].falli + '; </li>'
    }
}
