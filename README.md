# Cube2 - Incremental Game

A little incremental game built with Alpine.js and Vite, designed for a game jam.

## 🎮 Game Mechanics

### Core Concept: Building Cubes with Cubes

Cube2 is an incremental game with an inception-style mechanic where you build cubes out of cubes. The game features a 3D visual representation using CSS, creating a satisfying geometric progression.

### Gameplay Loop

1. **Starting State**: The player begins with a single cube in the center of the screen, rendered as a 3D CSS object.

2. **Building Process**: 
   - Each click adds another cube to the structure
   - Cubes are added row by row and column by column
   - The cubes form a larger 3D cube structure

3. **Level Progression**:
   - When a level is completed (all required cubes are added), the entire structure becomes a single cube
   - The player advances to the next level
   - Each level requires exponentially more cubes

### Level Structure

The game progresses through 10 levels, where each level requires you to build a cube of increasing size:

| Level | Cubes Required | Dimensions (n³) |
|-------|----------------|-----------------|
| 1     | 1              | 1³ = 1          |
| 2     | 8              | 2³ = 8          |
| 3     | 27             | 3³ = 27         |
| 4     | 64             | 4³ = 64         |
| 5     | 125            | 5³ = 125        |
| 6     | 216            | 6³ = 216        |
| 7     | 343            | 7³ = 343        |
| 8     | 512            | 8³ = 512        |
| 9     | 729            | 9³ = 729        |
| 10    | 1000           | 10³ = 1000      |

**Pattern**: For level `n`, you need to build an `n×n×n` cube, requiring `n³` individual cubes.

### Visual Design

- **3D Rendering**: All cubes are rendered as 3D objects using CSS transforms
- **Progressive Building**: As you click, cubes appear in a structured pattern (row by row, column by column)
- **Level Transition**: When a level completes, the full cube structure transforms into a single cube for the next level
- **Central Focus**: The cube structure is always centered on the screen, growing larger with each level
- **Minimalism**: The aesthetic is intentioanlly minimal, using iconography and muted colours everywhere


### Inception Mechanics

The "inception" aspect comes from the recursive nature: you're building larger cubes from smaller cubes, and each completed cube becomes the building block for the next level's cube. This creates a sense of building cubes within cubes within cubes.

Later mechanics may play with this structure using interesting upgrades. 

---

No Words theme

As an extra challenge, the game should use little to no words, only symbols and numbers. This means we need to be on point with our UI design. 

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📦 Deployment to GitHub Pages

### Automatic Deployment

The project is configured for GitHub Pages deployment. Make sure to update the `base` path in `vite.config.js` to match your repository name.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will push the `dist` folder to the `gh-pages` branch.

### Setting up GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Select the `gh-pages` branch as the source
4. Save and your site will be available at `https://[username].github.io/cube2/`

---

## 📁 Project Structure

```
cube2/
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.js        # Alpine.js game logic
│   └── style.css      # All styling
└── README.md          # This file
```

---

## 🛠️ Tech Stack

- **Vite**: Fast build tool and dev server
- **Alpine.js**: Lightweight reactive framework
- **CSS**: Custom styling (no frameworks)

---

## 📝 Development Notes

- Game state is saved automatically to localStorage (including current level and cubes placed)
- All game logic is contained in the `game()` function in `src/main.js`
- 3D cubes are rendered using CSS transforms and 3D perspective
- The cube building pattern follows a row-by-row, column-by-column approach
- Maximum level: 10 (requiring 1000 cubes to complete)

---

## 📄 License

This project is created for a game jam.
