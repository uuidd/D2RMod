const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

function ClearItem(row, TCName, sum) {
  for (let i = 1; i <= sum; i++) {
    if (row['Treasure Class'] === TCName) {
      row['Item' + i] = '';
      row['Prob' + i] = '';
    }
  }
}

function ModItem(row, TCName, ItemNum, ItemName, ProbValue) {
  if (row['Treasure Class'] === TCName) {
    row['Item' + ItemNum] = ItemName;
    row['Prob' + ItemNum] = ProbValue;
  }
}

// 只修改前4位item
function ModItem4(row, TCName, item1, prob1, item2, prob2, item3, prob3, item4, prob4) {
  if (row['Treasure Class'] === TCName) {
    row['Item1'] = item1;
    row['Prob1'] = prob1;
    row['Item2'] = item2;
    row['Prob2'] = prob2;
    row['Item3'] = item3;
    row['Prob3'] = prob3;
    row['Item4'] = item4;
    row['Prob4'] = prob4;
  }
}

// 剔除Magic屏蔽部分卷轴与红蓝
function ModMagic(row) {
  ModItem(row, 'Act 1 Cast A', 5, '', '');
  ModItem(row, 'Act 1 Cast B', 5, '', '');
  ModItem(row, 'Act 1 Cast C', 5, '', '');
  ModItem(row, 'Act 2 Cast A', 5, '', '');
  ModItem(row, 'Act 2 Cast B', 5, '', '');
  ModItem(row, 'Act 2 Cast C', 5, '', '');
  ModItem(row, 'Act 3 Cast A', 5, '', '');
  ModItem(row, 'Act 3 Cast B', 5, '', '');
  ModItem(row, 'Act 3 Cast C', 5, '', '');
  ModItem(row, 'Act 4 Cast A', 5, '', '');
  ModItem(row, 'Act 4 Cast B', 5, '', '');
  ModItem(row, 'Act 5 Cast A', 5, '', '');
  ModItem(row, 'Act 5 Cast B', 5, '', '');
  ModItem(row, 'Act 5 Cast C', 5, '', '');
  ModItem(row, 'Act 1 (N) Cast A', 5, '', '');
  ModItem(row, 'Act 1 (N) Cast B', 5, '', '');
  ModItem(row, 'Act 1 (N) Cast C', 5, '', '');
  ModItem(row, 'Act 2 (N) Cast A', 5, '', '');
  ModItem(row, 'Act 2 (N) Cast B', 5, '', '');
  ModItem(row, 'Act 2 (N) Cast C', 5, '', '');
  ModItem(row, 'Act 3 (N) Cast A', 5, '', '');
  ModItem(row, 'Act 3 (N) Cast B', 5, '', '');
  ModItem(row, 'Act 3 (N) Cast C', 5, '', '');
  ModItem(row, 'Act 4 (N) Cast A', 5, '', '');
  ModItem(row, 'Act 4 (N) Cast B', 5, '', '');
  ModItem(row, 'Act 5 (N) Cast A', 5, '', '');
  ModItem(row, 'Act 5 (N) Cast B', 5, '', '');
  ModItem(row, 'Act 5 (N) Cast C', 5, '', '');
  ModItem(row, 'Act 1 (H) Cast A', 5, '', '');
  ModItem(row, 'Act 1 (H) Cast B', 5, '', '');
  ModItem(row, 'Act 1 (H) Cast C', 5, '', '');
  ModItem(row, 'Act 2 (H) Cast A', 5, '', '');
  ModItem(row, 'Act 2 (H) Cast B', 5, '', '');
  ModItem(row, 'Act 2 (H) Cast C', 5, '', '');
  ModItem(row, 'Act 3 (H) Cast A', 5, '', '');
  ModItem(row, 'Act 3 (H) Cast B', 5, '', '');
  ModItem(row, 'Act 3 (H) Cast C', 5, '', '');
  ModItem(row, 'Act 4 (H) Cast A', 5, '', '');
  ModItem(row, 'Act 4 (H) Cast B', 5, '', '');
  ModItem(row, 'Act 5 (H) Cast A', 5, '', '');
  ModItem(row, 'Act 5 (H) Cast B', 5, '', '');
  ModItem(row, 'Act 5 (H) Cast C', 5, '', '');

  ModItem(row, 'Act 1 Wraith A', 2, '', '');
  ModItem(row, 'Act 1 Wraith B', 2, '', '');
  ModItem(row, 'Act 1 Wraith C', 2, '', '');
  ModItem(row, 'Act 2 Wraith A', 2, '', '');
  ModItem(row, 'Act 2 Wraith B', 2, '', '');
  ModItem(row, 'Act 2 Wraith C', 2, '', '');
  ModItem(row, 'Act 3 Wraith A', 2, '', '');
  ModItem(row, 'Act 3 Wraith B', 2, '', '');
  ModItem(row, 'Act 3 Wraith C', 2, '', '');
  ModItem(row, 'Act 4 Wraith A', 2, '', '');
  ModItem(row, 'Act 4 Wraith B', 2, '', '');
  ModItem(row, 'Act 5 Wraith A', 2, '', '');
  ModItem(row, 'Act 5 Wraith B', 2, '', '');
  ModItem(row, 'Act 5 Wraith C', 2, '', '');
  ModItem(row, 'Act 1 (N) Wraith A', 2, '', '');
  ModItem(row, 'Act 1 (N) Wraith B', 2, '', '');
  ModItem(row, 'Act 1 (N) Wraith C', 2, '', '');
  ModItem(row, 'Act 2 (N) Wraith A', 2, '', '');
  ModItem(row, 'Act 2 (N) Wraith B', 2, '', '');
  ModItem(row, 'Act 2 (N) Wraith C', 2, '', '');
  ModItem(row, 'Act 3 (N) Wraith A', 2, '', '');
  ModItem(row, 'Act 3 (N) Wraith B', 2, '', '');
  ModItem(row, 'Act 3 (N) Wraith C', 2, '', '');
  ModItem(row, 'Act 4 (N) Wraith A', 2, '', '');
  ModItem(row, 'Act 4 (N) Wraith B', 2, '', '');
  ModItem(row, 'Act 5 (N) Wraith A', 2, '', '');
  ModItem(row, 'Act 5 (N) Wraith B', 2, '', '');
  ModItem(row, 'Act 5 (N) Wraith C', 2, '', '');
  ModItem(row, 'Act 1 (H) Wraith A', 2, '', '');
  ModItem(row, 'Act 1 (H) Wraith B', 2, '', '');
  ModItem(row, 'Act 1 (H) Wraith C', 2, '', '');
  ModItem(row, 'Act 2 (H) Wraith A', 2, '', '');
  ModItem(row, 'Act 2 (H) Wraith B', 2, '', '');
  ModItem(row, 'Act 2 (H) Wraith C', 2, '', '');
  ModItem(row, 'Act 3 (H) Wraith A', 2, '', '');
  ModItem(row, 'Act 3 (H) Wraith B', 2, '', '');
  ModItem(row, 'Act 3 (H) Wraith C', 2, '', '');
  ModItem(row, 'Act 4 (H) Wraith A', 2, '', '');
  ModItem(row, 'Act 4 (H) Wraith B', 2, '', '');
  ModItem(row, 'Act 5 (H) Wraith A', 2, '', '');
  ModItem(row, 'Act 5 (H) Wraith B', 2, '', '');
  ModItem(row, 'Act 5 (H) Wraith C', 2, '', '');
}

// 只修改item1后面的直接清空
function ModItemOnlyFirst(row, TCName, item1, prob1) {
  if (row['Treasure Class'] === TCName) {
    row['Item1'] = item1;
    row['Prob1'] = prob1;
    row['Item2'] = '';
    row['Prob2'] = '';
    row['Item3'] = '';
    row['Prob3'] = '';
    row['Item4'] = '';
    row['Prob4'] = '';
    row['Item5'] = '';
    row['Prob5'] = '';
    row['Item6'] = '';
    row['Prob6'] = '';
    row['Item7'] = '';
    row['Prob7'] = '';
    row['Item8'] = '';
    row['Prob8'] = '';
    row['Item9'] = '';
    row['Prob9'] = '';
    row['Item10'] = '';
    row['Prob10'] = '';
  }
}


treasureclassex.rows.forEach((row) => {
  // 禁止BOSS掉落精华
  if (config.disdrop_bosstoken) {
    ModItem(row, 'Andariel (H)', 5, '', '');
    ModItem(row, 'Andarielq (H)', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated A', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated B', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated C', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated D', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated E', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated F', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated G', 3, '', '');
    ModItem(row, 'Andarielq Item (H) Desecrated H', 3, '', '');

    ModItem(row, 'Duriel (H) - Base', 5, '', '');
    ModItem(row, 'Duriel (H) - Base Desecrated A', 5, '', '');
    ModItem(row, 'Duriel (H) - Base Desecrated B', 5, '', '');
    ModItem(row, 'Duriel (H) - Base Desecrated C', 5, '', '');
    ModItem(row, 'Duriel (H) - Base Desecrated D', 5, '', '');
    ModItem(row, 'Durielq (H) - Base', 3, '', '');

    ModItem(row, 'Mephisto (H)', 5, '', '');
    ModItem(row, 'Mephisto Item (H) Desecrated A', 5, '', '');
    ModItem(row, 'Mephisto Item (H) Desecrated B', 5, '', '');
    ModItem(row, 'Mephisto Item (H) Desecrated C', 5, '', '');
    ModItem(row, 'Mephisto Item (H) Desecrated D', 5, '', '');
    ModItem(row, 'Mephistoq (H)', 3, '', '');

    ModItem(row, 'Diablo (H)', 5, '', '');
    ModItem(row, 'Diablo Item (H) Desecrated A', 5, '', '');
    ModItem(row, 'Diablo Item (H) Desecrated B', 5, '', '');
    ModItem(row, 'Diabloq (H)', 3, '', '');

    ModItem(row, 'Baal (H)', 5, '', '');
    ModItem(row, 'Baal Item (H) Desecrated', 5, '', '');
    ModItem(row, 'Baalq (H)', 3, '', '');
  }

  // 怪物掉落宝石方式
  switch (config.gemdrop_select) {
    // 高难度的怪也能掉落完美宝石
    case 'dis_gem1':
      ModItem(row, 'Act 1 (H) Good', 7, 'Perfect Gem', 28);
      ModItem(row, 'Act 2 (H) Good', 7, 'Perfect Gem', 28);
      ModItem(row, 'Act 3 (H) Good', 7, 'Perfect Gem', 28);
      ModItem(row, 'Act 4 (H) Good', 7, 'Perfect Gem', 28);
      ModItem(row, 'Act 5 (H) Good', 7, 'Perfect Gem', 28);
      break;
    // 不会掉落任何宝石,地面更干净
    case 'dis_gem2':
      ClearItem(row, 'Act 1 Good', 7);
      ClearItem(row, 'Act 2 Good', 7);
      ClearItem(row, 'Act 3 Good', 7);
      ClearItem(row, 'Act 4 Good', 7);
      ClearItem(row, 'Act 5 Good', 7);
      ClearItem(row, 'Act 1 (N) Good', 7);
      ClearItem(row, 'Act 2 (N) Good', 7);
      ClearItem(row, 'Act 3 (N) Good', 7);
      ClearItem(row, 'Act 4 (N) Good', 7);
      ClearItem(row, 'Act 5 (N) Good', 7);
      ClearItem(row, 'Act 1 (H) Good', 7);
      ClearItem(row, 'Act 2 (H) Good', 7);
      ClearItem(row, 'Act 3 (H) Good', 7);
      ClearItem(row, 'Act 4 (H) Good', 7);
      ClearItem(row, 'Act 5 (H) Good', 7);

      ModItem4(row, 'Act 1 Good', 'Jewelry A', 5, '', '', '', '', '', '');
      ModItem4(row, 'Act 2 Good', 'Jewelry B', 20, 'Runes 1', 3, 'Runes 2', 3);
      ModItem4(row, 'Act 3 Good', 'Jewelry C', 20, 'Runes 3', 3, 'Runes 4', 3);
      ModItem4(row, 'Act 4 Good', 'Jewelry C', 50, 'Runes 5', 14, 'Runes 6', 7);
      ModItem4(row, 'Act 5 Good', 'Jewelry C', 50, 'Runes 7', 10, '', '');
      ModItem4(row, 'Act 1 (N) Good', 'Jewelry C', 60, 'Runes 8', 14, '', '');
      ModItem4(row, 'Act 2 (N) Good', 'Jewelry C', 60, 'Runes 9', 14, '', '');
      ModItem4(row, 'Act 3 (N) Good', 'Jewelry C', 60, 'Runes 10', 14, '', '');
      ModItem4(row, 'Act 4 (N) Good', 'Jewelry C', 60, 'Runes 11', 14, '', '');
      ModItem4(row, 'Act 5 (N) Good', 'Jewelry C', 60, 'Runes 12', 14, '', '');
      ModItem4(row, 'Act 1 (H) Good', 'Jewelry C', 60, 'Runes 13', 14, '', '');
      ModItem4(row, 'Act 2 (H) Good', 'Jewelry C', 60, 'Runes 14', 14, '', '');
      ModItem4(row, 'Act 3 (H) Good', 'Jewelry C', 60, 'Runes 15', 14, '', '');
      ModItem4(row, 'Act 4 (H) Good', 'Jewelry C', 60, 'Runes 16', 14, '', '');
      ModItem4(row, 'Act 5 (H) Good', 'Jewelry C', 60, 'Runes 17', 14, '', '');
      break;
  }

  // 禁止怪物掉落药剂
  // 屏蔽所有(红, 蓝, 解毒, 精力, 融冰)药剂只留大紫小紫药的话
  // 需要修改Potion分类只剩rvs
  // 需要修改Hpotion分类只剩rvs
  // 屏蔽红蓝药和卷轴还需要剔除掉Cast分类里面的Magic分类
  // 屏蔽红蓝药和卷轴还需要剔除掉Wraith分类里面的Magic分类
  switch (config.disdrop_potion) {
    // 禁止掉落精力,解毒,融冰(保留红蓝)
    case 'dis_potion1':
      ModItem(row, 'Potion 1', 6, '', '');
      ModItem(row, 'Potion 2', 7, '', '');
      ModItem(row, 'Potion 2', 8, '', '');
      ModItem(row, 'Potion 2', 9, '', '');
      ModItem(row, 'Potion 3', 7, '', '');
      ModItem(row, 'Potion 3', 8, '', '');
      ModItem(row, 'Potion 3', 9, '', '');
      ModItem(row, 'Potion 4', 7, '', '');
      ModItem(row, 'Potion 4', 8, '', '');
      ModItem(row, 'Potion 4', 9, '', '');
      ModItem(row, 'Potion 5', 6, '', '');
      ModItem(row, 'Potion 5', 7, '', '');
      ModItem(row, 'Potion 5', 8, '', '');
      ModItem(row, 'Potion 6', 6, '', '');
      ModItem(row, 'Potion 6', 7, '', '');
      ModItem(row, 'Potion 6', 8, '', '');
      break;
    // 禁止掉落红,蓝,精力,解毒,融冰
    case 'dis_potion2':
      ModItemOnlyFirst(row, 'Hpotion 1', 'rvs', 1);
      ModItemOnlyFirst(row, 'Hpotion 2', 'rvs', 1);
      ModItemOnlyFirst(row, 'Hpotion 3', 'rvs', 1);
      ModItemOnlyFirst(row, 'Hpotion 4', 'rvs', 1);
      ModItemOnlyFirst(row, 'Hpotion 5', 'rvs', 1);
      ModItemOnlyFirst(row, 'Hpotion 6', 'rvs', 1);
      ModItemOnlyFirst(row, 'Potion 1', 'rvs', 1);
      ModItemOnlyFirst(row, 'Potion 2', 'rvs', 1);
      ModItemOnlyFirst(row, 'Potion 3', 'rvs', 1);
      ModItemOnlyFirst(row, 'Potion 4', 'rvs', 1);
      ModItemOnlyFirst(row, 'Potion 5', 'rvs', 1);
      ModItemOnlyFirst(row, 'Potion 6', 'rvs', 1);
      ModMagic(row);
      break;
    // 禁止掉落小紫,红,蓝,精力,解毒,融冰
    case 'dis_potion3':
      ClearItem(row, 'Hpotion 1', 9);
      ClearItem(row, 'Hpotion 2', 9);
      ClearItem(row, 'Hpotion 3', 9);
      ClearItem(row, 'Hpotion 4', 9);
      ClearItem(row, 'Hpotion 5', 9);
      ClearItem(row, 'Hpotion 6', 9);
      ClearItem(row, 'Potion 1', 9);
      ClearItem(row, 'Potion 2', 9);
      ClearItem(row, 'Potion 3', 9);
      ClearItem(row, 'Potion 4', 9);
      ClearItem(row, 'Potion 5', 9);
      ClearItem(row, 'Potion 6', 9);
      ModMagic(row);
      break;
  }

  // 禁止怪物掉落杂物
  // 屏蔽所有杂物(宝箱钥匙, 卷轴, 爆炸, 毒气)的话
  // 需要从所有的Junk分类里面剔除掉Misc分类
  // 屏蔽箭袋类是从Junk和Miss分类里面剔除掉Ammo分类
  // 屏蔽红蓝药和卷轴还需要剔除掉Cast分类里面的Magic分类
  // 屏蔽红蓝药和卷轴还需要剔除掉Wraith分类里面的Magic分类
  switch (config.disdrop_junk) {
    // 禁止掉落宝箱钥匙,卷轴,爆炸,毒气(保留箭袋)
    case 'dis_junk1':
      ModItem4(row, 'Act 1 Junk', 'Potion 1', 8, 'Ammo', 4, '', '', '', '');
      ModItem4(row, 'Act 2 Junk', 'Act 1 Junk', 2, 'Potion 2', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 3 Junk', 'Act 2 Junk', 2, 'Potion 3', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 4 Junk', 'Act 3 Junk', 2, 'Potion 4', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 5 Junk', 'Act 4 Junk', 2, 'Potion 5', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 1 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 2 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 3 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 4 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 5 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 1 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 2 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 3 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 4 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModItem4(row, 'Act 5 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, 'Ammo', 4, '', '');
      ModMagic(row);
      break;
    // 禁止掉宝箱钥匙, 卷轴, 爆炸, 毒气, 箭袋
    case 'dis_junk2':
      ModItem4(row, 'Act 1 Junk', 'Potion 1', 8, '', '', '', '', '', '');
      ModItem4(row, 'Act 2 Junk', 'Act 1 Junk', 2, 'Potion 2', 8, '', '', '', '');
      ModItem4(row, 'Act 3 Junk', 'Act 2 Junk', 2, 'Potion 3', 8, '', '', '', '');
      ModItem4(row, 'Act 4 Junk', 'Act 3 Junk', 2, 'Potion 4', 8, '', '', '', '');
      ModItem4(row, 'Act 5 Junk', 'Act 4 Junk', 2, 'Potion 5', 8, '', '', '', '');
      ModItem4(row, 'Act 1 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 2 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 3 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 4 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 5 (N) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 1 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 2 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 3 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 4 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModItem4(row, 'Act 5 (H) Junk', 'Act 5 Junk', 2, 'Potion 6', 8, '', '', '', '');
      ModMagic(row);
      break;
  }
});

D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
