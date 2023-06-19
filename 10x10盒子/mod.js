const inventoryFilename = 'global\\excel\\inventory.txt';
const inventory = D2RMM.readTsv(inventoryFilename);
inventory.rows.forEach((row) => {
  if (
    row.class === 'Transmogrify Box Page 1' ||
    row.class === 'Transmogrify Box2'
  ) {
    row.gridX = 10;
    row.gridY = 10;
  }
});
D2RMM.writeTsv(inventoryFilename, inventory);

const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
const profileHD = D2RMM.readJson(profileHDFilename);
D2RMM.writeJson(profileHDFilename, profileHD);

const profileLVFilename = 'global\\ui\\layouts\\_profilelv.json';
const profileLV = D2RMM.readJson(profileLVFilename);
D2RMM.writeJson(profileLVFilename, profileLV);

const horadricCubeLayoutHDFilename =
  'global\\ui\\layouts\\horadriccubelayouthd.json';
const horadricCubeHDLayout = D2RMM.readJson(horadricCubeLayoutHDFilename);
horadricCubeHDLayout.children.forEach((child) => {
  if (child.name === 'grid') {
    child.fields.cellCount.x = 10;
    child.fields.cellCount.y = 10;
    child.fields.rect.x = 91;
    child.fields.rect.y = 303;
  }
  if (child.name === 'convert') {
    child.fields.rect.x = 523;
    child.fields.rect.y = 1313;
  }
  if (child.name === 'background') {
    child.fields.filename = 'PANEL\\Horadric_Cube\\HoradricCube_BG_Expanded';
  }
});
D2RMM.writeJson(horadricCubeLayoutHDFilename, horadricCubeHDLayout);

const controllerHoradricCubeHDLayoutFilename =
  'global\\ui\\layouts\\controller\\horadriccubelayouthd.json';
const controllerHoradricCubeHDLayout = D2RMM.readJson(
  controllerHoradricCubeHDLayoutFilename
);
controllerHoradricCubeHDLayout.children.forEach((child) => {
  if (child.name === 'grid') {
    child.fields.rect.x = 160;
    child.fields.rect.y = 217;
  }
  if (child.name === 'convert') {
    child.fields.rect.x = 593;
    child.fields.rect.y = 1257;
  }
  if (child.name === 'background') {
    child.fields.filename =
      'Controller/Panel/HoradricCube/V2/HoradricCubeBG_Expanded';
  }
});
D2RMM.writeJson(
  controllerHoradricCubeHDLayoutFilename,
  controllerHoradricCubeHDLayout
);

D2RMM.copyFile(
  'hd', // <mod folder>\hd
  'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
  true // overwrite any conflicts
);
