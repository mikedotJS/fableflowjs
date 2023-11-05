# @fableflowjs/react

`@fableflowjs/react` is a React-specific implementation of the FableFlowJS framework, providing custom hooks and components to integrate interactive narrative games seamlessly with your React application.

## Features

- React hooks for managing game state in functional components.
- Components for rendering story nodes and options with ease.
- Integration with `@fableflowjs/core` for core game logic.

## Installation

Install `@fableflowjs/react` and its core package using npm:

```bash
npm install @fableflowjs/react @fableflowjs/core
```

## Usage

After installation, use the `useGame` hook in your React component to manage the game state:

```jsx
import React from "react";
import { useGame } from "@fableflowjs/react";
import { Story } from "@fableflowjs/core";

// Define your story
const myStory = new Story({
  startNodeId: "1",
  // ... define nodes
});

const GameComponent = () => {
  const { currentNode, chooseOption } = useGame(myStory);

  return (
    <div>
      <p>{currentNode.text}</p>
      {currentNode.options.map((option, index) => (
        <button key={index} onClick={() => chooseOption(index)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default GameComponent;
```

## API Reference

### Hooks

#### `useGame(story: Story)`

Manages game state within a React component.

- **Parameters:**

  - `story`: An instance of `Story` from `@fableflowjs/core`.

- **Returns:**

  - `currentNode`: The current story node.
  - `chooseOption(index: number)`: Function to select an option and advance the story.

  ## License

  This project is licensed under the MIT License - see the [./LICENSE.md](LICENSE.md) file for details.
