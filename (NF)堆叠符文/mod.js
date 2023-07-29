const SINGLE_ITEM_CODE = 'rune';
const STACK_ITEM_CODE = 'runs';

const ITEM_TYPES = [];
function converItemTypeToStackItemType(itemtype) {
  if (itemtype != null && ITEM_TYPES.indexOf(itemtype) !== -1) {
    return itemtype.replace(/^r/, 's');
  }
  return itemtype;
}

const miscFilenames = [];

const itemsFilename = 'hd\\items\\items.json';
const items = D2RMM.readJson(itemsFilename);
const newItems = [...items];
for (const index in items) {
  const item = items[index];
  for (const itemtype in item) {
    const asset = item[itemtype].asset;
    if (asset.startsWith(`${SINGLE_ITEM_CODE}/`) && !asset.endsWith('_stack')) {
      ITEM_TYPES.push(itemtype);
      const itemtypeStack = converItemTypeToStackItemType(itemtype);
      newItems.push({ [itemtypeStack]: { asset: `${asset}_stack` } });
      miscFilenames.push(asset.replace(`${SINGLE_ITEM_CODE}/`, ''));
    }
  }
}
D2RMM.writeJson(itemsFilename, newItems);

const miscDirFilename = `hd\\items\\misc\\${SINGLE_ITEM_CODE}\\`;
for (const index in miscFilenames) {
  const miscFilename = `${miscDirFilename + miscFilenames[index]}.json`;
  const miscStackFilename = `${
    miscDirFilename + miscFilenames[index]
  }_stack.json`;
  const miscStack = D2RMM.readJson(miscFilename);
  D2RMM.writeJson(miscStackFilename, miscStack);
}

const itemtypesFilename = 'global\\excel\\itemtypes.txt';
const itemtypes = D2RMM.readTsv(itemtypesFilename);
itemtypes.rows.forEach((itemtype) => {
  if (itemtype.Code === SINGLE_ITEM_CODE) {
    itemtypes.rows.push({
      ...itemtype,
      ItemType: `${itemtype.ItemType} Stack`,
      Code: STACK_ITEM_CODE,
      Equiv1: 'misc',
      AutoStack: 1,
    });
  }
});
D2RMM.writeTsv(itemtypesFilename, itemtypes);

if (config.default) {
  const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFilename);
  treasureclassex.rows.forEach((treasureclass) => {
    treasureclass.Item1 = converItemTypeToStackItemType(treasureclass.Item1);
    treasureclass.Item2 = converItemTypeToStackItemType(treasureclass.Item2);
  });
  D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
}

const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((item) => {
  if (ITEM_TYPES.indexOf(item.code) !== -1) {
    misc.rows.push({
      ...item,
      name: `${item.name} Stack`,
      compactsave: 0,
      type: STACK_ITEM_CODE,
      code: converItemTypeToStackItemType(item.code),
      stackable: 1,
      minstack: 1,
      maxstack: config.maxStack,
      spawnstack: 1,
      spelldesc: 2,
      spelldescstr: 'StackableRune',
      spelldesccolor: 0,
    });
    item.spawnable = 0;
  }
});
D2RMM.writeTsv(miscFilename, misc);

const itemModifiersFilename = 'local\\lng\\strings\\item-modifiers.json';
const itemModifiers = D2RMM.readJson(itemModifiersFilename);
itemModifiers.push({
  id: D2RMM.getNextStringID(),
  Key: 'StackableRune',
  enUS: 'Can be transmuted into a usable rune',
  zhTW: '可以轉化為可用的符文',
  deDE: 'Kann in eine nutzbare Rune umgewandelt werden',
  esES: 'Se puede transmutar en una runa utilizable',
  frFR: 'Peut être transmuté en une rune utilisable',
  itIT: 'Può essere trasmutato in una runa utilizzabile',
  koKR: '사용 가능한 룬으로 변환할 수 있습니다',
  plPL: 'Może zostać przemieniony w użyteczną runę',
  esMX: 'Se puede transmutar en una runa utilizable',
  jaJP: '使用可能なルーンに変換できます',
  ptBR: 'Pode ser transmutado em uma runa utilizável',
  ruRU: 'Может быть преобразован в полезную руну',
  zhCN: '可以转化为可用的符文',
});
D2RMM.writeJson(itemModifiersFilename, itemModifiers);

const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);
for (let i = 0; i < ITEM_TYPES.length; i = i + 1) {
  const itemtype = ITEM_TYPES[i];
  const stacktype = converItemTypeToStackItemType(itemtype);
  // 从单个转换为堆栈
  cubemain.rows.push({
    description: `${itemtype} -> ${stacktype}`,
    enabled: 1,
    version: 100,
    numinputs: 1,
    'input 1': itemtype,
    output: stacktype,
    '*eol': 0,
  });
  // 从堆栈转换为单个
  cubemain.rows.push({
    description: `${stacktype} -> ${itemtype}`,
    enabled: 1,
    version: 100,
    op: 18, // 跳过配方，如果项目 Stat.Accr(param) != value
    param: 70, // quantity (itemstatcost.txt)
    value: 1, // 仅在以下情况下执行规则 quantity == 1
    numinputs: 1,
    'input 1': stacktype,
    output: itemtype,
    '*eol': 0,
  });
}

// 这是在配置选项后面，因为它有很多食谱。。。
if (config.convertWhenDestacking) {
  for (let i = 0; i < ITEM_TYPES.length; i = i + 1) {
    const itemtype = ITEM_TYPES[i];
    const stacktype = converItemTypeToStackItemType(itemtype);
    for (let j = 2; j <= config.maxStack; j = j + 1) {
      cubemain.rows.push({
        description: `Stack of ${j} ${itemtype} -> Stack of ${
          j - 1
        } and Stack of 1`,
        enabled: 1,
        version: 0,
        op: 18, // 跳过配方，如果项目 Stat.Accr(param) != value
        param: 70, // quantity (itemstatcost.txt)
        value: j, // 仅在以下情况下执行规则 quantity == j
        numinputs: 1,
        'input 1': stacktype,
        output: `"${stacktype},qty=${j - 1}"`,
        'output b': `"${itemtype},qty=1"`,
        '*eol': 0,
      });
    }
  }
}
// 如果另一个mod已经添加了卸载，请不要再添加
else if (
  cubemain.rows.find(
    (row) => row.description === 'Stack of 2 -> Stack of 1 and Stack of 1'
  ) == null
) {
  for (let i = 2; i <= config.maxStack; i = i + 1) {
    cubemain.rows.push({
      description: `Stack of ${i} -> Stack of ${i - 1} and Stack of 1`,
      enabled: 1,
      version: 0,
      op: 18, // 跳过配方，如果项目 Stat.Accr(param) != value
      param: 70, // quantity (itemstatcost.txt)
      value: i, // 仅在以下情况下执行规则 quantity == i
      numinputs: 1,
      'input 1': 'misc',
      output: `"usetype,qty=${i - 1}"`,
      'output b': `"usetype,qty=1"`,
      '*eol': 0,
    });
  }
}
D2RMM.writeTsv(cubemainFilename, cubemain);

//D2R默认情况下将符文颜色设置为橙色，但似乎是基于物品类型
//而不是本地化字符串，因此它不适用于堆叠版本
//我们在这里更新本地化文件以手动为符文的名称上色
//以便它也适用于符文的堆叠版本
// const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
// const itemRunes = D2RMM.readJson(itemRunesFilename);
// itemRunes.forEach((item) => {
//   const itemtype = item["Key"];
//   if (itemtype.match(/^r[0-9]{2}$/) !== null) {
//     // 更新所有本地化
//     for (const key in item) {
//       if (key !== 'id' && key !== 'Key') {
//         // no idea what this is, but color codes before [fs] don't work
//         const [, prefix = '', value] = item[key].match(/^(\[fs\])?(.*)$/);
//         item[key] = `${prefix}ÿc8${value}`;
//       }
//     }
//   }
// });
// D2RMM.writeJson(itemRunesFilename, itemRunes);

if (config.usenewsprites) {
  D2RMM.copyFile(
    'named\\hd', // <mod folder>\hd
    'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
    true // overwrite any conflicts
  );
} else {
  D2RMM.copyFile(
    'classic\\hd', // <mod folder>\hd
    'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
    true // overwrite any conflicts
  );
}
