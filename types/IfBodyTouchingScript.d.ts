import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
import { ExecChildrenActionScript } from "@phaserjs/editor-scripts-core";
export default class IfBodyTouchingScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    elseActions: ExecChildrenActionScript;
    thenActions: ExecChildrenActionScript;
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    execute(...args: any[]): void;
}
