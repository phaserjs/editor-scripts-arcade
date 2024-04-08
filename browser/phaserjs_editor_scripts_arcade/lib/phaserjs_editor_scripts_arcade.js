// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class GetGameObjectFromBodyActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        // this (components)
        const thisActionTargetComp = new ActionTargetComp(this);
        thisActionTargetComp.target = "ARG_1";
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        let result;
        if (obj instanceof Phaser.GameObjects.GameObject) {
            result = obj;
        }
        else if (obj instanceof Phaser.Physics.Arcade.Body) {
            result = obj.gameObject;
        }
        if (result) {
            this.executeChildren(result);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class IfBodyTouchingScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        // elseActions
        const elseActions = new ExecChildrenActionScript(this);
        // thenActions
        const thenActions = new ExecChildrenActionScript(this);
        this.elseActions = elseActions;
        this.thenActions = thenActions;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    elseActions;
    thenActions;
    left = false;
    right = false;
    up = false;
    down = false;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        const { left, right, up, down } = obj.body.touching;
        if (this.left && left
            || this.right && right
            || this.up && up
            || this.down && down) {
            this.thenActions.executeChildren(...args);
        }
        else {
            this.elseActions.executeChildren(...args);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class MakeObjectColliderActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    collideWith;
    overlapOnly = false;
    /* START-USER-CODE */
    execute(...args) {
        if (this.collideWith) {
            const actionObj = this.getActionTargetObject(args);
            const obj1 = this.getCollidingObject(actionObj);
            const obj2 = this.getCollidingObject(this.collideWith);
            if (this.overlapOnly) {
                this.scene.physics.add.overlap(obj1, obj2, this.onCollide, undefined, this);
            }
            else {
                this.scene.physics.add.collider(obj1, obj2, this.onCollide, undefined, this);
            }
        }
    }
    onCollide(obj1, obj2) {
        this.executeChildren(obj1, obj2);
    }
    getCollidingObject(obj) {
        if (obj instanceof Phaser.GameObjects.Container
            || obj instanceof Phaser.GameObjects.Layer) {
            obj = obj.list;
        }
        return obj;
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
class SetBodyEnableActionScript extends ScriptNode {
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

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetVelocityActionScript extends ScriptNode {
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
        const obj = this.getActionTargetObject(args);
        obj.body.setVelocity(this.velocityX, this.velocityY);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetVelocityXActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    velocityX = 0;
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        obj.body.velocity.x = this.velocityX;
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetVelocityYActionScript extends ScriptNode {
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

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class StartFlipWithVelocityAction extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    flipH = false;
    flipV = false;
    facingLeft = false;
    facingTop = false;
    /* START-USER-CODE */
    _flipping = false;
    _targetObject;
    execute(...args) {
        this._targetObject = this.getActionTargetObject(args);
        this._flipping = true;
    }
    update() {
        if (!this._targetObject || !this._flipping || !this._targetObject.body) {
            return;
        }
        const { x, y } = this._targetObject.body.velocity;
        if (this.flipH && x !== 0) {
            if (this.facingLeft) {
                this._targetObject.flipX = x > 0;
            }
            else {
                this._targetObject.flipX = x < 0;
            }
        }
        if (this.flipV && y !== 0) {
            if (this.facingTop) {
                this._targetObject.flipY = y > 0;
            }
            else {
                this._targetObject.flipY = y < 0;
            }
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class StartFollowPointerActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    speed = 60;
    maxTime = 0;
    /* START-USER-CODE */
    _following = false;
    _targetObject;
    execute(...args) {
        this._following = true;
        this._targetObject = this.getActionTargetObject(args);
    }
    update() {
        if (!this._following || !this._targetObject) {
            return;
        }
        const pointer = this.scene.input.activePointer;
        this.scene.physics.moveTo(this._targetObject, pointer.x, pointer.y, this.speed, this.maxTime);
    }
}
/* END OF COMPILED CODE */
// You can write more code here


