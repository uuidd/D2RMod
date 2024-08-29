const levelsFilename = 'global\\excel\\levels.txt';
const levels = D2RMM.readTsv(levelsFilename);

function SetData(row, colName) {
    if (row[colName] !== '') {
        row[colName] = Math.floor(row[colName] * config.multiplier);
    }
}

function SetDataElite(row, colName) {
    if (row[colName] !== '') {
        row[colName] = Math.floor(row[colName] * config.EliteMon);
    }
}

levels.rows.forEach((row) => {
    SetData(row, 'MonDen');
    SetData(row, 'MonDen(N)');
    SetData(row, 'MonDen(H)');

    SetData(row, 'MonUMin');
    SetData(row, 'MonUMax');

    SetData(row, 'MonUMin(N)');
    SetData(row, 'MonUMax(N)');

    SetDataElite(row, 'MonUMin(H)');
    SetDataElite(row, 'MonUMax(H)');        
});

D2RMM.writeTsv(levelsFilename, levels);
