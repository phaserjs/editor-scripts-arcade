# Phaser Editor Arcade Physics Scripts (library)

This project contains a few Phaser Editor scripts for setting Arcade physics to objects.

These script nodes are very basic and may fit on any Phaser Editor project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

This package depends on the following packages:

- `@phaserjs/editor-scripts-core`

To install this in your game you have to install dependencies too:

```
npm install @phaserjs/editor-scripts-core
npm install @phaserjs/editor-scripts-arcade
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phaserjs/editor-scripts-core",
        "@phaserjs/editor-scripts-arcade",
    ]
}
```

## Installing (vanilla JavaScript)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phaserjs_editor_scripts_arcade.js` file.

## Summary

This library provides a couple of actions and events about the Arcade Physics system in Phaser. As a reminder, an action is executed by an event script or another action.

The events:

* **On World Bounds Collide Event** - Is fired when an object collides with the world bounds.

The actions:

* **Set Velocity Action** - Sets the velocity of the script's game object.
* **Set X Velocity Action** - Sets the velocity's X value to the script's game object.
* **Set Y Velocity Action** - Sets the velocity's Y value to the script's game object.
* **Get GameObject From Body Action** - Gets the game object for the given physics body.
* **Make Object Collider Action** - Creates a physics collider with the game object.
* **Set Body Enable Action** - To enable/disable physics in the game object.
* **Start Flip With Velocity Action** - Starts flipping the game object heading to the velocity vector.
* **Start Follow Pointer Action** - Starts moving the game object toward the pointer position. 
* **If Body Touching** - A conditional action to test if the body touching state.

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

## Get Game Object From Body Action

This action gets the game object from the given body. The body is passed to this action in the first argument, and this action passes, in the first argument, the associated game object to the children. You can combine this action with the **On World Bounds Collide Event** event.

## If Body Touching

This action tests the game object `body.touching` state. If it is touching, it executes the actions of the **Then actions** node, else, it executes the actions of the **Else actions** node.

This action provides the **Left**, **Right**, **Top**, and **Bottom** boolean parameters. If any of these parameters is `true` and the body touching state of the same side is `true`, then we say the object is touching and then execute the **Then actions**.

This action allows the **Action Target** component.

## Make Object Collider Action

This action creates a collider with the game object and the given **Collide With** object. If you check the **Overlap Only** parameter, then it uses an overlap instead of a collide method.

When there is a collision, this action executes the children nodes and passes as argument the collision event arguments.

This action allows the **Action Target** component.

## Set Body Enable Action

This action updates the body's enable state with the **Enable** parameter's value.

This action allows the **Action Target** component.

## Start Flip with Velocity Action

This action starts monitoring the game object velocity vector and change the flip state of the game object.

If the **Flip Horizontal** is on, then it changes the `flipX` property of the object. If the **Flip Vertical** is on, then it changes the `flipY` property of the object.

By default, it assumes the object is facing left and top in its initial position. You can change it with the **Facing Left** and **Facing Right** parameters.

This action allows the **Action Target** component.

## Start Follow Pointer Action

This action starts monitoring the pointer and moves the game object towards the pointer's position.

This action allows the **Action Target** component.