const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);


function redPortal(description, levelId, input1, input2) {
  let recipe = {
    description: description + " portal",
    enabled: 1,
    version: 100,
    numinputs: 2,
    "input 1": input1,
    "input 2": input2,
    output: `"Red Portal,qty=${levelId}"`,
    'output b': input1,
    'output c': input2,
    "*eol\r": 0,
  }
  cubemain.rows.push(recipe);
}

// 牛场红门
if (config.easierCowPortal) redPortal("Moo Moo Farm", 39, "tbk", "ibk");

// 女伯爵房间
if (config.easierTowerCellar5) redPortal("Tower Cellar Level 5", 25, "ibk", "yps")

// 地穴第一層
if (config.easierPit1) redPortal("Pit Level 1", 12, "ibk", "yps");

// 安达利尔 安姐房间
if (config.easierCatacombs4) redPortal("Catacombs Level 4", 37, "tes", "ibk");

// 石制古墓
if (config.easierStonyTomb1) redPortal("Stony Tomb Level 1", 55, "tbk", "wms");

// 古代通道
if (config.easierAncientTunnels) redPortal("Ancient Tunnels", 65, "ibk", "wms");

// 督瑞尔
if (config.easierDuriel) redPortal("Duriel's Lair", 73, "tes", "tbk");

// 墨菲斯托 劳模房间
if (config.easierDurance) redPortal("Durance of Hate Level 3", 102, "ceh", "tbk");

// 混沌避难所 迪亚波罗 超市
if (config.easierChaos) redPortal("The Chaos Sanctuary", 108, "bet", "tbk");

// 尼拉塞克神殿A5尼拉塞克
if (config.easierVaught) redPortal("Halls of Vaught", 124, "tbk", "vps");

// 毀滅王座
if (config.easierThrone) redPortal("Throne of Destruction", 131, "fed", "tbk");


D2RMM.writeTsv(cubemainFilename, cubemain);