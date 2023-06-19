// ��ʾ��Ʒ�ȼ�
if (config.Show_level) {
  // ��ʾ�����ȼ�
  const weaponsFilename = 'global\\excel\\weapons.txt';
  const weapons = D2RMM.readTsv(weaponsFilename);
  weapons.rows.forEach((row) => {
    if (
      // don't modify throwing potions (gas, oil pots)
      row.type !== 'tpot'
    ) {
      row.ShowLevel = 1;
    }
  });
  D2RMM.writeTsv(weaponsFilename, weapons);

  // ��ʾ���׵ȼ�
  const armorFilename = 'global\\excel\\armor.txt';
  const armor = D2RMM.readTsv(armorFilename);
  armor.rows.forEach((row) => {
    row.ShowLevel = 1;
  });
  D2RMM.writeTsv(armorFilename, armor);

  // ��ʾ������ָ�鱦���ӵȼ�
  const miscFilename = 'global\\excel\\misc.txt';
  const misc = D2RMM.readTsv(miscFilename);
  misc.rows.forEach((row) => {
    if (['amu', 'rin'].indexOf(row.code) !== -1) {
      row.ShowLevel = 1;
    }
    if (['cm1', 'cm2', 'cm3'].indexOf(row.code) !== -1) {
      row.ShowLevel = 1;
    }
    if (['jew'].indexOf(row.code) !== -1) {
      row.ShowLevel = 1;
    }
  });
  D2RMM.writeTsv(miscFilename, misc);
}

// ��Կ�׶ѵ���С
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((row) =>
{
    if (
        row.code === 'tbk' || // Tome of Town Portal,Ĭ��20
        row.code === 'ibk' // Tome of Identify,Ĭ��20
    )
    {
        row.maxstack = config.tomes_stacks;
    }
    if (
        row.code === 'key' // Key,Ĭ��12
    )
    {
        row.maxstack = config.keys_stacks;
    }
});
D2RMM.writeTsv(miscFilename, misc);
