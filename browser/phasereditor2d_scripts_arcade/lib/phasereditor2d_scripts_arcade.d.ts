/// <reference types="./matter" />
declare class ArcadeObjectScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    get arcadeObject(): Phaser.GameObjects.GameObject & {
        body: Phaser.Physics.Arcade.Body;
    };
    get body(): Phaser.Physics.Arcade.Body | (MatterJS.BodyType & Phaser.Physics.Arcade.Body) | (Phaser.Physics.Arcade.StaticBody & Phaser.Physics.Arcade.Body);
}

declare class OnWorldBoundsCollideEventScript extends OnEventScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    executeChildren(body: Phaser.Physics.Arcade.Body, up: boolean, down: boolean, left: boolean, right: boolean): void;
}

declare class SetVelocityActionScript extends ArcadeObjectScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityX: number;
    velocityY: number;
    execute(...args: any[]): void;
}

declare class SetVelocityXActionScript extends ArcadeObjectScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityX: number;
    execute(...args: any[]): void;
}

declare class SetVelocityYActionScript extends ArcadeObjectScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    velocityY: number;
    execute(...args: any[]): void;
}


