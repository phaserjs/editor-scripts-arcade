import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
export default class SetBodyEnableActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    enable: boolean;
    execute(...args: any[]): void;
}
