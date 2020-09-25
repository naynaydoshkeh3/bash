const pwd = require('./pwd');

//Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim() //remove the newLine

    if (cmd === 'pwd') {
        let pwdFunc = require('./pwd');
        //console.log(pwdFunc())
        pwdFunc(cmd);
    } else if (cmd === 'ls') {
        let lsFunc = require('./ls');
        lsFunc(cmd)
    } else if (cmd.slice(0, 3) === 'cat'){
        let fileName = cmd.slice(4)
        let catFunc = require('./cat');
        catFunc(fileName)
    } else if(cmd.slice(0, 4) === 'curl'){
        let url = cmd.slice(5)
        let curlFunc = require('./curl')
        curlFunc(url)
    }
    else {
       process.stdout.write('You typed: ' + cmd);
       process.stdout.write('\nprompt > ') 
    }
})