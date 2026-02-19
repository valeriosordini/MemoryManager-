{
  sunHeight = mouseY;
  //SOLE 
  
  // Giorno
  if (sunHeight < midLine) {
    background('lightblue');
  }
  // Tramonto
  else if (sunHeight >= midLine && sunHeight < horizon) {
    background(255, 140, 0);
  }
  // Notte
  else {
    background(0);
  }

  // sole
  fill('yellow');
  circle(200, sunHeight, 100);

  // stella
  if (sunHeight >= horizon) {
    fill(255);
    circle(starX, starY, 5);
  }

  //TERRENO
  // Giorno
  if (sunHeight < midLine) {
    fill('lightgreen');
  }
  // Tramonto
  else if (sunHeight >= midLine && sunHeight < horizon) {
    fill(120, 80, 40); 
  }
  // Notte
  else {
    fill('darkgreen');
  }

  rect(0, horizon, 400, 100);
}
