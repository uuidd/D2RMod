const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);

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
