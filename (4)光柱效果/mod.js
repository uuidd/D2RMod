const lightComponent = {
  particle: {
    path: "data/hd/vfx/particles/overlays/object/horadric_light/fx_horadric_light.particles"
  },
  entities: [
    {
      type: "Entity",
      name: "droplight",
      id: 9999996974,
      components: [
        {
          type: "TransformDefinitionComponent",
          name: "component_transform1",
          position: {
            x: 0.0,
            y: 0.0,
            z: 0.0
          },
          orientation: {
            x: 0.0,
            y: 0.0,
            z: 0.0,
            w: 1.0
          },
          scale: {
            x: 1.0,
            y: 1.0,
            z: 1.0
          },
          inheritOnlyPosition: false
        },
        {
          type: "VfxDefinitionComponent",
          name: "entity_vfx_gousemyideaandshareyourfilthymods",
          filename: "data/hd/vfx/particles/overlays/object/horadric_light/fx_horadric_light.particles",
          hardKillOnDestroy: false
        }
      ]
    },
    {
      type: "Entity",
      name: "entity_root",
      id: 1079187010,
      components: [
        {
          type: "VfxDefinitionComponent",
          name: "entity_root_VfxDefinition",
          filename: "data/hd/vfx/particles/overlays/paladin/aura_fanatic/aura_fanatic.particles",
          hardKillOnDestroy: false
        }
      ]
    },
    {
      type: "Entity",
      name: "droplight",
      id: 9999996974,
      components: [
        {
          type: "TransformDefinitionComponent",
          name: "component_transform1",
          position: {
            x: 0.0,
            y: 0.0,
            z: 0.0
          },
          orientation: {
            x: 0.0,
            y: 0.0,
            z: 0.0,
            w: 1.0
          },
          scale: {
            x: 1.0,
            y: 1.0,
            z: 1.0
          },
          inheritOnlyPosition: false
        },
        {
          type: "VfxDefinitionComponent",
          name: "entity_vfx_gousemyideaandshareyourfilthymods",
          filename: "data/hd/vfx/particles/overlays/common/valkyriestart/valkriestart_overlay.particles",
          hardKillOnDestroy: false
        }
      ]
    }
  ]
};

const gemSize = ['chipped_', 'flawed_', '', 'flawless_', 'perfect_'];
const gemType = ['amethyst', 'diamond', 'emerald', 'ruby', 'saphire', 'topaz', 'skull'];

if (config.gem) {
  gemSize.forEach((g) => {
    gemType.forEach((gt) => {
      const gemFileName = `hd\\items\\misc\\gem\\${g}${gt}.json`;
      const gem = D2RMM.readJson(gemFileName);
      gem.dependencies.particles.push(lightComponent.particle);
      gem.entities = gem.entities.concat(lightComponent.entities);
      D2RMM.writeJson(gemFileName, gem);
    });
  });
}

if (config.gemStack) {
  gemSize.forEach((g) => {
    gemType.forEach((gt) => {
      const gemFileName = `hd\\items\\misc\\gem\\${g}${gt}_stack.json`;
      const gem = D2RMM.readJson(gemFileName);
      gem.dependencies.particles.push(lightComponent.particle);
      gem.entities = gem.entities.concat(lightComponent.entities);
      D2RMM.writeJson(gemFileName, gem);
    });
  });
}

// const runes = ['amn_rune', 'ber_rune', 'cham_rune', 'dol_rune', 'el_rune',
//   'eld_rune', 'eth_rune', 'fal_rune', 'gul_rune', 'hel_rune', 'io_rune',
//   'ist_rune', 'ith_rune', 'jah_rune', 'ko_rune', 'lem_rune', 'lo_rune',
//   'lum_rune', 'mal_rune', 'nef_rune', 'ohm_rune', 'ort_rune', 'pul_rune',
//   'ral_rune', 'shael_rune', 'sol_rune', 'sur_rune', 'tal_rune', 'thul_rune',
//   'tir_rune', 'um_rune', 'vex_rune', 'zod_rune'];
const runes = ['ber_rune', 'cham_rune', 'gul_rune', 'ist_rune', 'lo_rune',
  'mal_rune', 'ohm_rune','pul_rune', 'sur_rune', 'um_rune', 'vex_rune', 'zod_rune'];

if (config.rune) {
  runes.forEach((r) => {
    const runeFileName = `hd\\items\\misc\\rune\\${r}.json`;
    const rune = D2RMM.readJson(runeFileName);
    rune.dependencies.particles.push(lightComponent.particle);
    rune.entities = rune.entities.concat(lightComponent.entities);
    D2RMM.writeJson(runeFileName, rune);
  });
}

if (config.runeStack) {
  runes.forEach((r) => {
    const runeFileName = `hd\\items\\misc\\rune\\${r}_stack.json`;
    const rune = D2RMM.readJson(runeFileName);
    rune.dependencies.particles.push(lightComponent.particle);
    rune.entities = rune.entities.concat(lightComponent.entities);
    D2RMM.writeJson(runeFileName, rune);
  });
}

if (config.charm) {
  // const charms = ['charm_small', 'charm_medium', 'charm_large'];
  const charms = ['charm_small', 'charm_large'];
  charms.forEach((c) => {
    const charmFileName = `hd\\items\\misc\\charm\\${c}.json`;
    const charm = D2RMM.readJson(charmFileName);
    charm.dependencies.particles.push(lightComponent.particle);
    charm.entities = charm.entities.concat(lightComponent.entities);
    D2RMM.writeJson(charmFileName, charm);
  });
}

if (config.key) {
  const keyFileName = 'hd\\items\\misc\\key\\mephisto_key.json';
  const key = D2RMM.readJson(keyFileName);
  key.dependencies.particles.push(lightComponent.particle);
  key.entities = key.entities.concat(lightComponent.entities);
  for (var i = 1; i <= 3; i++) {
    const index = i === 1 ? '' : `${i}`;
    const keySaveFileName = `hd\\items\\misc\\key\\mephisto_key${index}.json`;
    D2RMM.writeJson(keySaveFileName, key);
  }
}
