const monstats2Filename = 'global\\excel\\monstats2.txt';
const monstats2 = D2RMM.readTsv(monstats2Filename);

function displayBoss(row) {
  const bossCel = {
    'andariel': 1511,
    'uberandariel': 1511,
    'duriel': 1510,
    'uberduriel': 1510,
    'mephisto': 1509,
    'ubermephisto': 1509,
    'baal': 1508,
    'uberbaal': 1508,
    'diabloclone': 1507,
    'diablo': 1506,
    'uberdiablo': 1506,
    'izual': 1505,
    'bloodlord1': 1504,
    'bloodlord2': 1504,
    'bloodlord3': 1504,
    'bloodlord4': 1504,
    'bloodlord5': 1504,
    'willowisp1': 1503,
    'willowisp2': 1503,
    'willowisp3': 1503,
    'willowisp4': 1503,
    'bonefetish1': 1502,
    'bonefetish2': 1502,
    'bonefetish3': 1502,
    'bonefetish4': 1502,
    'bonefetish5': 1502,
    'barricadetower': 1258,
    'cowking': 479,
    'radament': 479,
    'darkelder': 479
  }
  if (row['Id'] in bossCel) {
    row['automapCel'] = bossCel[row['Id']];
    return true;
  } else {
    return false;
  }
}


const atuomapCel0 = [
  'malah',
  'druidhawk',
  'Expansion',
  'act5barb1',
  'act5barb2',
  'drehya',
  'cain6',
  'shadowwarrior',
  'fish',
  'act2vendor1',
  'act2guard1',
  'jamella',
  'maggot',
  'lysander',
  'halbu',
  'jerhyn',
  'act5barb3',
  'act5barb4',
  'geglash',
  'elzix',
  'greiz',
  'act2child',
  'act2female',
  'act2guard5',
  'cain5',
  'act2male',
  'act2vendor2',
  'bug',
  'tyrael2',
  'cain1',
  'roguehire',
  'gheed',
  'necromage',
  'larzuk',
  'akara',
  'chicken',
  'kashya',
  'bunny',
  'act3hire',
  'act2guard3',
  'valkyrie',
  'act5hire1',
  'act5hire2',
  'rat',
  'rogue1',
  'necroskeleton',
  'hydra3',
  'hydra2',
  'injuredbarb1',
  'injuredbarb2',
  'injuredbarb3',
  'hydra1',
  'charsi',
  'warriv1',
  'meshif2',
  'bloodgolem',
  'irongolem',
  'firegolem',
  'bird1',
  'act3male',
  'bird2',
  'act3female',
  'natalya',
  'bat',
  'bonewall',
  'act2guard4',
  'druidbear',
  'eagle',
  'wolf',
  'minispider',
  'act2hire',
  'bear',
  'tyrael3',
  'camel',
  'spiritwolf',
  'meshif1',
  'act2guard2',
  'shadowmaster',
  'qual-kehk',
  'nihlathak',
  'cow',
  'fara',
  'drognan',
  'snake',
  'parrot',
  'atma',
  'warriv2'
]

const noMap1 = [
  'bug',
  'ancientstatue1',
  'fish',
  'injuredbarb2',
  'maggot',
  'ancientstatue3',
  'bunny',
  'scorpion',
  'larva',
  'snake',
  'parrot',
  'bat',
  'bird2',
  'bird1',
  'minispider',
  'injuredbarb3',
  'chicken',
  'injuredbarb1',
  'rat',
  'horse',
  'ancientstatue2',
  'seagull',
  'pig'
]

if (config.allMonsters) {
  monstats2.rows.forEach((row) => {
    if (noMap1.indexOf(row['Id']) !== -1) {
      row['noMap'] = 1;
    }
    if (atuomapCel0.indexOf(row['Id']) !== -1) {
      row['automapCel'] = 0;
    } else if (row['Id'] === 'izualghost') {
      row['automapCel'] = '';
    } else {
      row['automapCel'] = 119;
    }
  });
}

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