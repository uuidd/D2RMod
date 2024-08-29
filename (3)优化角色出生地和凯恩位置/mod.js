
if (config.move_cain) {
    // 复制act5的ds1.bin文件
    D2RMM.copyFile(
        'global\\tiles\\expansion\\combined_ds1.bin',
        'global\\tiles\\expansion\\combined_ds1.bin',
        true // 覆盖所有冲突
    );

    // 迪卡·凯恩
    D2RMM.copyFile(
        'global\\tiles\\expansion\\town\\townwest.ds1',
        'global\\tiles\\expansion\\town\\townwest.ds1',
        true // 覆盖所有冲突
    );
}

if (config.act2) {
    // 复制act2的ds1.bin文件
    D2RMM.copyFile(
        'global\\tiles\\act2\\combined_ds1.bin',
        'global\\tiles\\act2\\combined_ds1.bin',
        true // 覆盖所有冲突
    );

    // 第二幕城镇
    D2RMM.copyFile(
        'global\\tiles\\act2\\town\\lutn.ds1',
        'global\\tiles\\act2\\town\\lutn.ds1',
        true // 覆盖所有冲突
    );

    D2RMM.copyFile(
        'global\\tiles\\act2\\town\\lutw.ds1',
        'global\\tiles\\act2\\town\\lutw.ds1',
        true // 覆盖所有冲突
    );
}

if (config.act3) {
    // 复制act3的ds1.bin文件
    D2RMM.copyFile(
        'global\\tiles\\act3\\combined_ds1.bin',
        'global\\tiles\\act3\\combined_ds1.bin',
        true // 覆盖所有冲突
    );

    // 第三幕城镇
    D2RMM.copyFile(
        'global\\tiles\\act3\\docktown\\docktown3.ds1',
        'global\\tiles\\act3\\docktown\\docktown3.ds1',
        true // 覆盖所有冲突
    );
}