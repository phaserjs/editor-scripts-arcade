import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
export default class SetVelocityYActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityY: number;
    execute(...args: any[]): void;
}
