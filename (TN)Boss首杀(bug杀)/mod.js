const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

function ClearItem(row, TCName, sum) {
  for (let i = 1; i <= sum; i++) {
    if (row['Treasure Class'] === TCName) {
      row['Item' + i] = '';
      row['Prob' + i] = '';
    }
  }
}

function ModBossQ(row, nBossName, unique, set, rare, magic) {
  if (row['Treasure Class'] === nBossName) {
    row['Unique'] = unique;
    row['Set'] = set;
    row['Rare'] = rare;
    row['Magic'] = magic;
  }
}

function BossQ(row, tcName, actNum, difficulty, abc, prob1, prob2, essence) {
  ModBossQ(row, tcName, 993, 993, 1024, 1024);
  ClearItem(row, tcName, 10);
  if (row['Treasure Class'] === tcName) {
    if (difficulty === 1) {
      difficulty = '';
    } else if (difficulty === 2) {
      difficulty = ' (N)';
    } else if (difficulty === 3) {
      difficulty = ' (H)';
    }
    let actDifficulty = actNum + difficulty;
    row['Item1'] = 'Act ' + actDifficulty + ' Equip ' + abc;
    row['Prob1'] = prob1;
    row['Item2'] = 'Act ' + actDifficulty + ' Good';
    row['Prob2'] = prob2;
    if (essence !== undefined) {
      row['Item3'] = essence;
      row['Prob3'] = 1;
    }
  }
}

// 只修改前4位item
function ModItem4(row, TCName, item1, prob1, item2, prob2, item3, prob3, item4, prob4) {
  if (row['Treasure Class'] === TCName) {
    row['Item1'] = item1;
    row['Prob1'] = prob1;
    row['Item2'] = item2;
    row['Prob2'] = prob2;
    row['Item3'] = item3;
    row['Prob3'] = prob3;
    row['Item4'] = item4;
    row['Prob4'] = prob4;
  }
}

treasureclassex.rows.forEach((row) => {
  // 让所有BOSS都是首杀掉率
  ModBossQ(row, 'Andariel', 995, 995, 1024, 1024);
  ModItem4(row, 'Andariel', 'Act 2 Equip A', 19, 'Act 2 Good', 3, '', '', '', '');
  ModBossQ(row, 'Andariel (N)', 995, 995, 1024, 1024);
  ModItem4(row, 'Andariel (N)', 'Act 2 (N) Equip A', 19, 'Act 2 (N) Good', 3, '', '', '', '');
  ModBossQ(row, 'Andariel (H)', 995, 995, 1024, 1024);
  ModItem4(row, 'Andariel (H)', 'Act 2 (H) Equip A', 19, 'Act 2 (H) Good', 3, 'tes', '1', '', '');


  BossQ(row, 'Duriel - Base', 3, 1, 'A', 19, 3);
  BossQ(row, 'Duriel - Base Desecrated A', 3, 1, 'B', 19, 3);
  BossQ(row, 'Duriel - Base Desecrated B', 5, 1, 'B', 19, 3);
  BossQ(row, 'Duriel - Base Desecrated C', 3, 2, 'A', 19, 3);
  BossQ(row, 'Duriel (N) - Base', 3, 2, 'A', 19, 3);
  BossQ(row, 'Duriel (N) - Base Desecrated A', 4, 2, 'A', 19, 3);
  BossQ(row, 'Duriel (N) - Base Desecrated B', 5, 2, 'B', 19, 3);
  BossQ(row, 'Duriel (N) - Base Desecrated C', 3, 3, 'A', 19, 3);
  BossQ(row, 'Duriel (H) - Base', 3, 3, 'A', 19, 3, 'tes');
  BossQ(row, 'Duriel (H) - Base Desecrated A', 4, 3, 'B', 19, 3, 'tes');
  BossQ(row, 'Duriel (H) - Base Desecrated B', 5, 3, 'A', 19, 3, 'tes');
  BossQ(row, 'Duriel (H) - Base Desecrated C', 5, 3, 'B', 19, 3, 'tes');
  BossQ(row, 'Duriel (H) - Base Desecrated D', 5, 3, 'C', 19, 3, 'tes');

  BossQ(row, 'Mephisto', 4, 1, 'A', 52, 3);
  BossQ(row, 'Mephisto Desecrated A', 4, 1, 'A', 52, 3);
  BossQ(row, 'Mephisto Desecrated B', 5, 1, 'C', 52, 3);
  BossQ(row, 'Mephisto Desecrated C', 3, 2, 'A', 52, 3);
  BossQ(row, 'Mephisto (N)', 4, 2, 'A', 52, 3);
  BossQ(row, 'Mephisto (N) Desecrated A', 4, 2, 'B', 52, 3);
  BossQ(row, 'Mephisto (N) Desecrated B', 5, 2, 'C', 52, 3);
  BossQ(row, 'Mephisto (N) Desecrated C', 3, 3, 'A', 52, 3);
  BossQ(row, 'Mephisto (H)', 4, 3, 'A', 52, 3, 'ceh');
  BossQ(row, 'Mephisto Item (H) Desecrated A', 4, 3, 'B', 52, 3, 'ceh');
  BossQ(row, 'Mephisto Item (H) Desecrated B', 5, 3, 'A', 52, 3, 'ceh');
  BossQ(row, 'Mephisto Item (H) Desecrated C', 5, 3, 'B', 52, 3, 'ceh');
  BossQ(row, 'Mephisto Item (H) Desecrated D', 5, 3, 'C', 52, 3, 'ceh');


  BossQ(row, 'Diablo', 5, 1, 'A', 52, 3);
  BossQ(row, 'Diablo Desecrated A', 1, 2, 'A', 52, 3);
  BossQ(row, 'Diablo Desecrated B', 3, 2, 'A', 52, 3);
  BossQ(row, 'Diablo (N)', 5, 2, 'A', 52, 3);
  BossQ(row, 'Diablo (N) Desecrated A', 5, 2, 'A', 52, 3);
  BossQ(row, 'Diablo (N) Desecrated B', 1, 3, 'A', 52, 3);
  BossQ(row, 'Diablo (N) Desecrated C', 3, 3, 'A', 52, 3);
  BossQ(row, 'Diablo (H)', 5, 3, 'A', 52, 3, 'bet');
  BossQ(row, 'Diablo Item (H) Desecrated A', 5, 3, 'B', 52, 3, 'bet');
  BossQ(row, 'Diablo Item (H) Desecrated B', 5, 3, 'C', 52, 3, 'bet');


  BossQ(row, 'Baal', 1, 2, 'A', 52, 3);
  BossQ(row, 'Baal Desecrated', 3, 2, 'A', 52, 3);
  BossQ(row, 'Baal (N)', 1, 3, 'A', 52, 3);
  BossQ(row, 'Baal (N) Desecrated', 3, 3, 'A', 52, 3);
  BossQ(row, 'Baal (H)', 5, 3, 'B', 52, 3, 'fed');
  BossQ(row, 'Baal Item (H) Desecrated', 5, 3, 'C', 52, 3, 'fed');
});


D2RMM.writeTsv(treasureclassexFilename, treasureclassex);