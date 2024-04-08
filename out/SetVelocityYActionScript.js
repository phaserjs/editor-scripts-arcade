// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phaserjs/editor-scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class SetVelocityYActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    velocityY = 0;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.body.setVelocityY(this.velocityY);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
