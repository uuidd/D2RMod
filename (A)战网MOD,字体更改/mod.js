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


// jgmod��ɫ��׺
if (config.jgmod_color) {
  D2RMM.copyFile('jgmodcolor\\global', 'global', true);
  D2RMM.copyFile('jgmodcolor\\local', 'local', true);
}
