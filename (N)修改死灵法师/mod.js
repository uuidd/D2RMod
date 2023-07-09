const petsFilename = 'global\\excel\\pettype.txt';
const pets = D2RMM.readTsv(petsFilename);

const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const statesFilename = 'global\\excel\\states.txt';
const states = D2RMM.readTsv(statesFilename);

const monstatsFilename = 'global\\excel\\monstats.txt';
const monstats = D2RMM.readTsv(monstatsFilename);

const skilldescFilename = 'global\\excel\\skilldesc.txt';
const skilldesc = D2RMM.readTsv(skilldescFilename);



	if (config.customnames) {

	}

// skilldesc.txt

		skilldesc.rows.forEach((row) => {
			if (['firegolem'].indexOf(row['skilldesc']) !== -1) {
				if ((config.elementalgolem === "Icegolem") || (config.elementalgolem === "IcegolemFull")) {
					if (config.customnames) {
						row['str name'] = 'SkillIcegolem';
						row['str short'] = 'descIcegolem';
						row['str long'] = 'descIcegolem';
						row['str alt'] = 'descIcegolem';
						row['desctexta2'] = 'dmgIcegolem';
						row['dsc3textb1'] = 'SkillIcegolem';
						
						// Synergias
						if (config.quicksandgolem !== "Disable") {
							row['dsc3textb4'] = 'SkillQuicksand';
						}
						if (config.bloodygolem !== "Disable") {
							row['dsc3textb5'] = 'SkillBloodygolem';
						}
						if (config.steelgolem !== "Disable") {
							row['dsc3textb6'] = 'SkillSteelgolem';
						}
					}
					
					row['desccalca2'] = ['sklvl(\'Holy Freeze\'.ln56.edmn)'];
					row['desccalcb2'] = ['sklvl(\'Holy Freeze\'.ln56.edmx)*((100+sklvl(\'Holy Freeze\'.ln56.par6))/100)'];
					row['desctexta3'] = 'StrSkill6'; 																		//colddmg StrSkill6 lighdmg StrSkill7 magicdmg StrSkill39
					row['desctexta4'] = 'strabsorbcolddmg';

				}
				if ((config.elementalgolem === "Stormgolem") || (config.elementalgolem === "StormgolemFull")) {
					if (config.customnames) {
						row['str name'] = 'SkillStormgolem';
						row['str short'] = 'descStormgolem';
						row['str long'] = 'descStormgolem';
						row['str alt'] = 'descStormgolem';
						row['desctexta2'] = 'dmgStormgolem';
						row['dsc3textb1'] = 'SkillStormgolem';
						
						// Synergias
						if (config.quicksandgolem !== "Disable") {
							row['dsc3textb4'] = 'SkillClaygolem';
						}
						if (config.bloodygolem !== "Disable") {
							row['dsc3textb5'] = 'SkillBloodygolem';
						}
						if (config.steelgolem !== "Disable") {
							row['dsc3textb6'] = 'SkillSteelgolem';
						}
					}
					
					row['desccalca2'] = ['sklvl(\'Holy Shock\'.ln56.edmn)'];
					row['desccalcb2'] = ['sklvl(\'Holy Shock\'.ln56.edmx)*((100+sklvl(\'Holy Freeze\'.ln56.par6))/100)'];
					row['desctexta3'] = 'StrSkill7'; 					//colddmg StrSkill6 lighdmg StrSkill7 magicdmg StrSkill39
					row['desctexta4'] = 'absorblightningdmg';

				}
				if ((config.elementalgolem === "Arcanegolem") || (config.elementalgolem === "ArcanegolemFull")) {
					if (config.customnames) {
						row['str name'] = 'SkillArcanegolem';
						row['str short'] = 'descArcanegolem';
						row['str long'] = 'descArcanegolem';
						row['str alt'] = 'descArcanegolem';
						row['desctexta2'] = 'dmgArcanegolem';
						row['dsc3textb1'] = 'SkillArcanegolem';
						
						// Synergias
						if (config.quicksandgolem !== "Disable") {
							row['dsc3textb4'] = 'SkillQuicksand';
						}
						if (config.bloodygolem !== "Disable") {
							row['dsc3textb5'] = 'SkillBloodygolem';
						}
						if (config.steelgolem !== "Disable") {
							row['dsc3textb6'] = 'SkillSteelgolem';
						}
					}
					
					row['desccalca2'] = ['sklvl(\'Sanctuary\'.ln56.edmn)'];
					row['desccalcb2'] = ['sklvl(\'Sanctuary\'.ln56.edmx)*((100+sklvl(\'Holy Freeze\'.ln56.par6))/100)'];
					row['desctexta3'] = 'StrSkill39'; 					
					row['desctexta4'] = 'absorbmagicdmg';

				}

			}
			if (['irongolem'].indexOf(row['skilldesc']) !== -1) {
				if (config.customnames) {
					if (config.steelgolem !== "Disable") {
						row['str name'] = 'SkillSteelgolem';
						row['descline4'] = 4;
						row['desctexta4'] = 'skillConcentrationgolem';
						row['desccalca4'] = 'lvl/3';
						row['str short'] = 'descSteelgolem';
						row['str long'] = 'descSteelgolem';
						row['str alt'] = 'descSteelgolem';
					}
					if ((config.elementalgolem === "Icegolem") || (config.elementalgolem === "IcegolemFull")) {
						row['dsc3textb6'] = 'SkillIcegolem';
					}
					if ((config.elementalgolem === "Stormgolem") || (config.elementalgolem === "StormgolemFull")) {
						row['dsc3textb6'] = 'SkillStormgolem';	
					}
					if ((config.elementalgolem === "Arcanegolem") || (config.elementalgolem === "ArcanegolemFull")) {
						row['dsc3textb6'] = 'SkillArcanegolem';
					}
					if (config.quicksandgolem !== "Disable") {
						row.dsc3textb4 = 'SkillQuicksand';
					}	
					if (config.bloodygolem !== "Disable") {
						row.dsc3textb5 = 'SkillBloodygolem';
					}							
				}
			}
			if (['bloodgolem'].indexOf(row['skilldesc']) !== -1) {
				if (config.customnames) {
					if (config.steelgolem !== "Disable") {
						row.dsc3textb5 = 'SkillSteelgolem';

					}
					if ((config.elementalgolem === "Icegolem") || (config.elementalgolem === "IcegolemFull")) {
						row['dsc3textb6'] = 'SkillIcegolem';
					}
					if ((config.elementalgolem === "Stormgolem") || (config.elementalgolem === "StormgolemFull")) {
						row['dsc3textb6'] = 'SkillStormgolem';	
					}
					if ((config.elementalgolem === "Arcanegolem") || (config.elementalgolem === "ArcanegolemFull")) {
						row['dsc3textb6'] = 'SkillArcanegolem';
					}
					if (config.quicksandgolem !== "Disable") {
						row.dsc3textb4 = 'SkillQuicksand';
					}	
					if (config.bloodygolem !== "Disable") {
						row['str name'] = 'SkillBloodygolem';
						row['descline4'] = 4;
						row['desctexta4'] = 'skillPrayergolem';
						row['desccalca4'] = 'lvl/2';
						row['str short'] = 'descBloodygolem';
						row['str long'] = 'descBloodygolem';
						row['str alt'] = 'descBloodygolem';
					}
				}
				
			}
			if (['clay golem'].indexOf(row['skilldesc']) !== -1) {
				if (config.customnames) {
					if (config.steelgolem !== "Disable") {
						row['dsc3textb5'] = 'SkillSteelgolem';

					}
					if ((config.elementalgolem === "Icegolem") || (config.elementalgolem === "IcegolemFull")) {
						row['dsc3textb6'] = 'SkillIcegolem';
					}
					if ((config.elementalgolem === "Stormgolem") || (config.elementalgolem === "StormgolemFull")) {
						row['dsc3textb6'] = 'SkillStormgolem';	
					}
					if ((config.elementalgolem === "Arcanegolem") || (config.elementalgolem === "ArcanegolemFull")) {
						row['dsc3textb6'] = 'SkillArcanegolem';
					}
					if (config.quicksandgolem !== "Disable") {
						row['str name'] = 'SkillQuicksand';
						row['descline4'] = 4;
						row['desctexta4'] = 'skillConvictiongolem';
						row['desccalca4'] = 'lvl/2';
						row['str short'] = 'descQuicksand';
						row['str long'] = 'descQuicksand';
						row['str alt'] = 'descQuicksand';
					}	
					if (config.bloodygolem !== "Disable") {
						row['dsc3textb4'] = 'SkillBloodygolem';
					}	
				}

			}
			if (['raise skeleton'].indexOf(row['skilldesc']) !== -1) {
				if (config.fanaticskeleton === 'Fanaticskeleton') {
					if (config.customnames) {					
						row['str name'] = 'SkillFanaticskeleton';
						row['descline4'] = 4;
						row['desctexta4'] = 'skillFanaticisskeleton';
						row['desccalca4'] = 'lvl/3';
						row['str short'] = 'descFanaticskeleton';
						row['str long'] = 'descFanaticskeleton';
						row['str alt'] = 'descFanaticskeleton';
					}
				}		
			}
			if (['raise skeletal mage'].indexOf(row['skilldesc']) !== -1) {
				if ((config.priestskeleton !== 'Disable')) {
					if (config.customnames) {
						row['str name'] = 'SkillPriestskeleton';
						row['descline4'] = 4;
						row['desctexta4'] = 'skillSalvationmages';
						row['desccalca4'] = '(lvl-7)/3';
						row['str short'] = 'descPriestskeleton';
						row['str long'] = 'descPriestskeleton';
						row['str alt'] = 'descPriestskeleton';
					}
				}		
			}
			if (['revive'].indexOf(row['skilldesc']) !== -1) {
				if (config.legion !== "Disable") {
					if (config.customnames) {
						row['str name'] = 'SkillLegion';
						row['descline4'] = 4;
						row['desctexta4'] = 'skillDefianceLegion';
						row['desccalca4'] = 'lvl/3';
						row['str short'] = 'descLegion';
						row['str long'] = 'descLegion';
						row['str alt'] = 'descLegion';
					}
				}
			}

			
		

		});
		

	// Save changes
	
  	D2RMM.writeTsv(skilldescFilename, skilldesc);
	





























// states.txt

	if (config.reviverecolor) {
		states.rows.forEach((row) => {
			if (['revive'].indexOf(row['state']) !== -1) {
				row.colorpri = config.reviverecolorpri;
				row.colorshift = config.reviverecolorshift;
				row['light-r'] = config.reviverecolorred;
				row['light-g'] = config.reviverecolorgreen;
				row['light-b'] = config.reviverecolorblue;
			}
		});

	// Save changes
	
  	D2RMM.writeTsv(statesFilename, states);
	
	}



// pettype.txt

	if (config.allgolems) {
		pets.rows.forEach((row) => {
			if (['golem'].indexOf(row['pet type']) !== -1) {
				row.baseicon = 'metalgolumicon';
				row.mclass1 = 291;
				row.micon1 = 'metalgolumicon';
				row.mclass2 = '';
				row.micon2 = '';
				row.mclass3 = '';
				row.micon3 = '';
			}
		});

	// Bloodgolem

	pets.rows.push({
			'pet type': 'bloodgolem',
			basemax: 0,
			warp: 1,
			partysend: 1,
			unsummon: 1,
			automap: 1,
			name: 'StrUI0',
			drawhp: 1,
			icontype: 3,
			baseicon: 'bloodgolumicon',
			mclass1: 290,
			micon1: 'bloodgolumicon'
	});	

	// Firegolem

	pets.rows.push({
			'pet type': 'firegolem',
			basemax: 0,
			warp: 1,
			partysend: 1,
			unsummon: 1,
			automap: 1,
			name: 'StrUI0',
			drawhp: 1,
			icontype: 3,
			baseicon: 'firegolumicon',
			mclass1: 292,
			micon1: 'firegolumicon'
	});		

	// EarthGolem
	
	pets.rows.push({
			'pet type': 'claygolem',
			basemax: 0,
			warp: 1,
			partysend: 1,
			unsummon: 1,
			automap: 1,
			name: 'StrUI0',
			drawhp: 1,
			icontype: 3,
			baseicon: 'earthgolumicon',
			mclass1: 289,
			micon1: 'earthgolumicon'
	});	
	

	// Save changes

  	D2RMM.writeTsv(petsFilename, pets);

	}


// pettype.txt Adding custom strings

	if (config.customnames) {
		pets.rows.forEach((row) => {
			if (['golem'].indexOf(row['pet type']) !== -1) {
				if (config.steelgolem !== "Disable") {
					row.name = 'StringSteelgolem';
				} 

			} else if (['bloodgolem'].indexOf(row['pet type']) !== -1) {
				if (config.bloodygolem !== "Disable") {
					row.name = 'StringBloodygolem';
				}
			} else if (['firegolem'].indexOf(row['pet type']) !== -1) {
				if ((config.elementalgolem === "Icegolem") || (config.elementalgolem === "IcegolemFull")) {
					row.name = 'StringIcegolem';
				}
				if ((config.elementalgolem === "Stormgolem") || (config.elementalgolem === "StormgolemFull")) {
					row.name = 'StringStormgolem';
				}
				if ((config.elementalgolem === "Arcanegolem") || (config.elementalgolem === "ArcanegolemFull")) {
					row.name = 'StringArcanegolem';
				}
			} else if (['claygolem'].indexOf(row['pet type']) !== -1) {
				if (config.quicksandgolem !== "Disable") {
					row.name = 'StringQuicksandgolem';
				}
			} else if (['skeleton'].indexOf(row['pet type']) !== -1) {
				if (config.fanaticskeleton !== "Disable") {
					row.name = 'StringFanaticskeleton';
				}
			} else if (['skeletonmage'].indexOf(row['pet type']) !== -1) {
				if (config.priestskeleton !== "Disable") {
					row.name = 'StringPriestskeleton';
				}
			} else if (['revive'].indexOf(row['pet type']) !== -1) {
				if (config.legion !== "Disable") {
					row.name = 'StringLegion';
				}
			}
		});


	// Save changes

  	D2RMM.writeTsv(petsFilename, pets);

	}


// skills.txt

	// Main mod
	
	skills.rows.forEach((row) => {
	// Skeleton
	
		if (['Raise Skeleton'].indexOf(row.skill) !== -1) {
					
		// No blood
			if (config.skeletonnoblood) {
				row.cltmissilea = '';
			}
		// Shields
			if (config.skeletonshield) {
				row.Param1 = 100;
			}
		// Fanaticism skeleton
			if (config.fanaticskeleton !== 'Disable') {
				row.sumskill5 = 'Fanaticism';
				row.sumsk5calc = 'lvl/3';
			}	  			

	// Skeletal mage 
		} else if (['Raise Skeletal Mage'].indexOf(row.skill) !== -1) {
		
		// No blood
			if (config.skeletonnoblood) {
				row.cltmissilea = '';
			}
		// Priest skeleton
			if (config.priestskeleton !== 'Disable') {
				row.sumskill5 = 'Salvation';
				row.sumsk5calc = '(lvl-7)/3';
			}	
			
	// ClayGolem
	
		} else if (['Clay Golem'].indexOf(row.skill) !== -1){
			if (config.allgolems) {
				row.pettype = 'claygolem';
			}
			if (config.quicksandgolem !== 'Disable') {
				row.sumskill5 = 'Conviction';
				row.sumsk5calc = 'lvl/2';
			}

			
	// BloodGolem
	
		} else if (['BloodGolem'].indexOf(row.skill) !== -1){
			if (config.allgolems) {
				row.pettype = 'bloodgolem';
			}
			if (config.bloodygolem !== 'Disable') {
				row.sumskill4 = 'Prayer';
				row.sumsk4calc = '(lvl/2)';
				//row.sumskill5 = 'Cleansing';
				//row.sumskill5 = 'Meditation';
				//row.sumsk5calc = '(lvl/2)';
			}

			
	// IronGolem
	
		} else if (['IronGolem'].indexOf(row.skill) !== -1){
			if (config.steelgolem !== 'Disable') {
				row.sumskill5 = 'Concentration';
				row.sumsk5calc = 'lvl/3';
			}


	// FireGolem
		} else if (['FireGolem'].indexOf(row.skill) !== -1){
			if (config.allgolems) {
				row.pettype = 'firegolem';
			}
			if ((config.elementalgolem === "Icegolem") || (config.elementalgolem === "IcegolemFull")) {
				// coldresist				
				row.aurastat1 = 'coldresist';
				// item_absorbcold_percent
				row.aurastat2 = 'item_absorbcold_percent';
				// coldmindam				
				row.aurastat3 = 'coldmindam';
				// coldmaxdam
				row.aurastat4 = 'coldmaxdam';
				// Holy Freeze
				row.sumskill1 = ['Holy Freeze'];
			}
			if ((config.elementalgolem === "Stormgolem") || (config.elementalgolem === "StormgolemFull")) {
				// lightresist				
				row.aurastat1 = 'lightresist';
				// item_absorblight_percent
				row.aurastat2 = 'item_absorblight_percent';
				// lightmindam				
				row.aurastat3 = 'lightmindam';
				// lightmaxdam
				row.aurastat4 = 'lightmaxdam';
				// Holy Shock
				row.sumskill1 = ['Holy Shock'];
			}
			if ((config.elementalgolem === "Arcanegolem") || (config.elementalgolem === "ArcanegolemFull")) {
				// Holy shock affects only undead, dealing magic damage, apply knockback and remove immunities. This aura deal magic damage, the golem will deal extra magic damage.
				// magicresist
				row.aurastat1 = 'magicresist';
				// item_absorbmagic_percent
				row.aurastat1 = 'item_absorbmagic_percent';
				// magicmindam				
				row.aurastat3 = 'magicmindam';
				// magicmaxdam
				row.aurastat4 = 'magicmaxdam';
				// Holy Shock
				row.sumskill1 = ['Sanctuary'];
			}

		
	// Revive
		} else if (['Revive'].indexOf(row.skill) !== -1){
			if (config.revivenotime) {
				row.calc2 = '';
				row['*calc2 desc'] = '';
			}
			if (config.legion) {
				row.sumskill5 = 'Defiance';
				row.sumsk5calc = 'lvl/3';
			}	
		}	
		

	});
	
	


	// Save changes
	
	D2RMM.writeTsv(skillsFilename, skills);
	
	




// monstats.txt

	skills.rows.forEach((row) => {
			
// claygolem bloodgolem  irongolem  firegolem necroskeleton necromage

	// Skeletal mage 
		if (['necromage'].indexOf(row.id) !== -1) {
		
		// No collision
			if (config.nocollisions !== "Disable") {
				row.intown = 1;
			}
		}
	// Skeleton 
		if (['necroskeleton'].indexOf(row.id) !== -1) {
		
		// No collision
			if ((config.nocollisions === "skeletons") || (config.nocollisions === "all")) {
				row.intown = 1;
			}
	// 
		}
	// Golems
		if ((['claygolem'].indexOf(row.id) !== -1) || (['bloodgolem'].indexOf(row.id) !== -1) || (['irongolem'].indexOf(row.id) !== -1) || (['firegolem'].indexOf(row.id) !== -1)) {
		
		// No collision
			if ((config.nocollisions === "all")) {
				row.intown = 1;
			}
		}
	});



	// Save changes
	
	D2RMM.writeTsv(monstatsFilename, monstats);
	



	// Install textures
	
	if (config.customnames) {
		D2RMM.copyFile(
			'NecroTexts',
			'',
			true // overwrite any conflicts
			);	
	}
	
	if (config.elementalgolemtextures) {
		if (config.elementalgolem === "IcegolemFull") {
			D2RMM.copyFile(
				'Coldgolem',
				'hd',
				true // overwrite any conflicts
				);	
		}
				if (config.elementalgolem === "StormgolemFull") {
			D2RMM.copyFile(
				'Stormgolem',
				'hd',
				true // overwrite any conflicts
				);	
		}
				if (config.elementalgolem === "ArcanegolemFull") {
			D2RMM.copyFile(
				'Arcanegolem',
				'hd',
				true // overwrite any conflicts
				);	
		}
		
	}