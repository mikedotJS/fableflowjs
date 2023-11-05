# FableFlowJS

Welcome to FableFlowJS, the interactive storytelling JavaScript library that makes it easy to create and manage narrative-driven games similar to the classic "Lifeline" series. With FableFlowJS, you can weave intricate tales with branching paths, all with the ease of JavaScript and the power of modern web technologies.

## Features

- **Easy Story Creation**: Define your story in a structured JSON format and let FableFlowJS handle the rest.
- **Branching Choices**: Create complex story branches with ease, allowing for rich player decision-making.
- **State Management**: Built-in state management to keep track of player choices and story progression.
- **Save/Load System**: Players can save their progress and load it later, ensuring that they can play in multiple sessions.
- **Internationalization Support**: Localize your stories into multiple languages with our i18n support.
- **Framework Agnostic**: Use FableFlowJS with your favorite front-end framework, such as React, Vue, or Angular.
- **React Integration**: Comes with custom React hooks and components for easy integration into React applications.

## Installation

Install FableFlowJS using npm:

```bash
npm install fableflowjs
```

## Usage

Here's a quick start on how to use FableFlowJS:

```javascript
import { Game } from "fableflowjs";

// Define your story
const myStory = {
  startNodeId: "1",
  nodes: {
    1: {
      id: "1",
      text: "You wake up in a mysterious forest...",
      options: [
        { text: "Go north", nextNodeId: "2" },
        { text: "Go south", nextNodeId: "3" },
      ],
    },
    // ... other nodes
  },
};

// Initialize the game with your story
const game = new Game(myStory);

// Start the game
game.start();

// Handle player choices
game.choose(0); // Chooses the first option
```

## The `useGame` Hook

For React developers, FableFlowJS provides a custom hook, `useGame`, to integrate the game logic seamlessly into your React components.

### Features of `useGame`

- **Stateful Game Logic**: `useGame` encapsulates the game state and provides the current node and available options based on player choices.
- **Action Handlers**: The hook exposes functions to handle player actions, such as making choices.
- **Persistence**: Integrated save and load functionality to maintain game state across sessions.

### Using `useGame`

To get started with `useGame`, import it from `fableflowjs/react` and pass your story to it. The hook will return the current state of the game and functions to control the game flow.

Here's a simple example of how to use `useGame`:

```jsx
import React from "react";
import { useGame } from "fableflowjs/react";

const MyGameComponent = () => {
  const { currentNode, choose, saveGame, loadGame } = useGame(myStory, "en");

  // Save the game manually
  const handleSave = () => {
    saveGame();
    console.log("Game saved!");
  };

  // Load the game manually (could also be used in useEffect for component mounting)
  const handleLoad = () => {
    loadGame();
    console.log("Game loaded!");
  };

  return (
    <div>
      <p>{currentNode.text}</p>
      {currentNode.options.map((option, index) => (
        <button key={index} onClick={() => choose(index)}>
          {option.text}
        </button>
      ))}
      <button onClick={handleSave}>Save Game</button>
      <button onClick={handleLoad}>Load Game</button>
    </div>
  );
};
```

In this example, `useGame` provides the `currentNode` object that contains the text and options for the current point in the game. The `choose` function is used to progress the game based on the player's choice. The `saveGame` and `loadGame` functions can be used to manually save and load the game state, which is useful for creating save points or for persisting the game state across sessions.

## Contributing

We welcome contributions to FableFlowJS! If you have a feature request, bug report, or pull request, please feel free to open an issue or submit a PR.

## License

FableFlowJS is open source software licensed as MIT.
