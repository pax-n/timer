const argv = process.argv.slice(2);

if (argv === ''){
  return ''
};

for (let i = 0; i < argv.length; i++) {
  if (argv[i] < 0 || isNaN(argv[i])) {
    continue;
  } else {
    setTimeout (() => {
      process.stdout.write(`${argv[i]} seconds\x07\n`)
    }, argv[i] * 1000) 
  }
};