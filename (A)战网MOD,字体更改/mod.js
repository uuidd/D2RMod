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
  case 'mod_wing':
    D2RMM.copyFile('wingmod1.12.0', '', true);
    break;
  case 'mod_yte':
    D2RMM.copyFile('ytemod2.11', '', true);
    break;
  case 'mod_jg':
    D2RMM.copyFile('jgmod4.2.1', '', true);
    break;
}


// jgmod彩色词缀
if (config.jgmod_color) {
  D2RMM.copyFile('jgmodcolor\\global', 'global', true);
  D2RMM.copyFile('jgmodcolor\\local', 'local', true);
}
