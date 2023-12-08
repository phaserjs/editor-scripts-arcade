# Phaser Editor 2D Arcade Physics Scripts (library)

This project contains a few Phaser Editor 2D scripts for setting Arcade physics to objects.

These script nodes are very basic and may fit on any Phaser Editor 2D project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

This package depends on the following packages:

- `@phasereditor2d/scripts-core`

To install this in your game you have to install dependencies too:

```
npm install @phasereditor2d/scripts-core
npm install @phasereditor2d/scripts-arcade
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phasereditor2d/scripts-core",
        "@phasereditor2d/scripts-arcade",
    ]
}
```

## Installing (vanilla JavaScript)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor 2D files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phasereditor2d_scripts_core.js` file.

## Summary

This library provides a couple of actions and events about the Arcade Physics system in Phaser. As a reminder, an action is executed by an event script or another action.

The events:

* **On World Bounds Collide Event** - Is fired when an object collides with the world bounds.

The actions:

* **Set Velocity Action** - Sets the velocity of the script's game object.
* **Set X Velocity Action** - Sets the velocity's X value to the script's game object.
* **Set Y Velocity Action** - Sets the velocity's Y value to the script's game object.

The base classes:

* **Base Arcade Object Script** - A base class for Arcade-related scripts (prefab variants).

## On World Collide Event

*Class: `OnWorldBoundsCollideEventScript`*

This script listens to the [worldbounds](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Physics.Arcade.Events.WORLD_BOUNDS) event. When the event is fired, it executes the children's scripts.

The event is fired only for objects with the body's [onWorldBounds](https://newdocs.phaser.io/docs/3.70.0/focus/Phaser.Physics.Arcade.Body-onWorldBounds) parameter set to `true`.

You can configure the sides of the world this event listens to, with the **UP**, **DOWN**, **LEFT**, **RIGHT** parameters.

## Set Velocity Action

*Class: `SetVelocityActionScript`*

This action sets the given **X** and **Y** velocity to the game object.

## Set X Velocity Action

*Class: `SetVelocityXActionScript`*

This action sets the given **X** velocity to the game object.

## Set Y Velocity Action

*Class: `SetVelocityXActionScript`*

This action sets the given **X** velocity to the game object.