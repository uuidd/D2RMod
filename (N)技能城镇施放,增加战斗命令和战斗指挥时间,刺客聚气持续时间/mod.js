const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);

// Param1默认值为750，25为1秒，因此75025=30秒
// 540 25=13500是9分钟

// 更改战斗命令和战斗指挥基地持续时间
skills.rows.forEach((row) => {
  if (row.charclass === 'bar') {
    if (row.skilldesc === 'battle orders' || row.skilldesc === 'battle command') {
      row.Param1 = config.Param1 * 25;
    }
  }
});

// 刺客聚气持续时间
skills.rows.forEach((row) => {
  if (row.charclass === 'ass') {
    if (row.Param3 === '375') {
      row.Param3 = config.Param3 * 25;
    }
    if (row.auralencalc === '375') {
      row.auralencalc = config.auralencalc * 25;
    }
    if (config.calc1) {
      if (row.calc1 === 'lvl*3') {
        row.calc1 = 50;
      }
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
