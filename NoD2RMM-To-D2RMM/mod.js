if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.4) {
  D2RMM.error('Requires D2RMM version 1.4 or higher.');
  return;
}
D2RMM.copyFile(
  'MyMod', // <mod folder>
  '', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data
  true // overwrite any conflicts
);