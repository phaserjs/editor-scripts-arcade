
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ArcadeObjectScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	get arcadeObject(): Phaser.GameObjects.GameObject & { body: Phaser.Physics.Arcade.Body } {

		return this.gameObject as Phaser.GameObjects.GameObject & { body: Phaser.Physics.Arcade.Body };
	}

	get body() {

		return this.arcadeObject.body;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
