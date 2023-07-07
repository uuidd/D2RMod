const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.push({
	...misc.rows.find((row) => row.name === 'Small Charm'),
	name: 'Charm of Teleport',
	level: 1,
	code: 'cm9',
	unique: 1,
	cost: 0,
	'gamble cost': 0,
	GheedMin: 1,
	GheedMax: 1,
	GheedMagicMin: 1,
	GheedMagicMax: 1,
	GheedMagicLevel: 255,
	PermStoreItem: 1,
	multibuy: 1,
	NightmareUpgrade: 'xxx',
	HellUpgrade: 'xxx',
});
D2RMM.writeTsv(miscFilename, misc);

const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
uniqueitems.rows.push({
	...uniqueitems.rows.find((row) => row.index === 'Annihilus'),
	index: 'Charm of Teleport',
	'*ID': Math.max(...uniqueitems.rows.map((row) => row['*ID'])) + 1,
	lvl: 1,
	'lvl req': config.lvlreq,
	code: 'cm9',
	'cost mult': 1,
	'cost add': 1,
	prop1: 'oskill',
	par1: 'Teleport',
	min1: 1,
	max1: 1,
	prop2: null,
	par2: null,
	min2: null,
	max2: null,
	prop3: null,
	par3: null,
	min3: null,
	max3: null,
	prop4: null,
	par4: null,
	min4: null,
	max4: null,
	'*eol\r': 0,
});
D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

const itemsFilename = 'hd\\items\\items.json';
const items = D2RMM.readJson(itemsFilename);
items.push({
	cm9: { asset: 'charm/charm_small' },
});
D2RMM.writeJson(itemsFilename, items);

const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);
itemNames.push({
	id: D2RMM.getNextStringID(),
	Key: 'Charm of Teleport',
	enUS: 'Charm of Teleport',
	zhTW: '傳送小型咒符',
	deDE: 'Charm of Teleport',
	esES: 'Charm of Teleport',
	frFR: 'Charm of Teleport',
	itIT: 'Charm of Teleport',
	koKR: 'Charm of Teleport',
	plPL: 'Charm of Teleport',
	esMX: 'Charm of Teleport',
	jaJP: 'Charm of Teleport',
	ptBR: 'Charm of Teleport',
	ruRU: 'Charm of Teleport',
	zhCN: '传送小型神符',
});
D2RMM.writeJson(itemNamesFilename, itemNames);
