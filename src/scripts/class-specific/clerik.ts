/**
 * @internal
 */
namespace Scripts {
    export class Clerik {
        static bishopToggle() {
            const helm = Orion.FindObject('bishopToggleHelm');
            const bishopHelm = Scripts.Utils.findFirstType({ graphic: '0x1DB9', color: '0x0BB0' }, 6);

            if (!bishopHelm) {
                Scripts.Utils.playerPrint('nemas Bishopku', ColorEnum.red);
            }

            if (!helm) {
                // plate helm ?
                const helmSerial = Scripts.Utils.findFirstType({ graphic: '0x1412', color: '0xFFFF' }, 6);
                if (!helmSerial) {
                    Scripts.Utils.createGameObjectSelections([
                        {
                            ask: 'Target you primary helmet',
                            addObject: 'bishopToggleHelm',
                        },
                    ]);
                } else {
                    Orion.AddObject('bishopToggleHelm', helmSerial);
                }
            }

            const currentHelm = Orion.ObjAtLayer('Helmet');
            if (!currentHelm) {
                Orion.UseObject(bishopHelm);
            } else if (currentHelm.Serial() === bishopHelm) {
                Orion.UseObject('bishopToggleHelm');
            } else {
                Orion.UseObject(bishopHelm);
            }
        }

        static turboRess(bandageAfterRess = false) {
            const closestGhosts = Orion.FindType(-1, -1, 'ground', 'human|dead|fast', 1);
            if (closestGhosts?.length < 1) {
                return Scripts.Utils.playerPrint('Nevidis zadneho ducha k oziveni');
            }

            Orion.WaitTargetObject(closestGhosts[0]);
            Orion.UseType(gameObject.uncategorized.bandy.graphic);
            Orion.Wait(100);
            if (bandageAfterRess) {
                Orion.WaitTargetObject(closestGhosts[0]);
                Orion.UseType(gameObject.uncategorized.bandy.graphic);
            }
        }

        static turboRessFull() {
            const getBloodyBandageGraphic = () => {
                if (Orion.Count(gameObject.uncategorized.krvavaBanda1.graphic) >= 30) {
                    return gameObject.uncategorized.krvavaBanda1.graphic;
                } else if (Orion.Count(gameObject.uncategorized.krvavaBanda2.graphic) >= 30) {
                    return gameObject.uncategorized.krvavaBanda2.graphic;
                }

                return null;
            };

            const closestGhosts = Orion.FindType(-1, -1, 'ground', 'human|dead|fast', 1);
            if (closestGhosts?.length < 1) {
                return Scripts.Utils.playerPrint('Nevidis zadneho ducha k oziveni');
            }

            const bloodyBandageGraphic = getBloodyBandageGraphic();
            if (bloodyBandageGraphic) {
                Orion.WaitTargetObject(closestGhosts[0]);
                Orion.UseType(bloodyBandageGraphic);
                Orion.Wait(100);
                Orion.WaitTargetObject(closestGhosts[0]);
                Orion.UseType(gameObject.uncategorized.bandy.graphic);
            } else {
                Scripts.Clerik.turboRess(true);
            }
        }

        static KPZPull() {
            Clerik.useKPZ(() => {
                Scripts.Utils.playerPrint(MedicActionsEnum.pull, ColorEnum.green);
                Orion.Cast('Greater Heal');
            });
        }

        static KPZJump() {
            Clerik.useKPZ(() => {
                Scripts.Utils.playerPrint(MedicActionsEnum.jump, ColorEnum.green);
                Orion.Cast('Protection');
            });
        }

        static KPZHpSwitch() {
            Clerik.useKPZ(() => {
                Scripts.Utils.playerPrint(MedicActionsEnum.switchHp, ColorEnum.green);
                Orion.Cast('Reactive Armor');
            });
        }

        static useKPZ(cb: Function): boolean {
            const kpzList = Orion.FindType(gameObject.medic.kpz.graphic, gameObject.medic.kpz.color, 'backpack');
            const kpz = kpzList.length > 0 ? kpzList[0] : null;

            Orion.ClearJournal();

            if (!kpz) {
                Scripts.Utils.playerPrint('Nemas KPZ');
                return false;
            }

            Orion.UseObject(kpz);

            Scripts.Utils.waitWhileSomethingInJournal(
                ['activated KPZ', 't use that yet', 'pouze v dungeon zone'],
                3000,
            );
            if (Orion.InJournal('activated KPZ')) {
                cb();
            }
        }
    }
}
