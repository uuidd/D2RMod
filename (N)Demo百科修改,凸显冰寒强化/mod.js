const npcsFilename = 'local\\lng\\strings\\npcs.json';
const npcs = D2RMM.readJson(npcsFilename);
if (config.baike) {
  npcs.forEach((item) => {
    const itemKey = item.Key;
    let twName = null;
    let cnName = null;
    // 版本信息
    if (itemKey === "modsversion") {
      twName = "模組版本：v" + config.modsVersion + " (適配遊戲版本:2.7/2.6)";
      cnName = "模组版本：v" + config.modsVersion + " (适配游戏版本:2.7/2.6)"
    }
    if (itemKey === "jgmodversion") {
      twName = "Demo v" + config.modsVersion;
      cnName = "Demo v" + config.modsVersion;
    }
    if (itemKey === "modsupdatedate") {
      twName = "更新日期：" + config.modsUpdateDate
      cnName = "更新日期：" + config.modsUpdateDate
    }

    // 打孔，反镶嵌
    // 洗物品
    // 手工品

    if (cnName != null && twName != null) {
      item['zhTW'] = twName;
      item['zhCN'] = cnName;
    }
  });
}

D2RMM.writeJson(npcsFilename, npcs);

// 凸显冰寒强化文本
const monstersFilename = 'local\\lng\\strings\\monsters.json';
const monsters = D2RMM.readJson(monstersFilename);
if (config.coldText) {
  monsters.forEach((item) => {
    if (item.Key === 'monsteruniqueprop1') {
      item['zhTW'] = 'ÿcN╪冰寒強化';
      item['zhCN'] = 'ÿcN╪冰霜强化';
    }
  });
}
D2RMM.writeJson(monstersFilename, monsters);