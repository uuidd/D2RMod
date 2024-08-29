const DIFFICULTY_AFFIXES = ['', '(N)', '(H)'];
const ELEMENTAL_AFFIXES = ['Dm', 'Ma', 'Fi', 'Li', 'Co', 'Po'];

const monstatsFilename = 'global\\excel\\monstats.txt';
const monstats = D2RMM.readTsv(monstatsFilename);
monstats.rows.forEach((row) => {
  ELEMENTAL_AFFIXES.forEach((elementalAffix) => {
    DIFFICULTY_AFFIXES.forEach((difficultyAffix) => {
      const cell = `Res${elementalAffix}${difficultyAffix}`;
      if (row[cell] !== '') {
        row[cell] = Math.min(config.maxres, +row[cell]);
      }
    });
  });
});
D2RMM.writeTsv(monstatsFilename, monstats);

if (config.disableaffixes) {
  const disabledAffixes = [];
  const replacementAffixes = [];

  const monumodFilename = 'global\\excel\\monumod.txt';
  const monumod = D2RMM.readTsv(monumodFilename);
  monumod.rows.forEach((row) => {
    if (
      [
        // “火焰强化”增加75点火抗
        'fire',
        // “闪电强化”增加75点电抗
        'lightning',
        // “冰寒强化”增加75点冰抗
        'cold',
        // “石皮”增加50理抗
        'stoneskin',
        // “魔抗”增加40魔抗
        'resist',
        // “法力燃烧”增加20点魔抗
        'manahit',
      ].indexOf(row.uniquemod) !== -1
    ) {
      row.enabled = 0;
      disabledAffixes.push(row.id);
    }

    if (
      [
        // “Aura Enchanted”是一个很好的、多功能的词缀，最终可以增强进攻、防守或实用性
        'aura',
        // Not a normal mod that can spawn, but increasing HP of unique enemies seems a reasonable compensation for decreasing their resistance
        'hpmultiply',
      ].indexOf(row.uniquemod) !== -1
    ) {
      replacementAffixes.push(row.id);
    }
  });
  D2RMM.writeTsv(monumodFilename, monumod);

  const superuniquesFilename = 'global\\excel\\superuniques.txt';
  const superuniques = D2RMM.readTsv(superuniquesFilename);
  superuniques.rows.forEach((row) => {
    if (disabledAffixes.indexOf(row.Mod1) !== -1) {
      row.Mod1 = replacementAffixes[0];
    }
    if (disabledAffixes.indexOf(row.Mod2) !== -1) {
      row.Mod2 = replacementAffixes[1];
    }
    if (disabledAffixes.indexOf(row.Mod3) !== -1) {
      row.Mod3 = 0;
    }
  });
  D2RMM.writeTsv(superuniquesFilename, superuniques);
}
