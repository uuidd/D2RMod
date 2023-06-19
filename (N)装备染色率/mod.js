// ×°±¸µôÂÊ
const itemratioFilename = 'global\\excel\\itemratio.txt';
const itemratio = D2RMM.readTsv(itemratioFilename);
itemratio.rows.forEach((row) => {
  row.Unique = Math.floor(row.Unique / config.uni_drop);
  row.Rare = Math.floor(row.Rare / config.rar_drop);
  row.Set = Math.floor(row.Set / config.set_drop);
  row.Magic = Math.floor(row.Magic / config.mag_drop);
  row.HiQuality = Math.floor(row.HiQuality / config.hiq_drop);
  if (row.Unique === 0) row.Unique = 1;
  if (row.Rare === 0) row.Rare = 1;
  if (row.Set === 0) row.Set = 1;
  if (row.Magic === 0) row.Magic = 1;
  if (row.HiQuality === 0) row.HiQuality = 1;
});
D2RMM.writeTsv(itemratioFilename, itemratio);