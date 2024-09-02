const ctUISwitcherHDFilename = 'global\\ui\\layouts\\controller\\uiswitcherhd.json';
const ctUISwitcher = D2RMM.readJson(ctUISwitcherHDFilename);
const ctPauseLayoutHDFilename = 'global\\ui\\layouts\\controller\\pauselayouthd.json';
const ctPauseLayoutHD = D2RMM.readJson(ctPauseLayoutHDFilename);

let panel = ctUISwitcher.fields.panels
panel.pop(); // delete pause [选项]
panel.splice(4, 0, "pause");  // add

// for (let button in ctPauseLayoutHD.children) {
//   // 调换二者位置
//   if (button.name === "Help") {
//     button.fields.rect.y = 878;
//   }
//
//   if (button.name === "Exit") {
//     button.fields.rect.y = 728;
//   }
// }
ctPauseLayoutHD.children[3].fields.rect.y = 878;
ctPauseLayoutHD.children[4].fields.rect.y = 728;

D2RMM.writeJson(ctUISwitcherHDFilename, ctUISwitcher);
D2RMM.writeJson(ctPauseLayoutHDFilename, ctPauseLayoutHD);