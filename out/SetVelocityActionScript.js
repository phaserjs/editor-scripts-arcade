// You can write more code here
/* START OF COMPILED CODE */
import ArcadeObjectScript from "./ArcadeObjectScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class SetVelocityActionScript extends ArcadeObjectScript {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    velocityX = 0;
    velocityY = 0;
    /* START-USER-CODE */
    execute(...args) {
        this.body.setVelocity(this.velocityX, this.velocityY);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
