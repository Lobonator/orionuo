namespace Scripts {
    export class Healing {
        /**
         * @exports
         * Banduje zvoleny target, ukaze timer bandaze oznaci printfastem bandeni target a pokud je potreba vyhodi tercik
         * @param targes - rozsirene targetovani, zleva do prava aliasy targetu odelene '|'
         * @param showTarget - pokud targets nejsou zadany nebo zadny z nich neni nalezen vyhodi tercik. terick na vybrer ceka 4s
         * @param minimalCountToWarn - pokud mate mene nebo rovno bandazi, zobrazi se hlaska s poctem zbyvajicich
         *          *
         */
        static bandageTarget(targes?: string, showTarget = false, minimalCountToWarn = 10) {
            Scripts.TargetingEx.cancelResetTarget();
            const target = Scripts.TargetingEx.getTarget(targes, 5);
            const bandagesSerials = Orion.FindType(gameObject.uncategorized.bandy.graphic);

            const count = Scripts.Utils.countItemsBySerials(bandagesSerials);
            if (!count) {
                Scripts.Utils.playerPrint('[ nemas bandy ]', ColorEnum.red);
                return;
            }
            const bandTimer = config?.bandage?.bandageTimer;
            if (!target.isValid() && (showTarget || !targes)) {
                Orion.RemoveTimer(TimersEnum.bandage);
                Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ band > ? ]');
                const resultObj = Orion.WaitForAddObject('LastBandageChar', 4000);
                if (resultObj === 1) {
                    target.gameObject(Orion.FindObject('LastBandageChar').Serial());
                }
            }

            if (target.isValid()) {
                Orion.AddDisplayTimer(
                    TimersEnum.bandage,
                    bandTimer?.timeout || 2500,
                    bandTimer?.position || 'AboveChar',
                    bandTimer?.type || 'Bar',
                    bandTimer?.text || 'band..',
                    bandTimer?.xFromPosition || 0,
                    bandTimer?.yFromPosition || 100,
                    bandTimer?.textColor || '0x88B',
                    bandTimer?.font || 0,
                    bandTimer?.backgroundColor || '0x88B',
                );

                Scripts.Utils.resetTimer(TimersEnum.bandage);
                target.waitTarget();
                Orion.UseObject(bandagesSerials[0]);
                Orion.PrintFast(target.gameObject().Serial(), ColorEnum.green, 0, 'band..');
            } else {
                Orion.Print(ColorEnum.green, "Zadne zraneni v dosahu {-'-}");
            }

            if (count - 1 <= minimalCountToWarn) {
                Scripts.Utils.playerPrint(
                    `posledni${count > 4 ? 'ch' : ''} ${count} band${count > 4 ? '' : count > 1 ? 'y' : 'a'}`,
                    ColorEnum.red,
                );
            }
        }
    }
}
