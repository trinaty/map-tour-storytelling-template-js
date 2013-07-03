﻿define(
({
		viewer: {
			loading: {
				step1: "IELĀDĒ APLIKĀCIJU",
				step2: "IELĀDĒ DATUS",
				step3: "IZPILDA TŪRI",
				loadBuilder: "PĀRSLĒGT UZ BUILDER MODE",
				fail: "Atvainojiet, Map Tour ielādēšanas neveiksme",
				failButton: "Atkārtot"
			},
			errors: {
				boxTitle: "Kļūda",
				invalidConfig: "Fatāla kļūda: konfigurācijas neveiksme",
				invalidConfigOwner: "Fatāla kļūda: konfigurācijas neveiksme (nepieciešams autorizēts īpašnieks)",
				invalidConfigNoWebmap: "Fatāla kļūda: konfigurācijas neveiksme (nepieciešama web karte un autorizēts īpašnieks)",
				createMap: "Nevar izveidot karti",
				invalidApp: "Fatāla kļūda: aplikāciju nevar ielādēt",
				noLayer: "Web karte nesatur derīgu datu slāni priekš Map Tour.",
				noLayerMobile: "Laipni lūdzam Map Tour web aplikācijā. Aplikācija nav konfigurēta. Map Tour veidotājs netiek atbalstīts uz mobilajām ierīcēm.",
				noLayerView: "Laipni lūdzam Map Tour web aplikācijā.<br />Aplikācija nav vēl konfigurēta.",
				appSave: "Kļūda, saglabājot web aplikāciju",
				mapSave: "Kļūda, saglabājot web karti",
				featureServiceLoad: "Kļūda ielādējot elementu servisu",
				notAuthorized: "Jums nav atļauts konfigurēt šo aplikāciju",
				oldBrowserTitle: "Pārlūks netiek pilnībā atbalstīts",
				noBuilderIE8: "Map Tour veidotājs neatbalsta Internet Explorer pirms 9 versiju.",
				ie10Win7Explain: "Map Tour interaktīvais veidotājs nav atbalstīts ar Internet Explorer 10 uz Windows 7, kad datu avots ir Feature Service ar piesaistēm. Lai lietotu Feature Service ar piesaistēm, jums vajag <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>manuāli piespiest dokumenta režīmu uz Internet Explorer 9 standartu</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>pazemināt uz Internet Explore 9</a> vai uzlabot uz Windows 8.",
				oldBrowserExplain: "Šis pārlūks neatbalsta automātisku sīktēlu radīšanu no attēliem, ko jūs augšupielādējat jūsu map tour. Jūs varat izveidot map tour, izmantojot šo pārlūku, bet jums būs jāsniedz atsevišķs sīktēls par katru no augšupielādētiem attēliem .",
				oldBrowserExplain2: "Lai uzlabotu jūsu pieredzi, <a href='http://browsehappy.com/' target='_blank'>jaunina jūsu pārlūku</a> vai <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>aktivizē Google Chrome Frame priekš Internet Explorer</a>.",
				oldBrowserExplain3: "The Map Tour veidotājs nedarbojas ar Internet Explorer 10 uz Windows XP.",
				oldBrowserClose: "Aizvērt"
			},
			mobileHTML: {
				showIntro: "RĀDĪT VIRSRAKSTU",
				hideIntro: "PASLĒPT VIRSRAKSTU",
				navList: "Saraksts",
				navMap: "Karte",
				navInfo: "Bildes",
				introStartBtn: "Starts"
			},
			desktopHTML: {
				storymapsText: "Stāstu karte",
				builderButton: "Pārslēgties uz veidotāja režīmu"
			},
			builderHTML: {
				panelHeader: "APLIKĀCIJAS KONFIGURĀCIJA",
				buttonSave: "SAGLABĀT",
				buttonDiscard: "ATCELT",
				buttonSettings: "Iestatījumi",
				buttonView: "Skata režīms",
				buttonHelp: "Palīdzība",
				buttonOrganize: "Organizē",
				buttonAdd: "Pievienot",
				buttonImport: "Importēt",
				buttonImportDisabled: "Imports nav iespējams, lietojot  Feature Service ar piesaistēm",
				modalCancel: "Atcelt",
				modalApply: "Lietot",
				organizeHeader: "Organizē tūri",
				organizeGeneralCaption: "Izmantot vilkt un nomest, lai kārtotu maršruta punktus",
				organizeDelete: "Izdzēst",
				organizeHide: "Paslēpt",
				addMaxPointReached: "Jūs esat sasniedzis maksimālo punktu skaitu, ko pilnvarojuši  ikonu iestatījumi un nevarat pievienot citu tūres punktu.<br/><br/>Ņemiet vērā, ja jūs izdzēstu esošos punktus, jums būtu nepieciešams pārlādēt aplikāciju.",
				addMaxPointReachedMobile: "Atvainojiet, jūs esat sasniedzis maksimālo autorizēto punktu skaitu un nevarat pievienot šo bildi.",
				addClose: "Aizvērt",
				addHeader: "Pievienot jaunu tūres punktu",
				addTabPicture: "Bilde",
				addTabInformation: "Informācija",
				addTabLocation: "Izvietojums",
				addSelectCaption: "Izvēlieties izkrītošu bildi",
				addSelectCaptionNoFileReader: "Izvēlieties bildi",
				addChangePhoto: "Mainiet bildi un sīktēlu",
				addPictureResolutionIntro: "Attēla rezolūcija ir lielāka nekā nepieciešams:",
				addPictureResolutionOldBrowser: "Attēla rezolūcija ir lielāka nekā nepieciešams. Optimizēt Map Tour pieredzi, norādot zemāku rezolūciju nekā %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Mainīt attēla rezolūciju uz %RESOLUTION%",
				addPictureResolutionKeep: "Paturēt oriģinālo rezolūciju %RESOLUTION%",
				addSelectThumbnail: "Izvēlēties sīktēlu",
				addNoThumbSelected: "Nav izvēlēts sīktēls",
				addThumbSelected: "Izvēlētais",
				addCameraSettingsHeader: "KAMERAS IESTATĪJUMI",
				addThumbnailHeader: "SĪKTĒLS",
				addLabelPicUrl: "Bildes URL",
				addLabelThumbUrl: "Sīktēla URL",
				addTextPlaceholderUrl: "Ievadiet URL",
				addLabelName: "Nosaukums",
				addLabelDescription: "Uzraksts",
				addTextPlaceholder: "Rakstīt kaut ko",
				addLocatePlaceholder: "Atrast adresi vai vietu",
				addPinColor: "Krāsa",
				addLatitude: "Platums",
				addLongitude: "Garums",
				addLatitudePlaceholder: "piem. 34.056",
				addLongitudePlaceholder: "piem. -117.195",
				addUploading: "Augšupielādējot tūres punktu",
				addSave: "Pievienot tūres punktu",
				addMobileUploading: "Augšupielādē bildi",
				addMobileName: "Ievadiet nosaukumu",
				addMobileNameMandatory: "Kļūda, lūdzu, ievadiet nosaukumu.",
				addMobileError: "Atvainojiet, kaut kas ir nogājis greizi",
				settingsHeader: "Aplikācijas iestatījumi",
				settingsTabLayout: "Izkārtojums",
				settingsTabColor: "Krāsas",
				settingsTabLogo: "Galvene",
				settingsTabFields: "Dati",
				settingsTabExtent: "Pārklājums",
				settingsTabZoom: "Mērogmaiņas līmenis",
				settingsLayoutExplain: "Izvēlieties aplikācijas izkārtojumu starp diviem paredzētajiem.",
				settingsLayoutProfessional: "Trīs paneļu izkārtojums",
				settingsLayoutModern: "Integrētais izkārtojums",
				settingsLayoutSelected: "Izvēlētais izkārtojums",
				settingsLayoutSelect: "Izvēlieties šo izkārtojumu",
				settingsColorExplain: "Mainīt izskatu, izvēloties iepriekš noteiktu tēmu, vai izveidojot savu.",
				settingsLabelColor: "Galvenes, satura un kājenes krāsas",
				settingsLogoExplain: "Pielāgot galvenes logotipu (maksimums  ir 250 x 50piks).",
				settingsLogoEsri: "Esri logotips",
				settingsLogoNone: "Nav logotipa",
				settingsLogoCustom: "Pielāgots logotips",
				settingsLogoCustomPlaceholder: "Attēla URL",
				settingsLogoCustomTargetPlaceholder: "Klikšķis caur saiti",
				settingsLogoSocialExplain: "Pielāgot galvenes labās augšējās saites.",
				settingsLogoSocialText: "Teksts",
				settingsLogoSocialLink: "Saite",
				settingsDataFieldsExplain: "Izvēlieties foto nosaukumu, uzrakstu un krāsu laukus.",
				settingsDataFieldsError: "Aplikācija nevar noteikt piemērotu nosaukumu, uzrakstu vai krāsu datus. Lūdzu, izvēlieties laukus ko šeit izmantot. Šos iestatījumus var mainīt vēlāk.",
				settingsFieldsLabelName: "Nosaukums",
				settingsFieldsLabelDescription: "Uzraksts",
				settingsFieldsLabelColor: "Krāsa",
				settingsExtentExplain: "Iestatīt Map Tour sākotnējo pārklājumu, izmantojot interaktīvo karti zemāk.",
				settingsExtentExplainBottom: "Pārklājums tiek izmantots tikai tad, ja tas ietver sevī pirmo ceļojumu punktu. Vērtība saglabājās caur web kartes sākotnējo pārklājumu.",
				settingsExtentDrawBtn: "Zīmēt jaunu pārklājumu",
				settingsExtentModifyBtn: "Rediģēt pašreizējo pārklājumu",
				settingsExtentApplyBtn: "Lietot galvenajā kartē",
				settingsZoomExplain: "Iestatīt mērogmaiņu stāstu punktiem, kas seko pēc ievada (pēc izvēles).",
				settingsLabelZoom: "Mērogs/līmenis",
				settingsZoomFirstValue: "Neviens",
				settingsFieldError: "Lūdzu, izvēlieties lauku katrā sarakstā",
				dataExplain: "Elementu serviss tiks pievienots jūsu web kartei. Tas netiks koplietots ar ikvienu un tikai jums būs privilēģijas pievienot, rediģēt un dzēst.<br /><br />Ja jūs mainīsiet aplikācijas koplietošanas privilēģijas, sistēma jautās, vai jūs vēlaties atjaunot jūsu Feature Service koplietošanas konfigurāciju. Tas ir nepieciešams, lai jūsu lietotāji varētu piekļūt jūsu datiem. Jūs paliekat vienīgais ar rediģēšanas privilēģijām.",
				dataNameLbl: "Servisa nosaukums",
				dataFolderListLbl: "Mape",
				dataFolderListFetching: "Mapju ienešana ...",
				dataRootFolder: "Sakne",
				dataNameError: "Ievadiet nosaukumu elementu servisam",
				dataFolderError: "Izvēlieties derīgu mapi",
				dataSrcContainsInvalidChar: "Elementu servisa nosaukums satur vienu vai vairākas nederīgas rakstzīmes (-, <, >, #, %, :, \", ?, &, +, /, or \).",
				dataSrvAlreadyExistsError: "Serviss ar šādu nosaukumu jau pastāv organizācijā. Lūdzu, izvēlieties citu nosaukumu.",
				dataBtnSave: "Izveidot servisu",
				dataFooterProgress: "Izveide notiek",
				dataFooterSucceed: "Izveide izdevās. Ielādē",
				dataFooterError: "Izveide neizdevās. Lūdzu, mēģiniet vēlreiz",
				tabError: "Lūdzu pārbaudīt kļūdas visās cilnēs",
				introRecordBtn: "Ievads",
				introRecordActivate: "Izmantojiet pirmo punktu, kā ievadu (neparādās karuselī)"
			},
			addPopupJS: {
				uploadingPicture: "Augšupielādē attēlu",
				uploadSuccess: "Augšupielāde veiksmīga",
				uploadError: "Kļūda, augšupielādējot attēlu",
				notJpg: "Lūdzu, izvēlieties jpeg foto, lai augšupielādētu",
				errorNoPhoto: "Izvēlieties attēlu, lai augšupielādētu",
				errorNoThumbnail: "Izvēlieties sīktēlu, lai augšupielādētu",
				errorInvalidPicUrl: "Ievadiet derīgu bildes URL priekš šī punkta",
				errorInvalidThumbUrl: "Ievadiet derīgu sīktēla URL priekš šī punkta",
				errorNoName: "Ievadiet nosaukumu šim tūres punktam",
				errorNoDescription: "Ievadiet uzrakstu šim tūres punktam",
				errorNoLocation: "Iestatiet izvietojumu šim tūres punktam"
			},
			builderJS: {
				noPendingChange: "Nav neizpildītu izmaiņu",
				unSavedChangeSingular: "1 nesaglabāta izmaiņa",
				unSavedChangePlural: "nesaglabātas izmaiņas",
				popoverDiscard: "Vai esat pārliecināts, ka vēlaties izmest visas nesaglabātās izmaiņas?",
				yes: "Jā",
				no: "Nē",
				popoverLoseSave: "Atverot skatītāju, jūs zaudēsiet visas nesaglabātās izmaiņas",
				ok: "Labi",
				popoverSaveWhenDone: "Neaizmirstiet saglabāt, kad jūs pabeidzat",
				closeWithPendingChange: "Vai esat pārliecināts, ka vēlaties apstiprināt darbību? Jūsu izmaiņas tiks zaudētas.",
				gotIt: "Labi",
				savingApplication: "Saglabā aplikāciju",
				saveSuccess: "Aplikācija saglabāta veiksmīgi",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				dragColorPicker: "Pārvietot man apkārt<br />vai mainīt manu krāsu",
				dataWarningExtent: "Jums ir dati web kartes pārklājuma ārpusē. Šie dati netiks izmantoti kā tūres punkti, izmainiet kartes pārklājumu, ja jūs vēlaties tos izmantot.",
				dataWarningVisibi: "Jūsu Map Tour slānis nav redzams pašreizējā web kartes pārklājumā. Apstipriniet, ka jūsu Map Tour slānis ir redzams ar %MAPSIZE% lielā kartē.",
				dataWarningEdit: "Rediģēt web karti",
				dataWarningClose: "Aizvērt",
				signIn: "Lūdzu, pierakstieties kontā uz",
				signInTwo: "lai saglabātu aplikāciju."
			},
			organizePopupJS: {
				messageStart: "Jūs esat izvēlējies izdzēst",
				messageSinglePoint: "vienu tūres punktu",
				messageMultiPoint: "tūres punkti",
				messagePermantRemove: "Tas neatgriezeniski izņems",
				messageRecord: "ieraksts",
				messageRecordPlural: "ieraksti",
				messageConfirm: "no jūsu datubāzes. Vai vēlaties turpināt?",
				labelButtonShow: "Parādīt",
				labelButtonHide: "Paslēpt"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "Tas neatgriezeniski izdzēstu bildi un sīktēlu",
				popoverDeleteWarningThumb: "Tas neatgriezeniski izdzēstu sīktēlu",
				popoverUploadingPhoto: "Augšupielādē bildi un sīktēlu",
				popoverUploadingThumbnail: "Augšupielādē sīktēlu",
				popoverUploadSuccessful: "Augšupielāde veiksmīga",
				popoverUploadError: "Augšupielādes neveiksme, lūdzu, mēģiniet vēlreiz",
				changePicAndThumb: "Mainīt bildi",
				changeThumb: "Mainīt sīktēlu",
				selectPic: "Mainīt bildi",
				selectThumb: "Mainīt sīktēlu",
				uploadPicAndThumb: "Lietot"
			},
			headerJS:{
				editMe: "Rediģē mani !",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu"
			},
			crossFaderJS:{
				setPicture: "Iestatīt bildes virsrakstu",
				setCaption: "Iestatīt bildes uzrakstu"
			},
			importPopup: {
				title: "Importēt",
				prevBtn: "Atpakaļ",
				nextBtn: "Nākošais"
			},
			importPopupHome: {
				header: "Kur ir jūsu bildes uzglabātas?",
				loadCSV: "Tie atskaitās uz CSV (jebkuru bildi, kas koplieto servisus vai web serveri, skatiet palīdzību detaļām)",
				loadFolder: "Mape uz mana datora (nepieciešams mūsdienu pārlūks un Feature Service ar piesaistēm datu avotam)"
			},
			onlinePhotoSharingCommon: {
				header1: "Bildes jābūt publiski koplietotām.",
				header2: "Imports būs limitēts uz %NB1% bildēm ievērojot limitu no %NB2% punktiem tūrē.",
				emptyDataset: "Kļūda, nav atrastas bildes",
				footerImport: "Importēt",
				selectAlbum: "Izvēlieties publisku albumu",
				selectAlbum2: "Izvēlieties albumu",
				pleaseChoose: "Lūdzu, izvēlieties",
				userLookup: "Uzmeklēt",
				userLookingup: "Meklēšanai",
				csv: "Atsauce uz CSV",
				fromScratch: "Sākt no norauses",
				select: "Veikt izvēli",
				locUse: "Lietot bilžu izvietojumu",
				locWhy: "kāpēc šī opcija?",
				locExplain: "Jūs nedrīkstat vēlēties izmantot bildes atrašanās vietu, jo tā var būt mantota no albuma, kā rezultātā visas fotogrāfijas būs vienā un tajā pašā vietā."
			},
			viewFlickr: {
				header: "Ievadiet Flickr lietotāja vārdu un izvēlieties Photo Set vai Tag, ko importēt.",
				userInputLbl: "Ievadiet Lietotāja vārdu",
				signInMsg2: "Lietotājs nav atrasts",
				selectSet: "Izvēlieties Foto iestatījumu",
				selectTag: "vai izvēlieties Tagu",
				footerImportTag: "Importēt izvēlēto Tagu",
				footerImportSet: "Importēt izvēlēto iestatījumu"
			},
			viewFacebook: {
				header: "Autentificēties ar Facebook lietotāja kontu vai izmantot publisko lapu. Privātos albumus var izmantot, lai radītu publisko Map Tour, kas neprasīs Facebook lietotāju autentifikāciju, tas ļauj saglabāt komentārus un patīk privātajiem.",
				leftHeader: "Facebook Lietotājs",
				rightHeader: "Facebook Lapa",
				pageExplain: "Facebook lapa ir publisks zīmols/produkts vai slavenība, piem., <b>esrigis</b>. Jūs varat saņemt lapas nosaukumu, pēc pirmās '/' lapas URL.",
				pageInputLbl: "Ievadiet lapas nosaukumu",
				lookupMsgError: "Lapa nav atrasta"
			},
			viewPicasa: {
				header: "Ievadiet epastu vai ID no Picasa vai Google+ konts.",
				userInputLbl: "Ievadiet epastu vai ID",
				signInMsg2: "Konts nav atrasts",
				howToFind: "Kā atrast konta ID",
				howToFind2: "Kopēt ciparus starp pirmo un otro '/' no jebkura Picasa vai G+ lapa"
			},
			viewCSV: {
				uploadBtn: "Izvēlieties vai nometiet CSV failu",
				resultHeaderEmpty: "CSV ir tukšs",
				resultHeaderSuccess: "Sekmīgi ielādēja %NB_POINTS% punktus",
				resultHasBeenLimited: "Imports ir limitēts ar pirmo %VAL1% norāda uz %VAL2% ievērot limitu %VAL3% punktus par katru tūri",
				browserSupport: "Jūsu pārlūks neatbalsta, lai izmantotu CSV jums ir <a href='http://browsehappy.com/' target='_blank'>jāatjaunina jūsu pārlūks</a> vai lietojiet ArcGIS.com web kartes skatītāju (skat. Palīdzību).",
				errorLatLng: "Platuma un Garuma lauki nav atrasti. Iespējamās platuma vērtības ir: <i>%LAT%</i> un garuma: <i>%LONG%</i>.",
				errorFieldsExplain: "Ielādēšana neizdevās, jo šādi obligātie lauki nav atrasti",
				errorFieldsName: "<b>Nosaukums</b> iespējamās vērtības ir: %VAL%",
				errorFieldsDesc: "<b>Apraksts</b> iespējamās vērtības ir: %VAL%",
				errorFieldsUrl: "<b>Bildes URL</b> iespējamās vērtības ir: %VAL%",
				errorFieldsThumb: "<b>Sīktēla URL</b> iespējamās vērtības ir: %VAL%",
				errorFields2Explain: "Ielādēšana neizdevās, jo CSV neizmanto tos pašus atribūtus, nekā slānis priekš sekojošajiem atribūtiem",
				errorFields2Name: "<b>Nosaukums</b> lieto %VAL1% vietā %VAL2%",
				errorFields2Desc: "<b>Apraksts</b> lieto %VAL1%vietā %VAL2%",
				errorFields2Url: "<b>Bildes URL</b> lieto %VAL1% vietā %VAL2%",
				errorFields2Thumb: "<b>Sīktēla URL</b> lieto %VAL1% vietā %VAL2%",
				resultFieldsAll: "Visi atribūti ir importēti",
				resultFieldsNotAll: "Šādi atribūti nav importēti, jo tie nepastāv kartes slānī",
				resultFieldsNotAll2: "Sekojošie atribūti tiks importēti",
				footerNextBtnResult: "Imports uz web karti",
				footerProgress: "Imports progresā",
				footerSucceed: "Imports sekmīgs. Ielādē"
			},
			viewGeoTag: {
				header: "Lai atrastu, noklikšķiniet vai pieskarieties bildēm, kuras vēlaties importēt.",
				headerMore: "Kāpēc manas bildes neatrodas?",
				headerExplain: "Ja jūsu attēliem ir derīgs izvietojums, tie tiks automātiski izvietoti uz kartes un uzskaitīti otrajā cilnē.<br /><br />Pēc noklusējuma Picasa un Flickr neizmanto bilžu EXIF izvietojuma metadatus, pārbaudiet Flickr/Picasa iestatījumus zem Privacy cilnes, lai iespējotu bildes atrašanās izmantošanu. Jūs varat pilnībā ievest atpakaļ savus attēlus Flickr/Picasa.<br /><br />Priekš Facebook, jums ir jāiet uz katra attēla, jānoklikšķina uz Rediģēt un jāizvēlas izvietojums starp ieteiktajām izvēlēm, kas balstās uz bildes EXIF metadatiem.",
				leftPanelTab1: "Lai atrastu",
				leftPanelTab2: "Atrodas",
				clickOrTap: "Noklikšķiniet vai pieskarieties kartei, lai atrastu",
				clickDrop: "Neimportē",
				footerImport: "Importēt",
				footerProgress: "Imports progresā",
				footerSucceed: "Imports sekmīgs. Ielādē..."
			},
			initPopup: {
				title: "Laipni lūdzam Map Tour Veidotājā",
				prevBtn: "Atpakaļ",
				nextBtn: "Nākošais"
			},
			initPopupHome: {
				header2: "Šis asistents palīdzēs jums veidot Map Tour no attēliem, kas jau glabājas tiešsaistē vai tie tiks importēti jūsu ArcGIS Online for Organization kontā.",
				title1: "Manas bildes jau ir izvietotas",
				title2: "Man vajag hostēt manas bildes",
				hostedFsNA: "Pieejams tikai priekš ArcGIS for Organization Publisher un Administrator lietotājiem",
				footer1: "Kad tas ir izdarīts, neaizmirstiet dalīties ar jūsu Map Tour ar jūsu auditoriju, izmantojot aplikācijas vienības lapu.",
				footer2: "Konsultējieties Map Tour palīdzībā",
				footer3: "Lejupielādēt CSV šablonu",
				footerProgress: "Izveide notiek",
				footerSucceed: "Izveide sekmīga. Ielādē..."
			},
			helpPopup: {
				title: "Palīdzība",
				close: "Aizvērt",
				tab1: {
					title: "Ievads",
					div1: "Map Tour šablons ir noformēts, lai prezentētu ģeogrāfisku informāciju, ja ir pārliecinoši fotogrāfiski elementi stāstam, ko jūs vēlaties pateikt.",
					div2: "Šablons producē pievilcīgu, viegli izmantojamu web aplikāciju, kas ļauj jums prezentēt nelielu vietu komplektu kartē, kas numurētas secībā, caur kuru lietotāji var pārlūkot. Šablons ir paredzēts izmantošanai jebkurā web pārlūkā uz jebkuras ierīces, ieskaitot viedtālruņus un planšetdatorus.",
					div3: "Tas palīdzēs jums caur soli, publicējot Karte Tour, piemēram:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Palmspringsas Map Tour</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Nīderlandes valsts labākā kalnu riteņbraukšana</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Losandželosas upes Map Tour</a></li></ul>",
					div5: "Mēs labprāt vēlētos dzirdēt no jums! Nevilcinieties, lai koplietotu savu Map Tour kopā ar mums:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>StoryMaps mājas lapa</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Atrast kļūdu vai vēlaties pieprasīt jaunu elementu? Lūdzu, dariet mums zināmu, iesniedzot jautājumu par <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub projekta lapa</a>."
				},
				tab2: {
					title: "Dati",
					div1: "Galvenais elements, kas ir jāievēro, būvējot Map Tour, ir izvēlēties, kur tiks glabātas bildes. Map Tour varat izmantot bildes, kas saglabātas uz galvenajiem foto koplietošanas servisiem, jebkurā web serverī vai Feature Services.",
					div2: "Interaktīvais veidotājs dod jums divas iespējas apstrādāt attēlus jūsu Map Tour:",
					div3: "<ul><li>Jūs varat lietot <b>foto, kas jau ir tiešsaistē</b>, piem., attēlus, kas glabājas foto koplietošanas vietnēs, piemēram, Flickr vai saglabātos attēlus savā mājas lapā. Šiem attēliem būs atsauce jūsu Map Tour caur to URL</li><li>Jūs varat arī <b>augšupielādēt fotoattēlus no jūsu datora</b> taisni jūsu Map Tour. Šī augšupielādes opcija paredz, ka jums ir ArcGIS for Organizations parakstīšanās konts un jums ir Izdevēja vai Administratora privilēģijas (jo tas automātiski jums rada hosted elementu servisu, kur jūsu fotogrāfijas tiek saglabātas kā piesaistes)</li></ul>",
					div4: "Galvenie lietošanas gadījumi ir:",
					div4b: "<b>Jūsu fotogrāfijas netiek izvietotas</b> vēl, un jums ir Organizācijas konts: izmantot hosted Feature Service ir jūsu labākā izvēle. Līdzīgi publiskajiem foto koplietošanas servisiem, mēs optimizēsim jūsu bildes, lai radītu ātras ielādēšanas attēlus un jums būs piekļuve visām ArcGIS platformas administratīvajām un datu pārvaldības iespējām",
					div5: "<b>Jūs neesat Organizācijas biedrs</b>: jums vispirms vajag augšupielādēt savas bildes uz foto koplietošanu mājas lapā, vai uz jūsu web serveri. Tad vednis palīdzēs jums izmantot šīs bildes, kas turpmāk tiks uzņemtas savā oriģinālajā izvietojumā",
					div6: "<b>Jūs meklējat, lai atkārtoti lietotu esošo Feature Service</b> kas glabā jūsu bildes un piesaistes, vai kas atsaucas ārējām bildēm: konsultējieties detalizētā sekcijā apakšā",
					div7: "<b>Jūs esat iepriekšējās versijas lietotājs</b> Map Tour šablonam un jau ir jūsu CSV, kas atsaucas jūsu bildēm un sīktēliem: jums būs iespēja importēt un uzlabot savus datus. Vednis atbalsta tikai CSV, kas lieto plat/gar atribūtus, CSV balstītu adresi var turpināt lietot caur jūsu web karti (skatīt sekciju zemāk)",
					div8: "Importē no tiešsaistes foto koplietošanas servisu",
					div9: "Importa operāciju atskaite jau hostē bildes, saglabājot savu URL web kartes elementu kolekcijā. Attēli netiek saglabāti ArcGIS Online. Ja bilžu hostēšana tiek sadalīta, tās nebūs pieejamas Map Tour un tiks izmantots attēls “Picture not available”. Atkarībā no servisu sniedzēja, Map Tour tiks vai netiks importēts nosaukums, apraksts un bildes izvietojums. Šie atribūti tiek glabāti web kartē un jebkādi labojumi uz tiešsaistes servisiem, netiks atspoguļoti Map Tour.",
					div10: "Uzglabā bildes uz web servera",
					div11: "Ja vēlaties hostēt bildes pats, jums būs manuāli jāizveido sīktēli jūsu attēliem. Izmantojot pilnas rezolūcijas bildes priekš sīktēliem radīs sliktu sniegumu. Šī iemesla dēļ mēs stingri iesakām, ka jūs izmantojat tiešsaistes foto koplietošanas servisus vai Feature Service, kas to izdarīs priekš jums.",
					div12: "Lieto eksistējošu Feature Service vai Shapefile",
					div13: "Jebkurš Feature Service vai Shapefile punkts var tikt lietots kā Map Tour datu avots. Jums vienkārši ir jāpievieno to kā slāni savā web kartē, izmantojot ArcGIS.com Map Viewer. Ja aplikācija atrod gaidītos atribūtus jūsu slānī, visa veidotāja funkcionalitāte būs pieejama.",
					div14: "Paredzamie lauki (gadījuma nejutīgs):",
					div151: "Nosaukums",
					div152: "Apraksts",
					div153: "Bilde",
					div154: "Sīktēls",
					div155: "Krāsa (pēc izvēles)",
					div16: "Nosaukuma un apraksta lauki ir obligāti. Ja aplikācijā nav atrasti atbilstoši ​​lauki, kad izmanto Feature Service, skatītājs nedarbosies, kamēr jūs konfigurēsiet laukus, kas jāizmanto caur veidotāju. CSV un Shapefile slānim, kas pievienots web kartei, ir jābūt visiem pieprasītajiem laukiem, vai arī veidotājs nestrādās.",
					div17: "Attēlu un sīktēlu lauki ir obligāti priekš Feature Service bez piesaistēm un pēc izvēles, bet ļoti ieteicami Feature service ar piesaistēm. Ja jūsu servisam ir iespējotas piesaistes, veidotājs ļaus jums augšupielādēt bildes kā piesaistes. Ja nē, jums būs tikai iespēja rediģēt bilžu un sīktēlu URL.",
					div18: "Radīt hosted Feature Services no CSV vai Shapefile",
					div19: "Kad jūs izveidojat Feature Service no CSV vai Shapefile, piesaistes nav iespējotas pēc noklusējuma. Lai tās iespējotu, atveriet Feature Service vienību lapu, noklikšķiniet uz nelielas bultiņas slāņa sadaļā, un jūs redzēsiet šo opciju. Pēc tam Map Tour turpinās izmantot attēlus un sīktēlus, uz ko jūs atsaucaties caur atribūtiem. Pēc izvēles, ja jūs vēlaties augšupielādēt savas bildes kā Feature Service piesaistes, jums būs iespēja to darīt caur divām pogām uz bildes paneļa (nomainīt attēlu un mainīt sīktēlu).",
				},
				tab3: {
					title: "Pielāgošana",
					div1: "Veidotājs nodrošina vairākas pielāgošanas opcijas, kas ir pieejamas, izmantojot SETTINGS pogu, kas ir augšējā panelī. Ja jūs nevarat atrast sagaidīto opciju, mēs nodrošinām arī lejupielādējamu versija, ko varat izvietot uz jūsu web servera un uzlabot, lai atbilstu jūsu vajadzībām.",
					div2: "Mēs iesakām izmantot hosted versiju, izņemot gadījumus, ja:",
					div3: "<li>Tas nepiedāvā UI pielāgošanu, kādu vēlaties, piemēram, izmantojot galvenes fona attēlu</li><li>Jūs esat programmētājs un jūs vēlaties uzlabot aplikāciju</li>",
					div4: "Lejupielādējamā versija nepiedāvā interaktīvo veidotāju. Map Tour saņems savus datus no web kartes un tās konfigurāciju no konfigurācijas faila, kas piedāvā tās pašas iespējas kā hosted versija. Mēs iesakām izveidot un uzlabot savu web karti, izmantojot hosted versiju un tad to lietot atkārtoti ar lejupielādēšanu.",
					div5: "Apmeklējiet <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub projektu lapu</a>, lai uzzinātu vairāk par lejupielādējamo versiju."
				},
				tab4: {
					title: "Padomi",
					div1: "Bildes",
					div2: "Mēs iesakām fotogrāfijām ainavas orientāciju, nevis portreta. Portreta orientācijas attēlus var izmantot, bet uz mazākiem ekrāniem, piemēram, iPad, daudz foto var aptumšot ar uzrakstu, jo teksts aizņem vairāk vietas, kad tas tiek parādīts garā laukumā, salīdzinot ar platu laukumu. Lai gan dažāda lieluma, formas un orientācijas attēlus var izmantot vienā Map Tour, mēs iesakām izmantot tieši tādu pašu izmēru un formu visiem attēliem. Tādā veidā, lietotājs nebūs apjucis ar dažāda izmēra attēliem, kad tie seko ceļojumam.",
					div3: "Formatē jūsu uzrakstu tekstu, izmantojot HTML tagus",
					div4: "Uzraksta teksts var ietvert HTML tagus, lai noteiktu formatējumu un saites, skatieties <a href='http://blogs.esri.com/esri/arcgis/2013/03/29/add-links-map-tour/' target='_blank'>šo blogu sūtīt</a>.",
					div5: "Atbalstot slāņus",
					div6: "Jūs varat pievienot papildu atbalsta slāņus uz kartes. Šie slāņi parādīsies jūsu Map Tour, lai nodrošinātu orientāciju, fonu un citus ģeogrāfiskos elementus ko vēlaties parādīt papildus Map Tour punktiem, piemēram, studiju areālu, iešanas vai braukšanas maršrutu, kas savieno jūsu maršruta punktus, utt. Šablons parāda šos papildu atbalsta slāņus, izmantojot jūsu norādīto simboliku šajā web kartē, uznirstošie logi nav pieejami.",
					div7: "Turiet jūsu ceļojumu īsu un saldu",
					div8: "Limits ir 99 punkti priekš tūres. Vairums Map Tours, protams, būs ievērojami īsāks nekā tas. Negaidiet, ka jūsu auditorija vēlas soļot pa pārāk daudz ceļojuma punktiem. Jūs varētu atrast jūs saistošu tēmu, bet neuzņemieties, ka tie būs pārāk daudz!",
					div9: "Lai uzzinātu vairāk, konsultēties <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>detalizēts gids</a>."
				},
				tab5: {
					title: "Publicē",
					div1: "Kad tas ir izdarīts, neaizmirstiet koplietot jūsu Map Tour ar jūsu auditoriju, izmantojot aplikācijas vienības lapu ArcGIS Online. Šā procesa laikā ArcGIS Online, ja būs nepieciešams, lūgs jums atjaunināt jebkādus atkarīgos resursus (web karti, Feature Service), kam nav tādas pašas koplietošanas privilēģijas. Ja viens no jūsu resursiem, netiek dalīts ar jūsu auditoriju, lietotāji tiks novirzīts uz ArcGIS Online pieteikšanās lapu.",
					div2: "Ja jūs izmantojat hosted Feature Service, izveidoto caur Map Tour veidotāju, aplikācija pārvalda servisa drošību priekš jums un jums paliks tikai rediģēšanas privilēģijas, pat tad, ja koplietosiet servisu publiski.",
					div3: "Pirms Map Tour koplietošanas publiski, pārliecinieties, ka tā darbojas, ja jūs neesat pieteicies savā ArcGIS.com kontā."
				}
			}
        }
    })
);
