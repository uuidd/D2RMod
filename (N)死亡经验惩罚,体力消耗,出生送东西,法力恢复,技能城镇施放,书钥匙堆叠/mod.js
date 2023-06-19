// ȥ������ʱ�ľ���ͷ�
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
  // �ܲ����������ı���
  // RunDrain�ٷ�Ĭ��ֵΪ20,�̿��������15
  if (config.run_drain !== 1) {
    if (row['class'] !== 'Expansion') {
      row['RunDrain'] *= config.run_drain;
    }
  }

  // ����ʱ�͵Ķ���
  // ��ְͬҵ�ĻسǱ�ʶ����λ��������ͬ
  // Ama tsc = item4 isc = item5
  // Sor tsc = item3 isc = item4...
  // item����ƷʱĬ��ֵΪ0��һ����item1~item10��10����Ʒ
  // forEach������returnӰ��
  // �ҵ��سǱ�ʶ�����滻Ϊ��
  // ���﷢��һ������˼�ĵط�itemXcount��ָ�����ܹ��ı�������������ľ�����
  // ����������MOD�޸Ĺ�������ѵ���ʱ������Ҳ��ֱ������,�������count�Ҹ�������Ҫ�޸�
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

  // �ҵ���λ����Ӻ���
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

  // �����ָ��ٶ�
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

// ���ܶ��ڳ�����ʩ��
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

// ��Կ�׶ѵ���С
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((row) => {
  if (
    row.code === 'tbk' || // Tome of Town Portal,Ĭ��20
    row.code === 'ibk' // Tome of Identify,Ĭ��20
  ) {
    row.maxstack = config.tomes_stacks;
  }
  if (
    row.code === 'key' // Key,Ĭ��12
  ) {
    row.maxstack = config.keys_stacks;
  }
});
D2RMM.writeTsv(miscFilename, misc);