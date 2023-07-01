// 70级后升级经验修改
if (config.expNum > 0) {
  const expFilename = 'global\\excel\\experience.txt';
  const experience = D2RMM.readTsv(expFilename);
  experience.rows.forEach((row) => {
    const level = row['Level'];
    if (level !== 'MaxLvl' && level >= 70) {
      const exp = row['ExpRatio\r'] / 1024; // 有效吸收经验百分比
      let expValue = Math.round(((config.expNum / 100) + exp) * 1024); //
      if (expValue >= 1024) {
        row['ExpRatio\r'] = 1024;
      } else {
        row['ExpRatio\r'] = expValue;
      }
    }
  });
  D2RMM.writeTsv(expFilename, experience);
}