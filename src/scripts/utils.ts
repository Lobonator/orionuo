namespace Scripts {

    /**
     * Obsahuje pouze pomocne funkce pro ostatni scripty
     */
    export class Utils {

        static selectMenu(menuName:string, selections:string[]) {
            if (!selections || !selections.length) {
                return;
            }

             Scripts.Utils.worldSaveCheckWait();
            const menuToSelect = selections[0];
            Orion.WaitMenu(menuName, menuToSelect);
            selections.splice(0, 1);
            Scripts.Utils.selectMenu(menuToSelect, selections);
        }

        static refill(
            obj:IMyGameObject,
            sourceContainerId:string,
            quantity = 1,
            targetContainerId = 'backpack',
            refillJustWhenIHaveNothing = false
        ):boolean {
            const serialsInTargetContainer = Orion.FindType(obj.graphic, obj.color, targetContainerId);
            const serialsInSourceContainer = Orion.FindType(obj.graphic, obj.color, sourceContainerId);
            const itemsInTarget = Scripts.Utils.countObjectInContainer(obj, targetContainerId)
            const itemsInSource = Scripts.Utils.countObjectInContainer(obj, sourceContainerId)

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
        }

        static countObjectInContainer(obj:IMyGameObject, container:string):number {
            const serials = Orion.FindType(obj.graphic, obj.color, container);
            return Scripts.Utils.countItemsBySerials(serials);
        }

        static countItemsBySerials(itemsSerials:string[]):number {
            let result = 0;
            for (const item of itemsSerials) {
                result += Orion.FindObject(item).Count();
            }
            return result;
        }

        static moveItems(itemsSerials:string[], targetContainerId:string, quantity:number) {
            let needToMove = quantity;
            for (const item of itemsSerials) {
                const itemCount = Orion.FindObject(item).Count();
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
        }

        static waitWhileSomethingInJournal(messages:string[], maximumWait?:number) {
            const w = 200;
            let waitTotal = 0;
            while (!Orion.InJournal(messages.join('|')) || maximumWait !== undefined && waitTotal >= maximumWait) {
                waitTotal += w;
                Orion.Wait(w);
            }
        }

        static worldSaveCheckWait() {
            if (Orion.InJournal("World save has been")) {
                Orion.Wait(25000);
                Orion.ClearJournal(undefined, 'sys');
            }
        }

        static log(message:string, color:ColorEnum = ColorEnum.none) {
            Orion.Print(<string>color, message);
        }

        static playerPrint(message:string, color = ColorEnum.none) {
            Orion.CharPrint(Player.Serial(), color, message);
        }

        static waitTarget(target?:TargetEnum) {
            if (target === TargetEnum.lastattack) {
                Orion.WaitTargetObject(Orion.ClientLastAttack());
            }
            else if (target === TargetEnum.self) {
                Orion.WaitTargetObject(Player.Serial());
            }
        }

        static resetTimer(timer:string) {
            Orion.RemoveTimer(timer);
            Orion.SetTimer(timer);
        }

        static waitWhileTargeting() {
            while (Orion.HaveTarget()) {
                Orion.Wait(50);
            }
        }

        static movePlayerToDirection(direction:DirectionEnum):boolean {
            Scripts.Utils.worldSaveCheckWait();

            Orion.Turn(direction);
            Orion.Wait(200);
            const success = Orion.Step(direction, false);
            Orion.Wait(415);
            Scripts.Utils.worldSaveCheckWait();

            return success;
        }

        static getSerialsFromMyGameObject(type:IMyGameObject):string[] {
            if (type.color) {
                return Orion.FindType(type.graphic, type.color);
            }
            else {
                return Orion.FindType(type.graphic);
            }
        }

        static findMyDefinitionForGameObject(gameObject:GameObject, obj?:any):IMyGameObject|undefined {
            const graphic = gameObject.Graphic().toUpperCase();
            const color = gameObject.Color().toUpperCase();
            obj === undefined && (obj = o);

            if (isMyGameObject(obj)) {
                if (
                    obj.graphic.toUpperCase() === graphic &&
                    (!obj.color && color === '0X0000' || obj.color.toUpperCase() === color)
                ) {
                    return obj;
                }
                return;
            }

            let myDefinition:IMyGameObject|undefined;
            for (const key in obj) {
                myDefinition = Scripts.Utils.findMyDefinitionForGameObject(gameObject, obj[key]);
                if (isMyGameObject(myDefinition)) {
                    return myDefinition;
                }
            }
        }
    }
}
