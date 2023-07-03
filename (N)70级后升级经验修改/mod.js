// Modify the proportion of effective experience points obtained after level 70
if (config.expNum > 0) {
  const experienceFilename = 'global\\excel\\experience.txt';
  const experience = D2RMM.readTsv(experienceFilename);
  experience.rows.forEach((row) => {
    const level = row['Level'];
    if (level !== 'MaxLvl' && level >= config.expStartLevel) {
      const exp = row['ExpRatio\r'] / 1024;
      let expValue = Math.round(((config.expIncreaseNum / 100) + exp) * 1024);
      if (expValue >= 1024) {
        if (config.expRemoveMaxLimit) {
          row['ExpRatio\r'] = expValue;
        } else {
          row['ExpRatio\r'] = 1024;
        }
      } else {
        row['ExpRatio\r'] = expValue;
      }
    }
  });
  D2RMM.writeTsv(experienceFilename, experience);
}