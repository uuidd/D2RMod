// D2RMM.copyFile 3����������ؽ���
// <mod folder>\hd
// <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
// overwrite any conflicts

function ModFontAndHelp() {
  // �������
  switch (config.fonts_select) {
    case 'mod_1':
      D2RMM.copyFile('fonts\\1', 'hd\\ui\\fonts', true);
      break;
    case 'mod_2':
      D2RMM.copyFile('fonts\\2', 'hd\\ui\\fonts', true);
      break;
    case 'mod_3':
      D2RMM.copyFile('fonts\\3', 'hd\\ui\\fonts', true);
      break;
    case 'mod_4':
      D2RMM.copyFile('fonts\\4', 'hd\\ui\\fonts', true);
      break;
    case 'mod_5':
      D2RMM.copyFile('fonts\\5', 'hd\\ui\\fonts', true);
      break;
  }
  // jgmod������Ϣ
  if (config.jgmod_help) {
    D2RMM.copyFile('jgmodhelp\\global', 'global', true);
    D2RMM.copyFile('jgmodhelp\\hd', 'hd', true);
    D2RMM.copyFile('jgmodhelp\\Local', 'Local', true);
  }
}

// ѡ��ս��MOD
// ע��copyFile������ʶ���滻�ļ�ɾ���ļ�
// ���Ե���ԭΪ�ٷ�Ĭ��ʱ����MOD����,���б���ԭ�ٷ��ļ�
switch (config.talk_mod_select) {
  case 'mod_def':
    ModFontAndHelp();
    break;
  case 'mod_wing':
    D2RMM.copyFile('wingmod1.12.0\\global', 'global', true);
    D2RMM.copyFile('wingmod1.12.0\\hd', 'hd', true);
    D2RMM.copyFile('wingmod1.12.0\\Local', 'Local', true);
    ModFontAndHelp();
    break;
  case 'mod_yte':
    D2RMM.copyFile('ytemod2.10\\global', 'global', true);
    D2RMM.copyFile('ytemod2.10\\hd', 'hd', true);
    D2RMM.copyFile('ytemod2.10\\Local', 'Local', true);
    break;
}


// jgmod��ɫ��׺
if (config.jgmod_color) {
  D2RMM.copyFile('jgmodcolor\\global', 'global', true);
  D2RMM.copyFile('jgmodcolor\\local', 'local', true);
}


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
