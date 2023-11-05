import { useState, useEffect, useCallback } from "react";
import { Game, Story } from "@fableflowjs/core";

// Ce hook utilise la classe Game pour créer une instance de jeu et gérer son état dans un composant React
export function useGame(story: Story) {
  // Créez une instance de jeu avec l'histoire fournie
  const [game] = useState(new Game(story));

  // Utilisez le State de React pour suivre le nœud actuel
  const [currentNode, setCurrentNode] = useState(game.getCurrentNode());

  // Gérer le choix de l'utilisateur et avancer l'histoire
  const choose = useCallback(
    (optionIndex: number) => {
      game.choose(optionIndex);
      setCurrentNode(game.getCurrentNode());
    },
    [game]
  );

  // Gérer la sauvegarde du jeu
  const saveGame = useCallback(() => {
    game.saveGame();
  }, [game]);

  // Gérer le chargement du jeu
  const loadGame = useCallback(() => {
    game.loadGame();
    setCurrentNode(game.getCurrentNode());
  }, [game]);

  // Effet pour gérer la logique de démarrage du jeu
  useEffect(() => {
    game.start();
    setCurrentNode(game.getCurrentNode());
    // Ajoutez ici toute logique supplémentaire nécessaire lors du démarrage du jeu
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", game.saveGame);

    return () => {
      window.removeEventListener("beforeunload", game.saveGame);
    };
  }, [game]);

  // Retournez l'état actuel du jeu et les fonctions pour interagir avec celui-ci
  return {
    currentNode,
    choose,
    saveGame,
    loadGame,
  };
}
