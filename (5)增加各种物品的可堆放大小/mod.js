const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((row) => {
  if (
    row.code === 'tbk' || // Tome of Town Portal
    row.code === 'ibk' // Tome of Identify
  ) {
    row.maxstack = config.tomes;
  }
  if (
    row.code === 'aqv' || // Arrows
    row.code === 'cqb' // Bolts
  ) {
    row.maxstack = config.projectiles;
  }
  if (
    row.code === 'key' // Key
  ) {
    row.maxstack = config.keys;
  }
});
D2RMM.writeTsv(miscFilename, misc);

const weaponsFilename = 'global\\excel\\weapons.txt';
const weapons = D2RMM.readTsv(weaponsFilename);
weapons.rows.forEach((row) => {
  if (
    // 不要修改投掷药剂（汽油、油壶）
    row.type !== 'tpot' &&
    // 只修改投掷武器
    row.stackable === '1'
  ) {
    row.minstack = config.throwingweapons;
    row.maxstack = config.throwingweapons;
    row.spawnstack = config.throwingweapons;
  }
});
D2RMM.writeTsv(weaponsFilename, weapons);
