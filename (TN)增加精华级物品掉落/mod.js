const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);
// 精华级物品
treasureclassex.rows.forEach(tc => {
  if (tc['Treasure Class'].match(/(^Act [2-5] (Equip|Melee) [A-C]$)|(^Act [1-5] \((N|H)\) (Equip|Melee|Bow) [A-C]$)|(^Act [4-5] Bow [A-C]$)/) != null) {
    tc.Prob9 = Math.floor(Math.max(tc.Prob9 / config.eliteMultiplier, 2 * Math.sqrt(config.eliteMultiplier)));
  }
});

D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
