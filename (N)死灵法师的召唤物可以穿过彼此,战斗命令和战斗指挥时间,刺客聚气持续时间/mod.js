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
