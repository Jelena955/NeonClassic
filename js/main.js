window.onload=function(){


    



    


   

    var x = window.matchMedia("(max-width: 1100px)")
    risponsiv(x) 
    x.addListener(risponsiv) //funkcija za risponsiv
   

//Dodavanje u html kroz JS
var logo=document.getElementById("logo"); 
var logoimg=document.createElement("h1"); //h1
var sadrzaj=document.createTextNode("Welcome to Neon Classic") 
logo.appendChild(logoimg);
logoimg.appendChild(sadrzaj);

//dodavanje klase za glow
logoimg.setAttribute("class", "glow mx-auto invisible") 
logoimg.setAttribute("id","glows");

console.log($("#glows"))






//Efekat treperenja kroz interval i funkciju
setInterval(sekunda, 300); 

var tajmer=0;
var tajmer2=0;
function sekunda() 
{ 
    tajmer2++;
    if(tajmer2>5){ 

      
    if(tajmer < 10 && tajmer % 2 == 0)
    { 
        tajmer++;
        document.getElementById("glows").setAttribute("class"," glow invisible mx-auto");
       
        
    }
    else if (tajmer < 10 && tajmer % 2 != 0)
    {
        tajmer++;
        document.getElementById("glows").setAttribute("class","glow visible mx-auto");

        
        
        
        
    }
    else if(tajmer == 10)
    {
        clearInterval();
        //console.log("Interval ociscen");
    }}
    // console.log("IF: " + tajmer)
}

//efekat spustanja slike sa animate
$("#naslovna").animate({ marginTop:'0px'}, 2000);



console.log(document.getElementById("glows"));
var div=document.getElementsByClassName("slicica");
for(i=0;i<div.length;i++){
    console.log()
    

    
   div[i].addEventListener("click", blabla)
   
       
}



ispisBlokova(); // funkcija za dinamicko ispisivanje slicnih blokova
function tekstovi(sta, naslovi, tekstic){  //funkcija za dodavanje tekstova blokovima u htmlu reko jsa
var bloka=document.getElementById(sta);
var naslov=document.createElement("h1"); //h1
var tekst=document.createElement("h2"); //h2 SEO
naslov.setAttribute('class', 'naslovi');
tekst.setAttribute('class', 'tekstovi');
var sadrzajn=document.createTextNode(naslovi);

var sadrzajt=document.createTextNode(tekstic);
bloka.appendChild(naslov);
naslov.appendChild(sadrzajn)
bloka.appendChild(tekst);
tekst.appendChild(sadrzajt) }


tekstovi("a0","Naša priča","Sve počinje od sna. Svako od nas sanja. Snovi su različiti i najčešće ih se ne sećamo.Tako smo i mi sanjali jedan san. Bio je to san o prelepim mestima 60tih godina. Da ne bi zaboravili taj san, pretočili smo ga u javu… i tako je te 2006-te godine nastao prvi “Neon Classic” Sanjali smo o uvođenju novina, opuštenom mestu gde bi ljudi rado dolazili sa prijateljima i kada žele da se opuste i da se zabave. ");
tekstovi("b1", "Stvaranje istorije","Na temelju tih snova otvaramo i ostale lokale Neon Classica. A u svakom od njih uspeli smo da sačuvamo bar po jedan san. Danas i dalje ne odustajemo od svojih snova i zajedno sa Vama radimo na tome da što više njih ostvarimo.")
tekstovi("a2", "Usluge","Sa tim ciljem trudimo se da ostvarimo sve Vaše želje i snove. Kod nas možete da se opustite uz laganu muziku ili da đuskate uz hitove počevši od 60tih do danas. Možete naručiti neobičnu i ukusnu hranu spremljenu od strane naših najboljih kuvara. Ili se osvežiti uz egzotična pića. Svu ponudu možete naći ispod ili možete svratiti do nas i na licu mesta se odlučiti. Izbor je na Vama..")
    




//Efekat slajdera za slike u blokovima
setInterval(sekundslike, 3000); 

var brojac=1;
var brojacDrugi=4;
var brojacTreci=8;
function sekundslike() 
{ 

    

        
   document.getElementById("c1").src="images/restoran"+brojac+".jpg";
   document.getElementById("c0").src="images/restoran"+brojacDrugi+".jpg";
   document.getElementById("c2").src="images/restoran"+brojacTreci+".jpg";
 console.log(brojac)
   brojac++;
   brojacDrugi++;
   brojacTreci++;
        
   if(brojac == 4){
    brojac=1;
    }
    if(brojacDrugi == 7){
        brojacDrugi=4
    }
    if(brojacTreci == 9){
        brojacTreci=7
    }
  

  
    
    
}


//funkcija za dinamicki ispis menija i side menija
function ispisMeni(kojmeni){
    var dobloka=["naslovna", "b0", "slike", "slike2", "forma"];
    var meni=["Početna", "O nama", "Meni", "Repertoar", "Rezervišite"];
    var meniispis=$(kojmeni);//jquery
    var ispis="";
    for(var i=0; i<meni.length;i++){
ispis+=`<a href="#${dobloka[i]}" class="link"><li class="m-2 glow-me">${meni[i]}</a></li>
`
    }

    meniispis.html(ispis);//jquery
}; //dinamicki ispis menija
ispisMeni("#meni")
ispisMeni("#meniside")

ispisSlike(); //dinamicki ispis slika za meni i dogadjaje u klubu
var i=0;
var linkovi=document.getElementsByClassName("link");
//console.log(linkovi)
for(i=0;i<linkovi.length;i++){ //Pravljenje efekta hover na prelazak misem preko menija
    console.log()
    

    
   linkovi[i].addEventListener("mouseover", linkovii)
   linkovi[i].addEventListener("mouseout", linkoviibrisi)
       
}
var i=0;
var slike=document.getElementsByClassName("slicice");
console.log(slike);


 

for(i=0;i<slike.length;i++){ //dodavanje dogadjaja za efekat glow na slike za prelazak misem, izlazak i dogadjaja da se meni i eventovi pokazu na klik
    
    slike[i].addEventListener("mouseover", glovslika)
    slike[i].addEventListener("mouseout", glovslikabrisi)
    slike[i].addEventListener("click",  izbaciMeni )

        
    
}
//funkcija za pojavljivanje bordure prelaskom preko misa preko jquerija i hover();
function predjem(elem){
    $(elem).hover(function hoverdoku (){
      
            $(elem).css("border-bottom", "2px solid yellowgreen")},
            function hovernedoku (){$(elem).css("border-bottom","")} )}




predjem("#dokumentacija");
predjem("#sajtmep");



ispisForme(); //dinamicki ispis forme

document.querySelector("#dugme").addEventListener("click", provera); //klikom na dugme vrsenje provere preko regularnih izraza

ispisIkonica();//dinamicki ispis fafa ikonica u futeru
ispisTagova();//dinamicki ispis h tagova u futeru

$("#hamburger").click(prikaziHamburger)
$("#hamburger").mouseenter(function predji(){
    //console.log("ddd")
$("#hamburger").css('border','2px solid yellowgreen');

})
$("#hamburger").mouseout(function izadji(){
    //console.log("ddd")
$("#hamburger").css('border','');

})

}

//Ispis blokova dinamicki sa slikom i tekstom u cikcak
var broj=0;
function ispisBlokova(){

    for(broj=0;broj<3;broj++){
        if(broj%2!==0){ 

        document.getElementById("blokovi").innerHTML+=`<div class="container-fluid d-flex blok  gloww" id="blok${broj}"><div class="row" >
                                                        <div class="container-fluid  col-6  bloks A${broj}" id="a${broj}" height="auto"> <img src="images/restoran${broj+1}.jpg" alt="restorann${broj}" class="img-fluid" id="c${broj}"></div>
                                                        <div class="container col-12 col-lg-6  B${broj}" id="b${broj}"></div></div>

      </div>`} //ALT NA SLIKAMA SEO
      else{

        document.getElementById("blokovi").innerHTML+=`<div class="container-fluid d-flex blok  gloww" id="blok${broj}"><div class="row" >
                                                        <div class="container-fluid col-12 col-lg-6  bloks A${broj}" id="a${broj}" gradient-border" height="auto"></div>
                                                        <div class="container  col-6 d-flex justify-content-end bloks B${broj}" id="b${broj}"> <img src="images/restoran${broj+1}.jpg" alt="restorann${broj}" class="img-fluid" id="c${broj}"></div> </div></div>`

        

      } //ALT NA SLIKAMA SEO
    }
   
}

function linkovii(){
    //console.log(this);
    var vrednost=this;

    this.classList.add("bojica");
   
}
function linkoviibrisi(){
    //console.log(this);
    //var vrednost=this;

    this.classList.remove("bojica");
   
}
//Dinamicko ispisivanje slika za meni i dogadjaje
function ispisSlike(){
var slike=["1", "2", "3"];
var slike2=["4","5"];
    var meniispis=document.getElementById("slike");
    var repertoarispis=document.getElementById("slike2");
    var ispis="";
    for(var i=0; i<slike.length;i++){
ispis+=` <img src="images/slika${slike[i]}.png" alt="s${slike[i]}" class="slicice img-fluid col-3 col-md-2" title="Kliknite za prikaz menija"  > 
`
    }  //ALT NA SLIKAMA SEO

    meniispis.innerHTML+=ispis;
    ispis="";
    for(var i=0; i<slike2.length;i++){
        ispis+=` <img src="images/slika${slike2[i]}.png" alt="s${slike2[i]}" class="slicice img-fluid col-3 col-md-2  " title="Kliknite za prikaz dogadjaja" >
        `
            } //ALT NA SLIKAMA SEO
        
            repertoarispis.innerHTML+=ispis;

}
// Dodavanje sjaja na hover misem
function glovslika(){
//console.log(this.style)
if(this.alt=="s1"){
   this.style.filter="drop-shadow(1px 1px 9px rgba(209, 91, 252 , 1))"
}
else if(this.alt=="s2"){
    
    this.style.filter="drop-shadow(1px 1px 9px rgba(249, 100, 48, 1))"
}
else if(this.alt=="s3"){
    
    this.style.filter="drop-shadow(1px 1px 9px rgba(8, 253, 12, 1))"
}
else if(this.alt=="s4"){
    
    this.style.filter="drop-shadow(1px 1px 9px rgba(255, 255, 97, 1))"
}
else if(this.alt=="s5"){
    
    this.style.filter="drop-shadow(1px 1px 9px rgba(255, 133, 234, 1))"
}
}

//brisanje sjaja kad se skloni mis
function glovslikabrisi(){
   // console.log(this)

   if(this.alt=="s1"){
    this.style.filter="none"
 }
 else if(this.alt=="s2"){
     
     this.style.filter="none"
 }
 else if(this.alt=="s3"){
     
     this.style.filter="none"
 }
 else if(this.alt=="s4"){
     
     this.style.filter="none"
 }
 else if(this.alt=="s5"){
     
     this.style.filter="none"
 }
    }

    function izaciiMeni(blok, mslika, klasa){ //funkcija za pojavljivanje menija i eventova radjeno jquerijem metod show

        $(blok).show(2000); //jquery
        $(blok).addClass("d-flex");//jquery

        $(blok).html(`<h4 id="iks" class="align-self-start p-2 iksic">X</h4><img src=${mslika} alt="meni" class="${klasa} img-fluid d-flex align-self-end">`); //ALT NA SLIKAMA SEO
        $("#iks").click(izbrisiMeni);} //h4 SEO

    function izbaciMeni(){
      
        

       
       
           
         

        if(this.alt=="s1"){


            izaciiMeni("#proba","images/meni.png", "probica")
             

           
            
        }

        else if(this.alt=="s2"){

            izaciiMeni("#proba","images/meni1.png", "probica")
        }
        else if(this.alt=="s3"){

            izaciiMeni("#proba","images/meni2.png", "probica")
        }
        else if(this.alt=="s4"){

            izaciiMeni("#proba2","images/meni3.png", "probica2")
        }
        else if(this.alt=="s5"){

            izaciiMeni("#proba2","images/meni4.png", "probica2")
        }
    

  

}

console.log(document.getElementById("iks"))

function izbrisiMeni(){ //sklanjanje bloka i slike za meni i sakrivanje preko metoda hide jquery
    $("#proba").hide(2000);
    $("#proba").removeClass("d-flex");
    $("#proba2").hide(2000);
    $("#proba2").removeClass("d-flex");
    
    

}
//Dinamicki ispis forme
function ispisForme(){
    var niz=["Ime","Prezime","Datum", "Broj osoba","Mejl"];
    var forma=document.getElementById("forma");
    var ispis="";
    for(element of niz){
        ispis+=`<div class="row formakon ">
        <div class="input-field col s6">
          <input  type="text" class="validate borderer" title="Kliknite na donju crtu za unos" id="${element}">
          <label class="labela" for="first_name" title="Kliknite na donju crtu za unos">${element}</label>
        </div>
        
        </div><div class="row formakon" id="${element}gr"> </div>`
    }
    forma.innerHTML=ispis;
}

//Validacija forme, regularni izrazi
function provera(e){

    e.preventDefault()

    var greske=[];
    let ime, prezime, datum, brosoba, mejl;
    ime=document.getElementById("Ime").value;
    prezime=document.getElementById("Prezime").value;
    datum=document.getElementById("Datum").value;
    brosoba=document.getElementById("Broj osoba").value;
    mejl=document.getElementById("Mejl").value;
    console.log(ime,prezime,datum,brosoba, mejl);

    let imegr, prezimegr, vrdatumgr, brosobagr, mejlgr;
    imegr=document.getElementById("Imegr");
    prezimegr=document.getElementById("Prezimegr");
    vrdatumgr=document.getElementById("Datumgr");
    brosobagr=document.getElementById("Broj osobagr");
    mejlgr=document.getElementById("Mejlgr");

    //console.log(imegr, prezimegr,vrsedenjagr, brosobagr, mejlgr);

    let reIme, rePrezime, reDatumRezervisanja, reBrojOsoba, reMejl

    reIme = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
    rePrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/; 
    reDatumRezervisanja = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/
    reBrojOsoba=/^([1-9]|10|11)$/
    reMejl=/^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})+$/;

    var danas= new Date();
    console.log(danas.getFullYear());
    console.log(danas.getDate());
    console.log(danas.getMonth());
    var danaszaformu= (danas.getDate() )+"/"+ (danas.getMonth() + 1)   +"/"+ danas.getFullYear();
    
    var danasstring= danas.toDateString();
    console.log(danasstring);
    console.log(danaszaformu);
    var razdvojenDatum=datum.split("/");
    console.log(razdvojenDatum);
    



    if(ime == ""){
        
        imegr.innerHTML = "Polje ime je prazno."
         greske.push("ime nije ok");
    }
    else{
        if(!reIme.test(ime)){
          
            imegr.innerHTML = "Ime nije u dobrom formatu (npr Nikola ili Nikola Jovanovic)";
          greske.push("ime nije ok");
            
        }else{
            imegr.innerHTML = "";
           
            
        }
    }

    if(prezime == ""){
        
        prezimegr.innerHTML = "Polje Prezime je prazno."
        greske.push("e-mail nije ok");
    }
    else{
        if(!rePrezime.test(prezime)){
            
            prezimegr.innerHTML = "Prezime nije u dobrom formatu (npr Peric)";
            greske.push("prezime nije ok");
        }else{
            prezimegr.innerHTML = "";

            
            
        }
    }
    if(mejl == ""){
        
        mejlgr.innerHTML = "Polje Email je prazno."
        greske.push("e-mail nije ok");
    }
    else{
        if(!reMejl.test(mejl)){
            
            mejlgr.innerHTML = "Email nije u dobrom formatu (npr pera@gmail.com)";
            greske.push("e-mail nije ok");
        }else{
            mejlgr.innerHTML = "";

            
            
        }
    }

    if(brosoba == ""){
        
        brosobagr.innerHTML = "Polje Broj osoba je prazno."
        greske.push("broj osoba nije ok");
    }
    else{
        if(!reBrojOsoba.test(brosoba)){
            
            brosobagr.innerHTML = "Broj osoba nije u dobrom formatu  i sme biti najviše 11";
            greske.push("Broj osoba nije ok");
        }else{
        brosobagr.innerHTML = "";

            
            
        }
    }

    if(datum== ""){
       
        vrdatumgr.innerHTML = "Polje Datum je prazno."
        greske.push("datum nije ok");
    }
    else{
        
        if(!reDatumRezervisanja.test(datum)){
            
            vrdatumgr.innerHTML = "Datum nije u dobrom formatu (mora biti dd/mm/yyy)";
            greske.push("datum nije ok");
            
        }
        else{
            if(razdvojenDatum[2]<danas.getFullYear() ) {
                vrdatumgr.innerHTML = "Datum mora biti u budućnosti";
                greske.push("datum nije ok");
                
               }
               else{
                   if(razdvojenDatum[2]==danas.getFullYear()&& razdvojenDatum[1]<danas.getMonth()+1){
                    vrdatumgr.innerHTML = "Datum mora biti u budućnosti";
                    greske.push("datum nije ok");
                   }

                   else{
                       if(razdvojenDatum[2]==danas.getFullYear()&&razdvojenDatum[1]==danas.getMonth()+1&&razdvojenDatum[0]<danas.getDate()){

                        vrdatumgr.innerHTML = "Datum mora biti u budućnosti";
                        greske.push("datum nije ok");

                       }

                       else{

                        vrdatumgr.innerHTML = "";
                       


                       }

                   }
               }

    






}




}
//Ako nema gresaka preko jquery plugina se dodaje obavestenje o rezervacije u vidu gifa
if (greske.length==0){

    var lb = new $.LoadingBox();
    setTimeout(function(){
        lb.close();
      }, 2000);

      var lb = new $.LoadingBox({

       
        mainElementID: 'loading-box', 
    
        
        fadeInSpeed: 'normal',
        fadeOutSpeed: 'normal',
    
        // opacity
        opacity: 0.8,
    
        // background color
        backgroundColor: "#000",
    
        // width / height of the loading GIF
        loadingImageWitdth: "60px",
        loadingImageHeigth: "60px",
    
        loadingImageSrc: ""
        
    });

    

     

      
  
   // console.log(greske)
 }


}

//console.log($("#proba"))

//dinamicki ispis fafa ikonica sa delovima jquerija

function ispisIkonica(){ 

    let niz=["facebook", "instagram", "twitter"];
    var ispis="";
   var div= $("#ikonice")
console.log(niz)
    for(element of niz){
        ispis+=`<a href="https://www.${element}.com/" class="link ikonica col-2"><i class="fa fa-${element} ikonica" ></i></a>`


    }
    div.html(ispis);
}

//dinamicki ispis fafa ikonica sa delovima jquerija
function ispisTagova(){ 

    let niz=["066977855", "Čarlija Čaplina 56", "neonclassic@gmail.com"];
    var ispis="";
   var div= $("#kontakt")
console.log(niz)
    for(element of niz){
        ispis+=`<h3 >${element}</h3>` //h3 SEO


    }
    div.html(ispis);
}

//pojavljivanje "hamburgera" gde je side meni, na manjoj rezoluciji
function prikaziHamburger(){
     //jquery
    $("#hamburgerotvoren").toggle(2000);
    $("#linija2").toggle(2000);
    $("#linija3").toggle(2000);


}
//risponsiv
function risponsiv(x) {
    if (x.matches) { 
      document.getElementById("hamburger").style.display = "block";
      document.getElementById("meni").style.display="none";
      document.getElementById("ikonice").style.width = "250px";
            
            
    
    }

      else{
        document.getElementById("hamburger").style.display = "none";
        document.getElementById("meni").style.display = "flex";
        document.getElementById("hamburgerotvoren").style.display = "none"
        document.getElementById("linija2").style.display = "block"
        document.getElementById("linija3").style.display = "block";
        document.getElementById("ikonice").style.width = "500px";
           
            
    }

      }

      



     


    
    


    