const inventoryFilename = 'global\\excel\\inventory.txt';
const inventory = D2RMM.readTsv(inventoryFilename);
inventory.rows.forEach((row) => {
  if (row.class === 'Hireling') {
    row.rArmLeft = 340;
    row.rArmRight = 395;
    row.rArmTop = 27;
    row.rArmBottom = 139;
    row.torsoLeft = 453;
    row.torsoRight = 509;
    row.lArmLeft = 566;
    row.lArmRight = 621;
    row.lArmTop = 27;
    row.lArmBottom = 139;
    row.headLeft = 455;
    row.headRight = 509;
    row.neckLeft = 529;
    row.neckRight = 552;
    row.neckTop = 35;
    row.neckBottom = 59;
    row.neckWidth = 23;
    row.neckHeight = 24;
    row.rHandLeft = 415;
    row.rHandRight = 438;
    row.rHandTop = 180;
    row.rHandBottom = 204;
    row.rHandWidth = 23;
    row.rHandHeight = 24;
    row.lHandLeft = 529;
    row.lHandRight = 552;
    row.lHandTop = 180;
    row.lHandBottom = 204;
    row.lHandWidth = 23;
    row.lHandHeight = 24;
    row.beltLeft = 456;
    row.beltRight = 508;
    row.beltTop = 179;
    row.beltBottom = 204;
    row.beltWidth = 52;
    row.beltHeight = 25;
    row.feetLeft = 572;
    row.feetRight = 626;
    row.feetTop = 155;
    row.feetBottom = 207;
    row.feetWidth = 54;
    row.feetHeight = 52;
    row.glovesLeft = 341;
    row.glovesRight = 395;
    row.glovesTop = 153;
    row.glovesBottom = 205;
    row.glovesWidth = 54;
    row["glovesHeight\r"] = 53;
  } else if (row.class === 'Hireling2') {
    row.rArmLeft = 420;
    row.rArmRight = 475;
    row.rArmTop = 89;
    row.rArmBottom = 201;
    row.torsoLeft = 533;
    row.torsoRight = 589;
    row.lArmLeft = 646;
    row.lArmRight = 701;
    row.lArmTop = 89;
    row.lArmBottom = 201;
    row.headLeft = 535;
    row.headRight = 589;
    row.neckLeft = 609;
    row.neckRight = 632;
    row.neckTop = 95;
    row.neckBottom = 119;
    row.neckWidth = 23;
    row.neckHeight = 24;
    row.rHandLeft = 495;
    row.rHandRight = 518;
    row.rHandTop = 240;
    row.rHandBottom = 264;
    row.rHandWidth = 23;
    row.rHandHeight = 24;
    row.lHandLeft = 609;
    row.lHandRight = 632;
    row.lHandTop = 240;
    row.lHandBottom = 264;
    row.lHandWidth = 23;
    row.lHandHeight = 24;
    row.beltLeft = 536;
    row.beltRight = 588;
    row.beltTop = 239;
    row.beltBottom = 264;
    row.beltWidth = 52;
    row.beltHeight = 25;
    row.feetLeft = 652;
    row.feetRight = 706;
    row.feetTop = 217;
    row.feetBottom = 269;
    row.feetWidth = 54;
    row.feetHeight = 52;
    row.glovesLeft = 421;
    row.glovesRight = 475;
    row.glovesTop = 215;
    row.glovesBottom = 268;
    row.glovesWidth = 54;
    row["glovesHeight\r"] = 53;
  } else if (['Amazon', 'Sorceress', 'Necromancer', 'Paladin', 'Barbarian', 'Druid', 'Assassin']
    .indexOf(row.class) !== -1) {
    row.gridTop = 211;
    row.gridBottom = 441;
    row.rArmTop = 27;
    row.rArmBottom = 139;
    row.lArmLeft = 566;
    row.lArmRight = 621;
    row.lArmTop = 27;
    row.lArmBottom = 139;
    row.feetTop = 155;
    row.feetBottom = 207;
    row.glovesTop = 153;
    row.glovesBottom = 205;
  } else if (['Amazon2', 'Sorceress2', 'Necromancer2', 'Paladin2', 'Barbarian2', 'Druid2', 'Assassin2']
    .indexOf(row.class) !== -1) {
    row.gridTop = 271;
    row.gridBottom = 501;
    row.rArmTop = 89;
    row.rArmBottom = 201;
    row.lArmLeft = 646;
    row.lArmRight = 701;
    row.lArmTop = 89;
    row.lArmBottom = 201;
    row.feetTop = 217;
    row.feetBottom = 269;
    row.glovesTop = 215;
    row.glovesBottom = 268;
  } else if (row.class === 'Transmogrify Box Page 1') {
    row.gridLeft = 16;
    row.gridRight = 303;
    row.gridTop = 16;
    row.gridBottom = 254;
  } else if (row.class === 'Transmogrify Box2') {
    row.gridLeft = 97;
    row.gridRight = 382;
    row.gridTop = 75;
    row.gridBottom = 304;
  }
});
D2RMM.writeTsv(inventoryFilename, inventory);

const itemTypesFilename = 'global\\excel\\itemtypes.txt';
const itemtypes = D2RMM.readTsv(itemTypesFilename);
itemtypes.rows.forEach((row) => {
  if (['Ring', 'Amulet', 'Boots', 'Gloves', 'Belt'].indexOf(row.ItemType) !== -1) {
    row.Equiv2 = 'merc';
  } else if (row.ItemType === 'Helm') {
    row.Code = 'merc';
    row.Equiv1 = '';
  } else if (row.ItemType === 'Expansion') {
    row["*eol\r"] = '0';
  }
});
const itemRecipe = {
  ItemType: 'Merc Equip',
  Code: 'helm',
  Equiv1: 'armo',
  Equiv2: 'merc',
  Repair: 1,
  Body: 1,
  BodyLoc1: 'head',
  BodyLoc2: 'head',
  Throwable: 0,
  Reload: 0,
  ReEquip: 0,
  AutoStack: 0,
  Rare: 1,
  Normal: 0,
  Beltable: 0,
  MaxSockets1: 2,
  MaxSocketsLevelThreshold1: 25,
  MaxSockets2: 2,
  MaxSocketsLevelThreshold2: 40,
  MaxSockets3: 3,
  TreasureClass: 0,
  Rarity: 3,
  VarInvGfx: 0,
  StorePage: 'armo',
  '*eol\r': 0,
};
itemtypes.rows.push({
  ...itemRecipe
});
D2RMM.writeTsv(itemTypesFilename, itemtypes);

const hirelingHDFilename = 'global\\ui\\layouts\\hirelinginventorypanelhd.json';
const hirelingHD = D2RMM.readJson(hirelingHDFilename);
hirelingHD.children.forEach((child) => {
  if (child.type === 'ClickCatcherWidget') {
    child.fields.rect = {
      x: -180,
      y: -200,
      width: 1362,
      height: 1727
    };
  } else if (child.type === 'TextBoxWidget') {
    if (child.name === 'Title') {
      child.fields.rect = {
        x: 481,
        y: -69,
        width: 196,
        height: 196
      };
    } else if (child.name === 'CharacterName') {
      child.fields.rect.x = 121;
      child.fields.rect.y = 849;
      child.fields.style.alignment.v = 'bottom';
    } else if (child.name === 'HPTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1020;
      child.fields.rect.width = 251;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'HPStat') {
      child.fields.rect.x = 361;
      child.fields.rect.y = 1020;
      child.fields.rect.width = 187;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'HireTypeText') {
      child.fields.rect.x = 126;
      child.fields.rect.y = 937;
      child.fields.rect.width = 100;
      child.fields.rect.height = 30;
      child.fields.style.pointSize = '$XMediumFontSize';
      delete child.fields.style.alignment.v;
    } else if (child.name === 'StrengthTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1102;
      child.fields.rect.width = 251;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'StrengthStat') {
      child.fields.rect.x = 361;
      child.fields.rect.y = 1102;
      child.fields.rect.width = 187;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DexTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1186;
      child.fields.rect.width = 251;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DexStat') {
      child.fields.rect.x = 361;
      child.fields.rect.y = 1186;
      child.fields.rect.width = 187;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DamageTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1269;
      child.fields.rect.width = 251;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DamageStat') {
      child.fields.rect.x = 361;
      child.fields.rect.y = 1269;
      child.fields.rect.width = 187;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'ArmorClassTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1353;
      child.fields.rect.width = 251;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'ArmorClass') {
      child.fields.rect.x = 361;
      child.fields.rect.y = 1353;
      child.fields.rect.width = 187;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'FireResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1103;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'FireText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1103;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'ColdResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1184;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'ColdText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1184;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'LightningResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1269;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'LightningText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1269;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'PoisonResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1351;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'PoisonText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1351;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    }
  } else if (child.type === 'InventorySlotWidget') {
    if (child.name === 'slot_head') {
      child.fields.rect.y = 113;
      delete child.fields['gemSocketFilename'];
    } else if (child.name === 'slot_torso') {
      child.fields.rect.x = 483;
      child.fields.rect.y = 348;
      delete child.fields['gemSocketFilename'];
    } else if (child.name === 'slot_right_arm') {
      child.fields.rect.x = 110;
      child.fields.rect.y = 156;
      child.fields.location = 'right_arm';
    } else if (child.name === 'slot_left_arm') {
      child.fields.rect.x = 863;
      child.fields.rect.y = 156;
      child.fields.location = 'left_arm';
    }
  } else if (child.type === 'ExpBarWidget') {
    child.fields.rect.y = 913;
  } else if (child.type === 'ButtonWidget') {
    if (child.name === 'AdvancedStats') {
      child.fields.rect.x = 1104;
      child.fields.rect.y = 713;
      delete child.fields['hoveredFrame'];
      delete child.fields['pressLabelOffset'];
    } else if (child.name === 'CloseButton') {
      delete child.fields['sound'];
    }
  } else if (child.type === 'HirelingSkillIconWidget') {
    if (child.name === 'Skill0') {
      child.fields.rect.x = 673;
    } else if (child.name === 'Skill1') {
      child.fields.rect.x = 780;
    } else if (child.name === 'Skill2') {
      child.fields.rect.x = 887;
    }
    child.fields.rect.y = 1007;
    child.fields.rect.scale = 0.60;
  } else if (child.type === 'Widget') {
    if (child.name === 'Damage') {
      child.fields.rect.y = 1269;
    }
  }
});
hirelingHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_belt",
  fields: {
    rect: {
      x: 483,
      y: 688,
      width: 196,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "belt",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Belt",
    isHireable: true
  }
});
hirelingHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_right_hand",
  fields: {
    rect: {
      x: 720,
      y: 691,
      width: 98,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "right_hand",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Ring",
    isHireable: false
  }
});
hirelingHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_left_hand",
  fields: {
    rect: {
      x: 344,
      y: 691,
      width: 98,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "left_hand",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Ring",
    isHireable: false
  }
});
hirelingHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_gloves",
  fields: {
    rect: {
      x: 108,
      y: 591,
      width: 196,
      height: 196
    },
    cellSize: "$ItemCellSize",
    location: "gloves",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Glove",
    isHireable: false
  }
});
hirelingHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_feet",
  fields: {
    rect: {
      x: 861,
      y: 591,
      width: 196,
      height: 196
    },
    cellSize: "$ItemCellSize",
    location: "feet",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Boots",
    isHireable: false
  }
});
hirelingHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_neck",
  fields: {
    rect: {
      x: 720,
      y: 271,
      width: 98,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "neck",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Amulet",
    isHireable: false
  }
});
D2RMM.writeJson(hirelingHDFilename, hirelingHD);

const profileCHDFilename = 'global\\ui\\layouts\\controller\\_profilehd.json';
const profileCHD = D2RMM.readJson(profileCHDFilename);
profileCHD.ConsoleLeftPanelAnchor = { "x": 0.521, "y": 0.387 };
D2RMM.writeJson(profileCHDFilename, profileCHD);

const hirelingCHDFilename = 'global\\ui\\layouts\\controller\\hirelinginventorypanelhd.json';
const hirelingCHD = D2RMM.readJson(hirelingCHDFilename);
delete hirelingCHD['basedOn'];
hirelingCHD.fields = {
  rect: "$ConsoleLeftPanelRect",
  anchor: "$ConsoleLeftPanelAnchor",
  bowBackgroundFilename: "PANEL\\Hireling\\HireablePanel\\Hireables_Paperdoll_Bow",
  spearBackgroundFilename: "PANEL\\Hireling\\HireablePanel\\Hireables_Paperdoll_Spear",
  longswordBackgroundFilename: "PANEL\\Hireling\\HireablePanel\\Hireables_Paperdoll_LongSword",
  shieldBackgroundFilename: "PANEL\\Hireling\\HireablePanel\\Hireables_Paperdoll_Shield",
  twoHandSwordBackgroundFilename: "PANEL\\Hireling\\HireablePanel\\Hireables_Paperdoll_2HSword"
};
hirelingCHD.children.forEach((child) => {
  if (child.type === 'ImageWidget') {
    child.fields = {
      rect: {
        x: 0,
        y: 0
      },
      filename: "\\PANEL\\Hireling\\HirelingPanel"
    }
  } else if (child.type === 'ClickCatcherWidget') {
    child.fields = {
      rect: {
        x: -180,
        y: -200,
        width: 1362,
        height: 1727
      }
    };
  } else if (child.type === 'InventorySlotWidget') {
    if (child.name === 'slot_head') {
      child.fields.rect.x = 481;
      child.fields.rect.y = 113;
      child.fields.location = 'head';
      child.fields.backgroundFilename = 'PANEL\\Inventory\\Inventory_Paperdoll_HeadArmor';
    } else if (child.name === 'slot_torso') {
      child.fields.rect.x = 483;
      child.fields.rect.y = 348;
      child.fields.location = 'torso';
      child.fields.backgroundFilename = 'PANEL\\Inventory\\Inventory_Paperdoll_ChestArmor';
    } else if (child.name === 'slot_right_arm') {
      child.fields.rect.x = 110;
      child.fields.rect.y = 156;
      child.fields.location = 'right_arm';
      child.fields.gemSocketFilename = 'PANEL\\gemsocket';
      child.fields.backgroundFilename = 'PANEL\\Inventory\\Inventory_Paperdoll_Weapon';
    } else if (child.name === 'slot_left_arm') {
      child.fields.rect.x = 863;
      child.fields.rect.y = 156;
      child.fields.location = 'left_arm';
      child.fields.gemSocketFilename = 'PANEL\\gemsocket';
      child.fields.backgroundFilename = 'PANEL\\Inventory\\Inventory_Paperdoll_Weapon';
    }
    child.fields.cellSize = '$ItemCellSize';
    child.fields.isHireable = true;
    delete child.fields['navigation'];
  } else if (child.type === 'TextBoxWidget') {
    if (child.name === 'CharacterName') {
      child.fields.rect.x = 121;
      child.fields.rect.y = 849;
      child.fields.rect.width = 500;
      child.fields.rect.height = 50;
      child.fields.style.fontColor = '$FontColorWhite';
      child.fields.style.pointSize = '$LargeFontSize';
      child.fields.style.dropShadow = '$DefaultDropShadow';
    } else if (child.name === 'HPTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1020;
      child.fields.rect.width = 251;
      child.fields.rect.height = 59;
      child.fields.text = '@strchrlif';
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'HPStat') {
      child.fields.rect.y = 1020;
      child.fields.rect.width = 187;
      child.fields.rect.height = 59;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'HireTypeText') {
      child.fields.rect.x = 126;
      child.fields.rect.y = 937;
      child.fields.rect.width = 100;
      child.fields.rect.height = 30;
      child.fields.text = '@strchrlvl';
      child.fields.style.fontColor = '$FontColorWhite';
      child.fields.style.pointSize = '$XMediumFontSize';
      child.fields.style.dropShadow = '$DefaultDropShadow';
      delete child.fields.style.alignment.v;
    } else if (child.name === 'StrengthTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1102;
      child.fields.rect.width = 251;
      child.fields.rect.height = 59;
      child.fields.text = '@strchrstr';
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'StrengthStat') {
      child.fields.rect.y = 1102;
      child.fields.rect.width = 187;
      child.fields.rect.height = 59;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DexTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1186;
      child.fields.rect.width = 251;
      child.fields.rect.height = 59;
      child.fields.text = '@strchrdex';
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DexStat') {
      child.fields.rect.y = 1186;
      child.fields.rect.width = 187;
      child.fields.rect.height = 59;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DamageTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1269;
      child.fields.rect.width = 251;
      child.fields.rect.height = 59;
      child.fields.text = '@strchrskm';
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'DamageStat') {
      child.fields.rect.y = 1269;
      child.fields.rect.width = 187;
      child.fields.rect.height = 59;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'ArmorClassTitle') {
      child.fields.rect.x = 104;
      child.fields.rect.y = 1353;
      child.fields.rect.width = 251;
      child.fields.rect.height = 59;
      child.fields.text = '@strchrdef';
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'ArmorClass') {
      child.fields.rect.y = 1353;
      child.fields.rect.width = 187;
      child.fields.rect.height = 59;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'FireResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1103;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
      delete child.fields['useAltStyleIfDoesntFit'];
      delete child.fields['altStyle'];
    } else if (child.name === 'FireText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1103;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'ColdResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1184;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
      delete child.fields['useAltStyleIfDoesntFit'];
      delete child.fields['altStyle'];
    } else if (child.name === 'ColdText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1184;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'LightningResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1269;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
      delete child.fields['useAltStyleIfDoesntFit'];
      delete child.fields['altStyle'];
    } else if (child.name === 'LightningText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1269;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    } else if (child.name === 'PoisonResistanceTitle') {
      child.fields.rect.x = 608;
      child.fields.rect.y = 1351;
      child.fields.rect.width = 325;
      child.fields.style.pointSize = '$SmallFontSize';
      delete child.fields['useAltStyleIfDoesntFit'];
      delete child.fields['altStyle'];
    } else if (child.name === 'PoisonText') {
      child.fields.rect.x = 938;
      child.fields.rect.y = 1351;
      child.fields.rect.width = 113;
      child.fields.style.pointSize = '$SmallFontSize';
    }
  } else if (child.type === 'ExpBarWidget') {
    child.fields = {
      rect: {
        x: 139,
        y: 913,
        width: 888,
        height: 10
      },
      filename: "PANEL\\Hireling\\Hireling_ExpBar",
      frame: 0,
      isHireling: true,
      hitMargin: {
        top: 15,
        bottom: 15
      }
    }
  } else if (child.type === 'HirelingSkillIconWidget') {
    if (child.name === 'Skill0') {
      child.fields.rect.x = 673;
    } else if (child.name === 'Skill1') {
      child.fields.rect.x = 780;
    } else if (child.name === 'Skill2') {
      child.fields.rect.x = 887;
    }

    child.fields.rect.y = 1007;
    child.fields.rect.scale = 0.60;
  } else if (child.type === 'Widget') {
    if (child.name === 'Damage') {
      child.fields = {
        rect: {
          x: 328,
          y: 1269,
          width: 237,
          height: 59
        }
      };
      child.children.forEach((wdChild) => {
        wdChild.fields.rect.width = 237;
        wdChild.fields.rect.height = 59;
        wdChild.fields.style.pointSize = '$SmallPanelFontSize';
        if (wdChild.name === 'DamageStatTop') {
          wdChild.fields.rect.y = 0;
        } else if (wdChild.name === 'DamageStatBottom') {
          wdChild.fields.rect.y = -1;
        }
      });
    }
  }
});
hirelingCHD.children.push({
  type: "ImageWidget",
  name: "LeftHinge",
  fields: {
    rect: "$LeftHingeRect",
    filename: "$LeftHingeSprite"
  }
});
hirelingCHD.children.push({
  type: "TextBoxWidget",
  name: "Title",
  fields: {
    rect: {
      x: 481,
      y: -69,
      width: 196,
      height: 196
    },
    style: "$StyleTitleBlock",
    text: "@MiniPanelHireinv"
  }
});
hirelingCHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_belt",
  fields: {
    rect: {
      x: 483,
      y: 688,
      width: 196,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "belt",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Belt",
    isHireable: true
  }
});
hirelingCHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_right_hand",
  fields: {
    rect: {
      x: 720,
      y: 691,
      width: 98,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "right_hand",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Ring",
    isHireable: false
  }
});
hirelingCHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_left_hand",
  fields: {
    rect: {
      x: 344,
      y: 691,
      width: 98,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "left_hand",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Ring",
    isHireable: false
  }
});
hirelingCHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_gloves",
  fields: {
    rect: {
      x: 108,
      y: 591,
      width: 196,
      height: 196
    },
    cellSize: "$ItemCellSize",
    location: "gloves",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Glove",
    isHireable: false
  }
});
hirelingCHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_feet",
  fields: {
    rect: {
      x: 861,
      y: 591,
      width: 196,
      height: 196
    },
    cellSize: "$ItemCellSize",
    location: "feet",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Boots",
    isHireable: false
  }
});
hirelingCHD.children.push({
  type: "InventorySlotWidget",
  name: "slot_neck",
  fields: {
    rect: {
      x: 720,
      y: 271,
      width: 98,
      height: 98
    },
    cellSize: "$ItemCellSize",
    location: "neck",
    gemSocketFilename: "PANEL\\gemsocket",
    backgroundFilename: "PANEL\\Inventory\\Inventory_Paperdoll_Amulet",
    isHireable: false
  }
});
hirelingCHD.children.push({
  type: "ButtonWidget",
  name: "AdvancedStats",
  fields: {
    rect: {
      x: 1104,
      y: 713
    },
    filename: "PANEL\\Character_Sheet\\AdvancedStatsButton",
    onClickMessage: "HirelingInventoryPanelMessage:ToggleAdvancedStats",
    tooltipString: "@AdvancedStats"
  }
});
hirelingCHD.children.push({
  type: "ButtonWidget",
  name: "CloseButton",
  fields: {
    rect: {
      x: 1075,
      y: 9
    },
    filename: "PANEL\\closebtn_4x",
    hoveredFrame: 3,
    onClickMessage: "HirelingInventoryPanelMessage:Close",
    tooltipString: "@strClose"
  }
});
D2RMM.writeJson(hirelingCHDFilename, hirelingCHD);

D2RMM.copyFile(
  'hd', // <mod folder>\hd
  'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
  true // overwrite any conflicts
);