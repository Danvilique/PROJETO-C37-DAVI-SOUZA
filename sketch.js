var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(width, length);
  database = firebase.database();
  quiz = new Quiz();
//chame o método start() dentro da classe quiz (questionário).



}


function draw(){
  background("pink");

  quiz.start();

}
