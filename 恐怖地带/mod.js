// Copy map .bin files needed to read the map files
D2RMM.copyFile(
  'global\\tiles\\act1\\combined_ds1.bin',
  'global\\tiles\\act1\\combined_ds1.bin',
  true // overwrite any conflicts
);
D2RMM.copyFile(
  'global\\tiles\\act2\\combined_ds1.bin',
  'global\\tiles\\act2\\combined_ds1.bin',
  true // overwrite any conflicts
);
D2RMM.copyFile(
  'global\\tiles\\act3\\combined_ds1.bin',
  'global\\tiles\\act3\\combined_ds1.bin',
  true // overwrite any conflicts
);
D2RMM.copyFile(
  'global\\tiles\\act4\\combined_ds1.bin',
  'global\\tiles\\act4\\combined_ds1.bin',
  true // overwrite any conflicts
);
D2RMM.copyFile(
  'global\\tiles\\expansion\\combined_ds1.bin',
  'global\\tiles\\expansion\\combined_ds1.bin',
  true // overwrite any conflicts
);

const monpresetFileName = 'global\\excel\\monpreset.txt';
const monpreset = D2RMM.readTsv(monpresetFileName);

// Add Lilith Act 1
monpreset.rows.splice(47, 0, { "Act": 1, "Place\r": "Terror Lilith" });
// Add Lilith Act 2
monpreset.rows.splice(107, 0, { "Act": 2, "Place\r": "Terror Lilith" });
// Add Lilith Act 3
monpreset.rows.splice(147, 0, { "Act": 3, "Place\r": "Terror Lilith" });
// Add Lilith Act 4
monpreset.rows.splice(176, 0, { "Act": 4, "Place\r": "Terror Lilith" });
// Add Lilith Act 5
monpreset.rows.push({ "Act": 5, "Place\r": "Terror Lilith" });

// Add Act 1 Boss
monpreset.rows.splice(48, 0, { "Act": 1, "Place\r": "Queen Araneae" });
// Add Act 2 Boss
monpreset.rows.splice(109, 0, { "Act": 2, "Place\r": "Rakanoth" });
// Add Act 3 Boss
monpreset.rows.splice(150, 0, { "Act": 3, "Place\r": "Adria" });
// Add Act 4 Boss
monpreset.rows.splice(180, 0, { "Act": 4, "Place\r": "Iskatu" });
// Add Act 5 Boss
monpreset.rows.push({ "Act": 5, "Place\r": "Siegebreaker" });

D2RMM.writeTsv(monpresetFileName, monpreset);


const terrorZoneGroupId = config.terror_zone;
const characterLevel = config.character_level;

const terrorZoneGroup = {
  1: [
    {
      "*StringName": "Den of Evil",
      "Id": 8,
      "SuperUniques": [
        {
          "hcIdx": 40,
          "SuperUniqueTC": {
            67: "Act 1 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22772
    },
    {
      "*StringName": "Blood Moor",
      "Id": 2,
      "levelsJsonId": 22766
    }
  ],
  2: [
    {
      "*StringName": "Cold Plains",
      "Id": 3,
      "SuperUniques": [
        {
          "hcIdx": 0,
          "SuperUniqueTC": {
            67: "Act 1 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22767
    },
    {
      "*StringName": "Cave Level 2",
      "Id": 13,
      "SuperUniques": [
        {
          "hcIdx": 2,
          "SuperUniqueTC": {
            67: "Act 1 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22778
    },
    {
      "*StringName": "Cave Level 1",
      "Id": 9,
      "levelsJsonId": 22774
    }
  ],
  3: [
    {
      "*StringName": "Crypt",
      "Id": 18,
      "SuperUniques": [
        {
          "hcIdx": 1,
          "SuperUniqueTC": {
            67: "Act 1 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22783
    },
    {
      "*StringName": "Burial Grounds",
      "Id": 17,
      "boss": [
        {
          "hcIdx": 267,
          "BossTC": {
            88: "Blood Raven (H) Desecrated A",
            90: "Blood Raven (H) Desecrated B",
            93: "Blood Raven (H) Desecrated C",
            96: "Blood Raven (H) Desecrated D"
          }
        }
      ],
      "levelsJsonId": 22782
    },
    {
      "*StringName": "Mausoleum",
      "Id": 19,
      "levelsJsonId": 22784
    }
  ],
  4: [
    {
      "*StringName": "Stony Field",
      "Id": 4,
      "SuperUniques": [
        {
          "hcIdx": 3,
          "SuperUniqueTC": {
            67: "Act 1 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22768
    }
  ],
  5: [
    {
      "*StringName": "Dark Wood",
      "Id": 5,
      "SuperUniques": [
        {
          "hcIdx": 4,
          "SuperUniqueTC": {
            67: "Act 1 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22769
    }
  ],
  6: [
    {
      "*StringName": "Tower Cellar Level 5",
      "Id": 25,
      "SuperUniques": [
        {
          "hcIdx": 6,
          "SuperUniqueTC": {
            82: "Countess (H) Desecrated A",
            84: "Countess (H) Desecrated B",
            87: "Countess (H) Desecrated C",
            90: "Countess (H) Desecrated D",
            93: "Countess (H) Desecrated E",
            96: "Countess (H) Desecrated F"
          }
        }
      ],
      "levelsJsonId": 22790
    },
    {
      "*StringName": "Forgotten Tower",
      "Id": 20,
      "levelsJsonId": 22785
    },
    {
      "*StringName": "Tower Cellar Level 1",
      "Id": 21,
      "levelsJsonId": 22786
    },
    {
      "*StringName": "Tower Cellar Level 2",
      "Id": 22,
      "levelsJsonId": 22787
    },
    {
      "*StringName": "Tower Cellar Level 3",
      "Id": 23,
      "levelsJsonId": 22788
    },
    {
      "*StringName": "Tower Cellar Level 4",
      "Id": 24,
      "levelsJsonId": 22789
    }
  ],
  7: [
    {
      "*StringName": "Jail Level 2",
      "Id": 30,
      "SuperUniques": [
        {
          "hcIdx": 7,
          "SuperUniqueTC": {
            67: "Act 1 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22795
    },
    {
      "*StringName": "Jail Level 1",
      "Id": 29,
      "levelsJsonId": 22794
    },
    {
      "*StringName": "Jail Level 3",
      "Id": 31,
      "levelsJsonId": 22796
    }
  ],
  8: [
    {
      "*StringName": "Cathedral",
      "Id": 33,
      "SuperUniques": [
        {
          "hcIdx": 9,
          "SuperUniqueTC": {
            68: "Act 1 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22798
    },
    {
      "*StringName": "Catacombs Level 1",
      "Id": 34,
      "levelsJsonId": 22799
    },
    {
      "*StringName": "Catacombs Level 2",
      "Id": 35,
      "levelsJsonId": 22800
    },
    {
      "*StringName": "Catacombs Level 3",
      "Id": 36,
      "levelsJsonId": 22801
    },
    {
      "*StringName": "Catacombs Level 4",
      "Id": 37,
      "boss": [
        {
          "hcIdx": 156,
          "BossTC": {
            74: "Andarielq (H) Desecrated A",
            78: "Andarielq (H) Desecrated B",
            81: "Andarielq (H) Desecrated C",
            84: "Andarielq (H) Desecrated D",
            87: "Andarielq (H) Desecrated E",
            90: "Andarielq (H) Desecrated F",
            93: "Andarielq (H) Desecrated G",
            96: "Andarielq (H) Desecrated H"
          }
        }
      ],
      "levelsJsonId": 22802
    }
  ],
  9: [
    {
      "*StringName": "Pit Level 1",
      "Id": 12,
      "levelsJsonId": 22777
    },
    {
      "*StringName": "Pit Level 2",
      "Id": 16,
      "levelsJsonId": 22781
    }
  ],
  10: [
    {
      "*StringName": "Tristram",
      "Id": 38,
      "SuperUniques": [
        {
          "hcIdx": 5,
          "SuperUniqueTC": {
            87: "Griswold (H) Desecrated A",
            90: "Griswold (H) Desecrated B",
            93: "Griswold (H) Desecrated C",
            96: "Griswold (H) Desecrated D"
          }
        }
      ],
      "boss": [
        {
          "hcIdx": 365,
          "BossTC": {
            87: "Griswold (H) Desecrated A",
            90: "Griswold (H) Desecrated B",
            93: "Griswold (H) Desecrated C",
            96: "Griswold (H) Desecrated D"
          }
        }
      ],
      "levelsJsonId": 22803
    }
  ],
  11: [
    {
      "*StringName": "Moo Moo Farm",
      "Id": 39,
      "SuperUniques": [
        {
          "hcIdx": 39,
          "SuperUniqueTC": {
            86: "Cow King (H) Desecrated A",
            90: "Cow King (H) Desecrated B",
            93: "Cow King (H) Desecrated C",
            96: "Cow King (H) Desecrated D"
          }
        }
      ],
      "levelsJsonId": 22804
    }
  ],
  12: [
    {
      "*StringName": "Sewers Level 3",
      "Id": 49,
      "SuperUniques": [
        {
          "hcIdx": 10,
          "SuperUniqueTC": {
            86: "Radament (H) Desecrated A",
            90: "Radament (H) Desecrated B",
            93: "Radament (H) Desecrated C",
            96: "Radament (H) Desecrated D"
          }
        }
      ],
      "boss": [
        {
          "hcIdx": 229,
          "BossTC": {
            86: "Radament (H) Desecrated A",
            90: "Radament (H) Desecrated B",
            93: "Radament (H) Desecrated C",
            96: "Radament (H) Desecrated D"
          }
        }
      ],
      "levelsJsonId": 22814
    },
    {
      "*StringName": "Sewers Level 1",
      "Id": 47,
      "levelsJsonId": 22812
    },
    {
      "*StringName": "Sewers Level 2",
      "Id": 48,
      "levelsJsonId": 22813
    }
  ],
  13: [
    {
      "*StringName": "石制古墓第二层",
      "Id": 59,
      "SuperUniques": [
        {
          "hcIdx": 14,
          "SuperUniqueTC": {
            68: "Act 2 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22824
    },
    {
      "*StringName": "碎石荒地",
      "Id": 41,
      "levelsJsonId": 22806
    },
    {
      "*StringName": "石制古墓第一层",
      "Id": 55,
      "levelsJsonId": 22820
    }
  ],
  14: [
    {
      "*StringName": "Halls of the Dead Level 3",
      "Id": 60,
      "SuperUniques": [
        {
          "hcIdx": 11,
          "SuperUniqueTC": {
            68: "Act 2 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22825
    },
    {
      "*StringName": "Dry Hills",
      "Id": 42,
      "levelsJsonId": 22807
    },
    {
      "*StringName": "Halls of the Dead Level 1",
      "Id": 56,
      "levelsJsonId": 22821
    },
    {
      "*StringName": "Halls of the Dead Level 2",
      "Id": 57,
      "levelsJsonId": 22822
    }
  ],
  15: [
    {
      "*StringName": "Far Oasis",
      "Id": 43,
      "SuperUniques": [
        {
          "hcIdx": 13,
          "SuperUniqueTC": {
            69: "Act 2 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22808
    }
  ],
  16: [
    {
      "*StringName": "Lost City",
      "Id": 44,
      "SuperUniques": [
        {
          "hcIdx": 17,
          "SuperUniqueTC": {
            69: "Act 2 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22809
    },
    {
      "*StringName": "Claw Viper Temple Level 2",
      "Id": 61,
      "SuperUniques": [
        {
          "hcIdx": 12,
          "SuperUniqueTC": {
            69: "Act 2 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22826
    },
    {
      "*StringName": "Valley of Snakes",
      "Id": 45,
      "levelsJsonId": 22810
    },
    {
      "*StringName": "Claw Viper Temple Level 1",
      "Id": 58,
      "levelsJsonId": 22823
    }
  ],
  17: [
    {
      "*StringName": "Arcane Sanctuary",
      "Id": 74,
      "SuperUniques": [
        {
          "hcIdx": 18,
          "SuperUniqueTC": {
            80: "Summoner (H) Desecrated A",
            84: "Summoner (H) Desecrated B",
            87: "Summoner (H) Desecrated C",
            90: "Summoner (H) Desecrated D",
            93: "Summoner (H) Desecrated E",
            96: "Summoner (H) Desecrated F"
          }
        }
      ],
      "boss": [
        {
          "hcIdx": 250,
          "BossTC": {
            80: "Summoner (H) Desecrated A",
            84: "Summoner (H) Desecrated B",
            87: "Summoner (H) Desecrated C",
            90: "Summoner (H) Desecrated D",
            93: "Summoner (H) Desecrated E",
            96: "Summoner (H) Desecrated F"
          }
        }
      ],
      "levelsJsonId": 22833
    }
  ],
  18: [
    {
      "*StringName": "Tal Rasha's Tomb",
      "Id": 66,
      "SuperUniques": [
        {
          "hcIdx": 19,
          "SuperUniqueTC": {
            72: "Act 2 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22831
    },
    {
      "*StringName": "Tal Rasha's Tomb",
      "Id": 67,
      "SuperUniques": [
        {
          "hcIdx": 19,
          "SuperUniqueTC": {
            72: "Act 2 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22831
    },
    {
      "*StringName": "Tal Rasha's Tomb",
      "Id": 68,
      "SuperUniques": [
        {
          "hcIdx": 19,
          "SuperUniqueTC": {
            72: "Act 2 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22831
    },
    {
      "*StringName": "Tal Rasha's Tomb",
      "Id": 69,
      "SuperUniques": [
        {
          "hcIdx": 19,
          "SuperUniqueTC": {
            72: "Act 2 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22831
    },
    {
      "*StringName": "Tal Rasha's Tomb",
      "Id": 70,
      "SuperUniques": [
        {
          "hcIdx": 19,
          "SuperUniqueTC": {
            72: "Act 2 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22831
    },
    {
      "*StringName": "Tal Rasha's Tomb",
      "Id": 71,
      "SuperUniques": [
        {
          "hcIdx": 19,
          "SuperUniqueTC": {
            72: "Act 2 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22831
    },
    {
      "*StringName": "Tal Rasha's Tomb",
      "Id": 72,
      "SuperUniques": [
        {
          "hcIdx": 19,
          "SuperUniqueTC": {
            72: "Act 2 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22831
    },
    {
      "*StringName": "Duriel's Lair",
      "Id": 73,
      "boss": [
        {
          "hcIdx": 211,
          "BossTC": {
            88: "Duriel (H) Desecrated A",
            90: "Duriel (H) Desecrated B",
            93: "Duriel (H) Desecrated C",
            96: "Duriel (H) Desecrated D"
          }
        }
      ],
      "levelsJsonId": 22832
    }
  ],
  19: [
    {
      "*StringName": "Spider Cavern",
      "Id": 85,
      "SuperUniques": [
        {
          "hcIdx": 21,
          "SuperUniqueTC": {
            73: "Act 3 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22844
    },
    {
      "*StringName": "Spider Forest",
      "Id": 76,
      "levelsJsonId": 22835
    }
  ],
  20: [
    {
      "*StringName": "Flayer Jungle",
      "Id": 78,
      "SuperUniques": [
        {
          "hcIdx": 23,
          "SuperUniqueTC": {
            75: "Act 3 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22837
    },
    {
      "*StringName": "Flayer Dungeon Level 3",
      "Id": 91,
      "SuperUniques": [
        {
          "hcIdx": 22,
          "SuperUniqueTC": {
            75: "Act 3 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22850
    },
    {
      "*StringName": "Flayer Dungeon Level 1",
      "Id": 88,
      "levelsJsonId": 22847
    },
    {
      "*StringName": "Flayer Dungeon Level 2",
      "Id": 89,
      "levelsJsonId": 22848
    }
  ],
  21: [
    {
      "*StringName": "Ruined Temple",
      "Id": 94,
      "SuperUniques": [
        {
          "hcIdx": 24,
          "SuperUniqueTC": {
            75: "Act 3 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22853
    },
    {
      "*StringName": "Kurast Bazaar",
      "Id": 80,
      "levelsJsonId": 22839
    },
    {
      "*StringName": "Disused Fane",
      "Id": 95,
      "levelsJsonId": 22854
    }
  ],
  22: [
    {
      "*StringName": "Sewers Level 1",
      "Id": 92,
      "SuperUniques": [
        {
          "hcIdx": 25,
          "SuperUniqueTC": {
            73: "Act 3 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22812
    },
    {
      "*StringName": "Sewers Level 2",
      "Id": 93,
      "levelsJsonId": 22813
    }
  ],
  23: [
    {
      "*StringName": "Travincal",
      "Id": 83,
      "SuperUniques": [
        {
          "hcIdx": 26,
          "SuperUniqueTC": {
            85: "Council (H) Desecrated A",
            87: "Council (H) Desecrated B",
            90: "Council (H) Desecrated C",
            93: "Council (H) Desecrated D",
            96: "Council (H) Desecrated E"
          }
        },
        {
          "hcIdx": 27,
          "SuperUniqueTC": {
            85: "Council (H) Desecrated A",
            87: "Council (H) Desecrated B",
            90: "Council (H) Desecrated C",
            93: "Council (H) Desecrated D",
            96: "Council (H) Desecrated E"
          }
        },
        {
          "hcIdx": 29,
          "SuperUniqueTC": {
            85: "Council (H) Desecrated A",
            87: "Council (H) Desecrated B",
            90: "Council (H) Desecrated C",
            93: "Council (H) Desecrated D",
            96: "Council (H) Desecrated E"
          }
        }
      ],
      "levelsJsonId": 22842
    }
  ],
  24: [
    {
      "*StringName": "Durance of Hate Level 3",
      "Id": 102,
      "SuperUniques": [
        {
          "hcIdx": 28,
          "SuperUniqueTC": {
            85: "Council (H) Desecrated A",
            87: "Council (H) Desecrated B",
            90: "Council (H) Desecrated C",
            93: "Council (H) Desecrated D",
            96: "Council (H) Desecrated E"
          }
        },
        {
          "hcIdx": 30,
          "SuperUniqueTC": {
            85: "Council (H) Desecrated A",
            87: "Council (H) Desecrated B",
            90: "Council (H) Desecrated C",
            93: "Council (H) Desecrated D",
            96: "Council (H) Desecrated E"
          }
        },
        {
          "hcIdx": 31,
          "SuperUniqueTC": {
            85: "Council (H) Desecrated A",
            87: "Council (H) Desecrated B",
            90: "Council (H) Desecrated C",
            93: "Council (H) Desecrated D",
            96: "Council (H) Desecrated E"
          }
        }
      ],
      "boss": [
        {
          "hcIdx": 242,
          "BossTC": {
            87: "Mephisto (H) Desecrated A",
            90: "Mephisto (H) Desecrated B",
            93: "Mephisto (H) Desecrated C",
            96: "Mephisto (H) Desecrated D"
          }
        }
      ],
      "levelsJsonId": 22861
    },
    {
      "*StringName": "Durance of Hate Level 1",
      "Id": 100,
      "levelsJsonId": 22859
    },
    {
      "*StringName": "Durance of Hate Level 2",
      "Id": 101,
      "levelsJsonId": 22860
    }
  ],
  25: [
    {
      "*StringName": "Outer Steppes",
      "Id": 104,
      "levelsJsonId": 22863
    },
    {
      "*StringName": "Plains of Despair",
      "Id": 105,
      "SuperUniques": [
        {
          "hcIdx": 256,
          "SuperUniqueTC": {
            86: "Izual (H) Desecrated A",
            90: "Izual (H) Desecrated B",
            93: "Izual (H) Desecrated C",
            96: "Izual (H) Desecrated D"
          }
        }
      ],
      "boss": [
        {
          "hcIdx": 256,
          "BossTC": {
            86: "Izual (H) Desecrated A",
            90: "Izual (H) Desecrated B",
            93: "Izual (H) Desecrated C",
            96: "Izual (H) Desecrated D"
          }
        }
      ],
      "levelsJsonId": 22864
    }
  ],
  26: [
    {
      "*StringName": "River of Flame",
      "Id": 107,
      "SuperUniques": [
        {
          "hcIdx": 41,
          "SuperUniqueTC": {
            88: "Haphesto (H) Desecrated A",
            93: "Haphesto (H) Desecrated B",
            96: "Haphesto (H) Desecrated C"
          }
        }
      ],
      "levelsJsonId": 22866
    },
    {
      "*StringName": "City of the Damned",
      "Id": 106,
      "levelsJsonId": 22865
    }
  ],
  27: [
    {
      "*StringName": "The Chaos Sanctuary",
      "Id": 108,
      "SuperUniques": [
        {
          "hcIdx": 36,
          "SuperUniqueTC": {
            84: "Act 4 (H) Super B Desecrated"
          }
        },
        {
          "hcIdx": 37,
          "SuperUniqueTC": {
            87: "Act 4 (H) Super C Desecrated"
          }
        },
        {
          "hcIdx": 38,
          "SuperUniqueTC": {
            84: "Act 4 (H) Super B Desecrated"
          }
        }
      ],
      "boss": [
        {
          "hcIdx": 243,
          "BossTC": {
            94: "Diablo (H) Desecrated A",
            96: "Diablo (H) Desecrated B"
          }
        }
      ],
      "levelsJsonId": 22867
    }
  ],
  28: [
    {
      "*StringName": "Bloody Foothills",
      "Id": 110,
      "SuperUniques": [
        {
          "hcIdx": 42,
          "SuperUniqueTC": {
            90: "Act 5 (H) Super A Desecrated"
          }
        },
        {
          "hcIdx": 48,
          "SuperUniqueTC": {
            93: "Act 5 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22869
    }
  ],
  29: [
    {
      "*StringName": "Frigid Highlands",
      "Id": 111,
      "SuperUniques": [
        {
          "hcIdx": 49,
          "SuperUniqueTC": {
            90: "Act 5 (H) Super A Desecrated"
          }
        },
        {
          "hcIdx": 50,
          "SuperUniqueTC": {
            90: "Act 5 (H) Super A Desecrated"
          }
        },
        {
          "hcIdx": 56,
          "SuperUniqueTC": {
            93: "Act 5 (H) Super B Desecrated"
          }
        }
      ],
      "levelsJsonId": 22870
    }
  ],
  30: [
    {
      "*StringName": "Glacial Trail",
      "Id": 115,
      "SuperUniques": [
        {
          "hcIdx": 47,
          "SuperUniqueTC": {
            90: "Act 5 (H) Super A Desecrated"
          }
        }
      ],
      "levelsJsonId": 22874
    }
  ],
  31: [
    {
      "*StringName": "Frozen River",
      "Id": 114,
      "SuperUniques": [
        {
          "hcIdx": 59,
          "SuperUniqueTC": {
            96: "Act 5 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22873
    },
    {
      "*StringName": "Crystalline Passage",
      "Id": 113,
      "levelsJsonId": 22872
    }
  ],
  32: [
    {
      "*StringName": "Arreat Plateau",
      "Id": 112,
      "SuperUniques": [
        {
          "hcIdx": 51,
          "SuperUniqueTC": {
            96: "Act 5 (H) Super Cx Desecrated"
          }
        }
      ],
      "levelsJsonId": 22871
    }
  ],
  33: [
    {
      "*StringName": "Nihlathak's Temple",
      "Id": 121,
      "SuperUniques": [
        {
          "hcIdx": 52,
          "SuperUniqueTC": {
            96: "Act 5 (H) Super Cx Desecrated"
          }
        }
      ],
      "levelsJsonId": 22880
    },
    {
      "*StringName": "Halls of Vaught",
      "Id": 124,
      "boss": [
        {
          "hcIdx": 526,
          "BossTC": {
            95: "Nihlathak (H) Desecrated"
          }
        }
      ],
      "SuperUniques": [
        {
          "hcIdx": 60,
          "SuperUniqueTC": {
            95: "Nihlathak (H) Desecrated"
          }
        }
      ],
      "levelsJsonId": 22883
    },
    {
      "*StringName": "Halls of Anguish",
      "Id": 122,
      "levelsJsonId": 22881
    },
    {
      "*StringName": "Halls of Pain",
      "Id": 123,
      "levelsJsonId": 22882
    }
  ],
  34: [
    {
      "*StringName": "Icy Cellar",
      "Id": 119,
      "SuperUniques": [
        {
          "hcIdx": 53,
          "SuperUniqueTC": {
            96: "Act 5 (H) Super C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22878
    },
    {
      "*StringName": "The Ancients' Way",
      "Id": 118,
      "levelsJsonId": 22877
    }
  ],
  35: [
    {
      "*StringName": "Throne of Destruction",
      "Id": 131,
      "SuperUniques": [
        {
          "hcIdx": 61,
          "SuperUniqueTC": {
            85: "Act 5 (H) Champ C Desecrated"
          }
        },
        {
          "hcIdx": 62,
          "SuperUniqueTC": {
            85: "Act 5 (H) Champ C Desecrated"
          }
        },
        {
          "hcIdx": 63,
          "SuperUniqueTC": {
            85: "Act 5 (H) Champ C Desecrated"
          }
        },
        {
          "hcIdx": 64,
          "SuperUniqueTC": {
            85: "Act 5 (H) Champ C Desecrated"
          }
        },
        {
          "hcIdx": 65,
          "SuperUniqueTC": {
            85: "Act 5 (H) Champ C Desecrated"
          }
        }
      ],
      "levelsJsonId": 22890
    },
    {
      "*StringName": "The Worldstone Keep Level 1",
      "Id": 128,
      "levelsJsonId": 22887
    },
    {
      "*StringName": "The Worldstone Keep Level 2",
      "Id": 129,
      "levelsJsonId": 22888
    },
    {
      "*StringName": "The Worldstone Keep Level 3",
      "Id": 130,
      "levelsJsonId": 22889
    },
    {
      "*StringName": "The Worldstone Chamber",
      "Id": 132,
      "boss": [
        {
          "hcIdx": 544,
          "BossTC": {
            99: "Baal (H) Desecrated"
          }
        }
      ],
      "levelsJsonId": 22891
    }
  ]
};

const terrorZoneData = terrorZoneGroup[terrorZoneGroupId];

// Update levels.txt
const levelsFileName = "global\\excel\\levels.txt";
const levels = D2RMM.readTsv(levelsFileName);

levels.rows.forEach(row => {
  terrorZoneData.forEach(tzData => {
    if (row["Id"] == tzData["Id"]) {
      // Upgrade Area Level
      let areaLevel = row["MonLvlEx(H)"]
      if (areaLevel <= characterLevel + 2) {
        row["MonLvlEx(H)"] = Math.min(characterLevel + 2, 96);
      }

      // Upgrade Monster Density
      row["MonDen(H)"] = Math.floor(row["MonDen(H)"]) * config.monster_density;

      // Add boss packs
      if (config.extra_boss_packs) {
        row["MonUMin(H)"] = Math.floor(row["MonUMin(H)"]) + config.extra_boss_packs;
        row["MonUMax(H)"] = Math.floor(row["MonUMax(H)"]) + config.extra_boss_packs;
      }
    }
  });
});

D2RMM.writeTsv(levelsFileName, levels);

// // Update superuniques.txt
const superuniquesFileName = "global\\excel\\superuniques.txt";
const superuniques = D2RMM.readTsv(superuniquesFileName);

superuniques.rows.forEach(row => {
  terrorZoneData.forEach(tzData => {
    if (tzData["SuperUniques"]) {
      tzData["SuperUniques"].forEach(uniques => {
        if (row["hcIdx"] == uniques["hcIdx"]) {
          // Get corresponding TC level
          for (let tc in uniques["SuperUniqueTC"]) {
            while (tc <= characterLevel + 5) {
              var tcLevel = uniques["SuperUniqueTC"][tc];
              break;
            }
            if (tcLevel) {
              row["TC(H)"] = tcLevel;
            }
            if (!tcLevel) {
              row["TC(H)"] = row["TC(H) Desecrated"];
            }
          }
        }
      });
    }
  });
});

D2RMM.writeTsv(superuniquesFileName, superuniques);

// // Update monstats.txt
const monstatsFileName = "global\\excel\\monstats.txt";
const monstats = D2RMM.readTsv(monstatsFileName);

monstats.rows.forEach(row => {
  terrorZoneData.forEach(tzData => {
    if (tzData["boss"]) {
      tzData["boss"].forEach(boss => {
        if (row["*hcIdx"] == boss["hcIdx"]) {
          // Get corresponding TC level
          for (let tc in boss["BossTC"]) {
            while (tc <= characterLevel + 5) {
              var tcLevel = boss["BossTC"][tc];
              break;
            }
            // If we found a corresponding TC level upgrade to it, but only act bosses since it messes up drops for superunique boss like Summoner, Blood Raven, etc...
            if (tcLevel) {// && (boss["hcIdx"] === 156 || boss["hcIdx"] === 211 || boss["hcIdx"] === 242 || boss["hcIdx"] === 243 || boss["hcIdx"] === 544)) {
              row["TreasureClassUnique(H)"] = tcLevel;
              row["TreasureClassChamp(H)"] = tcLevel;
              row["TreasureClass(H)"] = tcLevel;

              // If the boss is Andariel, upgrade her Quest Treasure Class too, since she is most likely quest-bugged
              if (boss["hcIdx"] === 156) {
                row["TreasureClassQuest(H)"] = tcLevel;
              }
            }
            // If we did not find a corresponding TC level, use the basic Desecrated TC, but only for act bosses since it messes up drops for superunique boss like Summoner, Blood Raven, etc...
            if (!tcLevel) {// && (boss["hcIdx"] === 156 || boss["hcIdx"] === 211 || boss["hcIdx"] === 242 || boss["hcIdx"] === 243 || boss["hcIdx"] === 544)) {
              row["TreasureClassUnique(H)"] = row["TreasureClassDesecratedUnique(H)"];
              row["TreasureClassChamp(H)"] = row["TreasureClassDesecratedUnique(H)"];
              row["TreasureClass(H)"] = row["TreasureClassDesecratedUnique(H)"];
              // If the boss is Andariel, upgrade her Quest Treasure Class too, since she is most likely quest-bugged
              if (boss["hcIdx"] === 156) {
                row["TreasureClassQuest(H)"] = row["TreasureClassDesecratedUnique(H)"];
              }
            }
          }
          // Upgrade boss level
          var bossLevel = row["Level(H)"]
          row['Level(H)'] = Math.max(Math.floor(bossLevel), Math.min(characterLevel + 5, 99));

          // // If it's an Act Boss, add 5 to their lvl
          // if (boss["hcIdx"] === 156 || boss["hcIdx"] === 211 || boss["hcIdx"] === 242 || boss["hcIdx"] === 243 || boss["hcIdx"] === 544) {
          //   row['Level(H)'] = Math.max(Math.floor(bossLevel), Math.min(characterLevel + 5, 99));
          // }
          // // If it's a normal boss (Summoner, Blood Raven), add 2 to their lvl (they will get upgraded to +5 by the game automatically)
          // else {
          //   row['Level(H)'] = Math.max(Math.floor(bossLevel), Math.min(characterLevel + 2, 99));
          // }
        }
      });
    }
  });
});

D2RMM.writeTsv(monstatsFileName, monstats);

// treasureclassex.txt - Modify Sunder Charms Droprate
const treasureclassexFileName = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFileName);

treasureclassex.rows.forEach((row) => {
  // Adjust Sunder Charms NoDrop Rate
  if (
    row["Treasure Class"] === "Sunder Charms"
  ) {
    row["NoDrop"] = 10000;
  }
  // Fix Mephisto Desecrated TZ drops
  if (row["Treasure Class"] === "Mephisto (H) Desecrated B") {
    row["Item2"] = "Mephisto Item (H) Desecrated B"
  }
  if (row["Treasure Class"] === "Mephisto (H) Desecrated C") {
    row["Item2"] = "Mephisto Item (H) Desecrated C"
  }
  if (row["Treasure Class"] === "Mephisto (H) Desecrated D") {
    row["Item2"] = "Mephisto Item (H) Desecrated D"
  }
});

D2RMM.writeTsv(treasureclassexFileName, treasureclassex);

// hudlevelnameshd.json
const hudLevelsNameHdJsonFileName = 'global\\ui\\layouts\\hudlevelnameshd.json';
const hudLevelsNameHdJson = D2RMM.readJson(hudLevelsNameHdJsonFileName);

var firstChildrenObject = hudLevelsNameHdJson["children"][0]["fields"]["style"];
// add new key, value pair
firstChildrenObject["options"] = { "newlineHandling": "standard" };

hudLevelsNameHdJson["children"][0]["fields"]["style"] = firstChildrenObject;

D2RMM.writeJson(hudLevelsNameHdJsonFileName, hudLevelsNameHdJson);

// levels.json
const levelsJsonFileName = 'local\\lng\\strings\\levels.json';
const levelsJson = D2RMM.readJson(levelsJsonFileName);

let current_id = "";
let prev_id = "";

levelsJson.forEach(row => {
  terrorZoneData.forEach(tzData => {
    current_id = tzData["levelsJsonId"];
    if (row["id"] === tzData["levelsJsonId"] && current_id !== prev_id) {
      row["enUS"] = "Terrorized\n" + row["enUS"];
      prev_id = tzData["levelsJsonId"];
    }
  });
});

D2RMM.writeJson(levelsJsonFileName, levelsJson);


// hudwarningshd.json
const hudwarningshdJsonFileName = 'global\\ui\\layouts\\hudwarningshd.json';
const hudwarningshdJson = D2RMM.readJson(hudwarningshdJsonFileName);

var levelNames = [];
terrorZoneData.forEach(tzData => {
  levelNames.push(tzData["*StringName"]);
});

let uniqueLevelNames = [];
levelNames.forEach((element) => {
  if (!uniqueLevelNames.includes(element)) {
    uniqueLevelNames.push(element);
  }
});

let uniqueLevelText = "";
uniqueLevelNames.forEach(lvl => {
  uniqueLevelText += lvl + "\n";
});

var terrorizedInfoText = {
  "type": "TextBoxWidget",
  "name": "Title",
  "fields": {
    "fitToText": true,
    "text": uniqueLevelText,
    "style": {

      "pointSize": "$MediumFontSize",
      "fontColor": {
        "r": 135,
        "g": 82,
        "b": 161
      },
      "alignment": {
        "v": "top",
        "h": "right"
      },
      "options": {
        "newlineHandling": "standard"
      },
      "spacing": {
        "kerning": 0.9
      }
    }
  }
};

for (let i = 0; i < hudwarningshdJson["children"].length; i++) {
  c = hudwarningshdJson["children"][i];
  if (c["name"] === "TerrorZoneInfoTextWrapper") {
    hudwarningshdJson["children"][i] = terrorizedInfoText;
  }
}

D2RMM.writeJson(hudwarningshdJsonFileName, hudwarningshdJson);


if (config.add_lilith) {

  // #region Zone Maps
  // ACT 1
  // Den of Evil
  if (terrorZoneGroupId == 1) {
    D2RMM.copyFile(
      'global\\tiles\\act1\\caves\\denent2.ds1',
      'global\\tiles\\act1\\caves\\denent2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act1\\caves\\denent.ds1',
      'global\\tiles\\act1\\caves\\denent.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 2) {
    // Cold Plains
    D2RMM.copyFile(
      'global\\tiles\\act1\\caves\\caveroom2.ds1',
      'global\\tiles\\act1\\caves\\caveroom2.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 3) {
    // Burial Grounds
    D2RMM.copyFile(
      'global\\tiles\\act1\\graveyard\\gravey.ds1',
      'global\\tiles\\act1\\graveyard\\gravey.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 4) {
    // Stony Field
    D2RMM.copyFile(
      'global\\tiles\\act1\\outdoors\\tome.ds1',
      'global\\tiles\\act1\\outdoors\\tome.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 5) {
    // Dark Wood
    D2RMM.copyFile(
      'global\\tiles\\act1\\outdoors\\funktree.ds1',
      'global\\tiles\\act1\\outdoors\\funktree.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 6) {
    // Forgotten Tower
    D2RMM.copyFile(
      'global\\tiles\\act1\\outdoors\\tower1.ds1',
      'global\\tiles\\act1\\outdoors\\tower1.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 7) {
    // Jail
    D2RMM.copyFile(
      'global\\tiles\\act1\\barracks\\jailewarpcath.ds1',
      'global\\tiles\\act1\\barracks\\jailewarpcath.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act1\\barracks\\jailnwarpcath.ds1',
      'global\\tiles\\act1\\barracks\\jailnwarpcath.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act1\\barracks\\jailswarpcath.ds1',
      'global\\tiles\\act1\\barracks\\jailswarpcath.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act1\\barracks\\jailwwarpcath.ds1',
      'global\\tiles\\act1\\barracks\\jailwwarpcath.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 8) {
    // Cathedral
    D2RMM.copyFile(
      'global\\tiles\\act1\\cathedrl\\cathy3.ds1',
      'global\\tiles\\act1\\cathedrl\\cathy3.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 9) {
    // Pit level 2
    D2RMM.copyFile(
      'global\\tiles\\act1\\caves\\caveroom5.ds1',
      'global\\tiles\\act1\\caves\\caveroom5.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 10) {
    // Tristram
    D2RMM.copyFile(
      'global\\tiles\\act1\\tristram\\tri_town4.ds1',
      'global\\tiles\\act1\\tristram\\tri_town4.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 11) {
    // Tristram
    D2RMM.copyFile(
      'global\\tiles\\act1\\outdoors\\bivouac.ds1',
      'global\\tiles\\act1\\outdoors\\bivouac.ds1',
      true // overwrite any conflicts
    );
  }


  // ACT 2

  if (terrorZoneGroupId == 12) {
    // Act 2 Sewers
    D2RMM.copyFile(
      'global\\tiles\\act2\\sewer\\sewerad.ds1',
      'global\\tiles\\act2\\sewer\\sewerad.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\sewer\\sewnrad.ds1',
      'global\\tiles\\act2\\sewer\\sewnrad.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\sewer\\sewsrad.ds1',
      'global\\tiles\\act2\\sewer\\sewsrad.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\sewer\\sewwrad.ds1',
      'global\\tiles\\act2\\sewer\\sewwrad.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 13) {
    // Stony Tomb - doesn't work...
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombeleatherarm.ds1',
      'global\\tiles\\act2\\tomb\\tombeleatherarm.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombnleatherarm.ds1',
      'global\\tiles\\act2\\tomb\\tombnleatherarm.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombsleatherarm.ds1',
      'global\\tiles\\act2\\tomb\\tombsleatherarm.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombwleatherarm.ds1',
      'global\\tiles\\act2\\tomb\\tombwleatherarm.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 14) {
    // Dry Hills, Halls of the Dead
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombcubee.ds1',
      'global\\tiles\\act2\\tomb\\tombcubee.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombcuben.ds1',
      'global\\tiles\\act2\\tomb\\tombcuben.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombcubes.ds1',
      'global\\tiles\\act2\\tomb\\tombcubes.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\tomb\\tombcubew.ds1',
      'global\\tiles\\act2\\tomb\\tombcubew.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 15) {
    // Far Oasis
    D2RMM.copyFile(
      'global\\tiles\\act2\\maggot\\hole1.ds1',
      'global\\tiles\\act2\\maggot\\hole1.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 16) {
    // Lost City, Valley Of Snakes, Claw Viper Temple
    D2RMM.copyFile(
      'global\\tiles\\act2\\outdoors\\viper1.ds1',
      'global\\tiles\\act2\\outdoors\\viper1.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 17) {
    // Arcane Sanctuary
    D2RMM.copyFile(
      'global\\tiles\\act2\\arcane\\summe.ds1',
      'global\\tiles\\act2\\arcane\\summe.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\arcane\\summn.ds1',
      'global\\tiles\\act2\\arcane\\summn.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\arcane\\summs.ds1',
      'global\\tiles\\act2\\arcane\\summs.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act2\\arcane\\summw.ds1',
      'global\\tiles\\act2\\arcane\\summw.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 18) {
    // Tal Rasha's Tombs
    D2RMM.copyFile(
      'global\\tiles\\act2\\bigcliff\\talcor.ds1',
      'global\\tiles\\act2\\bigcliff\\talcor.ds1',
      true // overwrite any conflicts
    );
  }

  // ACT 3

  if (terrorZoneGroupId == 19) {
    // Spider Forest / Cavern
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\transl.ds1',
      'global\\tiles\\act3\\jungle\\transl.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 20) {
    // Flayer Jungle
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pyge2.ds1',
      'global\\tiles\\act3\\jungle\\pyge2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygew2.ds1',
      'global\\tiles\\act3\\jungle\\pygew2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygn2.ds1',
      'global\\tiles\\act3\\jungle\\pygn2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygne2.ds1',
      'global\\tiles\\act3\\jungle\\pygne2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygns2.ds1',
      'global\\tiles\\act3\\jungle\\pygns2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygnw2.ds1',
      'global\\tiles\\act3\\jungle\\pygnw2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygs2.ds1',
      'global\\tiles\\act3\\jungle\\pygs2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygse2.ds1',
      'global\\tiles\\act3\\jungle\\pygse2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygsw2.ds1',
      'global\\tiles\\act3\\jungle\\pygsw2.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\jungle\\pygw2.ds1',
      'global\\tiles\\act3\\jungle\\pygw2.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 21) {
    // Kurast Bazaar / Temples
    D2RMM.copyFile(
      'global\\tiles\\act3\\temple\\temple0.ds1',
      'global\\tiles\\act3\\temple\\temple0.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\temple\\temple1.ds1',
      'global\\tiles\\act3\\temple\\temple1.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act3\\temple\\temple2.ds1',
      'global\\tiles\\act3\\temple\\temple2.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 22) {
    // Sewer
    D2RMM.copyFile(
      'global\\tiles\\act3\\sewer\\sewertreasure1.ds1',
      'global\\tiles\\act3\\sewer\\sewertreasure1.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 23) {
    // Travincal
    D2RMM.copyFile(
      'global\\tiles\\act3\\travincal\\travs.ds1',
      'global\\tiles\\act3\\travincal\\travs.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 24) {
    // Durance of Hate
    D2RMM.copyFile(
      'global\\tiles\\act3\\travincal\\mephcomp.ds1',
      'global\\tiles\\act3\\travincal\\mephcomp.ds1',
      true // overwrite any conflicts
    );
  }

  // ACT 4

  if (terrorZoneGroupId == 25) {
    // Outer Steppes
    D2RMM.copyFile(
      'global\\tiles\\act4\\mesa\\fortmesa.ds1',
      'global\\tiles\\act4\\mesa\\fortmesa.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 26) {
    // River of Flame
    D2RMM.copyFile(
      'global\\tiles\\act4\\lava\\warpmesa.ds1',
      'global\\tiles\\act4\\lava\\warpmesa.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\act4\\lava\\warpmesa1.ds1',
      'global\\tiles\\act4\\lava\\warpmesa1.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 27) {
    // Chaos Sanctuary
    D2RMM.copyFile(
      'global\\tiles\\act4\\diab\\heart.ds1',
      'global\\tiles\\act4\\diab\\heart.ds1',
      true // overwrite any conflicts
    );
  }

  // ACT 5

  if (terrorZoneGroupId == 28) {
    // Bloody Foothills
    D2RMM.copyFile(
      'global\\tiles\\expansion\\siege\\stripseigebar.ds1',
      'global\\tiles\\expansion\\siege\\stripseigebar.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 29) {
    // Frigid Highlands
    D2RMM.copyFile(
      'global\\tiles\\expansion\\ruins\\northhouse8.ds1',
      'global\\tiles\\expansion\\ruins\\northhouse8.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\ruins\\westhouse4a.ds1',
      'global\\tiles\\expansion\\ruins\\westhouse4a.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\ruins\\westhouse5a.ds1',
      'global\\tiles\\expansion\\ruins\\westhouse5a.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 30) {
    // Glacial Trail
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\iceetheme.ds1',
      'global\\tiles\\expansion\\icecave\\iceetheme.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\icentheme.ds1',
      'global\\tiles\\expansion\\icecave\\icentheme.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\icestheme.ds1',
      'global\\tiles\\expansion\\icecave\\icestheme.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\icewtheme.ds1',
      'global\\tiles\\expansion\\icecave\\icewtheme.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 31) {
    // Crytsalline Passage, Frozen River
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice01.ds1',
      'global\\tiles\\expansion\\icecave\\riverice01.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice02.ds1',
      'global\\tiles\\expansion\\icecave\\riverice02.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice03.ds1',
      'global\\tiles\\expansion\\icecave\\riverice03.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice04.ds1',
      'global\\tiles\\expansion\\icecave\\riverice04.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice05.ds1',
      'global\\tiles\\expansion\\icecave\\riverice05.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice06.ds1',
      'global\\tiles\\expansion\\icecave\\riverice06.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice07.ds1',
      'global\\tiles\\expansion\\icecave\\riverice07.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\riverice08.ds1',
      'global\\tiles\\expansion\\icecave\\riverice08.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 32) {
    // Arreat Plateau
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\northentrance_dirt.ds1',
      'global\\tiles\\expansion\\icecave\\northentrance_dirt.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\westentrance_dirt.ds1',
      'global\\tiles\\expansion\\icecave\\westhentrance_dirt.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 33) {
    // Pindle, Nihlathak's Temples
    D2RMM.copyFile(
      'global\\tiles\\expansion\\wildtemple\\tempnedown.ds1',
      'global\\tiles\\expansion\\wildtemple\\tempnedown.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\wildtemple\\tempnwdown.ds1',
      'global\\tiles\\expansion\\wildtemple\\tempnwdown.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\wildtemple\\tempswdown.ds1',
      'global\\tiles\\expansion\\wildtemple\\tempswdown.ds1',
      true // overwrite any conflicts
    );
  }

  if (terrorZoneGroupId == 34) {
    // Ancient's Way, Ice Cellar
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom01.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom01.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom01a.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom01a.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom02.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom02.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom02a.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom02a.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom03.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom03.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom03a.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom03a.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom04.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom04.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom04a.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom04a.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom05.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom05.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom05a.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom05a.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom06.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom06.ds1',
      true // overwrite any conflicts
    );
    D2RMM.copyFile(
      'global\\tiles\\expansion\\icecave\\poolroom06a.ds1',
      'global\\tiles\\expansion\\icecave\\poolroom06a.ds1',
      true // overwrite any conflicts
    );

  }

  if (terrorZoneGroupId == 35) {
    // WSK, Baal
    D2RMM.copyFile(
      'global\\tiles\\expansion\\baallair\\wthrone.ds1',
      'global\\tiles\\expansion\\baallair\\wthrone.ds1',
      true // overwrite any conflicts
    );
  }

  // #endregion

  // Copy Diablo Soul
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\body_part\\soul.sprite',
    'hd\\global\\ui\\items\\misc\\body_part\\soul.sprite',
    true // overwrite any conflicts
  );


  // superuniques.txt - Adding Lilith
  const superuniquesFileName = 'global\\excel\\superuniques.txt';
  const superuniques = D2RMM.readTsv(superuniquesFileName);

  let superuniquesID = Math.max(...superuniques.rows.map((row) => row['hcIdx']));

  superuniques.rows.forEach(row => {
    if (row["hcIdx"] == 6) {
      superuniques.rows.push({
        ...row,
        "hcIdx": (superuniquesID = superuniquesID + 1),
        "Superunique": "Terror Lilith",
        "Name": "Terror Lilith",
        "Class": "terrorandariel",
        "MonSound": "",
        "TC(H)": "TerrorLilith",
        "TC(H) Desecrated": "TerrorLilith",
        "Mod1": 0,
        "Mod2": 0,
        "Mod3": 0,
        "MinGrp": 0,
        "MaxGrp": 0,
        "AutoPos": 0
      }
      );
    }
  });

  D2RMM.writeTsv(superuniquesFileName, superuniques);


  // monstats.txt - Adding Lilith Clone with modified stats
  const monstatsFileName = 'global\\excel\\monstats.txt';
  const monstats = D2RMM.readTsv(monstatsFileName);

  let monstatsID = Math.max(...monstats.rows.map((row) => row['*hcIdx']));

  monstats.rows.forEach(row => {
    if (row["Id"] === "uberandariel") {
      monstats.rows.push({
        ...row,
        "*hcIdx": (monstatsID = monstatsID + 1),
        "Id": "terrorandariel",
        "NameStr": "Terror Lilith",
        "MonType": "terrorandariel",
        "Level": 20,
        "Level(N)": 50,
        "Level(H)": 99,
        "DamageRegen": 1,
        "MinHP(H)": 3200,
        "MaxHP(H)": 3200,
        "AC(H)": 170,
        "A1MinD(H)": 200,
        "A1MaxD(H)": 220,
        "A1TH(H)": 200,
        "El1MinD(H)": 22,
        "El1MaxD(H)": 22,
        "TreasureClass(H)": "TerrorLilith",
        "TreasureClassChamp(H)": "TerrorLilith",
        "TreasureClassUnique(H)": "TerrorLilith",
        "ResFi(H)": 10,
        "ResLi(H)": 10,
        "ResCo(H)": 10,
        "ResPo(H)": 10,
        "Exp(H)": 5000
      }
      );
    }
  });

  D2RMM.writeTsv(monstatsFileName, monstats);

  // montype.txt - Adding Lilith Clone montype for monumod.txt
  const montypeFileName = 'global\\excel\\montype.txt';
  const montype = D2RMM.readTsv(montypeFileName);

  montype.rows.push({
    "type": "terrorandariel",
    "*eol\r": 0
  }
  );

  D2RMM.writeTsv(montypeFileName, montype);

  // monumod.txt - Adding Lilith Clone monumod for monumod.txt
  const monumodFileName = 'global\\excel\\monumod.txt';
  const monumod = D2RMM.readTsv(monumodFileName);

  monumod.rows.forEach(row => {
    if (!row["uniquemod"].match(/(none|fast|teleport)/)) {
      if (row["exclude1"] === "") {
        row["exclude1"] = 'terrorandariel';
      } else {
        row["exclude2"] = 'terrorandariel';
      }
    }
  }
  );

  D2RMM.writeTsv(monumodFileName, monumod);

  // treasureclassex.txt - Lilith drops
  const treasureclassexFileName = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFileName);

  treasureclassex.rows.push({
    "Treasure Class": "TerrorLilith Items",
    "level": 90,
    "Picks": 1,
    "Unique": 800,
    "Set": 800,
    "Rare": 800,
    "Magic": 1024,
    "NoDrop": 0,
    "Item1": "weap81",
    "Prob1": 2,
    "Item2": "armo81",
    "Prob2": 1,
    "Item3": "weap84",
    "Prob3": 6,
    "Item4": "armo84",
    "Prob4": 3,
    "Item5": "weap87",
    "Prob5": 14,
    "Item6": "armo87",
    "Prob6": 7,
    "Item7": "Act 5 (H) Equip B",
    "Prob7": 100,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "TerrorLilith Misc",
    "level": 90,
    "Picks": 1,
    "NoDrop": 120,
    "Item1": "sol",
    "Prob1": 1,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "TerrorLilith",
    "level": 90,
    "Picks": -6,
    "NoDrop": 0,
    "Item1": "Runes 17",
    "Prob1": 2,
    "Item2": "TerrorLilith Items",
    "Prob2": 2,
    "Item3": "Jewelry C",
    "Prob3": 1,
    "Item4": "TerrorLilith Misc",
    "Prob4": 1,
    "*eol\r": 0
  });

  D2RMM.writeTsv(treasureclassexFileName, treasureclassex);

  // misc.txt - Adding Diablo Soul
  const miscFileName = 'global\\excel\\misc.txt';
  const misc = D2RMM.readTsv(miscFileName);

  misc.rows.forEach(row => {
    if (row["name"] === "Soul") {
      row["version"] = 100;
      row["diablocloneweight\r"] = 1;
    }
  });

  D2RMM.writeTsv(miscFileName, misc);

  // uiJson - Modify Diablo Soul text
  const uiJsonFileName = 'local\\lng\\strings\\ui.json';
  const uiJson = D2RMM.readJson(uiJsonFileName);

  uiJson.forEach(row => {
    if (row["Key"] === "convertsto") {
      row["enUS"] = "Sell to any merchant to summon Diablo Clone";
    }

  });

  D2RMM.writeJson(uiJsonFileName, uiJson);

  // itemNamesJson - Modify Diablo Soul text
  const itemNamesJsonFileName = 'local\\lng\\strings\\item-names.json';
  const itemNamesJson = D2RMM.readJson(itemNamesJsonFileName);

  itemNamesJson.forEach(row => {
    if (row["Key"] === "sol") {
      row["enUS"] = "ÿcUSoulÿcU";
    }
  });

  D2RMM.writeJson(itemNamesJsonFileName, itemNamesJson);

  // monsters.json
  const monstersJsonFileName = 'hd\\character\\monsters.json';
  const monstersJson = D2RMM.readJson(monstersJsonFileName);

  monstersJson["terrorandariel"] = "andariel";

  D2RMM.writeJson(monstersJsonFileName, monstersJson);

  // monstersText.json
  const monstersTextJsonFileName = 'local\\lng\\strings\\monsters.json';
  const monstersTextJson = D2RMM.readJson(monstersTextJsonFileName);

  monstersTextJson.push(
    {
      "id": 96666,
      "Key": "Terror Lilith",
      "enUS": "Lilith",
      "zhTW": "莉莉絲",
      "deDE": "Terror Lilith",
      "esES": "Terror Lilith",
      "frFR": "Terror Lilith",
      "itIT": "Terror Lilith",
      "koKR": "릴리트",
      "plPL": "Lilit",
      "esMX": "Terror Lilith",
      "jaJP": "リリス",
      "ptBR": "Terror Lilith",
      "ruRU": "Лилит",
      "zhCN": "莉莉丝"
    }
  )

  D2RMM.writeJson(monstersTextJsonFileName, monstersTextJson);

}

if (config.add_new_superuniques) {

  // superuniques.txt - Adding superuniques
  const superuniquesFileName = 'global\\excel\\superuniques.txt';
  const superuniques = D2RMM.readTsv(superuniquesFileName);

  let superuniquesID = Math.max(...superuniques.rows.map((row) => row['hcIdx']));

  superuniques.rows.forEach(row => {
    // Queen Araneae
    if (row["hcIdx"] == 21) {
      superuniques.rows.push({
        ...row,
        "hcIdx": (superuniquesID = superuniquesID + 1),
        "Superunique": "Queen Araneae",
        "Name": "Queen Araneae",
        "Class": "arach_custom",
        "MonSound": "",
        "TC(H)": "Araneae(H)",
        "TC(H) Desecrated": "Araneae(H)",
        "Mod1": 0,
        "Mod2": 0,
        "Mod3": 0,
        "MinGrp": 5,
        "MaxGrp": 5,
        "AutoPos": 0
      }
      );
    }

    // Rakanoth
    if (row["hcIdx"] == 16) {
      superuniques.rows.push({
        ...row,
        "hcIdx": (superuniquesID = superuniquesID + 1),
        "Superunique": "Rakanoth",
        "Name": "Rakanoth",
        "Class": "sandraider_custom",
        "MonSound": "",
        "TC(H)": "Rakanoth(H)",
        "TC(H) Desecrated": "Rakanoth(H)",
        "Mod1": 0,
        "Mod2": 0,
        "Mod3": 0,
        "MinGrp": 5,
        "MaxGrp": 5,
        "AutoPos": 0,
        "Utrans": 19,
        "Utrans(N)": 19,
        "Utrans(H)": 19
      }
      );
    }

    // Adria
    if (row["hcIdx"] == 18) {
      superuniques.rows.push({
        ...row,
        "hcIdx": (superuniquesID = superuniquesID + 1),
        "Superunique": "Adria",
        "Name": "Adria",
        "Class": "succubuswitch_custom",
        "MonSound": "",
        "TC(H)": "Adria(H)",
        "TC(H) Desecrated": "Adria(H)",
        "Mod1": 0,
        "Mod2": 0,
        "Mod3": 0,
        "AutoPos": 0
      }
      );
    }

    // Iskatu
    if (row["hcIdx"] == 65) {
      superuniques.rows.push({
        ...row,
        "hcIdx": (superuniquesID = superuniquesID + 1),
        "Superunique": "Iskatu",
        "Name": "Iskatu",
        "Class": "baalminion_custom",
        "MonSound": "",
        "TC(H)": "Iskatu(H)",
        "TC(H) Desecrated": "Iskatu(H)",
        "Mod1": 0,
        "Mod2": 0,
        "Mod3": 0,
        "MinGrp": 5,
        "MaxGrp": 5,
        "AutoPos": 0
      }
      );
    }

    // Siegebreaker
    if (row["hcIdx"] == 56) {
      superuniques.rows.push({
        ...row,
        "hcIdx": (superuniquesID = superuniquesID + 1),
        "Superunique": "Siegebreaker",
        "Name": "Siegebreaker",
        "Class": "overseer_custom",
        "MonSound": "",
        "TC(H)": "Siegebreaker(H)",
        "TC(H) Desecrated": "Siegebreaker(H)",
        "Mod1": 0,
        "Mod2": 0,
        "Mod3": 0,
        "MinGrp": 5,
        "MaxGrp": 5,
        "AutoPos": 0
      }
      );
    }

  });

  D2RMM.writeTsv(superuniquesFileName, superuniques);

  D2RMM.copyFile(
    'global\\tiles\\act1\\caves\\caveroom3.ds1',
    'global\\tiles\\act1\\caves\\caveroom3.ds1',
    true // overwrite any conflicts
  );

  // Rakanoth
  D2RMM.copyFile(
    'global\\tiles\\act2\\palace\\celse3.ds1',
    'global\\tiles\\act2\\palace\\celse3.ds1',
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'global\\tiles\\act3\\kurast\\bridge.ds1',
    'global\\tiles\\act3\\kurast\\bridge.ds1',
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'global\\tiles\\act4\\diab\\entry1.ds1',
    'global\\tiles\\act4\\diab\\entry1.ds1',
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'global\\tiles\\expansion\\siege\\strip04.ds1',
    'global\\tiles\\expansion\\siege\\strip04.ds1',
    true // overwrite any conflicts
  );


  // monstats.txt - Adding Uniques with modified stats
  const monstatsFileName = 'global\\excel\\monstats.txt';
  const monstats = D2RMM.readTsv(monstatsFileName);

  let monstatsID = Math.max(...monstats.rows.map((row) => row['*hcIdx']));

  monstats.rows.forEach(row => {

    // Queen Araneae
    if (row["Id"] === "arach1") {
      monstats.rows.push({
        ...row,
        "*hcIdx": (monstatsID = monstatsID + 1),
        "Id": "arach_custom",
        "BaseId": "arach_custom_base",
        "NameStr": "Queen Araneae",
        "MonProp": "arach_custom",
        "minion1": "arach1",
        "Level(H)": 85,
        "DamageRegen": 0,
        "AC(H)": 200,
        "MinHP(H)": 1300,
        "MaxHP(H)": 1300,
        "A1MinD(H)": 100,
        "A1MaxD(H)": 150,
        "ResFi(H)": 20,
        "ResLi(H)": 20,
        "ResCo(H)": 20,
        "ResPo(H)": 20,
        "Exp(H)": 1000,
        "boss": 1
      }
      );
    }

    // Rakanoth
    if (row["Id"] === "sandraider1") {
      monstats.rows.push({
        ...row,
        "*hcIdx": (monstatsID = monstatsID + 1),
        "Id": "sandraider_custom",
        "BaseId": "sandraider_custom_base",
        "NameStr": "Rakanoth",
        "MonProp": "sandraider_custom",
        "minion1": "sandraider1",
        "Level(H)": 85,
        "DamageRegen": 0,
        "AC(H)": 200,
        "MinHP(H)": 1300,
        "MaxHP(H)": 1300,
        "A1MinD(H)": 100,
        "A1MaxD(H)": 150,
        "ResFi(H)": 20,
        "ResLi(H)": 20,
        "ResCo(H)": 20,
        "ResPo(H)": 20,
        "Exp(H)": 1000,
        "boss": 1
      }
      );
    }

    // Adria
    if (row["Id"] === "succubuswitch1") {
      monstats.rows.push({
        ...row,
        "*hcIdx": (monstatsID = monstatsID + 1),
        "Id": "succubuswitch_custom",
        "BaseId": "succubuswitch_custom_base",
        "NameStr": "Adria",
        "MonProp": "succubuswitch_custom",
        "Level(H)": 85,
        "DamageRegen": 0,
        "AC(H)": 200,
        "MinHP(H)": 1300,
        "MaxHP(H)": 1300,
        "A1MinD(H)": 100,
        "A1MaxD(H)": 150,
        "ResFi(H)": 20,
        "ResLi(H)": 20,
        "ResCo(H)": 20,
        "ResPo(H)": 20,
        "Exp(H)": 1000,
        "A1TH(H)": 500,
        "A2TH(H)": 500,
        "S1TH(H)": 500,
        "boss": 1,
        "flying": 0
      }
      );
    }

    // Iskatu
    if (row["Id"] === "baalminion3") {
      monstats.rows.push({
        ...row,
        "*hcIdx": (monstatsID = monstatsID + 1),
        "Id": "baalminion_custom",
        "BaseId": "baalminion_custom_base",
        "NameStr": "Iskatu",
        "MonProp": "baalminion_custom",
        "minion1": "baalminion1",
        "Level(H)": 85,
        "DamageRegen": 0,
        "AC(H)": 200,
        "MinHP(H)": 1300,
        "MaxHP(H)": 1300,
        "A1MinD(H)": 100,
        "A1MaxD(H)": 150,
        "ResFi(H)": 20,
        "ResLi(H)": 20,
        "ResCo(H)": 20,
        "ResPo(H)": 20,
        "Exp(H)": 1000,
        "A1TH(H)": 500,
        "A2TH(H)": 500,
        "S1TH(H)": 500,
        "boss": 1
      }
      );
    }

    // Siegebreaker
    if (row["Id"] === "overseer3") {
      monstats.rows.push({
        ...row,
        "*hcIdx": (monstatsID = monstatsID + 1),
        "Id": "overseer_custom",
        "BaseId": "overseer_custom_base",
        "NameStr": "Siegebreaker",
        "MonProp": "overseer_custom",
        "Level(H)": 85,
        "DamageRegen": 0,
        "AC(H)": 200,
        "MinHP(H)": 1300,
        "MaxHP(H)": 1300,
        "A1MinD(H)": 100,
        "A1MaxD(H)": 150,
        "ResFi(H)": 20,
        "ResLi(H)": 20,
        "ResCo(H)": 20,
        "ResPo(H)": 20,
        "Exp(H)": 1000,
        "A1TH(H)": 500,
        "A2TH(H)": 500,
        "S1TH(H)": 500,
        "boss": 1
      }
      );
    }

  });

  D2RMM.writeTsv(monstatsFileName, monstats);

  // monstats2.txt - Adding Lilith Clone with modified stats
  const monstats2FileName = 'global\\excel\\monstats2.txt';
  const monstats2 = D2RMM.readTsv(monstats2FileName);

  let monstats2ID = Math.max(...monstats2.rows.map((row) => row['*hcIdx']));

  monstats2.rows.forEach(row => {

    // Queen Araneae
    if (row["Id"] === "arach1") {
      monstats2.rows.push({
        ...row,
        "*hcIdx": (monstats2ID = monstats2ID + 1),
        "Id": "arach_custom_base"
      }
      );
    }

    // Rakanoth
    if (row["Id"] === "sandraider1") {
      monstats2.rows.push({
        ...row,
        "*hcIdx": (monstats2ID = monstats2ID + 1),
        "Id": "sandraider_custom_base"
      }
      );
    }

    // Adria
    if (row["Id"] === "succubuswitch1") {
      monstats2.rows.push({
        ...row,
        "*hcIdx": (monstats2ID = monstats2ID + 1),
        "Id": "succubuswitch_custom_base"
      }
      );
    }

    // Iskatu
    if (row["Id"] === "baalminion3") {
      monstats2.rows.push({
        ...row,
        "*hcIdx": (monstats2ID = monstats2ID + 1),
        "Id": "baalminion_custom_base"
      }
      );
    }

    // Siegebreaker
    if (row["Id"] === "overseer3") {
      monstats2.rows.push({
        ...row,
        "*hcIdx": (monstats2ID = monstats2ID + 1),
        "Id": "overseer_custom_base"
      }
      );
    }
  });

  D2RMM.writeTsv(monstats2FileName, monstats2);


  // monsters.json
  const monstersJsonFileName = 'hd\\character\\monsters.json';
  const monstersJson = D2RMM.readJson(monstersJsonFileName);

  monstersJson["arach_custom"] = "arach_custom_base";
  monstersJson["sandraider_custom"] = "sandraider_custom_base";
  monstersJson["succubuswitch_custom"] = "succubuswitch_custom_base";
  monstersJson["baalminion_custom"] = "baalminion_custom_base";
  monstersJson["overseer_custom"] = "overseer_custom_base";

  D2RMM.writeJson(monstersJsonFileName, monstersJson);

  D2RMM.copyFile(
    'hd\\character\\enemy\\arach_custom_base.json',
    'hd\\character\\enemy\\arach_custom_base.json',
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\character\\enemy\\sandraider_custom_base.json',
    'hd\\character\\enemy\\sandraider_custom_base.json',
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\character\\enemy\\succubuswitch_custom_base.json',
    'hd\\character\\enemy\\succubuswitch_custom_base.json',
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\character\\enemy\\baalminion_custom_base.json',
    'hd\\character\\enemy\\baalminion_custom_base.json',
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\character\\enemy\\overseer_custom_base.json',
    'hd\\character\\enemy\\overseer_custom_base.json',
    true // overwrite any conflicts
  );

  // monprop.txt - Giving the uniques some skills
  const monpropFileName = 'global\\excel\\monprop.txt';
  const monprop = D2RMM.readTsv(monpropFileName);

  // Araneae
  monprop.rows.push({
    "Id": "arach_custom",
    "prop1 (H)": "aura",
    "par1 (H)": 115,
    "min1 (H)": 5,
    "max1 (H)": 5,
    "prop2 (H)": "gethit-skill",
    "par2 (H)": 92,
    "min2 (H)": 12,
    "max2 (H)": 12,
    "*eol\r": 0
  });

  // Rakanoth
  monprop.rows.push({
    "Id": "sandraider_custom",
    "prop1 (H)": "aura",
    "par1 (H)": 122,
    "min1 (H)": 5,
    "max1 (H)": 5,
    "*eol\r": 0
  });

  // Adria
  monprop.rows.push({
    "Id": "succubuswitch_custom",
    "prop1 (H)": "aura",
    "par1 (H)": 123,
    "min1 (H)": 1,
    "max1 (H)": 1,
    "prop2 (H)": "hit-skill",
    "par2 (H)": 56,
    "min2 (H)": 15,
    "max2 (H)": 8,
    "prop3 (H)": "hit-skill",
    "par3 (H)": 244,
    "min3 (H)": 20,
    "max3 (H)": 8,
    "*eol\r": 0
  });

  // Iskatu
  monprop.rows.push({
    "Id": "baalminion_custom",
    "prop1 (H)": "aura",
    "par1 (H)": 99,
    "min1 (H)": 20,
    "max1 (H)": 20,
    "*eol\r": 0
  });

  // Siegebreaker
  monprop.rows.push({
    "Id": "overseer_custom",
    "prop1 (H)": "aura",
    "par1 (H)": 98,
    "min1 (H)": 5,
    "max1 (H)": 5,
    "*eol\r": 0
  });

  D2RMM.writeTsv(monpropFileName, monprop);

  // monstersText.json
  const monstersTextJsonFileName = 'local\\lng\\strings\\monsters.json';
  const monstersTextJson = D2RMM.readJson(monstersTextJsonFileName);

  monstersTextJson.push(
    {
      "id": 96667,
      "Key": "Queen Araneae",
      "enUS": "Queen Araneae",
      "zhTW": "Queen Araneae",
      "deDE": "Queen Araneae",
      "esES": "Queen Araneae",
      "frFR": "Queen Araneae",
      "itIT": "Queen Araneae",
      "koKR": "Queen Araneae",
      "plPL": "Queen Araneae",
      "esMX": "Queen Araneae",
      "jaJP": "Queen Araneae",
      "ptBR": "Queen Araneae",
      "ruRU": "Queen Araneae",
      "zhCN": "Queen Araneae"
    }
  );

  monstersTextJson.push(
    {
      "id": 96668,
      "Key": "Rakanoth",
      "enUS": "Rakanoth",
      "zhTW": "Rakanoth",
      "deDE": "Rakanoth",
      "esES": "Rakanoth",
      "frFR": "Rakanoth",
      "itIT": "Rakanoth",
      "koKR": "Rakanoth",
      "plPL": "Rakanoth",
      "esMX": "Rakanoth",
      "jaJP": "Rakanoth",
      "ptBR": "Rakanoth",
      "ruRU": "Rakanoth",
      "zhCN": "Rakanoth"
    }
  );

  monstersTextJson.push(
    {
      "id": 96669,
      "Key": "Adria",
      "enUS": "Adria",
      "zhTW": "Adria",
      "deDE": "Adria",
      "esES": "Adria",
      "frFR": "Adria",
      "itIT": "Adria",
      "koKR": "Adria",
      "plPL": "Adria",
      "esMX": "Adria",
      "jaJP": "Adria",
      "ptBR": "Adria",
      "ruRU": "Adria",
      "zhCN": "Adria"
    }
  );

  monstersTextJson.push(
    {
      "id": 96670,
      "Key": "Iskatu",
      "enUS": "Iskatu",
      "zhTW": "Iskatu",
      "deDE": "Iskatu",
      "esES": "Iskatu",
      "frFR": "Iskatu",
      "itIT": "Iskatu",
      "koKR": "Iskatu",
      "plPL": "Iskatu",
      "esMX": "Iskatu",
      "jaJP": "Iskatu",
      "ptBR": "Iskatu",
      "ruRU": "Iskatu",
      "zhCN": "Iskatu"
    }
  );

  monstersTextJson.push(
    {
      "id": 96671,
      "Key": "Siegebreaker",
      "enUS": "Siegebreaker Assault Beast",
      "zhTW": "Siegebreaker Assault Beast",
      "deDE": "Siegebreaker Assault Beast",
      "esES": "Siegebreaker Assault Beast",
      "frFR": "Siegebreaker Assault Beast",
      "itIT": "Siegebreaker Assault Beast",
      "koKR": "Siegebreaker Assault Beast",
      "plPL": "Siegebreaker Assault Beast",
      "esMX": "Siegebreaker Assault Beast",
      "jaJP": "Siegebreaker Assault Beast",
      "ptBR": "Siegebreaker Assault Beast",
      "ruRU": "Siegebreaker Assault Beast",
      "zhCN": "Siegebreaker Assault Beast"
    }
  );


  D2RMM.writeJson(monstersTextJsonFileName, monstersTextJson);


  // treasureclassex.txt - Superunique custom drops
  const treasureclassexFileName = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFileName);

  treasureclassex.rows.push({
    "Treasure Class": "Custom Unique Items",
    "level": 85,
    "Picks": 1,
    "Unique": 800,
    "Set": 800,
    "Rare": 800,
    "Magic": 1024,
    "NoDrop": 0,
    "Item1": "weap81",
    "Prob1": 2,
    "Item2": "armo81",
    "Prob2": 1,
    "Item3": "weap84",
    "Prob3": 6,
    "Item4": "armo84",
    "Prob4": 3,
    "Item5": "weap87",
    "Prob5": 14,
    "Item6": "armo87",
    "Prob6": 7,
    "Item7": "Act 5 (H) Equip B",
    "Prob7": 500,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Custom Unique Misc",
    "level": 85,
    "Picks": 1,
    "NoDrop": 0,
    "Item1": "Jewelry C",
    "Prob1": 50,
    "Item2": "Perfect Gem",
    "Prob2": 30,
    "Item4": "Runes 17",
    "Prob4": 2,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Araneae(H) Elixir",
    "Picks": 1,
    "level": 85,
    "NoDrop": 200,
    "Item1": "el1",
    "Prob1": 1,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Araneae(H)",
    "Picks": -5,
    "level": 85,
    "NoDrop": 0,
    "Item1": "Araneae(H) Elixir",
    "Prob1": 1,
    "Item2": "Custom Unique Items",
    "Prob2": 1,
    "Item3": "Custom Unique Misc",
    "Prob3": 2,
    "Item4": "Sunder Charms",
    "Prob4": 1,
    "Unique": 800,
    "Set": 800,
    "Rare": 800,
    "Magic": 1024,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Rakanoth(H) Elixir",
    "Picks": 1,
    "level": 85,
    "NoDrop": 200,
    "Item1": "el2",
    "Prob1": 1,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Rakanoth(H)",
    "Picks": -5,
    "level": 85,
    "NoDrop": 0,
    "Item1": "Rakanoth(H) Elixir",
    "Prob1": 1,
    "Item2": "Custom Unique Items",
    "Prob2": 1,
    "Item3": "Custom Unique Misc",
    "Prob3": 2,
    "Item4": "Sunder Charms",
    "Prob4": 1,
    "Unique": 800,
    "Set": 800,
    "Rare": 800,
    "Magic": 1024,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Adria(H) Elixir",
    "Picks": 1,
    "level": 85,
    "NoDrop": 200,
    "Item1": "el3",
    "Prob1": 1,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Adria(H)",
    "Picks": -5,
    "level": 85,
    "NoDrop": 0,
    "Item1": "Adria(H) Elixir",
    "Prob1": 1,
    "Item2": "Custom Unique Items",
    "Prob2": 1,
    "Item3": "Custom Unique Misc",
    "Prob3": 2,
    "Item4": "Sunder Charms",
    "Prob4": 1,
    "Unique": 800,
    "Set": 800,
    "Rare": 800,
    "Magic": 1024,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Iskatu(H) Elixir",
    "Picks": 1,
    "level": 85,
    "NoDrop": 200,
    "Item1": "el4",
    "Prob1": 1,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Iskatu(H)",
    "Picks": -5,
    "level": 85,
    "NoDrop": 0,
    "Item1": "Iskatu(H) Elixir",
    "Prob1": 1,
    "Item2": "Custom Unique Items",
    "Prob2": 1,
    "Item3": "Custom Unique Misc",
    "Prob3": 2,
    "Item4": "Sunder Charms",
    "Prob4": 1,
    "Unique": 800,
    "Set": 800,
    "Rare": 800,
    "Magic": 1024,
    "*eol\r": 0
  });


  treasureclassex.rows.push({
    "Treasure Class": "Siegebreaker(H) Elixir",
    "Picks": 1,
    "level": 85,
    "NoDrop": 200,
    "Item1": "el5",
    "Prob1": 1,
    "*eol\r": 0
  });

  treasureclassex.rows.push({
    "Treasure Class": "Siegebreaker(H)",
    "Picks": -5,
    "level": 85,
    "NoDrop": 0,
    "Item1": "Siegebreaker(H) Elixir",
    "Prob1": 1,
    "Item2": "Custom Unique Items",
    "Prob2": 1,
    "Item3": "Custom Unique Misc",
    "Prob3": 2,
    "Item4": "Sunder Charms",
    "Prob4": 1,
    "Unique": 800,
    "Set": 800,
    "Rare": 800,
    "Magic": 1024,
    "*eol\r": 0
  });

  D2RMM.writeTsv(treasureclassexFileName, treasureclassex);

  // items.json
  const itemsFilename = 'hd\\items\\items.json';
  const items = D2RMM.readJson(itemsFilename);

  items.push({ 'el1': { 'asset': "potion/araneae_elixir" } });
  items.push({ 'el2': { 'asset': "potion/rakanoth_elixir" } });
  items.push({ 'el3': { 'asset': "potion/adria_elixir" } });
  items.push({ 'el4': { 'asset': "potion/iskatu_elixir" } });
  items.push({ 'el5': { 'asset': "potion/siegebreaker_elixir" } });

  D2RMM.writeJson(itemsFilename, items);

  // Copy Worldstone Shard and Worldstone.json files
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\araneae_elixir.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\araneae_elixir.sprite', //
    true // overwrite any conflicts
  );
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\araneae_elixir.lowend.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\araneae_elixir.lowend.sprite', //
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\items\\misc\\potion\\araneae_elixir.json', // 
    'hd\\items\\misc\\potion\\araneae_elixir.json', //
    true // overwrite any conflicts
  );

  // Copy Worldstone Shard and Worldstone.json files
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\rakanoth_elixir.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\rakanoth_elixir.sprite', //
    true // overwrite any conflicts
  );
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\rakanoth_elixir.lowend.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\rakanoth_elixir.lowend.sprite', //
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\items\\misc\\potion\\rakanoth_elixir.json', // 
    'hd\\items\\misc\\potion\\rakanoth_elixir.json', //
    true // overwrite any conflicts
  );

  // Copy Worldstone Shard and Worldstone.json files
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\adria_elixir.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\adria_elixir.sprite', //
    true // overwrite any conflicts
  );
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\adria_elixir.lowend.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\adria_elixir.lowend.sprite', //
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\items\\misc\\potion\\adria_elixir.json', // 
    'hd\\items\\misc\\potion\\adria_elixir.json', //
    true // overwrite any conflicts
  );

  // Copy Worldstone Shard and Worldstone.json files
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\iskatu_elixir.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\iskatu_elixir.sprite', //
    true // overwrite any conflicts
  );
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\iskatu_elixir.lowend.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\iskatu_elixir.lowend.sprite', //
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\items\\misc\\potion\\iskatu_elixir.json', // 
    'hd\\items\\misc\\potion\\iskatu_elixir.json', //
    true // overwrite any conflicts
  );

  // Copy Worldstone Shard and Worldstone.json files
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\siegebreaker_elixir.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\siegebreaker_elixir.sprite', //
    true // overwrite any conflicts
  );
  D2RMM.copyFile(
    'hd\\global\\ui\\items\\misc\\potion\\siegebreaker_elixir.lowend.sprite', // 
    'hd\\global\\ui\\items\\misc\\potion\\siegebreaker_elixir.lowend.sprite', //
    true // overwrite any conflicts
  );

  D2RMM.copyFile(
    'hd\\items\\misc\\potion\\siegebreaker_elixir.json', // 
    'hd\\items\\misc\\potion\\siegebreaker_elixir.json', //
    true // overwrite any conflicts
  );

  // misc.txt - Adding Worldstone Shard
  const miscFileName = 'global\\excel\\misc.txt';
  const misc = D2RMM.readTsv(miscFileName);

  misc.rows.forEach(row => {
    if (row["name"] === "Elixir") {

      misc.rows.push({
        ...row,
        'name': "Araneae's Elixir",
        'version': 100,
        'code': 'el1',
        'stat1': "",
        'calc1': "",
        'pSpell': -1,
        'namestr': "el1",
        'spelldesc': 1,
        'spelldescstr': 'CustomElixir',
        'spelldesccolor': 4
      });

      misc.rows.push({
        ...row,
        'name': "Rakanoth's Elixir",
        'version': 100,
        'code': 'el2',
        'stat1': "",
        'calc1': "",
        'pSpell': -1,
        'namestr': "el2",
        'spelldesc': 1,
        'spelldescstr': 'CustomElixir',
        'spelldesccolor': 4
      });

      misc.rows.push({
        ...row,
        'name': "Adria's Elixir",
        'version': 100,
        'code': 'el3',
        'stat1': "",
        'calc1': "",
        'pSpell': -1,
        'namestr': "el3",
        'spelldesc': 1,
        'spelldescstr': 'CustomElixir',
        'spelldesccolor': 4
      });

      misc.rows.push({
        ...row,
        'name': "Iskatu's Elixir",
        'version': 100,
        'code': 'el4',
        'stat1': "",
        'calc1': "",
        'pSpell': -1,
        'namestr': "el4",
        'spelldesc': 1,
        'spelldescstr': 'CustomElixir',
        'spelldesccolor': 4
      });

      misc.rows.push({
        ...row,
        'name': "Siegebreaker's Elixir",
        'version': 100,
        'code': 'el5',
        'stat1': "",
        'calc1': "",
        'pSpell': -1,
        'namestr': "el5",
        'spelldesc': 1,
        'spelldescstr': 'CustomElixir',
        'spelldesccolor': 4
      });
    }

    // Enable Amulet sockets
    if (row["code"] === "amu") {
      row["gemsockets"] = 1;
      row["gemapplytype"] = 1;
    }

  });

  D2RMM.writeTsv(miscFileName, misc);

  const itemtypesFileName = 'global\\excel\\itemtypes.txt';
  const itemtypes = D2RMM.readTsv(itemtypesFileName);

  // Enable Amulet and Ring sockets
  itemtypes.rows.forEach(row => {
    if (row["Code"] === "amul") {
      row["MaxSockets1"] = 1;
      row["MaxSockets2"] = 1;
      row["MaxSockets3"] = 1;
    }
  });

  D2RMM.writeTsv(itemtypesFileName, itemtypes);

  // item-names.json
  const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
  const itemNames = D2RMM.readJson(itemNamesFilename);

  itemNames.push(
    {
      "id": 92010,
      "Key": "el1",
      "enUS": "ÿcUAraneae's Elixir",
      "zhTW": "ÿcUAraneae's Elixir",
      "deDE": "ÿcUAraneae's Elixir",
      "esES": "ÿcUAraneae's Elixir",
      "frFR": "ÿcUAraneae's Elixir",
      "itIT": "ÿcUAraneae's Elixir",
      "koKR": "ÿcUAraneae's Elixir",
      "plPL": "ÿcUAraneae's Elixir",
      "esMX": "ÿcUAraneae's Elixir",
      "jaJP": "ÿcUAraneae's Elixir",
      "ptBR": "ÿcUAraneae's Elixir",
      "ruRU": "ÿcUAraneae's Elixir",
      "zhCN": "ÿcUAraneae's Elixir"
    }
  );

  itemNames.push(
    {
      "id": 92011,
      "Key": "el2",
      "enUS": "ÿcURakanoth's Elixir",
      "zhTW": "ÿcURakanoth's Elixir",
      "deDE": "ÿcURakanoth's Elixir",
      "esES": "ÿcURakanoth's Elixir",
      "frFR": "ÿcURakanoth's Elixir",
      "itIT": "ÿcURakanoth's Elixir",
      "koKR": "ÿcURakanoth's Elixir",
      "plPL": "ÿcURakanoth's Elixir",
      "esMX": "ÿcURakanoth's Elixir",
      "jaJP": "ÿcURakanoth's Elixir",
      "ptBR": "ÿcURakanoth's Elixir",
      "ruRU": "ÿcURakanoth's Elixir",
      "zhCN": "ÿcURakanoth's Elixir"
    }
  );

  itemNames.push(
    {
      "id": 92012,
      "Key": "el3",
      "enUS": "ÿcUAdria's Elixir",
      "zhTW": "ÿcUAdria's Elixir",
      "deDE": "ÿcUAdria's Elixir",
      "esES": "ÿcUAdria's Elixir",
      "frFR": "ÿcUAdria's Elixir",
      "itIT": "ÿcUAdria's Elixir",
      "koKR": "ÿcUAdria's Elixir",
      "plPL": "ÿcUAdria's Elixir",
      "esMX": "ÿcUAdria's Elixir",
      "jaJP": "ÿcUAdria's Elixir",
      "ptBR": "ÿcUAdria's Elixir",
      "ruRU": "ÿcUAdria's Elixir",
      "zhCN": "ÿcUAdria's Elixir"
    }
  );

  itemNames.push(
    {
      "id": 92013,
      "Key": "el4",
      "enUS": "ÿcUIskatu's Elixir",
      "zhTW": "ÿcUIskatu's Elixir",
      "deDE": "ÿcUIskatu's Elixir",
      "esES": "ÿcUIskatu's Elixir",
      "frFR": "ÿcUIskatu's Elixir",
      "itIT": "ÿcUIskatu's Elixir",
      "koKR": "ÿcUIskatu's Elixir",
      "plPL": "ÿcUIskatu's Elixir",
      "esMX": "ÿcUIskatu's Elixir",
      "jaJP": "ÿcUIskatu's Elixir",
      "ptBR": "ÿcUIskatu's Elixir",
      "ruRU": "ÿcUIskatu's Elixir",
      "zhCN": "ÿcUIskatu's Elixir"
    }
  );

  itemNames.push(
    {
      "id": 92014,
      "Key": "el5",
      "enUS": "ÿcUSiegebreaker's Elixir",
      "zhTW": "ÿcUSiegebreaker's Elixir",
      "deDE": "ÿcUSiegebreaker's Elixir",
      "esES": "ÿcUSiegebreaker's Elixir",
      "frFR": "ÿcUSiegebreaker's Elixir",
      "itIT": "ÿcUSiegebreaker's Elixir",
      "koKR": "ÿcUSiegebreaker's Elixir",
      "plPL": "ÿcUSiegebreaker's Elixir",
      "esMX": "ÿcUSiegebreaker's Elixir",
      "jaJP": "ÿcUSiegebreaker's Elixir",
      "ptBR": "ÿcUSiegebreaker's Elixir",
      "ruRU": "ÿcUSiegebreaker's Elixir",
      "zhCN": "ÿcUSiegebreaker's Elixir"
    }
  );

  itemNames.push(
    {
      "id": 92016,
      "Key": "Enigmatic Glamour",
      "enUS": "Enigmatic Glamour",
      "zhTW": "Enigmatic Glamour",
      "deDE": "Enigmatic Glamour",
      "esES": "Enigmatic Glamour",
      "frFR": "Enigmatic Glamour",
      "itIT": "Enigmatic Glamour",
      "koKR": "Enigmatic Glamour",
      "plPL": "Enigmatic Glamour",
      "esMX": "Enigmatic Glamour",
      "jaJP": "Enigmatic Glamour",
      "ptBR": "Enigmatic Glamour",
      "ruRU": "Enigmatic Glamour",
      "zhCN": "Enigmatic Glamour"
    }
  );

  D2RMM.writeJson(itemNamesFilename, itemNames);

  // itemmodifiersJson - Modify Diablo Soul text
  const itemmodifiersJsonFileName = 'local\\lng\\strings\\item-modifiers.json';
  const itemmodifiersJson = D2RMM.readJson(itemmodifiersJsonFileName);

  itemmodifiersJson.push(
    {
      "id": 92015,
      "Key": "CustomElixir",
      "enUS": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "zhTW": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "deDE": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "esES": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "frFR": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "itIT": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "koKR": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "plPL": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "esMX": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "jaJP": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "ptBR": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "ruRU": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine",
      "zhCN": "talisman ever known in Sanctuary. The Torch is destroyed in the process.\nCombine the elixirs with a Hellfire Torch to conjure one of the most divine"
    }
  );

  itemmodifiersJson.push(
    {
      "id": 92017,
      "Key": "EnemyAllElemResistanceMinus",
      "enUS": "-%d%% to Enemy All Resistance",
      "zhTW": "-%d%% to Enemy All Resistance",
      "deDE": "-%d%% to Enemy All Resistance",
      "esES": "-%d%% to Enemy All Resistance",
      "frFR": "-%d%% to Enemy All Resistance",
      "itIT": "-%d%% to Enemy All Resistance",
      "koKR": "-%d%% to Enemy All Resistance",
      "plPL": "-%d%% to Enemy All Resistance",
      "esMX": "-%d%% to Enemy All Resistance",
      "jaJP": "-%d%% to Enemy All Resistance",
      "ptBR": "-%d%% to Enemy All Resistance",
      "ruRU": "-%d%% to Enemy All Resistance",
      "zhCN": "-%d%% to Enemy All Resistance"
    });

  D2RMM.writeJson(itemmodifiersJsonFileName, itemmodifiersJson);

  // cubemain.txt - Adding Recipes
  const cubemainFileName = 'global\\excel\\cubemain.txt';
  const cubemain = D2RMM.readTsv(cubemainFileName);

  cubemain.rows.push({
    'description': 'Crafting with Elixirs',
    'enabled': 1,
    'version': 100,
    'numinputs': 6,
    'input 1': 'el1',
    'input 2': 'el2',
    'input 3': 'el3',
    'input 4': 'el4',
    'input 5': 'el5',
    'input 6': 'Hellfire Torch',
    'output': 'Enigmatic Glamour',
    'lvl': 99,
    '*eol\r': 0
  });

  D2RMM.writeTsv(cubemainFileName, cubemain);

  // uniqueitems.txt - Adding Recipes
  const uniqueitemsFileName = 'global\\excel\\uniqueitems.txt';
  const uniqueitems = D2RMM.readTsv(uniqueitemsFileName);

  let uniqueitemsID = Math.max(...uniqueitems.rows.map((row) => row['*ID']));

  uniqueitems.rows.push({
    'index': 'Enigmatic Glamour',
    "*ID": (uniqueitemsID = uniqueitemsID + 1),
    'version': 100,
    'nolimit': 1,
    'rarity': 1,
    'lvl': 1,
    'lvl req': 90,
    'code': 'amu',
    '*ItemName': 'Amulet',
    'cost mult': 3,
    'cost add': 5000,
    'prop1': 'oskill',
    'par1': 'Teleport',
    'min1': 1,
    'max1': 1,
    'prop2': 'hit-skill',
    'par2': 'Amplify Damage',
    'min2': 10,
    'max2': 10,
    'prop3': 'addxp',
    'min3': 7,
    'max3': 10,
    'prop4': 'swing3',
    'min4': 10,
    'max4': 10,
    'prop5': 'nofreeze',
    'min5': 1,
    'max5': 1,
    'prop6': 'randclassskill_amu',
    'min6': 0,
    'max6': 6,
    'prop7': 'sock',
    'min7': 1,
    'max7': 1,
    'prop8': 'pierce-all-elem',
    'min8': 15,
    'max8': 15,
    'prop9': 'sock_amu', // dummy stat for sockets
    'min9': 1,
    'max9': 1,
    '*eol\r': 0
  });

  D2RMM.writeTsv(uniqueitemsFileName, uniqueitems);

  // ItemStatCostFile - Adding corruption stats
  const itemStatCostFileName = 'global\\excel\\itemstatcost.txt';
  const itemstatcost = D2RMM.readTsv(itemStatCostFileName);

  let itemstatcostID = Math.max(...itemstatcost.rows.map((row) => row['*ID']));

  itemstatcost.rows.push({
    'Stat': 'item_numsockets_amu',
    '*ID': (itemstatcostID = itemstatcostID + 1),
    'Signed': 1,
    'Send Bits': 12,
    'MinAccr': 0,
    'Add': 0,
    'Multiply': 2,
    '1.09-Save Bits': 8,
    '1.09-Save Add': 0,
    'Save Bits': 8,
    'Save Add': 0,
    'descpriority': 1,
    'descfunc': 19,
    'descstrpos': 'Socketable',
    'descstrneg': 'Socketable',
    '*eol\r': 0
  });

  const dgrpMaxID = Math.max(...itemstatcost.rows.map((row) => row['dgrp']));

  itemstatcost.rows.forEach(row => {
    if (row["Stat"] === "passive_fire_pierce") {
      itemstatcost.rows.push({
        ...row,
        "Stat": "passive_all_elem_pierce",
        '*ID': (itemstatcostID = itemstatcostID + 1)
      });
    }


    if (row["Stat"] === "passive_fire_pierce" || row["Stat"] === "passive_ltng_pierce" || row["Stat"] === "passive_cold_pierce" || row["Stat"] === "passive_pois_pierce") {
      row["dgrp"] = (dgrpMaxID + 1);
      row["dgrpfunc"] = 19;
      row["dgrpstrpos"] = "EnemyAllElemResistanceMinus";
      row["dgrpstrneg"] = "EnemyAllElemResistanceMinus";
    }
  });

  D2RMM.writeTsv(itemStatCostFileName, itemstatcost);

  // properties.txt - Adding Recipes
  const propertiesFileName = 'global\\excel\\properties.txt';
  const properties = D2RMM.readTsv(propertiesFileName);

  properties.rows.forEach(row => {
    if (row["code"] === "randclassskill") {
      properties.rows.push({
        ...row,
        "code": "randclassskill_amu",
        "val1": 2
      });
    }

    if (row["code"] === "allskills") {
      properties.rows.push({
        ...row,
        "code": "sock_amu",
        "stat1": "item_numsockets_amu"
      });
    }

    if (row["code"] === "pierce-fire") {
      properties.rows.push({
        ...row,
        "code": "pierce-all-elem",
        "func1": 1,
        "stat1": "passive_fire_pierce",
        "func2": 1,
        "stat2": "passive_ltng_pierce",
        "func3": 1,
        "stat3": "passive_cold_pierce",
        "func4": 1,
        "stat4": "passive_pois_pierce"
      });
    }

  });

  D2RMM.writeTsv(propertiesFileName, properties);
}