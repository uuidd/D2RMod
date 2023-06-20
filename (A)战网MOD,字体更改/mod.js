// D2RMM.copyFile 3个参数的相关解释
// <mod folder>\hd
// <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
// overwrite any conflicts

function ModFontAndHelp() {
  // 字体更改
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
  // jgmod帮助信息
  if (config.jgmod_help) {
    D2RMM.copyFile('jgmodhelp\\global', 'global', true);
    D2RMM.copyFile('jgmodhelp\\hd', 'hd', true);
    D2RMM.copyFile('jgmodhelp\\Local', 'Local', true);
  }
}

// 选择战网MOD
// 注意copyFile会智能识别替换文件删除文件
// 所以当还原为官方默认时无须MOD作者,自行备份原官方文件
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


// jgmod彩色词缀
if (config.jgmod_color) {
  D2RMM.copyFile('jgmodcolor\\global', 'global', true);
  D2RMM.copyFile('jgmodcolor\\local', 'local', true);
}


// 显示物品等级
if (config.Show_level) {
  // 显示武器等级
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

  // 显示护甲等级
  const armorFilename = 'global\\excel\\armor.txt';
  const armor = D2RMM.readTsv(armorFilename);
  armor.rows.forEach((row) => {
    row.ShowLevel = 1;
  });
  D2RMM.writeTsv(armorFilename, armor);

  // 显示项链戒指珠宝板子等级
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

// 书钥匙堆叠大小
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((row) =>
{
    if (
        row.code === 'tbk' || // Tome of Town Portal,默认20
        row.code === 'ibk' // Tome of Identify,默认20
    )
    {
        row.maxstack = config.tomes_stacks;
    }
    if (
        row.code === 'key' // Key,默认12
    )
    {
        row.maxstack = config.keys_stacks;
    }
});
D2RMM.writeTsv(miscFilename, misc);
