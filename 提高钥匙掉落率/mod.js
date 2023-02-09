const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

function MultiplyProb(row, item) {
  for (let i = 1; i <= 10; i++) {
    if (row['Item' + i] === item) {
      row['Prob' + i] = Math.floor(row['Prob' + i]*config.multiplier);
      return;
    }
  }
}

treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];

  if (treasureClass === 'Countess Item (H)')
    MultiplyProb(row, 'pk1')

  if (treasureClass === 'Summoner (H)')
    MultiplyProb(row, 'pk2')

  if (treasureClass === 'Nihlathak (H)')
    MultiplyProb(row, 'pk3')
});
D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
