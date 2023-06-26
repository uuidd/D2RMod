chcp 936
@set ver=Demo.2023.06.25
@ECHO OFF&PUSHD %~DP0 &TITLE D2R Demo MOD �Զ��������� Ver.%Ver%
mode con cols=120 lines=62
color 71
setlocal enabledelayedexpansion

REM ===���������ʹ��set===
REM ���ó����ļ���
set d2r_layouts=.\mods\Demo\Demo.mpq\data\global\ui\layouts
set d2r_strings=.\mods\Demo\Demo.mpq\data\local\lng\strings
set d2r_items=.\mods\Demo\Demo.mpq\data\hd\items
set d2r_items_pic=.\mods\Demo\Demo.mpq\data\hd\global\ui\items
set d2r_ui=.\mods\Demo\Demo.mpq\data\hd\ui
set d2r_excel=.\mods\Demo\Demo.mpq\data\global\excel
set d2r_sfx=.\mods\Demo\Demo.mpq\data\hd\global\sfx
set d2r_missiles=.\mods\Demo\Demo.mpq\data\hd\missiles
set objects_folder=.\mods\Demo\Demo.mpq\data\hd\objects
set global_image_folder=.\mods\Demo\Demo.mpq\data\hd\global

REM ���ó����ļ�
set item-names=%d2r_strings%\item-names.json
set item-runes=%d2r_strings%\item-runes.json
set item-gems=%d2r_strings%\item-gems.json
set item-nameaffixes=%d2r_strings%\item-nameaffixes.json

set del_travincal_hall=.\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travn.json
set del_chaos_door=.\mods\Demo\Demo.mpq\data\hd\env\preset\act4\diab\entry1.json
set del_act4_lava=.\mods\Demo\Demo.mpq\data\hd\env\model\act4\lava
set del_ballair_pillars=.\\mods\Demo\Demo.mpq\data\hd\env\preset\expansion\baallair\wthrone.json

set  ver_sign=%d2r_strings%\json_db
set mod_folder=.\mods\Demo\Demo.mpq
set install_folder=.\D2R.exe
set string_folder=%d2r_strings%\

REM �������Լ�MOD��װ���������Ŀ¼�Ƿ���ȷ
@ echo.	 *�������Լ�MOD�����Ƿ���ȷ
if exist %ver_sign% ( 
	REM ����stringĿ¼�µ�json���ݿ��Ƿ���� %d2r_strings%\json_db
) else (
	@ echo.	 ***����δ��⵽MOD�����String�ı��ļ����ݿ�Ŀ¼***
	@ echo.	 ***�������޷�������������ȷ����������MOD��ѹ��װĿ¼�Ƿ���ȷ***
	pause
	goto exit
)

:check_setup_correct
@ echo.	 *�������Լ�MOD��װ�����Ŀ¼�Ƿ���ȷ
if exist %install_folder% (
	REM ������������D2R�ļ����λ���Ƿ���ȷ .\D2R.exe
else if exist .\Demo MOD����չʾ (
	REM ������������D2R�ļ����λ���Ƿ���ȷ .\D2R.exe
) else ( 
	@ echo.	 ***����MOD���ڵ��ļ���λ�ô��󣬿����ǽ�ѹ����Ŀ¼***
	@ echo.	 ���Լ����������D2R�����λ��
	REM ���Լ����������D2R�����λ��
	set dot_path=UNKNOW
	@echo. ��ⲹ������MOD���·����...
	if exist .\D2R.exe set dot_path=.
	if exist ..\D2R.exe set dot_path=..
	if exist ..\..\D2R.exe set dot_path=..\..
	if exist ..\..\..\D2R.exe set dot_path=..\..\..
	@echo. �������dot_path=%dot_path%
	@echo. �������dot_path=!dot_path!
	if "!dot_path!"=="UNKNOW" (
		@ echo.	 ***����δ��⵽MOD�ļ���***
	) else (
		@echo. MOD��ȷ��װ�����·��Ϊ !dot_path!\mods\Demo\Demo.mpq
		@echo. *�����Ҫ�Զ���MOD�ƶ�����ȷĿ¼���밴�����������������ֱ�ӹر�������*
		@echo. *�����Ҫ�Զ���MOD�ƶ�����ȷĿ¼���밴�����������������ֱ�ӹر�������*
		@echo. *�����Ҫ�Զ���MOD�ƶ�����ȷĿ¼���밴�����������������ֱ�ӹر�������*
		@echo. 
		pause
		@echo. 
		@echo. *��ȷ����Ҫ�����������ƶ�mod�ļ�����*
		@echo. 
		pause
		@echo. 
		@echo. *�ٴ�ȷ��һ�£������ȷ����Ҫ�����������ƶ�mod�ļ����𣿡����һ��ȷ�ϣ������ֱ��ִ�С�*
		@echo. 
		pause
		set  obj=""
		set /p obj= ���롾Y�������Զ�����Ŀ¼�����롾N��ǿ��������������
		if /i "%obj%"=="Y" Goto try_to_move_folder
		if /i "%obj%"=="N" Goto continue_do_setup
		@echo.
		@echo	  ��Ч���룬�뿴����� �����е���ĸ�������룡
		@echo.
		pause
		ping -n 1 127.1>nul 
		goto check_setup_correct

:try_to_move_folder
		@echo. ��ʼ�ƶ�MODĿ¼����ȷ��λ�ã�ԭ��λ������������ļ�����������Demo_BACKUP
		if exist %ver_sign% (
			@ echo.	 �ɹ���⵽MOD�ļ������������ļ��ƶ�
			pause
			ren !dot_path!\mods\Demo Demo_BACKUP
			@ echo.	 ���ļ��б�����ɣ���һ���ƶ��ļ���
			pause
			move /Y .\mods\Demo !dot_path!\mods
			@ echo.	 �ƶ��ļ�����ɣ���һ��������������D2RĿ¼
			pause
			copy /Y ".\Demo MOD������.bat" "!dot_path!\Demo MOD������.bat"
			@ echo.	 ������������D2RĿ¼���
			@ echo.	 ��ɣ������µ�D2RĿ¼��������ȷ������������������
		) else (
			@ echo.	 ***����δ��⵽������ͬĿ¼��Mod�ļ��������ǽ�ѹ����������MOD������***
		)
	)
	pause
	goto exit
)

:continue_do_setup

REM �Զ������ļ����ֶ���
set autorun_backup=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.autorun_backup.json
set autorun_off=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.mdk.json
set autorun_file=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.json
set noautorun_file=.\mods\Demo\Demo.mpq\data\global\ui\layouts\hudwarningshd.noautorun.json
set AutorunCheck=.\mods\Demo\Demo.mpq\data\hd\global\ui\AutorunCheck

REM ����DLC1�ı�־Ŀ¼
set dlc1_sign=.\mods\Demo\Demo.mpq\data\hd\character\enemy\cr_lancer1
set dlc1_file1=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\corruptrogue1
set dlc1_file2=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\lancer
set dlc1_file3=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\cr_lancer1
set dlc1_file4=.\mods\Demo\Demo.mpq\data\hd\character\DLC1\act2hire.json
set dlc1_t_file1=.\mods\Demo\Demo.mpq\data\hd\character\enemy\corruptrogue1
set dlc1_t_file2=.\mods\Demo\Demo.mpq\data\hd\character\enemy\lancer
set dlc1_t_file3=.\mods\Demo\Demo.mpq\data\hd\character\enemy\cr_lancer1
set dlc1_t_file4=.\mods\Demo\Demo.mpq\data\hd\character\enemy\act2hire.json

set pause_file=%d2r_layouts%\pauselayouthd.json
set font_size=%d2r_layouts%\_profileasian.json
set rune_style=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune\zod_rune.sprite
set sc_light=%d2r_items%\misc\charm\charm_small.json
set lc_light=%d2r_items%\misc\charm\charm_medium.json
set ring_light=%d2r_items%\misc\ring\ring.json
set amulet_light=%d2r_items%\misc\amulet\amulet.json
set all_gem=%d2r_items%\misc\gem_all
set high_gem=%d2r_items%\misc\gem_high
set all_rune_light=%d2r_items%\misc\rune_all
set high_rune_light=%d2r_items%\misc\rune_onlylight
set high_rune_star_light=%d2r_items%\misc\rune_starlight
set craft_rune_light=%d2r_items%\misc\rune\ral_rune.json
set horadic=%d2r_layouts%\horadriccubelayouthd_mdk.json

REM �������������岿��
set font_name=%d2r_ui%\fonts\blizzardglobal-v5_81.ttf
set font_name_zhTW=blizzardglobal-v5_81.ttf
set font_libian=%d2r_ui%\fonts\LiziLibian.ttf
set font_zhunyuan=%d2r_ui%\fonts\LiziZhunyuan.ttf
set font_fangxing=%d2r_ui%\fonts\ARFangxin.ttf
set font_baoxue=%d2r_ui%\fonts\BlizzardGlobal.ttf
set font_heiti=%d2r_ui%\fonts\LiziHeiti.ttf
set font_dahei=%d2r_ui%\fonts\LiziDahei.ttf

REM ����ģʽ���岿��
set hj_font_fangsong=.\mods\Demo\Demo.mpq\data\local\font\chi_fangsong
set hj_font_qingyuan=.\mods\Demo\Demo.mpq\data\local\font\chi_qingyuan
set hj_font_ruixiantong=.\mods\Demo\Demo.mpq\data\local\font\chi_ruixiantong
set hj_font_youyuan=.\mods\Demo\Demo.mpq\data\local\font\chi_youyuan
set hj_font_currently=.\mods\Demo\Demo.mpq\data\local\font\chi

set hp_bar=%d2r_layouts%\hudmonsterhealthhd_mdk2nd.json
set hp_bar2=%d2r_layouts%\hudmonsterhealthhd_mdk1st.json
set color_spell=.\mods\Demo\Demo.mpq\data\hd\global\ui\color_spells
set potion_style=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion
set no_cap=%d2r_items%\armor\helmet\cap_hat.json
set no_all_cap=%d2r_items%\armor\helmet\helm.json
set hireables_down=%d2r_layouts%\hireablespanelhd_up.json

set color_word=%d2r_strings%\json_db\modifiers_color.mcsign

set ui_n=%d2r_layouts%\hudpanelhd_normal.json
set ui_mini=%d2r_layouts%\hudpanelhd_0.01.json
set ui_6=%d2r_layouts%\hudpanelhd_0.65.json
set ui_7=%d2r_layouts%\hudpanelhd_0.75.json
set ui_8=%d2r_layouts%\hudpanelhd_0.85.json
set ui_file=%d2r_layouts%\hudpanelCurrenthd.json
set ui_nc=%d2r_layouts%\controller\hudpanelhd_normal.json
set ui_minic=%d2r_layouts%\controller\hudpanelhd_0.01.json
set ui_6c=%d2r_layouts%\controller\hudpanelhd_0.65.json
set ui_7c=%d2r_layouts%\controller\hudpanelhd_0.75.json
set ui_8c=%d2r_layouts%\controller\hudpanelhd_0.85.json
set ui_filec=%d2r_layouts%\controller\hudpanelCurrenthd.json

set potion_vo=%d2r_sfx%\item\item_potion_hd.flac
set tucao_sign=%d2r_strings%\json_db\tucao.tucaosign
set no_tucao_sign=%d2r_strings%\json_db\no_tucao.tucaosign
set text_color_sign=%d2r_strings%\json_db\DyeWeaponName.colorsign
set rune_shop=%d2r_excel%\misc_shop.txt
set rune_normal=%d2r_excel%\misc_normal.txt
set misc_file=%d2r_excel%\misc.txt
set convic_off=.\mods\Demo\Demo.mpq\data\hd\overlays\common\convictionback_mdk.json
set convic_on=.\mods\Demo\Demo.mpq\data\hd\overlays\common\convictionback.json

REM ���ͳһ��ʽ���
set unify_gc_eye_dark_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_eye_dark.unifygcsign
set unify_gc_eye_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_eye.unifygcsign
set unify_gc_mahua_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_mahua.unifygcsign
set unify_gc_guilian_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\gc_guilian.unifygcsign

set unify_lc_lingpai_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\lc_lingpai.unifylcsign
set unify_lc_niujiao_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\lc_niujiao.unifylcsign
set unify_lc_fangta_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\lc_fangta.unifylcsign

set unify_sc_tuoyuan_dark_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_tuoyuan_dark.unifylcsign
set unify_sc_tuoyuan_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_tuoyuan.unifylcsign
set unify_sc_xuanwo_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_xuanwo.unifylcsign
set unify_sc_yuanfu_sign=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\sc_yuanfu.unifylcsign

REM �����ʽ�ļ�
set gc_eye_dark=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large_eye_dark
set gc_eye=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large1_eye
set gc_mahua=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large2_mahua
set gc_guilian=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_large3_guilian

set lc_lingpai=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_medium1_lingpai
set lc_niujiao=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_medium2_niujiao
set lc_fangta=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_medium3_fangta

set sc_tuoyuan_dark=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small1_tuoyuan_dark
set sc_tuoyuan=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small_tuoyuan
set sc_xuanwo=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small2_xuanwo
set sc_yuanfu=.\mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\charm_db\charm_small3_yuanfu

REM ��ͼ��ʾ������
set automap_monster_mdk_sign=%d2r_excel%\mdk.monsgin
set automap_monster_mdkchaos_sign=%d2r_excel%\mdkchaos.monsgin
set automap_monster_all_sign=%d2r_excel%\all.monsgin
set automap_chest_sign=%d2r_excel%\objects.txt

REM �ײ���Ϣ�л��ļ�
set old_baseinfo_txt_sign=%d2r_strings%\json_db\old_baseinfo.baseInfoVersign
set old_baseinfo_ver_file=%d2r_strings%\json_db\bnet_old_baseinfo.json
set new_baseinfo_ver_file=%d2r_strings%\json_db\bnet.json
set baseinfo_txt_sign=%d2r_excel%\weapons.txt
set base_with_english_sign=%d2r_strings%\json_db\base_with_english.ensign
set base_no_baseinfo_sign=%d2r_strings%\json_db\base_with_nobase.ensign
set base_with_english=%d2r_strings%\json_db\item-nameaffixes_with_english.json
set base_without_english=%d2r_strings%\json_db\item-nameaffixes_without_english.json
set base_no_baseinfo=%d2r_strings%\json_db\item-nameaffixes_no_baseinfo.json

set entry_guider=.\mods\Demo\Demo.mpq\data\hd\roomtiles_mdk
set entry_guider_c=.\mods\Demo\Demo.mpq\data\hd\roomtiles_c
set objects_aura=%objects_folder%\chests
set dest_aura=%objects_folder%\destructibles\barrel.json
set manmade_aura=%objects_folder%\env_manmade\gibbet.json
set show_arrow=%d2r_strings%\json_db\show_arrow.arrowsign
set player_light=.\mods\Demo\Demo.mpq\data\hd\character\player
set cain_light=.\mods\Demo\Demo.mpq\data\hd\character\npc\cain1.json
set shrines_light=%objects_folder%\shrines_other

set guangyuan_u=.\mods\Demo\Demo.mpq\data\hd\character\guangyuan_u.lightsign
set guangyuan_d=.\mods\Demo\Demo.mpq\data\hd\character\guangyuan_d.lightsign
set guangyuan_n=.\mods\Demo\Demo.mpq\data\hd\character\guangyuan_n.lightsign
set wp_guider=%objects_folder%\waypoint_portals
set anya_shop=%d2r_excel%\anya.shop_mode
set base_shop=%d2r_excel%\base.shop_mode
set BO_time=.\mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\battleorders.json
set BO_time_charge=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\battleorders.json
set ass_charge_large=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large\progressive_other_1.json
set ass_charge_large_down=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large_down\progressive_other_1.json
set ass_charge_small=.\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_small\progressive_other_1.json
set ass_charge_default=.\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive_other_1.json

REM===����ŵ׹�Դ===
set enemy_nolight=.\mods\Demo\Demo.mpq\data\hd\character\nolight.enemysign
set enemy_light_1=.\mods\Demo\Demo.mpq\data\hd\character\light_1.enemysign
set enemy_light_2=.\mods\Demo\Demo.mpq\data\hd\character\light_2.enemysign
set enemy_light_3=.\mods\Demo\Demo.mpq\data\hd\character\light_3.enemysign
set enemy_nosign=.\mods\Demo\Demo.mpq\data\hd\character\nosign.enemysign

set lang_strings=%d2r_strings%
set lang_zhTW_cht=%d2r_strings%_zhTW_cht
set lang_zhTW_chs=%d2r_strings%_zhTW_chs
set lang_zhCN=%d2r_strings%_zhCN
set lang_zhTW_cht_OLD=%d2r_strings%_zhTW_cht_OLD

set magic_arrow=%d2r_missiles%\arrow.json
set light_javelin=%d2r_missiles%\javelin.json
set monster_res=%d2r_excel%\monstats.txt
set function_btn=.\mods\Demo\Demo.mpq\data\hd\global\ui\mdk\mdk
set map_tips=%d2r_strings%\levels_tips.json
set map_lv=%d2r_strings%\levels_lv.json

set diff_btn_tip=%d2r_layouts%\characterdifficultymodalhd.json
set offline_drop_up=%d2r_excel%\TreasureClassEx.txt.mdkup
set itemratio_up=%d2r_excel%\itemratio.txt
set monster_level=%d2r_excel%\levels.txt
set monster_1x=%d2r_excel%\levels_1.txt
set monster_3x=%d2r_excel%\levels_3.txt
set monster_10x=%d2r_excel%\levels_10.txt
set monster_20x=%d2r_excel%\levels_20.txt
set ntag=0

set sp_effects=%d2r_missiles%\blizzard.json
set magicarrow_effects=%d2r_missiles%\arrow.json
set light_javelin_effects=%d2r_missiles%\javelin.json
set light_axe_effects=%d2r_missiles%\balanced_axe_missile.json
set light_a3mon_effects=%d2r_missiles%\blowdart.json
set nova_effects=%d2r_missiles%\electric_nova.json
set d2eng_fonts=%d2r_ui%\D2ENG_Fonts
set torch_fire=%d2r_missiles%\diabwall.json
set sor_es_aura=.\mods\Demo\Demo.mpq\data\hd\overlays\sorceress\energyshield.json

set mdk_minicube_bigfont_mode_sign=%d2r_layouts%\json_db\bigfont_mode.minicube
set mdk_minicube_normal_mode_sign=%d2r_layouts%\json_db\normal_mode.minicube
set mdk_minicube_normal_old_mode_sign=%d2r_layouts%\json_db\normal_old_mode.minicube
set mdk_minicube_allsign=%d2r_layouts%\json_db\*.minicube

REM ��Ʒ��ݲ�ѯͼ��
set inven_top=%global_image_folder%\ui\mdk\inventory_icon_top
set inven_bottom=%global_image_folder%\ui\mdk\inventory_icon_bottom

REM �ɰ����㷽���ļ�
REM set mdk_minicube_pi_old_normal		=%d2r_layouts%\playerinventoryexpansionlayouthd_old_normal.json
set mdk_minicube_hc_old_normal=%d2r_layouts%\json_db\horadriccubelayoutminihd_normal_mode_old.json
set mdk_minicube_pi_old_expfile=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_mdkminicube_old.json
set mdk_minicube_pi_old_origfile=%d2r_layouts%\json_db\playerinventoryoriginallayouthd_mdkminicube_old.json
REM �������
set mdk_minicube_hc_bigfont_mode=%d2r_layouts%\json_db\horadriccubelayoutminihd_bigfont_mode.json
REM �°����㷽���ļ�
set mdk_minicube_hc_new_normal=%d2r_layouts%\json_db\horadriccubelayoutminihd_normal_mode_new.json
set mdk_minicube_pi_new_expfile=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_mdkminicube_new.json
REM �����㷽��
set mdk_minicube_pi_no_minicube=%d2r_layouts%\json_db\playerinventoryexpansionlayouthd_nominicube_mode.json
REM Ŀ���ļ�
set mdk_minicube_expfile=%d2r_layouts%\playerinventoryexpansionlayouthd.json
set mdk_minicube_origfile=%d2r_layouts%\playerinventoryoriginallayouthd.json
set mdk_minicube_cube_file=%d2r_layouts%\horadriccubelayoutminihd.json

set mini_map_unit=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units.sprite
set mini_map_unit_mdk=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units_mdk.sprite
set mini_map_unit_low=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units.lowend.sprite
set mini_map_unit_low_mdk=.\mods\Demo\Demo.mpq\data\hd\global\ui\automap\units_mdk.lowend.sprite

REM �л��������Ӵ浵��
set d2r_save=%USERPROFILE%\Saved Games\Diablo II Resurrected
set c_save_sign=.\mods\Demo\Demo.mpq\current_sharebox.shareboxsign
set c_save_sharebox_num=0
set box_current=%d2r_save%\SharedStashSoftCoreV2.d2i
set box_current_backup=%d2r_save%\SharedStashSoftCoreV2_backup.d2i

REM �̿;���ͼ��
set ass_charge_up=.\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive_damage_3.json
set ass_charge_missiles=.\mods\Demo\Demo.mpq\data\hd\missiles\missiles.json

REM ===�������ý���ʹ��set===
set rule_addr=%d2r_strings%\json_db\rule

REM ===�����ļ���ɲ��ֶ���===
set NoDropCheck=.\mods\Demo\Demo.mpq\data\hd\global\ui\DropFilter

REM ===�����ļ��жϱ�־�ļ����壬��־�ļ�Ϊ����ļ�ǰ��s_===
set gem_head=%rule_addr%\head.json
set gem_end=%rule_addr%\end.json
set format=%rule_addr%\format.json
set rewrite=%rule_addr%\rewrite.json
set drop_no=%rule_addr%\nodrop.json
set drop_show=%rule_addr%\showdrop.json
set arrow_no=%rule_addr%\arrow_hide.json
set arrow_icon=%rule_addr%\arrow_icon.json
set arrow_text=%rule_addr%\arrow_text.json
set arrow_texticon=%rule_addr%\arrow_text_icon.json
set gem_icon=%rule_addr%\gem_icon.json
set gem_text=%rule_addr%\gem_text.json
set gem_texticon=%rule_addr%\gem_text_icon.json
set gem_icon_tip=%rule_addr%\gem_icon_tip.json
set gem_text_tip=%rule_addr%\gem_text_tip.json
set gem_texticon_tip=%rule_addr%\gem_text_icon_tip.json
set ring_icon=%rule_addr%\ring_icon.json
set ring_text=%rule_addr%\ring_text.json
set ring_texticon=%rule_addr%\ring_text_icon.json
set ring_hide=%rule_addr%\ring_hide.json
set rune_notip=%rule_addr%\blank.json
set rune_tip=%rule_addr%\rune_tip.json
set scroll_icon=%rule_addr%\scroll_icon.json
set scroll_text=%rule_addr%\scroll_text.json
set scroll_texticon=%rule_addr%\scroll_text_icon.json
set pole_show=%rule_addr%\blank.json
set pole_nodrop=%rule_addr%\nodrop_4s_polearm.json
set low_red=%rule_addr%\low_red.json
set low_black=%rule_addr%\low_black.json
set low_hide=%rule_addr%\low_hide.json

set potion_show=%rule_addr%\blank.json
set potion_nodrop=%rule_addr%\nodrop_potion.json
set rvs_show=%rule_addr%\blank.json
set rvs_nodrop=%rule_addr%\nodrop_rvs.json

set s_drop_no=%rule_addr%\a_no.drop
set s_drop_show=%rule_addr%\a_show.drop
set all_drop_sign=%rule_addr%\*.drop

set s_arrow_icon=%rule_addr%\a_icon.arrow
set s_arrow_text=%rule_addr%\a_text.arrow
set s_arrow_texticon=%rule_addr%\a_texticon.arrow
set s_arrow_no=%rule_addr%\a_no.arrow
set all_arrow_sign=%rule_addr%\*.arrow

set s_gem_icon=%rule_addr%\a_icon.gem
set s_gem_text=%rule_addr%\a_text.gem
set s_gem_texticon=%rule_addr%\a_texticon.gem
set s_gem_icon_tip=%rule_addr%\a_icon_tip.gem
set s_gem_text_tip=%rule_addr%\a_text_tip.gem
set s_gem_texticon_tip=%rule_addr%\a_texticon_tip.gem
set all_gem_sign=%rule_addr%\*.gem

set s_rune_notip=%rule_addr%\a_notip.rune
set s_rune_tip=%rule_addr%\a_tip.rune
set all_rune_sign=%rule_addr%\*.rune

set s_ring_icon=%rule_addr%\a_icon.ring
set s_ring_text=%rule_addr%\a_text.ring
set s_ring_texticon=%rule_addr%\a_texticon.ring
set s_ring_hide=%rule_addr%\a_hide.ring
set all_ring_sign=%rule_addr%\*.ring

set s_scroll_icon=%rule_addr%\a_icon.scroll
set s_scroll_text=%rule_addr%\a_text.scroll
set s_scroll_texticon=%rule_addr%\a_texticon.scroll
set all_scroll_sign=%rule_addr%\*.scroll

set s_pole_show=%rule_addr%\a_show.pole
set s_pole_nodrop=%rule_addr%\a_nodrop.pole
set all_pole_sign=%rule_addr%\*.pole

set s_low_red=%rule_addr%\a_red.low
set s_low_black=%rule_addr%\a_black.low
set s_low_hide=%rule_addr%\a_hide.low
set all_low_sign=%rule_addr%\*.low

set s_potion_show=%rule_addr%\a_show.potion
set s_potion_nodrop=%rule_addr%\a_nodrop.potion
set all_potion_sign=%rule_addr%\*.potion

set s_rvs_show=%rule_addr%\a_show.rvs
set s_rvs_nodrop=%rule_addr%\a_nodrop.rvs
set all_rvs_sign=%rule_addr%\*.rvs

set gem_file=%item-gems%

set huaijiu_nodrop=%d2r_strings%-legacy\item-gems.json
set huaijiu_nodrop2=%d2r_strings%-legacy\mercenaries.json

REM ===������ϸ�������õĲ��ֶ���===
set s_drop=%drop_show%
set s_arrow=%arrow_texticon%
set s_scroll=%scroll_texticon%
set s_gem=%gem_texticon%
set s_rune=%rune_notip%
set s_ring=%ring_texticon%
set s_pole=%pole_show%
set s_low=%low_hide%
set s_potion=%potion_show%
set s_rvs=%rvs_show%

REM===���߸��ֹ���===
set offline_exskill=%d2r_excel%\offline\skills_plus.txt
set exp_mode260=%d2r_excel%\experience_260.txt
set exp_mode99=%d2r_excel%\experience_99.txt
set exp_mode_file=%d2r_excel%\experience.txt
set charstats_260=%d2r_excel%\charstats_260.txt
set charstats_file=%d2r_excel%\charstats.txt

set nowtime=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%_%time:~3,2%_%time:~6,2%

REM===���ߴ�����===
set offline_bigbox=%d2r_layouts%\bankexpansionlayouthd_bigbox.json
set offline_fullhire=%d2r_layouts%\hirelinginventorypanelhd_full.json
set layouts_folder=%d2r_layouts%

REM===������������ʹ��===
set high_rune_num=24 25 26 27 28 29 30 31 32 33
set high_rune_file_part=%d2r_sfx%\item\high_rune
set high_rune=%d2r_sfx%\item\high_rune.flac
set high_rune24=%d2r_sfx%\item\high_rune_24.flac
set high_rune25=%d2r_sfx%\item\high_rune_25.flac
set high_rune26=%d2r_sfx%\item\high_rune_26.flac
set high_rune27=%d2r_sfx%\item\high_rune_27.flac
set high_rune28=%d2r_sfx%\item\high_rune_28.flac
set high_rune29=%d2r_sfx%\item\high_rune_29.flac
set high_rune30=%d2r_sfx%\item\high_rune_30.flac
set high_rune31=%d2r_sfx%\item\high_rune_31.flac
set high_rune32=%d2r_sfx%\item\high_rune_32.flac
set high_rune33=%d2r_sfx%\item\high_rune_33.flac
set d3drop=%d2r_sfx%\item\high_rune_D3Legend.flac
set d3dropandmusic=%d2r_sfx%\item\high_rune_D3Legend_music.flac
set jinse=%d2r_sfx%\item\HEARTHSTONE.flac
set item_rune=%d2r_sfx%\item\item_rune_hd(D2_ORIGINAL).flac
set states_end_sound_folder=%d2r_sfx%\states_end_sound
set states_end_sound=%d2r_excel%\states.txt
set zhongli_sound=%d2r_sfx%\skill\barbarian\circle1_hd.flac

set hp_style=default
set target_profile=%d2r_layouts%\_profilehd.json
set target_hp_color=.\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hud_02\healthmanaanimation\healthidle\4k\globe_color_hp.sprite
set target_mp_color=.\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hud_02\healthmanaanimation\healthidle\4k\globe_color_mp.sprite
set profile_dir=%d2r_layouts%\json_db\_profilehd_

set battlecommand_end_sign=%d2r_sfx%\states_end_sound\mdk\battlecommand_end.sesign
set battleorders_end_sign=%d2r_sfx%\states_end_sound\mdk\battleorders_end.sesign
set shout_end_sign=%d2r_sfx%\states_end_sound\mdk\shout_end.sesign

set bonearmor_end_sign=%d2r_sfx%\states_end_sound\mdk\bonearmor_end.sesign
set holyshield_end_sign=%d2r_sfx%\states_end_sound\mdk\holyshield_end.sesign

set cyclonearmor_end_sign=%d2r_sfx%\states_end_sound\mdk\cyclonearmor_end.sesign
set morph_end_sign=%d2r_sfx%\states_end_sound\mdk\morph_end.sesign
set markwolf_end_sign=%d2r_sfx%\states_end_sound\mdk\markwolf_end_sign.sesign
set markbear_end_sign=%d2r_sfx%\states_end_sound\mdk\markbear_end_sign.sesign

set venom_end_sign=%d2r_sfx%\states_end_sound\mdk\venom_end.sesign
set bladeshield_end_sign=%d2r_sfx%\states_end_sound\mdk\bladeshield_end.sesign
set burstofspeed_end_sign=%d2r_sfx%\states_end_sound\mdk\burstofspeed_end.sesign
set fade_end_sign=%d2r_sfx%\states_end_sound\mdk\fade_end.sesign

set frozenarmor_end_sign=%d2r_sfx%\states_end_sound\mdk\frozenarmor_end.sesign
set shiverarmor_end_sign=%d2r_sfx%\states_end_sound\mdk\shiverarmor_end.sesign
set chillingarmor_end_sign=%d2r_sfx%\states_end_sound\mdk\chillingarmor_end.sesign
set enchant_end_sign=%d2r_sfx%\states_end_sound\mdk\enchant_end.sesign
set energyshield_end_sign=%d2r_sfx%\states_end_sound\mdk\energyshield_end.sesign
set states_end_sound_folder=%d2r_sfx%\states_end_sound

set cubemain_ex=%d2r_excel%\cubemain.txt

:SetupMain
@Cls
@set CurrentMenu=main
@ECHO OFF
@ echo.	
REM @ echo.                   ����������������������������������������������������������������������������������������������������������������������������
REM @ echo.����               ��                     D2R Demo MOD �Զ���������                 ��
REM @ echo.����               ��                         Ver.%Ver%                           ��
REM @ echo.                   ����������������������������������������������������������������������������������������������������������������������������
@ echo.	����������������������D2R Demo MOD �Զ��������� By Demo  Ver.%Ver%����������������������
@ echo.				 

@ echo.	 ������ �� X �� ���� ����������ʾ���ι������ý��桷 ��
@ echo.	 ������ �� C �� ���� ����Ѫ����ɫ����Ϸ��Чѡ����� ����
@ echo.	 ������ �� V �� ���� ������ϷUI������ý��� ����
@ echo.				 
@ echo.	 �������������԰汾���������ļ��໥�������л��������������������á�����
if not exist %lang_zhTW_cht% (
@ echo.	 ����Ϸ���԰汾��	���롾=�� �л�˳�򣺡����ư深�塿�� �ɰ淭�뷱�� �� ���ư���� �� �����������
) else if not exist %lang_zhTW_cht_OLD% (
@ echo.	 ����Ϸ���԰汾��	���롾=�� �л�˳�����ư深��� ���ɰ淭�뷱�� ���� ���ư���� �� �����������
) else if not exist %lang_zhTW_chs% (
@ echo.	 ����Ϸ���԰汾��	���롾=�� �л�˳�����ư深��� �ɰ淭�뷱�� �� �����ư���� ���� �����������
) else if not exist %lang_zhCN% (
@ echo.	 ����Ϸ���԰汾��	���롾=�� �л�˳�����ư深��� �ɰ淭�뷱�� �� ���ư���� �� ������������塿
) else (
@ echo.	 ��δ֪���԰汾��	���롾=�� �л�˳�����ư深��� �ɰ淭�뷱�� �� ���ư���� �� �����������
) 
@ echo.	 

if not exist %font_fangxing% (
@ echo.	 ����ͨģʽ�������塿	���롾[�� �л�˳��׼Բ��������������ԭ�淽�Ρ������ִ�ڡ���ѩ����	
) else if not exist %font_dahei% (
@ echo.	 ����ͨģʽ�������塿	���롾[�� �л�˳��׼Բ������������ԭ�淽�Ρ������ִ�ڡ�����ѩ����	
) else if not exist %font_baoxue% (
@ echo.	 ����ͨģʽ�������塿	���롾[�� �л�˳��׼Բ������������ԭ�淽�Ρ����ִ�ڡ�����ѩ���ʡ�	
) else if not exist %font_zhunyuan% (
@ echo.	 ����ͨģʽ�������塿	���롾[�� �л�˳�򣺡�׼Բ��������������ԭ�淽�Ρ����ִ�ڡ���ѩ����	
) else if not exist %font_heiti% (
@ echo.	 ����ͨģʽ�������塿	���롾[�� �л�˳��׼Բ�������塿�������ԭ�淽�Ρ����ִ�ڡ���ѩ����	
) else if not exist %font_libian% (
@ echo.	 ����ͨģʽ�������塿	���롾[�� �л�˳��׼Բ������������䡿��ԭ�淽�Ρ����ִ�ڡ���ѩ����	
) else ( 
@ echo.	 ����ȡ������ʧ�ܡ�	���롾[�� ���� ������ǿ����Ϊԭ�淽�����塿  
)
if not exist %d2eng_fonts% (
@ echo.	 ����ͨģʽӢ�����塿	���롾]�� �л�˳�򣺡�����2ԭ��Ӣ�����塿��������������ͬ�����ú����������壩
) else (
@ echo.	 ����ͨģʽӢ�����塿	���롾]�� �л�˳�򣺰���2ԭ��Ӣ���������������������ͬ�������ú����������壩
)

if not exist %hj_font_fangsong% (
@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺡��������塿����Բ���������ͳ���������Բ����
) else if not exist %hj_font_qingyuan% (
@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷������������Բ���塿������ͳ���������Բ����
) else if not exist %hj_font_ruixiantong% ( 
@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷����������Բ�����������ͳ�����塿����Բ����
) else if not exist %hj_font_youyuan% ( 
@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷����������Բ���������ͳ�����������Բ���塿
) else (
@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷��Ρ���Բ������ͳ�����Բ����
)

@ echo.	 
@ echo.��	�������� Demo MOD ��ɫ�������ò��� ��������
@ echo.	 ��ǰ״̬���ص��Թ����������
if not exist %entry_guider% (
@ echo.	  ��  ���롾1�� �л� ����ɫ�����̡�������Ȧ+������ϡ��������ر���������
) else if not exist %entry_guider_c% (
@ echo.	  ��  ���롾1�� �л� ����ɫ��������������Ȧ+������ϡ̡������ر���������
) else (
@ echo.	  ��  ���롾1�� �л� ����ɫ��������������Ȧ+������ϡ��������ر������̡�
)
if exist %wp_guider% (
@ echo.	 ��ǰ״̬�����͵��ɫ������������ͼ�ã� �̡�	���롾2�� ���� ���رմ��͵����������  
) else (
@ echo.	 ��ǰ״̬�����͵��ɫ������������ͼ�ã� ����	���롾2�� ���� ���򿪴��͵����������  
)
if exist %lc_light% (
@ echo.	 ��ǰ״̬��LC������� �̡�			���롾3�� ���� ��ȥ�����������LC���ӣ��Ĺ���Ч����  
) else (
@ echo.	 ��ǰ״̬��LC������� ����			���롾3�� ���� �����Ӵ��������LC���ӣ��Ĺ���Ч����  
)

if exist %sc_light% (
@ echo.	 ��ǰ״̬��SC/GC������� �̡�			���롾4�� ���� ��ȥ��С��/���������SC/GC���ӣ��Ĺ���Ч����  
) else (
@ echo.	 ��ǰ״̬��SC/GC������� ����			���롾4�� ���� ������С��/���������SC/GC���ӣ��Ĺ���Ч����  
)

if exist %amulet_light% (
@ echo.	 ��ǰ״̬���������� �̡�			���롾5�� ���� ��ȥ������������Ч����  
) else (
@ echo.	 ��ǰ״̬���������� ����			���롾5�� ���� ����������������Ч����  
)

if exist %ring_light% (
@ echo.	 ��ǰ״̬����ָ���� �̡�			���롾6�� ���� ��ȥ����ָ������Ч����  
) else (
@ echo.	 ��ǰ״̬����ָ���� ����			���롾6�� ���� �����ӽ�ָ������Ч����  
)

if not exist %all_gem% (
@ echo.	 ��ǰ״̬����ʯ���������С�			���롾7�� ���� �����/����/�鱦 �й���Ч����ȫ�С��߼����رգ���  
) else if not exist %high_gem% (
@ echo.	 ��ǰ״̬����ʯ���������/����/�鱦��		���롾7�� ���� ���رձ�ʯ����Ч�����߼����رա�ȫ������  
) else (
@ echo.	 ��ǰ״̬����ʯ�������رա�			���롾7�� ���� ��ȫ����ʯ ����Ч�����رա�ȫ�����߼�����  
)
if not exist %all_rune_light% (
@ echo.	 ��ǰ״̬�����ĵ�����Ч�����з��Ĵ���Ч��	���롾8�� ���� ���ߵȷ��Ĺ���+�ǹ�Ч��������ȫ����Ч��
) else if not exist %high_rune_star_light% (
@ echo.	 ��ǰ״̬�����ĵ�����Ч���ߵȷ��Ĺ���+�ǹ�Ч�������롾8�� ���� ���ߵȷ��Ľ�����Ч��������ȫ����Ч��
) else if not exist %high_rune_light% (
@ echo.	 ��ǰ״̬�����ĵ�����Ч���ߵȷ��Ľ�����Ч����	���롾8�� ���� ���رշ�����Ч��
) else (
@ echo.	 ��ǰ״̬�����ĵ�����Ч���رա�			���롾8�� ���� ��ȫ���Ĺ�����Ч���ߵȷ����ǹ���Ч��  
)
if exist %craft_rune_light% (
@ echo.	 ��ǰ״̬��4/8/11/12#�ֹ����Ĺ������й�����	���롾9�� ���� ���ֹ������޹���Ч����  
) else (
@ echo.	 ��ǰ״̬��4/8/11/12#�ֹ����Ĺ������޹�����	���롾9�� ���� ���ֹ������й���Ч����  
)
if exist %pause_file% (
@ echo.	 ��ǰ״̬��*��ͣ������ʾ����װ��ͼ����ť �̡� 	���롾PAUSE�� ���� ���رհ���װ��ͼ����ť��  
) else (
@ echo.	 ��ǰ״̬��*��ͣ������ʾ����װ��ͼ����ť ���� 	���롾PAUSE�� ���� ����������װ��ͼ����ť��  
)
if exist %autorun_off% (
@ echo.	 ��ǰ״̬��*�Զ��������㷽�С�Ѫ������ʾ�������� ���� ���롾AUTO�� ���� �������Զ��������ܡ�  
) else (
@ echo.	 ��ǰ״̬��*�Զ��������㷽�С�Ѫ������ʾ�������� �̡� ���롾AUTO�� ���� ���ر��Զ��������ܡ�  
)
@ echo.
@ echo.	 װ�������֮����Ϣ��ʾģʽ��
if exist %tucao_sign%  (
@ echo.	  ��  ���롾Q�� �л� �����²̡ۡ����������²ۡ����������пɷ���������
) else if exist %no_tucao_sign%  (
@ echo.	  ��  ���롾Q�� �л� �����²ۡ������������²̡ۡ��������пɷ���������
) else (
@ echo.	  ��  ���롾Q�� �л� �����²ۡ������������²ۡ����������пɷ������̡�
)

if exist %baseinfo_txt_sign%  (
	@ echo.	 ��ǰ״̬���ײ���Ϣ����ʾ�ײĸ�����Ϣ��		���롾T�� ���� ���رյײĸ�����Ϣ��  

	if exist %base_with_english_sign%  (
	@ echo.	  ��  ���롾Y�� �л��ײ���Ϣ�����ײ���Ӣ�����̡������ײ���Ӣ��������������װ����Ϣ����
	) else if exist %base_no_baseinfo_sign% (
	@ echo.	  ��  ���롾Y�� �л��ײ���Ϣ�����ײ���Ӣ�������������ײ���Ӣ��������������װ����Ϣ�̡�
	) else (
	@ echo.	  ��  ���롾Y�� �л��ײ���Ϣ�����ײ���Ӣ�������������ײ���Ӣ�����̡�������װ����Ϣ����
	)
) else (
	@ echo.	 ��ǰ״̬���ײ���Ϣ������ʾ�ײĸ�����Ϣ��	���롾T�� ���� ����ʾ�ײ���ϸ��Ϣ��  
)
if exist %old_baseinfo_txt_sign%  (
	@ echo.	  ��  *���롾Y1�� �л��ײ���Ϣ��ʾ�汾�����ɰ�������͵ײ���ʾ�̡������°�ͼƬ�͵ײ���ʾ����
) else (
	@ echo.	  ��  *���롾Y1�� �л��ײ���Ϣ��ʾ�汾�����ɰ�������͵ײ���ʾ���������°�ͼƬ�͵ײ���ʾ�̡�
)
@ echo.

if exist %function_btn% (
@ echo.	 ��ǰ״̬����ʾ��ձ��䡢���͵�ȹ��ܰ��� �̡�	���롾W�� ���� ���ر���հ������ܡ�  
) else (
@ echo.	 ��ǰ״̬����ʾ��ձ��䡢���͵�ȹ��ܰ��� ����	���롾W�� ���� ��������հ������ܡ�  
)
if exist %mdk_minicube_bigfont_mode_sign% (
@ echo.	 ��ǰ״̬��ʹ�����㷽�� * �Ŵ�������� �̡� 	���롾E�� ���� ���ر����㷽�С� 
) else if exist %mdk_minicube_normal_old_mode_sign% (
@ echo.	 ��ǰ״̬��ʹ�����㷽�У��ɰ棩 * Ĭ�Ͻ���̡�	���롾E�� ���� �����㷽�� �Ŵ�������桿 
) else if exist %mdk_minicube_normal_mode_sign% (
@ echo.	 ��ǰ״̬��ʹ�����㷽�У��°棩 * Ĭ�Ͻ���̡�	���롾E�� ���� �����㷽�У��ɰ棩 Ĭ�Ͻ��桿 
) else (
@ echo.	 ��ǰ״̬��ʹ�����㷽�У��رգ� ����		���롾E�� ���� ���������㷽�У��°棩 Ĭ�Ͻ��桿 
)
if exist %anya_shop% (
@ echo.	 ��ǰ״̬��ˢװ��ģʽ���ض�����+��������ɫ���̡� ���롾R�� ���� ������Ϊˢ�ײ�ģʽ��
) else if exist %base_shop% (
@ echo.	 ��ǰ״̬��ˢ�ײ�ģʽ���ǵײı��+�ض�����+�ײĲ���ɫ���̡� ���롾R�� ���� ���ر�ˢ�̵�ģʽ��
) else (
@ echo.	 ��ǰ״̬��ͨ���̵�ģʽ���ض�װ������ɫ������ 	���롾R�� ���� ������Ϊˢװ��ģʽ��
)

if exist %objects_aura% (
@ echo.	 ��ǰ״̬����������Ʒ����̡�			���롾U�� ���� ���رձ�������Ʒ���⡿  
) else (
@ echo.	 ��ǰ״̬����������Ʒ���� ����			���롾U�� ���� ��������������Ʒ���⡿  
)
if exist %dest_aura% (
@ echo.	 ��ǰ״̬�����߻���Ʒ��ʶ�̡�			���롾I�� ���� ���رտ��߻���Ʒ�ķ��⡿  
) else (
@ echo.	 ��ǰ״̬�����߻���Ʒ��ʶ ����			���롾I�� ���� ���������߻���Ʒ���⡿  
)
if exist %shrines_light% (
@ echo.	 ��ǰ״̬����̳��ˮ���������� �̡�		���롾O�� ���� ���ر���̳��ˮ������������  
) else (
@ echo.	 ��ǰ״̬����̳��ˮ���������� ����		���롾O�� ���� ��������̳��ˮ������������  
)
if exist %player_light% (
@ echo.	 ��ǰ״̬��ȫͼ��Դ����������Ӱ���� �̡�	���롾P�� ���� ���ر�ȫͼ��Դ��  
) else (
@ echo.	 ��ǰ״̬��ȫͼ��Դ����������Ӱ���� ����	���롾P�� ���� ������ȫͼ��Դ��  
)
@ echo.

@ echo.	 ���︨�����״̬ģʽ������ѡ������һ��ģʽ����
if exist %enemy_nosign% (
@ echo.	 ��ǰ���� ��ԭ��ģʽ���������κθ������ ���� 
) else if exist %enemy_nolight% (
@ echo.	 ��ǰ���� ������ģʽһ��Σ�չ����з��ı�� �̡� 
) else if exist %enemy_light_2% (
@ echo.	 ��ǰ���� ������ģʽ��������ŵ׼ӹ�Դ��Σ�չ����з��ı�� �̡� 
) else if exist %enemy_light_1% (
@ echo.	 ��ǰ���� ��HC����ģʽ����������ؼӹ�Դ��ͷ�ϼӹ�����ǣ�Σ�չ����з��ı�� �̡� 
) else (
@ echo.	 ��ǰ���� ��δ֪ģʽ�� 
)
@ echo.		 ��  ���롾A�� ѡ��ԭ��ģʽ���������κθ�����ǡ� 
@ echo.		 ��  ���롾S�� ѡ�񡾸���ģʽһ��Σ�չ����з��ı�ǡ� 
@ echo.		 ��  ���롾D�� ѡ�񡾸���ģʽ��������ŵ׼ӹ�Դ��Σ�չ����з��ı�ǡ� 
@ echo.		 ��  ���롾F�� ѡ��HC����ģʽ����������ؼӹ�Դ��ͷ�ϼӹ�����ǣ�Σ�չ����з��ı�ǡ� 


@ echo.	 ������Ϸ���ڵ����ߵ�ģ�ͣ�
if exist %del_travincal_hall% (
@ echo.		 ��  ���롾H�� �л������δ޷�����������ǽ������Χ���� �̡� 
) else (
@ echo.		 ��  ���롾H�� �л������δ޷�����������ǽ������Χ���� ����  
)
if exist %del_chaos_door% (
@ echo.		 ��  ���롾J�� �л������λ������������ �̡� 
) else (
@ echo.		 ��  ���롾J�� �л������λ������������ ���� 
)
if exist %del_act4_lava% (
@ echo.		 ��  ���롾K�� �л������λ���֮�ӵ��ҽ� �̡� 
) else (
@ echo.		 ��  ���롾K�� �л������λ���֮�ӵ��ҽ� ���� 
)
if exist %del_ballair_pillars% (
@ echo.		 ��  ���롾L�� �л������ΰͶ������е����������� �̡�
) else (
@ echo.		 ��  ���롾L�� �л������ΰͶ������е����������� ����
) 


@ echo.
@ echo.	 ���롾G�� ����DIY�޸Ľ�ҡ��������п�װ����ɫ����ϵͳ������ɫ�����ļ���profilehd.json��
@ echo.	 ���롾B�� ����DIY�޸ķ��ġ�BUFF������Ч��	����Ч�ļ��У�sfxĿ¼��
@ echo.	 ���롾N�� ����DIY�޸ĵ�����ʾ�����		�򿪵�������Զ����ļ���item-gems.json��
@ echo.	 ���롾M�� ����DIY�޸ĵײ���Ϣ��		�򿪵ײ���Ϣ�Զ����ļ���item-nameaffixes.json��
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="[" Goto set_font_file
if /i "%obj%"=="{" Goto set_font_file
if /i "%obj%"=="��" Goto set_font_file
if /i "%obj%"=="-" Goto show_font_picture
if /i "%obj%"=="=" Goto set_lang_ver
if /i "%obj%"=="]" Goto set_d2_oringnal_english_font
if /i "%obj%"=="}" Goto set_d2_oringnal_english_font
if /i "%obj%"=="��" Goto set_d2_oringnal_english_font

if /i "%obj%"=="HJ" Goto set_hj_font_file

if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

if /i "%obj%"=="1" Goto set_enter_lightbeam_guider
if /i "%obj%"=="2" Goto set_waypoint_lightbeam_guider
if /i "%obj%"=="3" Goto set_large_charm_lightbeam_sign
if /i "%obj%"=="4" Goto set_small_charm_lightbeam_sign
if /i "%obj%"=="5" Goto set_amulet_lightbeam_sign
if /i "%obj%"=="6" Goto set_ring_lightbeam_sign
if /i "%obj%"=="7" Goto set_gems_lightbeam_sign
if /i "%obj%"=="8" Goto set_runes_lightbeam_sign
if /i "%obj%"=="9" Goto set_craft_runes_lightbeam_sign

if /i "%obj%"=="AUTO" Goto set_change_autorun_switch
if /i "%obj%"=="PAUSE" Goto set_pause_file

if /i "%obj%"=="Q" Goto set_equipment_with_tucao
if /i "%obj%"=="W" Goto set_hollow_function
if /i "%obj%"=="E" Goto set_mini_horadric_cube
if /i "%obj%"=="R" Goto set_roll_shop_mode
if /i "%obj%"=="T" Goto set_show_baseinfo
if /i "%obj%"=="Y" Goto set_base_with_english
if /i "%obj%"=="Y1" Goto set_old_baseinfo_ver

if /i "%obj%"=="U" Goto set_chests_with_light
if /i "%obj%"=="I" Goto set_destructibles_with_light
if /i "%obj%"=="O" Goto set_shrines_light
if /i "%obj%"=="P" Goto set_player_light

if /i "%obj%"=="A" Goto set_no_mark_mode
if /i "%obj%"=="S" Goto set_only_rune_mark_mode
if /i "%obj%"=="D" Goto set_light_mark_mode
if /i "%obj%"=="F" Goto set_lightbeam_mark_mode

if /i "%obj%"=="H" Goto set_del_travincal_hall
if /i "%obj%"=="J" Goto set_del_chaos_door
if /i "%obj%"=="K" Goto set_del_act4_lava
if /i "%obj%"=="L" Goto set_del_ballair_pillars

if /i "%obj%"=="G" Goto open_sys_base_color_folder
if /i "%obj%"=="B" Goto open_game_sound_folder
if /i "%obj%"=="N" Goto open_item_gems_file
if /i "%obj%"=="M" Goto open_item_nameaffixes_file

@echo.
@echo	  ��Ч���룬�뿴����� �����е���ĸ�������룡
@echo.
pause
ping -n 1 127.1>nul 
goto SetupMain

:set_old_baseinfo_ver

if exist %old_baseinfo_txt_sign%  (
	@ echo.	  ��  *���롾Y2�� �л��ײ���Ϣ��ʾ�汾�����ɰ�������͵ײ���ʾ�̡������°�ͼƬ�͵ײ���ʾ����
	del %old_baseinfo_txt_sign%
	copy /Y %new_baseinfo_ver_file% %d2r_strings%\bnet.json
) else (
	@ echo.	  ��  *���롾Y1�� �л��ײ���Ϣ��ʾ�汾�����ɰ�������͵ײ���ʾ���������°�ͼƬ�͵ײ���ʾ�̡�
	@ECHO.  "x">%old_baseinfo_txt_sign%
	copy /Y %old_baseinfo_ver_file% %d2r_strings%\bnet.json
)

Goto FunctionEnd

:set_pause_file
if exist %pause_file% (
@ echo.	 ���� ���رհ���װ��ͼ����ť��  
ren %d2r_layouts%\pauselayouthd.json pauselayouthd_mdk.json
) else (
@ echo.	 ���� ����������װ��ͼ����ť��  
ren %d2r_layouts%\pauselayouthd_mdk.json pauselayouthd.json
)
Goto FunctionEnd

:set_change_autorun_switch
if exist %autorun_off% (
	if exist %autorun_file% (
	del %autorun_file%
	copy /Y %autorun_backup% %autorun_off%
	)
)
if exist %autorun_off% (
	@echo. ��ǰ�ر����������ļ�����תΪ����
	del %autorun_file%
	ren %autorun_off% hudwarningshd.json
	copy /Y %AutorunCheck%\OK.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\OK.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
) else (
	@echo. ��ǰʹ�����������ļ������ر�������
	ren %autorun_file% hudwarningshd.mdk.json
	copy /Y %noautorun_file% %autorun_file%
	copy /Y %AutorunCheck%\CLOSE.sprite %AutorunCheck%\CHECK.sprite
	copy /Y %AutorunCheck%\CLOSE.lowend.sprite %AutorunCheck%\CHECK.lowend.sprite
)

Goto FunctionEnd

:set_del_travincal_hall
	if exist %del_travincal_hall% (
	@ echo.		 ��  ���롾H�� ѡ�����δ޷�����������ǽ������Χ���� �̡� 
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travn.json travn_mdk.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travsw.json travsw_mdk.json
	) else (
	@ echo.		 ��  ���롾H�� ѡ�����δ޷�����������ǽ������Χ���� ����  
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travn_mdk.json travn.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act3\travincal\travsw_mdk.json travsw.json
	)
Goto FunctionEnd
:set_del_chaos_door
	if exist %del_chaos_door% (
	@ echo.		 ��  ���롾J�� ѡ�����λ������������ �̡� 
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act4\diab\entry1.json entry1_mdk.json
	) else (
	@ echo.		 ��  ���롾J�� ѡ�����λ������������ ���� 
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\act4\diab\entry1_mdk.json entry1.json
	)
Goto FunctionEnd
:set_del_act4_lava
	if exist %del_act4_lava% (
		@ echo.		 ��  ���롾K�� ѡ�����λ���֮�ӵ��ҽ� �̡� 
		ren .\mods\Demo\Demo.mpq\data\hd\env\model\act4\lava lava_mdk
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hell_smoke.json
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hellfire_1.json
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hellfire_2.json
		del .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\hellfire_3.json
	) else (
	@ echo.		 ��  ���롾K�� ѡ�����λ���֮�ӵ��ҽ� ���� 
		ren .\mods\Demo\Demo.mpq\data\hd\env\model\act4\lava_mdk lava
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hell_smoke.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hellfire_1.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hellfire_2.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
		copy /Y .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only\mdk\hellfire_3.json .\mods\Demo\Demo.mpq\data\hd\objects\vfx_only
	)
Goto FunctionEnd
:set_del_ballair_pillars
	if exist %del_ballair_pillars% (
	@ echo.		 ��  ���롾L�� ѡ�����ΰͶ������е����������� �̡�
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\expansion\baallair\wthrone.json wthrone_mdk.json
	) else (
	@ echo.		 ��  ���롾L�� ѡ�����ΰͶ������е����������� ����
	ren .\mods\Demo\Demo.mpq\data\hd\env\preset\expansion\baallair\wthrone_mdk.json wthrone.json
	) 
Goto FunctionEnd

:set_show_baseinfo
if exist %baseinfo_txt_sign%  (
	@ echo.	 ���� ���رյײĸ�����Ϣ��  
	ren %d2r_excel%\armor.txt armor.txt.mdk
	ren %d2r_excel%\weapons.txt weapons.txt.mdk
) else (
	@ echo.	 ���� ����ʾ�ײ���ϸ��Ϣ��  
	ren %d2r_excel%\armor.txt.mdk armor.txt
	ren %d2r_excel%\weapons.txt.mdk weapons.txt
)
Goto FunctionEnd

:set_base_with_english
if exist %base_with_english_sign%  (
	@ echo.	 ��ǰ��Ӣ�ģ����� ���ر�Ӣ������ 
	copy /Y %base_without_english% %item-nameaffixes%
	del %base_with_english_sign%
	del %base_no_baseinfo_sign%
) else if exist %base_no_baseinfo_sign% (
	@ echo.	 ��ǰ�޵ײ���Ϣ������ ������Ӣ������ 
	copy /Y %base_with_english% %item-nameaffixes%
	del %base_no_baseinfo_sign%
	@ECHO.  "x">%base_with_english_sign%
) else (
	@ echo.	 ��ǰ��Ӣ�ģ����� ���޵ײ���Ϣ��  
	copy /Y %base_no_baseinfo% %item-nameaffixes%
	del %base_with_english_sign%
	@ECHO.  "x">%base_no_baseinfo_sign%
)
Goto FunctionEnd

:set_shrines_light

if exist %shrines_light% (
	@ echo.	 ���� ���ر���̳��ˮ������������  
	ren %objects_folder%\shrines_healthmana shrines_healthmana_mdk
	ren %objects_folder%\shrines_other shrines_other_mdk
	ren %objects_folder%\wells wells_mdk
) else (
	@ echo.	 ���� ��������̳��ˮ������������  
	ren %objects_folder%\shrines_healthmana_mdk shrines_healthmana
	ren %objects_folder%\shrines_other_mdk shrines_other
	ren %objects_folder%\wells_mdk wells
)
Goto FunctionEnd

:set_player_light
if exist %player_light% (
@ echo.	 ���� ���ر�ȫͼ��Դ��  
ren .\mods\Demo\Demo.mpq\data\hd\character\player player_mu
) else (
@ echo.	 ���� ������ȫͼ��Դ��  
ren .\mods\Demo\Demo.mpq\data\hd\character\player_mu player
)
Goto FunctionEnd



:set_mini_horadric_cube
	@ echo. ��������
	if not exist %offline_bigbox%  (
		@cls
		@ echo. ���ȹرա�������Ϸ * �����ӡ������ٵ����������á�
		pause
		Goto FunctionEnd
	)
if exist %mdk_minicube_normal_mode_sign% (
	@ echo.	 ���� ���������㷽�� OLD��ͨģʽ��  
	copy /Y %mdk_minicube_hc_old_normal% %mdk_minicube_cube_file%
	copy /Y %mdk_minicube_pi_old_expfile% %mdk_minicube_expfile%
	copy /Y %mdk_minicube_pi_old_origfile% %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
	@echo. "x"> %mdk_minicube_normal_old_mode_sign%
) else if exist %mdk_minicube_normal_old_mode_sign% (
	@ echo.	 ���� �����㷽�� ������ģʽ��
	copy /Y %mdk_minicube_hc_bigfont_mode% %mdk_minicube_cube_file%
	copy /Y %mdk_minicube_pi_old_expfile% %mdk_minicube_expfile%
	copy /Y %mdk_minicube_pi_old_origfile% %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
	@echo. "x"> %mdk_minicube_bigfont_mode_sign%
) else if exist %mdk_minicube_bigfont_mode_sign% (
	@ echo.	 ���� ���ر����㷽�С�
	copy /Y %mdk_minicube_pi_no_minicube% %mdk_minicube_expfile%
	del %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
) else (
	@ echo.	 ���� ���������㷽����ģʽ��
	@echo. %mdk_minicube_hc_new_normal%
	@echo. %mdk_minicube_pi_new_expfile%
	copy /Y %mdk_minicube_hc_new_normal% %mdk_minicube_cube_file%
	copy /Y %mdk_minicube_pi_new_expfile% %mdk_minicube_expfile%
	del %mdk_minicube_origfile%
	del %mdk_minicube_allsign%
	@echo. "x"> %mdk_minicube_normal_mode_sign%
)
Goto FunctionEnd


:set_d2_oringnal_english_font
if not exist %d2eng_fonts% (
@ echo.	 ���� ����ʹ��ԭ��Ӣ�����壨���������壩��
ren %d2r_ui%\fonts D2ENG_Fonts
ren %d2r_ui%\HA_fonts fonts
) else (
@ echo.	 ���� ��ʹ��ԭ��Ӣ�����壨���������壩��
ren %d2r_ui%\fonts HA_fonts
ren %d2r_ui%\D2ENG_Fonts fonts
)
Goto FunctionEnd


:set_hollow_function
if exist %function_btn% (
@ echo.	 ���� ���ر���հ������ܡ�  
ren .\mods\Demo\Demo.mpq\data\hd\global\ui\mdk\mdk mdk_btn
) else (
@ echo.	 ���� ��������հ������ܡ�  
ren .\mods\Demo\Demo.mpq\data\hd\global\ui\mdk\mdk_btn mdk
)
goto FunctionEnd


:show_font_picture
����չʾ.jpg
goto SetupMain


:set_no_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_nosign%
goto FunctionEnd

:set_only_rune_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_nolight\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_nolight%
goto FunctionEnd

:set_light_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_light_2\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_light_2%
goto FunctionEnd

:set_lightbeam_mark_mode
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_light_1\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_light_1%
goto FunctionEnd

:�׹���ģʽ
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\enemy_light_3\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
del .\mods\Demo\Demo.mpq\data\hd\character\*.enemysign
@ECHO.  "x">%enemy_light_3%
goto FunctionEnd

:set_destructibles_with_light
if exist %dest_aura% (
@ echo.	 ���� ���رտ��߻���Ʒ�ķ����׷�ӹ�Դ��  
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\*.json mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\barrel_exploding.json mods\Demo\Demo.mpq\data\hd\objects\destructibles
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\exploding_chest_100.json mods\Demo\Demo.mpq\data\hd\objects\destructibles
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\ice_cave_evil_urn.json mods\Demo\Demo.mpq\data\hd\objects\destructibles

) else (
@ echo.	 ���� ���������߻���Ʒ���Ⲣ׷�ӹ�Դ��  
move /Y mods\Demo\Demo.mpq\data\hd\objects\destructibles\mdk\*.json mods\Demo\Demo.mpq\data\hd\objects\destructibles
)

goto FunctionEnd


:set_manmade_with_light
if exist %manmade_aura% (
@ echo.	 ���� ���ر���̳��������Ʒ���ŵ�׷�ӹ�Դ��  
ren %objects_folder%\env_manmade\soul_stone_forge.json soul_stone_forge.mdkjson
move /Y mods\Demo\Demo.mpq\data\hd\objects\env_manmade\*.json mods\Demo\Demo.mpq\data\hd\objects\env_manmade\mdk
ren %objects_folder%\env_manmade\soul_stone_forge.mdkjson soul_stone_forge.json
ren %objects_folder%\doors doors_mdk
ren %objects_folder%\shrines_healthmana shrines_healthmana_mdk
ren %objects_folder%\shrines_other shrines_other_mdk
ren %objects_folder%\wells wells_mdk
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\act2hire.json
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\act3hire.json
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\act5hire1.json
del .\mods\Demo\Demo.mpq\data\hd\character\enemy\roguehire.json
) else (
@ echo.	 ���� ��������̳��������Ʒ���ŵ�׷�ӹ�Դ��  
move /Y mods\Demo\Demo.mpq\data\hd\objects\env_manmade\mdk\*.json mods\Demo\Demo.mpq\data\hd\objects\env_manmade
ren %objects_folder%\doors_mdk doors
ren %objects_folder%\shrines_healthmana_mdk shrines_healthmana
ren %objects_folder%\shrines_other_mdk shrines_other
ren %objects_folder%\wells_mdk wells
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\hirelight_mu\*.json .\mods\Demo\Demo.mpq\data\hd\character\enemy
)
goto FunctionEnd


:set_lang_ver
echo on
if not exist %lang_zhTW_cht_OLD% (
@ echo.	 ���� �����ư����汾��  
ren %d2r_strings% strings_zhTW_cht_OLD
ping -n 1 127.1>nul
ren %d2r_strings%_zhTW_chs strings
) else if not exist %lang_zhTW_chs% (
@ echo.	 ���� �������������汾��  
ren %d2r_strings% strings_zhTW_chs
ping -n 1 127.1>nul
ren %d2r_strings%_zhCN strings
) else if not exist %lang_zhCN% (
@ echo.	 ���� �����ư深��汾��  =
ren %d2r_strings% strings_zhCN
ping -n 1 127.1>nul
ren %d2r_strings%_zhTW_cht strings
) else (
@ echo.	 ���� ���ϰ深��汾��  
ren %d2r_strings% strings_zhTW_cht
ping -n 1 127.1>nul
ren %d2r_strings%_zhTW_cht_OLD strings
)

if exist %s_drop_show% (
	@ echo.		 ��  ����ʾ���е�����Ʒ���̡����εͼ�������Ʒ��
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
) else (
	@ echo.		 ��  ����ʾ���е�����Ʒ���������εͼ�������Ʒ����
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
)

goto FunctionEnd


:set_roll_shop_mode
if exist %anya_shop% (
@ echo.	 ���� ��ˢ�ײġ�  
copy /Y %d2r_excel%\magicprefix.txt.mdk_base %d2r_excel%\magicprefix.txt
copy /Y %d2r_excel%\magicsuffix.txt.mdk_base %d2r_excel%\magicsuffix.txt
copy /Y %d2r_layouts%\globaldatahd_mdk_base.json %d2r_layouts%\globaldatahd.json
del %anya_shop%
@echo. "x">%base_shop%
) else if exist %base_shop% (
@ echo.	 ���� ���رա�
copy /Y %d2r_excel%\magicprefix.txt.default %d2r_excel%\magicprefix.txt
copy /Y %d2r_excel%\magicsuffix.txt.default %d2r_excel%\magicsuffix.txt
copy /Y %d2r_layouts%\globaldatahd_default.json %d2r_layouts%\globaldatahd.json
del %anya_shop%
del %base_shop%
) else (
@ echo.	 ���� ��ˢװ����  
copy /Y %d2r_excel%\magicprefix.txt.mdk %d2r_excel%\magicprefix.txt
copy /Y %d2r_excel%\magicsuffix.txt.mdk %d2r_excel%\magicsuffix.txt
copy /Y %d2r_layouts%\globaldatahd_shopcolor.json %d2r_layouts%\globaldatahd.json
del %base_shop%
@echo. "x">%anya_shop%
)

goto FunctionEnd


:set_addl_light_mode

if exist %guangyuan_d% (
@ echo.	 ���� ���رչ�Դ�� 
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
@ECHO.  "x">%guangyuan_n%
) else if exist %guangyuan_n% (
@ echo.	 ���� ���Ϸ���Դ�� 
cls
@ echo.	 ע�����
@ echo.	 ������Դʹ��ħ����Ч���������򣬿���Ӱ�����ܣ�Ҳ����Ӱ����Ϸ�ȶ��ԣ�
@ echo.	 ���Ż���Ĺ�Դ��Դռ�ñȾɰ汾ҪС�ܶ࣬��ʱδ���ֱ����������
@ echo.	 �ڸߵͲ����Ե�λ�ÿ��ܻ���ֵ͵���������˸���㣬������������
@ echo.	 �ù����ǲ��Թ��ܣ��ȶ���û�б�֤�����ʿ��á�
@ echo.	 �ش˸�֪��
pause
@ echo.	 ���� �������Ϸ���Դ��  
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\player_mu\*.json .\mods\Demo\Demo.mpq\data\hd\character\player
@ECHO.  "x">%guangyuan_u%
) else if exist %guangyuan_u% (
@ echo.	 ���� �����¹�Դ�� 
cls
@ echo.	 ע�����
@ echo.	 ������Դʹ��ħ����Ч���������򣬿���Ӱ�����ܣ�Ҳ����Ӱ����Ϸ�ȶ��ԣ�
@ echo.	 ���Ż���Ĺ�Դ��Դռ�ñȾɰ汾ҪС�ܶ࣬��ʱδ���ֱ����������
@ echo.	 �ڸߵͲ����Ե�λ�ÿ��ܻ���ֵ͵���������˸���㣬������������
@ echo.	 �ù����ǲ��Թ��ܣ��ȶ���û�б�֤�����ʿ��á�
@ echo.	 �ش˸�֪��
pause
@ echo.	 ���� ���������¹�Դ��  
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\player_md\*.json .\mods\Demo\Demo.mpq\data\hd\character\player
copy /Y .\mods\Demo\Demo.mpq\data\hd\character\player_md\*.json .\mods\Demo\Demo.mpq\data\hd\character\player
@ECHO.  "x">%guangyuan_d%
) else (
del .\mods\Demo\Demo.mpq\data\hd\character\*.lightsign
del .\mods\Demo\Demo.mpq\data\hd\character\player\*.json
@ECHO.  "x">%guangyuan_n%
)
goto FunctionEnd

:set_waypoint_lightbeam_guider
if exist %wp_guider% (
@ echo.	 ���� ���رմ��͵����������  
move /Y mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals_mdk
) else (
@ echo.	 ���� ���򿪴��͵����������  
move /Y mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals_mdk mods\Demo\Demo.mpq\data\hd\objects\waypoint_portals
)
goto FunctionEnd

:set_enter_lightbeam_guider
if not exist %entry_guider% (
	@ echo.	  ���� ���л�����Ȧ��ϡ�
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles roomtiles_mdk
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles_c roomtiles
	copy /Y %objects_folder%\seven_tombs_receptacle_c.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
	copy /Y %objects_folder%\stone_alpha_c.json %objects_folder%\env_stone\stone_alpha.json
	copy /Y %objects_folder%\malus_c.json %objects_folder%\armor_weapons\malus.json
	copy /Y %objects_folder%\inifuss_tree_c.json %objects_folder%\env_wood\inifuss_tree.json
	copy /Y %objects_folder%\gid_b_inn_decoy_c.json %objects_folder%\env_organic\gid_b_inn_decoy.json
) else if not exist %entry_guider_c% (
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles roomtiles_c
	del %objects_folder%\env_pillars\arcane_tome.json
	del %objects_folder%\env_pillars\seven_tombs_receptacle.json
	del %objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
	del %objects_folder%\env_stone\stone_alpha.json
	del %objects_folder%\armor_weapons\malus.json
	del %objects_folder%\env_manmade\soul_stone_forge.json
	del %objects_folder%\env_wood\inifuss_tree.json
	del %objects_folder%\dummy\caged_wussie_1.json
	del %objects_folder%\env_organic\gid_b_inn_decoy.json
	del %objects_folder%\characters\anya_yet_again.json
	del %objects_folder%\characters\wirt.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01.json pf_hell_portal_n01_mdk.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01.json pf_hell_portal_w01_mdk.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01.json pf_jungle_totem_d_foliage01_mdk.json
) else (
	@ echo.	  ���� ������ڹ���������
	ren .\mods\Demo\Demo.mpq\data\hd\roomtiles_mdk roomtiles
	copy /Y %objects_folder%\arcane_tome.json %objects_folder%\env_pillars\arcane_tome.json
	copy /Y %objects_folder%\seven_tombs_receptacle.json %objects_folder%\env_pillars\seven_tombs_receptacle.json
	copy /Y %objects_folder%\town_act_3_gid_b_inn_altar.json %objects_folder%\env_pillars\town_act_3_gid_b_inn_altar.json
	copy /Y %objects_folder%\stone_alpha.json %objects_folder%\env_stone\stone_alpha.json
	copy /Y %objects_folder%\malus.json %objects_folder%\armor_weapons\malus.json
	copy /Y %objects_folder%\soul_stone_forge.json %objects_folder%\env_manmade\soul_stone_forge.json
	copy /Y %objects_folder%\inifuss_tree.json %objects_folder%\env_wood\inifuss_tree.json
	copy /Y %objects_folder%\caged_wussie_1.json %objects_folder%\dummy\caged_wussie_1.json
	copy /Y %objects_folder%\gid_b_inn_decoy.json %objects_folder%\env_organic\gid_b_inn_decoy.json
	copy /Y %objects_folder%\anya_yet_again.json %objects_folder%\characters\anya_yet_again.json
	copy /Y %objects_folder%\wirt.json %objects_folder%\characters\wirt.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_n01_mdk.json pf_hell_portal_n01.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\expansion\siege\expansion_siege_hellportals\pf_hell_portal_w01_mdk.json pf_hell_portal_w01.json
	ren .\mods\Demo\Demo.mpq\data\hd\env\model\act3\jungle\prefab\pf_jungle_totem_d_foliage01_mdk.json pf_jungle_totem_d_foliage01.json
)
goto FunctionEnd


:set_chests_with_light
if exist %objects_aura% (
@ echo.	 ���� ���رձ���Ƚ�����Ʒ������ʾ�� 
if exist "%objects_folder%\characters\anya_yet_again.json" (
	move  %objects_folder%\characters\*.* %objects_folder%\characters\mdk
	move  %objects_folder%\characters\mdk\anya_yet_again.json %objects_folder%\characters
) else (
	move  %objects_folder%\characters\*.* %objects_folder%\characters\mdk
)
ren %objects_folder%\armor_weapons\malus.json malus.mdkjson
move /Y mods\Demo\Demo.mpq\data\hd\objects\armor_weapons\*.json mods\Demo\Demo.mpq\data\hd\objects\armor_weapons\mdk
ren %objects_folder%\armor_weapons\malus.mdkjson malus.json

ren  %objects_folder%\caskets caskets_mdk
ren  %objects_folder%\chests chests_mdk
ren  %objects_folder%\env_wood env_wood_mdk
ren  %objects_folder%\env_organic env_organic_mdk
ren  %objects_folder%\env_skeletons env_skeletons_mdk
ren  %objects_folder%\env_stone\rock.json rock_mdk.json
ren  %objects_folder%\env_stone\rock_c.json rock_c_mdk.json
ren  %objects_folder%\env_stone\rock_d.json rock_d_mdk.json
ren %objects_folder%\env_pillars\ancients_altar.json ancients_altar_mdk.json
ren %objects_folder%\env_pillars\ice_cave_object_1.json ice_cave_object_1_mdk.json
ren %objects_folder%\env_pillars\inside_altar.json inside_altar_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_0.json jungle_pillar_0_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_1.json jungle_pillar_1_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_2.json jungle_pillar_2_mdk.json
ren %objects_folder%\env_pillars\jungle_pillar_3.json jungle_pillar_3_mdk.json
ren %objects_folder%\env_pillars\lam_esens_tome.json lam_esens_tome_mdk.json
ren %objects_folder%\env_pillars\mephisto_pillar_1.json mephisto_pillar_1_mdk.json
ren %objects_folder%\env_pillars\mephisto_pillar_2.json mephisto_pillar_2_mdk.json
ren %objects_folder%\env_pillars\mephisto_pillar_3.json mephisto_pillar_3_mdk.json
ren %objects_folder%\env_pillars\obelisk_1.json obelisk_1_mdk.json
ren %objects_folder%\env_pillars\obelisk_2.json obelisk_2_mdk.json
ren %objects_folder%\env_pillars\steeg_stone.json steeg_stone_mdk.json
ren %objects_folder%\env_pillars\stone_stash.json stone_stash_mdk.json
ren %objects_folder%\env_pillars\tower_tome.json tower_tome_mdk.json
) else (
@ echo.	 ���� ����������Ƚ�����Ʒ������ʾ�� 
move /Y mods\Demo\Demo.mpq\data\hd\objects\characters\mdk\*.* mods\Demo\Demo.mpq\data\hd\objects\characters
move /Y mods\Demo\Demo.mpq\data\hd\objects\armor_weapons\mdk\*.json mods\Demo\Demo.mpq\data\hd\objects\armor_weapons
ren  %objects_folder%\caskets_mdk caskets
ren  %objects_folder%\chests_mdk chests
ren  %objects_folder%\env_wood_mdk env_wood
ren  %objects_folder%\env_organic_mdk env_organic
ren  %objects_folder%\env_skeletons_mdk env_skeletons
ren  %objects_folder%\env_stone\rock_mdk.json rock.json
ren  %objects_folder%\env_stone\rock_c_mdk.json rock_c.json
ren  %objects_folder%\env_stone\rock_d_mdk.json rock_d.json
ren %objects_folder%\env_pillars\ancients_altar_mdk.json ancients_altar.json
ren %objects_folder%\env_pillars\ice_cave_object_1_mdk.json ice_cave_object_1.json
ren %objects_folder%\env_pillars\inside_altar_mdk.json inside_altar.json
ren %objects_folder%\env_pillars\jungle_pillar_0_mdk.json jungle_pillar_0.json
ren %objects_folder%\env_pillars\jungle_pillar_1_mdk.json jungle_pillar_1.json
ren %objects_folder%\env_pillars\jungle_pillar_2_mdk.json jungle_pillar_2.json
ren %objects_folder%\env_pillars\jungle_pillar_3_mdk.json jungle_pillar_3.json
ren %objects_folder%\env_pillars\lam_esens_tome_mdk.json lam_esens_tome.json
ren %objects_folder%\env_pillars\mephisto_pillar_1_mdk.json mephisto_pillar_1.json
ren %objects_folder%\env_pillars\mephisto_pillar_2_mdk.json mephisto_pillar_2.json
ren %objects_folder%\env_pillars\mephisto_pillar_3_mdk.json mephisto_pillar_3.json
ren %objects_folder%\env_pillars\obelisk_1_mdk.json obelisk_1.json
ren %objects_folder%\env_pillars\obelisk_2_mdk.json obelisk_2.json
ren %objects_folder%\env_pillars\steeg_stone_mdk.json steeg_stone.json
ren %objects_folder%\env_pillars\stone_stash_mdk.json stone_stash.json
ren %objects_folder%\env_pillars\tower_tome_mdk.json tower_tome.json
)
goto FunctionEnd

:set_equipment_with_tucao
if exist %tucao_sign%  (
@ echo.		 ���� ��װ�������֮�ﲻ���²�  �� ���ڴ�����...���Ե�...
	copy /Y %d2r_strings%\json_db\item-runes_NoTucao.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_NoTucao_EliteDye.json %item-names%
	del %tucao_sign%
	@ECHO.  "x">%no_tucao_sign%
) else if exist %no_tucao_sign%  (
	copy /Y %d2r_strings%\json_db\item-runes_sgline.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_sgline.json %item-names%
	del %tucao_sign% %no_tucao_sign%
) else (
	@ echo.		 ���� ��װ�������֮����²� ��  ���ڴ�����...���Ե�...
	copy /Y %d2r_strings%\json_db\item-runes_ShowTucao.json %item-runes%
	copy /Y %d2r_strings%\json_db\item-names_ShowTucao_EliteDye.json %item-names%
	del %no_tucao_sign%
	@ECHO.  "x">%tucao_sign%
)
goto FunctionEnd


:open_sys_base_color_folder
cls
@ echo.	 �� ��������ɫ�����ļ���
@ echo.	 �� �޸�ǰ���������Ǻ�ϰ�ߣ����ļ�����Ϸ���������ɫ���壬���߼��Ķ��嶼��
@ echo.	 profilehd�ļ���71�У�"FontColorGoldColor": �ǽ�ҵ���ɫ
@ echo.	 profilehd�ļ���77�У�"FontColorEtherealColor"������װ������ɫ
@ echo.	 profilehd�ļ���78�У�"FontColorEtherealColor"�Ǵ���װ������ɫ
@ echo.	  ��"r": 255, "g": 222, "b": 169, "a": 255����ɫ���������ɺ��������ֻ�ɫֵ��ALPHA͸���ȹ���
@ echo.	 �ô�����ɫ��_profilehd.json�ļ�ͳһ���壬���ж���Ŀ�����$�Ӷ����������á�
@ echo.	 �������ļ�...
pause
notepad %d2r_layouts%\_profilehd.json
pause
goto FunctionEnd

:open_game_sound_folder
cls
@ echo.	 �� ����Ч�ļ��С�
@ echo.	 high_rune.flac �Ǹߵȷ��ĵ�������
@ echo.	 torch_key.flac ��6BOSSԿ�׵�������
@ echo.	 item_potion_hd.flac ��ҩˮ�ĵ�������
@ echo.	 �ļ������м������滻���ļ���ѡ��ҩˮ�����ļ���������ɾ����ָ�ҩˮ������
@ echo.	 �������ļ���...
pause
explorer %d2r_sfx%\item\
pause
goto FunctionEnd

:set_large_charm_lightbeam_sign
@ echo.
if exist %lc_light% (
@ echo. ��ȥ�����ͻ���������/LC���ӣ��Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_medium.json charm_medium_mdk.json
) else (
@ echo. �����Ӵ��ͻ���������/LC���ӣ��Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_medium_mdk.json charm_medium.json
)
goto FunctionEnd

:set_small_charm_lightbeam_sign
@ echo.
if exist %sc_light% (
@ echo.   ��ȥ��С��/���������SC/GC���ӣ��Ĺ���Ч�������ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_small.json charm_small_mdk.json
ren %d2r_items%\misc\charm\charm_large.json charm_large_mdk.json
) else (
@ echo.   �����Ӵ��������SC/GC���ӣ��Ĺ���Ч�������ڴ�����...���Ե�...
ren %d2r_items%\misc\charm\charm_small_mdk.json charm_small.json
ren %d2r_items%\misc\charm\charm_large_mdk.json charm_large.json
)
goto FunctionEnd


:set_amulet_lightbeam_sign
@ echo.
if exist %amulet_light% (
@ echo.   ��ȥ�������Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\amulet\amulet.json amulet_mdk.json
) else (
@ echo.   �����������Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\amulet\amulet_mdk.json amulet.json
)
goto FunctionEnd


:set_ring_lightbeam_sign
@ echo.
if exist %ring_light% (
@ echo.   ��ȥ����ָ�Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\ring\ring.json ring_mdk.json
) else (
@ echo.   �����ӽ�ָ�Ĺ���Ч���� ���ڴ�����...���Ե�...
ren %d2r_items%\misc\ring\ring_mdk.json ring.json
)
goto FunctionEnd


:set_gems_lightbeam_sign
@ echo.
if not exist %all_gem% (
@ echo.   ������Ͼ/��������ʯ�й���Ч���� ���ڴ�����...���Ե�...
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem mods\Demo\Demo.mpq\data\hd\items\misc\gem_all
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem_high mods\Demo\Demo.mpq\data\hd\items\misc\gem
) else if not exist %high_gem% (
@ echo.   ���رձ�ʯ����Ч���� ���ڴ�����...���Ե�...
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem mods\Demo\Demo.mpq\data\hd\items\misc\gem_high
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem_nolight mods\Demo\Demo.mpq\data\hd\items\misc\gem
) else (
@ echo.   ���������еȼ���ʯ����Ч���� ���ڴ�����...���Ե�...
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem mods\Demo\Demo.mpq\data\hd\items\misc\gem_nolight
move /Y mods\Demo\Demo.mpq\data\hd\items\misc\gem_all mods\Demo\Demo.mpq\data\hd\items\misc\gem
)
goto FunctionEnd


:set_craft_runes_lightbeam_sign
@ echo.
if exist %craft_rune_light% (
@ echo.  ���ر��ֹ����Ĺ����� ���ڴ�����...���Ե�...
del %d2r_items%\misc\rune\nef_rune.json
del %d2r_items%\misc\rune\ral_rune.json
del %d2r_items%\misc\rune\amn_rune.json
del %d2r_items%\misc\rune\sol_rune.json
) else (
@ echo.  �������ֹ����Ĺ����� ���ڴ�����...���Ե�...
copy /Y %d2r_items%\misc\rune_craft\nef_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\ral_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\amn_rune.json %d2r_items%\misc\rune
copy /Y %d2r_items%\misc\rune_craft\sol_rune.json %d2r_items%\misc\rune
)
goto FunctionEnd

:set_runes_lightbeam_sign
@ echo.

if not exist %all_rune_light% (
	@ echo.	 ���� ���ߵȷ��Ĺ���+�ǹ�Ч��������ȫ����Ч��
	ren %d2r_items%\misc\rune rune_all
	ren %d2r_items%\misc\rune_starlight rune
) else if not exist %high_rune_star_light% (
	@ echo.	 ���� ���ߵȷ��Ľ�����Ч��������ȫ����Ч��
	ren %d2r_items%\misc\rune rune_starlight
	ren %d2r_items%\misc\rune_onlylight rune
) else if not exist %high_rune_light% (
	@ echo.	 ���� ���رշ�����Ч��
	ren %d2r_items%\misc\rune rune_onlylight
) else (
	@ echo.	 ���� ��ȫ���Ĺ�����Ч���ߵȷ����ǹ���Ч�� 
	ren %d2r_items%\misc\rune_all rune
)
goto FunctionEnd

:set_hj_font_file
@ echo.	 ������ģʽ���塿�л�˳�򣺷��Ρ���Բ������ͳ��
if not exist %hj_font_fangsong% (
	@ echo.	 ����ģʽ����״̬���������塿			���롾HJZT�� ���� ����Բ���塿  
	ren %hj_font_currently% chi_fangsong
	ren %hj_font_qingyuan% chi
) else if not exist %hj_font_qingyuan% (
	@ echo.	 ����ģʽ����״̬����Բ���塿			���롾HJZT�� ���� ������ͳ�����塿  
	ren %hj_font_currently% chi_qingyuan
	ren %hj_font_ruixiantong% chi
) else if not exist %hj_font_ruixiantong% (
	@ echo.	 ����ģʽ����״̬������ͳ�����塿			���롾HJZT�� ���� ���������塿  
	ren %hj_font_currently% chi_ruixiantong
	ren %hj_font_youyuan% chi
) else if not exist %hj_font_youyuan% ( 
	@ echo.	 *������ģʽ���塿	���롾HJ�� �л�˳�򣺷����������Բ���������ͳ�����������Բ���塿
	ren %hj_font_currently% chi_youyuan
	ren %hj_font_fangsong% chi
) else (
	@ echo.	 ����ģʽ����״̬����ȡ������ʧ�ܡ�			���롾HJZT�� ���� ���������塿  
	ren %hj_font_currently% chi_backup
	ren %hj_font_fangsong% chi
	)
goto FunctionEnd


:set_font_file
@ echo.  
if not exist %font_dahei% (
@ echo.   ������Ϊ��ѩ�������塿  ���ڴ�����...���Ե�...
ren %font_name% LiziDahei.ttf
ren %font_baoxue% %font_name_zhTW%
) else if not exist %font_baoxue% (
@ echo.   ������Ϊ����׼Բ�������塿  ���ڴ�����...���Ե�...
ren %font_name% BlizzardGlobal.ttf
ren %font_zhunyuan% %font_name_zhTW%
) else if not exist %font_zhunyuan% (
@ echo.   ������Ϊ����׼Բ�������塿  ���ڴ�����...���Ե�...
ren %font_name% LiziZhunyuan.ttf
ren %font_heiti% %font_name_zhTW%
) else if not exist %font_heiti% (
@ echo.   ������Ϊ�����������塿  ���ڴ�����...���Ե�...
ren %font_name% LiziHeiti.ttf
ren %font_libian% %font_name_zhTW%
) else if not exist %font_libian% (
@ echo.   ������Ϊԭ�淽�����塿  ���ڴ�����...���Ե�...
ren %font_name% LiziLibian.ttf
ren %font_fangxing% %font_name_zhTW%
) else if not exist %font_fangxing% (
@ echo.   ������Ϊ���ִ�����塿  ���ڴ�����...���Ե�...
ren %font_name% ARFangxin.ttf
ren %font_dahei% %font_name_zhTW%
) else (
ren %font_fangxing% %font_name_zhTW%
)
goto FunctionEnd

:open_item_nameaffixes_file
	cls
	@ echo.
	@ echo.   �������򿪵ײ��ı����ײ���Ϣ�����������
	@ echo.   1�����ı��еĵײ����ݻḲ��names�е�����
	@ echo.   2����������ʾ����ɾ���ײ�ֻ��Ҫ�ڴ��ļ����ҵ���Ӧidȥ�޸�zhTW���е����֣�ɾ����ǲ���ʾ
	@ echo.   3������Ҫ�ĵײ���ϸ��ϢҲ�����������������ҵ���ɾ������ֱ�Ӹĵ�key����������Ϸ��ȡ��������
	@ echo.   ���������Լ�����...
	pause
	notepad %item-nameaffixes%
	@ echo.   ���༭�������Ǳ��档����Զ����ı�����BUG��������װMOD�ָ�����
	pause
goto FunctionEnd

:open_item_gems_file
cls
@ echo.
@ echo.   ���������Զ����ı�����ೣ���ı������������
@ echo.   1���Զ��������ɫ�ȣ����ڴ򿪵��ı���������Ʒ����������ɫ��ͼ����ɫ�����޸ġ�yc��������Ǹ��ַ�
@ echo.   2����Ҫ�޸ĵ������������ص��ߣ����ڴ򿪵��ı���������Ʒ�����޸����ֻ���ɾ�����֣���Ҫɾ��˫����
@ echo.   3���޸ġ����ʡ�����ǿ���ȣ����ı��ʼ��һ�����ݾ�����Щ���Լ��޸�����
@ echo.   4���޸���ʾ�������֪������˵ʲô����ȥ�޸ģ���֪���ĵ���û˵��
@ echo.   ����������һЩϸ���޸�����Լ�����...
pause
notepad %item-gems%
@ echo.   ���༭�������Ǳ��档����Զ����ı�����BUG��������װMOD�ָ�����
pause
goto FunctionEnd

REM ===���ι�����沿��===

:RuleSetup_Main
set CurrentMenu=rule
Cls
@ECHO OFF
@ echo.	
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
REM @ echo.����     ��       D2R Demo MOD ������ʾ���������� By Demo    ��
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
@ echo.		����������������������D2R Demo MOD ������ʾ���������� By Demo����������������������
@ echo.		
@ echo.	 �������������԰汾���������ļ��໥�������л��������������������á�����
if not exist %lang_zhTW_cht% (
@ echo.	 �л�����ѭ��˳�򣺡����ư深�塿�� �ɰ淭�뷱�� �� ���ư���� �� �����������
) else if not exist %lang_zhTW_cht_OLD% (
@ echo.	 �л�����ѭ��˳�����ư深��� ���ɰ淭�뷱�� ���� ���ư���� �� �����������
) else if not exist %lang_zhTW_chs% (
@ echo.	 �л�����ѭ��˳�����ư深��� �ɰ淭�뷱�� �� �����ư���� ���� �����������
) else if not exist %lang_zhCN% (
@ echo.	 �л�����ѭ��˳�����ư深��� �ɰ淭�뷱�� �� ���ư���� �� ������������塿
) else (
@ echo.	 �л�����ѭ��˳�����ư深��� �ɰ淭�뷱�� �� ���ư���� �� �����������
)


if not exist %lang_zhTW_cht% (
@ echo.	 ��ǰ���ԣ������ư深��汾��	���롾=�� ���� ���ϰ淭�뷱��汾�� 
) else if not exist %lang_zhTW_cht_OLD% (
@ echo.	 ��ǰ���ԣ����ϰ淭�뷱��汾��	���롾=�� ���� �����ư����汾�� 
) else if not exist %lang_zhTW_chs% (
@ echo.	 ��ǰ���ԣ������ư����汾��	���롾=�� ���� �������������汾�� 
) else if not exist %lang_zhCN% (
@ echo.	 ��ǰ���ԣ��������������汾��	���롾=�� ���� �����ư深��汾�� 
) else (
@ echo.	 ��ǰ���ԣ���δ֪�汾��	���롾=��	ǿ������ �����ư深��汾�� 
)
@ echo.		


@ echo.	 �����롾1���л����Ƿ����εͼ����䡶�ⶾƿ��ҩ�����޼�ֵ����ͨ/��չװ����
@ echo.	������*ע�����κ�����ֻ��ʾ����ǿ�����ֵ�װ�������Ǳ����εĳ�ǿ�ͼ�װ��
if exist %s_drop_show% (
	@ echo.		 ��  ����ʾ���е�����Ʒ���̡����εͼ�������Ʒ��
	set s_drop=%drop_show%
) else (
	@ echo.		 ��  ����ʾ���е�����Ʒ���������εͼ�������Ʒ����
	set s_drop=%drop_no%
)
@ echo.		


@ echo.	 �����롾2���л������ƣ����𣯳¾ɣ����ʵġ����֡���Ʒ�ʡ�װ������ʾ����
if exist %s_low_red% (
@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ�� �̡���ʾΪ��ɫ�������������Ρ�
set s_low=%low_red%
) else if exist %s_low_black% (
@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ��������ʾΪ��ɫ���̡��������Ρ�
set s_low=%low_black%
) else if exist %s_low_hide% (
@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ��������ʾΪ��ɫ�������������Ρ���
set s_low=%low_hide%
) else (
@ echo.		 ��  ʶ�������Ʒ��װ�� ����ʾΪ��ɫ������ʾΪ��ɫ�����������Ρ�
)
@ echo.		


@ echo.	 �����롾3���л�����ҩƿ�����졢����������ƿ������ʾ����
@ echo.	������*ע����������ָ�̶���ʾΪͼ��+���ֵķ�ʽ
if exist %s_ring_texticon% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���֡��̡��������֡���������ͼ�꡽���������غ���ƿ��
set s_ring=%ring_texticon%
) else if exist %s_ring_text% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���֡������������֡��̡�����ͼ�꡽���������غ���ƿ��
set s_ring=%ring_text%
) else if exist %s_ring_icon% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���֡������������֡���������ͼ�꡿�̡������غ���ƿ��
set s_ring=%ring_icon%
) else if exist %s_ring_hide% (
@ echo.		 ��  ��ҩƿ��ʾΪ��ͼ��+���֡������������֡���������ͼ�꡽���������غ���ƿ����
set s_ring=%ring_hide%
) else (
@ echo.		 ��  ʶ�������ҩƿ��ʾ��ͼ��+���֡����������֡�������ͼ�꡽�������غ���ƿ��
)
@ echo.		


@ echo.	 �����롾4���л���1-4������ҩˮ����ʾ����
if exist %s_potion_show% (
@ echo.		 ��  1-4������ҩˮ����ʾ���̡������Ρ�
set s_potion=%potion_show%
) else if exist %s_potion_nodrop% (
@ echo.		 ��  1-4������ҩˮ����ʾ�����������Ρ���
set s_potion=%potion_nodrop%
) else (
@ echo.		 ��  ʶ�����1-4������ҩˮ������ʾ���������� ��
)
@ echo.		


@ echo.	 �����롾5���л���С��ҩˮ����ʾ����
if exist %s_rvs_show% (
@ echo.		 ��  С��ҩˮ����ʾ���̡������Ρ�
set s_rvs=%rvs_show%
) else if exist %s_rvs_nodrop% (
@ echo.		 ��  С��ҩˮ����ʾ�����������Ρ���
set s_rvs=%rvs_nodrop%
) else (
@ echo.		 ��  ʶ�����С��ҩˮ������ʾ���������� ��
)
@ echo.		


@ echo.	 �����롾6���л�����ʯ����ʾ����
if exist %s_gem_texticon% (
@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+���֡���
set s_gem=%gem_texticon%
) else (
@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+���֡�
)
if exist %s_gem_text% (
@ echo.		 ��  ��ʯ��ʾΪ�������֡���
set s_gem=%gem_text%
) else (
@ echo.		 ��  ��ʯ��ʾΪ�������֡�
)
if exist %s_gem_icon% (
@ echo.		 ��  ��ʯ��ʾΪ����ͼ�꡿��
set s_gem=%gem_icon%
) else (
@ echo.		 ��  ��ʯ��ʾΪ����ͼ�꡽
)
if exist %s_gem_texticon_tip% (
@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+����+�ϳ���ʾ����
set s_gem=%gem_texticon_tip%
) else (
@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+����+�ϳ���ʾ��
)
if exist %s_gem_text_tip% (
@ echo.		 ��  ��ʯ��ʾΪ��������+�ϳ���ʾ����
set s_gem=%gem_text_tip%
) else (
@ echo.		 ��  ��ʯ��ʾΪ��������+�ϳ���ʾ��
)
if exist %s_gem_icon_tip% (
@ echo.		 ��  ��ʯ��ʾΪ����ͼ��+�ϳ���ʾ����
set s_gem=%gem_icon_tip%
) else (
@ echo.		 ��  ��ʯ��ʾΪ����ͼ��+�ϳ���ʾ��
)
@ echo.		


@ echo.	 �����롾7���л������ĵ���ʾ����
if exist %s_rune_tip% (
@ echo.		 ��  ������ʾΪ��ͼ��+����+��;��ϳ���ʾ���̡���ͼ��+���֡�
set s_rune=%rune_tip%
) else if exist %s_rune_notip% (
@ echo.		 ��  ������ʾΪ��ͼ��+����+��;��ϳ���ʾ��������ͼ��+���֡���
set s_rune=%rune_notip%
) else (
@ echo.		 ��  ʶ�����������ʾ��ͼ��+����+��;��ϳ���ʾ������ͼ��+���� ��
)
@ echo.		


@ echo.	 �����롾8���л�������ʸ���루�󵯣� ����ʾ����
if exist %s_arrow_texticon% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡��̡��������֡���������ͼ�꡽����������ʾ��
set s_arrow=%arrow_texticon%
) else if exist %s_arrow_text% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡������������֡��̡�����ͼ�꡽����������ʾ��
set s_arrow=%arrow_text%
) else if exist %s_arrow_icon% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡������������֡���������ͼ�꡿�̡�������ʾ��
set s_arrow=%arrow_icon%
) else if exist %s_arrow_no% (
@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡������������֡���������ͼ�꡽����������ʾ����
set s_arrow=%arrow_no%
) else (
@ echo.		 ��  ʶ�������ʸ��ʾ��ͼ��+���֡����������֡�������ͼ�꡽��������ʾ ��
)
@ echo.		


@ echo.	 �����롾9���л��������ᣩ�루Կ�ף� ����ʾ����
if exist %s_scroll_texticon% (
@ echo.		 ��  ������ʾΪ��ͼ��+���֡��̡��������֡���������ͼ�꡽
set s_scroll=%scroll_texticon%
) else if exist %s_scroll_text% (
@ echo.		 ��  ������ʾΪ��ͼ��+���֡������������֡��̡�����ͼ�꡽
set s_scroll=%scroll_text%
) else if exist %s_scroll_icon% (
@ echo.		 ��  ������ʾΪ��ͼ��+���֡������������֡���������ͼ�꡿��
set s_scroll=%scroll_icon%
) else (
@ echo.		 ��  ʶ�����������ʾ��ͼ��+���֡����������֡�������ͼ�� ��
)
@ echo.		


@ echo.	 �����롾0���л�����ͨ����չ���Ŀ׳�����������ħ���ϣ�����ʾ����
@ echo.	������*ע����ͨ������ǿ����ʾ�����������ã��볤ꪣ�����ʫ����
if exist %s_pole_show% (
@ echo.		 ��  ��/�� �����������ϡ���ʾ���̡������Ρ�
set s_pole=%pole_show%
) else if exist %s_pole_nodrop% (
@ echo.		 ��  ��/�� �����������ϡ���ʾ�����������Ρ���
set s_pole=%pole_nodrop%
) else (
@ echo.		 ��  ʶ�������/�� �����������Ϲ�����ʾ���������� ��
)


@ echo.		
@ echo.	 �����롾K����item-gems�ļ����С��Զ����޸ġ�
if exist %huaijiu_nodrop% (
@ echo.	 �����롾L���л������������ڡ�����ģʽ�����Ƿ���Ч����ǰ״̬����Ч��
) else (
@ echo.	 �����롾L���л������������ڡ�����ģʽ�����Ƿ���Ч����ǰ״̬������Ч��
)

@ echo.		
@ echo.	 ������ �� Z �� ���� ���������������桷��
@ echo.	 ������ �� C �� ���� ����Ѫ����ɫ����Ϸ��Чѡ����� ����
@ echo.	 ������ �� V �� ���� ������ϷUI������ý��� ����
@ echo.
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="1" Goto change_drop_filter
if /i "%obj%"=="2" Goto change_low_rule
if /i "%obj%"=="3" Goto change_ring_rule
if /i "%obj%"=="4" Goto change_potion_rule
if /i "%obj%"=="5" Goto change_rvs_rule
if /i "%obj%"=="6" Goto change_gem_rule
if /i "%obj%"=="7" Goto change_rune_rule
if /i "%obj%"=="8" Goto change_arrow_rule
if /i "%obj%"=="9" Goto change_scroll_rule
if /i "%obj%"=="0" Goto change_pole_rule


if /i "%obj%"=="K" Goto open_gem_file
if /i "%obj%"=="L" Goto set_huaijiu_nodrop
if /i "%obj%"=="=" Goto set_lang_ver

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto RuleSetup_Main


:set_huaijiu_nodrop
	if exist %huaijiu_nodrop% (
	@ echo.	 ��ǰ״̬����Ч��
	del %huaijiu_nodrop%
	REM ren %huaijiu_nodrop2% mercenaries.json.mdk
	) else (
	@ echo.	 ��ǰ״̬������Ч��
	cls
	copy /Y %item-gems%.legacy %huaijiu_nodrop%
	@ echo.	
	@ echo.	  ����ģʽ�޷���ȷ��ʾ���δ����е�Unicodeռλ��
	@ echo.	  ����ֱ��ʹ�����ļ��ᵼ�����ε���Ʒ��ʾһ���ʺų�����
	@ echo.	  �������ڵ�ǰ���ֿ���ʾ�ַ�λ123λ��������ģʽֻ��ʹ����ɫ������ռλ��
	@ echo.	  ��ɫ����ռλ��4λ����123��������������������ζ����ж���Ŀո�
	@ echo.	  �������ֻ��������ɾ���������֣������������ģʽ����ռλ���ء�
	@ echo.	  �������ص�װ�������������Ҳ�ǿ��������ֵģ�������ֻ��ͨ��������ϵ�ģ�ͼ�������
	@ echo.	  
	@ echo.	  �����Ƿ�Ҫʹ�����������Ҫ���Լ�Ȩ�⡣
	@ echo.	  
	
	pause
	
	)
Goto RuleSetup_Main

:TestFile
	if exist %~1 (
		@echo OK! %~1 
	) else (
		@echo WRONG! %~1
	)
Goto :eof

:CreateGemFile
	Call :TestFile %gem_head%
	Call :TestFile %format%
	Call :TestFile %rewrite%
	Call :TestFile %s_arrow%
	Call :TestFile %s_potion%
	Call :TestFile %s_rvs%
	Call :TestFile %s_scroll%
	Call :TestFile %s_gem%
	Call :TestFile %s_rune%
	Call :TestFile %s_ring%
	Call :TestFile %s_drop%
	Call :TestFile %s_pole%
	Call :TestFile %s_low%
	Call :TestFile %gem_end%
	@echo. ��ʼ����gem�ļ�
	if exist mdk_mod.debug ( pause )
	set rule_file=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%+%s_pole%+%gem_end%
	set rule_file2=%gem_head%+%format%+%s_low%+%rewrite%+%s_arrow%+%s_potion%+%s_rvs%+%s_scroll%+%s_gem%+%s_rune%+%s_ring%+%s_drop%2+%s_pole%2+%gem_end%
	@echo. rule_file Ϊ %rule_file%
	@echo. gem_file Ϊ %gem_file%
	if exist mdk_mod.debug ( pause )
	del %gem_file%
	copy /Y /b %rule_file% %gem_file%
	copy /Y /b %rule_file2% %gem_file%.legacy
	
	@echo. del_file=%rule_del_file%
	@echo. cre_file=%rule_create_file%
	if exist mdk_mod.debug ( pause )
	del %rule_del_file%
	@echo. x>%rule_create_file%
	
	ping -n 1 127.1>nul
	@ECHO ������ɣ�
Goto RuleSetup_Main


:change_low_rule
	@ echo.	 �š����롾0���л������ƣ����𣯳¾ɣ����ʵġ����֡���Ʒ�ʡ�װ������ʾ����
	if exist %s_low_red% (
	@ echo.		 ��  ��Ʒ��װ�� ����ʾΪ��ɫ�� ��
		set s_low=%low_black%
		set rule_create_file=%s_low_black%
	) else if exist %s_low_black% (
	@ echo.		 ��  ��Ʒ��װ������ʾΪ��ɫ����
		set s_low=%low_hide%
		set rule_create_file=%s_low_hide%
	) else if exist %s_low_hide% (
	@ echo.		 ��  ��Ʒ��װ�� ���������Ρ���
		set s_low=%low_red%
		set rule_create_file=%s_low_red%
	) else (
	@ echo.		 ��  ʶ�����
		set s_low=%low_hide%
		set rule_create_file=%s_low_hide%
	)
	set rule_del_file=%all_low_sign%
Goto CreateGemFile


:change_rune_rule
	if exist %s_rune_tip% (
		@echo. ��ǰ��ʾtip���л��ɲ���ʾ
		set rule_del_file=%all_rune_sign%
		set s_rune=%rune_notip%
		set rule_create_file=%s_rune_notip%
	) else (
		@echo. ��ǰ����ʾtip���л�����ʾ
		set rule_del_file=%all_rune_sign%
		set s_rune=%rune_tip%
		set rule_create_file=%s_rune_tip%
	)
Goto CreateGemFile

:change_rvs_rule
	if exist %s_rvs_show% (
		@echo. ��ǰ��ʾrvs���л��ɲ���ʾ
		set rule_del_file=%all_rvs_sign%
		set s_rvs=%rvs_nodrop%
		set rule_create_file=%s_rvs_nodrop%
	) else (
		@echo. ��ǰ����ʾrvs���л�����ʾ
		set rule_del_file=%all_rvs_sign%
		set s_rvs=%rvs_show%
		set rule_create_file=%s_rvs_show%
	)
Goto CreateGemFile

:change_potion_rule
	if exist %s_potion_show% (
		@echo. ��ǰ��ʾ1-4hp���л��ɲ���ʾ
		set rule_del_file=%all_potion_sign%
		set s_potion=%potion_nodrop%
		set rule_create_file=%s_potion_nodrop%
	) else (
		@echo. ��ǰ����ʾ1-4hp���л�����ʾ
		set rule_del_file=%all_potion_sign%
		set s_potion=%potion_show%
		set rule_create_file=%s_potion_show%
	)
Goto CreateGemFile

:change_pole_rule
	if exist %s_pole_show% (
		@echo. ��ǰ��ʾ��ͨ�������л��ɲ���ʾ
		set rule_del_file=%all_pole_sign%
		set s_pole=%pole_nodrop%
		set rule_create_file=%s_pole_nodrop%
	) else (
		@echo. ��ǰ����ʾ��ͨ�������л�����ʾ
		set rule_del_file=%all_pole_sign%
		set s_pole=%pole_show%
		set rule_create_file=%s_pole_show%
	)
Goto CreateGemFile

:change_drop_filter
	if exist %s_drop_no% (
		@echo. ��ǰ����ʾ���䣬������ʾ
		set rule_del_file=%all_drop_sign%
		set s_drop=%drop_show%
		set rule_create_file=%s_drop_show%
		copy /Y %NoDropCheck%\CLOSE.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\CLOSE.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	) else (
		@echo. ��ǰ��ʾ���䣬���ɲ���ʾ
		set rule_del_file=%all_drop_sign%
		set s_drop=%drop_no%
		set rule_create_file=%s_drop_no%
		copy /Y %NoDropCheck%\OK.sprite %NoDropCheck%\CHECK.sprite
		copy /Y %NoDropCheck%\OK.lowend.sprite %NoDropCheck%\CHECK.lowend.sprite
	)
Goto CreateGemFile


:change_arrow_rule
	if exist %s_arrow_texticon% (
		@ echo.		 ��  ��ʸ��ʾΪ��ͼ��+���֡�
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_text%
		set rule_create_file=%s_arrow_text%
	) else if exist %s_arrow_text% (
		@ echo.		 ��  ��ʸ��ʾΪ�������֡�
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_icon%
		set rule_create_file=%s_arrow_icon%
	) else if exist %s_arrow_icon% (
		@ echo.		 ��  ��ʸ��ʾΪ����ͼ�꡿
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_no%
		set rule_create_file=%s_arrow_no%
	) else (
		@ echo.		 ��  ��ʸ��ʾΪ������ʾ����
		set rule_del_file=%all_arrow_sign%
		set s_arrow=%arrow_texticon%
		set rule_create_file=%s_arrow_texticon%
	)
Goto CreateGemFile

:change_ring_rule
	if exist %s_ring_texticon% (
		@ echo.		 ��  ������ʾΪ��ͼ��+���֡���
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_text%
		set rule_create_file=%s_ring_text%
	) else if exist %s_ring_text% (
		@ echo.		 ��  ������ʾΪ�������֡���
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_icon%
		set rule_create_file=%s_ring_icon%
	) else if exist %s_ring_icon% (
		@ echo.		 ��  ������ʾΪ����ͼ�꡿��
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_hide%
		set rule_create_file=%s_ring_hide%
	) else (
		@ echo.		 ��  ������ʾΪ�����غ���ƿ����
		set rule_del_file=%all_ring_sign%
		set s_ring=%ring_texticon%
		set rule_create_file=%s_ring_texticon%
	) 
Goto CreateGemFile

:change_gem_rule
	if exist %s_gem_texticon% (
		@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+���֡���
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text%
		set rule_create_file=%s_gem_text%
	) else if exist %s_gem_text% (
		@ echo.		 ��  ��ʯ��ʾΪ�������֡���
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon%
		set rule_create_file=%s_gem_icon%
	) else if exist %s_gem_icon%  (
		@ echo.		 ��  ��ʯ��ʾΪ����ͼ�꡿��
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon_tip%
		set rule_create_file=%s_gem_texticon_tip%
	) else if exist %s_gem_texticon_tip% (
		@ echo.		 ��  ��ʯ��ʾΪ��ͼ��+����+tip����
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_text_tip%
		set rule_create_file=%s_gem_text_tip%
	) else if exist %s_gem_text_tip% (
		@ echo.		 ��  ��ʯ��ʾΪ��������+tip����
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_icon_tip%
		set rule_create_file=%s_gem_icon_tip%
	) else (
		@ echo.		 ��  ��ʯ��ʾΪ����ͼ��+tip����
		set rule_del_file=%all_gem_sign%
		set s_gem=%gem_texticon%
		set rule_create_file=%s_gem_texticon%
	) 
Goto CreateGemFile

:change_scroll_rule
	echo on
	pause
	if exist %s_scroll_texticon% (
		@ echo.		 ��  ������ʾΪ��ͼ��+���֡���
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_text%
		set rule_create_file=%s_scroll_text%
	) else if exist %s_scroll_text% (
		@ echo.		 ��  ������ʾΪ�������֡���
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_icon%
		set rule_create_file=%s_scroll_icon%
	) else (
		@ echo.		 ��  ������ʾΪ����ͼ�꡿��
		set rule_del_file=%all_scroll_sign%
		set s_scroll=%scroll_texticon%
		set rule_create_file=%s_scroll_texticon%
	) 
	pause
Goto CreateGemFile

:open_gem_file
notepad.exe %gem_file%
Goto RuleSetup_Main

REM===���ι������� END===

REM===Ѫ����ɫ���������ѡ�񲿷�===
:RuneSound_Main
Cls
set CurrentMenu=sound
@ECHO OFF
@ echo.	
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
REM @ echo.����     ��        D2R Demo MOD ��Ϸ��Ч������ By Demo       ��
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
@ echo.		����������������������D2R Demo MOD ��Ϸ��Ч������ By Demo����������������������
@ echo.				 

@ echo.	 ��ѡ�����治ͬ�ĸߵȷ�����Ч�������Լ����ļ����Լ��ġ��ļ�����high_rune.flac			 
@ echo.	 ���÷��ĵ���������Set drop sound of high level rune��
@ echo.		 �� �ͻ���1��������Ҫ��D3����������� �� һ�μ��������֡�D3+MUSIC
@ echo.		 �� �ͻ���2��������Ҫ��ֻ��D3�������������Only D3
@ echo.	 	 �� �ͻ���3��������Ҫ���ۣ���ɫ��˵��Hearthstone Golden Legend
@ echo.		 �� �ͻ���4��������Ҫ��D2ԭ����Ч��D2 Original
@ echo.		 �� �ͻ���5��������Ҫ���Լ��滻�ļ������ļ��о��С�DIY
@ echo.	 
if exist %zhongli_sound% (
@ echo.	 ��ǰBC/BO/BCry����������Ч����������
@ echo.		 �� �ͻ���6��������Ҫ���رա�����������Ч CLOSE BC/BO ZHONGLI SOUNDS
) else (
@ echo.	 ��ǰBC/BO/BCry����������Ч�����رա�
@ echo.		 �� �ͻ���6��������Ҫ������������������Ч OPEN BC/BO ZHONGLI SOUNDS
)
@ echo.	 
if exist %states_end_sound% (
@ echo.	 ��ǰBUFF״̬������Ч��������������֧���ÿ���Ч��
@ echo.	  �� �ͻ���7��������Ҫ���رա�BUFF״̬������Ч���� BUFF END SOUNDS OFF
) else (
@ echo.	 ��ǰBUFF״̬������Ч�����رա�����֧���þ���Ч��
@ echo.	  �� �ͻ���7��������Ҫ��������BUFF״̬������Ч���� BUFF END SOUNDS ON
)
@ echo.		 ��
@ echo.		 ��  ���롾777�����������з�֧�����������롾888���رա����з�֧������

if exist %battlecommand_end_sign% (
@ echo.		 ��  ���롾71���رա�Ұ���ˡ����̡���ս��ָ�ӣ�CTA/BC/�Ӽ��ܵȼ��� ������
) else (
@ echo.		 ��  ���롾71��������Ұ���ˡ���������ս��ָ�ӣ�CTA/BC/�Ӽ��ܵȼ��� ������
)

if exist %battleorders_end_sign% (
@ echo.		 ��  ���롾72���رա�Ұ���ˡ����̡���ս�����BO/��Ѫ��ħ���� ������
) else (
@ echo.		 ��  ���롾72��������Ұ���ˡ���������ս�����BO/��Ѫ��ħ���� ������
)

if exist %shout_end_sign% (
@ echo.		 ��  ���롾73���رա�Ұ���ˡ����̡�����𣨼ӷ����� ������
) else (
@ echo.		 ��  ���롾73��������Ұ���ˡ�����������𣨼ӷ����� ������
)

if exist %venom_end_sign% (
@ echo.		 ��  ���롾74���رա��̡��͡����̡����㶾���ںޣ� ������
) else (
@ echo.		 ��  ���롾74���������̡��͡����������㶾���ںޣ� ������
)

if exist %bladeshield_end_sign% (
@ echo.		 ��  ���롾75���رա��̡��͡����̡�������֮�� ������
) else (
@ echo.		 ��  ���롾75���������̡��͡�������������֮��  ������
)

if exist %burstofspeed_end_sign% (
@ echo.		 ��  ���롾76���رա��̡��͡����̡����ٶȱ��� ������
) else (
@ echo.		 ��  ���롾76���������̡��͡����������ٶȱ��� ������
)

if exist %fade_end_sign% (
@ echo.		 ��  ���롾77���رա��̡��͡����̡���Ӱɢ�����ţ� ������
) else (
@ echo.		 ��  ���롾77���������̡��͡���������Ӱɢ�����ţ� ������
)

if exist %frozenarmor_end_sign% (
@ echo.		 ��  ���롾78���رա�ħ��ʦ�����̡�������ף�1���ף� ������
) else (
@ echo.		 ��  ���롾78��������ħ��ʦ��������������ף�1���ף� ������
)
if exist %shiverarmor_end_sign% (
@ echo.		 ��  ���롾79���رա�ħ��ʦ�����̡�������ף�2���ף� ������
) else (
@ echo.		 ��  ���롾79��������ħ��ʦ��������������ף�2���ף� ������
)
if exist %chillingarmor_end_sign% (
@ echo.		 ��  ���롾80���رա�ħ��ʦ�����̡��������ף�����/3���ף� ������
) else (
@ echo.		 ��  ���롾80��������ħ��ʦ���������������ף�����/3���ף� ������
)
if exist %enchant_end_sign% (
@ echo.		 ��  ���롾81���رա�ħ��ʦ�����̡������渽ħǿ�������/�����֣� ������
) else (
@ echo.		 ��  ���롾81��������ħ��ʦ�������������渽ħǿ�������/�����֣� ������
)
if exist %energyshield_end_sign% (
@ echo.		 ��  ���롾82���رա�ħ��ʦ�����̡����������ܣ����� ������
) else (
@ echo.		 ��  ���롾82��������ħ��ʦ�����������������ܣ����� ������
)

if exist %cyclonearmor_end_sign% (
@ echo.		 ��  ���롾83���رա���³�������̡����������� ������
) else (
@ echo.		 ��  ���롾83����������³��������������������  ������
)

if exist %morph_end_sign% (
@ echo.		 ��  ���롾84���رա���³�������̡�����³������ ������
) else (
@ echo.		 ��  ���롾84����������³��������������³������ ������
)

if exist %holyshield_end_sign% (
@ echo.		 ��  ���롾85���رա�ʥ��ʿ�����̡����������ܣ����� ������
) else (
@ echo.		 ��  ���롾85��������ʥ��ʿ�����������������ܣ����� ������
)

if exist %bonearmor_end_sign% (
@ echo.		 ��  ���롾86���رա����鷨ʦ�����̡������ǻ��ף�������ʿҲ���ã� ������
) else (
@ echo.		 ��  ���롾86�����������鷨ʦ�������������ǻ��ף�������ʿҲ���ã� ������
)

if exist %markwolf_end_sign% (
@ echo.		 ��  ���롾87���رա���³�������̡�����֮ӡ�� ������
) else (
@ echo.		 ��  ���롾87����������³��������������֮ӡ�� ������
)

if exist %markbear_end_sign% (
@ echo.		 ��  ���롾88���رա���³�������̡�����֮ӡ�� ������
) else (
@ echo.		 ��  ���롾88����������³��������������֮ӡ�� ������
)
@ echo.	 �ͻ���8�������򿪡�BUFF״̬������ЧĿ¼������Ҫ�Լ��滻�ļ� OPEN END SOUNDS FOLDER


@ echo.	 
@ echo.	 �����������뷨�������ɫ��� Set HP/MP Ball Color
@ echo.	 �ͻ���Q��������Ҫ������ѷ���Ѫ������ AMA
@ echo.	 �ͻ���W��������Ҫ���̿ͷ��Ѫ������ ASS
@ echo.	 �ͻ���E��������Ҫ�����鷨ʦ���Ѫ������ NEC
@ echo.	 �ͻ���R��������Ҫ��Ұ���˷��Ѫ������ BAR
@ echo.	 �ͻ���T��������Ҫ��ʥ��ʿ���Ѫ������ PAL
@ echo.	 �ͻ���Y��������Ҫ��Ů�׷��Ѫ������ SOR
@ echo.	 �ͻ���U��������Ҫ����³�����Ѫ������ DRU
@ echo.	 �ͻ���I��������Ҫ��Ĭ�Ϻ�����Ѫ������ Default
REM @ echo.	 �ͻ���O��������Ҫ���Զ�����Ѫ������ Custom��not used��
@ echo.

if exist %dlc1_sign% (
@ echo.	 *���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬���Ѽ���
) else (
@ echo.	 *���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬��δ����
)
@ echo.
@ echo.	 �ͻ� �� Z �� ������������������ҳ�桿Return to Setup Main Menu
@ echo.	 �ͻ� �� X �� ���� ����������ʾ���ι������ý��桷 ��
@ echo.	 �ͻ� �� V �� ���� ������ϷUI������ý��� ����
@ echo.
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="1" Goto D3+MUSIC
if /i "%obj%"=="2" Goto ONLY_D3
if /i "%obj%"=="3" Goto HEARTHSTONE
if /i "%obj%"=="4" Goto D2_ORIGINAL
if /i "%obj%"=="5" Goto OPEN_SOUND_FOLDER
if /i "%obj%"=="6" Goto SET_ZHONGLI_SOUND
if /i "%obj%"=="7" Goto SET_BUFF_END_SOUND
if /i "%obj%"=="8" Goto OPEN_BUFF_END_SOUND_FOLDER

if /i "%obj%"=="777" Goto SET_OPEN_ALL_BUFF_SE
if /i "%obj%"=="888" Goto SET_CLOSE_ALL_BUFF_SE
if /i "%obj%"=="71" Goto SET_BC_SE
if /i "%obj%"=="72" Goto SET_BO_SE
if /i "%obj%"=="73" Goto SET_SHOUT_SE
if /i "%obj%"=="74" Goto SET_VENOM_SE
if /i "%obj%"=="75" Goto SET_BLADE_SHIELD_SE
if /i "%obj%"=="76" Goto SET_BURST_OF_SPEED_SE
if /i "%obj%"=="77" Goto SET_FADE_SE
if /i "%obj%"=="78" Goto SET_FROZEN_ARMOR_SE
if /i "%obj%"=="79" Goto SET_SHIVER_ARMOR_SE
if /i "%obj%"=="80" Goto SET_CHILLING_ARMOR_SE
if /i "%obj%"=="81" Goto SET_ENCHANT_SE
if /i "%obj%"=="82" Goto SET_ENERGY_SHIELD_SE
if /i "%obj%"=="83" Goto SET_CYCLONE_ARMOR_SE
if /i "%obj%"=="84" Goto SET_MORPH_SE
if /i "%obj%"=="85" Goto SET_HOLY_SHIELD_SE
if /i "%obj%"=="86" Goto SET_BONE_ARMOR_SE
if /i "%obj%"=="87" Goto SET_MARKWOLF_SE
if /i "%obj%"=="88" Goto SET_MARKBEAR_SE


if /i "%obj%"=="Q" Goto AMA_STYLE
if /i "%obj%"=="W" Goto ASS_STYLE
if /i "%obj%"=="E" Goto NEC_STYLE
if /i "%obj%"=="R" Goto BAR_STYLE
if /i "%obj%"=="T" Goto PAL_STYLE
if /i "%obj%"=="Y" Goto SOR_STYLE
if /i "%obj%"=="U" Goto DRU_STYLE
if /i "%obj%"=="I" Goto DEFAULT_STYLE
if /i "%obj%"=="O" Goto CUSTOMIZED_STYLE

if /i "%obj%"=="DLC1" Goto set_dlc1

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto RuneSound_Main

:set_dlc1
if exist %dlc1_sign% (
@ echo.	 ���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬���Ѽ���
rd /S /Q %dlc1_t_file1%
rd /S /Q %dlc1_t_file2%
rd /S /Q %dlc1_t_file3%
del %dlc1_t_file4%
) else (
@ echo.	 ���롾DLC1���л���DLC 1����ɫ�����ܸ���ɳĮ��Ӷ���� ״̬��δ����
xcopy .\mods\Demo\Demo.mpq\data\hd\character\DLC1 .\mods\Demo\Demo.mpq\data\hd\character\enemy /Y /S /E
)
goto RuneSound_Main

:SET_CLOSE_ALL_BUFF_SE
copy /Y %states_end_sound_folder%\se_novoice\*.flac %states_end_sound_folder%
del %states_end_sound_folder%\mdk\*.sesign
goto RuneSound_Main

:SET_OPEN_ALL_BUFF_SE
copy /Y %states_end_sound_folder%\se_backup\*.flac %states_end_sound_folder%
	@ECHO.  "x">%battlecommand_end_sign%
	@ECHO.  "x">%battleorders_end_sign%
	@ECHO.  "x">%shout_end_sign%
	@ECHO.  "x">%venom_end_sign%
	@ECHO.  "x">%bladeshield_end_sign%
	@ECHO.  "x">%burstofspeed_end_sign%
	@ECHO.  "x">%fade_end_sign%
	@ECHO.  "x">%frozenarmor_end_sign%
	@ECHO.  "x">%shiverarmor_end_sign%
	@ECHO.  "x">%chillingarmor_end_sign%
	@ECHO.  "x">%enchant_end_sign%
	@ECHO.  "x">%energyshield_end_sign%
	@ECHO.  "x">%cyclonearmor_end_sign%
	@ECHO.  "x">%morph_end_sign%
	@ECHO.  "x">%holyshield_end_sign%
	@ECHO.  "x">%bonearmor_end_sign%
	@ECHO.  "x">%markwolf_end_sign%
	@ECHO.  "x">%markbear_end_sign%
goto RuneSound_Main

:SET_BC_SE
set se_sound=battlecommand_end
goto SET_SE_ON_OFF

:SET_BO_SE
set se_sound=battleorders_end
goto SET_SE_ON_OFF

:SET_SHOUT_SE
set se_sound=shout_end
goto SET_SE_ON_OFF

:SET_VENOM_SE
set se_sound=venom_end
goto SET_SE_ON_OFF

:SET_BLADE_SHIELD_SE
set se_sound=bladeshield_end
goto SET_SE_ON_OFF

:SET_BURST_OF_SPEED_SE
set se_sound=burstofspeed_end
goto SET_SE_ON_OFF

:SET_FADE_SE
set se_sound=fade_end
goto SET_SE_ON_OFF

:SET_FROZEN_ARMOR_SE
set se_sound=frozenarmor_end
goto SET_SE_ON_OFF

:SET_SHIVER_ARMOR_SE
set se_sound=shiverarmor_end
goto SET_SE_ON_OFF

:SET_CHILLING_ARMOR_SE
set se_sound=chillingarmor_end
goto SET_SE_ON_OFF

:SET_ENCHANT_SE
set se_sound=enchant_end
goto SET_SE_ON_OFF

:SET_ENERGY_SHIELD_SE
set se_sound=energyshield_end
goto SET_SE_ON_OFF

:SET_CYCLONE_ARMOR_SE
set se_sound=cyclonearmor_end
goto SET_SE_ON_OFF

:SET_MORPH_SE
set se_sound=morph_end
goto SET_SE_ON_OFF

:SET_HOLY_SHIELD_SE
set se_sound=holyshield_end
goto SET_SE_ON_OFF

:SET_BONE_ARMOR_SE
set se_sound=bonearmor_end
goto SET_SE_ON_OFF

:SET_MARKWOLF_SE
set se_sound=markwolf_end
goto SET_SE_ON_OFF

:SET_MARKBEAR_SE
set se_sound=markbear_end
goto SET_SE_ON_OFF

:SET_SE_ON_OFF
set test_sound_sign=%states_end_sound_folder%\mdk\%se_sound%.sesign
@echo. test_sound_sign=%test_sound_sign%
if exist %test_sound_sign% (
	@ echo.	�ر�������
	copy /Y %states_end_sound_folder%\se_novoice\%se_sound%.flac %states_end_sound_folder%
	del %test_sound_sign%
) else (
	@ echo.	����������
	copy /Y %states_end_sound_folder%\se_backup\%se_sound%.flac %states_end_sound_folder%
	@ECHO.  "x">%test_sound_sign%
)
@ echo.	���
goto RuneSound_Main


:OPEN_BUFF_END_SOUND_FOLDER
explorer.exe %states_end_sound_folder%
goto RuneSound_Main

:SET_ZHONGLI_SOUND

if exist %zhongli_sound% (
@ echo.	CLOSE BC/BO ZHONGLI SOUND
copy /Y %d2r_sfx%\skill\barbarian\*.flac %d2r_sfx%\skill\barbarian\mdk
del  %d2r_sfx%\skill\barbarian\*.flac
) else (
@ echo.	 OPEN BC/BO ZHONGLI SOUND
copy /Y %d2r_sfx%\skill\barbarian\mdk\*.flac %d2r_sfx%\skill\barbarian
)

goto RuneSound_Main


:SET_BUFF_END_SOUND

if exist %states_end_sound% (
@ echo.	 ��Ҫ���ر�BUFF״̬������Ч��ʾ����ǰ�Ѵ򿪣���CLOSE BUFF END SOUND
move /Y %states_end_sound_folder%\mdk\*.flac %states_end_sound_folder%
ren %d2r_excel%\states.txt states.txt.mdk
) else (
@ echo.	 ��Ҫ����BUFF״̬������Ч��ʾ����ǰ�ѹرգ���CLOSE BUFF END SOUND
move /Y %states_end_sound_folder%\mdk\*.flac %states_end_sound_folder%
ren %d2r_excel%\states.txt.mdk states.txt
)

goto RuneSound_Main

:OPEN_BUFF_END_SOUND_FOLDER
goto RuneSound_Main

:AMA_STYLE
set hp_style=ama
goto CHANGE_HPMP_STYLE

:ASS_STYLE
set hp_style=ass
goto CHANGE_HPMP_STYLE

:NEC_STYLE
set hp_style=nec
goto CHANGE_HPMP_STYLE

:BAR_STYLE
set hp_style=bar
goto CHANGE_HPMP_STYLE

:PAL_STYLE
set hp_style=pal
goto CHANGE_HPMP_STYLE

:SOR_STYLE
set hp_style=sor
goto CHANGE_HPMP_STYLE

:DRU_STYLE
set hp_style=dru
goto CHANGE_HPMP_STYLE

:DEFAULT_STYLE
set hp_style=default
goto CHANGE_HPMP_STYLE

:CUSTOMIZED_STYLE
set hp_style=customized
goto CHANGE_HPMP_STYLE

:CHANGE_HPMP_STYLE
del %target_profile%
if %hp_style%=="customized" (
	@echo. ��ʼ�Զ����ļ��жϣ�
	if not exist %profile_dir%%hp_style%.json (
		cls
		@echo. ����
		@echo. δ�����Զ������ļ�����ѡ�����еļ�������ļ���
		Goto RuneSound_Main
	) 
)
@echo. ����%hp_style%����ļ���
copy /Y %profile_dir%%hp_style%.json %target_profile%
goto RuneSoundChangeOver

:ONLY_D3
set drop_sound=%d3drop%
goto ChangeSoundFunction

:D3+MUSIC
set drop_sound=%d3dropandmusic%
goto ChangeSoundFunction

:HEARTHSTONE
set drop_sound=%jinse%
goto ChangeSoundFunction

:D2_ORIGINAL
set drop_sound=%item_rune%
goto ChangeSoundFunction

:ChangeSoundFunction
FOR %%i IN (%high_rune_num%) DO copy /Y %drop_sound% %d2r_sfx%\item\high_rune_%%~i.flac
goto RuneSoundChangeOver

:OPEN_SOUND_FOLDER
cls
@ echo.	 �� ����Ч�ļ��С�
@ echo.	 high_rune_����.flac �Ƕ�Ӧ��ŵĸߵȷ��ĵ�������������high_rune_30.flac����30#���ĵ�������
@ echo.	 torch_key.flac ��6BOSSԿ�׵�������
@ echo.	 item_potion_hd.flac ��ҩˮ�ĵ�������
@ echo.	 �ļ������м������滻���ļ���ѡ��ҩˮ�����ļ���������ɾ����ָ�ҩˮ������
@ echo.	 �������ļ���...
pause
explorer %d2r_sfx%\item\
pause
goto RuneSound_Main

:RuneSoundChangeOver
ping -n 1 127.1>nul
@ echo.
@ECHO ������ɣ���������...
@ echo.
pause
if exist mdk_mod.debug ( pause )
goto RuneSound_Main

REM===Ѫ����ɫ���������ѡ�� END===



REM===��Ϸ��񲿷�===
:GameStyle_Main
Cls
set CurrentMenu=style
@ECHO OFF
@ echo.	
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
REM @ echo.����     ��         D2R Demo MOD ��Ϸ��������� By Demo      ��
REM @ echo.         ����������������������������������������������������������������������������������������������������������������������������
REM call :cgreen " ����������������������D2R Demo MOD ��Ϸ��������� By Demo����������������������"
@ echo.		����������������������D2R Demo MOD ��Ϸ��������� By Demo����������������������
@ echo.	
@ echo.	 ��ѡ�����治ͬ�ķ�� ������*�ŵ�Ϊ�¹��ܣ�
@ echo.				 
if not exist %ui_mini% (
@ echo.	 ��ǰ״̬������UI���桿				���롾1�� ���� ��65%%�ߴ�UI���棨�����65%%��75%%��85%%��100%%����
) else if not exist %ui_6% (
@ echo.	 ��ǰ״̬��65%%�ߴ�UI���桿			���롾1�� ���� ��75%%�ߴ�UI���棨�����65%%��75%%��85%%��100%%����
) else if not exist %ui_7% (
@ echo.	 ��ǰ״̬��75%%�ߴ�UI���桿			���롾1�� ���� ��85%%�ߴ�UI���棨�����65%%��75%%��85%%��100%%����
) else if not exist %ui_8% (
@ echo.	 ��ǰ״̬��85%%�ߴ�UI���桿			���롾1�� ���� ��100%%�ߴ�UI���棨�����65%%��75%%��85%%��100%%����
) else (
@ echo.	 ��ǰ״̬��100%%ԭ��ߴ�UI���桿			���롾1�� ���� ������UI���棨�����65%%��75%%��85%%��100%%����
)
if exist %font_size% (
@ echo.	 ��ǰ״̬������ߴ磺�Ӵ�ߴ硿			���롾2�� ���� ���ָ�Ĭ�������С��	
) else (
@ echo.	 ��ǰ״̬������ߴ磺ԭ��ߴ硿			���롾2�� ���� ����������ߴ硿		
)
if exist %sp_effects% (
@ echo.	 ��ǰ״̬����Ч��ף��֮��+��ʦħ������Ч �̡�	���롾3�� ���� ���رո������Ч��  
) else (
@ echo.	 ��ǰ״̬����Ч��ף��֮��+��ʦħ������Ч ����	���롾3�� ���� �����Ӹ������Ч��  
)
if exist %magicarrow_effects% (
@ echo.	 ��ǰ״̬����Ч��������ͨ��ʸ��ħ������Ч �̡�	���롾4�� ���� ���رռ�ʸ��ħ����Ч��
) else (
@ echo.	 ��ǰ״̬����Ч��������ͨ��ʸ��ħ������Ч ����	���롾4�� ���� ��������ʸ��ħ����Ч��  
)
if exist %light_javelin_effects% (
@ echo.	 ��ǰ״̬����Ч������Ͷ����ǹ������ǹ��Ч �̡�	���롾41������ ���ر�Ͷ����ǹ��ħ����Ч��
) else (
@ echo.	 ��ǰ״̬����Ч������Ͷ����ǹ������ǹ��Ч ����	���롾41������ ������Ͷ����ǹ��ħ����Ч��  
)
if exist %light_axe_effects% (
@ echo.	 ��ǰ״̬��*��Ч�����зɸ����ɵ��ӵ�β��Ч �̡�	���롾42������ ���رշɸ����ɵ���ħ����Ч��
) else (
@ echo.	 ��ǰ״̬��*��Ч�����зɸ����ɵ��ӵ�β��Ч ����	���롾42������ �������ɸ����ɵ���ħ����Ч��  
)
if exist %light_a3mon_effects% (
@ echo.	 ��ǰ״̬��*��Ч�����޴��ķ���ӵ�β��Ч �̡�	���롾43������ ���رչ��޷����ħ����Ч��
) else (
@ echo.	 ��ǰ״̬��*��Ч�����޴��ķ���ӵ�β��Ч ����	���롾43������ ���������޷����ħ����Ч��  
)
if exist %nova_effects% (
@ echo.	 ��ǰ״̬����Ч����������+���Ʒ籩 ������ �̡�	���롾5�� ���� ���ָ�ԭ����Ч��  
) else (
@ echo.	 ��ǰ״̬����Ч����������+���Ʒ籩 ������ ����	���롾5�� ���� ��������Ч���ȡ�  
)
if exist %torch_fire% (
@ echo.	 ��ǰ״̬����Ч����ʾ�������Ļ���籩��Ч �������롾6�� ���� ���ָ�ԭ����Ч��  
) else (
@ echo.	 ��ǰ״̬����Ч����ʾ�������Ļ���籩��Ч �̡����롾6�� ���� ���رջ�����Ч��  
)
if not exist %BO_time% (
@ echo.	 ��ǰ״̬����Ч��BO+BC ��Ч ���Ͷ�����Ч �̡�	���롾7�� ���� ����ʾ����������Ч��
) else if not exist %BO_time_charge% (
@ echo.	 ��ǰ״̬����Ч��BO+BC ��Ч ����������Ч �̡�	���롾7�� ���� ���ر�BC/BO��BUFF��Ч��
) else (
@ echo.	 ��ǰ״̬����Ч��BO+BC ��Ч ������ʾ��Ч ����	���롾7�� ���� ����ʾ�Ͷ�������Ч�� 
)
if not exist %convic_off% (
@ echo.	 ��ǰ״̬����Ч������/���й⻷��Ч��ʾ �� ��	���롾8�� ���� ���رո�̾����ʾ�� 
) else (
@ echo.	 ��ǰ״̬����Ч������/���й⻷��Ч��ʾ �� ��	���롾8�� ���� ��������̾����ʾ�� 
)
if not exist %no_all_cap% (
	if not exist %no_cap% (
		@ echo.	 ��ǰ״̬��ͷ����ʾ״̬����ʾͷ�� �� ��		���롾9�� ���� ������ʾ��ñ������ñ��
	) else (
		@ echo.	 ��ǰ״̬��ͷ����ʾ״̬������ʾ��ñ����ñ �� ��	���롾9�� ���� ������ʾ����ͷ����
	)
) else (
	@ echo.	 ��ǰ״̬��ͷ����ʾ״̬������ʾ����ͷ�� �� ��	���롾9�� ���� ����ʾͷ����
)
if not exist %ass_charge_default% (
@ echo.	 ��ǰ״̬��*�̿;����������ʾ�����ȼ�ͼ�� �� �����롾0�� ���� �������ʾ�����ͼ�꡿
) else if not exist %ass_charge_large% (
@ echo.	 ��ǰ״̬��*�̿;����ȼ��������ʾ������ͼ�� �� �����롾0�� ���� ��UI����ʾ������ͼ�꡿
) else if not exist %ass_charge_large_down% (
@ echo.	 ��ǰ״̬��*�̿;����ȼ���UI����ʾ������ͼ�� �� �����롾0�� ���� ��������ʾС����ͼ�꡿
) else (
@ echo.	 ��ǰ״̬��*�̿;����ȼ���������ʾ����Сͼ�� �� �����롾0�� ���� ������ʾ�����ȼ�ͼ�꡿
)
if exist %ass_charge_missiles% (
@ echo.	 ��ǰ״̬��*�̿;�����Ч������Ч�������� �� ��	���롾01�� ���� ���ָ�ԭ��Ч����
) else (
@ echo.	 ��ǰ״̬��*�̿;�����Ч������Ч�������� �� ��	���롾01�� ���� ���޸���Ч�������ȡ�
)
@ echo.	 ��ǰ״̬��*�̿;�����Ч���Զ���ɵ���Ч��	���롾02�� �� ���ɵ���Ч�ļ���
if exist %sor_es_aura% (
@ echo.	 ��ǰ״̬����ʦ�������ܣ�����Ч���������⡿	���롾-�� ���� ���ָ�ԭ����ʽ��
) else (
@ echo.	 ��ǰ״̬����ʦ�������ܣ�ԭ����ʽ��		���롾-�� ���� ��������Ч��ʾ��
)
if exist %rune_style% (
@ echo.	 ��ǰ״̬�����ķ�񣺴���š�			���롾=�� ���� ���ָ�ԭ�������ʽ��
) else (
@ echo.	 ��ǰ״̬�����ķ��ԭ�桿			���롾=�� ���� ����Ϊ����ŷ�����ʽ��
)
if not exist %hp_bar% (
@ echo.	 ��ǰ״̬��Ѫ����񣺸��ط��			���롾W�� ���� ��������Ѫ����
) else if not exist %hp_bar2% (
@ echo.	 ��ǰ״̬��Ѫ����񣺼����			���롾W�� ���� ��Ĭ��Ѫ�����
) else (
@ echo.	 ��ǰ״̬��Ѫ�����Ĭ�Ϸ��			���롾W�� ���� �����ط��Ѫ����
)
if exist %mini_map_unit% (
@ echo.	 ��ǰ״̬��С��ͼͼ�꣺Demoʵ�ķ��		���롾E�� ���� ��ԭ����
) else (
@ echo.	 ��ǰ״̬��С��ͼͼ�꣺ԭ����		���롾E�� ���� ��Demoʵ�ķ��
)
if not exist %color_word% (
@ echo.	 ��ǰ״̬���������ԭ�������			���롾R�� ���� ����ɫ���Դ�����
) else (
@ echo.	 ��ǰ״̬��������񣺲�ɫ������			���롾R�� ���� ��ԭ��ͳһɫ������
)
if exist %color_spell% (
@ echo.	 ��ǰ״̬������ͼ�꣺ԭ��ͼ�꡿			���롾T�� ���� ����ɫ����ͼ�꡿
) else (
@ echo.	 ��ǰ״̬������ͼ�꣺��ɫͼ�꡿			���롾T�� ���� ��ԭ������ͼ�꡿
)
if exist %potion_style% (
@ echo.	 ��ǰ״̬����ҩƿ��Բƿ���͡�			���롾Y�� ���� ���ָ�ԭ�泬�����ҩƿ��  
) else (
@ echo.	 ��ǰ״̬����ҩƿ��ԭ�����͡�			���롾Y�� ���� �����óɴ�Բƿ�ĳ������ƿ��  
)
if exist %potion_vo% (
@ echo.	 ��ǰ״̬��ҩˮ��Ч������Ч��			���롾U�� ���� ���ָ�ҩˮ��Ч��  
) else (
@ echo.	 ��ǰ״̬��ҩˮ��Ч������Ч��			���롾U�� ���� ������ҩˮ��Ч��  
)
if exist %hireables_down% (
@ echo.	 ��ǰ״̬��Ӷ��ͼ��λ�ã���Ļ�·���		���롾I�� ���� ����ʾ����Ļ�Ϸ���  
) else (
@ echo.	 ��ǰ״̬��Ӷ��ͼ��λ�ã���Ļ�Ϸ���		���롾I�� ���� ����ʾ����Ļ�·���  
)
if exist %cain_light% (
@ echo.	 ��ǰ״̬��*����NPC��ͷ����Ч �̡�		���롾O�� ���� ���ر�ͷ����Ч��  
) else (
@ echo.	 ��ǰ״̬��*����NPC��ͷ����Ч ����		���롾O�� ���� ������ͷ����Ч��  
)
if exist %automap_monster_mdk_sign% (
	@ echo.	 ��ǰ״̬��*С��ͼ��ǹ��������* ţ+Σ�̡�	���롾Q�� �л���
	@ echo.	  ��  ���롾Q���л�����ţ��+Σ�չ���̡��������������+ţ+Σ�����������й��������������ʾ����
) else if exist %automap_monster_mdkchaos_sign% (
	@ echo.	 ��ǰ״̬��*С��ͼ��ǹ��������* ����+ţ+Σ�̡����롾Q�� �л���
	@ echo.	  ��  ���롾Q���л�����ţ��+Σ�չ�������������������+ţ+Σ�̡��������й��������������ʾ����
) else if exist %automap_monster_all_sign% (
	@ echo.	 ��ǰ״̬��*С��ͼ��ǹ��������* ���й���̡�	���롾Q�� �л���
	@ echo.	  ��  ���롾Q���л�����ţ��+Σ�չ�������������������+ţ+Σ�����������й���̡���������ʾ����
) else (
	@ echo.	 ��ǰ״̬��*С��ͼ��ǹ��������* ����		���롾Q�� �л���
	@ echo.	  ��  ���롾Q���л�����ţ��+Σ�չ�������������������+ţ+Σ�����������й��������������ʾ�̡�
)
if exist %automap_chest_sign% (
@ echo.	 ��ǰ״̬��*С��ͼ�������λ��* �̡�		���롾Q2������ ���ر�������ʾ��  
) else (
@ echo.	 ��ǰ״̬��*С��ͼ�������λ��* ����		���롾Q2������ ������������ʾ��  
)
if exist %monster_res% (
@ echo.	 ��ǰ״̬������������ʾ�������ѶȵĿ��ԡ��̡�	���롾P�� ���� ���رտ�����ʾ��  
) else (
@ echo.	 ��ǰ״̬������������ʾ�������ѶȵĿ��ԡ�����	���롾P�� ���� ������������ʾ��  
)
if not exist %map_tips% (
@ echo.	 ��ǰ״̬����ͼ������ʾ���ȼ�/���ߵ���ʾ���̡�	���롾L�� ���� ������ʾ��ͼ�ȼ���  
) else if not exist %map_lv% (
@ echo.	 ��ǰ״̬����ͼ������ʾ������ʾ��ͼ�ȼ����̡�	���롾L�� ���� ���رյ�ͼ��Ϣ��ʾ��  
) else (
@ echo.	 ��ǰ״̬����ͼ������ʾ������ʾ�κ���Ϣ������	���롾L�� ���� ��������ͼ��Ϣ��ʾ��  
)
if exist %diff_btn_tip% (
@ echo.	 ��ǰ״̬��ѡ����Ϸ�Ѷ�ʱ��ʾ����ݼ���ʾ���̡�	���롾K�� ���� ���رտ�ݼ���ʾ��  
) else (
@ echo.	 ��ǰ״̬��ѡ����Ϸ�Ѷ�ʱ��ʾ����ݼ���ʾ������	���롾K�� ���� ��������ݼ���ʾ��  
)
if exist %inven_top% (
@ echo.	 ��ǰ״̬��*��Ʒ���Ϸ���ʾ����������ݲ�ѯͼ�꡹�̡�		���롾KU�� ���� ���ر���Ʒ���Ϸ�ͼ�꡿  
) else (
@ echo.	 ��ǰ״̬��*��Ʒ���Ϸ���ʾ����������ݲ�ѯͼ�꡹����		���롾KU�� ���� ��������Ʒ���Ϸ�ͼ�꡿  
)
if exist %inven_bottom% (
@ echo.	 ��ǰ״̬��*��Ʒ���·���ʾ������֮��ȿ�ݲ�ѯͼ�꡹�̡�	���롾KD�� ���� ���ر���Ʒ���·�ͼ�꡿  
) else (
@ echo.	 ��ǰ״̬��*��Ʒ���·���ʾ������֮��ȿ�ݲ�ѯͼ�꡹����	���롾KD�� ���� ��������Ʒ���·�ͼ�꡿  
)

@ echo.	 *ͳһ�����ͼ����ʽ�����Լ���Ч��
if exist %unify_gc_mahua_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�̡��������������۾��������۾�����������
) else if exist %unify_gc_guilian_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������̡����۾��������۾�����������
) else if exist %unify_gc_eye_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������������۾��̡����۾�����������
) else if exist %unify_gc_eye_dark_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������������۾��������۾��������̡�
) else (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���̡����黨�����������������۾��������۾�����������
)
if exist %unify_lc_lingpai_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ̡���ţ�ǡ�������������
) else if exist %unify_lc_niujiao_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ�����ţ�ǡ̡�����������
) else if exist %unify_lc_fangta_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ�����ţ�ǡ����������̡�
) else (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ���̡������ơ�����ţ�ǡ�������������
)
if exist %unify_sc_xuanwo_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С̡���Բ����������Բ��������Բ����������
) else if exist %unify_sc_yuanfu_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ���̡�����Բ��������Բ����������
) else if exist %unify_sc_tuoyuan_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ����������Բ�̡�����Բ����������
) else if exist %unify_sc_tuoyuan_dark_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ����������Բ��������Բ�������̡�
) else (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ���̡������С�����Բ����������Բ��������Բ����������
)

@ echo.	   
if not exist %monster_3x% (
@ echo.	 ��ǰ״̬����������Ϸ �� ���ﳬ���ӱ�����ʹ3����		���롾A�� ���� ��10����  
) else if not exist %monster_10x% (
@ echo.	 ��ǰ״̬����������Ϸ �� ���ﳬ���ӱ�������10����		���롾A�� ���� ��20����  
) else if not exist %monster_20x% (
@ echo.	 ��ǰ״̬����������Ϸ �� ���ﳬ���ӱ�������20����		���롾A�� ���� ���رչ���ӱ���  
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� ���ﳬ���ӱ������ӱ���		���롾A�� ���� ��3����  
)
if not exist %rune_shop%  (
@ echo.	 ��ǰ״̬����������Ϸ �� �̵���۱�ʯ�ͷ��ġ� ��	���롾S�� ���� ���ر��̵���۷��ġ�*ս���޷�������
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� �̵���۱�ʯ�ͷ��� �� ��	���롾S�� ���� �������̵���۷��ġ�*ս���޷�������
)
if not exist %offline_exskill%  (
@ echo.	 ��ǰ״̬����������Ϸ �� ������ǿ�����ּ�����bug���� ��	���롾D�� ���� ���رյ������ܼ�ǿ��
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� ������ǿ�����ּ�����bug���� ��	���롾D�� ���� �������������ܼ�ǿ��
)
if not exist %exp_mode260%  (
@ echo.	 ��ǰ״̬����������Ϸ �� ����ǿ��ģʽ��5������ģʽ �� ��	���롾F�� ���� ����������һ��99ģʽ�� 
) else if not exist %exp_mode99%  (
@ echo.	 ��ǰ״̬����������Ϸ �� ����ǿ��ģʽ��һ��99�� �� ��	���롾F�� ���� ���رյ��������ǿģʽ�� 
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� ����ǿ��ģʽ �� ��		���롾F�� ���� ������20������5����������ģʽ �� 
)
if not exist %offline_bigbox%  (
@ echo.	 ��ǰ״̬����������Ϸ �� ������+Ӷ��ȫ��װ �� ��	���롾G�� ���� ���رյ��������ӡ���ս����ͻ��
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� ������+Ӷ��ȫ��װ �� ��	���롾G�� ���� ���������������ӡ���ս����ͻ��
)
if not exist %offline_drop_up%  (
@ echo.	 ��ǰ״̬����������Ϸ �� �������� �� ��			���롾H�� ���� ���ָ�Ĭ�ϱ��ʡ�
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� �������� �� ��			���롾H�� ���� ��ȫ����߱��ʡ�
)
if exist %itemratio_up%  (
@ echo.	 ��ǰ״̬����������Ϸ �� Ⱦɫ������ �� ��		���롾H1�� ���� ���ָ�Ĭ��Ⱦɫ�ʡ�
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� Ⱦɫ������ �� ��		���롾H1�� ���� ��ȫ�����Ⱦɫ�ʡ�
)
if exist %cubemain_ex%  (
@ echo.	 ��ǰ״̬����������Ϸ �� ���������úϳɹ�ʽ �� ��	���롾H2�� ���� ���ָ�Ĭ�Ϻϳɹ�ʽ��
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� ���������úϳɹ�ʽ �� ��	���롾H2�� ���� �����ӵ����úϳɹ�ʽ��
)

@ echo.
@ echo.	 ��ǰ״̬����������Ϸ �� �л��������Ӵ浵��1-9����	���롾B�� ���� ���������Ӵ浵�л���

@ echo.
@ echo.	 �ͻ� �� M �� ����������Ϸ�浵Ŀ¼��
@ echo.
@ echo.	 �ͻ� �� Z �� ������������������ҳ�桿Return to Setup Main Menu
@ echo.	 �ͻ� �� X �� ���� ����������ʾ���ι������ý��桷 ��
@ echo.	 �ͻ� �� C �� ���� ����Ѫ����ɫ����Ϸ��Чѡ����� ����
@ echo.
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="1" Goto set_ui_zoom_size
if /i "%obj%"=="2" Goto set_font_display_size
if /i "%obj%"=="3" Goto set_sp_effects
if /i "%obj%"=="4" Goto set_magicarrow_effects
if /i "%obj%"=="41" Goto set_lightjavelin_effects
if /i "%obj%"=="42" Goto set_axe_effects
if /i "%obj%"=="43" Goto set_a3mon_effects
if /i "%obj%"=="5" Goto set_nova_effects
if /i "%obj%"=="6" Goto set_torch_fire_effect
if /i "%obj%"=="7" Goto set_BO_effects
if /i "%obj%"=="8" Goto func_convic_sign
if /i "%obj%"=="9" Goto set_show_helmet
if /i "%obj%"=="0" Goto set_ass_charge_up
if /i "%obj%"=="01" Goto set_ass_charge_missiles
if /i "%obj%"=="02" Goto open_ass_charge_missiles_file
if /i "%obj%"=="-" Goto set_sor_es_aura
if /i "%obj%"=="_" Goto set_sor_es_aura
if /i "%obj%"=="=" Goto set_rune_style
if /i "%obj%"=="+" Goto set_rune_style

if /i "%obj%"=="W" Goto set_hp_bar_style
if /i "%obj%"=="E" Goto set_minimap_units_style
if /i "%obj%"=="R" Goto set_color_modifiers
if /i "%obj%"=="T" Goto set_skill_icons_style
if /i "%obj%"=="Y" Goto set_potion_style
if /i "%obj%"=="U" Goto set_potion_sound
if /i "%obj%"=="I" Goto set_mercenary_portrait_location
if /i "%obj%"=="O" Goto set_cain_light
if /i "%obj%"=="P" Goto set_show_monster_resistance
if /i "%obj%"=="Q" Goto set_automap_monster_sign
if /i "%obj%"=="Q2" Goto set_automap_chest_sign

if /i "%obj%"=="L" Goto set_map_tips
if /i "%obj%"=="K" Goto set_diff_btn_tip
if /i "%obj%"=="KU" Goto set_inven_top_icon
if /i "%obj%"=="KD" Goto set_inven_bottom_icon

if /i "%obj%"=="J1" Goto set_unify_gc_style
if /i "%obj%"=="J2" Goto set_unify_lc_style
if /i "%obj%"=="J3" Goto set_unify_sc_style

if /i "%obj%"=="A" Goto set_offline_monster_magnification
if /i "%obj%"=="S" Goto func_rune_shop
if /i "%obj%"=="D" Goto set_offline_exskill
if /i "%obj%"=="F" Goto set_exp_mode
if /i "%obj%"=="G" Goto set_offline_bigbox
REM if /i "%obj%"=="G" Goto set_sharebox_backup
if /i "%obj%"=="H" Goto set_offline_drop_up
if /i "%obj%"=="H1" Goto set_offline_itemratio_up
if /i "%obj%"=="H2" Goto set_cubemain_ex

if /i "%obj%"=="B" Goto GameSelectShareBoxNumberMain

if /i "%obj%"=="M" Goto func_open_savepath

if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main

@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto GameStyle_Main

:GameSelectShareBoxNumberMain
Cls
@call :get_sharebox_num
@ echo.
@ echo.  Demo MOD ���������л�ϵͳ�������ͣ� ver 20220925
@ echo.  
@ echo.  һ������£�D2R�Ĵ浵Ŀ¼Ϊ%%USERPROFILE%%\Saved Games\Diablo II Resurrected֮��
@ echo.  �����Ŀ¼�����ڻ���������û�ж�дȨ��ʱ�����л�ϵͳ������ִ���
@ echo.  �浵�в����ڹ��������ļ�ʱ���������Զ��������Ӵ浵.
@ echo.  
@ echo.  ��ȡ�浵Ŀ¼Ϊ��%USERPROFILE%\Saved Games\Diablo II Resurrected
@ echo.	 ��ǰʹ�õ��ǵ� %c_save_sharebox_num% �Ź�������
@ echo.
@ echo.	 ���л����Ӵ浵��1-9����		���롾1-9�� �л� ���������Ӵ浵��
@ echo.	 ��ʾ���빲�����Ӵ浵����Ϊ[ SharedStashSoftCoreV2.d2i ]�������ֶ������л��򱸷���ο���

@ echo.
@ echo.
@ echo.	 �ͻ� �� M �� ����������Ϸ�浵Ŀ¼��
@ echo.	 �ͻ� �� Q �� �������˻���һ������ҳ�桿
@ echo.
@ echo.	 �ͻ� �� Z �� ������������������ҳ�桿Return to Setup Main Menu
@ echo.	 �ͻ� �� X �� ���� ����������ʾ���ι������ý��桷 ��
@ echo.	 �ͻ� �� C �� ���� ����Ѫ����ɫ����Ϸ��Чѡ����� ����
@ echo.
@ echo.
set  obj=""
set /p obj= �������ֻ���ĸ���س�ִ�У�

if /i "%obj%"=="M" Goto func_open_savepath
if /i "%obj%"=="Z" Goto SetupMain
if /i "%obj%"=="X" Goto RuleSetup_Main
if /i "%obj%"=="C" Goto RuneSound_Main
if /i "%obj%"=="V" Goto GameStyle_Main
if /i "%obj%"=="Q" Goto GameStyle_Main
if /i "%obj%"=="0" set sharebox_choose_num=0& Goto func_change_sharebox
if /i "%obj%"=="1" set sharebox_choose_num=1& Goto func_change_sharebox
if /i "%obj%"=="2" set sharebox_choose_num=2& Goto func_change_sharebox
if /i "%obj%"=="3" set sharebox_choose_num=3& Goto func_change_sharebox
if /i "%obj%"=="4" set sharebox_choose_num=4& Goto func_change_sharebox
if /i "%obj%"=="5" set sharebox_choose_num=5& Goto func_change_sharebox
if /i "%obj%"=="6" set sharebox_choose_num=6& Goto func_change_sharebox
if /i "%obj%"=="7" set sharebox_choose_num=7& Goto func_change_sharebox
if /i "%obj%"=="8" set sharebox_choose_num=8& Goto func_change_sharebox
if /i "%obj%"=="9" set sharebox_choose_num=9& Goto func_change_sharebox
if /i "%obj%"=="0" set sharebox_choose_num=0& Goto func_change_sharebox
if /i "%obj%"=="B1" set sharebox_choose_num=1& Goto func_change_sharebox
if /i "%obj%"=="B2" set sharebox_choose_num=2& Goto func_change_sharebox
if /i "%obj%"=="B3" set sharebox_choose_num=3& Goto func_change_sharebox
if /i "%obj%"=="B4" set sharebox_choose_num=4& Goto func_change_sharebox
if /i "%obj%"=="B5" set sharebox_choose_num=5& Goto func_change_sharebox
if /i "%obj%"=="B6" set sharebox_choose_num=6& Goto func_change_sharebox
if /i "%obj%"=="B7" set sharebox_choose_num=7& Goto func_change_sharebox
if /i "%obj%"=="B8" set sharebox_choose_num=8& Goto func_change_sharebox
if /i "%obj%"=="B9" set sharebox_choose_num=9& Goto func_change_sharebox
@echo.
@echo	  ��Ч���룬�뿴����� �����е������������룡
@echo.
pause
ping -n 1 127.1>nul 
goto GameSelectShareBoxNumberMain


:set_cubemain_ex
	if exist %cubemain_ex%  (
	@ echo.	 ���� ���ָ�Ĭ�Ϻϳɹ�ʽ��
	ren %d2r_excel%\cubemain.txt cubemain_mdk.txt
	) else (
	@ echo.	 ���� �����ӵ����úϳɹ�ʽ��
	ren %d2r_excel%\cubemain_mdk.txt cubemain.txt
	)
goto GameStyleFunctionEnd

:set_automap_chest_sign
if exist %automap_chest_sign% (
	@ echo.	 ���� ���ر�������ʾ��  
	del %d2r_excel%\objects.txt
) else (
	@ echo.	  ���� ������������ʾ��  
	copy /Y %d2r_excel%\objects.txt.mdk %d2r_excel%\objects.txt
)
goto GameStyleFunctionEnd

:set_automap_monster_sign
@ echo.	 ���� �����������ǡ�  
if exist %automap_monster_mdk_sign% (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ���̡��������������+ţ+Σ�����������й��������������ʾ����
	copy /Y %d2r_excel%\monstats2.txt.mdkchaos %d2r_excel%\monstats2.txt
	del %automap_monster_mdk_sign%
	@echo. "">%automap_monster_mdkchaos_sign%
) else if exist %automap_monster_mdkchaos_sign% (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ�������������������+ţ+Σ�̡��������й��������������ʾ����
	copy /Y %d2r_excel%\monstats2.txt.all %d2r_excel%\monstats2.txt
	del %automap_monster_mdkchaos_sign%
	@echo. "">%automap_monster_all_sign%
) else if exist %automap_monster_all_sign% (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ�������������������+ţ+Σ�����������й���̡���������ʾ����
	del %d2r_excel%\monstats2.txt
	del %automap_monster_all_sign%
) else (
	@ echo.	  ��  ���롾Q���л�Ϊ����ţ��+Σ�չ�������������������+ţ+Σ�����������й��������������ʾ�̡�
	copy /Y %d2r_excel%\monstats2.txt.mdk %d2r_excel%\monstats2.txt
	@echo. "">%automap_monster_mdk_sign%
)
goto GameStyleFunctionEnd

:set_inven_top_icon
if exist %inven_top% (
	@ echo.	 ���� ���ر���Ʒ���Ϸ�ͼ�꡿  
	ren %inven_top% inventory_icon_top_mdk
) else (
	@ echo.	 ���� ��������Ʒ���Ϸ�ͼ�꡿  
	ren %global_image_folder%\ui\mdk\inventory_icon_top_mdk inventory_icon_top
)
goto GameStyleFunctionEnd

:set_inven_bottom_icon
if exist %inven_bottom% (
	@ echo.	 ���� ���ر���Ʒ���·�ͼ�꡿  
	ren %inven_bottom% inventory_icon_bottom_mdk
) else (
	@ echo.	 ���� ��������Ʒ���·�ͼ�꡿  
	ren %global_image_folder%\ui\mdk\inventory_icon_bottom_mdk inventory_icon_bottom
)
goto GameStyleFunctionEnd



:set_unify_gc_style
if exist %unify_gc_mahua_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�̡��������������۾��������۾�����������
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_guilian%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_guilian%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_eye_sign%
	del %unify_gc_eye_dark_sign%
	@ECHO.  "x">%unify_gc_guilian_sign%
) else if exist %unify_gc_guilian_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������̡����۾��������۾�����������
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_eye%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_eye%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_dark_sign%
	@ECHO.  "x">%unify_gc_eye_sign%
) else if exist %unify_gc_eye_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������������۾��̡����۾�����������
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_eye_dark%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_eye_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_sign%
	@ECHO.  "x">%unify_gc_eye_dark_sign%
) else if exist %unify_gc_eye_dark_sign% (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���������黨�����������������۾��������۾��������̡�
	del %d2r_items_pic%\misc\charm\charm_large.sprite
	del %d2r_items_pic%\misc\charm\charm_large1.sprite
	del %d2r_items_pic%\misc\charm\charm_large2.sprite
	del %d2r_items_pic%\misc\charm\charm_large3.sprite
	del %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_mahua_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_dark_sign%
	del %unify_gc_guilian_sign%
) else (
	@ echo.	  ��  ���롾J1���л����ش����ͳһΪ��	����ͳһͼ���̡����黨�����������������۾��������۾�����������
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large.sprite
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large1.sprite
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large2.sprite
	copy /Y %gc_mahua%.sprite %d2r_items_pic%\misc\charm\charm_large3.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large.lowend.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large1.lowend.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large2.lowend.sprite
	copy /Y %gc_mahua%.lowend.sprite %d2r_items_pic%\misc\charm\charm_large3.lowend.sprite
	
	del %unify_gc_eye_sign%
	del %unify_gc_guilian_sign%
	del %unify_gc_eye_dark_sign%
	@ECHO.  "x">%unify_gc_mahua_sign%
)
goto GameStyleFunctionEnd

:set_unify_lc_style
if exist %unify_lc_lingpai_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ̡���ţ�ǡ�������������
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium.sprite
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium1.sprite
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium2.sprite
	copy /Y %lc_niujiao%.sprite %d2r_items_pic%\misc\charm\charm_medium3.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	copy /Y %lc_niujiao%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_lingpai_sign%
	del %unify_lc_fangta_sign%
	@ECHO.  "x">%unify_lc_niujiao_sign%
) else if exist %unify_lc_niujiao_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ�����ţ�ǡ̡�����������
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium.sprite
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium1.sprite
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium2.sprite
	copy /Y %lc_fangta%.sprite %d2r_items_pic%\misc\charm\charm_medium3.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	copy /Y %lc_fangta%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_lingpai_sign%
	del %unify_lc_niujiao_sign%
	@ECHO.  "x">%unify_lc_fangta_sign%
) else if exist %unify_lc_fangta_sign% (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ�����������ơ�����ţ�ǡ����������̡�
	del %d2r_items_pic%\misc\charm\charm_medium.sprite
	del %d2r_items_pic%\misc\charm\charm_medium1.sprite
	del %d2r_items_pic%\misc\charm\charm_medium2.sprite
	del %d2r_items_pic%\misc\charm\charm_medium3.sprite
	del %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_lingpai_sign%
	del %unify_lc_niujiao_sign%
	del %unify_lc_fangta_sign%
) else (
	@ echo.	  ��  ���롾J2���л��������ͳһΪ��	����ͳһͼ���̡������ơ�����ţ�ǡ�������������
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium.sprite
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium1.sprite
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium2.sprite
	copy /Y %lc_lingpai%.sprite %d2r_items_pic%\misc\charm\charm_medium3.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium.lowend.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium1.lowend.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium2.lowend.sprite
	copy /Y %lc_lingpai%.lowend.sprite %d2r_items_pic%\misc\charm\charm_medium3.lowend.sprite
	
	del %unify_lc_fangta_sign%
	del %unify_lc_niujiao_sign%
	@ECHO.  "x">%unify_lc_lingpai_sign%
)
goto GameStyleFunctionEnd

:set_unify_sc_style
if exist %unify_sc_xuanwo_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С̡���Բ����������Բ��������Բ����������
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_yuanfu%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_yuanfu%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_tuoyuan_dark_sign%
	@ECHO.  "x">%unify_sc_yuanfu_sign%
) else if exist %unify_sc_yuanfu_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ���̡�����Բ��������Բ����������
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_tuoyuan%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_tuoyuan%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_yuanfu_sign%
	del %unify_sc_tuoyuan_dark_sign%
	@ECHO.  "x">%unify_sc_tuoyuan_sign%
) else if exist %unify_sc_tuoyuan_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ����������Բ�̡�����Բ����������
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_tuoyuan_dark%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_tuoyuan_dark%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_yuanfu_sign%
	@ECHO.  "x">%unify_sc_tuoyuan_dark_sign%
) else if exist %unify_sc_tuoyuan_dark_sign% (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ�����������С�����Բ����������Բ��������Բ�������̡�
	del %d2r_items_pic%\misc\charm\charm_small.sprite
	del %d2r_items_pic%\misc\charm\charm_small1.sprite
	del %d2r_items_pic%\misc\charm\charm_small2.sprite
	del %d2r_items_pic%\misc\charm\charm_small3.sprite
	del %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	del %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_xuanwo_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_tuoyuan_dark_sign%
	del %unify_sc_yuanfu_sign%
) else (
	@ echo.	  ��  ���롾J3���л���С���ͳһΪ��	����ͳһͼ���̡������С�����Բ����������Բ��������Բ����������
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small.sprite
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small1.sprite
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small2.sprite
	copy /Y %sc_xuanwo%.sprite %d2r_items_pic%\misc\charm\charm_small3.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small.lowend.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small1.lowend.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small2.lowend.sprite
	copy /Y %sc_xuanwo%.lowend.sprite %d2r_items_pic%\misc\charm\charm_small3.lowend.sprite
	
	del %unify_sc_yuanfu_sign%
	del %unify_sc_tuoyuan_sign%
	del %unify_sc_tuoyuan_dark_sign%
	@ECHO.  "x">%unify_sc_xuanwo_sign%
)
goto GameStyleFunctionEnd


:set_a3mon_effects
if exist %light_a3mon_effects% (
	@ echo.	 ���� ���رչ��޴���ħ����Ч��
	ren %d2r_missiles%\blowdart.json blowdart_mdk.json
) else (
@ echo.	 ���� ���������޴���ħ����Ч��  
	ren %d2r_missiles%\blowdart_mdk.json blowdart.json
)
goto GameStyleFunctionEnd

:set_axe_effects
if exist %light_axe_effects% (
	@ echo.	 ���� ���رշɸ����ɵ���ħ����Ч��
	ren %d2r_missiles%\balanced_axe_missile.json balanced_axe_missile_mdk.json
	ren %d2r_missiles%\balanced_knife_missile.json balanced_knife_missile_mdk.json
	ren %d2r_missiles%\missile_dagger.json missile_dagger_mdk.json
	ren %d2r_missiles%\missile_hand_axe.json missile_hand_axe_mdk.json
) else (
@ echo.	 ���� �������ɸ����ɵ���ħ����Ч��  
	ren %d2r_missiles%\balanced_axe_missile_mdk.json balanced_axe_missile.json
	ren %d2r_missiles%\balanced_knife_missile_mdk.json balanced_knife_missile.json
	ren %d2r_missiles%\missile_dagger_mdk.json missile_dagger.json
	ren %d2r_missiles%\missile_hand_axe_mdk.json missile_hand_axe.json
)
goto GameStyleFunctionEnd

:set_lightjavelin_effects
if exist %light_javelin_effects% (
	@ echo.	 ���� ���ر�Ͷ����ǹ��ħ����Ч��
	ren %d2r_missiles%\javelin.json javelin_mdk.json
	ren %d2r_missiles%\glaive.json glaive_mdk.json
	ren %d2r_missiles%\maiden_javelin_missile.json maiden_javelin_missile_mdk.json
	ren %d2r_missiles%\short_spear_missile.json short_spear_missile_mdk.json
	ren %d2r_missiles%\throwing_spear_missile.json throwing_spear_missile_mdk.json
) else (
	@ echo.	 ���� ������Ͷ����ǹ��ħ����Ч�� 
	ren %d2r_missiles%\javelin_mdk.json javelin.json
	ren %d2r_missiles%\glaive_mdk.json glaive.json
	ren %d2r_missiles%\maiden_javelin_missile_mdk.json maiden_javelin_missile.json
	ren %d2r_missiles%\short_spear_missile_mdk.json short_spear_missile.json
	ren %d2r_missiles%\throwing_spear_missile_mdk.json throwing_spear_missile.json 
)
goto GameStyleFunctionEnd


:set_diff_btn_tip
if exist %diff_btn_tip% (
@ echo.	 ��ǰ״̬��ѡ����Ϸ�Ѷ�ʱ��ʾ����ݼ���ʾ�� �̡�	���롾K�� ���� ���رտ�ݼ���ʾ��  
ren %d2r_layouts%\characterdifficultymodalhd.json characterdifficultymodalhd_mdk.json
) else (
@ echo.	 ��ǰ״̬��ѡ����Ϸ�Ѷ�ʱ��ʾ����ݼ���ʾ�� ����	���롾K�� ���� ��������ݼ���ʾ��  
ren %d2r_layouts%\characterdifficultymodalhd_mdk.json characterdifficultymodalhd.json
)
goto GameStyleFunctionEnd

:set_offline_drop_up
if not exist %offline_drop_up%  (
@ echo.	 ��ǰ״̬����������Ϸ �� �������� �� ��	���롾H�� ���� ���رձ������ӡ�
ren %d2r_excel%\TreasureClassEx.txt TreasureClassEx.txt.mdkup
ren %d2r_excel%\TreasureClassEx.txt.mdk TreasureClassEx.txt
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� �������� �� ��	���롾H�� ���� �������������ӡ�
ren %d2r_excel%\TreasureClassEx.txt TreasureClassEx.txt.mdk
ren %d2r_excel%\TreasureClassEx.txt.mdkup TreasureClassEx.txt
)

goto GameStyleFunctionEnd

:set_offline_itemratio_up
if exist %itemratio_up%  (
@ echo.	 ��ǰ״̬����������Ϸ �� Ⱦɫ������ �� ��	���롾H�� ���� ���ر�Ⱦɫ�����ӡ�
ren %d2r_excel%\itemratio.txt itemratio.txt.mdk
) else (
@ echo.	 ��ǰ״̬����������Ϸ �� Ⱦɫ������ �� ��	���롾H�� ���� ������Ⱦɫ�����ӡ�
ren %d2r_excel%\itemratio.txt.mdk itemratio.txt
)

goto GameStyleFunctionEnd


:set_map_tips
if not exist %map_tips% (
@ echo.	 ��ǰ״̬����ͼ������ʾ����ͼ�ȼ���������������ʾ���� ���� ������ʾ��ͼ�ȼ���  
ren %d2r_strings%\levels.json levels_tips.json
ren %d2r_strings%\levels_lv.json levels.json
) else if not exist %map_lv% (
@ echo.	 ��ǰ״̬����ͼ������ʾ����ͼ�ȼ��������� ���رյ�ͼ��Ϣ��ʾ��  
ren %d2r_strings%\levels.json levels_lv.json
) else (
@ echo.	 ��ǰ״̬����ͼ������ʾ������ʾ�κ���Ϣ�������� ��������ͼ��Ϣ��ʾ��  
ren %d2r_strings%\levels_tips.json levels.json
)
goto GameStyleFunctionEnd


:set_cain_light
if exist %cain_light% (
@ echo.	 ��ǰ״̬���Ͽ������й⻷�������ʾ �̡�	���롾O�� ���� ���رչ�����ʾ��  

ren .\mods\Demo\Demo.mpq\data\hd\character\npc npc_mdk

) else (
@ echo.	 ��ǰ״̬���Ͽ������й⻷�������ʾ ����	���롾O�� ���� ������������ʾ��  

ren .\mods\Demo\Demo.mpq\data\hd\character\npc_mdk npc

)
goto GameStyleFunctionEnd


:set_sor_es_aura
if exist %sor_es_aura% (
@ echo.	 ���� ���ָ�ԭ����ʽ��
ren %sor_es_aura% energyshield_mdk.json
) else (
@ echo.	 ���� ��������Ч��ʾ��
ren .\mods\Demo\Demo.mpq\data\hd\overlays\sorceress\energyshield_mdk.json energyshield.json
)

goto GameStyleFunctionEnd

:set_torch_fire_effect

if exist %torch_fire% (
@ echo.	 ���� ���ָ�ԭ����Ч��  
del %d2r_missiles%\diabwall.json
del %d2r_missiles%\diabwallmaker.json
) else (
@ echo.	 ���� ���رջ�����Ч��  
del %d2r_missiles%\diabwall.json
del %d2r_missiles%\diabwallmaker.json
copy /Y %d2r_missiles%\torchfire\diabwall.json %d2r_missiles%\diabwall.json
copy /Y %d2r_missiles%\torchfire\diabwallmaker.json %d2r_missiles%\diabwallmaker.json
)

goto GameStyleFunctionEnd

:input_sharebox_num
@ECHO.  
@ECHO.  ����ѡ��Ĺ���浵���
set  sharebox_choose_num=""
set /p sharebox_choose_num= ������Ҫ��ȡ�Ĵ湲�����ӵ���ţ�0-9����
if /i "%sharebox_choose_num%"=="0" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="1" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="2" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="3" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="4" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="5" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="6" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="7" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="8" Goto func_change_sharebox
if /i "%sharebox_choose_num%"=="9" Goto func_change_sharebox
@echo.
@echo	  ��Ч���룬�����빲�����ӵĴ浵��ţ�0 - 9����
@echo	  �������ع���ѡ����档
@echo.
pause
ping -n 1 127.1>nul 
goto GameSelectShareBoxNumberMain

:get_sharebox_num
	REM �ж��Ƿ���ڱ���ļ�
	if not exist "%c_save_sign%" (
		copy /Y "%box_current%" "%d2r_save%\SharedStashSoftCoreV2_0.d2i"
		@ECHO.0>"%c_save_sign%"
	)
	REM ����1-9�ж��Ƿ���ڱ������Ӵ浵
	for /L %%i in (1,1,9) do (
		if not exist "%d2r_save%\SharedStashSoftCoreV2_%%~i.d2i" (
			copy /Y .\mods\Demo\Demo.mpq\SharedStashSoftCoreV2_7box.d2i "%d2r_save%\SharedStashSoftCoreV2_%%~i.d2i"
		)
	)
	REM ��ȡ��־�ļ���һ�����ݸ�ֵ
	for /f %%i in (%c_save_sign%) do (
		set c_save_sharebox_num=%%i
		Goto :eof
	)
Goto :eof

:func_change_sharebox

CLS
@echo.
@echo.���л��������Ӵ浵����ǿ�ƹر�D2R��Ϸ�����ᶪʧδ�������Ϸ���ȡ���
@echo.��������ֶ��浵���ٽ����л���
@echo.
@echo.˵�����������Ӵ浵����Ϸ�����п��Խ����滻������Ϸֻ����������ʱ���ع������Ӵ浵��
@echo.���������Ա���ǿ�ƹر���Ϸ����ʹ���л���Ч��
@echo.
@echo.�����رհ���2���ư����Ϸ���̣�������ر���Ϸ��������ֱ�ӹر���������
@echo.
pause

@echo.���ݵ�ǰ�浵
copy /Y "%box_current%" "%box_current_backup%"
@echo.��ȡ�浵���
set c_save_sharebox_num=NULL
call :get_sharebox_num
set choose_sharebox=%d2r_save%\SharedStashSoftCoreV2_%sharebox_choose_num%.d2i
set current_sharebox=%d2r_save%\SharedStashSoftCoreV2_%c_save_sharebox_num%.d2i
@echo.��ǰ�浵���c_save_sharebox_num=%c_save_sharebox_num%
@echo.ѡ��Ĵ浵���sharebox_choose_num=%sharebox_choose_num%
@echo.��ǰ�浵box_current=%box_current%
@echo.�浵���ݵ�ַbox_current_backup=%box_current_backup%
@echo.ѡ��Ĵ浵��ַchoose_sharebox=%choose_sharebox%
@echo.��ǰ�浵�����ַcurrent_sharebox=%current_sharebox%
@echo.

REM echo on
@echo.�رհ�����Ϸ
taskkill /f /t /im D2R.exe
@echo.��ǰ�浵������λ
REM @echo.copy /Y "%box_current%" "%box_current_backup%"
copy /Y "%box_current%" "%box_current_backup%"
@echo.��ǰ�浵������λ
REM @echo.copy /Y "%box_current%" "%current_sharebox%"
copy /Y "%box_current%" "%current_sharebox%"
@echo.����ѡ��ı�Ŵ浵���ǵ�ǰ�浵
REM @echo.copy /Y "%choose_sharebox%" "%box_current%"
copy /Y "%choose_sharebox%" "%box_current%"
@echo.���ɱ���ļ�
@ECHO.%sharebox_choose_num%>"%c_save_sign%"
goto GameSelectShareBoxNumberMain


:func_open_savepath
set d2r_save=%USERPROFILE%\Saved Games\Diablo II Resurrected
echo.USERPROFILE=%USERPROFILE%
echo.d2r_save=%d2r_save%
REM explorer.exe !D2R_save_folder!
explorer.exe "%d2r_save%"

goto GameStyleFunctionEnd



:set_offline_fullhire
if not exist %offline_fullhire%  (
	@ echo.	 ���� ���ر�ȫװ��Ӷ���� 
	ren %d2r_excel%\itemtypes.txt itemtypes_bigbox.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling hireling_full
	ren %layouts_folder%\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	ren %layouts_folder%\controller\hiremenupanelhd.json hiremenupanelhd_full.json
) else (
	@ echo.	 ���� ������ȫװ��Ӷ���� 
	ren %d2r_excel%\itemtypes_bigbox.txt itemtypes.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling_full hireling
	ren %layouts_folder%\hirelinginventorypanelhd_full.json hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd_full.json hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hiremenupanelhd_full.json hiremenupanelhd.json
)
goto GameStyleFunctionEnd

:set_offline_bigbox
if not exist %offline_bigbox%  (
	
	@ echo.	 ���� ���ر�ȫװ��Ӷ���� 
	ren %d2r_excel%\itemtypes.txt itemtypes_bigbox.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling hireling_full
	ren %layouts_folder%\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	del %layouts_folder%\hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd.json hirelinginventorypanelhd_full.json
	ren %layouts_folder%\controller\hiremenupanelhd.json hiremenupanelhd_full.json
	
	@ echo.	 ���� ���رյ��������ӡ� 
	
	@ echo.  ����txt�ļ���
	ren %d2r_excel%\inventory.txt inventory_bigbox.txt
	REM ren %d2r_excel%\itemtypes.txt itemtypes_bigbox.txt
	
	@ echo.  ����mdk mod�����ļ���
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd.json mdkplayerinventoryexpansionlayouthd_bigbox.json
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd_normal.json mdkplayerinventoryexpansionlayouthd.json

	@ echo.  ����json�ļ���
	ren %layouts_folder%\bankexpansionlayouthd.json bankexpansionlayouthd_bigbox.json
	ren %layouts_folder%\bankoriginallayouthd.json bankoriginallayouthd_bigbox.json
	ren %layouts_folder%\horadriccubelayouthd.json horadriccubelayouthd_bigbox.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_bigbox.json
	ren %layouts_folder%\playerinventoryoriginallayouthd.json playerinventoryoriginallayouthd_bigbox.json
	
	ren %layouts_folder%\controller\bankexpansionlayouthd.json bankexpansionlayouthd_bigbox.json
	ren %layouts_folder%\controller\horadriccubelayouthd.json horadriccubelayouthd_bigbox.json
	
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_bigbox.json
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd_mdkmod.json playerinventoryexpansionlayouthd.json

	@ echo.  �ָ����ݵ��ļ���
	ren %layouts_folder%\horadriccubelayouthd_exchange.json horadriccubelayouthd.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd_exchange.json playerinventoryexpansionlayouthd.json
	ren %layouts_folder%\playerinventoryoriginallayouthd_exchange.json playerinventoryoriginallayouthd.json
	
) else (
	@ echo.	 ���� ������ȫװ��Ӷ���� 
	ren %d2r_excel%\itemtypes_bigbox.txt itemtypes.txt
	ren .\mods\Demo\Demo.mpq\data\hd\global\ui\panel\hireling_full hireling
	copy /Y %layouts_folder%\hirelinginventorypanelhd_full.json %layouts_folder%\hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hirelinginventorypanelhd_full.json hirelinginventorypanelhd.json
	ren %layouts_folder%\controller\hiremenupanelhd_full.json hiremenupanelhd.json
	
	@ echo.	 ���� ���������������ӡ� 
	@ echo.  ���ݵ�ǰ�ļ���
	ren %layouts_folder%\horadriccubelayouthd.json horadriccubelayouthd_exchange.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_exchange.json
	ren %layouts_folder%\playerinventoryoriginallayouthd.json playerinventoryoriginallayouthd_exchange.json
	
	@ echo.  ����txt�ļ���
	ren %d2r_excel%\inventory_bigbox.txt inventory.txt
	REM ren %d2r_excel%\itemtypes_bigbox.txt itemtypes.txt
	
	@ echo.  ����mdk mod�����ļ���
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd.json mdkplayerinventoryexpansionlayouthd_normal.json
	ren %d2r_layouts%\mdkplayerinventoryexpansionlayouthd_bigbox.json mdkplayerinventoryexpansionlayouthd.json
	@ echo.  ����json�ļ���
	ren %layouts_folder%\bankexpansionlayouthd_bigbox.json bankexpansionlayouthd.json
	ren %layouts_folder%\bankoriginallayouthd_bigbox.json bankoriginallayouthd.json
	ren %layouts_folder%\horadriccubelayouthd_bigbox.json horadriccubelayouthd.json
	ren %layouts_folder%\playerinventoryexpansionlayouthd_bigbox.json playerinventoryexpansionlayouthd.json
	ren %layouts_folder%\playerinventoryoriginallayouthd_bigbox.json playerinventoryoriginallayouthd.json
	
	@ echo.  ����j�ֱ�son�ļ���
	ren %layouts_folder%\controller\bankexpansionlayouthd_bigbox.json bankexpansionlayouthd.json
	ren %layouts_folder%\controller\horadriccubelayouthd_bigbox.json horadriccubelayouthd.json
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd.json playerinventoryexpansionlayouthd_mdkmod.json
	ren %layouts_folder%\controller\playerinventoryexpansionlayouthd_bigbox.json playerinventoryexpansionlayouthd.json
)
goto GameStyleFunctionEnd

:set_exp_mode
if not exist %exp_mode260%  (
	@ echo.	 ��ǰ״̬��80��260��ģʽ ��	���� ����������һ��99ģʽ�� 
	ren %exp_mode_file% experience_260.txt
	ren %charstats_file% charstats_260.txt
	ren %exp_mode99% experience.txt
) else if not exist %exp_mode99%  (
	@ echo.	 ��ǰ״̬��һ��99��ģʽ ������ ���رյ��������ǿģʽ�� 
	ren %exp_mode_file% experience_99.txt
) else (
	@ echo.	 ��ǰ״̬����������ǿ��ģʽ �� ������ ������80������260������ģʽ �� 
	ren %exp_mode260% experience.txt
	ren %charstats_260% charstats.txt
)
goto GameStyleFunctionEnd


:set_offline_exskill
if not exist %offline_exskill%  (
	@ echo.	 ���� ���رյ������ܼ�ǿ�� 
	move /Y %d2r_excel%\skills.txt %d2r_excel%\offline\skills_plus.txt
	move /Y %d2r_excel%\offline\skills_normal.txt  %d2r_excel%\skills.txt
	del %d2r_excel%\missiles.txt
) else (
	@ echo.	 ���� �������������ܼ�ǿ�� 
	move /Y %d2r_excel%\skills.txt  %d2r_excel%\offline\skills_normal.txt
	move /Y %d2r_excel%\offline\skills_plus.txt %d2r_excel%\skills.txt
	REM copy /Y %d2r_excel%\offline\skilldesc.txt %d2r_excel%\skilldesc.txt
	copy /Y %d2r_excel%\offline\missiles.txt %d2r_excel%\missiles.txt
)
goto GameStyleFunctionEnd


:set_ass_charge_up

if not exist %ass_charge_default% (
	@ echo.	 ���� �������ʾ�����ͼ�꡿
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\

	del .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\
	xcopy /Y /E .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large% (
	@ echo.	 ���� ��UI��ʾ�����ͼ�꡿
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large\
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large_down\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\

	del .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\ass_charge_large\progressive*.* .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\
	xcopy /Y /E .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\ass_charge_large\progressive* .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\

) else if not exist %ass_charge_large_down% (
	@ echo.	 ���� ��������ʾС����ͼ�꡿
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_large_down\
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_small\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\

	del .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\progressive*.*
	copy /Y .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\ass_charge_small\progressive*.* .\mods\Demo\Demo.mpq\data\hd\vfx\textures\graphic\
	xcopy /Y /E .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\ass_charge_small\progressive* .\mods\Demo\Demo.mpq\data\hd\vfx\particles\overlays\common\

) else (
	@ echo.	 ���� ������ʾ�����ȼ�ͼ�꡿
	move .\mods\Demo\Demo.mpq\data\hd\overlays\common\progressive*.json .\mods\Demo\Demo.mpq\data\hd\overlays\common\charge_ass_small\
)


goto GameStyleFunctionEnd

:set_ass_charge_missiles
if exist %ass_charge_missiles% (
@ echo.	 ���� ���ָ�ԭ����ʽ��
del .\mods\Demo\Demo.mpq\data\hd\missiles\missiles.json
) else (
@ echo.	 ���� �����;�����Ч��
copy /Y .\mods\Demo\Demo.mpq\data\hd\missiles\assassin_charge\missiles.json .\mods\Demo\Demo.mpq\data\hd\missiles
)
goto GameStyleFunctionEnd

:open_ass_charge_missiles_file
notepad .\mods\Demo\Demo.mpq\data\hd\missiles\missiles.json
goto GameStyleFunctionEnd

:set_minimap_units_style
if exist %mini_map_unit% (
@ echo.	 ���� ��ԭ����
ren %mini_map_unit% units_mdk.sprite
ren %mini_map_unit_low% units_mdk.lowend.sprite
) else (
@ echo.	 ���� ��Demoʵ�ķ��
ren %mini_map_unit_mdk% units.sprite
ren %mini_map_unit_low_mdk% units.lowend.sprite
)
goto GameStyleFunctionEnd


:set_ui_zoom_size
	 
	if not exist %ui_mini% (
		@ echo.	 ���� ��65%%�ߴ�UI���桿  
		ren %ui_file% hudpanelhd_0.01.json
		ren %ui_filec% hudpanelhd_0.01.json
		ren %ui_6% hudpanelCurrenthd.json
		ren %ui_6c% hudpanelCurrenthd.json
	) else if not exist %ui_6% (
		@ echo.	 ���� ��75%%�ߴ�UI���桿  
		ren %ui_file% hudpanelhd_0.65.json
		ren %ui_filec% hudpanelhd_0.65.json
		ren %ui_7% hudpanelCurrenthd.json
		ren %ui_7c% hudpanelCurrenthd.json
	) else if not exist %ui_7% (
		@ echo.	 ���� ��85%%�ߴ�UI���桿	���ڴ�����...���Ե�...
		ren %ui_file% hudpanelhd_0.75.json
		ren %ui_filec% hudpanelhd_0.75.json
		ren %ui_8% hudpanelCurrenthd.json
		ren %ui_8c% hudpanelCurrenthd.json
	) else if not exist %ui_8% (
		@ echo.	 ���� ��100%%�ߴ�UI���桿   ���ڴ�����...���Ե�...
		ren %ui_file% hudpanelhd_0.85.json
		ren %ui_filec% hudpanelhd_0.85.json
		ren %ui_n% hudpanelCurrenthd.json
		ren %ui_nc% hudpanelCurrenthd.json
	) else (
		@ echo.	 ���� ������UI���桿   ���ڴ�����...���Ե�...
		ren %ui_file% hudpanelhd_normal.json
		ren %ui_filec% hudpanelhd_normal.json
		ren %ui_mini% hudpanelCurrenthd.json
		ren %ui_minic% hudpanelCurrenthd.json
	)
@ echo.
goto GameStyleFunctionEnd

:set_font_display_size
	@ echo.
	if exist %font_size% (
	ECHO  ���ָ�Ĭ�������С�����ڴ�����...���Ե�...
	ren %d2r_layouts%\_profileasian.json _profileasian_mdk.json
	) else (
	ECHO  ����������ߴ硿���ڴ�����...���Ե�...
	ren %d2r_layouts%\_profileasian_mdk.json _profileasian.json
	)
goto GameStyleFunctionEnd

:set_sp_effects
if exist %sp_effects% (
	@ echo.	 ���� ���ر�ħ����Ч��
	del %d2r_missiles%\blessedhammer.json
	del %d2r_missiles%\blizzard.json
	del %d2r_missiles%\blue_nova_b.json
	del %d2r_missiles%\chainlightningbolt.json
	del %d2r_missiles%\corpse_explode_guts.json
	del %d2r_missiles%\fire_arrow_explode_2.json
	del %d2r_missiles%\fireball.json
	del %d2r_missiles%\firewallmaker.json
	del %d2r_missiles%\frost_nova.json
	del %d2r_missiles%\ice_bolt.json
	del %d2r_missiles%\ice_orb.json
	del %d2r_missiles%\light_beams.json
	del %d2r_missiles%\lightningbolt.json
	del %d2r_missiles%\poison_nova.json
) else (
	@ echo.	 ���� ������ħ����Ч��
	copy /Y %d2r_missiles%\effects\*.json %d2r_missiles%
)
goto GameStyleFunctionEnd

:set_magicarrow_effects
if exist %magicarrow_effects% (
	@ echo.	 ���� ���ر�ħ������Ч��
	del %d2r_missiles%\arrow.json
	del %d2r_missiles%\x_bow_bolt.json
) else (
	@ echo.	 ���� ������ħ������Ч��
	copy /Y %d2r_missiles%\arrow_effects\arrow.json %d2r_missiles%
	copy /Y %d2r_missiles%\arrow_effects\x_bow_bolt.json %d2r_missiles%
)
goto GameStyleFunctionEnd

:set_nova_effects
if exist %nova_effects% (
	@ echo.	 ���� ���ر�nova��Ч��
	del %d2r_missiles%\electric_nova.json
	del %d2r_missiles%\lightningbolt_big.json
) else (
	@ echo.	 ���� ������nova��Ч��
	copy /Y %d2r_missiles%\nova_effects\electric_nova.json %d2r_missiles%
	copy /Y %d2r_missiles%\nova_effects\lightningbolt_big.json %d2r_missiles%
)
goto GameStyleFunctionEnd


:set_BO_effects

	if not exist %BO_time% (
	@ echo.	 ���� ����ʾ����������Ч��
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo
	
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common
	) else if not exist %BO_time_charge% (
	@ echo.	 ���� ���ر�BC/BO��BUFF��Ч��
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common\charge_bo
	) else (
	@ echo.	 ���� ����ʾ�Ͷ�������Ч�� 
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\battlecommand.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\battleorders.json mods\Demo\Demo.mpq\data\hd\overlays\common
	move /Y mods\Demo\Demo.mpq\data\hd\overlays\common\shield_bo\shout.json mods\Demo\Demo.mpq\data\hd\overlays\common
	)
goto GameStyleFunctionEnd

:func_convic_sign
	if not exist %convic_off% (
	echo. �رո�̾����ʾ
	ren %convic_on%  convictionback_mdk.json
	) else (
	echo. ������̾����ʾ
	ren %convic_off%  convictionback.json
	)
Goto GameStyleFunctionEnd

:set_show_helmet
if not exist %no_all_cap% (
	if not exist %no_cap% (
		@ echo.	 ���� ������ʾ��ñ����ñ��  
		move /Y %d2r_items%\armor\circlet\*.json %d2r_items%\armor\circlet\mdk
		move /Y %d2r_items%\armor\helmet\*.json %d2r_items%\armor\helmet\mdk
		move /Y %d2r_items%\armor\pelt\*.json %d2r_items%\armor\pelt\mdk
		
		move /Y %d2r_items%\armor\helmet\mdk\cap_hat.json %d2r_items%\armor\helmet
		move /Y %d2r_items%\armor\helmet\mdk\skull_cap.json %d2r_items%\armor\helmet
	) else (
		@ echo.	 ���� ������ʾͷ����  
		move /Y %d2r_items%\armor\circlet\mdk\*.json %d2r_items%\armor\circlet
		move /Y %d2r_items%\armor\helmet\mdk\*.json %d2r_items%\armor\helmet
		move /Y %d2r_items%\armor\pelt\mdk\*.json %d2r_items%\armor\pelt
	)
) else (
	@ echo.	 ���� ����ʾͷ����  
	move /Y %d2r_items%\armor\circlet\*.json %d2r_items%\armor\circlet\mdk
	move /Y %d2r_items%\armor\helmet\*.json %d2r_items%\armor\helmet\mdk
	move /Y %d2r_items%\armor\pelt\*.json %d2r_items%\armor\pelt\mdk
)
Goto GameStyleFunctionEnd

:set_rune_style
@ echo.
	if exist %rune_style%  (
	ECHO  ���ָ�ԭ�������ʽ�����ڴ�����...���Ե�..
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune_new
	) else (
	ECHO  ����Ϊ����ŷ�����ʽ�� ���ڴ�����...���Ե�...
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune_new mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\rune
	)
goto GameStyleFunctionEnd

:set_horadric_cube_style
	@ echo. ��������
	if not exist %offline_bigbox%  (
		@cls
		@ echo. ���ȹرա�������Ϸ * �����ӡ������ٵ����������á�
		pause
		goto GameStyleFunctionEnd
	)
	
	if exist %horadic% (
	@ echo.   ���ָ�ԭ������Ͽ˷��У��벻Ҫ�ڹŶ�����Ϳ�һ����� ���ڴ�����...���Ե�...
	ren %d2r_layouts%\horadriccubelayouthd.json horadriccubelayouthd_mc.json
	ren %d2r_layouts%\controller\horadriccubelayouthd.json horadriccubelayouthd_mc.json
	ren %d2r_layouts%\horadriccubelayouthd_mdk.json horadriccubelayouthd.json
	) else (
	@ echo.   ��ʵ����������Ͽ˷��У�MCMod�棩�� ���ڴ�����...���Ե�...
	ren %d2r_layouts%\horadriccubelayouthd.json horadriccubelayouthd_mdk.json
	ren %d2r_layouts%\horadriccubelayouthd_mc.json horadriccubelayouthd.json
	ren %d2r_layouts%\controller\horadriccubelayouthd_mc.json horadriccubelayouthd.json
	)
goto GameStyleFunctionEnd

:set_hp_bar_style
	@ echo.  
	if not exist %hp_bar% (
	@ echo.   ������Ϊ��������Ѫ����  ���ڴ�����...���Ե�...
	ren %d2r_layouts%\hudmonsterhealthhd.json hudmonsterhealthhd_mdk2nd.json
	ren %d2r_layouts%\hudmonsterhealthhd_mdk1st.json hudmonsterhealthhd.json
	) else if not exist %hp_bar2% (
	@ echo.   ������ΪĬ��Ѫ����  ���ڴ�����...���Ե�...
	ren %d2r_layouts%\hudmonsterhealthhd.json hudmonsterhealthhd_mdk1st.json
	) else (
	@ echo.   ������Ϊ���ط��Ѫ����  ���ڴ�����...���Ե�...
	ren %d2r_layouts%\hudmonsterhealthhd_mdk2nd.json hudmonsterhealthhd.json
	)
goto GameStyleFunctionEnd

:set_color_modifiers
	if not exist %color_word% (
	@ echo.	 ���� ����ɫ���Դ�����  ���ڴ�����...���Ե�...
	del %string_folder%item-modifiers.json
	copy /Y %string_folder%json_db\item-modifiers_color.json %string_folder%item-modifiers.json
	del %string_folder%json_db\*.mcsign
	@ECHO.  "x">%color_word%
	) else (
	@ echo.	 ���� ��ԭ��ͳһɫ������  ���ڴ�����...���Ե�...
	del %string_folder%item-modifiers.json
	copy /Y %string_folder%json_db\item-modifiers_normal.json %string_folder%item-modifiers.json
	del %string_folder%json_db\*.mcsign
	)
goto GameStyleFunctionEnd

:set_skill_icons_style
	@ echo.  
	if exist %color_spell% (
	@ echo.   ����ɫ����ͼ�꡿  ���ڴ�����...���Ե�...
	ren mods\Demo\Demo.mpq\data\hd\global\ui\color_spells spells
	) else (
	@ echo.   ��ԭ������ͼ�꡿ ���ڴ�����...���Ե�...
	ren mods\Demo\Demo.mpq\data\hd\global\ui\spells color_spells
	)
goto GameStyleFunctionEnd

:set_potion_style
	@ echo.  
	if exist %potion_style% (
	@ echo.	 ���ָ�ԭ�泬�����ҩƿ��  ���ڴ�����...���Ե�...
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion_mdk
	) else (
	@ echo.	 �����óɴ�Բƿ�ĳ������ƿ�� ���ڴ�����...���Ե�...
	move /Y mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion_mdk mods\Demo\Demo.mpq\data\hd\global\ui\items\misc\potion
	)
goto GameStyleFunctionEnd

:set_potion_sound
	if exist %potion_vo% (
	@ echo.	 ���� ���ָ�ҩˮ��Ч��  	���ڴ�����...���Ե�...
	ren %potion_vo% item_potion_hd_mdk.flac
	) else (
	@ echo.	 ���� ������ҩˮ��Ч��  	���ڴ�����...���Ե�...
	ren %d2r_sfx%\item\item_potion_hd_mdk.flac item_potion_hd.flac
	)
goto GameStyleFunctionEnd

:set_mercenary_portrait_location
	if exist %hireables_down% (
	@ echo.	 ���� ����ʾ����Ļ�Ϸ���  
	ren %d2r_layouts%\hireablespanelhd.json hireablespanelhd_down.json
	ren %d2r_layouts%\hireablespanelhd_up.json hireablespanelhd.json
	) else (
	@ echo.	 ���� ����ʾ����Ļ�·���  
	ren %d2r_layouts%\hireablespanelhd.json hireablespanelhd_up.json
	ren %d2r_layouts%\hireablespanelhd_down.json hireablespanelhd.json
	)
Goto GameStyleFunctionEnd

:set_show_monster_resistance
	if exist %monster_res% (
	@ echo.	 ���� ���رտ�����ʾ��  
		del %d2r_excel%\monstats.txt
		del %d2r_excel%\superuniques.txt
	) else (
	@ echo.	 ���� ������������ʾ��  
		copy /Y %d2r_excel%\monstats.txt.mdk %d2r_excel%\monstats.txt
		copy /Y %d2r_excel%\superuniques.txt.mdk %d2r_excel%\superuniques.txt
	)
goto GameStyleFunctionEnd

:set_offline_monster_magnification
	if not exist %monster_3x% (
	@ echo.	 ���� ��10���� 
	ren %monster_level% levels_3.txt
	ren %monster_10x% levels.txt
	) else if not exist %monster_10x% (
	@ echo.	 ���� ��20����  
	ren %monster_level% levels_10.txt
	ren %monster_20x% levels.txt
	) else if not exist %monster_20x% (
	@ echo.	 ���� ���رչ���ӱ���  
	ren %monster_level% levels_20.txt
	ren %monster_1x% levels.txt
	) else (
	@ echo.	 ���� ��3���� 
	ren %monster_level% levels_1.txt
	ren %monster_3x% levels.txt
	)
Goto GameStyleFunctionEnd


:func_rune_shop
	if not exist %rune_shop%  (
	@ echo.	���� ���ر��̵���۷��ġ� 
	ren %misc_file% misc_shop.txt
	ren %rune_normal% misc.txt
	) else (
	@ echo.	���� �������̵���۷��ġ� 
	ren %misc_file% misc_normal.txt
	ren %rune_shop% misc.txt
	)
Goto GameStyleFunctionEnd

:GameStyleFunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO ������ɣ���������GameStyle_Main...
	@ echo.
	if exist mdk_mod.debug ( pause )
goto GameStyle_Main

REM===��Ϸ������� END===

:FunctionEnd
	ping -n 1 127.1>nul
	@ echo.
	@ECHO ������ɣ���������...
	@ echo.
	if exist mdk_mod.debug ( pause )
	if "%CurrentMenu%"=="rule" goto RuleSetup_Main
goto SetupMain


:exit
	@ echo.
exit


::Color ��ɫRed ��ɫBlack ��ɫGreen ��ɫYellow ��ɫBlue ���Magenta ��ɫCyan ��ɫWhite
:cred
powershell -Command Write-Host "%*" -foreground "Red"
goto :eof

:cgreen
powershell -Command Write-Host "%*" -foreground "Green"
goto :eof