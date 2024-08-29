const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

function MultiplyProb(row, item) {
  for (let i = 1; i <= 10; i++) {
    if (row['Item' + i] === item) {
      row['Prob' + i] = Math.floor(row['Prob' + i] * config[item]);
      return;
    }
  }
}

// 6boss钥匙
treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];

  if (treasureClass.includes('Countess Item (H)'))
    MultiplyProb(row, 'pk1')

  if (treasureClass === 'Summoner (H)' || treasureClass.includes('Summoner Item (H)'))
    MultiplyProb(row, 'pk2')

  if (treasureClass === 'Nihlathak (H)' || treasureClass.includes('Nihlathak Item (H)'))
    MultiplyProb(row, 'pk3')
});

D2RMM.writeTsv(treasureclassexFilename, treasureclassex);