// src/core/Game.ts

// Importez les types et interfaces nécessaires
import { Story, StoryNode } from "./Story";

// Définition de l'interface pour l'état du jeu, si nécessaire
interface GameState {
  currentNodeId: string;
  // ... autres propriétés pour l'état du jeu
}

class Game {
  private story: Story;
  private currentState: GameState;

  constructor(story: Story) {
    this.story = story;
    // Initialisez l'état du jeu avec le nœud de départ de l'histoire
    this.currentState = {
      currentNodeId: story.startNodeId,
      // ... initialisation d'autres propriétés de l'état
    };
  }

  // Méthode pour démarrer ou redémarrer le jeu
  public start(): void {
    // Réinitialisez l'état du jeu avec le nœud de départ de l'histoire
    this.currentState = {
      currentNodeId: this.story.startNodeId,
      // ... initialisation d'autres propriétés de l'état
    };

    // Si votre jeu a une logique de démarrage spécifique, ajoutez-la ici
    // Par exemple, déclencher un événement de démarrage, afficher une introduction, etc.

    // Affichez le premier nœud de l'histoire
    const startNode = this.getCurrentNode();
    this.displayNode(startNode);

    // Si vous avez des écouteurs d'événements ou des hooks de démarrage, initialisez-les ici
    // this.setupEventListeners();

    // Enregistrez que le jeu a commencé
    console.log("Game has started. Current node:", startNode);
  }

  private displayNode(node: StoryNode): void {
    // Logique pour afficher le nœud de l'histoire dans l'interface utilisateur
    // Cela pourrait être aussi simple qu'un console.log ou aussi complexe que la mise à jour d'un état de composant dans une application React
    console.log(node.text);
    // Affichez les options disponibles pour le nœud actuel, si elles existent
    node.options.forEach((option, index) => {
      console.log(`${index + 1}: ${option.text}`);
    });
  }

  // Méthode pour faire avancer l'histoire
  public choose(optionIndex: number): void {
    // Logique pour gérer le choix du joueur et avancer l'histoire
  }

  // Obtenez le nœud de l'histoire actuel
  public getCurrentNode(): StoryNode {
    // Assurez-vous que le currentNodeId correspond à un nœud valide dans l'histoire
    if (!this.story.nodes[this.currentState.currentNodeId]) {
      throw new Error("Current node is not defined in the story.");
    }

    // Retournez le nœud actuel de l'histoire
    return this.story.nodes[this.currentState.currentNodeId];
  }

  public onNodeChange(newNodeId: string): void {
    // Mettez à jour l'état du jeu avec le nouveau nœud ID
    this.currentState.currentNodeId = newNodeId;

    // Récupérez le nouveau nœud de l'histoire en utilisant le nouvel ID
    const newNode = this.getCurrentNode();

    // Vous pouvez effectuer des actions supplémentaires ici, comme :
    // - Déclencher des événements personnalisés
    // - Enregistrer des statistiques de jeu
    // - Mettre à jour l'interface utilisateur
    // - etc.

    // Par exemple, afficher le nouveau nœud dans la console (ou l'interface utilisateur)
    this.displayNode(newNode);

    // Si vous avez un système d'événements, vous pourriez déclencher un événement 'nodeChange'
    // this.emit('nodeChange', newNode);
  }

  // Sauvegardez l'état du jeu
  public saveGame(): void {
    const gameState = {
      currentNodeId: this.currentState.currentNodeId,
      // Vous pouvez également sauvegarder d'autres états du jeu si nécessaire
    };
    window.localStorage.setItem("gameState", JSON.stringify(gameState));
  }

  public loadGame(): void {
    const gameState = JSON.parse(
      window.localStorage.getItem("gameState") || "{}"
    );
    if (gameState.currentNodeId) {
      this.currentState.currentNodeId = gameState.currentNodeId;
    }
  }

  // ... autres méthodes utiles pour le jeu
}

// Exportez la classe Game pour utilisation dans d'autres modules
export { Game };