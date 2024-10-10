const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);
if (config.arrowSkill) {
    skills.rows.forEach((row) => {
        if (row.skill === 'Multiple Shot' || row.skill === 'Strafe') {
            row.cltmissilea = 'guidedarrow';
            row.cltmissileb = 'guidedarrow';
        }
    });
}
if (config.diabloWall) {
    skills.rows.forEach((row) => {
        if (row.skill === 'DiabWall') {
            row.ItemCltEffect = 200;
        }
    });
}
D2RMM.writeTsv(skillsFileName, skills);
