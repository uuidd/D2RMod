switch (config.caseSize) {
  case 'case_16X13':
    const inventoryFilename = 'global\\excel\\inventory.txt';
    const inventory = D2RMM.readTsv(inventoryFilename);
    inventory.rows.forEach((row) => {
      const id = row.class;
      if (
        id === 'Bank Page 1' ||
        id === 'Big Bank Page 1' ||
        id === 'Bank Page2' ||
        id === 'Big Bank Page2'
      ) {
        row.gridX = 16;
        row.gridY = 13;
      }
    });
    D2RMM.writeTsv(inventoryFilename, inventory);

    const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
    const profileHD = D2RMM.readJson(profileHDFilename);
    profileHD.LeftPanelRect_ExpandedStash = {
      x: 236,
      y: -651,
      width: 1687,
      height: 1507,
    };
    profileHD.PanelClickCatcherRect_ExpandedStash = {
      x: 0,
      y: 0,
      width: 1687,
      height: 1507,
    };
// offset the left hinge so that it doesn't overlap with content of the left panel
    profileHD.LeftHingeRect = {x: -236 - 25, y: 630};
    D2RMM.writeJson(profileHDFilename, profileHD);

    const profileLVFilename = 'global\\ui\\layouts\\_profilelv.json';
    const profileLV = D2RMM.readJson(profileLVFilename);
    profileLV.LeftPanelRect_ExpandedStash = {
      x: 0,
      y: -856,
      width: 1687,
      height: 1507,
      scale: 1.16,
    };
    D2RMM.writeJson(profileLVFilename, profileLV);

    const bankOriginalLayoutFilename =
      'global\\ui\\layouts\\bankoriginallayout.json';
    const bankOriginalLayout = D2RMM.readJson(bankOriginalLayoutFilename);
    bankOriginalLayout.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 16;
        child.fields.cellCount.y = 13;
      }
    });
    D2RMM.writeJson(bankOriginalLayoutFilename, bankOriginalLayout);

    const bankExpansionLayoutFilename =
      'global\\ui\\layouts\\bankexpansionlayout.json';
    const bankExpansionLayout = D2RMM.readJson(bankExpansionLayoutFilename);
    bankExpansionLayout.children = bankExpansionLayout.children.map((child) => {
      if (
        child.name === 'PreviousSeasonToggleDisplay' ||
        child.name === 'PreviousLadderSeasonBankTabs'
      ) {
        return false;
      }
      if (child.name === 'grid') {
        child.fields.cellCount.x = 16;
        child.fields.cellCount.y = 13;
      }
      if (child.name === 'BankTabs') {
        child.fields.tabCount = 8;
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
      }
      return true;
    });
    D2RMM.writeJson(bankExpansionLayoutFilename, bankExpansionLayout);

    const bankOriginalLayoutHDFilename =
      'global\\ui\\layouts\\bankoriginallayouthd.json';
    const bankOriginalLayoutHD = D2RMM.readJson(bankOriginalLayoutHDFilename);
    bankOriginalLayoutHD.fields.rect = '$LeftPanelRect_ExpandedStash';
    bankOriginalLayoutHD.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 16;
        child.fields.cellCount.y = 13;
        child.fields.rect.x = child.fields.rect.x - 229;
        child.fields.rect.y = child.fields.rect.y - 572;
      }
      if (child.name === 'click_catcher') {
        child.fields.rect = '$PanelClickCatcherRect_ExpandedStash';
      }
      if (child.name === 'background') {
        child.fields.filename = 'PANEL\\Stash\\StashPanel_BG_Expanded';
        child.fields.rect = {x: 0, y: 0};
      }
      if (child.name === 'gold_amount') {
        child.fields.rect.x = 60 + 60 + 16;
        child.fields.rect.y = 61 + 16;
      }
      if (child.name === 'gold_withdraw') {
        child.fields.rect.x = 60 + 16;
        child.fields.rect.y = 58 + 16;
      }
      if (child.name === 'title') {
        child.fields.rect = {
          x: 91 + (1687 - 1162) / 2,
          y: 64,
          width: 972,
          height: 71,
        };
      }
      if (child.name === 'close') {
        child.fields.rect.x = child.fields.rect.x + (1687 - 1162);
      }
    });
    D2RMM.writeJson(bankOriginalLayoutHDFilename, bankOriginalLayoutHD);

    const bankExpansionLayoutHDFilename =
      'global\\ui\\layouts\\bankexpansionlayouthd.json';
    const bankExpansionLayoutHD = D2RMM.readJson(bankExpansionLayoutHDFilename);
    bankExpansionLayoutHD.children = bankExpansionLayoutHD.children.filter(
      (child) => {
        if (
          child.name === 'PreviousSeasonToggleDisplay' ||
          child.name === 'PreviousLadderSeasonBankTabs'
        ) {
          return false;
        }
        if (child.name === 'grid') {
          child.fields.cellCount.x = 16;
          child.fields.cellCount.y = 13;
          child.fields.rect.x = child.fields.rect.x - 37;
          child.fields.rect.y = child.fields.rect.y - 58;
        }
        if (child.name === 'background') {
          child.fields.filename = 'PANEL\\Stash\\StashPanel_BG_Expanded';
        }
        if (child.name === 'BankTabs') {
          child.fields.filename = 'PANEL\\stash\\Stash_Tabs_Expanded';
          child.fields.rect.x = child.fields.rect.x - 30;
          child.fields.rect.y = child.fields.rect.y - 56;
          child.fields.tabCount = 8;
          // 249 x 80 -> 197 x 80 (bottom 5 pixels are overlay)
          child.fields.tabSize = {x: 197, y: 75};
          child.fields.tabPadding = {x: 0, y: 0};
          child.fields.inactiveFrames = [0, 0, 0, 0, 0, 0, 0, 0];
          child.fields.activeFrames = [1, 1, 1, 1, 1, 1, 1, 1];
          child.fields.disabledFrames = [0, 0, 0, 0, 0, 0, 0, 0];
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
        }
        if (child.name === 'gold_amount') {
          child.fields.rect.x = 60 + 60;
          child.fields.rect.y = 61;
        }
        if (child.name === 'gold_withdraw') {
          child.fields.rect.x = 60;
          child.fields.rect.y = 58;
        }
        return child.name !== 'title';
      }
    );
    D2RMM.writeJson(bankExpansionLayoutHDFilename, bankExpansionLayoutHD);

    const controllerOverlayHDFilename =
      'global\\ui\\layouts\\controller\\controlleroverlayhd.json';
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

    const bankOriginalControllerLayoutHDFilename =
      'global\\ui\\layouts\\controller\\bankoriginallayouthd.json';
    const bankOriginalControllerLayoutHD = D2RMM.readJson(
      bankOriginalControllerLayoutHDFilename
    );
    bankOriginalControllerLayoutHD.children.forEach((child) => {
      if (child.name === 'background') {
        child.fields.filename =
          'Controller/Panel/Stash/V2/Classic_StashPanelBG_Expanded';
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
    D2RMM.writeJson(
      bankOriginalControllerLayoutHDFilename,
      bankOriginalControllerLayoutHD
    );

    const bankExpansionControllerLayoutHDFilename =
      'global\\ui\\layouts\\controller\\bankexpansionlayouthd.json';
    const bankExpansionControllerLayoutHD = D2RMM.readJson(
      bankExpansionControllerLayoutHDFilename
    );
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
    D2RMM.writeJson(
      bankExpansionControllerLayoutHDFilename,
      bankExpansionControllerLayoutHD
    );

    D2RMM.copyFile(
      'case16X13/hd', // <mod folder>\hd
      'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
      true // overwrite any conflicts
    );
    break;


  case 'case_16X16':
    const inventoryFilename2 = 'global\\excel\\inventory.txt';
    const inventory2 = D2RMM.readTsv(inventoryFilename2);
    inventory2.rows.forEach((row) => {
      const id = row.class;
      if (
        id === 'Bank Page 1' ||
        id === 'Big Bank Page 1' ||
        id === 'Bank Page2' ||
        id === 'Big Bank Page2'
      ) {
        row.gridX = 16;
        row.gridY = 16;
      }
    });
    D2RMM.writeTsv(inventoryFilename2, inventory2);

    const profileHDFilename2 = 'global\\ui\\layouts\\_profilehd.json';
    const profileHD2 = D2RMM.readJson(profileHDFilename2);
    profileHD2.LeftPanelRect_ExpandedStash = {
      x: 236,
      y: -651,
      width: 1687,
      height: 1507,
    };
    profileHD2.PanelClickCatcherRect_ExpandedStash = {
      x: 0,
      y: 0,
      width: 1687,
      height: 1507,
    };
// offset the left hinge so that it doesn't overlap with content of the left panel
    profileHD2.LeftHingeRect = {x: -236 - 25, y: 630};
    D2RMM.writeJson(profileHDFilename2, profileHD2);

    const profileLVFilename2 = 'global\\ui\\layouts\\_profilelv.json';
    const profileLV2 = D2RMM.readJson(profileLVFilename2);
    profileLV2.LeftPanelRect_ExpandedStash = {
      x: 0,
      y: -856,
      width: 1687,
      height: 1507,
      scale: 1.16,
    };
    D2RMM.writeJson(profileLVFilename2, profileLV2);

    const bankOriginalLayoutFilename2 = 'global\\ui\\layouts\\bankoriginallayout.json';
    const bankOriginalLayout2 = D2RMM.readJson(bankOriginalLayoutFilename2);
    bankOriginalLayout2.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 16;
        child.fields.cellCount.y = 16;
      }
    });
    D2RMM.writeJson(bankOriginalLayoutFilename2, bankOriginalLayout2);

    const bankExpansionLayoutFilename2 =
      'global\\ui\\layouts\\bankexpansionlayout.json';
    const bankExpansionLayout2 = D2RMM.readJson(bankExpansionLayoutFilename2);
    bankExpansionLayout2.children = bankExpansionLayout2.children.map((child) => {
      if (
        child.name === 'PreviousSeasonToggleDisplay' ||
        child.name === 'PreviousLadderSeasonBankTabs'
      ) {
        return false;
      }
      if (child.name === 'grid') {
        child.fields.cellCount.x = 16;
        child.fields.cellCount.y = 16;
      }
      if (child.name === 'BankTabs') {
        child.fields.tabCount = 8;
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
      }
      return true;
    });
    D2RMM.writeJson(bankExpansionLayoutFilename2, bankExpansionLayout2);

    const bankOriginalLayoutHDFilename2 =
      'global\\ui\\layouts\\bankoriginallayouthd.json';
    const bankOriginalLayoutHD2 = D2RMM.readJson(bankOriginalLayoutHDFilename2);
    bankOriginalLayoutHD2.fields.rect = '$LeftPanelRect_ExpandedStash';
    bankOriginalLayoutHD2.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 16;
        child.fields.cellCount.y = 16;
        child.fields.rect.x = child.fields.rect.x - 229;
        child.fields.rect.y = child.fields.rect.y - 572;
      }
      if (child.name === 'click_catcher') {
        child.fields.rect = '$PanelClickCatcherRect_ExpandedStash';
      }
      if (child.name === 'background') {
        child.fields.filename = 'PANEL\\Stash\\StashPanel_BG_Expanded';
        child.fields.rect = {x: 0, y: 0};
      }
      if (child.name === 'gold_amount') {
        child.fields.rect.x = 60 + 60 + 16;
        child.fields.rect.y = 61 + 16;
      }
      if (child.name === 'gold_withdraw') {
        child.fields.rect.x = 60 + 16;
        child.fields.rect.y = 58 + 16;
      }
      if (child.name === 'title') {
        child.fields.rect = {
          x: 91 + (1687 - 1162) / 2,
          y: 64,
          width: 972,
          height: 71,
        };
      }
      if (child.name === 'close') {
        child.fields.rect.x = child.fields.rect.x + 500;
        child.fields.rect.y = child.fields.rect.y - 140;
      }
    });
    D2RMM.writeJson(bankOriginalLayoutHDFilename2, bankOriginalLayoutHD2);

    const bankExpansionLayoutHDFilename2 =
      'global\\ui\\layouts\\bankexpansionlayouthd.json';
    const bankExpansionLayoutHD2 = D2RMM.readJson(bankExpansionLayoutHDFilename2);
    bankExpansionLayoutHD2.children = bankExpansionLayoutHD2.children.filter(
      (child) => {
        if (
          child.name === 'PreviousSeasonToggleDisplay' ||
          child.name === 'PreviousLadderSeasonBankTabs'
        ) {
          return false;
        }
        if (child.name === 'grid') {
          child.fields.cellCount.x = 16;
          child.fields.cellCount.y = 16;
          child.fields.rect.x = child.fields.rect.x - 90;
          child.fields.rect.y = child.fields.rect.y - 230;
        }
        if (child.name === 'background') {
          child.fields.filename = 'PANEL\\Stash\\StashPanel_BG_Expanded';
          child.fields.rect = {x: -90, y: -140};
        }
        if (child.name === 'BankTabs') {
          child.fields.filename = 'PANEL\\stash\\Stash_Tabs_Expanded';
          child.fields.rect.x = child.fields.rect.x - 90;
          child.fields.rect.y = child.fields.rect.y - 235;
          child.fields.tabCount = 8;
          // 249 x 80 -> 197 x 80 (bottom 5 pixels are overlay)
          child.fields.tabSize = {x: 197, y: 75};
          child.fields.tabPadding = {x: 0, y: 0};
          child.fields.inactiveFrames = [0, 0, 0, 0, 0, 0, 0, 0];
          child.fields.activeFrames = [1, 1, 1, 1, 1, 1, 1, 1];
          child.fields.disabledFrames = [0, 0, 0, 0, 0, 0, 0, 0];
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
        }
        if (child.name === 'gold_amount') {
          child.fields.rect.x = 60 + 60;
          child.fields.rect.y = child.fields.rect.y - 1430;
        }
        if (child.name === 'gold_withdraw') {
          child.fields.rect.x = 60;
          child.fields.rect.y = child.fields.rect.y - 1430;
        }
        return child.name !== 'title';

      }
    );
    D2RMM.writeJson(bankExpansionLayoutHDFilename2, bankExpansionLayoutHD2);

    const controllerOverlayHDFilename2 =
      'global\\ui\\layouts\\controller\\controlleroverlayhd.json';
    const controllerOverlayHD2 = D2RMM.readJson(controllerOverlayHDFilename2);
    controllerOverlayHD2.children.forEach((child) => {
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
    D2RMM.writeJson(controllerOverlayHDFilename2, controllerOverlayHD2);

    const bankOriginalControllerLayoutHDFilename2 =
      'global\\ui\\layouts\\controller\\bankoriginallayouthd.json';
    const bankOriginalControllerLayoutHD2 = D2RMM.readJson(
      bankOriginalControllerLayoutHDFilename2
    );
    bankOriginalControllerLayoutHD2.children.forEach((child) => {
      if (child.name === 'background') {
        child.fields.filename =
          'Controller/Panel/Stash/V2/Classic_StashPanelBG_Expanded';
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
    D2RMM.writeJson(
      bankOriginalControllerLayoutHDFilename2,
      bankOriginalControllerLayoutHD2
    );

    const bankExpansionControllerLayoutHDFilename2 =
      'global\\ui\\layouts\\controller\\bankexpansionlayouthd.json';
    const bankExpansionControllerLayoutHD2 = D2RMM.readJson(
      bankExpansionControllerLayoutHDFilename2
    );
    bankExpansionControllerLayoutHD2.children.forEach((child) => {
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
    D2RMM.writeJson(
      bankExpansionControllerLayoutHDFilename2,
      bankExpansionControllerLayoutHD2
    );

    D2RMM.copyFile(
      'case16X16/hd', // <mod folder>\hd
      'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
      true // overwrite any conflicts
    );
    break;
}
switch (config.packageSize) {
  case 'package_13X8':
    const inventoryFilename = 'global\\excel\\inventory.txt';
    const inventory = D2RMM.readTsv(inventoryFilename);
    inventory.rows.forEach((row) => {
      const id = row.class;
      const classes = [
        'Amazon',
        'Assassin',
        'Barbarian',
        'Druid',
        'Necromancer',
        'Paladin',
        'Sorceress',
      ];
      if (
        classes.indexOf(id) !== -1 ||
        classes.map((cls) => `${cls}2`).indexOf(id) !== -1
      ) {
        row.gridX = 13;
        row.gridY = 8;
      }
    });
    D2RMM.writeTsv(inventoryFilename, inventory);

    const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
    const profileHD = D2RMM.readJson(profileHDFilename);
    profileHD.RightPanelRect_ExpandedInventory = {
      x: -1394 - (1382 - 1162),
      y: -651,
      width: 1382,
      height: 1507,
    };
    profileHD.PanelClickCatcherRect_ExpandedInventory = {
      x: 0,
      y: 0,
      width: 1162,
      height: 1507,
    };
// offset the right hinge so that it doesn't overlap with content of the right panel
    profileHD.RightHingeRect = {x: 1076 + 20, y: 630};
    profileHD.RightHingeRect_ExpandedInventory = {
      x: 1076 + (1382 - 1162) + 20,
      y: 630,
    };
    D2RMM.writeJson(profileHDFilename, profileHD);

    const profileLVFilename = 'global\\ui\\layouts\\_profilelv.json';
    const profileLV = D2RMM.readJson(profileLVFilename);
    profileLV.RightPanelRect_ExpandedInventory = {
      x: -1346 - (1382 - 1162) * 1.16,
      y: -856,
      width: 1382,
      height: 1507,
      scale: 1.16,
    };
    D2RMM.writeJson(profileLVFilename, profileLV);

    const playerInventoryOriginalLayoutFilename =
      'global\\ui\\layouts\\playerinventoryoriginallayout.json';
    const playerInventoryOriginalLayout = D2RMM.readJson(
      playerInventoryOriginalLayoutFilename
    );
    playerInventoryOriginalLayout.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 13;
        child.fields.cellCount.y = 8;
      }
    });
    D2RMM.writeJson(
      playerInventoryOriginalLayoutFilename,
      playerInventoryOriginalLayout
    );

    const playerInventoryOriginalLayoutHDFilename =
      'global\\ui\\layouts\\playerinventoryoriginallayouthd.json';
    const playerInventoryOriginalLayoutHD = D2RMM.readJson(
      playerInventoryOriginalLayoutHDFilename
    );
    playerInventoryOriginalLayoutHD.fields.rect =
      '$RightPanelRect_ExpandedInventory';
    playerInventoryOriginalLayoutHD.children =
      playerInventoryOriginalLayoutHD.children.filter((child) => {
        if (child.name === 'background') {
          child.fields.filename = 'PANEL\\Inventory\\Classic_Background_Expanded';
        }
        if (child.name === 'click_catcher') {
          child.fields.rect = {x: 0, y: 45, width: 1093, height: 1495};
        }
        if (child.name === 'RightHinge') {
          child.fields.rect = '$RightHingeRect_ExpandedInventory';
        }
        if (child.name === 'title') {
          child.fields.rect = {
            x: 91 + (1382 - 1162) / 2,
            y: 64,
            width: 972,
            height: 71,
          };
        }
        if (child.name === 'close') {
          child.fields.rect.x = child.fields.rect.x + (1382 - 1162);
        }
        if (child.name === 'grid') {
          child.fields.cellCount.x = 13;
          child.fields.cellCount.y = 8;
          child.fields.rect.x = child.fields.rect.x - 37;
          child.fields.rect.y = child.fields.rect.y - 229;
        }
        if (child.name === 'slot_right_arm') {
          child.fields.rect.x = child.fields.rect.x - 14;
          child.fields.rect.y = child.fields.rect.y + 12;
        }
        if (child.name === 'slot_left_arm') {
          child.fields.rect.x = child.fields.rect.x + 227;
          child.fields.rect.y = child.fields.rect.y + 12;
        }
        if (child.name === 'slot_torso') {
          child.fields.rect.x = child.fields.rect.x + 101;
          child.fields.rect.y = child.fields.rect.y - 229;
        }
        if (child.name === 'slot_head') {
          child.fields.rect.x = child.fields.rect.x - 144;
          child.fields.rect.y = child.fields.rect.y + 12;
        }
        if (child.name === 'slot_gloves') {
          child.fields.rect.x = child.fields.rect.x + 231;
          child.fields.rect.y = child.fields.rect.y - 233;
        }
        if (child.name === 'slot_feet') {
          child.fields.rect.x = child.fields.rect.x - 26;
          child.fields.rect.y = child.fields.rect.y - 231;
        }
        if (child.name === 'slot_belt') {
          child.fields.rect.x = child.fields.rect.x + 101;
          child.fields.rect.y = child.fields.rect.y - 234;
        }
        if (child.name === 'slot_neck') {
          child.fields.rect.x = child.fields.rect.x + 99;
          child.fields.rect.y = child.fields.rect.y - 182;
        }
        if (child.name === 'slot_right_hand') {
          child.fields.rect.x = child.fields.rect.x + 474;
          child.fields.rect.y = child.fields.rect.y - 466;
        }
        if (child.name === 'slot_left_hand') {
          child.fields.rect.x = child.fields.rect.x + 232;
          child.fields.rect.y = child.fields.rect.y - 466;
        }
        if (child.name === 'gold_amount' || child.name === 'gold_button') {
          child.fields.rect.x = child.fields.rect.x - 291;
          child.fields.rect.y = child.fields.rect.y - 1267;
        }
        return true;
      });
    D2RMM.writeJson(
      playerInventoryOriginalLayoutHDFilename,
      playerInventoryOriginalLayoutHD
    );

    const playerInventoryExpansionLayoutHDFilename =
      'global\\ui\\layouts\\playerinventoryexpansionlayouthd.json';
    const playerInventoryExpansionLayoutHD = D2RMM.readJson(
      playerInventoryExpansionLayoutHDFilename
    );
    playerInventoryExpansionLayoutHD.children =
      playerInventoryExpansionLayoutHD.children.filter((child) => {
        if (child.name === 'click_catcher') {
          // make click catcher work the same way as in the originallayouthd file
          return false;
        }
        if (child.name === 'background') {
          child.fields.filename = 'PANEL\\Inventory\\Background_Expanded';
        }
        if (
          child.name === 'background_right_arm' ||
          child.name === 'background_right_arm_selected' ||
          child.name === 'weaponswap_right_arm' ||
          child.name === 'text_i_left' ||
          child.name === 'text_ii_left'
        ) {
          child.fields.rect.x = child.fields.rect.x - 14;
          child.fields.rect.y = child.fields.rect.y + 12;
        }
        if (
          child.name === 'background_left_arm' ||
          child.name === 'background_left_arm_selected' ||
          child.name === 'weaponswap_left_arm' ||
          child.name === 'text_i_right' ||
          child.name === 'text_ii_right'
        ) {
          child.fields.rect.x = child.fields.rect.x + 227;
          child.fields.rect.y = child.fields.rect.y + 12;
        }
        return true;
      });
    D2RMM.writeJson(
      playerInventoryExpansionLayoutHDFilename,
      playerInventoryExpansionLayoutHD
    );

    const playerInventoryOriginalControllerLayoutHDFilename =
      'global\\ui\\layouts\\controller\\playerinventoryoriginallayouthd.json';
    const playerInventoryOriginalControllerLayoutHD = D2RMM.readJson(
      playerInventoryOriginalControllerLayoutHDFilename
    );
    playerInventoryOriginalControllerLayoutHD.children.forEach((child) => {
      if (child.name === 'background') {
        child.fields.filename =
          'Controller/Panel/InventoryPanel/V2/InventoryBG_Classic_Expanded';
        child.fields.rect.x = child.fields.rect.x - 166;
        child.fields.rect.y = child.fields.rect.y - 160;
      }
      if (child.name === 'grid') {
        child.fields.rect.x = child.fields.rect.x - 132;
        child.fields.rect.y = child.fields.rect.y - 344;
      }
      if (child.name === 'slot_right_arm') {
        child.fields.rect.x = child.fields.rect.x - 99;
        child.fields.rect.y = child.fields.rect.y - 60;
      }
      if (child.name === 'slot_left_arm') {
        child.fields.rect.x = child.fields.rect.x + 123;
        child.fields.rect.y = child.fields.rect.y - 62;
      }
      if (child.name === 'slot_torso') {
        child.fields.rect.x = child.fields.rect.x + 6;
        child.fields.rect.y = child.fields.rect.y - 199;
      }
      if (child.name === 'slot_head') {
        child.fields.rect.x = child.fields.rect.x - 239;
        child.fields.rect.y = child.fields.rect.y + 21;
      }
      if (child.name === 'slot_gloves') {
        child.fields.rect.x = child.fields.rect.x + 146;
        child.fields.rect.y = child.fields.rect.y - 282;
      }
      if (child.name === 'slot_feet') {
        child.fields.rect.x = child.fields.rect.x - 130;
        child.fields.rect.y = child.fields.rect.y - 281;
      }
      if (child.name === 'slot_belt') {
        child.fields.rect.x = child.fields.rect.x + 7;
        child.fields.rect.y = child.fields.rect.y - 185;
      }
      if (child.name === 'slot_neck') {
        child.fields.rect.x = child.fields.rect.x - 3;
        child.fields.rect.y = child.fields.rect.y - 167;
      }
      if (child.name === 'slot_right_hand') {
        child.fields.rect.x = child.fields.rect.x + 389;
        child.fields.rect.y = child.fields.rect.y - 417;
      }
      if (child.name === 'slot_left_hand') {
        child.fields.rect.x = child.fields.rect.x + 126;
        child.fields.rect.y = child.fields.rect.y - 417;
      }
      if (child.name === 'Belt') {
        child.fields.rect.x = child.fields.rect.x + 15;
        child.fields.rect.y = child.fields.rect.y + 595;
      }
      if (child.name === 'gold_amount' || child.name === 'gold_button') {
        child.fields.rect.x = child.fields.rect.x - 474;
        child.fields.rect.y = child.fields.rect.y - 1454;
      }
    });
    D2RMM.writeJson(
      playerInventoryOriginalControllerLayoutHDFilename,
      playerInventoryOriginalControllerLayoutHD
    );

    const playerInventoryExpansionControllerLayoutHDFilename =
      'global\\ui\\layouts\\controller\\playerinventoryexpansionlayouthd.json';
    const playerInventoryExpansionControllerLayoutHD = D2RMM.readJson(
      playerInventoryExpansionControllerLayoutHDFilename
    );
    playerInventoryExpansionControllerLayoutHD.children.forEach((child) => {
      if (child.name === 'background') {
        child.fields.filename =
          'Controller/Panel/InventoryPanel/V2/InventoryBG_Expanded';
      }
      if (
        child.name === 'background_right_arm' ||
        child.name === 'background_right_arm_selected' ||
        child.name === 'WeaponSwapRightLegend' ||
        child.name === 'text_i_left' ||
        child.name === 'text_ii_left'
      ) {
        child.fields.rect.x = child.fields.rect.x - 99;
        child.fields.rect.y = child.fields.rect.y - 60;
      }
      if (
        child.name === 'background_left_arm' ||
        child.name === 'background_left_arm_selected' ||
        child.name === 'WeaponSwapLeftLegend' ||
        child.name === 'text_i_right' ||
        child.name === 'text_ii_right'
      ) {
        child.fields.rect.x = child.fields.rect.x + 123;
        child.fields.rect.y = child.fields.rect.y - 62;
      }
    });
    D2RMM.writeJson(
      playerInventoryExpansionControllerLayoutHDFilename,
      playerInventoryExpansionControllerLayoutHD
    );

    D2RMM.copyFile(
      'package13X8/hd', // <mod folder>\hd
      'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
      true // overwrite any conflicts
    );

    break;
}

switch (config.boxSize) {
  case 'box_6X4':
    const inventoryFilename1 = 'global\\excel\\inventory.txt';
    const inventory1 = D2RMM.readTsv(inventoryFilename1);
    inventory1.rows.forEach((row) => {
      if (
        row.class === 'Transmogrify Box Page 1' ||
        row.class === 'Transmogrify Box2'
      ) {
        row.gridX = 6;
      }
    });
    D2RMM.writeTsv(inventoryFilename1, inventory1);

    const profileHDFilename1 = 'global\\ui\\layouts\\_profilehd.json';
    const profileHD1 = D2RMM.readJson(profileHDFilename1);
    D2RMM.writeJson(profileHDFilename1, profileHD1);

    const profileLVFilename1 = 'global\\ui\\layouts\\_profilelv.json';
    const profileLV1 = D2RMM.readJson(profileLVFilename1);
    D2RMM.writeJson(profileLVFilename1, profileLV1);

    const horadricCubeLayoutFilename =
      'global\\ui\\layouts\\horadriccubelayout.json';
    const horadricCubeLayout = D2RMM.readJson(horadricCubeLayoutFilename);
    horadricCubeLayout.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 6;
        child.fields.cellCount.y = 4;
        // one cell = 29px, add 1 column to left and 2 columns to right of original space
        child.fields.rect.x = child.fields.rect.x - 29;
      }
    });
    D2RMM.writeJson(horadricCubeLayoutFilename, horadricCubeLayout);

    const horadricCubeLayoutHDFilename1 =
      'global\\ui\\layouts\\horadriccubelayouthd.json';
    const horadricCubeHDLayout1 = D2RMM.readJson(horadricCubeLayoutHDFilename1);
    horadricCubeHDLayout1.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 6;
        child.fields.cellCount.y = 4;
        child.fields.rect.x = child.fields.rect.x - 144;
      }
      if (child.name === 'background') {
        child.fields.filename = 'PANEL\\Horadric_Cube\\HoradricCube_BG_Expanded';
      }
    });
    D2RMM.writeJson(horadricCubeLayoutHDFilename1, horadricCubeHDLayout1);

    const controllerHoradricCubeHDLayoutFilename1 =
      'global\\ui\\layouts\\controller\\horadriccubelayouthd.json';
    const controllerHoradricCubeHDLayout1 = D2RMM.readJson(
      controllerHoradricCubeHDLayoutFilename1
    );
    controllerHoradricCubeHDLayout1.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.rect.x = child.fields.rect.x - 142;
      }
      if (child.name === 'background') {
        child.fields.filename =
          'Controller/Panel/HoradricCube/V2/HoradricCubeBG_Expanded';
      }
    });
    D2RMM.writeJson(
      controllerHoradricCubeHDLayoutFilename1,
      controllerHoradricCubeHDLayout1
    );

    D2RMM.copyFile(
      'box6X4/hd', // <mod folder>\hd
      'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
      true // overwrite any conflicts
    );
    break;
  case 'box_10X10':
    const inventoryFilename = 'global\\excel\\inventory.txt';
    const inventory = D2RMM.readTsv(inventoryFilename);
    inventory.rows.forEach((row) => {
      if (
        row.class === 'Transmogrify Box Page 1' ||
        row.class === 'Transmogrify Box2'
      ) {
        row.gridX = 10;
        row.gridY = 10;
      }
    });
    D2RMM.writeTsv(inventoryFilename, inventory);

    const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
    const profileHD = D2RMM.readJson(profileHDFilename);
    D2RMM.writeJson(profileHDFilename, profileHD);

    const profileLVFilename = 'global\\ui\\layouts\\_profilelv.json';
    const profileLV = D2RMM.readJson(profileLVFilename);
    D2RMM.writeJson(profileLVFilename, profileLV);

    const horadricCubeLayoutHDFilename =
      'global\\ui\\layouts\\horadriccubelayouthd.json';
    const horadricCubeHDLayout = D2RMM.readJson(horadricCubeLayoutHDFilename);
    horadricCubeHDLayout.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.cellCount.x = 10;
        child.fields.cellCount.y = 10;
        child.fields.rect.x = 91;
        child.fields.rect.y = 303;
      }
      if (child.name === 'convert') {
        child.fields.rect.x = 523;
        child.fields.rect.y = 1313;
      }
      if (child.name === 'background') {
        child.fields.filename = 'PANEL\\Horadric_Cube\\HoradricCube_BG_Expanded';
      }
    });
    D2RMM.writeJson(horadricCubeLayoutHDFilename, horadricCubeHDLayout);

    const controllerHoradricCubeHDLayoutFilename =
      'global\\ui\\layouts\\controller\\horadriccubelayouthd.json';
    const controllerHoradricCubeHDLayout = D2RMM.readJson(
      controllerHoradricCubeHDLayoutFilename
    );
    controllerHoradricCubeHDLayout.children.forEach((child) => {
      if (child.name === 'grid') {
        child.fields.rect.x = 160;
        child.fields.rect.y = 217;
      }
      if (child.name === 'convert') {
        child.fields.rect.x = 593;
        child.fields.rect.y = 1257;
      }
      if (child.name === 'background') {
        child.fields.filename =
          'Controller/Panel/HoradricCube/V2/HoradricCubeBG_Expanded';
      }
    });
    D2RMM.writeJson(
      controllerHoradricCubeHDLayoutFilename,
      controllerHoradricCubeHDLayout
    );

    D2RMM.copyFile(
      'box10X10/hd', // <mod folder>\hd
      'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
      true // overwrite any conflicts
    );

    break;
}