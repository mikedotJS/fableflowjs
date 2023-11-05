// src/core/Story.ts

// Définition de l'interface pour une option de nœud de l'histoire
interface StoryOption {
  text: string; // Le texte de l'option affiché au joueur
  nextNodeId: string; // L'ID du nœud suivant dans l'histoire
  // Vous pouvez ajouter d'autres propriétés comme des conditions ou des conséquences ici
}

// Définition de l'interface pour un nœud de l'histoire
interface StoryNode {
  id: string; // L'identifiant unique du nœud
  text: string; // Le texte du nœud affiché au joueur
  options: StoryOption[]; // Les options disponibles pour ce nœud
  // Vous pouvez ajouter d'autres propriétés comme des images, de la musique, etc.
}

// Définition de l'interface pour une histoire complète
interface Story {
  startNodeId: string; // L'ID du nœud de départ de l'histoire
  nodes: { [id: string]: StoryNode }; // Un dictionnaire des nœuds par ID
  // Vous pouvez ajouter d'autres propriétés comme des métadonnées de l'histoire, des auteurs, etc.
}

// Vous pouvez également définir une classe si vous avez besoin de logique supplémentaire pour gérer les histoires
class StoryManager {
  private story: Story;

  constructor(story: Story) {
    this.story = story;
  }

  // Méthode pour obtenir un nœud spécifique par ID
  getNodeById(nodeId: string): StoryNode | undefined {
    return this.story.nodes[nodeId];
  }

  // Méthode pour obtenir le nœud de départ
  getStartNode(): StoryNode {
    const storyNode = this.getNodeById(this.story.startNodeId);

    if (!storyNode) throw new Error("Start node not found");

    return storyNode;
  }

  // Ajoutez ici d'autres méthodes utiles pour gérer votre histoire
}

// Exportez les interfaces et la classe pour utilisation dans d'autres modules
export { StoryOption, StoryNode, Story, StoryManager };
