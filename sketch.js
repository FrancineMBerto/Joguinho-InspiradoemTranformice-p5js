let personagem
let grama
let toca
let aviso
let coracao

let tamanho = 64

let andarX = 8
let andarY = 8

let velocidade = 64
let restart

function setup() {
  createCanvas(576, 576);
  grama = loadImage("grama.png")
  personagem = loadImage('rato.png')
  toca = loadImage("toca.png")
  aviso = loadImage("aviso.png")
  coracao = loadImage("coracao.png")
}

function draw() {
  
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  if(andarX > tamanho * 8) {
    andarX = tamanho * 8
  }
  if(andarY > tamanho * 8){
    andarY = tamanho * 8
  }
  
  background(220);
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
    image(grama, tamanho * i, tamanho * j, tamanho, tamanho)
   }
  }
  
  image(toca, 512, 512, tamanho, tamanho)
  
   if(andarX === tamanho*8 && andarY === tamanho*8 ){
     image(aviso, 110, 160, 350, 225)
     image(coracao, 452, 441, tamanho+20, tamanho+20)
    textSize(32)
    text('Ganhou', 337, 300)
    restart = createButton('Reiniciar')
    restart.mousePressed(reset)
     
     noLoop()
 
  }
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  
  

}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

function keyPressed() {
  if(keyIsDown(UP_ARROW)){
      andarY -= velocidade
     }
  if(keyIsDown(DOWN_ARROW)){
      andarY += velocidade
     }
  if(keyIsDown(LEFT_ARROW)){
      andarX -= velocidade
     }
  if(keyIsDown(RIGHT_ARROW)){
      andarX += velocidade
  }
}

