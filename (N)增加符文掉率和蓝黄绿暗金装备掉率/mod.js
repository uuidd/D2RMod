if (config.runes) {
  const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFilename);
  treasureclassex.rows.forEach((row) => {
    const treasureClass = row['Treasure Class'];
    if (treasureClass.match(/^Runes [1-9][0-9]?$/) != null) {
      const groupNumber = +treasureClass.replace(/^Runes ([1-9][0-9]?)$/, '$1');
      if (groupNumber > 1) {
        const restGroupColumn = groupNumber < 17 ? 'Prob3' : 'Prob2';

        row[restGroupColumn] = Math.floor(
          Math.max(
            row[restGroupColumn] / config.runesScaling,
            2 * Math.sqrt(config.runesScaling)
          )
        );
      }
    }
  });
  D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
}

function processValue(value) {
//如果用户希望此稀有物品的下降率为0%
//然后将稀有性设定为非常高的值
//这实际上不会是0%，但这是我们在这里能做的最好的事情
  if (value === 0) {
    return 1000000000;
  }
  return Math.round(100 / value);
}

function processMinValue(value) {
//如果用户希望此稀有物品的下降率为0%
//然后将最小稀有度设置为非常高的值
  if (value === 0) {
    return 1000000000;
  }
  return 1;
}

if (config.equipment) {
  const treasureclassexFilename = 'global\\excel\\itemratio.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFilename);
  treasureclassex.rows.forEach((row) => {
    row.Unique = processValue(config.unique);
    row.Set = processValue(config.set);
    row.Rare = processValue(config.rare);
    row.Magic = processValue(config.magic);
    row.HiQuality = processValue(config.hiquality);

    if (config.disableminimumrarity) {
      row.UniqueMin = processMinValue(config.unique);
      row.SetMin = processMinValue(config.set);
      row.RareMin = processMinValue(config.rare);
      row.MagicMin = processMinValue(config.magic);
    }

    if (config.disablelevelscaling) {
      row.UniqueDivisor = 1000000000;
      row.SetDivisor = 1000000000;
      row.RareDivisor = 1000000000;
      row.MagicDivisor = 1000000000;
      row.HiQualityDivisor = 1000000000;
      row.NormalDivisor = 1000000000;
    }
  });
  D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
}
