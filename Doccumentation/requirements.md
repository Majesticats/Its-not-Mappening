# CSCI 265 Requirements and specifications

## Team name: Not Mappening

## Project/product name: 

## Contact person

 - Bruce Fernandes, bruce2005.ind@gmail.com 

# Table of Contents

1. [ Known issues/omissions ](#section1)

2. [ Product overview ](#section2)

3. [ Target audience and motivation ](#section3)

4. [ Product flow, objectives, and plot-line ](#section4)

5. [ Key features, with detailed requirements for each ](#section5)

6. [ interface, screens, and menus ](#section6)

7. [ Feature prioritization ](#section7)

8. [ Non-functional requirements ](#section8)

9. [ Glossary ](#section9)



## 1. <a name="section1"> Known issues/omissions </a>

The entire Idea in essence has completely changed in the course of a single week and so has a few issues, such as the extent to which we actually plan to work on the product itself. It is in simple terms unending. We could work on 5 pages or even 50 pages but ofcourse finding a balance of how much to do within the semester and not neglect other courses or commitments is an issue that can be tough to tackle.

We completely ommitted making a VIU map and decided to make a lore/puzzle/tell tale game which allows you to explore a fantasy land.

## 2. Product Overview <a name="section2"></a>

*Insert name*  is a simple lore website, explore the  caves and find out about the magical and mystical nature of these caves. Find out about the sentient Flora and Fauna, the demons and saints. Go through the caves deeper or higher making your way through to find friends and foes with no real end in sight. Are you trying to venture deep into the cave or find an exit to finally escape, come and find out.

While interacting with the cave you will come across minigames that may include Sudoku, minesweeper, Snake or even riddles. You might find some questions about previously read lore or even fight a big bad boss. You might have some tools to help you in your journey like a journal, calculator or even objects in the world like a pickaxe and dynamite.


## 3. Target audience and motivation <a name="section3"></a>

We target people like us, with the motivation of an escape from the real world into a fun fiction to read and play through. We want to make this for big nerds, people that like DND, Skyrim and other RPGs where you immerse yourself in a new world.

## 4. flow, objectives, and plot-line <a name="section4"></a>

The flow is non-linear where you can choose your path or even retrace your steps to go and find a different path. The journey through the cave with minigames and puzzles, there is no true objective because the whole point is making your own story where you go through the cave to find the secrets and powers that lie within. 

The plot is quite simple with the user going through the cave on their adventure with their aim simply to adventure.

## 5. Key features, with detailed requirements for each <a name="section5"></a>

The features are mentioned in passing earlier such as the minigames, tools and exploration.

### Lore

-	The actual pages with Lore of the Cave will be an important part
-	The Lore will include Flora and Fauna which could include sentient fungi and rocks.
-	The user can make friends on their journey through the entire story
-	The Lore will allow Users to gain tools and interact with minigames


### Minigames

Minigames could include a few or many small games or puzzles that can be done for progression
-	Sudoku in the form of a 9x9 grid like the old school sudoku or maybe smaller as a 4x4 grid to make it easier on the user
-	Minesweeper of various difficulty levels like the regular minesweeper on any computer.
-	Snake much like the old game on the small flip phones with a specific length requirement for the user to proceed.
-	jigsaw puzzles that can be done for progression.
-	Riddles that will test your problem solving skills or even your common sense.
-	Questions of Previous lore to test your memory on how much of the lore you have played

### Tools

These tools can be used to help you in the journey or as an object required to continue exploration.
-	Journal, which is to be a text editor to note down key Lore that the user may want to note down.
-	Calculator to help with any mathematical puzzles or just for any mathematical needs.
-	Tools like a pickaxe or dynamite to open avenues in the caves to explore otherwise blocked places.


## 6. Game interface, screens, and menus <a name="section6"></a>

The lack of images shown for the interfaces, screens, and menus are not intended to be taken as exact literal images of the final game appearance, rather they reflect the required on-screen elements for each component, and the approximate visual appearance and location for each.

### Screen and menu navigation

The discussions below list the collection of available screens a player might navigate through during a typical game, with short descriptions for each.
- Main landing page: the startup screen
- Host game screen: the options/information the host must provide to begin a game
- Join game screen: the options/information players must provide to join a hosted game
- Main gameplay screen: the window the players see during most of the actual game action
- Help screen: provides the player with a variety of topics to investigate further
- Options screen: most options are set by the host prior to starting the game.  In game this provides the player with information on the settings currently in use.
- Game-over screen: summarizes the results for the player and their team after the game ends
- Connection-lost screen: provides the player with options if they have lost their game connection

### Main menu

This is the game startup screen, and provides the user with links to the following key screens:
- Host
- Join
- Options
- Help
- Exit

### Host game screen

This gets the player to enter the options/information necessary to host a game.  Once the settings are determined and the host selects 'Begin' the game will wait for five players to join then will take all six players to their gameplay window.  The relevant settings are as follows:
- Select username
- Select IP
- Select Port
- Help
- Back
- Begin (wait for players)

### Join game screen

This gets the player to enter the options/information players necessary to join a hosted game.  The relevant settings are as follows:
- Select username
- Enter host's IP
- Enter host's Port
- Back
- Begin (waits for connection and other players)


### Help screen 

This lets the player select from a variety of key topics for detailed help information.  The specific areas are as follows:
- Game overview
- Hosting/joining
- Combat and movement
- Experience and upgrades
- Creature catalogue
- Items
- Puzzles
- About us
- Back

*KNOWN OMISSION:* At the moment the detailed text for the help topics has yet to be developed.  This information will be decided in the upcoming phase 3 as part of the user guide/manual development.

### Options screen

This is the screen seen by the host when they select the game options.  It can also be viewed (but the options cannot be changed) by players during the game.  The specific options are as follows:
- friendly fire (on/off, default on): determines if players can shoot/damage each other
- see all/hear all (on/off, default off): determines if players can see and hear everyone (instead of the usual energy-based seeing/hearing rules)
- show player names (on/off, default off): should player's usernames be superimposed on their symbol in-game (this may become a secondary goal)
- Help (takes to help screen)
- Back (takes back to the previous screen)
- Exit game

### Game-over screen

This screen summarizes the results for the player and their team after the game ends, showing the following:
- whether the player's team won or lost
- whether or not the player survived
- the attribute levels and XP levels of each player on each team
- the map zone the player was in at the end of the game

### Connection-lost screen

This screen simply tells the player that their connection has been lost and gives them the option of returning to the main menu or exiting the game.

### Main gameplay screen

This is the window the players see during most of the actual game action, centred on their character within the overall game map (and showing roughly 1/64th of that overall map).  The key elements shown are as follows:
- the player's view of the map takes up the bulk of the screen, as can be seen in the image below
- the player's current/maximum energy bar is shown just below the map (the green portion reflects their current energy, and turns red if their energy drops to the critical level)
- the subtitles section below the health bar provides the text display of any sounds audible to the player
- the player types K to talk, types what they wish to say, and hits enter (the text appears in the text screen segment at the bottom of the window)

The player uses WASD to move around the map, and the spacebar to fire a projectile in the direction they are currently facing.  Hitting ESC during gameplay brings up the Options menu, but *does not* pause the game!

A preliminary representation of the main game screen is shown in the image below.

<a name="maingamescreen"></a>

![Main gameplay screen](combatscreen.png)

### Game map

As shown in the Game Overview section earlier in this document, there is a single large map that is segregated into sections or zones by long walls containing a single gate/gap to the next section.  Within each zone there may be creatures, traps, puzzles and items (some common to all sections, some unique to that particular section).

In the default map (the only map for version 1), the teams start in separate sections while they master the puzzle solving techniques and basic game mechanics.  Once they get through the opening segment they will enter a shared section where team-vs-team combat is an option.

There are seven zones in the initial map, each of which is shown and discussed in detail below.

The specific puzzles are discussed in the 'version 1 puzzles' section above, the items in the 'version 1 items' section above, and the creatures in the 'version 1 creatures' section above.

#### Puzzle Zones 1A and 1B
Puzzle zones 1A and 1B are the starting areas for the two teams, and both teams will exit into combat zone 1 once they finish their respective puzzle zone.  The specific maps, items, and creatures are described later in the document, but the map and content are as follows:
- Zone 1A shown, zone 1B is a mirror image
- the first trio of puzzles are marked P1G, P1T, P1Z (g,t,z denotes energy type)
- the second trio of puzzles are marked P2G, P2T, P2Z
- the exit puzzle pads are marked P3G, P3T, P3Z
- the radiant mounds are marked RG, RT, RZ
- the energy restoration items are marked EG1, EG3, ET1, ET3, etc
- the experience items are marked XP10, XP25, etc

<a name="puzzlezones1"></a>

<img src="puzzlezone1a.jpg" width="600" height="400">

#### Combat Zone 1
Combat zone 1 is entered by each team once they exit their first puzzle zone, and teams will exit this combat zone into their respective second puzzle zone.

The map of the left side (1A) of the zone is depicted below, the right side is a mirror image.

Creatures and items are marked as per puzzle zones 1A/1B.

<a name="combatzone1"></a>

<img src="combatzone1.jpg" width="600" height="400">

#### Puzzle Zones 2A and 2B
Both teams will enter their second respective puzzle zone if/when they survive combat zone 1, and teams will enter combat zone 2 when they leave their puzzle zone 2.

A sketch of the left half of the map (zone 2B) is shown, zone 2A is a mirror image.

The map legend is similar to that of puzzle zone 1, but this time three radiant drifts will be randomly generated within the maze portion (in mirrored positions for the other team).

The location of the three puzzle gates (shortcuts) are marked on the map below.
- There is an error in the placement of the Gamma gate in Puzzle Zone 2B (it should be in the western inside wall in the lower left corner of the map, allowing entry to the passageway immediately above the hall to the Theta shortcut).

<a name="puzzlezones2"></a>

<img src="puzzlezone2b.jpg" width="600" height="400">

#### Combat Zone 2
Teams reach combat zone 2 upon leaving their puzzle zone 2.

The combat zone 2 maps are identical to the combat zone 1's except that the items have been scaled up one level (e.g. EG1->EG3, XP10->XP25, etc) and the Radiant Mounds are replaced with Radiant Drifts.

#### Final Boss Zone
The final boss zone is entered by whichever team first makes it through combat zone 2 (possibly the only team to survive this far).

The sketch below outlines the left/centre of the zone, while the right size is a mirror image of the left side.

The map legend is as per earlier zones, with the addition of ZZZ to denote the energy tsar.

<a name="finalbosszone"></a>

<img src="finalboss.jpg" width="600" height="400">

## 7. Feature prioritization <a name="section7"></a>

As this is our first attempt at game design and development (and a multiplayer game at that!) there is a great deal of uncertainty around what we'll be able to successfully complete.

As a result, we have identified a core set of features we absolutely want to complete, a secondary set that we certainly hope to complete, and a set of stretch goals we can work on if/when everything else is finished.

### Core aspects
The following must all be implemented for us to regard the project as a success:
- support for six human players divided into two teams, where the host provides the players with the necessary information to connect to them (IP and port?)
- the fixed version 1 map with its listed traps, obstacles, creatures, items, and puzzles
- the combat and energy-recovery system as described in the key features section
- the experience and leveling system described for version 1
- if the host drops then the game ends, if another player drops they are 'dead'
- players are randomly assigned to the teams/energy slots

### Secondary features
The following are features we hope to implement, but on an "as time permits" basis:
- a wider variety of maps to select from, with differences in size and difficulty
- a wider variety of puzzles, traps, items, and creatures
- configuration options to turn on/off friendly fire and turn on/off energy based hearing and visibility
- a mechanism for the host to automatically communicate the necessary connection information
- options for the host to impose some form of throttling on update rates to deal with potential networking issues
- filling empty player slots with AI (allowing the game to be played with 1-6 players)
- either the host or the joining player can pick their team/energy slots (first come first served?)

### Stretch goals
The following features are not expected to make it into our initial version of the game, but would be nice to add if things proceed smoothly and ahead of schedule:
- procedurally generated maps
- support for more than two teams and more than two players per team
- allow hosting to switch to another player if the host drops and allow an AI to take over if client player drops
- good AI control of NPCs
- allow the host or joining players to supply avatars/map images
- add more variety/depth to the combat system

## 8. Non-functional requirements <a name="section8"></a>

As this is a multiplayer game, there are some network-related requirements:
- The implementation of the networking/multiplayer components must not render either the host or the clients vulnerable to any security threats (beyond those already inherent in their system).  Satisfying this will require the team to investigate the options for establishing multiplayer connections and the security risks and avoidance techniques for each.
- The implementation of the networking/multiplayer components must not generate an unreasonable level of load on either the client or host network *("unreasonable" is yet to be quantified: the team is investigating how to express loads and what could be considered unreasonable)*
- Ideally the implementation would be capable of preventing or detecting network-based 'cheats' by the host, client, or third parties.  This will require investigation of likely cheating techniques for a game of this nature, and may become a secondary or stretch goal.

Modifiability is going to be a crucial aspect of the design and implementation for this project to be successful.  Many of the numeric values and calculations are simply preliminary guesses, including (but not limited to) things such as:
- player and creature attributes for current/maximum energy levels, replenishment rates, attack and resistance levels
- calculation formulae for energy drains due to combat and projectiles
- experience levels and upgrade costs and benefits
- map layouts (including puzzle and item placement)
It is highly likely that playtesting will show the need to tweak many of these values and calculations, perhaps repeatedly.  As such it is crucial that the design, implementation, and documentation all be carried out in a way that enables easy changes to these values.

## 9. Glossary <a name="section9"></a>

Define any product-specific terms and any terms that are unlikely to be known to the 'average' reader (e.g. a random second-year CS student).

*Known omission:* - the actual glossary content is yet to be determined.

