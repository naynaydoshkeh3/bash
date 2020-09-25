const pwd = require('./pwd');

//Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim() //remove the newLine

    if (cmd === 'pwd') {
        let pwdFunc = require('./pwd');
        pwd(cmd);
    } else {
       process.stdout.write('You typed: ' + cmd);
       process.stdout.write('\nprompt > ') 
    }
})