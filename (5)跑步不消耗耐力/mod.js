const charstatsFilename = 'global\\excel\\charstats.txt';
const charstats = D2RMM.readTsv(charstatsFilename);
charstats.rows.forEach((row) => {
  if (row.RunDrain !== '') {
    row.RunDrain = 0;
  }
});
D2RMM.writeTsv(charstatsFilename, charstats);