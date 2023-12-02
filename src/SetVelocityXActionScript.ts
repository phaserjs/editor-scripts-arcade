
// You can write more code here

/* START OF COMPILED CODE */

import ArcadeObjectScript from "./ArcadeObjectScript";
import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetVelocityXActionScript extends ArcadeObjectScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public velocityX: number = 0;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		this.body.velocity.x = this.velocityX;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
