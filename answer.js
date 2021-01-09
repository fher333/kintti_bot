const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ingrese el codigo de la chica ', (answer) => {
  // TODO: Log the answer in a database
  

  if (answer=="y"){

    console.log(`El codigo es: ${answer}`);
  }

  //rl.close();
});

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? ', (answer) => {
      if (answer.match(/^y(es)?$/i)) rl.pause();
    });
  });