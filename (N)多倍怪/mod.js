const levelsFilename = 'global\\excel\\levels.txt';
const levels = D2RMM.readTsv(levelsFilename);
levels.rows.forEach((row) => {
  // 乘以普通怪物
  if (row.MonDen !== '') {
    row.MonDen = Math.floor(row.MonDen * config.multiplier);
    row['MonDen(N)'] = Math.floor(row['MonDen(N)'] * config.multiplier);
    row['MonDen(H)'] = Math.floor(row['MonDen(H)'] * config.multiplier);
  }

  // 乘以暗金/精英怪物的最小数量
  if (row.MonUMin !== '') {
    row.MonUMin = Math.floor(row.MonUMin * config.multiplier);
    row['MonUMin(N)'] = Math.floor(row['MonUMin(N)'] * config.multiplier);
    row['MonUMin(H)'] = Math.floor(row['MonUMin(H)'] * config.multiplier);
  }

  // 乘以暗金/精英怪物的最大数量
  if (row.MonUMax !== '') {
    row.MonUMax = Math.floor(row.MonUMax * config.multiplier);
    row['MonUMax(N)'] = Math.floor(row['MonUMax(N)'] * config.multiplier);
    row['MonUMax(H)'] = Math.floor(row['MonUMax(H)'] * config.multiplier);
  }
});
D2RMM.writeTsv(levelsFilename, levels);
