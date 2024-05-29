/* ALERT-i perdoret si njoftim ne kuader te faqes*/
//window.alert("Mobileria Learti ofron zbritje nga data 13 - 20 Qershor!")


    
//inicializimi i konstanteve per butona te filterit dhe fotografi te kategorive
const butoni = document.querySelectorAll(".button");
const image = document.querySelectorAll(".image");

// kushtezimi i cili grumbullon te gjitha fotografite e kategorive permes klases image dhe i dallon apo i filtron ne baze te klases femije, nese prindi klase eshte image atehere femiu i prindit eshte kuzhina dmth mirret apo zgjedhet image kuzhina me crast e ka fotografine e vete te kuzhines, tash kushti jon eshte qe kudo qe ka klase te thirrur image kuzhina te shfaqet vetem ajo ndersa tjerat jo.

// kushtezimi per filtrimin dhe kategorizimin e fotografive

for (i = 0; i < butoni.length; i++) // nese jane 4 butona ne faqe sic eshte rasti butoni te gjitha, kuzhina, dhomagjumi, komodina... i grumbullon qe te gjithe i = 0, ska ose nuk gjene butona, krahasimi per me gjete butona i<butoni.length dhe ne fund i++ per ti marr(grumbullu) te gjithe butonat ekzistues
{
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        image.forEach((image) => {
            if (filter === "tegjitha") {
                image.style.display = "block";
            } else {
                if (image.classList.contains(filter)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            }
        })
    })
}


//ndryshimi i fotografive tek sektori rreth nesh
function mousimbi() {
    document.getElementById("first-photo").style.display = "none";
}

function mousijasht() {
    document.getElementById("second-photo").style.display = "block";
}

//shfaqja e permbajtjes tek sektori i informatave
function shfaqpunimet() {
    document.getElementById("shfaq").style.display = "block";
    document.getElementById("butoni").style.display = "none";
}

//ndryshimi i titullit tek sektori i heroit
function ndryshotitullin() {
    document.getElementById("titulli-i-ri").innerHTML = "Modelet e fundit i gjeni tek ne!";
}


//funksioni per te ekzekutuar animacionin e kartave pra rrokullisjen e tyre
const cards = document.querySelectorAll(".card")

function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));


//llogaritja e cmimit per meter
const metri = document.getElementById("input1");
const cmimimeter = document.getElementById("input2");

function ndryshoinput2() {
    cmimimeter.value = metri.value * 300;
}

metri.addEventListener("input", ndryshoinput2);


//validimi apo kushtezimi i fushave kontaktuese
const emriInput = document.getElementById("emriInput");
const emailInput = document.getElementById("emailInput");
const pershkrimiInput = document.getElementById("pershkrimiInput");
const sendButton = document.getElementById("send-button");

function dergo() { //operatori OSE || operatori DHE &&
    if (emriInput.value === "" || emailInput.value === "" || pershkrimiInput.value === "") {
        window.alert("Ju lutem mbushi fushat kontaktuese me te dhenat e tyre perkatese!");
    } else {
        sendButton.value = "Duke u procesuar...";
    }
}

sendButton.addEventListener("click", dergo);
