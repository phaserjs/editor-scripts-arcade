// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phaserjs/editor-scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class SetBodyEnableActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    enable = false;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.body.setEnable(this.enable);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
