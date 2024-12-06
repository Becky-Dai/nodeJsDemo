console.log(process.argv[0]);

console.log(process.env.windir);

console.log(process.pid);

console.log(process.cwd());

console.log(process.title)

console.log(process.memoryUsage());

console.log(process.uptime());

process.on('exit',(code) => {
    console.log(` exit with the code: ${code}`);
});

process.exit(0);

console.log('hello from after exit!');