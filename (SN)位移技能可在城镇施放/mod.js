const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);

// Param1默认值为750，25为1秒，因此75025=30秒
// 540 25=13500是9分钟


skills.rows.forEach((row) => {
  // 更改战斗命令和战斗指挥基地持续时间
  if (row.charclass === 'bar') {
    if (row.skilldesc === 'battle orders' || row.skilldesc === 'battle command') {
      row.Param1 = config.bo * 25;
    }
  }
  // 刺客
  // 刺客聚气持续时间
  if (row.charclass === 'ass') {
    if (row.Param3 === '375') {
      row.Param3 = config.gas * 25;
    }
    if (row.auralencalc === '375') {
      row.auralencalc = config.gas * 25;
    }
    if (config.calc1) {
      if (row.calc1 === 'lvl*3') {
        row.calc1 = 50;
      }
    }
    // 影散 基础3000 120秒
    if (row.skilldesc === 'fade'){
      row.Param5 = config.ass * 25;
    }
    // 速度爆发 基础3000 120秒
    if (row.skilldesc === 'quickness'){
      row.Param5 = config.ass * 25;
    }
    // 淬毒 基础3000 120秒
    if (row.skilldesc === 'venom') {
      row.Param1 = config.ass * 25;
    }
    // 利刃之盾 基础3000 120秒
    if (row.skilldesc === 'blade shield') {
      row.Param1 = config.ass * 25;
    }
  }
  // 法师
  // 基础都是3600 也就是144秒
  if (row.charclass === 'sor') {
    // 寒冰甲
    if (row.skilldesc === 'chilling armor') {
      row.Param3 = config.sor * 25;
    }
    // 能量护盾
    if (row.skilldesc === 'energy shield') {
      row.Param1 = config.sor * 25;
    }
    // 附魔
    if (row.skilldesc === 'enchant') {
      row.Param1 = config.sor * 25;
    }
  }
  // 圣骑士
  if (row.charclass === 'pal') {
    // 神圣之盾 基础750 30秒
    if (row.skilldesc === 'holy shield') {
      row.Param1 = config.pal * 25;
    }
  }
  // 德鲁伊
  if (row.charclass === 'dru') {
    // 变形术(变熊) 变形术(变狼) 基础1000 40秒
    if (row.skilldesc === 'shape shifting') {
      row.Param1 = config.dru * 25;
    }
  }
});


// 技能都在城镇中施放
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

D2RMM.writeTsv(skillsFileName, skills);
