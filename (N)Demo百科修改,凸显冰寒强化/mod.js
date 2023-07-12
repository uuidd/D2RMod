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

// 暂停 退出并保存游戏界面
switch (config.demoSelect) {
  case "pause":
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
                "textString": config.modHelpText, // 帮助页名称
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
    break;
  case "horadriccube":
    const horadriccubelayouthdFileName = 'global\\ui\\layouts\\horadriccubelayouthd.json';
    const horadriccubelayouthd = D2RMM.readJson(horadriccubelayouthdFileName);
    const demoMod = {
      "type": "ButtonWidget", "name": "ModInfo2",
      "fields": {
        "anchor": {"x": 0.5},
        "rect": {"x": 100, "y": 1325},
        "filename": "FrontEnd/HD/Final/FrontEnd_ButtonSmall",
        "textString": config.modHelpText,
        "focusIndicatorFilename": "Controller/HoverImages/FrontEndButtonMain_Hover",
        "focusIndicatorOffset": {"x": 0, "y": 0},
        "onClickMessage": "PanelManager:OpenPanel:demopanel",
        "text/style": "$StyleFEButtonText",
        "pointSize": {"x": 220, "y": 120,},
        "pressedFrame": 1,
        "hoveredFrame": 3,
        "textColor": "$FontColorGoldYellow",
        "disabledTint": {"a": 1.0},
        "sound": "cursor_launch_game_hd",
      }
    }
    horadriccubelayouthd.children.splice(4, 0, demoMod);
    D2RMM.writeJson(horadriccubelayouthdFileName, horadriccubelayouthd);
    break;
}

if (config.demoSelect !== '' || config.demoSelect !== 'def') {
  // 复制组件global下的json文件到mod目录
  //
  D2RMM.copyFile('global', 'global', true);
  const demopanelhdFilename = 'global\\ui\\layouts\\demopanelhd.json'
  const demopanelhd = D2RMM.readJson(demopanelhdFilename);
  demopanelhd.children[0].children[1].children[1].fields.text = "···『 DemoMod 2.6 』···" // 帮助页面大标题
  demopanelhd.children[2].fields.textStrings = ['常用合成公式', '模拟联机交易', '手工品配方', '版本变更']
  D2RMM.writeJson(demopanelhdFilename, demopanelhd);

  function bigTitle(text) {
    return {
      "type": "TableRowWidget", "name": "d",
      "fields": {"rect": {"width": 1700, "height": 120}},
      "children": [
        {
          "type": "TextBoxWidget", "name": "dd",
          "fields": {"text": `【${text}】`, "style": "$StyleSettingsTitle"},
          "children": [
            {
              "type": "ImageWidget", "name": "Divider",
              "fields": {"rect": {"x": 0, "y": 100}, "filename": "PauseMenu\\Divider"}
            }
          ]
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

  // Gold White Blue Yellow Green Red
  function text(text, color, fontSize) {
    if (!color) {
      color = '$FontColorWhite'
    } else {
      color = '$FontColor' + color
    }
    if (!fontSize || fontSize === 1) {
      fontSize = '$MediumFontSize'
    } else if (fontSize === 2) {
      fontSize = '$XMediumLargeFontSize'
    }
    return {
      "type": "TableRowWidget",
      "name": 't',
      "children": [
        {
          "type": "TextBoxWidget",
          "name": 'tt',
          "fields": {
            "text": "★ " + text,
            "style": {
              "fontColor": color,
              "pointSize": fontSize,
              "alignment": {"h": "left", "v": "center"}
            }
          }
        }
      ]
    }
  }

  function tooltipText() {
    return {
      "type": "TableWidget", "name": "MRList",
      "fields": {
        "columns": [
          {"width": 550, "alignment": {"h": "fit", "v": "fit"}},
          {"width": 500, "alignment": {"h": "fit", "v": "fit"}},
          {"width": 600, "alignment": {"h": "fit", "v": "fit"}},
          {"width": 50, "alignment": {"h": "center", "v": "center"}}
        ],
        "rowHeight": 80
      },
      "children": [
        {
          "type": "TableRowWidget", "name": "MRRowTitle",
          "fields": {
            "rect": {"width": 1700, "height": 120}
          },
          "children": [
            {
              "type": "TextBoxWidget", "name": "MRTitle",
              "fields": {
                "text": "·兩孔武器·",
                "style": "$StyleSettingsTitle"
              },
              "children": [
                {
                  "type": "ImageWidget", "name": "Divider",
                  "fields": {
                    "rect": {"x": 0, "y": 100},
                    "filename": "PauseMenu\\Divider"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "TableRowWidget", "name": "MRItem",
          "children": [
            {
              "type": "TextBoxWidget", "name": "MRName",
              "fields": {
                "text": "符文之語",
                "style": {
                  "fontColor": "$FontColorWhite",
                  "pointSize": "$XMediumFontSize",
                  "spacing": "$ReducedSpacing",
                  "alignment": {"h": "left", "v": "center"}
                }
              }
            },
            {
              "type": "TextBoxWidget", "name": "MRBase",
              "fields": {
                "text": "底材",
                "style": {
                  "fontColor": "$FontColorWhite",
                  "pointSize": "$XMediumFontSize",
                  "spacing": "$ReducedSpacing",
                  "alignment": {"h": "left", "v": "center"}
                }
              }
            },
            {
              "type": "TextBoxWidget", "name": "MRRune",
              "fields": {
                "text": "符文（按從左往右順序依次嵌入）",
                "style": {
                  "fontColor": "$FontColorWhite",
                  "pointSize": "$XMediumFontSize",
                  "spacing": "$ReducedSpacing",
                  "alignment": {"h": "left", "v": "center"}
                }
              }
            }
          ]
        },
        {
          "type": "TableRowWidget", "name": "Row Spacer"
        },
        {
          "type": "TableRowWidget", "name": "MRItem",
          "children": [
            {
              "type": "TextBoxWidget", "name": "MRName",
              "fields": {
                "text": "葉子(Leaf)",
                "style": {
                  "fontColor": "$FontColorWhite",
                  "pointSize": "$XMediumFontSize",
                  "spacing": "$ReducedSpacing",
                  "alignment": {"h": "left", "v": "center"}
                }
              }
            },
            {
              "type": "TextBoxWidget", "name": "MRBase",
              "fields": {
                "text": "2孔 法師雙手法杖",
                "style": {
                  "fontColor": "$FontColorWhite",
                  "pointSize": "$XMediumFontSize",
                  "spacing": "$ReducedSpacing",
                  "alignment": {"h": "left", "v": "center"}
                }
              }
            },
            {
              "type": "TextBoxWidget", "name": "MRRune",
              "fields": {
                "text": "3 + 8",
                "style": {
                  "fontColor": "$FontColorWhite",
                  "pointSize": "$XMediumFontSize",
                  "spacing": "$ReducedSpacing",
                  "alignment": {"h": "left", "v": "center"}
                }
              }
            },
            {
              "type": "FocusableWidget", "name": "MRButton",
              "fields": {
                "fitToParent": true,
                "tooltipString": "葉子(Leaf)\n增加 5-30 火焰傷害\n+3 火焰技能\n+3 火彈 (限法師)\n+3 地獄之火 (限法師)\n+3 暖氣 (限法師)\n+2 法力在每殺死一名敵人之後取得\n+2-198 防禦 (依角色等級乘2)\n+33% 冰冷抗性\n美中不足：缺FCR，純火SOR和冰火SOR的開荒利器\n底材推薦\n底材可以找阿卡拉或者卓格南\n短棍：技能自然是火系為佳，帶輔助技能省技能點也可以考慮\n其他：SOLO中有3火球的底材皆可使用",
                "tooltipStyle": "$TooltipStyle",
                "tooltipStyle": {
                  "fontStyle": {
                    "options": {"newlineHandling": "standard"}
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }

  function space() {
    return {
      "type": "TableRowWidget", "name": "Row Spacer"
    }
  }

  const demo1panelhdFilename = 'global\\ui\\layouts\\demo1panelhd.json'
  const demo1panelhd = D2RMM.readJson(demo1panelhdFilename);
  demo1panelhd.children[1].children[0].children = [];
  const children1 = demo1panelhd.children[1].children[0].children;
  children1.push(bigTitle('备注'));
  children1.push(text('如果没有指定数量，默认为一个', 'Red', 2));
  children1.push(text('如果只有一个的物品，直接合成即可', 'Red', 2));
  children1.push(bigTitle('常用合成公式'));
  // demo1panelhd.children[1].children[0] = tooltipText();
  children1.push(tooltipText());
  D2RMM.writeJson(demo1panelhdFilename, demo1panelhd);
}


