module.exports = function pwd(cmd) {
    //const cmd = data.toString().trim() 
        process.stdout.write(process.cwd())
        process.stdout.write('\nprompt > ')
}