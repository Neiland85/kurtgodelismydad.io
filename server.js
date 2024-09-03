const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Helloooooowiiiiiiiiiiisssss, esta es la plataforma interactiva de gente interactiva con depresión, Biewnvenido al BAJÓN después de 25 años automedicandote.....y el resto ya lo conocemos todos aqui.Al cruzar la larga extensiendo de nuebes empezxaba a oler a nenuco, u poco mas adelante olia a la piel de mi hermana de 15 con quien me hice las primeras pajas bien hechas. Este bot te ayduara a flirtear con todo individuo que te propongas enebrar!!!!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

