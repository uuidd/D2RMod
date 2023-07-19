const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
const baseRecipe = {
  enabled: 1,
  version: 100,
  plvl: 100,
  '*eol\r': 0,
};

if (config.infinite_arrows) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `3 Arrows -> 1 Infinite arrows`,
    numinputs: 3,
    'input 1': `"aqv,qty=3"`,
    output: 'aqv',
    'mod 1': 'noconsume',
    'mod 1 min': 75,
    'mod 1 max': 75,
    'mod 2': 'rep-quant',
    'mod 2 param': 99,
    'mod 2 min': 500,
    'mod 2 max': 500
  });
}

if (config.infinite_bolts) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `3 Bolt -> 1 Infinite bolts`,
    numinputs: 3,
    'input 1': `"cqv,qty=3"`,
    output: 'cqv',
    'mod 1': 'noconsume',
    'mod 1 min': 75,
    'mod 1 max': 75,
    'mod 2': 'rep-quant',
    'mod 2 param': 99,
    'mod 2 min': 500,
    'mod 2 max': 500
  });
}
D2RMM.writeTsv(cubemainFilename, cubemain);