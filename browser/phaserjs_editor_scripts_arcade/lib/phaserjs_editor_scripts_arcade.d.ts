declare class GetGameObjectFromBodyActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

declare class IfBodyTouchingScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    elseActions: ExecChildrenActionScript;
    thenActions: ExecChildrenActionScript;
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    execute(...args: any[]): void;
}

declare class MakeObjectColliderActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    collideWith: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[];
    overlapOnly: boolean;
    execute(...args: any[]): void;
    private onCollide;
    private getCollidingObject;
}

declare class OnWorldBoundsCollideEventScript extends OnEventScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    executeChildren(body: Phaser.Physics.Arcade.Body, up: boolean, down: boolean, left: boolean, right: boolean): void;
}

declare class SetBodyEnableActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    enable: boolean;
    execute(...args: any[]): void;
}

declare class SetVelocityActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityX: number;
    velocityY: number;
    execute(...args: any[]): void;
}

declare class SetVelocityXActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityX: number;
    execute(...args: any[]): void;
}

declare class SetVelocityYActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityY: number;
    execute(...args: any[]): void;
}

declare class StartFlipWithVelocityAction extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    flipH: boolean;
    flipV: boolean;
    facingLeft: boolean;
    facingTop: boolean;
    private _flipping;
    private _targetObject?;
    execute(...args: any[]): void;
    protected update(): void;
}

declare class StartFollowPointerActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    speed: number;
    maxTime: number;
    private _following;
    private _targetObject?;
    execute(...args: any[]): void;
    protected update(): void;
}


