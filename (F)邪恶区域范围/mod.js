// 地图的编号请参考levels.txt文件
switch (config.zone_select) {
  case 'mod_all_map':
    D2RMM.copyFile('zoneAllMap', 'hd\\global\\excel', true);
    break;
  case 'mod_fire_map':
    D2RMM.copyFile('zoneFireMap', 'hd\\global\\excel', true);
    break;
  case 'mod_all_ActMap':
    D2RMM.copyFile('zoneAllActMap', 'hd\\global\\excel', true);
    break;
  case 'mod_4_map':
    D2RMM.copyFile('zone4Map', 'hd\\global\\excel', true);
    break;
  case 'zone3allMap':
    D2RMM.copyFile('zone3allMap', 'hd\\global\\excel', true);
    break;
  case 'zoneMfMap':
    D2RMM.copyFile('zoneMfMap', 'hd\\global\\excel', true);
    break;
  case 'zone4allMap':
    D2RMM.copyFile('zone4allMap', 'hd\\global\\excel', true);
    break;
  case 'mod_only_a1':
    D2RMM.copyFile('zoneOnlyA1', 'hd\\global\\excel', true);
    break;
  case 'mod_only_a2':
    D2RMM.copyFile('zoneOnlyA2', 'hd\\global\\excel', true);
    break;
  case 'mod_only_a3':
    D2RMM.copyFile('zoneOnlyA3', 'hd\\global\\excel', true);
    break;
  case 'mod_only_a4':
    D2RMM.copyFile('zoneOnlyA4', 'hd\\global\\excel', true);
    break;
  case 'mod_only_a5':
    D2RMM.copyFile('zoneOnlyA5', 'hd\\global\\excel', true);
    break;

}