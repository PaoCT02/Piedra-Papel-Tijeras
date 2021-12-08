function jugar(obj){
    var objetos =["Piedra", "Papel", "Tijeras"];

    var jugada  =[
        ["Empatas", "Pierdes", "Ganas"],
        ["Ganas", "Empatas", "Pierdes"],
        ["Pierdes", "Ganas", "Empatas"]
    ];
    var enemigo =Math.floor(Math.random()*3 );

    document.getElementById('jugador').innerHTML = objetos[obj];
    document.getElementById('enemigo').innerHTML =objetos[enemigo];
    document.getElementById('resultado').innerHTML =jugada[obj][enemigo];

}