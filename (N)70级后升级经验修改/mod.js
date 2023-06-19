const expFilename = 'global\\excel\\experience.txt';
const experience = D2RMM.readTsv(expFilename);

experience.rows.forEach((row) => {
        for (const key in row) {
            if(key.includes('ExpRatio') && row[key] !== 10){
                row[key] = 1024;
            }
        }
});
D2RMM.writeTsv(expFilename, experience);