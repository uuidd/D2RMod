const mainMenuPanelHDFilename = 'global\\ui\\layouts\\mainmenupanelhd.json';

let mainMenuPanelHD = D2RMM.readJson(mainMenuPanelHDFilename);

mainMenuPanelHD.children.push(
  {
    "type": "ButtonWidget",
    "name": "Hell",
    "fields": {
      "rect": {
        "x": -500,
        "y": 400,
        "width": 1000,
        "height": 1400
      },
      "anchor": {
        "x": 0.5
      },
      "tooltipString": "点击角色快速建立最高难度游戏",
      "onClickMessage": "CharacterSelect:LoadCharacter:2",
      "textColor": "$LightButtonTextColor",
      "text/style": "$StyleFEButtonText"
    }
  }
)
mainMenuPanelHD.children.push(
  {
    "type": "ButtonWidget",
    "name": "Hell",
    "fields": {
      "rect": {
        "x": -1100,
        "y": 400,
        "width": 500,
        "height": 1400
      },
      "anchor": {
        "x": 0.5
      },

      "tooltipString": "点击快速建立普通难度游戏",
      "onClickMessage": "CharacterSelect:LoadCharacter:0",
      "textColor": "$LightButtonTextColor",
      "text/style": "$StyleFEButtonText"
    }
  }
)
mainMenuPanelHD.children.push(
  {
    "type": "ButtonWidget",
    "name": "Hell",
    "fields": {
      "rect": {
        "x": 600,
        "y": 400,
        "width": 500,
        "height": 1400
      },
      "anchor": {
        "x": 0.5
      },
      "tooltipString": "点击快速建立噩梦难度游戏",
      "onClickMessage": "CharacterSelect:LoadCharacter:1",
      "textColor": "$LightButtonTextColor",
      "text/style": "$StyleFEButtonText"
    }
  }
)


D2RMM.writeJson(mainMenuPanelHDFilename, mainMenuPanelHD);