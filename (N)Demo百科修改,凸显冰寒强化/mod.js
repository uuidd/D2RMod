if (config.demoInfo) {
  const npcsFilename = 'local\\lng\\strings\\npcs.json';
  const npcs = D2RMM.readJson(npcsFilename);
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
  D2RMM.writeJson(npcsFilename, npcs);
}


// 凸显冰寒强化文本

if (config.coldText) {
  const monstersFilename = 'local\\lng\\strings\\monsters.json';
  const monsters = D2RMM.readJson(monstersFilename);
  monsters.forEach((item) => {
    if (item.Key === 'monsteruniqueprop1') {
      item['zhTW'] = 'ÿcN╪冰寒強化';
      item['zhCN'] = 'ÿcN╪冰霜强化';
    }
  });
  D2RMM.writeJson(monstersFilename, monsters);
}


// 查询 Demo 百科
if (config.demoSelect) {
  // 暂停 退出并保存游戏界面
  const pauselayouthdFilename = 'global\\ui\\layouts\\pauselayouthd.json';
  const pauselayouthd = D2RMM.readJson(pauselayouthdFilename);
  pauselayouthd.children.forEach((item) => {
    if (item.name === 'PauseTable') {
      const demoMod = {
        "type": "TableRowWidget",
        "name": "Demo Select",
        "children": [
          {
            "type": "ButtonWidget",
            "name": "Settings",
            "fields": {
              "filename": "PauseMenu\\PauseButton",
              "hoveredFrame": 3,
              "textString": "DemoMod 2.6", // 帮助页名称
              "onClickMessage": "PanelManager:OpenPanel:demopanel", // 点击动作开启的的页面，对应global\ui\layouts\{}hd.json
              "textColor": "$FontColorOrange", // 字体颜色
              "text/style": "$StyleFEButtonText",
              "acceptsReturnKey": true,
              "focusOnMouseOver": true,
              "sound": "select"
            }
          }
        ]
      }
      item.children.unshift(demoMod);
    }
  });
  D2RMM.writeJson(pauselayouthdFilename, pauselayouthd);
  // 复制组件global下的json文件到mod目录
  //
  D2RMM.copyFile('global', 'global', true);
  const demopanelhdFilename = 'global\\ui\\layouts\\demopanelhd.json'
  const demopanelhd = D2RMM.readJson(demopanelhdFilename);
  demopanelhd.children[0].children[1].children[1].fields.text = "···『 DemoMod 2.6 』···" // 帮助页面大标题
  demopanelhd.children[2].fields.textStrings = ['常用合成公式', '模拟联机交易', '手工品配方', '版本变更']
  D2RMM.writeJson(demopanelhdFilename, demopanelhd);

  function bigTitle(enName, text) {
    return {
      "type": "TableRowWidget",
      "name": enName,
      "children": [
        {
          "type": "TextBoxWidget",
          "name": enName,
          "fields": {
            "text": text,
            "style": {
              "fontColor": "$FontColorGold",
              "pointSize": "$XMediumLargeFontSize",
              "spacing": "$ReducedSpacing",
              "alignment": {"h": "left", "v": "center"},
              "options": {"lineWrap": true}
            }
          }
        }
      ]
    }
  }

  function smallTitle(enName, text) {
    return {
      "type": "TableRowWidget",
      "name": enName,
      "children": [
        {
          "type": "TextBoxWidget",
          "name": enName,
          "fields": {"text": text, "style": "$StyleSettingsTitle"},
          "children": [
            {
              "type": "ImageWidget",
              "name": "Divider",
              "fields": {"rect": "$RMDOptionsDividerRect", "filename": "PauseMenu\\Divider"}
            }]
        }
      ]
    }
  }

  function text(enName, text) {
    return {
      "type": "TableRowWidget",
      "name": enName,
      "children": [
        {
          "type": "TextBoxWidget",
          "name": enName,
          "fields": {
            "text": text,
            "style": {
              "fontColor": "$FontColorWhite", // $FontColorRed $FontColorGold $FontColorBlue
              "pointSize": "$MediumFontSize", // $XMediumLargeFontSize
              "alignment": {"h": "left", "v": "center"}
            }
          }
        }
      ]
    }
  }

  const demo1panelhdFilename = 'global\\ui\\layouts\\demo1panelhd.json'
  const demo1panelhd = D2RMM.readJson(demopanelhdFilename);
  demo1panelhd.children[1].children[0].children = [];
  const children1 = demo1panelhd.children[1].children[0].children;
  children1.push(...bigTitle('',''));

  D2RMM.writeJson(demo1panelhdFilename, demo1panelhd);
}


