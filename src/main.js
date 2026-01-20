// Main game logic using Alpine.js
function game() {
  return {
    cubes: 0,
    level: 1,
    cubesPlaced: 0,
    placedCubes: [],
    cubeSize: 30, // Size of each individual cube icon
    cubeSpacing: 32, // Space between cubes
    
    init() {
      // Load saved game state
      this.loadGame();
      
      // Initialize placed cubes array
      this.updatePlacedCubes();
      
      // Auto-save every 10 seconds
      setInterval(() => {
        this.saveGame();
      }, 10000);
    },
    
    clickCube() {
      const cubesNeeded = Math.pow(this.level, 3);
      if (this.cubesPlaced < cubesNeeded) {
        this.cubes++;
        this.cubesPlaced++;
        this.updatePlacedCubes();
        this.checkLevelComplete();
        this.saveGame();
      }
    },
    
    updatePlacedCubes() {
      const cubesNeeded = Math.pow(this.level, 3);
      this.placedCubes = [];
      for (let i = 0; i < cubesNeeded; i++) {
        this.placedCubes.push({
          visible: i < this.cubesPlaced,
          index: i
        });
      }
    },
    
    // Calculate position for a cube at a given index
    getCubePosition(index) {
      const size = this.level;
      // Calculate which layer (z), row (y), and column (x) this cube is in
      const z = Math.floor(index / (size * size));
      const remainder = index % (size * size);
      const y = Math.floor(remainder / size);
      const x = remainder % size;
      
      return { x, y, z };
    },
    
    // Get CSS transform style for a cube at a given index
    getCubeStyle(index) {
      const pos = this.getCubePosition(index);
      const size = this.level;
      
      // Calculate offsets to center the cube structure
      const offset = -(size - 1) * this.cubeSpacing / 2;
      
      const translateX = offset + pos.x * this.cubeSpacing;
      const translateY = offset + pos.y * this.cubeSpacing;
      const translateZ = offset + pos.z * this.cubeSpacing;
      
      // Z-index for proper layering (back layers behind front layers)
      // Higher z positions (closer to camera) get higher z-index
      const zIndex = (size - pos.z) * 1000 + (size - pos.y) * 100 + pos.x;
      
      return {
        transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`,
        zIndex: zIndex
      };
    },
    
    // Style for the cube container - scales based on level
    get cubeContainerStyle() {
      const maxLevelSize = this.level * this.cubeSpacing + 100;
      const size = Math.max(300, Math.min(600, maxLevelSize));
      
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
    },
    
    // Style for the 3D scene
    get cubeSceneStyle() {
      // Rotate slightly to show 3D effect - isometric view
      const rotateX = -20;
      const rotateY = 45;
      
      return {
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d'
      };
    },
    
    formatNumber(num) {
      if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
      if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
      if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
      if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
      return Math.floor(num).toLocaleString();
    },
    
    checkLevelComplete() {
      const cubesNeeded = Math.pow(this.level, 3);
      if (this.cubesPlaced >= cubesNeeded && this.level < 10) {
        // Level complete - advance to next level
        this.level++;
        this.cubesPlaced = 0;
        this.updatePlacedCubes();
      }
    },
    
    saveGame() {
      const gameState = {
        cubes: this.cubes,
        level: this.level,
        cubesPlaced: this.cubesPlaced,
      };
      localStorage.setItem('cube2_save', JSON.stringify(gameState));
    },
    
    loadGame() {
      const saved = localStorage.getItem('cube2_save');
      if (saved) {
        try {
          const gameState = JSON.parse(saved);
          this.cubes = gameState.cubes || 0;
          this.level = gameState.level || 1;
          this.cubesPlaced = gameState.cubesPlaced || 0;
          this.updatePlacedCubes();
        } catch (e) {
          console.error('Failed to load save:', e);
        }
      }
    },
  };
}
