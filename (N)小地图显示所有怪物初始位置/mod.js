const monstats2Filename = 'global\\excel\\monstats2.txt';
const monstats2 = D2RMM.readTsv(monstats2Filename);

if (config.allMonsters){
  monstats2.rows.forEach((row) => {
        for (const key in row) {
            if(key.includes('ExpRatio') && row[key] !== 10){
                row[key] = 1024;
            }
        }
});
}

D2RMM.writeTsv(monstats2Filename, monstats2);