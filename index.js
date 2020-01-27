const readline = require('readline');
var fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const readFile = text => {
  const noSpaceText = text.replace(/\s+/g, '');
  fs.readFile(noSpaceText + '.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(`File contents: ${data}`);
});
}

const makeFile = text => {
  const noSpaceText = text.replace(/\s+/g, '');
  fs.writeFile(noSpaceText + '.txt', text, (err) => {
    if (err) throw err; 
  });
}

const anotherQuestion = newFile => {
  rl.question('Read that file? Y or N ', (answer) => {
    if (answer === 'Y') {
      readFile(newFile);
      rl.close();
    } else if (answer === 'N') {
      console.log('k bye!')
      rl.close();
    } else {
      console.log('Invalid input');
      anotherQuestion(newFile);
    }
  });
}

function askQuestion() {
  rl.question('Sup? ', (answer) => {
    console.log(`${answer} : Saved to file`);
    makeFile(answer);
    anotherQuestion(answer);
  });
}

askQuestion();

