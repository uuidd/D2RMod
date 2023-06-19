// 去掉死亡时的经验惩罚
if (config.exp_noPunDeah) {
  const difficultylevelsFilename = 'global\\excel\\difficultylevels.txt';
  const difficultylevels = D2RMM.readTsv(difficultylevelsFilename);
  difficultylevels.rows.forEach((row) => {
    if (row['Name'] === 'Nightmare') {
      row['DeathExpPenalty'] = 3;
    } else if (row['Name'] === 'Hell') {
      row['DeathExpPenalty'] = 5;
    }
  });
  D2RMM.writeTsv(difficultylevelsFilename, difficultylevels);
}


const charstatsFilename = 'global\\excel\\charstats.txt';
const charstats = D2RMM.readTsv(charstatsFilename);

charstats.rows.forEach((row) => {
  // 跑步的体力消耗倍率
  // RunDrain官方默认值为20,刺客特殊点是15
  if (config.run_drain !== 1) {
    if (row['class'] !== 'Expansion') {
      row['RunDrain'] *= config.run_drain;
    }
  }

  // 出生时送的东西
  // 不同职业的回城辨识卷轴位置有所不同
  // Ama tsc = item4 isc = item5
  // Sor tsc = item3 isc = item4...
  // item无物品时默认值为0，一共是item1~item10共10种物品
  // forEach不会受return影响
  // 找到回城辨识卷轴替换为书
  // 这里发现一个有意思的地方itemXcount是指的书总共的本数不是书里面的卷轴数
  // 并且有其他MOD修改过书的最大堆叠量时，这样也会直接塞满,所以书的count我根本不需要修改
  if (config.replace_tsc_isc) {
    for (let i = 1; i < 11; i++) {
      const itemKey = row['item' + i];
      if (itemKey.match('tsc') != null) {
        row['item' + i] = 'tbk';
      }
      if (itemKey.match('isc') != null) {
        row['item' + i] = 'ibk';
      }
    }
  }

  // 找到空位置添加盒子
  if (config.create_box) {
    for (let i = 1; i < 11; i++) {
      const itemKey = row['item' + i];
      if (itemKey === '0') {
        row['item' + i] = 'box';
        row['item' + i + 'count'] = 1;
        return;
      }
    }
  }

  // 法力恢复速度
  if (row.class !== "Expansion") {
    row.ManaRegen = config.manaRegen;

    if (config.cubeStart) {
      if (row.item5 === 0) {
        row.item5 = "box";
        row.item5count = 1;
      } else {
        row.item6 = "box";
        row.item6count = 1;
      }
    }
  }
});

D2RMM.writeTsv(charstatsFilename, charstats);

// 技能都在城镇中施放
const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach((row) => {
  if (row.charclass !== '' && row.passive === '') {
    switch (config.skillTown) {
      case 'allSkill':
        row.InTown = 1;
        break;
      case 'partSkill':
        if ([
          'Armageddon',
          'Battle Command',
          'Battle Orders',
          'Charge',
          'Hurricane',
          'Leap',
          'Shout',
          'Teleport',
          'Thunder Storm',
        ].indexOf(row.skill) !== -1) {
          row.InTown = 1;
        }
        break;
    }
  }
});
D2RMM.writeTsv(skillsFilename, skills);

// 书钥匙堆叠大小
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((row) => {
  if (
    row.code === 'tbk' || // Tome of Town Portal,默认20
    row.code === 'ibk' // Tome of Identify,默认20
  ) {
    row.maxstack = config.tomes_stacks;
  }
  if (
    row.code === 'key' // Key,默认12
  ) {
    row.maxstack = config.keys_stacks;
  }
});
D2RMM.writeTsv(miscFilename, misc);