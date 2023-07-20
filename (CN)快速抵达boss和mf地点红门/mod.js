const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);


function redPortal(description, levelId, input1, num, input2) {
  let numInputs = 0;
  if (input2 === undefined) {
    input2 = input1;
    numInputs -= 1;
  }
  let recipe = {
    description: "Easier " + description,
    enabled: 1,
    version: 100,
    numinputs: numInputs + num + 2,
    "input 1": `"${input1},qty=${num}"`,
    "input 2": "tbk",
    output: `"Red Portal,qty=${levelId}"`,
    'output b': 'tbk',
    'output c': input2,
    "*eol\r": 0,
  }
  if (input2 !== input1) {
    recipe = {...recipe, "input 3": input2};
  }

  cubemain.rows.push(recipe);
}

let act1, act2, act3, act4, act5

if (config.plot) { // 剧情模式
  act1 = "tes"
  act2 = "tes"
  act3 = "ceh"
  act4 = "bet"
  act5 = "fed"
} else {
  act1 = "yps"
  act2 = "wms"
  act3 = "vps"
  act4 = "tsc"
  act5 = "isc"
}
// 牛场红门
if (config.easierCowPortal) redPortal("Moo Moo Farm", 39, "ibk", 1);

// 女伯爵房间
if (config.easierTowerCellar5) redPortal("Tower Cellar Level 5", 25, "hpot", 1, "yps")

// 地穴第一層
if (config.easierPit1) redPortal("Pit Level 1", 12, "mpot", 1, "yps");

// 安达利尔 安姐房间
if (config.easierCatacombs4) redPortal("Catacombs Level 4", 37, "hpot", 2, act1);

// 石制古墓
if (config.easierStonyTomb1) redPortal("Stony Tomb Level 1", 55, "hpot", 1, "wms");

// 古代通道
if (config.easierAncientTunnels) redPortal("Ancient Tunnels", 65, "mpot", 1, "wms");

// 督瑞尔
if (config.easierDuriel) redPortal("Duriel's Lair", 73, "mpot", 2, act2);

// 墨菲斯托 劳模房间
if (config.easierDurance) redPortal("Durance of Hate Level 3", 102, "hpot", 1, act3);

// 混沌避难所 迪亚波罗 超市
if (config.easierChaos) redPortal("The Chaos Sanctuary", 108, "hpot", 1, act4);

// 尼拉塞克的神殿 皮叔
if (config.easierNihlathak) redPortal("Nihlathak's Temple", 121, "hpot", 1, "isc");

// 毀滅王座
if (config.easierThrone) redPortal("Throne of Destruction", 131, "mpot", 1, act5);


D2RMM.writeTsv(cubemainFilename, cubemain);