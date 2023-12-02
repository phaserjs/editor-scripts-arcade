// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phasereditor2d/scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class ArcadeObjectScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    get arcadeObject() {
        return this.gameObject;
    }
    get body() {
        return this.arcadeObject.body;
    }
}
/* END OF COMPILED CODE */
// You can write more code here
