const statesFilename = 'global\\excel\\states.txt';
const states = D2RMM.readTsv(statesFilename);

//any find & nullify the aura sounds...
states.rows.forEach((row) => {
    if (row.onsound.includes('aura')){
        row.onsound = '';
    }
});


// states.rows.push({
//     state: 'rogueMerc',
//     group: 3,
//     transform: 1,
//     restrict: 1,
//     disguise: 1,
//     damblue: 1,
//     armblue: 1,
//     setfunc: 14,
//     gfxtype: 1,
//     gfxclass: 271, //
//     '*eol\r':'0'
// });	

// Save changes
D2RMM.writeTsv(statesFilename, states);
