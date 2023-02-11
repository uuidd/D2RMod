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
    row.code === 'key' // Key
  ) {
    row.maxstack = config.keys;
  }
});
D2RMM.writeTsv(miscFilename, misc);
