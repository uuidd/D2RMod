
if (config.move_cain) {
    // Copy the ds1.bin files for act 5
    D2RMM.copyFile(
        'global\\tiles\\expansion\\combined_ds1.bin',
        'global\\tiles\\expansion\\combined_ds1.bin',
        true // overwrite any conflicts
    );

    // Deckard Cain
    D2RMM.copyFile(
        'global\\tiles\\expansion\\town\\townwest.ds1',
        'global\\tiles\\expansion\\town\\townwest.ds1',
        true // overwrite any conflicts
    );
}

if (config.act2) {
    // Copy the ds1.bin files for act 2
    D2RMM.copyFile(
        'global\\tiles\\act2\\combined_ds1.bin',
        'global\\tiles\\act2\\combined_ds1.bin',
        true // overwrite any conflicts
    );

    // Act 2 Town
    D2RMM.copyFile(
        'global\\tiles\\act2\\town\\lutn.ds1',
        'global\\tiles\\act2\\town\\lutn.ds1',
        true // overwrite any conflicts
    );

    D2RMM.copyFile(
        'global\\tiles\\act2\\town\\lutw.ds1',
        'global\\tiles\\act2\\town\\lutw.ds1',
        true // overwrite any conflicts
    );
}

if (config.act3) {
    // Copy the ds1.bin files for act 3
    D2RMM.copyFile(
        'global\\tiles\\act3\\combined_ds1.bin',
        'global\\tiles\\act3\\combined_ds1.bin',
        true // overwrite any conflicts
    );

    // Act 3 Town
    D2RMM.copyFile(
        'global\\tiles\\act3\\docktown\\docktown3.ds1',
        'global\\tiles\\act3\\docktown\\docktown3.ds1',
        true // overwrite any conflicts
    );
}