  // //Création d'un objt voiture : 
    // let voiture = {
    //   "nbChevaux" : 500,
    //   "vitesseMax" : 4000,
    //   "defauts" : ["acceleration", "adhérence"],
    //   "pilotes" : {
    //     "pilotes" : 'jojo',
    //     "copilote": 'joestar'
    //   }
    // }

      // voiture.marque = "BMW";
    // // console.log(voiture);

      // console.log(voiture.pilotes);
    // console.log(voiture.pilotes["copilote"]);
    // // on trouve donc pilotes et copilotes

  // let i = 0;
// let dessin=[]
// while  (i<10) {
//   i += 1;
//   dessin.push("#")
//   console.log(dessin);
// };

//   let dessin=[]
// for (let i = 0; i < 10;) {
//   i += 1;
//   dessin.push("#")
//   console.log(dessin);
// };

// var i=0;
// var somme=0;
// var moyenne=0;
// var nb_notes=0;
// nb_notes=prompt("Souhaitez-vous faire la moyenne de combien de notes ?","Nb de Notes");
// nb_notes=parseInt(nb_notes);
// notes = new Array(nb_notes);
// for(i=1;i<=nb_notes;i++)
// {
     
//     note_i=prompt("Entrez la note");
//     notes[i-1]=parseInt(note_i);
//     somme+=notes[i-1];
// }
// moyenne=(somme/nb_notes);
// alert("La moyenne des notes est : "+moyenne);

// let notes = [8,1,7];
// function mention(notes){
//     let myenneNotes = [notes[0]+notes[1]+notes[2]]/3;
//     if(myenneNotes >= 15){
//         return"Très bien";
//     }else if(myenneNotes >= 10){
//         return"Assez bien";
//     }else {
//         return"Refus";
//     }
// }
// console.log(mention(notes));
// var notes = [15, 15, 16, 18, 3, 10];
// var total = 0;
// for(var i=0; i < notes.length; i++){
//     total = total + notes[i];
//         }
//     var moyenne = total / notes.length;

//     console.log(moyenne)

 
let titre = document.getElementById('titre')
console.log(titre)
document.getElementById("titre").style.backgroundColor = "lightblue";
document.getElementById('titre').style.fontSize = 240+ 'px';
// let Paragraphe = document.getElementsByTagName('p');

// let newText =document.createTextNode("Jefff le bommer")

 // document.body.appendChild(newText)

 // document.body.replaceChild(newText , Paragraphe[0])


// function ajoutTexte(pseudo, duTexte){
//     //on crée un <p></p>
//     let newTxt = document.createElement('p');
//     //on remplit ce <p> avec les var pseudo et duTexte
//     newTxt.innerHTML = `<strong>${pseudo}</strong> -- ${duTexte}`;
//     //Là on le place dans la page
//     document.body.appendChild(newTxt);
// }
// ajoutTexte('Picsou ','Le FOUFOU');


// let monLien = document.getElementById("lien");
// lien.setAttribute("href", "https://www.youtube.com/ ");