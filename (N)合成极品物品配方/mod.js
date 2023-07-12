const cubemainFilename = "global\\excel\\cubemain.txt";
const cubemain = D2RMM.readTsv(cubemainFilename);
// 做符合原版的极品物品 Make high-quality items that match the original version

// pre= 为 global\excel\magicprefix.txt 对应词缀行号-2
// suf= 为 global\excel\magicsuffix.txt 对应词缀行号-2
const rName = {
  'r01': "el(01)",
  'r02': "eld(02)",
  'r03': "tir(03)",
  'r04': "nef(04)",
  'r05': "eth(05)",
  'r06': "ith(06)",
  'r07': "tal(07)",
  'r08': "ral(08)",
  'r09': "ort(09)",
  'r10': "thul(10)",
  'r11': "amn(11)",
  'r12': "sol(12)",
  'r13': "shael(13)",
  'r14': "dol(14)",
  'r15': "hel(15)",
  'r16': "io(16)",
  'r17': "lum(17)",
  'r18': "ko(18)",
  'r19': "fal(19)",
  'r20': "lem(20)",
  'r21': "pul(21)",
  'r22': "um(22)",
  'r23': "mal(23)",
  'r24': "ist(24)",
  'r25': "gul(25)",
  'r26': "vex(26)",
  'r27': "ohm(27)",
  'r28': "lo(28)",
  'r29': "sur(29)",
  'r30': "ber(30)",
  'r31': "jah(31)",
  'r32': "cham(32)",
  'r33': "zod(33)"
}
const baseRecipe = {
  enabled: 1,
  version: 100,
  '*eol\r': 0,
};

const jewRecipe = {
  ...baseRecipe,
  description: 'Magic jew - Increased Attack Speed 15',
  numinputs: 6,
  lvl: 85,
  'input 1': `"jew,rar,qty=3"`,
  'input 4': 'r32',
};

// 15攻速31-40ed蓝色珠宝(红白珠)
if (config.jew15sp40ed) {
  cubemain.rows.push({
    ...jewRecipe,
    description: `${jewRecipe.description} Enhanced Damage: 31-40`,
    'input 2': 'r15',
    'input 3': 'r27',
    output: `"jew,mag,pre=202,suf=171"`
  });
}

// 15攻速11-15全抗蓝色珠宝
if (config.jew15sp15res) {
  cubemain.rows.push({
    ...jewRecipe,
    description: `${jewRecipe.description} to All Resistances: 12-15`,
    'input 2': 'r15',
    'input 3': 'r22',
    output: `"jew,mag,pre=337,suf=171"`
  });
}

// 15攻速16-30火炕蓝色珠宝(安头珠)
if (config.jew15sp30fire) {
  cubemain.rows.push({
    ...jewRecipe,
    description: `${jewRecipe.description} Fire Resist: 16-30`,
    'input 2': 'r15',
    'input 3': 'r8',
    output: `"jew,mag,pre=376,suf=171"`
  });
}

// 合成马拉
if (config.mara3) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `6 unique Amulet -> Mara's Kaleidoscope`,
    numinputs: 6,
    lvl: 85,
    'input 1': `"amu,uni,qty=6"`,
    output: `Mara's Kaleidoscope`
  });
}

// 合成乔丹
if (config.soj3) {
  cubemain.rows.push({
    ...baseRecipe,
    description: `6 unique ring -> The Stone of Jordan`,
    numinputs: 6,
    lvl: 85,
    'input 1': `"rin,uni,qty=6"`,
    output: `The Stone of Jordan`
  });
}


if (config.torchToSmallCharm) {
  cubemain.rows.push({
    ...baseRecipe,
    description: '1 Torch -> smallCharm3-5res16-20lift + smallCharm1-3max10-20ar16-20lift + smallCharm13-17mana16-20lift',
    numinputs: 4,
    lvl: 85,
    'input 1': `"cm2,uni,qty=1"`,
    'input 2': `"cm1,qty=3"`,
    output: `"cm1,mag,pre=322,suf=349"`, // smallCharm3-5res16-20lift
    'output b': `"cm1,mag,pre=256,suf=349"`, // smallCharm1-3max10-20ar16-20lift
    'output c': `"cm1,mag,pre=303,suf=349"` // smallCharm13-17mana16-20lift
  });
}


if (config.jpBlue) {
  const jpBaseRecipe = {
    ...baseRecipe,
    plvl: 100
  }
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + 3 x mpot -> mag circA1',
    numinputs: 4,
    'input 1': 'circ',
    'input 2': `"mpot,qty=3"`,
    output: `"usetype,mag,eth,suf=357,pre=422"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'phlm + 3 x mpot -> mag phlm',
    numinputs: 4,
    'input 1': 'phlm',
    'input 2': `"mpot,qty=3"`,
    output: `"usetype,mag,suf=320,pre=422"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'tors + 3 x mpot -> mag tors',
    numinputs: 4,
    'input 1': 'tors',
    'input 2': `"mpot,qty=3"`,
    output: `"usetype,mag,eth,suf=320,pre=422"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'shld + 3 x mpot -> mag shld',
    numinputs: 4,
    'input 1': 'shld',
    'input 2': `"mpot,qty=3"`,
    output: `"usetype,mag,eth,suf=173,pre=422"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'glov + r01 + r31 -> mag glov ama 1',
    numinputs: 3,
    'input 1': 'glov',
    'input 2': 'r01',
    'input 3': 'r31',
    output: `"usetype,mag,suf=170,pre=435"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r01 + r32 -> mag circ ama',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r01',
    'input 3': 'r32',
    output: `"usetype,mag,pre=438,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'glov + r01 + r33 -> mag glov ama 2',
    numinputs: 3,
    'input 1': 'glov',
    'input 2': 'r01',
    'input 3': 'r33',
    output: `"usetype,mag,suf=170,pre=441"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r02 + r31 -> mag circ ass 1',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r02',
    'input 3': 'r31',
    output: `"usetype,mag,suf=175,pre=507,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r02 + r32 -> mag circ ass 2',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r02',
    'input 3': 'r32',
    output: `"usetype,mag,pre=510,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r02 + r33 -> mag circ ass 3',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r02',
    'input 3': 'r33',
    output: `"usetype,mag,pre=513,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'glov + r02 + r33 -> mag glov ass',
    numinputs: 3,
    'input 1': 'glov',
    'input 2': 'r02',
    'input 3': 'r33',
    output: `"usetype,mag,suf=170,pre=513"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r03 + r31 -> mag circ nec 1',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r03',
    'input 3': 'r31',
    output: `"usetype,mag,suf=175,pre=459,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r03 + r32 -> mag circ nec 2',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r03',
    'input 3': 'r32',
    output: `"usetype,mag,suf=175,pre=462,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r03 + r33 -> mag circ nec 3',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r03',
    'input 3': 'r33',
    output: `"usetype,mag,suf=175,pre=465,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'phlm + r04 + r31 -> mag phlm bar 1',
    numinputs: 3,
    'input 1': 'phlm',
    'input 2': 'r04',
    'input 3': 'r31',
    output: `"usetype,mag,pre=483,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'phlm + r04 + r32 -> mag phlm bar 2',
    numinputs: 3,
    'input 1': 'phlm',
    'input 2': 'r04',
    'input 3': 'r32',
    output: `"usetype,mag,pre=486,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'phlm + r04 + r33 -> mag phlm bar 3',
    numinputs: 3,
    'input 1': 'phlm',
    'input 2': 'r04',
    'input 3': 'r33',
    output: `"usetype,mag,pre=489,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r05 + r31 -> mag circ pal 1',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r05',
    'input 3': 'r31',
    output: `"usetype,mag,pre=471,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r05 + r32 -> mag circ pal 2',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r05',
    'input 3': 'r32',
    output: `"usetype,mag,pre=474,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r05 + r33 -> mag circ pal 3',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r05',
    'input 3': 'r33',
    output: `"usetype,mag,pre=477,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r06 + r31 -> mag circ sor 1',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r06',
    'input 3': 'r31',
    output: `"usetype,mag,suf=175,pre=447,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r06 + r32 -> mag circ sor 2',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r06',
    'input 3': 'r32',
    output: `"usetype,mag,suf=175,pre=450,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r06 + r33 -> mag circ sor 3',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r06',
    'input 3': 'r33',
    output: `"usetype,mag,suf=175,pre=453,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r07 + r31 -> mag circ dru 1',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r07',
    'input 3': 'r31',
    output: `"usetype,mag,pre=495,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r07 + r32 -> mag circ dru 2',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r07',
    'input 3': 'r32',
    output: `"usetype,mag,pre=498,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'circ + r07 + r33 -> mag circ dru 3',
    numinputs: 3,
    'input 1': 'circ',
    'input 2': 'r07',
    'input 3': 'r33',
    output: `"usetype,mag,suf=175,pre=501,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'pelt + r07 + r31 -> mag pelt dru 1',
    numinputs: 3,
    'input 1': 'pelt',
    'input 2': 'r07',
    'input 3': 'r31',
    output: `"usetype,mag,pre=495,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'pelt + r07 + r32 -> mag pelt dru 2',
    numinputs: 3,
    'input 1': 'pelt',
    'input 2': 'r07',
    'input 3': 'r32',
    output: `"usetype,mag,pre=498,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'pelt + r07 + r33 -> mag pelt dru 3',
    numinputs: 3,
    'input 1': 'pelt',
    'input 2': 'r07',
    'input 3': 'r33',
    output: `"usetype,mag,pre=501,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r01 + r32 -> mag amul ama',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r01',
    'input 3': 'r32',
    output: `"usetype,mag,pre=438"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r02 + r31 -> mag amul ass 1',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r02',
    'input 3': 'r31',
    output: `"usetype,mag,suf=174,pre=507"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r02 + r32 -> mag amul ass 2',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r02',
    'input 3': 'r32',
    output: `"usetype,mag,pre=510"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r02 + r33 -> mag amul ass 3',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r02',
    'input 3': 'r33',
    output: `"usetype,mag,pre=513"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r03 + r31 -> mag amul nec 1',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r03',
    'input 3': 'r31',
    output: `"usetype,mag,suf=174,pre=459"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r03 + r32 -> mag amul nec 2',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r03',
    'input 3': 'r32',
    output: `"usetype,mag,suf=174,pre=462"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r03 + r33 -> mag amul nec 3',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r03',
    'input 3': 'r33',
    output: `"usetype,mag,suf=174,pre=465"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r04 + r32 -> mag amul bar 1',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r04',
    'input 3': 'r32',
    output: `"usetype,mag,pre=486"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r04 + r33 -> mag amul bar 2',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r04',
    'input 3': 'r33',
    output: `"usetype,mag,pre=489"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r05 + r31 -> mag amul pal 1',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r05',
    'input 3': 'r31',
    output: `"usetype,mag,pre=471"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r05 + r32 -> mag amul pal 2',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r05',
    'input 3': 'r32',
    output: `"usetype,mag,pre=474"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r05 + r33 -> mag amul pal 3',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r05',
    'input 3': 'r33',
    output: `"usetype,mag,pre=477"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r06 + r31 -> mag amul sor 1',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r06',
    'input 3': 'r31',
    output: `"usetype,mag,suf=174,pre=447"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r06 + r32 -> mag amul sor 2',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r06',
    'input 3': 'r32',
    output: `"usetype,mag,suf=174,pre=450"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r06 + r33 -> mag amul sor 3',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r06',
    'input 3': 'r33',
    output: `"usetype,mag,suf=174,pre=453"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r07 + r31 -> mag amul dru 1',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r07',
    'input 3': 'r31',
    output: `"usetype,mag,pre=495"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r07 + r32 -> mag amul dru 2',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r07',
    'input 3': 'r32',
    output: `"usetype,mag,pre=498"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'amul + r07 + r33 -> mag amul dru 3',
    numinputs: 3,
    'input 1': 'amul',
    'input 2': 'r07',
    'input 3': 'r33',
    output: `"usetype,mag,suf=174,pre=501"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'orb + r06 + r31 -> mag orb sor 1',
    numinputs: 3,
    'input 1': 'orb',
    'input 2': 'r06',
    'input 3': 'r31',
    output: `"usetype,mag,suf=175,pre=447,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'orb + r06 + r32 -> mag orb sor 2',
    numinputs: 3,
    'input 1': 'orb',
    'input 2': 'r06',
    'input 3': 'r32',
    output: `"usetype,mag,suf=175,pre=450,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'orb + r06 + r33 -> mag orb sor 3',
    numinputs: 3,
    'input 1': 'orb',
    'input 2': 'r06',
    'input 3': 'r33',
    output: `"usetype,mag,suf=175,pre=453,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'staf + r06 + r31 -> mag staf sor 1',
    numinputs: 3,
    'input 1': 'staf',
    'input 2': 'r06',
    'input 3': 'r31',
    output: `"usetype,mag,suf=175,pre=447,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'staf + r06 + r32 -> mag staf sor 2',
    numinputs: 3,
    'input 1': 'staf',
    'input 2': 'r06',
    'input 3': 'r32',
    output: `"usetype,mag,suf=175,pre=450,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'staf + r06 + r33 -> mag staf sor 3',
    numinputs: 3,
    'input 1': 'staf',
    'input 2': 'r06',
    'input 3': 'r33',
    output: `"usetype,mag,suf=175,pre=453,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'head + r03 + r31 -> mag head nec 1',
    numinputs: 3,
    'input 1': 'head',
    'input 2': 'r03',
    'input 3': 'r31',
    output: `"usetype,mag,suf=173,pre=459,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'head + r03 + r32 -> mag head nec 2',
    numinputs: 3,
    'input 1': 'head',
    'input 2': 'r03',
    'input 3': 'r32',
    output: `"usetype,mag,suf=173,pre=462,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'head + r03 + r33 -> mag head nec 3',
    numinputs: 3,
    'input 1': 'head',
    'input 2': 'r03',
    'input 3': 'r33',
    output: `"usetype,mag,suf=173,pre=465,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'wand + r03 + r31 -> mag wand nec 1',
    numinputs: 3,
    'input 1': 'wand',
    'input 2': 'r03',
    'input 3': 'r31',
    output: `"usetype,mag,suf=175,pre=459,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'wand + r03 + r32 -> mag wand nec 2',
    numinputs: 3,
    'input 1': 'wand',
    'input 2': 'r03',
    'input 3': 'r32',
    output: `"usetype,mag,suf=175,pre=462,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'wand + r03 + r33 -> mag wand nec 3',
    numinputs: 3,
    'input 1': 'wand',
    'input 2': 'r03',
    'input 3': 'r33',
    output: `"usetype,mag,suf=175,pre=465,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'h2h + r02 + r31 -> mag h2h ass 1',
    numinputs: 3,
    'input 1': 'h2h',
    'input 2': 'r02',
    'input 3': 'r31',
    output: `"usetype,mag,pre=507,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'h2h + r02 + r32 -> mag h2h ass 2',
    numinputs: 3,
    'input 1': 'h2h',
    'input 2': 'r02',
    'input 3': 'r32',
    output: `"usetype,mag,pre=510,sock=2"`
  });
  cubemain.rows.push({
    ...jpBaseRecipe,
    description: 'h2h + r02 + r33 -> mag h2h ass 3',
    numinputs: 3,
    'input 1': 'h2h',
    'input 2': 'r02',
    'input 3': 'r33',
    output: `"usetype,mag,pre=513,sock=2"`
  });
}


D2RMM.writeTsv(cubemainFilename, cubemain);
