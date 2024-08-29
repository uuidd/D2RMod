const pauseLayoutFilename = 'global\\ui\\layouts\\pauselayout.json';
const pauseLayoutHDFilename = 'global\\ui\\layouts\\pauselayouthd.json';
let pauseLayout = D2RMM.readJson(pauseLayoutFilename);
let pauseLayoutHD = D2RMM.readJson(pauseLayoutHDFilename);

// HD
pauseLayoutHD.children[3].children[0].children[0].fields.acceptsReturnKey = false;
// 关闭鼠标默认聚焦位置
pauseLayoutHD.children[3].children[0].children[0].fields.focusOnMouseOver = false;
pauseLayoutHD.children[3].children[1].children[0].fields.focusOnMouseOver = false;
// 开启随时按ESC键都生效功能
pauseLayoutHD.children[3].children[1].children[0].fields.acceptsEscKeyEverywhere = true;
// pauseLayoutHD.children[4].fields.filename= "PauseMenu\\descriptor-18";


// 怀旧
pauseLayout.children[3].children[0].children[0].fields.acceptsReturnKey = false;
// 关闭鼠标默认聚焦位置
pauseLayout.children[3].children[0].children[0].fields.focusOnMouseOver = false;
pauseLayoutHD.children[3].children[1].children[0].fields.focusOnMouseOver = false;
// 开启随时按ESC键都生效功能
pauseLayoutHD.children[3].children[1].children[0].fields.acceptsEscKeyEverywhere = true;

D2RMM.writeJson(pauseLayoutFilename, pauseLayout);
D2RMM.writeJson(pauseLayoutHDFilename, pauseLayoutHD);