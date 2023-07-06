const charstatsFilename = "global\\excel\\charstats.txt";
const charstats = D2RMM.readTsv(charstatsFilename);

charstats.rows.forEach((row) => {
  if (row["StatPerLevel"] !== "") {
    row["StatPerLevel"] = config.statPoints;
  }

  if (row["SkillsPerLevel"] !== "") {
    row["SkillsPerLevel"] = config.skillPoints;

    return false;
  }
});

D2RMM.writeTsv(charstatsFilename, charstats);
