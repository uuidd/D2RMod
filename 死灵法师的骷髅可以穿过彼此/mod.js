const monstats2Filename = 'global\\excel\\monstats2.txt';
const monstats2File = D2RMM.readTsv(monstats2Filename);

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
monstats2File.rows.forEach(row => {
  if (minions.includes(row.Id)) {
    row.SizeX = 0;
    row.SizeY = 0;
  }
});

D2RMM.writeTsv(monstats2Filename, monstats2File);
