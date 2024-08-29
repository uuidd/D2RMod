// Character selection panel is in characterselectpanelhd.json
// but can't disable anything in there without affecting singleplayer
// and the tab control's enabled/disabled state is controlled by code
// not by ui config
const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
const profileHD = D2RMM.readJson(profileHDFilename);
profileHD.StyleSettingsNumericSlider = {
  ...profileHD.StyleSettingsNumeric,
  alignment: {
    ...profileHD.StyleSettingsNumeric.alignment,
    h: 'right',
  },
};
profileHD.SettingsSliderValueFields.style = '$StyleSettingsNumericSlider';
D2RMM.writeJson(profileHDFilename, profileHD);