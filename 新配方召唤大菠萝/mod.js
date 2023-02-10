// misc.txt - アイテム
const miscFileName = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFileName);

misc.rows.push({
  'name': 'Stone of Terror',
  'compactsave': 1,
  'version': 100,
  'level': 0,
  'ShowLevel': 0,
  'levelreq': 0,
  'rarity': 999,
  'spawnable': 0,
  'speed': 0,
  'nodurability': 1,
  'cost': 2000,
  'code': 'sot',
  'alternategfx': 'scr',
  'namestr': 'sot',
  'component': 16,
  'invwidth': 1,
  'invheight': 1,
  'hasinv': 0,
  'gemsockets': 0,
  'gemapplytype': 0,
  'flippyfile': 'flpmss',
  'invfile': 'invmss',
  'Transmogrify': 0,
  'TMogType': 'xxx',
  'useable': 0,
  'type': 'key',
  'dropsound': 'item_gem',
  'dropsfxframe': 12,
  'usesound': 'item_gem',
  'unique': 1,
  'transparent': 0,
  'transtbl': 5,
  'lightradius': 0,
  'belt': 0,
  'autobelt': 0,
  'stackable': 0,
  'minstack': 0,
  'maxstack': 0,
  'spawnstack': 0,
  'missiletype': 0,
  'spellicon': -1,
  'pSpell': -1,
  'durwarning': 0,
  'qntwarning': 0,
  'gemoffset': 0,
  'BetterGem': 'non',
  'bitfield1': 0,
  'CharsiMagicLvl': 255,
  'GheedMagicLvl': 255,
  'AkaraMagicLvl': 255,
  'FaraMagicLvl': 255,
  'LysanderMagicLvl': 255,
  'DrognanMagicLvl': 255,
  'HratliMagicLvl': 255,
  'AlkorMagicLvl': 255,
  'OrmusMagicLvl': 255,
  'ElzixMagicLvl': 255,
  'AshearaMagicLvl': 255,
  'CainMagicLvl': 255,
  'HalbuMagicLvl': 255,
  'MalahMagicLvl': 255,
  'LarzukMagicLvl': 255,
  'AnyaMagicLvl': 255,
  'JamellaMagicLvl': 255,
  'Transform': 0,
  'InvTrans': 0,
  'SkipName': 0,
  'NightmareUpgrade': 'xxx',
  'HellUpgrade': 'xxx',
  'diablocloneweight\r': 1
});

misc.rows = misc.rows.filter((row) => row.name !== 'Standard of Heroes')
misc.rows.push({
  'name': 'Standard of Heroes',
  'compactsave': 1,
  'version': 100,
  'level': 90,
  'ShowLevel': 0,
  'levelreq': 90,
  'rarity': 4,
  'spawnable': 1,
  'speed': 0,
  'nodurability': 1,
  'cost': 2000,
  'code': 'std',
  'alternategfx': 'flg',
  'namestr': 'std',
  'component': 16,
  'invwidth': 1,
  'invheight': 1,
  'hasinv': 0,
  'gemsockets': 0,
  'gemapplytype': 0,
  'flippyfile': 'flpflag',
  'invfile': 'invflag',
  'Transmogrify': 0,
  'TMogType': 'xxx',
  'useable': 0,
  'type': 'key',
  'dropsound': 'item_charm',
  'dropsfxframe': 12,
  'usesound': 'item_charm',
  'unique': 1,
  'transparent': 0,
  'transtbl': 5,
  'lightradius': 0,
  'belt': 0,
  'autobelt': 0,
  'stackable': 0,
  'minstack': 0,
  'maxstack': 0,
  'spawnstack': 0,
  'missiletype': 0,
  'spellicon': -1,
  'pSpell': -1,
  'durwarning': 0,
  'qntwarning': 0,
  'gemoffset': 0,
  'BetterGem': 'non',
  'bitfield1': 0,
  'CharsiMagicLvl': 255,
  'GheedMagicLvl': 255,
  'AkaraMagicLvl': 255,
  'FaraMagicLvl': 255,
  'LysanderMagicLvl': 255,
  'DrognanMagicLvl': 255,
  'HratliMagicLvl': 255,
  'AlkorMagicLvl': 255,
  'OrmusMagicLvl': 255,
  'ElzixMagicLvl': 255,
  'AshearaMagicLvl': 255,
  'CainMagicLvl': 255,
  'HalbuMagicLvl': 255,
  'MalahMagicLvl': 255,
  'LarzukMagicLvl': 255,
  'AnyaMagicLvl': 255,
  'JamellaMagicLvl': 255,
  'Transform': 0,
  'InvTrans': 0,
  'SkipName': 0,
  'NightmareUpgrade': 'xxx',
  'HellUpgrade': 'xxx',
  'diablocloneweight\r': 1
});

D2RMM.writeTsv(miscFileName, misc);

// items.json - アセット
const itemsFilename = 'hd\\items\\items.json';
const items = D2RMM.readJson(itemsFilename);

items.push({ "sot": { "asset": "quest/mephisto_soul_stone" } });
D2RMM.writeJson(itemsFilename, items);

// cubemain.txt - レシピ
const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);

cubemain.rows.push({
  description:
    "1 Magic Ring + 1 Twisted Essence of Suffering + 1 Charged Essence of Hatred + 1 Burning Essence of Terror + 1 Festering Essence of Destruction -> Stone of Terror",
  enabled: 1,
  version: 0,
  numinputs: 5,
  "input 1": "rin,mag",
  "input 2": "tes",
  "input 3": "ceh",
  "input 4": "bet",
  "input 5": "fed",
  output: "sot",
  "*eol": 0,
});
D2RMM.writeTsv(cubemainFilename, cubemain);

// item-names.json - アイテム名
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

itemNames.push(
  {
    "id": 60001,
    "Key": "sot",
    "enUS": "Stone of Terror",
    "zhTW": "Stone of Terror",
    "deDE": "Stone of Terror",
    "esES": "Stone of Terror",
    "frFR": "Stone of Terror",
    "itIT": "Stone of Terror",
    "koKR": "Stone of Terror",
    "plPL": "Stone of Terror",
    "esMX": "Stone of Terror",
    "jaJP": "恐怖の石",
    "ptBR": "Stone of Terror",
    "ruRU": "Stone of Terror",
    "zhCN": "Stone of Terror"
  }
);

D2RMM.writeJson(itemNamesFilename, itemNames);
