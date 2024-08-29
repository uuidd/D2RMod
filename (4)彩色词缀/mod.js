// global\ui\layouts\characterstatspanelhd.json和hirelinginventorypanelhd.json只影响角色与佣兵属性下方的四种抗性彩色
// local\lng\strings\ui.json和上面文件关联产生角色与佣兵属性下方的四种抗性彩色的效果
// local\lng\strings\item-modifiers.json是各种装备词缀属性的彩色

function addOptions(PanelHDChildren) {
  for (const children of PanelHDChildren) {
    if ("fields" in children) {
      if ("text" in children["fields"]) {
        const res = ['@strchrfir', "@strchrcol", "@strchrlit", "@strchrpos"]
        if (res.includes(children["fields"]["text"])) {
          children["fields"]["style"]["options"] = {"pipeCharacterBehavior": "handle"}
        }
      }
    }
  }
}

// 开启角色面板火电冰毒抗颜色转化
const characterStatsPanelHDFilename = 'global\\ui\\layouts\\characterstatspanelhd.json';
let characterStatsPanelHD = D2RMM.readJson(characterStatsPanelHDFilename);
addOptions(characterStatsPanelHD["children"]);
D2RMM.writeJson(characterStatsPanelHDFilename, characterStatsPanelHD);

// 开启佣兵面板火电冰毒抗颜色转化
const hirelingInventoryPanelHDFilename = 'global\\ui\\layouts\\hirelinginventorypanelhd.json';
let hirelingInventoryPanelHD = D2RMM.readJson(hirelingInventoryPanelHDFilename);
addOptions(hirelingInventoryPanelHD["children"]);
D2RMM.writeJson(hirelingInventoryPanelHDFilename, hirelingInventoryPanelHD);


// 面板UI文本显示
const uiFilename = 'local\\lng\\strings\\ui.json';
let ui = D2RMM.readJson(uiFilename);
ui.forEach((item) => {
  const itemKey = item.Key
  // 火抗
  if (itemKey === 'strchrfir') {
    item['zhTW'] = 'ÿc1' + item['zhTW'];
    item['zhCN'] = 'ÿc1' + item['zhCN'];
  }
  // 冰抗
  if (itemKey === 'strchrcol') {
    item['zhTW'] = 'ÿcT' + item['zhTW'];
    item['zhCN'] = 'ÿcT' + item['zhCN'];
  }
  // 电抗
  if (itemKey === 'strchrlit') {
    item['zhTW'] = 'ÿc9' + item['zhTW'];
    item['zhCN'] = 'ÿc9' + item['zhCN'];
  }
  // 毒抗
  if (itemKey === 'strchrpos') {
    item['zhTW'] = 'ÿc2' + item['zhTW'];
    item['zhCN'] = 'ÿc2' + item['zhCN'];
  }
  //
})
D2RMM.writeJson(uiFilename, ui);

function addTextColor(item, keyName, color) {
  if (item.Key === keyName) {
    for (let key in item) {
      if (key === "id" || key === "Key") continue;
      item[key] = 'ÿc' + color + item[key] + 'ÿc3';
    }
  }
}

// 彩色词缀
const itemModifiersFilename = 'local\\lng\\strings\\item-modifiers.json';
let itemModifiers = D2RMM.readJson(itemModifiersFilename);
itemModifiers.forEach((item) => {
  addTextColor(item, 'Socketable', 'O');
  // 火电冰毒抗/减伤/增伤
  addTextColor(item, 'ModStr1j', 1);
  addTextColor(item, 'Moditemenresfiresk', 1);
  addTextColor(item, 'ModitemdamFiresk', 1);
  addTextColor(item, 'ModStr1k', 'T');
  addTextColor(item, 'Moditemenrescoldsk', 'T');
  addTextColor(item, 'ModitemdamColdsk', 'T');
  addTextColor(item, 'ModStr1l', 9);
  addTextColor(item, 'Moditemenresltngsk', 9);
  addTextColor(item, 'ModitemdamLtngsk', 9);
  addTextColor(item, 'ModStr1n', 2);
  addTextColor(item, 'Moditemenrespoissk', 2);
  addTextColor(item, 'ModitemdamPoissk', 2);

  addTextColor(item, 'ModStr2y', 3);
  addTextColor(item, 'ModStr2z', 'U');
  addTextColor(item, 'ModStr3a', 8);
  addTextColor(item, 'ModStr3b', 8);
  addTextColor(item, 'ModStr3c', 8);
  addTextColor(item, 'ModStr3d', 8);
  addTextColor(item, 'ModStr3e', 8);
  addTextColor(item, 'ModStr3i', 8);
  addTextColor(item, 'ModStr3k', 8);
  addTextColor(item, 'ModStr4m', ';');
  addTextColor(item, 'ModStr4s', ';');
  addTextColor(item, 'ModStr4v', ';');
  addTextColor(item, 'ModStr5z', 'T');
  addTextColor(item, 'strModEnhancedDamage', 'U');
  addTextColor(item, 'strModAllResistances', 'O');
  addTextColor(item, 'strModAllSkillLevels', '8');
  addTextColor(item, 'StrSklTabItem1', '8');
  addTextColor(item, 'StrSklTabItem2', '8');
  addTextColor(item, 'StrSklTabItem3', '8');
  addTextColor(item, 'StrSklTabItem4', '8');
  addTextColor(item, 'StrSklTabItem5', '8');
  addTextColor(item, 'StrSklTabItem6', '8');
  addTextColor(item, 'StrSklTabItem7', '8');
  addTextColor(item, 'StrSklTabItem8', '8');
  addTextColor(item, 'StrSklTabItem9', '8');
  addTextColor(item, 'StrSklTabItem10', '8');
  addTextColor(item, 'StrSklTabItem11', '8');
  addTextColor(item, 'StrSklTabItem12', '8');
  addTextColor(item, 'StrSklTabItem13', '8');
  addTextColor(item, 'StrSklTabItem14', '8');
  addTextColor(item, 'StrSklTabItem15', '8');
  addTextColor(item, 'StrSklTabItem16', '8');
  addTextColor(item, 'StrSklTabItem17', '8');
  addTextColor(item, 'StrSklTabItem18', '8');
  addTextColor(item, 'StrSklTabItem19', '8');
  addTextColor(item, 'StrSklTabItem20', '8');
  addTextColor(item, 'StrSklTabItem21', '8');
  addTextColor(item, 'AmaOnly', '8');
  addTextColor(item, 'SorOnly', '8');
  addTextColor(item, 'NecOnly', '8');
  addTextColor(item, 'PalOnly', '8');
  addTextColor(item, 'BarOnly', '8');
  addTextColor(item, 'DruOnly', '8');
  addTextColor(item, 'AssOnly', '8');
  addTextColor(item, 'ModStr1w', '4');
  addTextColor(item, 'ModStr1x', '4');
  addTextColor(item, 'ModStre8b', '8');
  addTextColor(item, 'ModStre8a', '8');
  addTextColor(item, 'ModStre8h', '8');
  addTextColor(item, 'ModStre8i', '8');
  addTextColor(item, 'ModStre8j', '8');
  addTextColor(item, 'ModStre8k', '8');
  addTextColor(item, 'ModStre8l', '8');
  addTextColor(item, 'ModStre8m', '8');
  addTextColor(item, 'ModStre8n', '8');
  addTextColor(item, 'ModStre8o', '8');
  addTextColor(item, 'ModStre8p', '8');
  addTextColor(item, 'ModStre8q', '8');
  addTextColor(item, 'ModStre8r', '8');
  addTextColor(item, 'ModStre8s', '8');
  addTextColor(item, 'ModStre8t', '8');
  addTextColor(item, 'ModStre8u', '8');
  addTextColor(item, 'ModStre8v', '8');
  addTextColor(item, 'ModStre8w', '8');
  addTextColor(item, 'ModStre8x', '8');
  addTextColor(item, 'ModStre8y', '8');
  addTextColor(item, 'ModStre8z', '8');
  addTextColor(item, 'ModStre9a', '8');
  addTextColor(item, 'ModStre9b', '8');
  addTextColor(item, 'strethereal', 'O');
  addTextColor(item, 'strItemModEtherealSocketed', 'O');

})
D2RMM.writeJson(itemModifiersFilename, itemModifiers);