import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
export default class SetVelocityXActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityX: number;
    execute(...args: any[]): void;
}
