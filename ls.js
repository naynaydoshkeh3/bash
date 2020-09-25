module.exports = function(cmd){
    const fs = require('fs');
    fs.readdir('./', 'utf8', (err, files) => {
        if(err){
            throw err
        }else{
            process.stdout.write(files.join(' '))
            process.stdout.write("\nPrompt > ")
        }
    })

}

/*
module.exports = function pwd(cmd) {
    //const cmd = data.toString().trim() 
        process.stdout.write(process.cwd())
        process.stdout.write('\nprompt > ')
}*/