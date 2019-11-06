let arr = ["BANC", "BUREAU", "CABINET", "CARREAU", "CHAISE", "CLASSE", "CLEF", "COIN", "COULOIR", "DOSSIER", "EAU", "ECOLE", "ENTRER", "ESCALIER", "ETAGERE", "EXTERIEUR", "FENETRE", "INTERIEUR", "LAVABO", "LIT", "MARCHE", "MATELAS", "MATERNELLE", "MEUBLE", "MOUSSE", "MUR", "PELUCHE", "PLACARD", "PLAFOND", "PORTE", "POUBELLE", "RADIATEUR", "RAMPE", "RIDEAU", "ROBINET", "SALLE", "SALON", "SERRURE", "SERVIETTE", "SIEGE", "SIESTE", "SILENCE", "SOL", "SOMMEIL", "SONNETTE", "SORTIE", "TABLE", "TABLEAU", "TABOURET", "TAPIS", "TIROIR", "TOILETTE", "VITRE"];

function play() {
index = Math.floor(Math.random()*arr.length);
let string = arr[index];
let mot = string.split("",);
let motDiv = [] ;
let td;
let count = 0;
let ind;
let y;

document.getElementById("count").innerHTML = " " + count;

for(i = 0; i < mot.length; i ++){
    td =  document.createElement("td");
    td.setAttribute("id", i);
    document.getElementById("row").appendChild(td);
};
    const buttons = document.querySelectorAll("button");

    [...buttons].map(button =>{ button.addEventListener("click", e =>{
        e.preventDefault();
        const letter = e.target.innerHTML;
        if (mot.includes(letter)){
            ind = mot.indexOf(letter);
            let indices =  [];
            while(ind != -1) {
                indices.push(ind);
                ind = mot.indexOf(letter, ind +1);
            }
            for (i = 0; i < indices.length; i++){
                y = indices[i];
                motDiv[y] = letter;
                document.getElementById(y).innerHTML = letter;
            }
        control();
        } else {
            count++;
            document.getElementById("count").innerHTML = " " + count;
    
        }
        console.log(motDiv);
    });
    });
    function control(){
       let word1 = JSON.stringify(mot);
       let word2 = JSON.stringify(motDiv);
        if (word1 == word2) {
            window.alert("Congratulations!!!");
            if (window.confirm("Would you like to play again?")) {
                motDiv = [];
                document.getElementById("row").innerHTML = "";
                play();
            }
        }
    };
 }; play();
