const levelsFilename = 'global\\excel\\levels.txt';
const levels = D2RMM.readTsv(levelsFilename);

// *法BUG产生的原因原来是打了一个txt占用了系统内存,导致MOD管理器无法删除所以越*越多
// 关闭掉txt占用,MOD管理器重新INSTALL一下就行了

function SetData(row, colName) {
    if (row[colName] !== '') {
        row[colName] = Math.floor(row[colName] * config.multiplier);
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

    SetData(row, 'MonUMin(H)');
    SetData(row, 'MonUMax(H)');        
});

D2RMM.writeTsv(levelsFilename, levels);
