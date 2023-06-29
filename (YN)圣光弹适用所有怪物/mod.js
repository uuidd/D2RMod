const skillsFileName = "global\\excel\\skills.txt";
const skills = D2RMM.readTsv(skillsFileName);

const missilesFileName = "global\\excel\\missiles.txt";
const missiles = D2RMM.readTsv(missilesFileName);

skills.rows.forEach((row) => {
	if(['Holy Bolt'].indexOf(row['skill']) !== -1 || ['Fist of the Heavens'].indexOf(row['skill']) !== -1) {
		row.aurafilter = '42371';
	}
});

missiles.rows.forEach((row) => {
	if(['holybolt'].indexOf(row['Missile']) !== -1) {
		row.Holy = '';
		row.sHitPar2 = '';
		row.cHitPar2 = '';
		row.pCltHitFunc = '';
		row.pSrvHitFunc = '';
		row.CollideKill = '1';
		row.LastCollide = '1';
		row.ClientCol = '1';
	} else if(['fistoftheheavensbolt'].indexOf(row['Missile']) !== -1) {
		row.sHitPar2 = '';
		row.cHitPar2 = '';
		row.pCltHitFunc = '';
		row.pSrvHitFunc = '';
		row.CollideKill = '1';
		row.LastCollide = '1';
		row.ClientCol = '1';
	}
});

// Save changes
D2RMM.writeTsv(skillsFileName, skills);
D2RMM.writeTsv(missilesFileName, missiles);