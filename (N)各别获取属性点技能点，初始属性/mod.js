const charstatsFilename = 'global\\excel\\charstats.txt';
const charstats = D2RMM.readTsv(charstatsFilename);


const am = ['Amazon'];
const so = ['Sorceress'];
const ne = ['Necromancer'];
const pa = ['Paladin'];
const ba = ['Barbarian'];
const dr = ['Druid'];
const as = ['Assassin'];


charstats.rows.forEach((row) => {
  const charclass = row['class'];
  	
  // Amazon
   if (am.includes(charclass) && config.amenable) {
    row.str = Math.round(config.amstr);
    row.dex = Math.round(config.amdex);
    row['int'] = Math.round(config.amint);
    row.vit = Math.round(config.amvit);
    row.stamina = Math.round(config.amstam);
    row.hpadd = Math.round(config.amstartinghealth);
    row.ManaRegen = Math.round(config.ammanareg);
    row.WalkVelocity = Math.round(config.amwalk);
    row.RunVelocity = Math.round(config.amrun);
    row.RunDrain = Math.round(config.amrundrain);
    row.LifePerLevel = Math.round(config.amlifeperlevel);
    row.StaminaPerLevel = Math.round(config.amstamperlevel);
    row.ManaPerLevel = Math.round(config.ammanaperlevel);
    row.LifePerVitality = Math.round(config.amlifepervit);
    row.StaminaPerVitality = Math.round(config.amstampervit);
    row.ManaPerMagic = Math.round(config.ammanapermagic);
    row.HealthPotionPercent = Math.round(config.amhppotpercent);
    row.ManaPotionPercent = Math.round(config.ammppotpercent);
  }
    // Sorceress
   if (so.includes(charclass) && config.soenable) {
    row.str = Math.round(config.sostr);
    row.dex = Math.round(config.sodex);
    row['int'] = Math.round(config.soint);
    row.vit = Math.round(config.sovit);
    row.stamina = Math.round(config.sostam);
    row.hpadd = Math.round(config.sostartinghealth);
    row.ManaRegen = Math.round(config.somanareg);
    row.WalkVelocity = Math.round(config.sowalk);
    row.RunVelocity = Math.round(config.sorun);
    row.RunDrain = Math.round(config.sorundrain);
    row.LifePerLevel = Math.round(config.solifeperlevel);
    row.StaminaPerLevel = Math.round(config.sostamperlevel);
    row.ManaPerLevel = Math.round(config.somanaperlevel);
    row.LifePerVitality = Math.round(config.solifepervit);
    row.StaminaPerVitality = Math.round(config.sostampervit);
    row.ManaPerMagic = Math.round(config.somanapermagic);
    row.HealthPotionPercent = Math.round(config.sohppotpercent);
    row.ManaPotionPercent = Math.round(config.somppotpercent);
  }
   // Necromancer
   if (ne.includes(charclass) && config.neenable) {
    row.str = Math.round(config.nestr);
    row.dex = Math.round(config.nedex);
    row['int'] = Math.round(config.neint);
    row.vit = Math.round(config.nevit);
    row.stamina = Math.round(config.nestam);
    row.hpadd = Math.round(config.nestartinghealth);
    row.ManaRegen = Math.round(config.nemanareg);
    row.WalkVelocity = Math.round(config.newalk);
    row.RunVelocity = Math.round(config.nerun);
    row.RunDrain = Math.round(config.nerundrain);
    row.LifePerLevel = Math.round(config.nelifeperlevel);
    row.StaminaPerLevel = Math.round(config.nestamperlevel);
    row.ManaPerLevel = Math.round(config.nemanaperlevel);
    row.LifePerVitality = Math.round(config.nelifepervit);
    row.StaminaPerVitality = Math.round(config.nestampervit);
    row.ManaPerMagic = Math.round(config.nemanapermagic);
    row.HealthPotionPercent = Math.round(config.nehppotpercent);
    row.ManaPotionPercent = Math.round(config.nemppotpercent);
  }
   // Paladin
   if (pa.includes(charclass) && config.paenable) {
    row.str = Math.round(config.pastr);
    row.dex = Math.round(config.padex);
    row['int'] = Math.round(config.paint);
    row.vit = Math.round(config.pavit);
    row.stamina = Math.round(config.pastam);
    row.hpadd = Math.round(config.pastartinghealth);
    row.ManaRegen = Math.round(config.pamanareg);
    row.WalkVelocity = Math.round(config.pawalk);
    row.RunVelocity = Math.round(config.parun);
    row.RunDrain = Math.round(config.parundrain);
    row.LifePerLevel = Math.round(config.palifeperlevel);
    row.StaminaPerLevel = Math.round(config.pastamperlevel);
    row.ManaPerLevel = Math.round(config.pamanaperlevel);
    row.LifePerVitality = Math.round(config.palifepervit);
    row.StaminaPerVitality = Math.round(config.pastampervit);
    row.ManaPerMagic = Math.round(config.pamanapermagic);
    row.HealthPotionPercent = Math.round(config.pahppotpercent);
    row.ManaPotionPercent = Math.round(config.pamppotpercent);
  }
   // Barbarian
   if (ba.includes(charclass) && config.baenable) {
    row.str = Math.round(config.bastr);
    row.dex = Math.round(config.badex);
    row['int'] = Math.round(config.baint);
    row.vit = Math.round(config.bavit);
    row.stamina = Math.round(config.bastam);
    row.hpadd = Math.round(config.bastartinghealth);
    row.ManaRegen = Math.round(config.bamanareg);
    row.WalkVelocity = Math.round(config.bawalk);
    row.RunVelocity = Math.round(config.barun);
    row.RunDrain = Math.round(config.barundrain);
    row.LifePerLevel = Math.round(config.balifeperlevel);
    row.StaminaPerLevel = Math.round(config.bastamperlevel);
    row.ManaPerLevel = Math.round(config.bamanaperlevel);
    row.LifePerVitality = Math.round(config.balifepervit);
    row.StaminaPerVitality = Math.round(config.bastampervit);
    row.ManaPerMagic = Math.round(config.bamanapermagic);
    row.HealthPotionPercent = Math.round(config.bahppotpercent);
    row.ManaPotionPercent = Math.round(config.bamppotpercent);
  }
   // Druid
   if (dr.includes(charclass) && config.drenable) {
    row.str = Math.round(config.drstr);
    row.dex = Math.round(config.drdex);
    row['int'] = Math.round(config.drint);
    row.vit = Math.round(config.drvit);
    row.stamina = Math.round(config.drstam);
    row.hpadd = Math.round(config.drstartinghealth);
    row.ManaRegen = Math.round(config.drmanareg);
    row.WalkVelocity = Math.round(config.drwalk);
    row.RunVelocity = Math.round(config.drrun);
    row.RunDrain = Math.round(config.drrundrain);
    row.LifePerLevel = Math.round(config.drlifeperlevel);
    row.StaminaPerLevel = Math.round(config.drstamperlevel);
    row.ManaPerLevel = Math.round(config.drmanaperlevel);
    row.LifePerVitality = Math.round(config.drlifepervit);
    row.StaminaPerVitality = Math.round(config.drstampervit);
    row.ManaPerMagic = Math.round(config.drmanapermagic);
    row.HealthPotionPercent = Math.round(config.drhppotpercent);
    row.ManaPotionPercent = Math.round(config.drmppotpercent);
  }
   // Assassin
   if (as.includes(charclass) && config.asenable) {
    row.str = Math.round(config.asstr);
    row.dex = Math.round(config.asdex);
    row['int'] = Math.round(config.asint);
    row.vit = Math.round(config.asvit);
    row.stamina = Math.round(config.asstam);
    row.hpadd = Math.round(config.asstartinghealth);
    row.ManaRegen = Math.round(config.asmanareg);
    row.WalkVelocity = Math.round(config.aswalk);
    row.RunVelocity = Math.round(config.asrun);
    row.RunDrain = Math.round(config.asrundrain);
    row.LifePerLevel = Math.round(config.aslifeperlevel);
    row.StaminaPerLevel = Math.round(config.asstamperlevel);
    row.ManaPerLevel = Math.round(config.asmanaperlevel);
    row.LifePerVitality = Math.round(config.aslifepervit);
    row.StaminaPerVitality = Math.round(config.asstampervit);
    row.ManaPerMagic = Math.round(config.asmanapermagic);
    row.HealthPotionPercent = Math.round(config.ashppotpercent);
    row.ManaPotionPercent = Math.round(config.asmppotpercent);
  }
  
    // Global
    row.StatPerLevel = Math.round(config.globalstatperlevel);
    row.SkillsPerLevel = Math.round(config.globalskillsperlevel);
	if (config.globalmanaregenable) {row.ManaRegen = Math.round(config.globalmanareg);}
    if (config.globalwalkenable) {row.WalkVelocity = Math.round(config.globalwalk);}
    if (config.globalrunenable) {row.RunVelocity = Math.round(config.globalrun);}
    if (config.globalrundrainenable) {row.RunDrain = Math.round(config.globalrundrain);}
 
});

D2RMM.writeTsv(charstatsFilename, charstats);