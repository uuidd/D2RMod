const prefixFilename = 'global\\excel\\magicprefix.txt';
const suffixFilename = 'global\\excel\\magicsuffix.txt';
const prefix = D2RMM.readTsv(prefixFilename);
const suffix = D2RMM.readTsv(suffixFilename);
const itemtypes = ['armo','weap','staf','wand','shld','glov','boot','scep','h2h','rod','tors','helm','miss','mele','circ','orb','belt','hamm','knif','club','swor','ashd','mace','head','axe','phlm','tkni','pelt','jave','thro','miss','pole','spea','blun'];


prefix.rows.forEach((row) => {
  const prefixColumns = ['itype1', 'itype2', 'itype3', 'itype4', 'itype5', 'itype6', 'itype7', 'etype1', 'etype2', 'etype3', 'etype4', 'etype5'];
  const matchingPrefixes = [];

  prefixColumns.forEach((col) => {
    if (itemtypes.includes(row[col])) {
      matchingPrefixes.push(row[col]);
      row[col] = ''; // Remove the matching itemtype string
    }
  });
});

suffix.rows.forEach((row) => {
  const suffixColumns = ['itype1', 'itype2', 'itype3', 'itype4', 'itype5', 'itype6', 'itype7', 'etype1', 'etype2', 'etype3', 'etype4', 'etype5'];
  const matchingSuffixes = [];

  suffixColumns.forEach((col) => {
    if (itemtypes.includes(row[col])) {
      matchingSuffixes.push(row[col]);
      row[col] = ''; // Remove the matching itemtype string
    }
  });
});

D2RMM.writeTsv(prefixFilename, prefix);
D2RMM.writeTsv(suffixFilename, suffix);