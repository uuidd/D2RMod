const monstats2Filename = 'global\\excel\\monstats2.txt';
const monstats2 = D2RMM.readTsv(monstats2Filename);

// 死灵法师的召唤物可以穿过彼此
function getEnabledMinions() {
  let minions = [];

  if (config.necroskeleton) {
    minions = [...minions, 'necroskeleton'];
  }

  if (config.necromage) {
    minions = [...minions, 'necromage'];
  }

  if (config.golems) {
    minions = [...minions, 'claygolem', 'bloodgolem', 'irongolem', 'firegolem'];
  }

  return minions;
}

const minions = getEnabledMinions();
monstats2.rows.forEach(row => {
  if (minions.includes(row.Id)) {
    row.SizeX = 0;
    row.SizeY = 0;
  }
});

D2RMM.writeTsv(monstats2Filename, monstats2);