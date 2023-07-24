const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
let profileHD = D2RMM.readJson(profileHDFilename);
profileHD.QuestLogScrollingSpeechParentRect.x = 158;
profileHD.QuestLogScrollingSpeechParentRect.width = 850;
profileHD["ModsScrollingTextWidth"] = 850;
profileHD["ModsScrollControllerHeight"] = 332;

profileHD["FontColorSocketedColor"] = {"r": 255, "g": 187, "b": 255, "a": 255};
profileHD["FontColorEtherealColor"] = {"r": 136, "g": 206, "b": 255, "a": 255};
profileHD["XSmallFontSize"] = 21;
profileHD["ModTableRowHeight"] = 60;
profileHD["ModsMediumPanelFontSizeModsMediumPanelFontSize"] = "$SmallFontSize";
profileHD["ModsScrollingTextFontSize"] = 28;
profileHD.StyleNotification["spacing"] = {"leading": 1.5};

profileHD.TooltipStyle.inGameTargetPadding = [0, 0, 0, 0];
profileHD.SkillHotkeyTextStyle.alignment.h = "center";
profileHD.SkillHotkeyTextStyle["options"] = {"hideOverflow": true};
profileHD.SkillQuantityTextStyle["options"] = {"hideOverflow": true};
profileHD.AccountLinkingActiveUserRect.y = 0;
profileHD.TutorialTooltipConsoleSoloRect.x = 275;
profileHD["TutorialTooltipConsoleMultiRect"] = {"x": -1375, "y": 451, "width": 900, "height": 800};
profileHD["StandardToolTipStyle"] = {"fontStyle": {"options": {"newlineHandling": "standard"}}};
profileHD["MonstersinfoToolTipStyle"] = {
  "fontStyle": {
    "alignment": {
      "h": "left",
      "v": "center"
    },
    "options": {
      "newlineHandling": "standard"
    }
  }
}

profileHD["RuneWordFirstRuneRect"] = {"x": 66, "y": -5, "scale": 0.8};
profileHD["RuneWordSecondRuneRect"] = {"x": 136, "y": -5, "scale": 0.8};
profileHD["RuneWordThirdRuneRect"] = {"x": 206, "y": -5, "scale": 0.8};
profileHD["RuneWordForthRuneRect"] = {"x": 276, "y": -5, "scale": 0.8};
profileHD["RuneWordFifthRuneRect"] = {"x": 346, "y": -5, "scale": 0.8};
profileHD["RuneWordSixRuneRect"] = {"x": 416, "y": -5, "scale": 0.8};
profileHD["RuneWordRunesWidgetRect"] = {"x": 250, "y": 0, "scale": 0.8};
profileHD["RuneWordNameWidgetRect"] = {"x": 0, "y": 0, "scale": 0.95, "width": 320, "height": 70};
profileHD["RuneWordTextBoxWidgetStyle"] = {
  "pointSize": "$XMediumLargeFontSize",
  "alignment": {"h": "left", "v": "center"},
  "options": {"pipeCharacterBehavior": "handle"}
};
profileHD["RuneUpWidgetRect"] = {"x": 0, "y": 0, "scale": 0.8};
profileHD["EqualTextBoxWidgetStyle"] = {
  "pointSize": "$MediumLargeFontSize",
  "alignment": {
    "h": "center",
    "v": "center"
  },
  "options": {
    "pipeCharacterBehavior": "handle"
  },
  "fontColor": "$FontColorGoldYellow",
  "dropShadow": {
    "shadowColor": "$FontColorGoldYellow",
    "offset": {
      "x": 3,
      "y": 3
    }
  }
}
profileHD["RuneUpEqualTextBoxWidgetRect"] = {"x": 75, "y": 30, "scale": 0.8}
profileHD["RuneUpFirstItemRect"] = {"x": 85, "y": 0, "scale": 0.8};
profileHD["RuneUpSecondItemRect"] = {"x": 155, "y": 0, "scale": 0.8};
profileHD["RuneUpThirdItemRect"] = {"x": 225, "y": 0, "scale": 0.8};
profileHD["RuneUpForthItemRect"] = {"x": 295, "y": 0, "scale": 0.8};
const jgmod = {
  "FileRune1": "items\\misc\\rune\\El_rune",
  "TooltipRune1": "@colorchengse@r01@jghelp50601rune01tooltip",
  "FileRune2": "items\\misc\\rune\\Eld_rune",
  "TooltipRune2": "@colorchengse@r02@jghelp50602rune02tooltip",
  "FileRune3": "items\\misc\\rune\\Tir_rune",
  "TooltipRune3": "@colorchengse@r03@jghelp50603rune03tooltip",
  "FileRune4": "items\\misc\\rune\\Nef_rune",
  "TooltipRune4": "@colorchengse@r04@jghelp50604rune04tooltip",
  "FileRune5": "items\\misc\\rune\\Eth_rune",
  "TooltipRune5": "@colorchengse@r05@jghelp50605rune05tooltip",
  "FileRune6": "items\\misc\\rune\\Ith_rune",
  "TooltipRune6": "@colorchengse@r06@jghelp50606rune06tooltip",
  "FileRune7": "items\\misc\\rune\\Tal_rune",
  "TooltipRune7": "@colorchengse@r07@jghelp50607rune07tooltip",
  "FileRune8": "items\\misc\\rune\\Ral_rune",
  "TooltipRune8": "@colorchengse@r08@jghelp50608rune08tooltip",
  "FileRune9": "items\\misc\\rune\\Ort_rune",
  "TooltipRune9": "@colorchengse@r09@jghelp50609rune09tooltip",
  "FileRune10": "items\\misc\\rune\\Thul_rune",
  "TooltipRune10": "@colorchengse@r10@jghelp50610rune10tooltip",
  "FileRune11": "items\\misc\\rune\\Amn_rune",
  "TooltipRune11": "@colorchengse@r11@jghelp50611rune11tooltip",
  "FileRune12": "items\\misc\\rune\\Sol_rune",
  "TooltipRune12": "@colorchengse@r12@jghelp50612rune12tooltip",
  "FileRune13": "items\\misc\\rune\\Shael_rune",
  "TooltipRune13": "@colorchengse@r13@jghelp50613rune13tooltip",
  "FileRune14": "items\\misc\\rune\\Dol_rune",
  "TooltipRune14": "@colorchengse@r14@jghelp50614rune14tooltip",
  "FileRune15": "items\\misc\\rune\\Hel_rune",
  "TooltipRune15": "@colorchengse@r15@jghelp50615rune15tooltip",
  "FileRune16": "items\\misc\\rune\\Io_rune",
  "TooltipRune16": "@colorchengse@r16@jghelp50616rune16tooltip",
  "FileRune17": "items\\misc\\rune\\Lum_rune",
  "TooltipRune17": "@colorchengse@r17@jghelp50617rune17tooltip",
  "FileRune18": "items\\misc\\rune\\Ko_rune",
  "TooltipRune18": "@colorchengse@r18@jghelp50618rune18tooltip",
  "FileRune19": "items\\misc\\rune\\Fal_rune",
  "TooltipRune19": "@colorchengse@r19@jghelp50619rune19tooltip",
  "FileRune20": "items\\misc\\rune\\Lem_rune",
  "TooltipRune20": "@colorchengse@r20@jghelp50620rune20tooltip",
  "FileRune21": "items\\misc\\rune\\Pul_rune",
  "TooltipRune21": "@colorchengse@r21@jghelp50621rune21tooltip",
  "FileRune22": "items\\misc\\rune\\Um_rune",
  "TooltipRune22": "@colorchengse@r22@jghelp50622rune22tooltip",
  "FileRune23": "items\\misc\\rune\\Mal_rune",
  "TooltipRune23": "@colorchengse@r23@jghelp50623rune23tooltip",
  "FileRune24": "items\\misc\\rune\\Ist_rune",
  "TooltipRune24": "@colorchengse@r24@jghelp50624rune24tooltip",
  "FileRune25": "items\\misc\\rune\\Gul_rune",
  "TooltipRune25": "@colorchengse@r25@jghelp50625rune25tooltip",
  "FileRune26": "items\\misc\\rune\\Vex_rune",
  "TooltipRune26": "@colorchengse@r26@jghelp50626rune26tooltip",
  "FileRune27": "items\\misc\\rune\\Ohm_rune",
  "TooltipRune27": "@colorchengse@r27@jghelp50627rune27tooltip",
  "FileRune28": "items\\misc\\rune\\Lo_rune",
  "TooltipRune28": "@colorchengse@r28@jghelp50628rune28tooltip",
  "FileRune29": "items\\misc\\rune\\Sur_rune",
  "TooltipRune29": "@colorchengse@r29@jghelp50629rune29tooltip",
  "FileRune30": "items\\misc\\rune\\Ber_rune",
  "TooltipRune30": "@colorchengse@r30@jghelp50630rune30tooltip",
  "FileRune31": "items\\misc\\rune\\Jah_rune",
  "TooltipRune31": "@colorchengse@r31@jghelp50631rune31tooltip",
  "FileRune32": "items\\misc\\rune\\Cham_rune",
  "TooltipRune32": "@colorchengse@r32@jghelp50632rune32tooltip",
  "FileRune33": "items\\misc\\rune\\Zod_rune",
  "TooltipRune33": "@colorchengse@r33@jghelp50633rune33tooltip",
  "FileChippedTopaz": "items\\misc\\gem\\chipped_topaz",
  "TooltipChippedTopaz": "@gcy",
  "FileFlawedTopaz": "items\\misc\\gem\\flawed_topaz",
  "TooltipFlawedTopaz": "@gfy",
  "FileTopaz": "items\\misc\\gem\\topaz",
  "TooltipTopaz": "@gsy",
  "FileFlawlessTopaz": "items\\misc\\gem\\flawless_topaz",
  "TooltipFlawlessTopaz": "@gly",
  "FilePerfectTopaz": "items\\misc\\gem\\perfect_topaz",
  "TooltipPerfectTopaz": "@gpy",
  "FileChippedAmethyst": "items\\misc\\gem\\chipped_amethyst",
  "TooltipChippedAmethyst": "@gcv",
  "FileFlawedAmethyst": "items\\misc\\gem\\flawed_amethyst",
  "TooltipFlawedAmethyst": "@gfv",
  "FileAmethyst": "items\\misc\\gem\\amethyst",
  "TooltipAmethyst": "@gsv",
  "FileFlawlessAmethyst": "items\\misc\\gem\\flawless_amethyst",
  "TooltipFlawlessAmethyst": "@gzv",
  "FilePerfectAmethyst": "items\\misc\\gem\\perfect_amethyst",
  "TooltipPerfectAmethystz": "@gpv",
  "FileChippedSapphire": "items\\misc\\gem\\chipped_saphire",
  "TooltipChippedSapphire": "@gcb",
  "FileFlawedSapphire": "items\\misc\\gem\\flawed_saphire",
  "TooltipFlawedSapphire": "@gfb",
  "FileSapphire": "items\\misc\\gem\\saphire",
  "TooltipSapphire": "@gsb",
  "FileFlawlessSapphire": "items\\misc\\gem\\flawless_saphire",
  "TooltipFlawlessSapphire": "@glb",
  "FilePerfectSapphire": "items\\misc\\gem\\perfect_saphire",
  "TooltipPerfectSapphirez": "@gpb",
  "FileChippedRuby": "items\\misc\\gem\\chipped_ruby",
  "TooltipChippedRuby": "@gcr",
  "FileFlawedRuby": "items\\misc\\gem\\flawed_ruby",
  "TooltipFlawedRuby": "@gfr",
  "FileRuby": "items\\misc\\gem\\ruby",
  "TooltipRuby": "@gsr",
  "FileFlawlessRuby": "items\\misc\\gem\\flawless_ruby",
  "TooltipFlawlessRuby": "@glr",
  "FilePerfectRuby": "items\\misc\\gem\\perfect_ruby",
  "TooltipPerfectRubyz": "@gpr",
  "FileChippedEmerald": "items\\misc\\gem\\chipped_emerald",
  "TooltipChippedEmerald": "@gcg",
  "FileFlawedEmerald": "items\\misc\\gem\\flawed_emerald",
  "TooltipFlawedEmerald": "@gfg",
  "FileEmerald": "items\\misc\\gem\\emerald",
  "TooltipEmerald": "@gsg",
  "FileFlawlessEmerald": "items\\misc\\gem\\flawless_emerald",
  "TooltipFlawlessEmerald": "@glg",
  "FilePerfectEmerald": "items\\misc\\gem\\perfect_emerald",
  "TooltipPerfectEmeraldz": "@gpg",
  "FileChippedDiamond": "items\\misc\\gem\\chipped_diamond",
  "TooltipChippedDiamond": "@gcw",
  "FileFlawedDiamond": "items\\misc\\gem\\flawed_diamond",
  "TooltipFlawedDiamond": "@gfw",
  "FileDiamond": "items\\misc\\gem\\diamond",
  "TooltipDiamond": "@gsw",
  "FileFlawlessDiamond": "items\\misc\\gem\\flawless_diamond",
  "TooltipFlawlessDiamond": "@glw",
  "FilePerfectDiamond": "items\\misc\\gem\\perfect_diamond",
  "TooltipPerfectDiamondz": "@gpw",
  "FileChippedSkull": "items\\misc\\gem\\chipped_skull",
  "TooltipChippedSkull": "@skc",
  "FileFlawedSkull": "items\\misc\\gem\\flawed_skull",
  "TooltipFlawedSkull": "@skf",
  "FileSkull": "items\\misc\\gem\\skull",
  "TooltipSkull": "@sku",
  "FileFlawlessSkull": "items\\misc\\gem\\flawless_skull",
  "TooltipFlawlessSkull": "@skl",
  "FilePerfectSkull": "items\\misc\\gem\\perfect_skull",
  "TooltipPerfectSkullz": "@skz"
}

profileHD = {...profileHD, ...jgmod};
D2RMM.writeJson(profileHDFilename, profileHD);
const profileLVFilename = 'global\\ui\\layouts\\_profilelv.json';
let profileLV = D2RMM.readJson(profileLVFilename);
profileLV["ModsMediumPanelFontSize"] = 26;
profileLV["ModsScrollingTextFontSize"] = 32;
profileLV.TooltipStyle.inGameTargetPadding = [-3, 0, -3, 0];
profileLV.TooltipStyle.inGameBackgroundColor = [0, 0, 0, 0.6];
profileLV.TutorialTooltipConsoleSoloRect.x = 275;
profileLV["JoinGamePlayerEntryHeight"] = 140;
profileLV["JoinGamePlayerNameHeight"] = 100;
D2RMM.writeJson(profileLVFilename, profileLV);
D2RMM.copyFile(
  'data', // <mod folder>\hd
  '', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
  true // overwrite any conflicts
);