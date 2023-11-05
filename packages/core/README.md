# @fableflowjs/core

This is the core library for FableFlowJS, a framework for building interactive narrative games in JavaScript. It provides the fundamental building blocks to create text-based adventure games similar to the classic "choose your own adventure" stories.

## Features

- Define complex story structures with ease.
- Manage game state transitions.
- Extendable for various frontend frameworks.

## Installation

Install the package with npm:

```bash
npm install @fableflowjs/core
```

## Usage

Here's a quick example to get you started:

```typescript
import { Game, Story } from "@fableflowjs/core";

// Define your story
const story = {
  startNodeId: "1",
  nodes: {
    "1": {
      id: "1",
      text: "You wake up in a mysterious forest. What do you do?",
      options: [
        { text: "Look around", nextNodeId: "2" },
        { text: "Go back to sleep", nextNodeId: "3" },
      ],
    },
    // ... other nodes
  },
};

// Initialize the game with the story
const game = new Game(story);

// Start the game
game.start();

// Handle player choices
game.choose(0); // Assuming the player chooses the first option
```

## API Reference

This section provides detailed information about the core classes and functions available in `@fableflowjs/core`.

### `Game`

The `Game` class is the central controller for the game logic and state management.

#### Constructor

- `constructor(story: Story, language?: string)`
  Initializes a new game with the given story and optional language for internationalization.

#### Methods

- `start(): void`
  Starts or restarts the game, setting the current node to the start node of the story.

- `choose(optionIndex: number): void`
  Makes a choice in the game based on the index of the option in the current node's options array.

- `getCurrentNode(): StoryNode`
  Retrieves the current node in the story based on the game's state.

- `saveGame(): void`
  Saves the current state of the game to local storage or another persistence layer.

- `loadGame(): void`
  Loads the game state from the persistence layer and updates the game's current state.

- `onNodeChange(newNodeId: string): void`
  A hook that is called when the current node changes, which can be used to trigger UI updates or other side effects.

### `Story`

The `Story` class represents the narrative structure of the game.

#### Constructor

- `constructor(nodes: { [id: string]: StoryNode }, startNodeId: string)`
  Creates a new story instance with a dictionary of nodes and the ID of the start node.

#### Properties

- `nodes: { [id: string]: StoryNode }`
  A dictionary of the story's nodes, indexed by their IDs.

- `startNodeId: string`
  The ID of the starting node of the story.

### `StoryNode`

An interface representing a single node (or "page") in the story.

#### Properties

- `id: string`
  The unique identifier for the node.

- `text: string`
  The narrative text of the node.

- `options: StoryOption[]`
  An array of options that the player can choose from at this node.

### `StoryOption`

An interface representing a single option that the player can choose at a story node.

#### Properties

- `text: string`
  The text description of the option.

- `nextNodeId: string`
  The ID of the node that this option leads to.

  ## License

This project is licensed under the MIT License - see the [./LICENSE.md](LICENSE.md) file for details.
