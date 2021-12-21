const fs = require('fs');

fs.writeFile('data.txt', 'Hello World!', (err) => {
    if (err) throw err;
    else console.log('File saved!');
})

// mai kya kar raha hu ?