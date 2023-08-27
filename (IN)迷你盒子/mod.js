// 迷你盒子文件
D2RMM.copyFile(config.miniCube, '', true);

const helpPanelHDFilename = 'global\\ui\\layouts\\helppanelhd.json';
let helpPanelHD = D2RMM.readJson(helpPanelHDFilename);
const helpMiniCube = {
  "type": "TextBoxWidget", "name": "HelpMiniCube", "fields": {
    "rect": {"x": 1385, "y": 1405}, "text": "迷你盒子",//帮助页指示迷你盒子
    "fontType": "12ptF", "style": {
      "fontColor": "$FontColorGoldYellow", "pointSize": "$MediumLargeFontSize", "alignment": {"h": "center"}
    }
  }
}
const helpMiniCubeLine = {
  "type": "IndicatorLineWidget", "name": "MiniCubeLine",//迷你盒子指示綫
  "fields": {
    "rect": {"x": 1382, "y": 1475, "width": 6, "height": 290}, "color": [1, 1, 1, 1]
  }
}
helpPanelHD.children[1].children.push(helpMiniCube);
helpPanelHD.children[1].children.push(helpMiniCubeLine);

D2RMM.writeJson(helpPanelHDFilename, helpPanelHD);

const hubPanelHDFilename = 'global\\ui\\layouts\\hudpanelhd.json';
let hubPanelHD = D2RMM.readJson(hubPanelHDFilename);

const miniCubeIcon = {
  "type": "ButtonWidget", "name": "minicube", "fields": {
    "rect": {
      "x": 2750, "y": 316, "scale": 0.8
    },
    "filename": "panel\\hud_02\\minicubeicon",
    "tooltipString": "开启/关闭\n迷你盒子",
    "onClickMessage": "PanelManager:TogglePanel:MiniCubeLayout",
    "focusIndicatorVisible": true,
    "hoveredFrame": 2,
    "pressedFrame": 1
  }
}
hubPanelHD.children.push(miniCubeIcon);
D2RMM.writeJson(hubPanelHDFilename, hubPanelHD);