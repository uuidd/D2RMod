const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);

//bellow are default damage values
const def = {
'holyfire'	: {	EMin:2,EMinLev1:1,EMinLev2:4,EMinLev3:6,EMinLev4:7,EMinLev5:8,EMax:6,	EMaxLev1:2,EMaxLev2:5,EMaxLev3:7,	EMaxLev4:8,	EMaxLev5:9},
'holywind'	: {	EMin:2,EMinLev1:1,EMinLev2:2,EMinLev3:3,EMinLev4:4,EMinLev5:5,EMax:3,	EMaxLev1:1,EMaxLev2:2,EMaxLev3:3,	EMaxLev4:4,	EMaxLev5:5},
'holyshock'	: {	EMin:1,EMinLev1:0,EMinLev2:0,EMinLev3:0,EMinLev4:0,EMinLev5:0,EMax:10,	EMaxLev1:6,EMaxLev2:8,EMaxLev3:10,	EMaxLev4:12,EMaxLev5:15},
};
const dr = config.perdelay / config.basedmgfix;

skills.rows.forEach((line) => {
	if (line.charclass === 'pal') {
		if (line.perdelay !== '') {
			line.perdelay = config.perdelay;
			if((config.damagefix) &&
				((line.aurastate === 'holyfire') || (line.aurastate === 'holywind') || (line.aurastate === 'holyshock'))){
				la=line.aurastate;
				line.EMin = Math.ceil(def[la].EMin * dr) ;line.EMinLev1 = Math.ceil(def[la].EMinLev1 * dr) ;line.EMinLev2 = Math.ceil(def[la].EMinLev2 * dr) ;
				line.EMinLev3 = Math.ceil(def[la].EMinLev3 * dr) ;line.EMinLev4 = Math.ceil(def[la].EMinLev4 * dr) ;line.EMinLev5 = Math.ceil(def[la].EMinLev5 * dr) ;
				line.EMax = Math.ceil(def[la].EMax * dr) ;line.EMaxLev1 = Math.ceil(def[la].EMaxLev1 * dr) ;line.EMaxLev2 = Math.ceil(def[la].EMaxLev2 * dr) ;
				line.EMaxLev3 = Math.ceil(def[la].EMaxLev3 * dr) ;line.EMaxLev4 = Math.ceil(def[la].EMaxLev4 * dr) ;line.EMaxLev5 = Math.ceil(def[la].EMaxLev5 * dr) ;
			}
		}
	}
});

D2RMM.writeTsv(skillsFileName, skills);
