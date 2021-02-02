function version() {
    Orion.Print(-1, '+-------------');
    Orion.Print(-1, 'msviha/orionuo');
    Orion.Print(-1, 'version 0.1.7');
    Orion.Print(-1, '-------------+');
}

/**
 * Zaskrtnete si v Orion Assistantovi Autostart checkbox
 */
function Autostart() {
    version();
    Orion.ClearJournal();
    Shared.AddArray('customStatusBars', []);
    Shared.AddVar('ws', false);
    let previousLastAttackSerial: string;
    let previousLastAttackHp: number;
    let previousPlayerHp: number;

    Scripts.Dress.saveEquip();
    Orion.Exec('userAutostart');
    while (true) {
        Scripts.Utils.printDamage(Player.Serial(), previousPlayerHp);
        previousPlayerHp = Player.Hits();

        const lastAttackSerial = Orion.ClientLastAttack();
        const lastAttack = Scripts.Utils.getLivingObjectInDistance(lastAttackSerial);
        if (lastAttack) {
            if (previousLastAttackSerial !== lastAttackSerial) {
                previousLastAttackHp = lastAttack.Hits();
                Scripts.Utils.printDamage(lastAttackSerial, previousLastAttackHp, true);
            } else {
                Scripts.Utils.printDamage(lastAttackSerial, previousLastAttackHp);
                previousLastAttackHp = lastAttack.Hits();
            }
            previousLastAttackSerial = lastAttackSerial;
        }
        if (Orion.InJournal('World save has been initiated.', 'sys')) {
            Shared.AddVar('ws', true);
            Scripts.Utils.playerPrint(`World save !!!`, ColorEnum.red);
            Orion.ClearJournal('World save has been initiated.', 'sys');
            Orion.Wait(5000);
            Orion.Click(Player.Serial());

            const time = Orion.Now() + 20000;
            while (
                !(Orion.InJournal(Player.Name(), 'my', Player.Serial())?.Text().indexOf(Player.Name()) > -1) &&
                Orion.Now() < time &&
                !Player.Dead()
            ) {
                Orion.Wait(50);
            }
            Scripts.Utils.playerPrint(`World save DONE`, ColorEnum.green);
            Orion.Wait(1500);
            Shared.AddVar('ws', false);
        }

        Scripts.Statusbar.updateStatusbars();
        Orion.Wait(config?.updateRate || 500);
    }
}

/**
 * Nastavi do Orion assistanta `cutWeapon` List Object (napr. pro script na lootovani, nebo samotne rezani tel)
 * @example in client `_addCutWeapon`
 * @example external code `addCutWeapon();`
 */
function addCutWeapon() {
    Scripts.Loot.addCutWeapon();
}

/**
 * Nastavi do Orion assistanta `myMount` List Object (pro nasedani na jezditko)
 * @example in client `_addMount`
 * @example external code `addMount();`
 */
function addMount() {
    Scripts.Mount.addMount();
}

/**
 * Micha pres obyc mortar
 * @param potionName zkratka potionu
 * @example in client `_alchemy tmr`
 * @example external code `alchemy('tmr');`
 */
function alchemy(potionName: PotionsEnum) {
    Scripts.Potions.alchemy(potionName);
}

/**
 * Utoci na lastattack alias
 * @example in client `_lastattack`
 * @example external code `lastattack();`
 */
function attackLast() {
    Orion.Attack(Orion.ClientLastAttack());
}

/**
 * Da si bandu, pokud dosli tak prehraje zvuk z C:\critical.wav
 * Poslednich 10 band hlasi nad hracem
 * @param minimalCountForWarn zobrazi varovani pokud budes mit tento pocet band (a mene)
 * @param failedMessage nechcete-li videt text pri neuspecne bande tak dejte false
 * @example in client `_bandageSelf`
 * @example external code `bandageSelf();`
 * @example external code `bandageSelf(10);`
 */
function bandageSelf(minimalCountForWarn = 10, failedMessage = true) {
    Scripts.Common.bandageSelf(minimalCountForWarn, undefined, failedMessage);
}

/**
 * Hodi do ruky cutWeapon a pripadne rovnou rizne nejblizsi mrtvolku pokud je povolen parametr
 * @param carveNearestBodyAutomatically {boolean} default je false, pokud se da true tak rizne samo nejblizsi pokud je v dosahu
 * @example in client `_carveBody`
 * @example external code `carveBody();`
 * @example external code `carveBody(true);` rizne samo nejblizsi mrtvolku
 */
function carveBody(carveNearestBodyAutomatically = false) {
    Scripts.Loot.carveBody(carveNearestBodyAutomatically);
}

/**
 * Kouzli na pozadovany target, pokud je uveden
 * @example external code `cast("Harm", "lastattack");`
 * @example external code `cast("Magic Reflection", "self");`
 */
function cast(spell: string, target?: TargetEnum) {
    Scripts.Spells.cast(spell, target);
}

/**
 * Kouzli svitek z NecroScrollEnum na pozadovany target, pokud je uveden
 * @example external code `castNecroScroll("kalnox", "self");`
 * @example external code `castNecroScroll("vfp", "lastattack");`
 */
function castNecroScroll(scroll: NecroScrollEnum, target?: TargetEnum) {
    Scripts.Spells.castNecroScroll(scroll, target);
}

/**
 * Kouzli svitek na pozadovany target, pokud je uveden, pokud neni timer na svitek zakouzli z hlavy backupHeadCast
 * @example external code `castScroll("ijs", "self", "Magic Reflection");`
 * @example external code `castScroll("pog", "lastattack");`
 */
function castScroll(scroll: ScrollEnum, target?: TargetEnum, backupHeadCast?: string) {
    Scripts.Spells.castScroll(scroll, target, backupHeadCast);
}

/**
 * Pouzije cestovni knihu s pozadovanou volbou
 * @param selection {PortBookOptionsEnum} volba z knizky
 * @example in client `_cestovniKniha` kopne na vlastni misto
 * @example in client `_cestovniKniha mark` markne vlastni misto
 * @example external code `cestovniKniha()` kopne na vlastni misto
 * @example external code `cestovniKniha(PortBookOptionsEnum.mark);` markne vlastni misto
 */
function cestovniKniha(selection = PortBookOptionsEnum.kop) {
    Scripts.Port.cestovniKniha(selection);
}

/**
 * Uklizi bagl !! Pozor pokud davate souradnice, nad/pod bagl tak je treba mit v Clientovi nastavene "Dont fix item positions in container" !!
 * @param object objekt ktery chcete uklidit nebo cestu k itemu skrze [gameObject](./globals.md#gameObject)
 * @param objectName nazev pro vypisovani behem uklidu
 * @example external code `Scripts.Clean.cleanObjectInBag(gameObject.potions, 'potions');`
 * @example external code `Scripts.Clean.cleanObjectInBag(gameObject.regy, 'regy');`
 * @example external code - pokud si to budete definovat sami `Scripts.Clean.cleanObjectInBag({graphic: '0x0E9C', color: '0x0000', bag: {x: 20, y: 50}}, 'buben');`
 * takto je mozne si na jeden hotkey dat tuto funkci vicekrat pod sebe, aby to na zmacknuti uklidilo vice veci
 */
function cleanObjectInBag(object: any, objectName?: string) {
    Scripts.Clean.cleanObjectInBag(object, objectName);
}

/**
 * Zobrazi/prepina nabidku na crafteni
 * @example external code `craftNext();`
 */
function craftNext() {
    Scripts.Crafting.listMakeMenu();
}

/**
 * Vybira z nabidky na crafteni
 * @example external code `craftSelect();`
 */
function craftSelect() {
    Scripts.Crafting.confirmMakeMenu();
}

/**
 * Chlasta lahvicky
 * @param potionName zkratka potionu
 * @param switchWarModeWhenNeeded date li 'false' pak neprepina war pokud nejde cepovat, tak necepne
 * @example in client `_drink tmr`
 * @example external code `drink('tmr');`
 */
function drink(potionName: PotionsEnum, switchWarModeWhenNeeded = true, displayTimers = true) {
    Scripts.Potions.drinkPotion(potionName, switchWarModeWhenNeeded, displayTimers);
}

/**
 * Pouzije buben na protekci
 * @param target na koho chces zahrat ? pokud nevyplnis tak hodi kurzor
 * @example in client `_drum`
 * @example in client `_drum self`
 * @example external code `drum()`
 * @example external code `drum('self');`
 */
function drum(target?: TargetEnum) {
    Scripts.Music.drum(target);
}

/**
 * Prida enemy do enemylistu (dobre pouziti s targetNext)
 * @example in client `_enemy`
 * @example external code `enemy()`
 */
function enemy() {
    Scripts.Targeting.addEnemy();
}

/**
 * Oblikne si equip ktery je ulozeny v pameti (automaticky se vam uklada po loginu, nebo pouzitim funkce saveEquip())
 * @example in client `_equip`
 * @example external code `equip()`
 */
function equip() {
    Scripts.Dress.equip();
}

/**
 * Docepne lahvicku z kade
 * @param potionName zkratka potionu
 * @param switchWarModeWhenNeeded date li 'false' pak neprepina war pokud nejde cepovat, tak necepne
 * @example in client `_fillPotion tmr`
 * @example external code `fillPotion('tmr');`
 */
function fillPotion(potionName: PotionsEnum, switchWarModeWhenNeeded = true) {
    Scripts.Potions.fillPotion(potionName, switchWarModeWhenNeeded);
}

/**
 * Hazi prutem okolo sebe a chyta ryby.. nebere je, nereze je..
 * @param walkingCoordinates muzete si nastavit mezi kteryma mistama ma chodit
 * @example in client `_fishTrain`
 * @example external code `fishTrain([{x: 10, y: 800}, {x: 20, y: 810}]);`
 */
function fishTrain(walkingCoordinates?: ICoordinates[]) {
    Scripts.Fishing.fishTrain(walkingCoordinates);
}

/**
 * Prida frienda do friendlistu (dobre pouziti s targetNext)
 * @example in client `_friend`
 * @example external code `friend()`
 */
function friend() {
    Scripts.Targeting.addFriend();
}

/**
 * Micha na gm mortaru
 * @param potionName zkratka potionu
 * @example in client `_gmMortar tmr`
 * @example external code `gmMortar('tmr');`
 */
function gmMortar(potionName: PotionsEnum) {
    Scripts.Potions.gmMortar(potionName);
}

/**
 * Pouzije harfu
 * @param target na koho chces zahrat ? pokud nevyplnis tak hodi kurzor
 * @example in client `_harp`
 * @example in client `_harp self`
 * @example external code `harp()`
 * @example external code `harp('self');`
 */
function harp(target?: TargetEnum) {
    Scripts.Music.harp(target);
}

/**
 * Zacne lecit pety (vlastni!) okolo sebe. Pri opakovanem volani prestane lecit, stejne jako pokud se od petu vzdalite
 * @example in client `_healPets`
 * @example external code `healPets()`
 */
function healPets() {
    Scripts.PetCommander.healPetsToggle();
}

/**
 * Prepina mezi dvema stavy - hiduje hrace v okruhu 15ti policek a dalsi volani dava resync/resend. Nevidim na cudlik protoze mi tam nekdo stoji atd.
 * @example in client `_hideAll`
 * @example external code `hideAll();`
 */
function hideAll() {
    Scripts.Common.hideAll();
}

/**
 * Hidne hrace
 * @example [_hiding](../examples/hiding.gif)
 * @example external code `hiding();`
 */
function hiding() {
    Scripts.Common.hiding();
}

/**
 * pise svitky
 * @param circle {number} cislo kruhu kouzel ve kterem se kouzlo nachazi
 * @param spell {string} nazev kouzla (z nabidky ktera vyskoci kdyz vyberete kruh kouzel)
 * @param quantity {number} pocet svitku k napsani (0 je default a znamena, ze pise dokud nedojde spotrebak)
 * @example external code `inscription(2, 'Resurrection', 20);`
 */
function inscription(circle: number, spell: string, quantity = 0) {
    Scripts.Spells.inscription(circle, spell, quantity);
}

/**
 * Prejmenuje vsechny summony a posle na lastattack
 * @example `_kill`
 * @example external code `kill();`
 */
function kill() {
    Scripts.PetCommander.kill();
}

/**
 * Prejmenuje vsechny summony a posle na lastattack
 * @example `_killAll`
 * @example external code `killAll();`
 */
function killAll() {
    Scripts.PetCommander.killAll();
}

/**
 * Prejmenuje summa a zarve s nim kill a necha vyhozenej target. Dobre na posilani summu na ruzne targety (toci je to)
 * @example `_killTarget`
 * @example external code `killTarget();`
 */
function killTarget() {
    Scripts.PetCommander.killTarget();
}

/**
 * Hodi na zem a veme + odpali lavabombu - vyhodi target na koho ji chces pouzit
 * pokud nemas cepnutou tak cepne a odpali lavabombu - vyhodi target na koho ji chces pouzit
 * @example in client `_lavaBomb`
 * @example external code `lavaBomb()`
 */
function lavaBomb() {
    Scripts.Common.lavaBomb();
}

/**
 * Hodi svetlo z kade, pokud kad neni, tak hodi z hlavy (pokud za to nenapisete false)
 * @param shouldCast {boolean} default je true, takze pokud nemas kad tak zakouzli svetlo
 * @example `_light`
 * @example `_light false`
 * @example external code `light();`
 */
function light(shouldCast = true) {
    shouldCast = parseParam(shouldCast);
    Scripts.Common.svetlo(shouldCast);
}

/**
 * Trenuje lockpicking pomoci bedynky a klice (rozbaleny lockpicking training kit)
 * @example in client `_unlock`
 * @example external code `unlock();`
 */
function lockpicking() {
    Scripts.Lockpicking.lockpicking();
}

/**
 * Lotuje vse (vcetne hracu) v dosahu.
 * Vyzaduje nastaveni Objects a Find v Orion assistantovi v zalozce Lists
 * 1. nastavit `cutWeapon` na zbran kterou chcete rezat v Objects pripadne zavolat `_addCutWeapon` ve hre
 * 2. nastavit `lootItems` na veci ktere chcete z mrtvolky vybrat v Find
 * @param cut {boolean} default je true, takze reze tela (krome lidskych - nevyzkouseno)
 * @example in client `_loot`
 * @example in client `_loot false` - nereze tela
 * @example external code `loot();`
 * @example external code `loot(false);`
 */
function loot(cut = true) {
    cut = parseParam(cut);
    Scripts.Loot.lootCorpsesAround(cut);
}

/**
 * Zameri target a premisti z nej vse do backpacku
 * @param delay cas mezi presunem dvou itemu
 * @example `_lootAll`
 * @example `_lootAll 2000`
 * @example external code `lootAll();`
 * @example external code `lootAll(2000);`
 */
function lootAll(delay = responseDelay) {
    Scripts.Loot.lootAllFrom(delay);
}

/**
 * Pouzije loutnu
 * @param target na koho chces zahrat ? pokud nevyplnis tak hodi kurzor
 * @example in client `_lute`
 * @example in client `_lute self`
 * @example external code `lute()`
 * @example external code `lute('self');`
 */
function lute(target?: TargetEnum) {
    Scripts.Music.lute(target);
}

/**
 * Vyrabi s craftem
 * @param objectAsString zde je potreba nadefinovat cestu k itemu skrze [gameObject](./globals.md#gameObject)
 * @example external code `make(100, 'gameObject.crafting.carpentry.miscellaneous.krabiceKadi');`
 * @example external code `make(70, 'gameObject.crafting.tinkering.wires.shadow');`
 */
function make(count: number, objectAsString: string, setInputs = true) {
    Scripts.Crafting.make(count, objectAsString, setInputs);
}

/**
 * Zobrazi zamerovac pro zamereni cile, ktery se ulozi pod lastattack
 * Cil je tim padem zbarven a jsou vypsany jeho zivoty
 * @param opts {ITargetNextOpts} optiony pro targetovani
 * @example in client `_manualTarget`
 * @example external code `manualTarget()`
 * @example external code `manualTarget({targetIndication: TargetIndicationEnum.large, showStatusBar: true, statusBarPosition: {x: 70, y: 20});`
 */
function manualTarget(opts: ITargetNextOpts = TARGET_OPTS_DEFAULTS) {
    opts = { ...TARGET_OPTS_DEFAULTS, ...opts };
    Scripts.Targeting.manualTarget(opts);
}

/**
 * Mass move checkuje jen graphic a presouva i itemy s rozdilnou barvou, pokud se item stackuje tak se zepta po kolika kusech to budes prehazovat
 * @param requiredCountInTarget {number} kolik toho ma byt celkem v cilovem kontejneru
 * @example in client `_mm` vyhodi zamerovac co chces presunout a kam
 * @example in client `_mm 20` takto by melo byt v cilovem kontejneru nakonec 20 kousku
 */
function mm(requiredCountInTarget?: number) {
    if (requiredCountInTarget) {
        const parsedParam = parseParam(requiredCountInTarget);
        requiredCountInTarget = typeof parsedParam === 'number' ? parsedParam : 0;
    }
    Scripts.Common.massMove(requiredCountInTarget, true);
}

/**
 * Mass move checkuje graphic i color, pokud se item stackuje tak se zepta po kolika kusech to budes prehazovat
 * @param requiredCountInTarget {number} kolik toho ma byt celkem v cilovem kontejneru
 * @example in client `_mm` vyhodi zamerovac co chces presunout a kam
 * @example in client `_mm 20` takto by melo byt v cilovem kontejneru nakonec 20 kousku
 */
function mmc(requiredCountInTarget?: number) {
    if (requiredCountInTarget) {
        const parsedParam = parseParam(requiredCountInTarget);
        requiredCountInTarget = typeof parsedParam === 'number' ? parsedParam : 0;
    }
    Scripts.Common.massMove(requiredCountInTarget, false);
}

/**
 * Naseda a seseda z jezditka. Pokud Vam jezditko umre, nebo mate nasetovane nejake ktere neni v dosahu, zobrazi se zamereni jezditka
 * @example in client `_mount`
 * @example external code `mount();`
 */
function mount() {
    Scripts.Mount.mountAndDismount();
}

/**
 * Kopne pres NB runu
 * @example in client `_nbRune`
 * @example external code `nbRune()`
 */
function nbRune() {
    Scripts.Port.nbRune();
}

/**
 * Pouzije necro mystic (sleze z jezditka a vrati se zpet + vrati predchozi helmu zpet)
 * @param message Hlaska kterou rekne hrac pri pouziti mystiku do hry
 * @example external code `necroMystik('Necro mystic - HEAL!')`
 */
function necroMystic(message: string) {
    Scripts.Common.necroMystic(message);
}

/**
 * Prepne na dalsi zbran
 * (zbrane si nasetujte pomoci resetWeapons)
 * @param showName - zobrazuje nad hracem nazev zbrane po prepnuti
 * @example in client `_nextWeapon`
 * @example external code `nextWeapon()`
 */
function nextWeapon(showName = false) {
    Scripts.Dress.nextWeapon(showName);
}

/**
 * Ocaruje pytel v mrtvolce mytheril dustem
 * Zepta se na target, zamerite mrtvolku a pokud jste daleko tak vam vypise 5ti vterinovy timer kdy musite k mrtvole dojit aby ji ocaroval
 * @param dusty {OcarovaniEnum} cim budes carovat
 * @example in client `_ocaruj`
 * @example external code `ocaruj()`
 */
function ocaruj(dusty: OcarovaniEnum = OcarovaniEnum.mytheril) {
    Scripts.MagicMiner.ocaruj(dusty);
}

/**
 * Otevira containery (hlavne pomaha s bezpecnyma truhlama a pretahavanim klicku)
 * exaxmple in client `_openContainer`
 * example external code `openContainer()`
 */
function openContainer() {
    Scripts.Common.openContainer();
}

/**
 * Poisne trenink kitem nejblizsim enemy monstrum jakmile k nejakemu dobehnes (netreni na tech co maji human grafiku);
 * @param keepRunning pokud date true, tak vam to po jednom spusteni pobezi stale na pozadi a bude poisnovat kdyz okolo neceho probehnete
 * @example external code `poisonTrain()` ceka az se priblizis k monstru a pak jednorazove poisne a skonci
 * @example external code `poisonTrain(true)` nekonecny cyklus kdy staci jen behat okolo monster a poisnis to
 */
function poisonTrain(keepRunning = false) {
    keepRunning ? Scripts.Common.poisonTrainAuto() : Scripts.Common.poisonTrain();
}

/**
 * Poisne trenink kitem `lastattack` target;
 * @example external code `poisonLastAttack()`
 */
function poisonLastAttack() {
    Scripts.Common.poisonLastAttack();
}

/**
 * Prepne na predchozi zbran
 * (zbrane si nasetujte pomoci resetWeapons)
 * @param showName - zobrazuje nad hracem nazev zbrane po prepnuti
 * @example in client `_previousWeapon`
 * @example external code `previousWeapon()`
 */
function previousWeapon(showName = false) {
    Scripts.Dress.nextWeapon(showName, true);
}

/**
 * Resetuje cely enemylistu a ocekava naklikani noveho
 * @example in client `_resetEnemies`
 * @example external code `resetEnemies()`
 */
function resetEnemies() {
    Scripts.Targeting.resetEnemies();
}

/**
 * Resetuje cely friendlist a ocekava naklikani noveho
 * @example in client `_resetFriends`
 * @example external code `resetFriends()`
 */
function resetFriends() {
    Scripts.Targeting.resetFriends();
}

/**
 * Resetuje staty pomoci Travel Book
 * @example in client `_resetStats`
 * @example external code `resetStats()`
 */
function resetStats() {
    Scripts.Dress.resetStats();
}

/**
 * Medic - Pouziti KPZ - pritahne cil k sobe
 * @example in client `_kpzpull`
 * @example external code `KPZPull()`
 */
function KPZPull() {
    Scripts.Medic.KPZPull();
}

/**
 * Medic - Pouziti KPZ - pritahne sebe na cil
 * @example in client `_kpzjump`
 * @example external code `KPZJump()`
 */
function KPZJump() {
    Scripts.Medic.KPZJump();
}

/**
 * Medic - Pouziti KPZ - prohozeni hp s cilem
 * @example in client `_kphpswitch`
 * @example external code `KPZHpSwitch()`
 */
function KPZHpSwitch() {
    Scripts.Medic.KPZHpSwitch();
}

/**
 * Resetuje zbrane a stit ( nasledne vyuziti u funkci nextWeapon a previousWeapon )
 * @example in client `_resetWeapons`
 * @example external code `resetWeapons()`
 */
function resetWeapons() {
    Scripts.Dress.resetWeaponsArray();
}

/**
 * Rozbiji ingy na dusty
 * @param ingy {OcarovaniEnum} co budes rozbijet
 * @param kolik {number} kolik toho rozbijes
 * @example external code `rozbij(OcarovaniEnum.blood, 1)`
 */
function rozbij(ingy: OcarovaniEnum = OcarovaniEnum.mytheril, kolik = 5) {
    Scripts.MagicMiner.rozbij(ingy, kolik);
}

/**
 * Ulozi si do pameti equip co mate zrovna na sobe - vhodne v kombinaci s funkci equip() (napriklad po dmg od chameleon birda)
 * @example in client `_saveEquip`
 * @example external code `saveEquip()`
 */
function saveEquip() {
    Scripts.Dress.saveEquip();
}

/**
 * Vytvori zalozku s hpckama
 * @example in client `_statusBar`
 * @example external code `statusBar()`
 */
function statusBar() {
    Scripts.Statusbar.create();
}

/**
 * Kouzli summona (jmeno je treba zadat tak jak je v nabidce summonu) na pozadovany target, pokud je uveden
 * @example external code `summon("Horse", "self");`
 * @example external code `summon("Giant Viper");`
 */
function summon(creature: string, target?: TargetEnum) {
    Scripts.Spells.summon(creature, target);
}

/**
 * Zacilis co chces tamnout a po tamnuti hodi do baglu
 * @example in client `_taming`
 * @example external code `taming()`
 * @example external code `taming(true, {walkTo: false, hidding: true})`
 * @param allAround {boolean} tamuje vse co vidi okolo sebe
 * @param opts {ITamingOptions} optiony pro tamovani
 */
function taming(allAround = false, opts: ITamingOptions = TAMING_OPTS_DEFAULTS) {
    opts = { ...TAMING_OPTS_DEFAULTS, ...opts };
    allAround ? Scripts.Taming.tameAnimalsAround(opts) : Scripts.Taming.taming(opts);
}

/**
 * Treni taming na celem stadu v tvem okoli, co netamne, zabije
 * @example in client `_tamingTrain`
 * @example external code `tamingTrain()`
 * @example external code `tamingTrain(false)` - pokud trenujes s postavou co nemuze/nema druidku
 */
function tamingTrain(robeOfDruids = true) {
    Scripts.Taming.trainOnAnimalsAround(robeOfDruids);
}

/**
 * Targeti zive jednotky okolo tebe. Uchovava list targetu po dobu 2,5 vteriny pro pouziti s `targetPrevious`.
 * Vybrany target ma rovnou status `attackLast` (ale neutocis to na nej, jen mas zaply war) takze je mozne na nej kouzlit
 * @param timeToStorePreviousTargets cas pro uchovavani predchozich targetu v pameti
 * @param additionalFlags pole flagu pro vyhledavani targetu ktere se spoji s defaultnim polem `['near', 'mobile', 'live', 'ignoreself']`
 * @param notoriety pole notoriety pro specifikaci targetu
 * @example external code `targetNext();`
 * @example external code `targetNext(1000, [FlagsEnum.ignorefriends]);`
 * @example external code `targetNext(1000, undefined, [NotorietyEnum.orange, NotorietyEnum.red, NotorietyEnum.criminal]);`
 * @example external code `targetNext(1000, [FlagsEnum.ignorefriends], undefined,
 {targetIndication: TargetIndicationEnum.large, showStatusBar: true, statusBarPosition: {x: 70, y: 20});`
 */
function targetNext(
    timeToStorePreviousTargets = 1500,
    additionalFlags?: FlagsEnum[],
    notoriety?: NotorietyEnum[],
    opts: ITargetNextOpts = TARGET_OPTS_DEFAULTS,
) {
    opts = { ...TARGET_OPTS_DEFAULTS, ...opts };
    Scripts.Targeting.targetNext(false, timeToStorePreviousTargets, additionalFlags, notoriety, opts);
}

/**
 * Targeti zive jednotky okolo tebe. Uchovava list targetu po dobu 2,5 vteriny pro pouziti s `targetNext`
 * Vybrany target ma rovnou status `attackLast` (ale neutocis to na nej, jen mas zaply war) takze je mozne na nej kouzlit
 * @param timeToStorePreviousTargets {number} cas pro uchovavani predchozich targetu v pameti
 * @param additionalFlags {FlagsEnum[]} pole flagu pro vyhledavani targetu ktere se spoji s defaultnim polem `['near', 'mobile', 'live', 'ignoreself']`
 * @param notoriety {NotorietyEnum[]} pole notoriety pro specifikaci targetu
 * @example external code `targetPrevious();`
 * @example external code `targetPrevious(1000, [FlagsEnum.ignorefriends]);`
 * @example external code `targetPrevious(1000, undefined, [NotorietyEnum.orange, NotorietyEnum.red, NotorietyEnum.criminal]);`
 * @example external code `targetPrevious(1000, [FlagsEnum.ignorefriends], undefined,
 {targetIndication: TargetIndicationEnum.large, showStatusBar: true, statusBarPosition: {x: 70, y: 20});`
 */
function targetPrevious(
    timeToStorePreviousTargets = 1500,
    additionalFlags?: string[],
    notoriety?: string[],
    opts: ITargetNextOpts = TARGET_OPTS_DEFAULTS,
) {
    opts = { ...TARGET_OPTS_DEFAULTS, ...opts };
    Scripts.Targeting.targetNext(true, timeToStorePreviousTargets, additionalFlags, notoriety, opts);
}

/**
 * Killne vsechny bezici scripty (s vyjimkou Autostart a userAutostart funkce)
 */
function terminateAll() {
    Orion.Terminate('all', 'Autostart|userAutostart');
}

/**
 * Trackuje hrace nebo pozadovanou volbu z menu
 * @param who - volba z menu
 * @example in client `_tracking` trackuje hrace
 * @example in client `_tracking Animals` trackuje zvirata
 * @example external code `tracking()` trackuje hrace
 * @example external code `tracking('Animals');` trackuje zvirata
 */
function tracking(who = 'Players') {
    Scripts.Wip.Tracking(who);
}

/**
 * Pouzije travel book s pozadovanou volbou
 * @param selection {PortBookOptionsEnum} volba z knizky
 * @example in client `_travelBook` kopne na vlastni misto
 * @example in client `_travelBook mark` markne vlastni misto
 * @example external code `travelBook()` kopne na vlastni misto
 * @example external code `travelBook(PortBookOptionsEnum.mark);` markne vlastni misto
 */
function travelBook(selection = PortBookOptionsEnum.kop) {
    Scripts.Port.travelBook(selection);
}

/**
 * Ozivi ducha v okruhu 1 policka
 * @param bandageAfterRess {boolean} ci ma hned po resse hodit bandu na target
 * @example external code `turboRess()`
 */
function turboRess(bandageAfterRess = false) {
    Scripts.Common.turboRess(bandageAfterRess);
}

/**
 * Ozivi ducha v okruhu 1 policka do plnych hp (krvavou bandou - Medic)
 * @example external code `turboRessFull()`
 */
function turboRessFull() {
    Scripts.Common.turboRessFull();
}

/**
 * Lockpickuje zamcenou bednu, dokud ji neotevre (nebo nedojdou locky)
 * @example in client `_unlock`
 * @example external code `unlock();`
 */
function unlock() {
    Scripts.Lockpicking.unlock();
}

/**
 * Pouzije objekt ktery ma nadefinovany graphic a color a upozorni v pripade nizkeho poctu
 * @param object {IMyGameObject|IMyGameObject[]} musi mit graphic a color
 * @param name {string} pouziva se pro vypisovani poctu abys vedel co ti dochazi
 * @param minimalCountForWarn zobrazi varovani pokud budes mit tento pocet band (a mene)
 * @example external code `use(gameObject.ryba.modra, 'modra ryba', 3)`
 * @example external code `use([gameObject.uncategorized.krvavaBanda1, gameObject.uncategorized.krvavaBanda2], 'krvave bandy', 200)`
 */
function use(object: IMyGameObject | IMyGameObject[], name = '', minimalCountForWarn?: number) {
    Scripts.Utils.use(object, name, minimalCountForWarn);
}

/**
 * Pouzije Great Gold Ring
 * @example in client `_useGGR`
 * @example external code `useGGR()`
 */
function useGGR() {
    Scripts.Jewelry.useGGR();
}

/**
 * Vyhodi klamaka
 * @param lvl {number} pozadovany level klamaka
 * @param useAim {boolean} pokud chcete zamerovat misto kam ho vyhodit
 * @param priorityList {string[]} pokud chcete prioritizovat ktere klamaky to ma nejdrive v baglu hledat
 * @param ignoreSerials {string[]} serialy ktere pri vyhazovani klamaku script ignoruje (kocici NB itemy)
 * @example external code `useKlamak(1)` vyhodi klamaka level 1
 * @example external code `useKlamak(1, true)` zobrazi zamerovatko a pak vyhodi klamaka level 1 na target
 * @example external code `useKlamak(3, false, ['Bull', 'Cow'])`vyhodi pod vas Bulla, pokud ho nemate, tak Kravu a pokud ani tu nemate tak zkusi vyhodit jiny lvl 3 klamak
 */
function useKlamak(lvl: number, useAim = false, priorityList?: string[], ignoreSerials?: string[]) {
    Scripts.Klamak.useKlamak(lvl, useAim, priorityList, ignoreSerials);
}

/**
 * Pouzije Reflex Ring nebo Great Reflex Ring
 * @example in client `_useRR`
 * @example external code `useRR()`
 */
function useRR() {
    Scripts.Jewelry.useRR();
}

/**
 * Pouzije shrink kad
 * @example in client `_useShrinkKad`
 * @example external code `useShrinkKad()`
 */
function useShrinkKad() {
    Scripts.Taming.useShrinkKad();
}

/**
 * Znici vsechny pavucinky okolo hrace
 * @example external code `webDestroyer()`
 */
function webDestroyer() {
    Scripts.Common.webDestroyer();
}
