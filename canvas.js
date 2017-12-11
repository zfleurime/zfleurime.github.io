
function createLine(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
        // La ligne qui separe la cour de la maison
    /*context.beginPath();
    context.rect(100, 250, 700, 5);
    context.strokeStyle = "red";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(360, 260, 170, 60);
    context.strokeStyle = "black";
    context.fillStyle = "WHITE";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(380, 280, 130, 40);
    context.strokeStyle = "black";
    context.fillStyle = "WHITE";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(400, 300, 90, 20);
    context.strokeStyle = "black";
    context.fillStyle = "WHITE";
    context.fill();
    context.stroke();*/

    // La maison
    context.beginPath();
    context.rect(120, 320, 660, 10);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();


    context.beginPath();
    context.rect(120, 320, 10, 360);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(780, 320, 10, 360);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(120, 680, 670, 10);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(690, 329, 10, 360);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Les portes
    context.beginPath();
    context.rect(420, 320, 50, 10);
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(415, 270, 3, 50);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(420, 320, 50, 0, (1.5)*Math.PI, true);
    context.lineWidth = 1;
    context.stroke();

    //Les fenetres
    //fh-g
    context.beginPath();
    context.rect(240, 320, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(270, 320, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();
    //fh-d
    context.beginPath();
    context.rect(590, 320, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(620, 320, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    //Chambre
    //Barre verticale h-g
    context.beginPath();
    context.rect(360, 320, 5, 130);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();



    //Barre verticale h-d
    context.beginPath();
    context.rect(530, 320, 5, 130);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Barre verticale b-d
    context.beginPath();
    context.rect(530, 560, 5, 130);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Barre verticale h-g-I
    context.beginPath();
    context.rect(360, 500, 5, 50);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Porte chambre h-g
    context.beginPath();
    context.rect(310, 500, 50, 3);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(360, 500, 50, (1.5)*Math.PI, Math.PI, true);
    context.lineWidth = 1;
    context.stroke();

    //Barre horizontale h-g-II
    context.beginPath();
    context.rect(120, 550, 245, 5);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Porte chambre b-g
    context.beginPath();
    context.rect(360, 600, 45, 3);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(360, 600, 45, 0, (1.5)*Math.PI, true);
    context.lineWidth = 1;
    context.stroke();

    //Barre verticale b-g
    context.beginPath();
    context.rect(360, 600, 5, 90);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Barre horizontale b-d
    context.beginPath();
    context.rect(580, 560, 210, 5);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Barre horizontale h-d
    context.beginPath();
    context.rect(580, 445, 210, 5);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Porte chambre h-d
    context.beginPath();
    context.rect(580, 400, 5, 50);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(580, 445, 45,(1.5)*Math.PI, Math.PI,true);
    context.lineWidth = 1;
    context.stroke();

    //Porte chambre h-d
    context.beginPath();
    context.rect(580, 560, 5, 45);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(580, 560, 45, Math.PI, (0.5)*Math.PI,true);
    context.lineWidth = 1;
    context.stroke();

    //fb-g
    context.beginPath();
    context.rect(240, 680, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(270, 680, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    //fb-d
    context.beginPath();
    context.rect(590, 680, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(620, 680, 30, 10);
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.fill();
    context.stroke();

    //Barre verticale b-WC
    context.beginPath();
    context.rect(630, 530, 5,35);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Barre verticale h-WC
    context.beginPath();
    context.rect(630, 445, 5, 35);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    //Porte WC
    context.beginPath();
    context.rect(630, 530, 50, 5);
    context.strokeStyle = "blue";
    context.fillStyle = "bleu";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(630, 530, 50, 0, (1.5)*Math.PI,true);
    context.lineWidth = 1;
    context.stroke();

}
//createline();

function startGame() {

    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
    }

    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " pour Demarer.");
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.winner + " already won the game.");
    } else if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("That square is already used.");
    }
}

function switchTurn() {

    if (checkForWinner(document.turn)) {
        setMessage("Fellicitation, " + document.turn + "!  tu as gagne!");
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
    }
}

function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}

