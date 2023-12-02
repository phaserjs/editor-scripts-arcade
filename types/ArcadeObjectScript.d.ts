/// <reference types="./matter" />
import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class ArcadeObjectScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    get arcadeObject(): Phaser.GameObjects.GameObject & {
        body: Phaser.Physics.Arcade.Body;
    };
    get body(): Phaser.Physics.Arcade.Body | (MatterJS.BodyType & Phaser.Physics.Arcade.Body) | (Phaser.Physics.Arcade.StaticBody & Phaser.Physics.Arcade.Body);
}
