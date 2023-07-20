// 去掉死亡时的经验惩罚
if (config.nightmare !== 5 && config.hell !== 10) {
  const difficultylevelsFilename = 'global\\excel\\difficultylevels.txt';
  const difficultylevels = D2RMM.readTsv(difficultylevelsFilename);
  difficultylevels.rows.forEach((row) => {
    if (row['Name'] === 'Nightmare') {
      row['DeathExpPenalty'] = config.nightmare;
    } else if (row['Name'] === 'Hell') {
      row['DeathExpPenalty'] = config.hell;
    }else if (row['Name'] === 'Normal'){
      row['DeathExpPenalty'] = config.normal;
    }
  });
  D2RMM.writeTsv(difficultylevelsFilename, difficultylevels);
}


