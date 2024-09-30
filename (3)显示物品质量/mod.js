const weaponsFilePath = 'global\\excel\\weapons.txt';
const weapons = D2RMM.readTsv(weaponsFilePath);

const armorsFilePath = 'global\\excel\\armor.txt';
const armors = D2RMM.readTsv(armorsFilePath);

const weaponsWithRank = weapons.rows.filter(row => row.ubercode && row.ultracode);
const armorsWithRank = armors.rows.filter(row => row.ubercode && row.ultracode);

const itemNamesFilePath = 'local\\lng\\strings\\item-names.json'
const itemNames = D2RMM.readJson(itemNamesFilePath);

function processNone(color){
  if(color === "none") return "";
  else return color;
}

// const langs = ['enUS', 'zhTW', 'deDE', 'esES', 'frFR', 'itIT', 'koKR', 'plPL', 'esMX', 'jaJP', 'ptBR', 'ruRU', 'zhCN']
const langs = ['zhTW','zhCN']

weaponsWithRank.forEach((row) =>{
  const key = row.code;
  let rankStr = " " + processNone(config.normalItemColor) + "|普"
  if(key === row.ubercode) rankStr = " " + processNone(config.exceptionalItemColor) + "|扩"
  if(key === row.ultracode) rankStr = " " + processNone(config.eliteItemColor) + "|精"

  const targetIndex = itemNames.findIndex((itemNameObj) => itemNameObj.Key === key);

  if(targetIndex >= 0){
    langs.forEach((lang) => {
      itemNames[targetIndex][lang] = itemNames[targetIndex][lang] + rankStr
    })
  }
})

armorsWithRank.forEach((row) =>{
  const key = row.code;
  let rankStr = " " + processNone(config.normalItemColor) + "|普"
  if(key === row.ubercode) rankStr = " " + processNone(config.exceptionalItemColor) + "|扩"
  if(key === row.ultracode) rankStr = " " + processNone(config.eliteItemColor) + "|精"

  const targetIndex = itemNames.findIndex((itemNameObj) => itemNameObj.Key === key);

  if(targetIndex >= 0){
    langs.forEach((lang) => {
      itemNames[targetIndex][lang] = itemNames[targetIndex][lang] + rankStr
    })
  }
})

D2RMM.writeJson(itemNamesFilePath, itemNames);

