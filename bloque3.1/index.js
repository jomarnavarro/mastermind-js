const readline = require('readline');
const moment = require('moment');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Que edad tienes? ', function(answerAge) {
    rl.question('Como te llamas? ', function(answerName) {
        console.log(`Eres ${answerName} y tienes ${answerAge} anios.`);
        rl.close();
    });
    
});