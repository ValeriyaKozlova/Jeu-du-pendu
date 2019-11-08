
    let arr = ["BANC", "BUREAU", "CABINET", "CARREAU", "CHAISE", "CLASSE", "CLEF", "COIN", "COULOIR", "DOSSIER", "EAU", "ECOLE", "ENTRER", "ESCALIER", "ETAGERE", "EXTERIEUR", "FENETRE", "INTERIEUR", "LAVABO", "LIT", "MARCHE", "MATELAS", "MATERNELLE", "MEUBLE", "MOUSSE", "MUR", "PELUCHE", "PLACARD", "PLAFOND", "PORTE", "POUBELLE", "RADIATEUR", "RAMPE", "RIDEAU", "ROBINET", "SALLE", "SALON", "SERRURE", "SERVIETTE", "SIEGE", "SIESTE", "SILENCE", "SOL", "SOMMEIL", "SONNETTE", "SORTIE", "TABLE", "TABLEAU", "TABOURET", "TAPIS", "TIROIR", "TOILETTE", "VITRE"];

    let index, string, mot;
    let motDiv = [];
    let count = 0;
    const buttons = document.querySelectorAll("button");
    if (window.confirm("Would you like to play?")) {
        play();
        };

    function play() {
        document.getElementById("row").innerHTML = "";
        mot = '';
        index = Math.floor(Math.random()*arr.length);
        string = arr[index];
        mot = string.split("",);
        monDiv = [];
        count = 0;
        console.log(string);

        document.getElementById("count").innerHTML = " " + count;

        for(i = 0; i < mot.length; i++){
            let td =  document.createElement("td");
            td.setAttribute("id", i);
            document.getElementById("row").appendChild(td);
        };
    };

    [...buttons].map(button => {
            button.addEventListener("click", e =>{
                e.preventDefault();
                e.target.setAttribute('disabled', 'disabled');
                const letter = e.target.innerHTML;
                if (mot.includes(letter)){
                    ind = mot.indexOf(letter);
                    for (let i = 0; i < mot.length; i++) {
                        if ( mot[i] == letter ) {
                            document.getElementById(i).innerHTML = letter;
                            motDiv[i] = letter;
                        }
                    }
                    setTimeout(control, 100);
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
                    [...buttons].map(button => {
                        button.removeAttribute("disabled");
                        motDiv = [];
                    });
                   setTimeout(play, 100);
                }
            }
        };
