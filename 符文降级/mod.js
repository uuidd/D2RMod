const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

for (let tier = 2; tier <= 33; tier++) {
  let previousTier = tier - 1;
  let output = 'r' + previousTier.toString().padStart(2, '0');

  let recipe = {
    description: 'Rune ' + tier + ' -> Rune ' + previousTier,
    enabled: 1,
    version: 100,
    numinputs: 1,
    'input 1': 'r' + tier.toString().padStart(2, '0'),
    output: output,
    '*eol': 0,
  };

  if (config.requireScrollOfIdentify) {
    recipe.numinputs = 2;
    recipe['input 2'] = 'isc';
  }

  if (config.outputCount == '2') {
    recipe['output b'] = output;
  }
  else if (config.outputCount == '3/2') {
    recipe['output b'] = output;

    if (tier <= 21)
      recipe['output c'] = output;
  }

  cubemain.rows.push(recipe);
}

D2RMM.writeTsv(cubemainFilename, cubemain);