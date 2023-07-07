const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFileName);
skills.rows.forEach((row) => {
  if (row.maxlvl !== '') {
    row.maxlvl = config.maxlvl;
  }
});
D2RMM.writeTsv(skillsFileName, skills);
