---
comments: true
title: Unity Learning - Scavenger's Project
date: 2018-08-29 12:18:31
layout: post
categories: Gaming-Developments
tags: Unity C#
---

# Animations

# player prefab (same for enemy)

 1. empty game object -> player
 2. player sprites (check the tags, layers and sorting layers) -> drag to the created game object to create animation files in 'Animations' folder (create one animator override controller for enemy2)
 3. Add Box Collider 2D (select 'Kinematic' in 'Body Type' to ensure the player sprite is only dominated by animations and scripts, rather than physics) & Rigidbody 2D components

# tiles prefabs

- floors
- walls
- pickups

# Board Manager & Game Manager scripts

# prefab applications on the GameManager object

# making sure that the GameManager object is singleton

# abstract class "MovingObject"

# wall damage controller

# working on player and enemy animations

 1. make "trigger" variables in parameter panel
 2. make 4 transitions
 3. uncheck "Has Exit Time" and set "Transition Duration" to 0 in Settings when "turning" on non-idle animations, setting "Exit Time" to 1 in the other way ("Transition Duration" again to 0)
 4. apply trigger variables when "turning" on non-idle animations

# the player and enemy scripts

# UI elements