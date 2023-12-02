import { OnEventScript } from "@phasereditor2d/scripts-core";
import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class OnWorldBoundsCollideEventScript extends OnEventScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    executeChildren(body: Phaser.Physics.Arcade.Body, up: boolean, down: boolean, left: boolean, right: boolean): void;
}
