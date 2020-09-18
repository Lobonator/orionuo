var responseDelay = 350;
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["West"] = 6] = "West";
    DirectionEnum[DirectionEnum["North"] = 0] = "North";
    DirectionEnum[DirectionEnum["East"] = 2] = "East";
    DirectionEnum[DirectionEnum["South"] = 4] = "South";
})(DirectionEnum || (DirectionEnum = {}));
var ColorEnum;
(function (ColorEnum) {
    ColorEnum["none"] = "0xffff";
    ColorEnum["red"] = "0x0021";
    ColorEnum["green"] = "0x0044";
    ColorEnum["orange"] = "0x002c";
})(ColorEnum || (ColorEnum = {}));
var TargetEnum;
(function (TargetEnum) {
    TargetEnum["self"] = "self";
    TargetEnum["lastattack"] = "lastattack";
})(TargetEnum || (TargetEnum = {}));
var ScrollEnum;
(function (ScrollEnum) {
    ScrollEnum["kvf"] = "kvf";
    ScrollEnum["bolt"] = "bolt";
    ScrollEnum["pog"] = "pog";
    ScrollEnum["ijs"] = "ijs";
    ScrollEnum["port"] = "port";
    ScrollEnum["ef"] = "ef";
    ScrollEnum["para"] = "para";
    ScrollEnum["wos"] = "wos";
    ScrollEnum["ivm"] = "ivm";
})(ScrollEnum || (ScrollEnum = {}));
var NecroScrollEnum;
(function (NecroScrollEnum) {
    NecroScrollEnum["vfp"] = "vfp";
    NecroScrollEnum["kalnox"] = "kalnox";
    NecroScrollEnum["haluze"] = "haluze";
})(NecroScrollEnum || (NecroScrollEnum = {}));
var TimersEnum;
(function (TimersEnum) {
    TimersEnum["drink"] = "drink";
})(TimersEnum || (TimersEnum = {}));
function isMyGameObject(val) {
    return val && val.graphic;
}
var o = {
    uncategorized: {
        emptyBottles: {
            graphic: '0x0F0E',
            color: '0x0000'
        },
        bandy: {
            graphic: '0x0E21',
            color: '0x0000',
            bag: {
                x: 123,
                y: 20
            }
        },
        salat: {
            graphic: '0x09EC',
            color: '0x06AB'
        },
        nbRuna: {
            graphic: '0x1F14',
            color: '0x0B1D'
        },
        anyKey: {
            graphic: '0x1012',
            bag: {
                x: 160,
                y: 5
            }
        },
        ngDagger: {
            graphic: '0x0F51',
            color: '0x0B80',
            bag: {
                x: 150,
                y: 30
            }
        },
        mortar: {
            graphic: '0x0E9B',
            color: '0x0000',
            bag: {
                x: 116,
                y: 24
            }
        }
    },
    potions: {
        tmr: {
            graphic: '0x0F09',
            color: '0x0003',
            bag: {
                x: 25,
                y: 5
            },
            kad: {
                graphic: '0x1843',
                color: '0x0003'
            }
        },
        gh: {
            graphic: '0x0F0C',
            color: '0x0000',
            bag: {
                x: 25,
                y: 15
            },
            kad: {
                graphic: '0x1843',
                color: '0x08A7'
            }
        },
        gs: {
            graphic: '0x0F09',
            color: '0x0000',
            bag: {
                x: 25,
                y: 25
            },
            kad: {
                graphic: '0x1843',
                color: '0x0481'
            }
        },
        tr: {
            graphic: '0x0F0B',
            color: '0x0000',
            bag: {
                x: 80,
                y: 5
            },
            kad: {
                graphic: '0x1843',
                color: '0x014D'
            }
        },
        gc: {
            graphic: '0x0F07',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15
            },
            kad: {
                graphic: '0x1843',
                color: '0x0842'
            }
        },
        lc: {
            graphic: '0x0F07',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15
            },
            kad: {
                graphic: '0x1843',
                color: '0x0091'
            }
        },
        ns: {
            graphic: '0x0F06',
            color: '0x0000',
            kad: {
                graphic: '0x1843',
                color: '0x03C4'
            }
        },
        shrink: {
            graphic: '0x0F09',
            color: '0x045E',
            bag: {
                x: 80,
                y: 25
            },
            kad: {
                graphic: '0x1843',
                color: '0x0724'
            }
        },
        lavabomb: {
            graphic: '0x0F0D',
            color: '0x000E',
            kad: {
                graphic: '0x1843',
                color: '0x000E'
            }
        }
    },
    books: {
        unholySpellbook: {
            graphic: '0x0EFA',
            color: '0x0413',
            bag: {
                x: 142,
                y: 5
            }
        },
        highMagicSpellBook: {
            graphic: '0x0EFA',
            color: '0x0021',
            bag: {
                x: 142,
                y: 5
            }
        },
        bookOfDead: {
            graphic: '0x0EFA',
            color: '0x0455',
            bag: {
                x: 132,
                y: 5
            }
        },
        travelBook: {
            graphic: '0x0FEF',
            color: '0x0482',
            bag: {
                x: 122,
                y: 5
            }
        },
        runeBook: {
            graphic: '0x0FF0',
            color: '0x08A5',
            bag: {
                x: 112,
                y: 5
            }
        }
    },
    taming: {
        staffs: {
            training: {
                graphic: '0x13F4',
                color: '0x04B9'
            },
            taming: {
                graphic: '0x13F4',
                color: '0x04B9'
            },
            tamingShrink: {
                graphic: '0x13F4',
                color: '0x096D'
            }
        }
    },
    rings: {
        rr: {
            graphic: '0x108A',
            color: '0x0496',
            bag: {
                x: 50,
                y: 35
            }
        },
        grr: {
            graphic: '0x108A',
            color: '0x0B21',
            bag: {
                x: 53,
                y: 35
            }
        },
        grr2: {
            graphic: '0x108A',
            color: '0x0B98',
            bag: {
                x: 56,
                y: 35
            }
        },
        ggr: {
            graphic: '0x108A',
            color: '0x0000',
            bag: {
                x: 59,
                y: 35
            }
        }
    },
    scrolls: {
        blank: {
            graphic: '0x0E34',
            color: '0x0000'
        },
        standard: {
            kvf: {
                graphic: '0x1F5F',
                color: '0x0000',
                timer: 5000,
                minMana: 20
            },
            bolt: {
                graphic: '0x1F56',
                color: '0x0000'
            },
            pog: {
                graphic: '0x1F4A',
                color: '0x0000',
                timer: 5000,
                minMana: 5
            },
            ijs: {
                graphic: '0x1F50',
                color: '0x0000',
                timer: 9600,
                minMana: 7
            },
            port: {
                graphic: '0x1F42',
                color: '0x0000'
            },
            ef: {
                graphic: '0x1F5E',
                color: '0x0000'
            },
            para: {
                graphic: '0x1F52',
                color: '0x0000'
            },
            wos: {
                graphic: '0x1F44',
                color: '0x0000'
            },
            ivm: {
                graphic: '0x1F49',
                color: '0x0000'
            }
        },
        necro: {
            vfp: {
                graphic: '0x0E35',
                color: '0x0070',
                minMana: 20
            },
            haluze: {
                graphic: '0x0E35',
                color: '0x0010'
            },
            kalnox: {
                graphic: '0x0E35',
                color: '0x0005'
            }
        }
    },
    regy: {
        mr: {
            graphic: '0x0F86',
            bag: {
                x: 20,
                y: 180
            }
        },
        ss: {
            graphic: '0x0F8D',
            bag: {
                x: 35,
                y: 180
            }
        },
        bm: {
            graphic: '0x0F7B',
            bag: {
                x: 50,
                y: 180
            }
        },
        bp: {
            graphic: '0x0F7A',
            bag: {
                x: 61,
                y: 180
            }
        },
        ga: {
            graphic: '0x0F84',
            bag: {
                x: 80,
                y: 180
            }
        },
        gi: {
            graphic: '0x0F85',
            bag: {
                x: 92,
                y: 180
            }
        },
        ns: {
            graphic: '0x0F88',
            bag: {
                x: 110,
                y: 180
            }
        },
        sa: {
            graphic: '0x0F8C',
            bag: {
                x: 125,
                y: 180
            }
        }
    },
    necroRegy: {
        executioners_cap: {
            graphic: '0x0F83',
            bag: {
                x: 155,
                y: 180
            }
        },
        blackmoor: {
            graphic: '0x0F79',
            bag: {
                x: 155,
                y: 180
            }
        },
        fertile_dirt: {
            graphic: '0x0F81',
            bag: {
                x: 155,
                y: 180
            }
        },
        obsidian: {
            graphic: '0x0F89',
            bag: {
                x: 155,
                y: 180
            }
        },
        serpent_scales: {
            graphic: '0x0F8E',
            bag: {
                x: 155,
                y: 180
            }
        },
        bloodspawn: {
            graphic: '0x0F7C',
            bag: {
                x: 155,
                y: 180
            }
        },
        deamon_blood: {
            graphic: '0x0F7D',
            bag: {
                x: 155,
                y: 180
            }
        },
        daemon_bones: {
            graphic: '0x0F80',
            bag: {
                x: 155,
                y: 180
            }
        },
        pumice: {
            graphic: '0x0F8B',
            bag: {
                x: 155,
                y: 180
            }
        },
        dragons_blood: {
            graphic: '0x0F82',
            bag: {
                x: 155,
                y: 180
            }
        },
        volcanic_ash: {
            graphic: '0x0F8F',
            bag: {
                x: 155,
                y: 180
            }
        },
        wyrms_hearts: {
            graphic: '0x0F91',
            bag: {
                x: 155,
                y: 180
            }
        },
        brimstone: {
            graphic: '0x0F7F',
            bag: {
                x: 155,
                y: 180
            }
        },
        batwings: {
            graphic: '0x0F78',
            bag: {
                x: 155,
                y: 180
            }
        },
        bones: {
            graphic: '0x0F7E',
            bag: {
                x: 155,
                y: 180
            }
        },
        eyes_of_newt: {
            graphic: '0x0F87',
            color: '0x0000',
            bag: {
                x: 155,
                y: 180
            }
        }
    },
    klamaci: {
        lvl1: {
            giantRat: {
                graphic: '0x20D0'
            },
            rat: {
                graphic: '0x2123'
            },
            chicken: {
                graphic: '0x20D1'
            },
            rabbit: {
                graphic: '0x2125'
            },
            bird: {
                graphic: '0x20EE'
            }
        },
        lvl2: {
            bullFrog: {
                graphic: '0x2130'
            },
            squirrel: {
                graphic: '0x2D97'
            },
            dog: {
                graphic: '0x211C'
            },
            cat: {
                graphic: '0x211B'
            }
        }
    }
};
var Scripts;
(function (Scripts) {
    var Clean = (function () {
        function Clean() {
        }
        Clean.cleanBag = function () {
            Scripts.Clean.cleanObjectInBag(o.potions, 'potions');
            Scripts.Clean.cleanObjectInBag(o.books, 'books');
            Scripts.Clean.cleanObjectInBag(o.regy, 'regy');
            Scripts.Clean.cleanObjectInBag(o.necroRegy, 'necroRegy');
            Scripts.Clean.cleanObjectInBag(o.uncategorized, 'uncategorized');
            Scripts.Clean.cleanObjectInBag(o.rings, 'rings');
        };
        Clean.cleanObjectInBag = function (object, objectName) {
            if (isMyGameObject(object)) {
                Scripts.Clean.cleanMyGameObjectInBag(object, objectName);
                return;
            }
            for (var key in object) {
                Scripts.Clean.cleanObjectInBag(object[key], key);
            }
        };
        Clean.cleanMyGameObjectInBag = function (type, tName) {
            var _a, _b, _c;
            var serials = Scripts.Utils.getSerialsFromMyGameObject(type);
            Orion.Print(ColorEnum.none, tName + ": " + serials.length);
            var bag = (_a = type.bag) === null || _a === void 0 ? void 0 : _a.objectAlias;
            if (bag && !Orion.FindObject(bag)) {
                Orion.AddObject(bag);
                Orion.Print(ColorEnum.none, "Target your [" + bag + "] for object [" + (tName === null || tName === void 0 ? void 0 : tName.toUpperCase()) + "]");
                Scripts.Utils.waitWhileTargeting();
            }
            !bag && (bag = 'backpack');
            var x = ((_b = type.bag) === null || _b === void 0 ? void 0 : _b.x) || 100;
            var y = ((_c = type.bag) === null || _c === void 0 ? void 0 : _c.y) || 100;
            if (serials.length && Orion.FindObject(serials[0]).Count() > 1 && serials.length > 1) {
                for (var _i = 0, serials_1 = serials; _i < serials_1.length; _i++) {
                    var serial = serials_1[_i];
                    Orion.MoveItem(serial, 0, 'backpack');
                }
                serials = Scripts.Utils.getSerialsFromMyGameObject(type);
            }
            for (var i = 0; i < serials.length; i++) {
                Orion.MoveItem(serials[i], 0, bag, x, y);
                x += 3;
                Orion.Wait(450);
            }
        };
        return Clean;
    }());
    Scripts.Clean = Clean;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Common = (function () {
        function Common() {
        }
        Common.svetlo = function (shouldCast) {
            if (shouldCast === void 0) { shouldCast = true; }
            var ns = o.potions.ns;
            var kad = Orion.FindType(ns.kad.graphic, ns.kad.color);
            if (kad.length) {
                Orion.WaitTargetObject('self');
                Orion.UseObject(kad[0]);
            }
            else if (shouldCast) {
                Scripts.Spells.cast('Night Sight', TargetEnum.self);
            }
        };
        Common.shrinkKad = function () {
            var shrink = o.potions.ns;
            var kad = Orion.FindType(shrink.kad.graphic, shrink.kad.color);
            if (kad.length) {
                Orion.UseObject(kad[0]);
            }
            else {
                Scripts.Utils.log('NEMAS SHRINK KAD', ColorEnum.red);
            }
        };
        Common.hiding = function () {
            Orion.ClearJournal();
            Orion.Print(ColorEnum.none, 'Start Hiding');
            Orion.UseSkill('Hiding');
            Orion.Wait(100);
            while (Orion.InJournal('preoccupied')) {
                Orion.ClearJournal();
                Orion.WarMode(true);
                Orion.Wait(100);
                Orion.Print(ColorEnum.none, 'preoccupied - trying to hide again');
                Orion.UseSkill('Hiding');
            }
            var timeToHide = 2000;
            Orion.AddDisplayTimer('hiding', 2000, 'AboveChar', 'bar', "Hiding", 0, 100, '0x100', 0, 'red');
            Orion.Wait(timeToHide);
            if (Orion.InJournal('You have hidden yourself well')) {
                Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
            }
            if (Orion.InJournal('t seem to hide here')) {
                Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
            }
        };
        Common.drinkPotion = function (potionName, switchWarModeWhenNeeded) {
            if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
            var potion = o.potions[potionName];
            if (!potion) {
                Scripts.Utils.log("Definice potionu '" + potionName + "' neexistuje.", ColorEnum.red);
                return;
            }
            var emptyBottles = Orion.FindType(o.uncategorized.emptyBottles.graphic, o.uncategorized.emptyBottles.color);
            var isEmptyBottle = emptyBottles.length > 0;
            var isPotion = Orion.Count(potion.graphic, potion.color) > 0;
            var kade = Orion.FindType(potion.kad.graphic, potion.kad.color);
            var isKad = potion.kad && kade.length || false;
            if (!isPotion && isKad) {
                if (!isEmptyBottle) {
                    Scripts.Utils.log('Nemas prazdne lahve na docepnuti', ColorEnum.red);
                    return;
                }
                Orion.ClearJournal();
                Orion.WaitTargetObject(emptyBottles[0]);
                Orion.UseObject(kade[0]);
                Orion.Wait(responseDelay);
                if (Orion.InJournal('Pri praci s nadobou nemuzes delat neco')) {
                    if (!switchWarModeWhenNeeded) {
                        Scripts.Utils.log('Nemuzes pit, kdyz neco delas', ColorEnum.red);
                        return;
                    }
                    Scripts.Utils.playerPrint('[War mode]', ColorEnum.red);
                    Orion.WarMode(true);
                    Orion.Wait(100);
                    Orion.WaitTargetObject(emptyBottles[0]);
                    Orion.UseObject(kade[0]);
                    Orion.Wait(responseDelay);
                }
                isPotion = Orion.Count(potion.graphic, potion.color) > 0;
            }
            if (isPotion) {
                Orion.UseType(potion.graphic, potion.color);
                Orion.Wait(responseDelay);
                if (Orion.InJournal('You put the empty bottless')) {
                    Orion.AddDisplayTimer(TimersEnum.drink, 18000, 'RightTop', 'Circle', 'Drink potion', 0, 0, '0x100', 0, 'red');
                    Scripts.Utils.resetTimer(TimersEnum.drink);
                    var currentPotions = Orion.Count(potion.graphic, potion.color);
                    var textColor = currentPotions === 0 ? ColorEnum.red : ColorEnum.green;
                    Scripts.Utils.playerPrint("[ " + potionName + " " + Orion.Count(potion.graphic, potion.color) + " ]");
                }
            }
            else {
                Scripts.Utils.playerPrint('Nemas ' + potionName, ColorEnum.red);
            }
        };
        Common.bandageSelf = function (pathToNoBandagesWavFile) {
            if (pathToNoBandagesWavFile === void 0) { pathToNoBandagesWavFile = 'C:/critical.wav'; }
            Orion.ClearJournal();
            Orion.BandageSelf();
            while (!Orion.InJournal('You put') && !Orion.InJournal('You apply') && !Orion.InJournal('Chces vytvorit')) {
                Orion.Wait(200);
            }
            var bandages = Orion.FindType(o.uncategorized.bandy.graphic, o.uncategorized.bandy.color);
            if (!bandages.length) {
                Orion.PlayWav(pathToNoBandagesWavFile);
            }
        };
        return Common;
    }());
    Scripts.Common = Common;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Dress = (function () {
        function Dress() {
        }
        Dress.resetStats = function () {
            var _a;
            var tbObj = o.books.travelBook;
            var travelBooks = Orion.FindType(tbObj.graphic, tbObj.color);
            if (!travelBooks.length) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK', ColorEnum.red);
                return;
            }
            Orion.UseObject(travelBooks[0]);
            var requiredMenuName = 'Po pouziti vam budou opraveny staty na spravne hodnoty. Pozor, pri oprave vam spadne vase brneni do batuzku!';
            var openedMenu = Orion.WaitForGump(2000) && ((_a = Orion.GetLastGump()) === null || _a === void 0 ? void 0 : _a.Select(Orion.CreateGumpHook(2))) &&
                Orion.WaitForMenu(2000) &&
                Orion.GetMenu('last');
            (openedMenu === null || openedMenu === void 0 ? void 0 : openedMenu.Name()) === requiredMenuName && openedMenu.Select('Ano, oprav');
        };
        Dress.setDress = function () {
            var maximumDressParts = 20;
            for (var i = 0; i < maximumDressParts; i++) {
                if (!Orion.FindObject('Dress.Object' + i)) {
                    continue;
                }
                Orion.RemoveObject('Dress.Object' + i);
                Orion.Wait(250);
            }
            Orion.ClearJournal();
            for (var i = 0; i < maximumDressParts; i++) {
                if (Orion.InJournal('stopdress')) {
                    break;
                }
                Orion.AddObject('Dress.Object' + i);
                Orion.Print('-1', 'Target your dress. Type "stopdress" when done');
                Orion.Wait(250);
            }
        };
        Dress.dressUp = function () {
            for (var i = 0; i < 20; i++) {
                if (!Orion.FindObject('Dress.Object' + i)) {
                    continue;
                }
                Orion.UseObject('Dress.Object' + i);
                Orion.Wait(250);
            }
        };
        return Dress;
    }());
    Scripts.Dress = Dress;
})(Scripts || (Scripts = {}));
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Scripts;
(function (Scripts) {
    var Jewelry = (function () {
        function Jewelry() {
        }
        Jewelry.useRR = function () {
            var rr = o.rings.rr;
            var grr = o.rings.grr;
            var grr2 = o.rings.grr2;
            var rrSerials = Orion.FindType(rr.graphic, rr.color);
            var grrSerials = Orion.FindType(grr.graphic, grr.color);
            var grr2Serials = Orion.FindType(grr2.graphic, grr2.color);
            var rings = __spreadArrays(rrSerials, grrSerials, grr2Serials);
            Orion.ClearJournal();
            for (var _i = 0, rings_1 = rings; _i < rings_1.length; _i++) {
                var ring = rings_1[_i];
                var ringObject = Orion.FindObject(ring);
                var x = ringObject.X();
                var y = ringObject.Y();
                Orion.UseObject(ring);
                if (Orion.InJournal("It too soon to use it again")) {
                    Orion.MoveItem(ring, 0, 'backpack', x, y);
                    break;
                }
            }
        };
        return Jewelry;
    }());
    Scripts.Jewelry = Jewelry;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Klamak = (function () {
        function Klamak() {
        }
        Klamak.next = function () {
            var lists = ['petlvl1', 'petlvl2', 'petlvl3', 'petlvl4', 'petlvl5'];
            var current = Orion.GetGlobal('klamak');
            if (!current) {
                Orion.SetGlobal('klamak', lists[lists.length - 1]);
                current = Orion.GetGlobal('klamak');
            }
            var currentIndex = lists.indexOf(current);
            var nextIndex;
            var i = 0;
            do {
                i++;
                nextIndex = (currentIndex + i) % lists.length;
                Orion.SetGlobal('klamak', lists[nextIndex]);
            } while (i < lists.length && !Orion.FindList(Orion.GetGlobal('klamak')).length);
            var numberOfKlamaks = Orion.FindList(Orion.GetGlobal('klamak')).length;
            if (!numberOfKlamaks) {
                Scripts.Utils.playerPrint('nemas klamaky', ColorEnum.red);
                return;
            }
            var nextList = Orion.GetGlobal('klamak');
            Scripts.Utils.playerPrint(nextList + " [" + numberOfKlamaks + "]");
        };
        return Klamak;
    }());
    Scripts.Klamak = Klamak;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Loot = (function () {
        function Loot() {
        }
        Loot.harving = function (_a) {
            var cut = _a.cut, wayPoints = _a.wayPoints, enemiesTypesToHarv = _a.enemiesTypesToHarv, _b = _a.trapDelay, trapDelay = _b === void 0 ? 10000 : _b, _c = _a.dmgToStartHeal, dmgToStartHeal = _c === void 0 ? 40 : _c, _d = _a.fullHeal, fullHeal = _d === void 0 ? false : _d, _e = _a.castCure, castCure = _e === void 0 ? false : _e, _f = _a.drinkCure, drinkCure = _f === void 0 ? false : _f, _g = _a.castReactive, castReactive = _g === void 0 ? false : _g, _h = _a.weapon, weapon = _h === void 0 ? true : _h;
            Orion.SetTimer('ReactiveArmorTimer');
            var currentWaypointIndex = 0;
            Scripts.Utils.playerPrint('Target your cut weapon');
            var selection_1 = Orion.WaitForAddObject('cutWeapon', 60000);
            Scripts.Utils.playerPrint('Target your loot bag');
            var selection_2 = Orion.WaitForAddObject('myLootBag', 60000);
            var selection_3 = 1;
            if (weapon) {
                Scripts.Utils.playerPrint('Target your weapon');
                selection_3 = Orion.WaitForAddObject('fightWeapon', 60000);
            }
            if (1 !== selection_1 || 1 !== selection_2 || 1 !== selection_3) {
                Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
                return;
            }
            while (true) {
                if (castReactive && Orion.Timer('ReactiveArmorTimer') > 300000) {
                    Scripts.Utils.resetTimer('ReactiveArmorTimer');
                    Scripts.Spells.castUntilSuccess('Reactive Armor', TargetEnum.self, 2500);
                }
                Scripts.Loot.lootCorpsesAround(cut, weapon);
                Scripts.Loot.healAndCureWhenHarving(dmgToStartHeal, fullHeal, castCure, drinkCure);
                currentWaypointIndex = Scripts.Loot.moveToNextWaypointWhenNeeded(wayPoints, enemiesTypesToHarv, currentWaypointIndex, trapDelay);
                Orion.Wait(500);
            }
        };
        Loot.lootCorpsesAround = function (cut, weapon) {
            var listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            while (listOfCorpses.length) {
                for (var _i = 0, listOfCorpses_1 = listOfCorpses; _i < listOfCorpses_1.length; _i++) {
                    var id = listOfCorpses_1[_i];
                    if (cut) {
                        Orion.UseObject('cutWeapon');
                        Orion.WaitForTarget(1000);
                        Orion.TargetObject(id);
                        if (weapon) {
                            Orion.UseObject('fightWeapon');
                            Orion.WaitForTarget(1000) && Orion.CancelTarget();
                        }
                    }
                    Scripts.Loot.lootCorpseId(id);
                    Orion.Ignore(id);
                    Orion.Wait(100);
                }
                listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            }
        };
        Loot.lootCorpseId = function (id) {
            Orion.OpenContainer(id, 5000, "Container id " + id + " not found");
            var itemsInCorpse = Orion.FindList('lootItems', id);
            if (itemsInCorpse.length) {
                for (var _i = 0, itemsInCorpse_1 = itemsInCorpse; _i < itemsInCorpse_1.length; _i++) {
                    var itemId = itemsInCorpse_1[_i];
                    Orion.MoveItem(itemId, 0, "myLootBag");
                    Orion.Wait(50);
                }
            }
        };
        Loot.healAndCureWhenHarving = function (dmgToStartHeal, fullHeal, castCure, drinkCure) {
            if (Player.Hits() > Player.MaxHits() - dmgToStartHeal) {
                return;
            }
            var keepHealing = fullHeal;
            while (keepHealing || Player.Hits() <= Player.MaxHits() - dmgToStartHeal) {
                Scripts.Common.bandageSelf();
                keepHealing = fullHeal && Player.Hits() !== Player.MaxHits();
            }
            if (Player.Poisoned()) {
                if (castCure) {
                    Scripts.Spells.castUntilSuccess('Cure', TargetEnum.self, 2500);
                }
                else if (drinkCure) {
                    Scripts.Common.drinkPotion('lc');
                }
            }
        };
        Loot.moveToNextWaypointWhenNeeded = function (wayPoints, enemiesTypesToHarv, currentWaypointIndex, trapDelay) {
            if (wayPoints && enemiesTypesToHarv) {
                var enemiesToHarv = Orion.FindType(enemiesTypesToHarv.join('|'), '-1', 'ground', 'fast', 4, 'red');
                if (!enemiesToHarv.length) {
                    var w = wayPoints[currentWaypointIndex];
                    Orion.WalkTo(w.x, w.y, Player.Z(), 0);
                    if (w.trap) {
                        Orion.Wait(trapDelay);
                    }
                    return currentWaypointIndex + 1 === wayPoints.length ? 0 : currentWaypointIndex + 1;
                }
                else {
                    Orion.Wait(500);
                    Orion.Attack(enemiesToHarv[0]);
                    var enemy = Orion.FindObject(enemiesToHarv[0]);
                    if (enemy) {
                        Orion.WalkTo(enemy.X(), enemy.Y(), Player.Z(), 5);
                    }
                    return currentWaypointIndex;
                }
            }
        };
        return Loot;
    }());
    Scripts.Loot = Loot;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Mining = (function () {
        function Mining() {
        }
        Mining.mining = function () {
            Orion.ClearJournal();
            var visitedCoordinates = [];
            Scripts.Mining.saveCurrentPositionToArray(visitedCoordinates);
            Scripts.Mining.recurseMine(DirectionEnum.East, visitedCoordinates);
        };
        Mining.saveCurrentPositionToArray = function (arr) {
            arr.push({ x: Player.X(), y: Player.Y() });
        };
        Mining.recurseMine = function (comesFrom, visitedCoordinates) {
            var next = Scripts.Mining.getNextDirectionsArray(comesFrom);
            var isRock = Scripts.Mining.rockMine();
            var pauseText = 'dam si pauzicku';
            var resumeText = 'konec pauzicky';
            if (Orion.InJournal(pauseText)) {
                while (!Orion.InJournal(resumeText)) {
                    Orion.Wait(2000);
                }
                Orion.ClearJournal(undefined, 'my');
            }
            if (isRock) {
                if (Scripts.Mining.moveDirection(next[0], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[2], visitedCoordinates);
                }
                if (Scripts.Mining.moveDirection(next[1], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[3], visitedCoordinates);
                }
                if (Scripts.Mining.moveDirection(next[2], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[0], visitedCoordinates);
                }
            }
            Scripts.Utils.log("back", ColorEnum.red);
            Scripts.Utils.movePlayerToDirection(comesFrom);
        };
        Mining.moveDirection = function (direction, visitedPositions) {
            var x = Player.X();
            var y = Player.Y();
            var wasVisited = false;
            switch (direction) {
                case DirectionEnum.West:
                    wasVisited = Scripts.Mining.wasVisited({ x: x - 1, y: y }, visitedPositions);
                    break;
                case DirectionEnum.North:
                    wasVisited = Scripts.Mining.wasVisited({ x: x, y: y - 1 }, visitedPositions);
                    break;
                case DirectionEnum.East:
                    wasVisited = Scripts.Mining.wasVisited({ x: x + 1, y: y }, visitedPositions);
                    break;
                default:
                    wasVisited = Scripts.Mining.wasVisited({ x: x, y: y + 1 }, visitedPositions);
                    break;
            }
            if (wasVisited) {
                return false;
            }
            if (Orion.InJournal("World save has been")) {
                Orion.Wait(30000);
                Orion.ClearJournal(undefined, 'sys');
            }
            var isSuccess = Scripts.Utils.movePlayerToDirection(direction);
            if (isSuccess) {
                Scripts.Mining.saveCurrentPositionToArray(visitedPositions);
            }
            return isSuccess;
        };
        Mining.wasVisited = function (currentPosition, visitedPositions) {
            for (var _i = 0, visitedPositions_1 = visitedPositions; _i < visitedPositions_1.length; _i++) {
                var visited = visitedPositions_1[_i];
                if (visited.x === currentPosition.x && visited.y === currentPosition.y) {
                    return true;
                }
            }
            return false;
        };
        Mining.getNextDirectionsArray = function (comesFrom) {
            switch (comesFrom) {
                case DirectionEnum.West:
                    return [DirectionEnum.North, DirectionEnum.East, DirectionEnum.South, DirectionEnum.West];
                case DirectionEnum.North:
                    return [DirectionEnum.East, DirectionEnum.South, DirectionEnum.West, DirectionEnum.North];
                case DirectionEnum.East:
                    return [DirectionEnum.South, DirectionEnum.West, DirectionEnum.North, DirectionEnum.East];
                default:
                    return [DirectionEnum.West, DirectionEnum.North, DirectionEnum.East, DirectionEnum.South];
            }
        };
        Mining.rockMine = function () {
            var unwantedOre = [
                { color: '0X0000', message: 'iron' },
                { color: '0X0289', message: 'Copper' },
                { color: '0X01BF', message: 'Bronze' },
                { color: '0X0482', message: 'Silver' },
                { color: '0X0322', message: 'Shadow' },
                { color: '0X0665', message: 'Rose' },
                { color: '0X0160', message: 'Golden' },
                { color: '0X01CB', message: 'Verite' },
                { color: '0X0253', message: 'Valorite' },
                { color: '0X04C2', message: 'Blood' },
                { color: '0X0006', message: 'Sapphire' },
                { color: '0X0041', message: 'Emerald' },
                { color: '0X002C', message: 'Citrine' },
                { color: '0X0015', message: 'Amethyst' },
                { color: '0X0027', message: 'Ruby' },
                { color: '0X03E9', message: 'Diamond' }
            ];
            var ores = [
                '0x19B7',
                '0x19BA',
                '0x19B8',
                '0x19B9'
            ];
            Orion.ClearJournal(undefined, 'sys');
            var stopText = 'There is no ore here to mine.';
            var falseReturnText = 'Try mining in rock.';
            var keepMine = true;
            while (!Player.Dead() && keepMine &&
                !(Orion.InJournal(stopText) || Orion.InJournal(falseReturnText))) {
                Orion.ClearJournal(undefined, 'sys');
                Orion.UseType('0x0E85');
                if (Orion.WaitForTarget(1000)) {
                    Orion.TargetTileRelative('any', 0, 0, 0);
                }
                while (!(Orion.InJournal('You put the') ||
                    Orion.InJournal('There is no ore') ||
                    Orion.InJournal('Try mining') ||
                    Orion.InJournal('You loosen') ||
                    Orion.InJournal('You destroy'))) {
                    Orion.Wait(200);
                }
                if (Orion.InJournal('You put the')) {
                    var drop = false;
                    for (var _i = 0, unwantedOre_1 = unwantedOre; _i < unwantedOre_1.length; _i++) {
                        var ore = unwantedOre_1[_i];
                        if (!Orion.InJournal(ore.message)) {
                            continue;
                        }
                        keepMine = false;
                        for (var _a = 0, ores_1 = ores; _a < ores_1.length; _a++) {
                            var oreGraphic = ores_1[_a];
                            var serials = Orion.FindType(oreGraphic);
                            if (!serials.length) {
                                continue;
                            }
                            for (var _b = 0, serials_2 = serials; _b < serials_2.length; _b++) {
                                var serial = serials_2[_b];
                                var oreObject = Orion.FindObject(serial);
                                if (ore.color === oreObject.Color().toUpperCase()) {
                                    Orion.Drop(serial);
                                    drop = true;
                                }
                            }
                        }
                    }
                    var forges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 3, '-1', true);
                    if (forges.length) {
                        drop && Orion.Wait(500);
                        for (var _c = 0, ores_2 = ores; _c < ores_2.length; _c++) {
                            var oreGraphic = ores_2[_c];
                            var serials = Orion.FindType(oreGraphic);
                            if (!serials.length) {
                                continue;
                            }
                            for (var _d = 0, serials_3 = serials; _d < serials_3.length; _d++) {
                                var serial = serials_3[_d];
                                Orion.UseObject(forges[0]);
                                if (Orion.InJournal('reach that')) {
                                    Orion.CancelTarget();
                                    break;
                                }
                                Orion.CancelTarget();
                                Orion.WaitTargetObject(serial);
                                Orion.UseObject(forges[0]);
                                Orion.Wait(500);
                            }
                        }
                    }
                }
            }
            return !Orion.InJournal(falseReturnText);
        };
        Mining.pickOresAround = function () {
            var stop = false;
            while (!stop) {
                stop = true;
                var oresAround = Orion.FindType("0x19B7|0x19BA|0x19B8|0x19B9", "-1", "ground", "item", 3);
                for (var _i = 0, oresAround_1 = oresAround; _i < oresAround_1.length; _i++) {
                    var ore = oresAround_1[_i];
                    var oreObject = Orion.FindObject(ore);
                    if (!oreObject || oreObject.X() === Player.X() && oreObject.Y() === Player.Y()) {
                        continue;
                    }
                    var count = oreObject.Count();
                    if (count > 50) {
                        Orion.MoveItem(ore, 50);
                        stop = false;
                    }
                    else {
                        Orion.MoveItem(ore);
                    }
                    Orion.Wait(500);
                }
            }
        };
        Mining.mineAround = function () {
            Orion.ClearJournal(undefined, 'sys');
            var radius = 2;
            for (var x = radius; x >= radius * -1; x--) {
                for (var y = radius; y >= radius * -1; y--) {
                    Scripts.Utils.playerPrint("mineAround: x: " + x + ", y: " + y, ColorEnum.green);
                    while (!Player.Dead() &&
                        !(Orion.InJournal('There is no ore') || Orion.InJournal('Try mining in rock'))) {
                        Orion.ClearJournal(undefined, 'sys');
                        Orion.UseType('0x0E85');
                        if (Orion.WaitForTarget(1000)) {
                            Orion.TargetTileRelative('any', x, y, 0);
                        }
                        while (!(Orion.InJournal('You put the') ||
                            Orion.InJournal('There is no ore') ||
                            Orion.InJournal('Try mining') ||
                            Orion.InJournal('You loosen') ||
                            Orion.InJournal('You destroy'))) {
                            Orion.Wait(200);
                        }
                    }
                    Orion.ClearJournal(undefined, 'sys');
                }
                Scripts.Mining.pickOresAround();
            }
        };
        Mining.kopaniFire = function (direction, fullMine) {
            var unwantedOre = [
                { color: '0X0000', message: 'iron' },
                { color: '0X0289', message: 'Copper' },
                { color: '0X01BF', message: 'Bronze' },
                { color: '0X0482', message: 'Silver' },
                { color: '0X0322', message: 'Shadow' },
                { color: '0X0665', message: 'Rose' },
                { color: '0X0160', message: 'Golden' },
                { color: '0X0006', message: 'Sapphire' },
                { color: '0X0041', message: 'Emerald' },
                { color: '0X002C', message: 'Citrine' },
                { color: '0X0015', message: 'Amethyst' },
                { color: '0X0027', message: 'Ruby' },
                { color: '0X03E9', message: 'Diamond' }
            ];
            var ores = [
                '0x19B7',
                '0x19BA',
                '0x19B8',
                '0x19B9'
            ];
            var west = 6;
            var south = 4;
            var east = 2;
            var north = 0;
            var x = Player.X();
            var y = Player.Y();
            if (Player.Direction() !== direction) {
                Orion.Step(direction, true);
                Orion.Wait(Orion.OptionFastRotation() ? 50 : 100);
            }
            Orion.Step(direction, false);
            Orion.Wait(415);
            var right = direction === 6 ? 0 : direction + 2;
            if (Player.X() === x && Player.Y() === y) {
                Scripts.Mining.kopaniFire(right, fullMine);
            }
            else {
                var relativeKopY = x - Player.X();
                var relativeKopX = Player.Y() - y;
                Orion.ClearJournal();
                var keepMine = true;
                while (keepMine && !Orion.InJournal("There is no ore") && !Orion.InJournal("Try mining")) {
                    Orion.ClearJournal();
                    Orion.UseType('0x0E85');
                    if (Orion.WaitForTarget(1000)) {
                        Orion.TargetTileRelative('any', relativeKopX, relativeKopY, 0);
                    }
                    while (!(Orion.InJournal("You put the") ||
                        Orion.InJournal("There is no ore") ||
                        Orion.InJournal("Try mining") ||
                        Orion.InJournal("You loosen") ||
                        Orion.InJournal("You destroy"))) {
                        Orion.Wait(200);
                    }
                    if (Orion.InJournal("You loosen")) {
                        keepMine = false;
                        continue;
                    }
                    if (!Orion.InJournal("You put the")) {
                        continue;
                    }
                    for (var _i = 0, unwantedOre_2 = unwantedOre; _i < unwantedOre_2.length; _i++) {
                        var ore = unwantedOre_2[_i];
                        if (!Orion.InJournal(ore.message)) {
                            continue;
                        }
                        !fullMine && (keepMine = false);
                        for (var _a = 0, ores_3 = ores; _a < ores_3.length; _a++) {
                            var oreGraphic = ores_3[_a];
                            var serials = Orion.FindType(oreGraphic);
                            if (!serials.length) {
                                continue;
                            }
                            for (var _b = 0, serials_4 = serials; _b < serials_4.length; _b++) {
                                var serial = serials_4[_b];
                                var oreObject = Orion.FindObject(serial);
                                if (ore.color === oreObject.Color().toUpperCase()) {
                                    Orion.Drop(serial);
                                }
                            }
                        }
                    }
                }
                if (relativeKopY > 0) {
                    Scripts.Mining.kopaniFire(south, fullMine);
                }
                else if (relativeKopY < 0) {
                    Scripts.Mining.kopaniFire(north, fullMine);
                }
                else if (relativeKopX > 0) {
                    Scripts.Mining.kopaniFire(east, fullMine);
                }
                else {
                    Scripts.Mining.kopaniFire(west, fullMine);
                }
            }
        };
        return Mining;
    }());
    Scripts.Mining = Mining;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Mount = (function () {
        function Mount() {
        }
        Mount.mountAndDismount = function () {
            if (Orion.ObjAtLayer('Mount')) {
                Orion.UseObject('self');
            }
            else if (!Orion.FindObject('myMount')) {
                this.addMount();
            }
            else {
                Orion.UseObject('myMount');
            }
            Orion.Wait(50);
        };
        Mount.addMount = function () {
            Orion.AddObject('myMount');
            Orion.Print('-1', 'Target your mount');
        };
        return Mount;
    }());
    Scripts.Mount = Mount;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var PetCommander = (function () {
        function PetCommander() {
        }
        PetCommander.kill = function () {
            var namesPool = ['Andres', 'Blanca', 'Carlos', 'Dolores', 'Enrique', 'Felicia', 'Guillermo', 'Hilda', 'Ignacio', 'Jimena', 'Kevin', 'Linda', 'Marty', 'Nora', 'Olaf', 'Damrey',
                'Haikui', 'Kirogi', 'Tembin', 'Bolaven', 'Sanba', 'Jelawat', 'Ewiniar', 'Malaksi', 'Gaemi', 'Prapiroon', 'Maria', 'SonTinh', 'Bopha', 'Wukong', 'Sonamu',
                'Shanshan', 'Yagi', 'Leepi', 'Bebinca', 'Rumbia', 'Soulik', 'Cimaron', 'Jebi', 'Mangkhut', 'Utor', 'Trami', 'Yutu', 'Toraji', 'Usagi', 'Pabuk', 'Wutip', 'Sepat',
                'Fitow', 'Danas', 'Nari', 'Wipha', 'Francisco', 'Lekima', 'Krosa', 'Haiyan', 'Podul', 'Lingling', 'Kaziki', 'Faxai', 'Peipah', 'Tapah', 'Mitag', 'Hagibis', 'Neoguri',
                'Rammasun', 'Matmo', 'Halong', 'Nakri', 'Fengshen', 'Kalmaegi', 'Kanmuri', 'Phanfone', 'Vongfong', 'Nuri', 'Sinlaku', 'Hagupit', 'Jangmi', 'Mekkhala', 'Higos',
                'Bavi', 'Maysak', 'Haishen', 'Noul', 'Dolphin', 'Kujira', 'Chanhom', 'Linfa', 'Nangka', 'Soudelor', 'Molave', 'Goni', 'Morakot', 'Etau', 'Vamco', 'Krovanh', 'Dujuan',
                'Mujigae', 'Choiwan', 'Koppu', 'Ketsana', 'Parma', 'Melor', 'Nepartak', 'Lupit', 'Mirinae', 'Nida', 'Omais', 'Conson', 'Chanthu', 'Dianmu', 'Mindulle', 'Lionrock',
                'Kompasu', 'Namtheun', 'Malou', 'Meranti', 'Fanapi', 'Malakas', 'Megi', 'Chaba', 'Aere', 'Songda', 'Sarika', 'Haima', 'Meari', 'Tokage', 'Muifa', 'Merbok',
                'Nanmadol', 'Talas', 'Noru', 'Kulap', 'Roke', 'Sonca', 'Nesat', 'Haitang', 'Nalgae', 'Banyan', 'Washi', 'Pakhar', 'Sanvu', 'Mawar', 'Guchol', 'Patricia', 'Rick',
                'Sandra', 'Terry', 'Vivian', 'Waldo', 'Xina', 'York', 'Zelda', 'Agatha', 'Blas', 'Celia', 'Darby', 'Estelle', 'Frank', 'Georgette', 'Howard', 'Isis', 'Javier', 'Kay', 'Lester',
                'Madeline', 'Newton', 'Orlene', 'Paine', 'Roslyn', 'Seymour', 'Tina', 'Virgil', 'Winifred', 'Xavier', 'Yolanda', 'Zeke', 'Adrian', 'Beatriz', 'Calvin', 'Dora', 'Eugene',
                'Fernanda', 'Greg', 'Hilary', 'Irwin', 'Jova', 'Kenneth', 'Lidia', 'Max', 'Norma', 'Otis', 'Pilar', 'Ramon', 'Selma', 'Todd', 'Veronica', 'Wiley', 'Xina', 'York', 'Zelda',
                'Aletta', 'Bud', 'Carlotta', 'Daniel', 'Emilia', 'Fabio', 'Gilma', 'Hector', 'Ileana', 'John', 'Kristy', 'Lane', 'Miriam', 'Norman', 'Olivia', 'Paul', 'Rosa', 'Sergio', 'Tara',
                'Vicente', 'Willa', 'Xavier', 'Yolanda', 'Zeke', 'Alvin', 'Barbara', 'Cosme', 'Dalila', 'Erick', 'Flossie', 'Gil', 'Henriette', 'Ivo', 'Juliette', 'Kiko', 'Lorena', 'Manuel',
                'Narda', 'Octave', 'Priscilla', 'Raymond', 'Sonia', 'Tico', 'Velma', 'Wallis', 'Xina', 'York', 'Zelda', 'Amanda', 'Boris', 'Cristina', 'Douglas', 'Elida', 'Fausto', 'Genevieve',
                'Hernan', 'Iselle', 'Julio', 'Karina', 'Lowell', 'Marie', 'Norbert', 'Odile', 'Polo', 'Rachel', 'Simon', 'Trudy', 'Vance', 'Winnie', 'Xavier', 'Yolanda', 'Zeke', 'Talim',
                'Doksuri', 'Khanun', 'Vicente', 'Saola'
            ];
            var monstersAlive = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "fast|live", 13, "blue|gray|criminal|orange|red");
            while (monstersAlive.length) {
                var monsterSerial = monstersAlive[0];
                var isMyMonster = Orion.FindObject(monsterSerial).CanChangeName();
                if (isMyMonster) {
                    var random = Math.floor(Math.random() * (namesPool.length));
                    var newName = namesPool[random];
                    Orion.RenameMount(monstersAlive[0], newName);
                    namesPool.splice(random, 1);
                    Orion.WaitTargetObject(Orion.ClientLastAttack());
                    Orion.Say(newName + " kill");
                    Orion.WaitForTarget(1000);
                    Scripts.Utils.waitWhileTargeting();
                }
                Orion.Ignore(monsterSerial);
                monstersAlive = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "fast|live", 13, "blue|gray|criminal|orange|red");
            }
            Orion.IgnoreReset();
        };
        return PetCommander;
    }());
    Scripts.PetCommander = PetCommander;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Spells = (function () {
        function Spells() {
        }
        Spells.cast = function (spell, target) {
            Scripts.Utils.waitTarget(target);
            Orion.Cast(spell);
        };
        Spells.summon = function (creature, target) {
            Orion.CancelWaitMenu();
            Orion.WaitMenu('What do you want to summon', creature);
            Scripts.Spells.cast('Summ. Creature', target);
        };
        Spells.castScroll = function (scroll, target, backupHeadCast) {
            var s = o.scrolls['standard'][scroll];
            if (s.minMana > Player.Mana()) {
                Scripts.Utils.playerPrint('!! MANA !!', ColorEnum.red);
                return;
            }
            var lastTimerLimit = parseInt(Orion.GetGlobal('lastScrollTimerLimit'), 10);
            var nextTimer = s.timer;
            var timer = Orion.Timer('scrollTimer');
            var noTimer = timer !== -1 && timer < lastTimerLimit;
            var noScrolls = Orion.Count(s.graphic) < 1;
            if (noTimer || noScrolls) {
                var message = noTimer ? 'TIMER' : 'NEMAS SVITKY';
                if (backupHeadCast) {
                    Scripts.Utils.playerPrint(message + ' - backup cast', ColorEnum.orange);
                    Scripts.Spells.cast(backupHeadCast, target);
                }
                else {
                    Scripts.Utils.playerPrint(message, ColorEnum.red);
                }
                return;
            }
            Scripts.Utils.waitTarget(target);
            Orion.UseType(s.graphic, s.color);
            Orion.AddDisplayTimer('scroll', nextTimer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
            Scripts.Utils.resetTimer('scrollTimer');
            Orion.SetGlobal('lastScrollTimerLimit', s.timer);
        };
        Spells.castNecroScroll = function (scroll, target) {
            var s = o.scrolls['necro'][scroll];
            if (s.minMana > Player.Mana()) {
                Scripts.Utils.playerPrint('!! MANA !!', ColorEnum.red);
                return;
            }
            if (Orion.Count(s.graphic, s.color) < 1) {
                Scripts.Utils.playerPrint("NEMAS SVITKY " + scroll, ColorEnum.red);
                return;
            }
            var lastTimerLimit = parseInt(Orion.GetGlobal('lastNecroScrollTimerLimit'), 10);
            var nextTimer = s.timer;
            var timer = Orion.Timer('necroScrollTimer');
            var cantCast = timer !== -1 && timer < lastTimerLimit;
            if (cantCast) {
                Scripts.Utils.playerPrint('TIMER na svitky', ColorEnum.red);
                return;
            }
            Scripts.Utils.waitTarget(target);
            Orion.UseType(s.graphic, s.color);
            Scripts.Utils.resetTimer('necroScrollTimer');
            Orion.SetGlobal('lastNecroScrollTimerLimit', s.timer);
        };
        Spells.castUntilSuccess = function (spell, target, castTime) {
            do {
                Orion.WarMode(true);
                Orion.ClearJournal();
                Scripts.Spells.cast(spell, target);
                Orion.Wait(castTime);
            } while (Orion.InJournal('fizzles'));
            Orion.WarMode(true);
        };
        Spells.inscription = function (circle, spell, quantity) {
            if (quantity === void 0) { quantity = 0; }
            var menuName = 'Spell Circles';
            var spellCircle = "Spell Circle " + circle;
            var blank = o.scrolls.blank;
            Scripts.Utils.playerPrint('Target your container with blank scrolls');
            var selection_1 = Orion.WaitForAddObject('blankScrollsContainer', 60000);
            Scripts.Utils.playerPrint('Target your container where to put finished scrolls');
            var selection_2 = Orion.WaitForAddObject('scrollsContainer', 60000);
            Scripts.Utils.playerPrint("Target finished [" + spell + "] scroll");
            var selection_3 = Orion.WaitForAddObject('finishedScroll', 60000);
            if (1 === selection_1 && 1 === selection_2 && 1 === selection_3) {
                Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
            }
            var finishedScroll = {
                graphic: Orion.FindObject('finishedScroll').Graphic(),
                color: Orion.FindObject('finishedScroll').Color()
            };
            var finishedCount = 0;
            var totalTries = 0;
            while (quantity === 0 || finishedCount !== quantity) {
                Scripts.Utils.worldSaveCheckWait();
                Scripts.Utils.refill(blank, 'blankScrollsContainer', 10, 'backpack', true);
                Orion.ClearJournal();
                Scripts.Utils.selectMenu(menuName, [spellCircle, spell]);
                Orion.Wait(responseDelay);
                Orion.UseType(blank.graphic, blank.color);
                Scripts.Utils.waitWhileSomethingInJournal(['You fail', 'You put the'], 30000);
                Orion.CancelWaitMenu();
                if (Orion.InJournal('You put the')) {
                    finishedCount++;
                    var scroll_1 = Orion.FindType(finishedScroll.graphic, finishedScroll.color, 'backpack');
                    Orion.MoveItem(scroll_1[0], 1, 'scrollsContainer');
                    Orion.Wait(responseDelay);
                }
                totalTries++;
                Scripts.Utils.log("napsano " + finishedCount + " / " + totalTries);
                if (Player.Mana() + 60 < Player.Int()) {
                    var isDrinkTimerSet = Orion.Timer(TimersEnum.drink) !== -1;
                    while (isDrinkTimerSet && Orion.Timer(TimersEnum.drink) < 18000) {
                        Orion.Wait(200);
                    }
                    Scripts.Common.drinkPotion('tmr');
                }
            }
        };
        return Spells;
    }());
    Scripts.Spells = Spells;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Taming = (function () {
        function Taming() {
        }
        Taming.useTrainingTamingStaff = function (targetSerial) {
            Orion.Disarm();
            Orion.Wait(500);
            var staff = Orion.FindType(o.taming.staffs.training.graphic, o.taming.staffs.training.color);
            if (!staff.length) {
                Scripts.Utils.log('missing training taming staff', ColorEnum.red);
                return false;
            }
            Orion.WaitTargetObject(targetSerial);
            Orion.UseObject(staff[0]);
            while (!Orion.InJournal('What do you want to use this on')) {
                Orion.Wait(500);
                Orion.WaitTargetObject(targetSerial);
                Orion.UseObject(staff[0]);
            }
            return true;
        };
        Taming.waitOnTaming = function () {
            while (!(Orion.InJournal('Your taming failed') ||
                Orion.InJournal('Ochoceni se nezdarilo') ||
                Orion.InJournal('Too far') ||
                Orion.InJournal('Not tamable') ||
                Orion.InJournal('byl tamnut') ||
                Orion.InJournal('Cannot learn anything more') ||
                Orion.InJournal('You are not able to tame this animal'))) {
                Orion.Wait(500);
            }
        };
        Taming.dressRobeOfDruids = function () {
            var robeOfDruids = Orion.FindObject('0x4034E76C');
            if (!robeOfDruids) {
                return false;
            }
            Orion.UseObject(robeOfDruids.Serial());
            return !!Orion.InJournal('You feel more powerful');
        };
        Taming.undressRobe = function () {
            Orion.Unequip('Robe');
            Orion.Wait(1000);
        };
        Taming.trainOnAnimal = function (animalSerial) {
            Scripts.Utils.log('train on animal serial ' + animalSerial);
            var animal = Orion.FindObject(animalSerial);
            Orion.SetGlobal('tamingCounter', (parseInt(Orion.GetGlobal('tamingCounter'), 10) + 1).toString(10));
            if (parseInt(Orion.GetGlobal('tamingCounter'), 10) > 33) {
                Scripts.Taming.dressRobeOfDruids();
            }
            Orion.ClearJournal();
            if (!Scripts.Taming.useTrainingTamingStaff(animalSerial)) {
                return;
            }
            Scripts.Taming.waitOnTaming();
            if (Orion.InJournal('You are not able to tame this animal')) {
                if (Scripts.Taming.dressRobeOfDruids()) {
                    Scripts.Taming.trainOnAnimal(animalSerial);
                }
                return;
            }
            if (Orion.InJournal('Cannot learn anything more') ||
                Orion.InJournal('Not tamable')) {
                Orion.Disarm();
                Orion.Wait(500);
                Scripts.Taming.undressRobe();
                Scripts.Utils.log('kill animal serial ' + animalSerial);
                Orion.CancelWaitTarget();
                Orion.UseObject('0x40337EE9');
                while (animal && !animal.Dead()) {
                    Orion.Wait(500);
                    Orion.WalkTo(animal.X(), animal.Y(), animal.Z(), 0);
                    Orion.Attack(animalSerial);
                    Orion.Wait(2000);
                    animal = Orion.FindObject(animalSerial);
                }
                return;
            }
            if (Orion.InJournal('Your taming failed') ||
                Orion.InJournal('Ochoceni se nezdarilo')) {
                Scripts.Taming.trainOnAnimal(animalSerial);
                return;
            }
            if (Orion.InJournal('Too far')) {
                Orion.Wait(500);
                Orion.WalkTo(animal.X(), animal.Y(), animal.Z(), 0);
                Orion.Wait(2000);
                Scripts.Taming.trainOnAnimal(animalSerial);
                return;
            }
            if (Orion.InJournal('byl tamnut')) {
                Scripts.Taming.undressRobe();
                return true;
            }
        };
        Taming.trainOnAnimalsAround = function () {
            Orion.IgnoreReset();
            Orion.ClearJournal();
            Scripts.Taming.undressRobe();
            var monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "live", 22, "gray");
            while (monstersAround.length) {
                Orion.Ignore(monstersAround[0]);
                Orion.SetGlobal('tamingCounter', '0');
                Scripts.Taming.trainOnAnimal(monstersAround[0]);
                monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "live", 22, "gray");
            }
        };
        return Taming;
    }());
    Scripts.Taming = Taming;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Targeting = (function () {
        function Targeting() {
        }
        return Targeting;
    }());
    Scripts.Targeting = Targeting;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.selectMenu = function (menuName, selections, firstCall) {
            if (firstCall === void 0) { firstCall = true; }
            firstCall && Orion.CancelWaitMenu();
            if (!selections || !selections.length) {
                return;
            }
            Scripts.Utils.worldSaveCheckWait();
            var menuToSelect = selections[0];
            Orion.WaitMenu(menuName, menuToSelect);
            selections.splice(0, 1);
            Scripts.Utils.selectMenu(menuToSelect, selections, false);
        };
        Utils.refill = function (obj, sourceContainerId, quantity, targetContainerId, refillJustWhenIHaveNothing) {
            if (quantity === void 0) { quantity = 1; }
            if (targetContainerId === void 0) { targetContainerId = 'backpack'; }
            if (refillJustWhenIHaveNothing === void 0) { refillJustWhenIHaveNothing = false; }
            var serialsInTargetContainer = Orion.FindType(obj.graphic, obj.color, targetContainerId);
            var serialsInSourceContainer = Orion.FindType(obj.graphic, obj.color, sourceContainerId);
            var itemsInTarget = Scripts.Utils.countObjectInContainer(obj, targetContainerId);
            var itemsInSource = Scripts.Utils.countObjectInContainer(obj, sourceContainerId);
            if (itemsInTarget > quantity) {
                Scripts.Utils.moveItems(serialsInTargetContainer, sourceContainerId, itemsInTarget - quantity);
            }
            else if (itemsInTarget < quantity) {
                if (refillJustWhenIHaveNothing && itemsInTarget) {
                    return true;
                }
                if (!itemsInSource) {
                    Scripts.Utils.log('Nothing to refill', ColorEnum.red);
                    return false;
                }
                Scripts.Utils.moveItems(serialsInSourceContainer, targetContainerId, quantity - itemsInTarget);
            }
            return true;
        };
        Utils.countObjectInContainer = function (obj, container) {
            var serials = Orion.FindType(obj.graphic, obj.color, container);
            return Scripts.Utils.countItemsBySerials(serials);
        };
        Utils.countItemsBySerials = function (itemsSerials) {
            var result = 0;
            for (var _i = 0, itemsSerials_1 = itemsSerials; _i < itemsSerials_1.length; _i++) {
                var item = itemsSerials_1[_i];
                result += Orion.FindObject(item).Count();
            }
            return result;
        };
        Utils.moveItems = function (itemsSerials, targetContainerId, quantity) {
            var needToMove = quantity;
            for (var _i = 0, itemsSerials_2 = itemsSerials; _i < itemsSerials_2.length; _i++) {
                var item = itemsSerials_2[_i];
                var itemCount = Orion.FindObject(item).Count();
                if (needToMove > itemCount) {
                    Orion.MoveItem(item, itemCount, targetContainerId);
                    needToMove -= itemCount;
                }
                else {
                    Orion.MoveItem(item, quantity, targetContainerId);
                    needToMove = 0;
                }
                Orion.Wait(responseDelay);
            }
        };
        Utils.waitWhileSomethingInJournal = function (messages, maximumWait) {
            var w = 200;
            var waitTotal = 0;
            while (!Orion.InJournal(messages.join('|')) || maximumWait !== undefined && waitTotal >= maximumWait) {
                waitTotal += w;
                Orion.Wait(w);
            }
        };
        Utils.worldSaveCheckWait = function () {
            if (Orion.InJournal("World save has been")) {
                Orion.Wait(25000);
                Orion.ClearJournal(undefined, 'sys');
            }
        };
        Utils.log = function (message, color) {
            if (color === void 0) { color = ColorEnum.none; }
            Orion.Print(color, message);
        };
        Utils.playerPrint = function (message, color) {
            if (color === void 0) { color = ColorEnum.none; }
            Orion.CharPrint(Player.Serial(), color, message);
        };
        Utils.waitTarget = function (target) {
            if (target === TargetEnum.lastattack) {
                Orion.WaitTargetObject(Orion.ClientLastAttack());
            }
            else if (target === TargetEnum.self) {
                Orion.WaitTargetObject(Player.Serial());
            }
        };
        Utils.resetTimer = function (timer) {
            Orion.RemoveTimer(timer);
            Orion.SetTimer(timer);
        };
        Utils.waitWhileTargeting = function () {
            while (Orion.HaveTarget()) {
                Orion.Wait(50);
            }
        };
        Utils.movePlayerToDirection = function (direction) {
            Scripts.Utils.worldSaveCheckWait();
            Orion.Turn(direction);
            Orion.Wait(200);
            var success = Orion.Step(direction, false);
            Orion.Wait(415);
            Scripts.Utils.worldSaveCheckWait();
            return success;
        };
        Utils.getSerialsFromMyGameObject = function (type) {
            if (type.color) {
                return Orion.FindType(type.graphic, type.color);
            }
            else {
                return Orion.FindType(type.graphic);
            }
        };
        Utils.findMyDefinitionForGameObject = function (gameObject, obj) {
            var graphic = gameObject.Graphic().toUpperCase();
            var color = gameObject.Color().toUpperCase();
            obj === undefined && (obj = o);
            if (isMyGameObject(obj)) {
                if (obj.graphic.toUpperCase() === graphic &&
                    (!obj.color && color === '0X0000' || obj.color.toUpperCase() === color)) {
                    return obj;
                }
                return;
            }
            var myDefinition;
            for (var key in obj) {
                myDefinition = Scripts.Utils.findMyDefinitionForGameObject(gameObject, obj[key]);
                if (isMyGameObject(myDefinition)) {
                    return myDefinition;
                }
            }
        };
        return Utils;
    }());
    Scripts.Utils = Utils;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Wip = (function () {
        function Wip() {
        }
        Wip.lavaBomba = function () {
            var bomb = o.potions.lavabomb;
            var emptyBottles = o.uncategorized.emptyBottles;
            var bombKad = bomb.kad;
            var emptyBottlesSerials = Orion.FindType(emptyBottles.graphic, emptyBottles.color, 'backpack', 'item', 3, '-1', true);
            if (!emptyBottlesSerials.length) {
                Scripts.Utils.playerPrint('NEMAS PRAZDNE LAHVE', ColorEnum.red);
                return;
            }
            Orion.WarMode(true);
            Orion.WaitTargetObject(emptyBottlesSerials[0]);
            Orion.UseType(bombKad.graphic, bombKad.color);
            Orion.Wait(250);
            Orion.UseType(bomb.graphic);
        };
        Wip.dropItem = function (item) {
            var serials = Orion.FindType(item.graphic, "backpack");
            if (!serials.length) {
                Scripts.Utils.playerPrint('NEMAS ITEM NA DROPNUTI');
            }
            Orion.Drop(serials[0]);
        };
        Wip.Tracking = function (who) {
            if (who === void 0) { who = 'Players'; }
            Orion.CancelWaitMenu();
            Orion.WaitMenu('Tracking', who);
            Orion.UseSkill('Tracking');
        };
        Wip.AttackLastTarget = function () {
            var serial = Orion.GetGlobal('target');
            if (!serial.length)
                return;
            var enemy = Orion.FindObject(serial);
            if (enemy) {
                var notoColor = Scripts.Wip.getColorByNotoriety(enemy.Notoriety());
                Orion.CharPrint('self', notoColor, enemy.Name() + ' [' + enemy.Hits() + '/' + enemy.MaxHits() + ']');
            }
            Orion.Attack(serial);
        };
        Wip.BarPuller = function () {
            Orion.Ignore('self', true);
            var serial = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|human ', '20', 'blue|orange|red|gray|criminal');
            for (var i = 0; i < serial.length; ++i) {
                if (i >= 10)
                    break;
                Orion.ShowStatusbar(serial[i], 1420, 280 + (40 * i));
                Orion.Wait(50);
            }
            Orion.Ignore('self', false);
        };
        Wip.BarPuller_PvP = function () {
            var noto = Player.Notoriety();
            Orion.Ignore('self', true);
            var serial;
            if (noto) {
                serial = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|ignorefriends|human ', '20', 'blue|orange|red|gray|criminal');
            }
            else {
                serial = Orion.FindType('0xFFFF', '0xFFFF', 'ground', 'mobile|ignorefriends|human ', '20', 'orange|red|gray|criminal');
            }
            for (var i = 0; i < serial.length; ++i) {
                if (i >= 10)
                    break;
                Orion.ShowStatusbar(serial[i], 1185, 680 - (60 * i));
                Orion.Print(serial[i], ColorEnum.none);
                Orion.Wait(100);
            }
            Orion.Ignore('self', false);
        };
        Wip.EnsureWarMode = function () {
            var wm = Player.WarMode();
            if (!wm) {
                Orion.WarMode(true);
            }
        };
        Wip.Travel = function () {
            var travel = o.books.travel;
            var travelSerials = Orion.FindType(travel.graphic, travel.color);
            if (!travelSerials.length) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK', ColorEnum.red);
            }
            Orion.UseObject(travelSerials[0]);
            if (Orion.WaitForGump(1000)) {
                var gump0 = Orion.GetLastGump();
                if (gump0 !== null) {
                    gump0.Select(Orion.CreateGumpHook(4));
                    if (Orion.WaitForGump(1000)) {
                        var gump1 = Orion.GetLastGump();
                        gump1.Select(Orion.CreateGumpHook(1));
                    }
                }
            }
        };
        Wip.Nbruna = function () {
            var nbRuna = o.nonCategorized.nbRuna;
            var nbRunesSerials = Orion.FindType(nbRuna.graphic, nbRuna.color);
            if (!nbRunesSerials.length) {
                Scripts.Utils.log('NEMAS NB RUNU', ColorEnum.red);
            }
            Orion.UseObject(nbRunesSerials[0]);
            if (Orion.WaitForGump(1000)) {
                var gump0 = Orion.GetLastGump();
                if (gump0 !== null) {
                    gump0.Select(Orion.CreateGumpHook(1));
                }
            }
        };
        Wip.Afk = function () {
            var Msg = "You see:";
            while (!Player.Dead()) {
                if (Orion.InJournal(Msg, 'Sys/system')) {
                    Orion.ClearJournal(Msg);
                    Orion.PlayWav('C:/afk.wav');
                }
            }
        };
        Wip.MassMove = function () {
            Scripts.Utils.log('MASSMOVE What?', ColorEnum.none);
            Orion.AddObject('whatToMove');
            Scripts.Utils.waitWhileTargeting();
            var item = Orion.GetSerial('whatToMove');
            var itemObject = Orion.FindObject(item);
            var graphic = itemObject.Graphic();
            var color = itemObject.Color();
            var container = itemObject.Container();
            var myDefinition = Scripts.Utils.findMyDefinitionForGameObject(itemObject);
            var destinationX = (myDefinition === null || myDefinition === void 0 ? void 0 : myDefinition.bag) ? myDefinition.bag.x : itemObject.X();
            var destinationY = (myDefinition === null || myDefinition === void 0 ? void 0 : myDefinition.bag) ? myDefinition.bag.y : itemObject.Y();
            Scripts.Utils.log('Where?', ColorEnum.none);
            Orion.AddObject('whereToMove');
            Scripts.Utils.waitWhileTargeting();
            var destination = Orion.GetSerial('whereToMove');
            var itemIDArr = Orion.FindType(graphic, color, container, undefined, undefined, undefined, false);
            Scripts.Utils.log(itemIDArr.length.toString(), ColorEnum.none);
            for (var i = 0; i < itemIDArr.length; i++) {
                Orion.MoveItem(itemIDArr[i], 0, destination, destinationX, destinationY);
                destinationX += 3;
                Orion.Wait(300);
            }
        };
        Wip.TargetNext = function () {
            if (Orion.Timer('targetTimer') > 4000) {
                Orion.IgnoreReset();
                Orion.SetGlobal('targets', '[]');
            }
            Scripts.Utils.resetTimer('targetTimer');
            var target = Orion.FindType("-1", "-1", "ground", "nearest|mobile|ignoreself ", 30);
            if (!target.length) {
                Orion.IgnoreReset();
                Orion.SetGlobal('targets', '[]');
                return;
            }
            var targets = JSON.parse(Orion.GetGlobal('targets')) || [];
            var enemySerial = target[0];
            var enemy = Orion.FindObject(enemySerial);
            if (!enemy) {
                Scripts.Utils.playerPrint('no enemies around', ColorEnum.green);
                return;
            }
            targets.push(enemySerial);
            Orion.Ignore(enemySerial, true);
            Orion.SetGlobal('targets', JSON.stringify(targets));
            var notoColor = Scripts.Wip.getColorByNotoriety(enemy && enemy.Notoriety());
            Orion.CloseStatusbar(Orion.GetGlobal('target'));
            Orion.CharPrint(enemySerial, notoColor, enemy.Name() + ': ' + enemy.Hits() + '/' + enemy.MaxHits());
            Orion.SetGlobal('target', enemySerial);
            Orion.ShowStatusbar(enemySerial, 350, 150);
        };
        Wip.TargetPrevious = function () {
            if (Orion.Timer('targetTimer') > 4000) {
                Orion.IgnoreReset();
                Orion.SetGlobal('targets', '[]');
            }
            Scripts.Utils.resetTimer('targetTimer');
            var currentTarget = Orion.GetGlobal('target');
            var targetsFinded = JSON.parse(Orion.GetGlobal('targets')) || [];
            var indexOfPrevious = targetsFinded.indexOf(currentTarget) - 1;
            if (indexOfPrevious >= 0) {
                var enemySerial = targetsFinded[indexOfPrevious];
                var enemy = Orion.FindObject(enemySerial);
                if (!enemy) {
                    Scripts.Utils.playerPrint('previous enemy disappear', ColorEnum.none);
                    targetsFinded.splice(indexOfPrevious, 1);
                    Orion.SetGlobal('targets', JSON.stringify(targetsFinded));
                    return;
                }
                var notoColor = Scripts.Wip.getColorByNotoriety(enemy && enemy.Notoriety());
                Orion.CloseStatusbar(Orion.GetGlobal('target'));
                Orion.CharPrint(enemySerial, notoColor, enemy.Name() + ': ' + enemy.Hits() + '/' + enemy.MaxHits());
                Orion.SetGlobal('target', enemySerial);
                Orion.ShowStatusbar(enemySerial, 350, 150);
            }
            else {
                Scripts.Utils.playerPrint('no previous target', ColorEnum.red);
            }
        };
        Wip.getColorByNotoriety = function (notoriety) {
            var notoColor = 906;
            switch (notoriety) {
                case 1:
                    notoColor = 2119;
                    break;
                case 3:
                    notoColor = 906;
                    break;
                case 6:
                    notoColor = 33;
                    break;
                default:
                    notoColor = 906;
            }
            return notoColor;
        };
        return Wip;
    }());
    Scripts.Wip = Wip;
})(Scripts || (Scripts = {}));
