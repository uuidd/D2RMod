const monstats2Filename = 'global\\excel\\monstats2.txt';
const monstats2File = D2RMM.readTsv(monstats2Filename);

function getEnabledMinions() {
  let minions = [];

  if (config.necroskeleton) {
    minions = [...minions, 'necroskeleton'];
  }

  if (config.necromage) {
    minions = [...minions, 'necromage'];
  }

  if (config.golems) {
    minions = [...minions, 'claygolem', 'bloodgolem', 'irongolem', 'firegolem'];
  }

  return minions;
}

const minions = getEnabledMinions();
monstats2File.rows.forEach(row => {
  if (minions.includes(row.Id)) {
    row.SizeX = 0;
    row.SizeY = 0;
  }
});

D2RMM.writeTsv(monstats2Filename, monstats2File);


const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);

// Param1Ĭ��ֵΪ750��25Ϊ1�룬���75025=30��
// 540 25=13500��9����

// ����ս�������ս��ָ�ӻ��س���ʱ��
skills.rows.forEach((row) => {
  if (row.charclass === 'bar') {
    if (row.skilldesc === 'battle orders' || row.skilldesc === 'battle command') {
      row.Param1 = config.Param1 * 25;
    }
  }
});

// �̿;�������ʱ��
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
D2RMM.writeTsv(skillsFileName, skills);
