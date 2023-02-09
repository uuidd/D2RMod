const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

uniqueitems.rows.forEach((row) => {
  var index = row.index;

  var enabled = config.enableregularitempool ? '1' : '';

  if (index === 'Cold Rupture') {
    row.enabled = enabled;
    row.ladder = '';
  }

  if (index === 'Flame Rift') {
    row.enabled = enabled;
    row.ladder = '';
  }

  if (index === 'Crack of the Heavens') {
    row.enabled = enabled;
    row.ladder = '';
  }

  if (index === 'Rotting Fissure') {
    row.enabled = enabled;
    row.ladder = '';
  }

  if (index === 'Bone Break') {
    row.enabled = enabled;
    row.ladder = '';
  }

  if (index === 'Black Cleft') {
    row.enabled = enabled;
    row.ladder = '';
  }
});
D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

if (config.enablebossitempool && config.bossdropweight > 0) {
  const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

  const bosses = ['Andariel (H)', 'Andarielq (H)', 'Duriel (H) - Base', 'Durielq (H) - Base', 'Mephisto (H)', 'Mephistoq (H)', 'Diablo (H)', 'Diabloq (H)', 'Baal (H)', 'Baalq (H)'];
  const minorbosses = ['Blood Raven (H)', 'Radament (H)', 'Summoner (H)', 'Izual (H)', 'Haphesto (H)', 'Nihlathak (H)'];

  treasureclassex.rows.forEach((row) => {
    var treasureClass = row['Treasure Class'];

    if (treasureClass === 'Sunder Charms')
    {
        row.ladder = '';
        row.NoDrop = '0';
        for (let i = 1; i <= 10; i++) {
          if (row['Item' + i] !== '') {
            row['Prob' + i] = '1';
          }
        }
    }
  
    if (bosses.includes(treasureClass)) {
      let totalWeight = 0;
      for (let i = 1; i <= 10; i++) {
        if (row['Item' + i] == '') {
          row['Item' + i] = 'Sunder Charms';
          row['Prob' + i] = Math.max(Math.round((config.bossdropweight/100)*totalWeight), 1);
          break;
        }
        else {
          totalWeight += +row['Prob' + i];
        }
      }
    }

    if (minorbosses.includes(treasureClass)) {
      let totalWeight = 0;
      for (let i = 1; i <= 10; i++) {
        if (row['Item' + i] == '') {
          row['Item' + i] = 'Sunder Charms';
          row['Prob' + i] = Math.max(Math.round((config.bossdropweight/200)*totalWeight), 1);
          break;
        }
        else {
          totalWeight += +row['Prob' + i];
        }
      }
    }
  });
  D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
}