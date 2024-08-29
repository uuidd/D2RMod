const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);
skills.rows.forEach((row) => {
	if (row.charclass !== '') {
		if (row.localdelay !== '') {
			row.localdelay = '';
		}
	}
});
D2RMM.writeTsv(skillsFileName, skills);
