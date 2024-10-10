// 借鉴来着：https://www.nexusmods.com/diablo2resurrected/mods/173
D2RMM.copyFile(
  'data', // <mod folder>\data
  '', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\
  true // 覆盖所有冲突
);


const inventoryFilename = 'global\\excel\\inventory.txt';
const inventory = D2RMM.readTsv(inventoryFilename);
inventory.rows.forEach((row) => {
  const id = row.class;
  if (id === 'Bank Page 1' || //  储物箱空间（640×480 像素分辨率）[对应原版]
    id === 'Big Bank Page 1' ||  // 储物箱空间（640×480 像素分辨率）[对应资料片]
    id === 'Bank Page2' ||
    id === 'Big Bank Page2'
  ) {
    row.gridX = 16;
    row.gridY = 16;
  }
});
D2RMM.writeTsv(inventoryFilename, inventory);


const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
const profileHD = D2RMM.readJson(profileHDFilename);

// { "x": 236, "y": -651, "width": 1162, "height": 1507 }
profileHD.LeftPanelRect_ExpandedStash = {x: 340, y: -651, width: 1721, height: 1802};
// { "x": 0, "y": 0, "width": 1162, "height": 1507 }
profileHD.PanelClickCatcherRect_ExpandedStash = {x: -120, y: -200, width: 1721, height: 1802};  // 捕获点击区域
// 左侧金属铰链向左偏移，避免挡住大箱子 原值 -236 x 630
profileHD.LeftHingeRect = {x: -380, y: 630};

D2RMM.writeJson(profileHDFilename, profileHD);

const profileLVFilename = 'global\\ui\\layouts\\_profilelv.json';
const profileLV = D2RMM.readJson(profileLVFilename);
// { "x": 0, "y": -856, "width": 1162, "height": 1507, "scale": 1.16 }
profileLV.LeftPanelRect_ExpandedStash = {x: 0, y: -856, width: 1721, height: 1802, scale: 1.16};

D2RMM.writeJson(profileLVFilename, profileLV);


const bankOriginalLayoutHDFilename = 'global\\ui\\layouts\\bankoriginallayouthd.json'; // 会关联到bankexpansionlayouthd.json
const bankOriginalLayoutHD = D2RMM.readJson(bankOriginalLayoutHDFilename);
bankOriginalLayoutHD.fields.rect = '$LeftPanelRect_ExpandedStash';
bankOriginalLayoutHD.children.forEach((child) => {
  if (child.name === 'click_catcher') {
    child.fields.rect = '$PanelClickCatcherRect_ExpandedStash';  // 引用_profilehd.json
  }
  if (child.name === 'background') {
    child.fields.filename = 'PANEL\\Stash\\StashPanel_BG_Expanded';
    child.fields.rect = {x: 0, y: 0};
  }
  if (child.name === 'close') {  // 箱子右上关闭按钮 { "x": 1075, "y": 9 }
    child.fields.rect = {x: 1488, y: -204};
  }
});
D2RMM.writeJson(bankOriginalLayoutHDFilename, bankOriginalLayoutHD);

const bankExpansionLayoutHDFilename = 'global\\ui\\layouts\\bankexpansionlayouthd.json';
const bankExpansionLayoutHD = D2RMM.readJson(bankExpansionLayoutHDFilename);
bankExpansionLayoutHD.children = bankExpansionLayoutHD.children.filter(
  (child) => {
    if (child.name === 'PreviousSeasonToggleDisplay' || child.name === 'PreviousLadderSeasonBankTabs') {
      return false;
    }
    if (child.name === 'grid') {
      child.fields.cellCount.x = 16;  // 格子数
      child.fields.cellCount.y = 16;
      child.fields.rect = {x: -68, y: -44};   // 原值 91 x 235
    }
    if (child.name === 'background') {
      child.fields.filename = 'PANEL\\Stash\\StashPanel_BG_Expanded'; // 贴图名称和位置
      child.fields.rect = {x: -150, y: -204};  // 整个贴图偏移，无原值 {x: -150, y: -200}
    }
    if (child.name === 'BankTabs') {
      child.fields.filename = 'PANEL\\stash\\Stash_Tabs_Expanded';  // 选项卡贴图
      child.fields.rect = {x: -73, y: -120};  // 原值 82 x 164
      child.fields.tabCount = 8;
      child.fields.tabSize = {x: 197, y: 75}; // 原值 249 x 75
      child.fields.tabPadding = {x: 0, y: 0};
      child.fields.inactiveFrames = [0, 0, 0, 0, 0, 0, 0, 0];
      child.fields.activeFrames = [1, 1, 1, 1, 1, 1, 1, 1];
      child.fields.disabledFrames = [-1, 0, 0, 0, 0, 0, 0, 0];
      child.fields.textStrings = ['@personal', '@shared', '@shared', '@shared', '@shared', '@shared', '@shared', '@shared'];
    }
    if (child.name === 'gold_amount') {
      child.fields.rect = {x: 17, y: 1577}; // 原值 482 x 1305
    }
    if (child.name === 'gold_withdraw') {
      child.fields.rect = {x: -38, y: 1576}; // 原值 427 x 1304
    }
    return child.name !== 'title';  // 不要显示储存室文本

  }
);
D2RMM.writeJson(bankExpansionLayoutHDFilename, bankExpansionLayoutHD);

const controllerOverlayHDFilename = 'global\\ui\\layouts\\controller\\controlleroverlayhd.json';
const controllerOverlayHD = D2RMM.readJson(controllerOverlayHDFilename);
controllerOverlayHD.children.forEach((child) => {
  if (child.name === 'Anchor') {
    child.children.forEach((subchild) => {
      if (subchild.name === 'ControllerCursorBounds') {
        delete subchild.fields.fitToParent;
        subchild.fields.rect = {
          x: -285,
          y: 0,
          width: 2880 + 285,
          height: 1763,
        };
      }
    });
  }
});
D2RMM.writeJson(controllerOverlayHDFilename, controllerOverlayHD);

const bankOriginalControllerLayoutHDFilename = 'global\\ui\\layouts\\controller\\bankoriginallayouthd.json';
const bankOriginalControllerLayoutHD = D2RMM.readJson(bankOriginalControllerLayoutHDFilename);
bankOriginalControllerLayoutHD.children.forEach((child) => {
  if (child.name === 'background') {
    child.fields.filename = 'Controller/Panel/Stash/V2/Classic_StashPanelBG_Expanded';
    child.fields.rect.x = child.fields.rect.x - 285 - 81 - 2 - 120;
    child.fields.rect.y = child.fields.rect.y + 17 - 293 + 100;
  }
  if (child.name === 'gold_amount' || child.name === 'gold_withdraw') {
    child.fields.rect.x = child.fields.rect.x - 476 - 280;
    child.fields.rect.y = child.fields.rect.y - 1404 + 30;
  }
  if (child.name === 'gold_max') {
    child.fields.rect.x = child.fields.rect.x - 476 + 927;
    child.fields.rect.y = child.fields.rect.y - 1404 - 90 + 25;
  }
  if (child.name === 'grid') {
    child.fields.rect.x = -285 + 9;
    child.fields.rect.y = 119;
  }
});
D2RMM.writeJson(bankOriginalControllerLayoutHDFilename, bankOriginalControllerLayoutHD);

const bankExpansionControllerLayoutHDFilename = 'global\\ui\\layouts\\controller\\bankexpansionlayouthd.json';
const bankExpansionControllerLayoutHD = D2RMM.readJson(bankExpansionControllerLayoutHDFilename);
bankExpansionControllerLayoutHD.children.forEach((child) => {
  if (child.name === 'background') {
    child.fields.filename = 'Controller/Panel/Stash/V2/StashPanelBG_Expanded';
    child.fields.rect.x = child.fields.rect.x - 285 - 81;
    child.fields.rect.y = child.fields.rect.y + 17 - 293;
  }
  if (child.name === 'gold_amount' || child.name === 'gold_withdraw') {
    child.fields.rect.x = child.fields.rect.x - 476 - 280;
    child.fields.rect.y = child.fields.rect.y - 1404;
  }
  if (child.name === 'gold_max') {
    child.fields.rect.x = child.fields.rect.x - 476 + 927;
    child.fields.rect.y = child.fields.rect.y - 1404 - 90;
  }
  if (child.name === 'grid') {
    child.fields.cellCount.x = 16;
    child.fields.cellCount.y = 13;
    child.fields.rect.x = -285 + 9;
    child.fields.rect.y = 119;
  }
  if (child.name === 'BankTabs') {
    child.fields.filename = 'Controller/Panel/Stash/V2/StashTabs_Expanded';
    child.fields.focusIndicatorFilename =
      'Controller/HoverImages/StashTab_Hover_Expanded';
    child.fields.rect.x = child.fields.rect.x - 300;
    child.fields.rect.y = child.fields.rect.y + 10;
    child.fields.tabCount = 8;
    child.fields.tabSize = {x: 175, y: 120};
    child.fields.tabPadding = {x: 0, y: 0};
    child.fields.inactiveFrames = [1, 1, 1, 1, 1, 1, 1, 1];
    child.fields.activeFrames = [0, 0, 0, 0, 0, 0, 0, 0];
    child.fields.disabledFrames = [1, 1, 1, 1, 1, 1, 1, 1];
    child.fields.textStrings = [
      '@personal',
      '@shared',
      '@shared',
      '@shared',
      '@shared',
      '@shared',
      '@shared',
      '@shared',
    ];
    child.fields.tabLeftIndicatorPosition = {x: -42, y: -2};
    child.fields.tabRightIndicatorPosition = {x: 1135 + 300, y: -2};
  }
});
D2RMM.writeJson(bankExpansionControllerLayoutHDFilename, bankExpansionControllerLayoutHD);

