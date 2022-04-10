let input, button;
let img = [];

let drwidth = innerWidth;
let drwheight = innerHeight;

let posX = [];
let posY = [];
let ecart = 150;
let compteurX = 100;//mettre un les valeurs pour pas de depassment
let compteurY = -50;//mettre un les valeurs pour pas de depassment

let sliderscale;
let slideropacity;
 
//contenue-texte += char(random(65,100))

  //Attribution de l'ordre d'apparition des images dans le tableau
function preload () {
  img[0] = loadImage ('lettersShapes/a.png');
  img[1] = loadImage ('lettersShapes/z.png');
  img[2] = loadImage ('lettersShapes/e.png');
  img[3] = loadImage ('lettersShapes/r.png');
  img[4] = loadImage ('lettersShapes/t.png');
  img[5] = loadImage ('lettersShapes/y.png');
  img[6] = loadImage ('lettersShapes/u.png');
  img[7] = loadImage ('lettersShapes/i.png');
  img[8] = loadImage ('lettersShapes/o.png');
  img[9] = loadImage ('lettersShapes/p.png');
  img[10] = loadImage ('lettersShapes/q.png');
  img[11] = loadImage ('lettersShapes/s.png');
  img[12] = loadImage ('lettersShapes/d.png');
  img[13] = loadImage ('lettersShapes/f.png');
  img[14] = loadImage ('lettersShapes/g.png');
  img[15] = loadImage ('lettersShapes/h.png');
  img[16] = loadImage ('lettersShapes/j.png');
  img[17] = loadImage ('lettersShapes/k.png');
  img[18] = loadImage ('lettersShapes/l.png');
  img[19] = loadImage ('lettersShapes/m.png');
  img[20] = loadImage ('lettersShapes/w.png');
  img[21] = loadImage ('lettersShapes/x.png');
  img[22] = loadImage ('lettersShapes/c.png');
  img[23] = loadImage ('lettersShapes/v.png');
  img[24] = loadImage ('lettersShapes/b.png');
  img[25] = loadImage ('lettersShapes/n.png');
}


function setup() {
  var canvas = createCanvas(drwidth,drwheight);
  imageMode(CENTER);
  colorMode(HSB);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  

for(let i = 0 ; i< (drwidth * drwheight) / (ecart*10) ; i++){ 
  posX[i] = compteurX;
  posY[i] = compteurY;
  if(compteurY<drwheight){
    compteurX += ecart;
    if(compteurX>drwidth){
      compteurY += ecart;
      compteurX = 0;    
    }
  }
}


//slider pour la scalabilité
sliderscale = createSlider(1, 255, 100);
sliderscale.parent('slider');
sliderscale.style('width', '80px');

  //slider pour l'opacité
slideropacity = createSlider(1, 900, 100);
slideropacity.parent('slider__opacity')
slideropacity.style('width', '80px');

}


let contenu_texte = "";
let letter = [];
 
function draw() {

  //background de fond
  if (keyIsPressed && key == '@'){
    background(random(0,255),10,100);
  }

  //opacité
  tint(255, map(slideropacity.value(), 0, width, 255, 20));
    
  //appel des lettres et attribution à une touche
  for(let i = 0 ; i<contenu_texte.length ; i++) { // 1.instance du tableau en partant de 0 (premère valeur), 2. affilier i au texte saisie, 3. chaque fois qu'une lettre va etre saisie l'operation se reproduit.  
    letter[i] = contenu_texte.charAt(i); // 1.lettre unité va se basé sur la valeur du tableau i, 2. relie le contenu text au type de caractere qui lui est baser sur le tableau. 
    if(letter[i] == 'a'){ //si la lettre unitaire qui se base sur le tableau est A...
      image(img[0],posX[i],posY[i], sliderscale.value(), sliderscale.value() ); // alors affiche moi cette image et tu lui affecte le premier caractère du tableau seulement, posX 400 et posY 500 
    }
    if(letter[i] == 'z'){ 
      image(img[1],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'e'){ 
      image(img[2],posX[i],posY[i], sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'r'){ 
      image(img[3],posX[i],posY[i], sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 't'){ 
      image(img[4],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'y'){ 
        image(img[5],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'u'){ 
      image(img[6],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'i'){ 
      image(img[7],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'o'){ 
      image(img[8],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'p'){ 
      image(img[9],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'q'){ 
      image(img[10],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 's'){ 
      image(img[11],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'd'){ 
      image(img[12],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'f'){ 
      image(img[13],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'g'){ 
      image(img[14],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'h'){ 
      image(img[15],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'j'){ 
      image(img[16],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'k'){ 
      image(img[17],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'l'){ 
      image(img[18],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'm'){ 
      image(img[19],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'w'){ 
      image(img[20],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'x'){ 
      image(img[21],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'c'){ 
      image(img[22],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'v'){ 
      image(img[23],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'b'){ 
      image(img[24],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }
    if(letter[i] == 'n'){ 
      image(img[25],posX[i],posY[i],sliderscale.value(), sliderscale.value() );
    }


    
  } 
  
  //effacer le contenu de la page
if (keyIsPressed && key == '='){
    contenu_texte = ""; 
  } 
 
}



function keyReleased () {
  if (keyCode != UP_ARROW || DOWN_ARROW || LEFT_ARROW || RIGHT_ARROW ) {
  contenu_texte += key;
   }
  }


// touche du clavier released increment var, qui utiliser dans une boucle pour afficher un tableau d'image
