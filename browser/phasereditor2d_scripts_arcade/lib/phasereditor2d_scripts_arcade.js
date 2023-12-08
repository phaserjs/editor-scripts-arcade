// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class ArcadeObjectScript extends ScriptNode {
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

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class OnWorldBoundsCollideEventScript extends OnEventScript {
    constructor(parent) {
        super(parent);
        // this (prefab fields)
        this.eventName = Phaser.Physics.Arcade.Events.WORLD_BOUNDS;
        this.eventEmitter = "scene.physics.world";
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    up = true;
    down = true;
    left = true;
    right = true;
    /* START-USER-CODE */
    executeChildren(body, up, down, left, right) {
        if (up && this.up || down && this.down || left && this.left || right && this.right) {
            super.executeChildren(body, up, down, left, right);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetVelocityActionScript extends ArcadeObjectScript {
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

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetVelocityXActionScript extends ArcadeObjectScript {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    velocityX = 0;
    /* START-USER-CODE */
    execute(...args) {
        this.body.velocity.x = this.velocityX;
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetVelocityYActionScript extends ArcadeObjectScript {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    velocityY = 0;
    /* START-USER-CODE */
    execute(...args) {
        this.body.setVelocityY(this.velocityY);
    }
}
/* END OF COMPILED CODE */
// You can write more code here


