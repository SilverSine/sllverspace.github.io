
var tags = ["JS", "Scratch", "Godot", "Python", "Multiplayer", "2D", "3D", "Simulation", "Creator", "Education", "Platformer", "Speedrun", "Clicker", "None", "Beta"]

var games = {
	"FPS Game": ["FPS Game", "Multiplayer FPS Game", "https://silverspace505.github.io/fps-game/", "images/games/krunker stolen L.jpg", ["JS", "3D", "Multiplayer", "Platformer", "Beta"]],
	"Ecosystem": ["Ecosystem", "Ecosystem Simulator with AI", "https://silverspace505.github.io/ecosystem/", "images/games/ecosystem.png", ["JS", "2D", "Simulation", "Beta"]],
	"The Farlands": ["The Farlands", "Cool Game", "https://silverspace505.github.io/the-farlands/", "images/games/the farlands.png", ["JS", "Creator", "3D", "Multiplayer"]],
	"Life 3": ["Life 3", "3rd Partice Simulation", "https://life-3.silverspace505.repl.co", "images/games/life 3.png", ["JS", "Simulation", "3D"]],
	"SAND": ["SAND", "Made for a digital tech challenge", "https://sand.silverspace505.repl.co", "images/games/sand.png", ["JS", "Simulation", "2D"]],
	"Updaterra": ["Updaterra", "Terraria Clone", "https://updaterra.silver505.repl.co", "images/games/updaterra.png", ["JS", "Multiplayer", "2D", "Creator"]],
	"Life 2": ["Life 2", "2nd Particle Simulation", "https://life-2.silver505.repl.co", "images/games/life 2.png", ["JS", "2D", "Simulation"]],
	"Life": ["Life", "1st Particle Simulation", "https://life.silver505.repl.co", "images/games/life.png", ["JS", "2D", "Simulation"]],
	"Tritag": ["Tritag", "Online Multiplayer Chasy", "https://silverspace.itch.io/tritag", "images/games/tritag.png", ["Godot", "2D", "Multiplayer"]],
	"Jim's Adventure": ["Jim's Adventure", "Adventure Platformer", "https://silverspace.itch.io/jims-adventure", "images/games/jim's adventure 64x40.png", ["Godot", "2D", "Platformer"]],
	"Shark Islands": ["Shark Islands", "Top Down Platformer", "https://gotm.io/silver/shark-islands", "images/games/shark-islands.png", ["Godot", "2D", "Platformer", "Speedrun"]],
	"Powerfall": ["Powerfall", "Action Platformer", "https://gotm.io/silver/powerfall", "images/games/powerfall.webp", ["Godot", "2D", "Platformer", "Speedrun"]],
	"Block Clicker": ["Block Clicker", "Clicker", "https://gotm.io/silver/block-clicker", "images/games/block-clicker.webp", ["Godot", "2D", "Clicker"]],
	"Dodge": ["Dodge", "Action Bullet Hell", "https://gotm.io/silver/dodge", "images/games/dodge.webp", ["Godot", "2D"]],
	"Dasher": ["Dasher", "Action Puzzle Game", "https://gotm.io/silver/dasher", "images/games/dasher.webp", ["Godot", "2D", "Speedrun"]],
	"Flappy Bird": ["Flappy Bird", "A Flappy Bird Clone", "https://gotm.io/silver/flappy-bird", "images/games/flappy-bird.webp", ["Godot", "2D"]],
	"Awesome": ["Awesome", "A Online Multiplayer Terraria Clone", "https://gotm.io/silver/awesome", "images/games/awesome.webp", ["Godot", "2D", "Creator", "Multiplayer"]],
	"The 2 Goblins": ["The 2 Goblins", "Dungeon Adventure", "https://gotm.io/team-sowflux/the-2-goblins", "images/games/the-2-goblins.webp", ["Godot", "2D"]],
	"Bean Island": ["Bean Island", "Evolution Simulator", "https://gotm.io/team-sowflux/bean-island", "images/games/bean-island.webp", ["Godot", "2D", "Simulation"]],
	"Ghost Mansion": ["Ghost Mansion", "Action Platformer", "https://gotm.io/thebois34/ghost-mansion", "images/games/ghost-mansion.webp", ["Godot", "2D", "Platformer", "Speedrun"]],
	"Physics": ["Physics", "Basic physics simulator", "https://scratch.mit.edu/projects/877865021", "images/games/physics.png", ["Scratch", "2D", "Simulation"]],
	"Space Shooter AI": ["Space Shooter AI", "Aimbot vs Space Shooter", "https://scratch.mit.edu/projects/580056584/", "images/games/ai-shooter.PNG", ["Scratch", "2D", "Simulation"]],
	"The Forest Storm": ["The Forest Storm", "Online Multiplayer Platformer", "https://scratch.mit.edu/projects/605599439/", "images/games/the-forest-storm.PNG", ["Scratch", "2D", "Platformer", "Multiplayer"]],
	"Learning AI": ["Learning AI", "Pathfinding AI", "https://scratch.mit.edu/projects/627715911/", "images/games/learning_ai.png", ["Scratch", "2D", "Simulation"]],
	"Bubble Clicker": ["Bubble Clicker", "Clicker", "https://scratch.mit.edu/projects/353838035/", "images/games/bubble_clicker.png", ["Scratch", "2D", "Clicker"]],
	"Terraria": ["Terraria", "A Terraria Clone", "https://scratch.mit.edu/projects/398758509/", "images/games/terraria.png", ["Scratch", "2D", "Creator"]],
	"Spike": ["Spike!", "Action Bullet Hell", "https://scratch.mit.edu/projects/381103171/", "images/games/spike.png", ["Scratch", "2D"]],
	"MINER": ["MINER!!!", "Terraria Clone with no scrolling", "https://scratch.mit.edu/projects/370272157/", "images/games/miner.png", ["Scratch", "2D", "Creator"]],
	"Coins": ["Coins!!!", "Online Multiplayer Idle Clicker", "https://scratch.mit.edu/projects/393503465/", "images/games/coins.png", ["Scratch", "2D", "Multiplayer", "Clicker"]],
	"ADVENTURE": ["ADVENTURE!", "Adventure Platformer", "https://scratch.mit.edu/projects/380389771/", "images/games/adventure.png", ["Scratch", "2D", "Platformer"]],
	"SHAPES": ["SHAPES - Yr8", "Shapes Math Quiz for Yr8 Digitech", "https://replit.com/@SilverSpace505/SHAPES?v=1", "images/games/shapes.PNG", ["Python", "2D", "Education"]],
	"Fractured Fairy Tale": ["Fractured Fairy Tale - Yr8", "English Project for Yr8", "https://gotm.io/silver/fractured-story", "images/games/english-project.webp", ["Godot", "2D", "Education"]],
	"Moses and the Pharoh": ["Moses And the Pharoh - Yr8", "Christain Studies Project for Yr8", "https://gotm.io/silver/moses-and-the-pharaoh", "images/games/moses_and_the_pharoh.webp", ["Godot", "2D", "Platformer", "Education"]],
	"Pyramids of Giza": ["Pyramids Of Giza - Yr7", "Humanities Project for Yr7", "https://scratch.mit.edu/projects/544454543/", "images/games/humanities-project.PNG", ["Scratch", "2D", "Education"]],
	"Battle": ["Battle - Yr7", "Battle Game for Yr7 Digitech", "https://scratch.mit.edu/projects/494113460/", "images/games/battle.PNG", ["Scratch", "2D", "Education", "Platformer"]],
	"School Exhibition Project": ["School Exhibition Project - Yr6", "Year 6 Exhibition Project", "https://scratch.mit.edu/projects/420067150/", "images/games/school_exhibition_project.png", ["Scratch", "2D", "Simulation", "Education"]],
}

function getGames(tags, beta=false) {
	let vGames = Object.keys(games)
	for (let tag of tags) {
		for (let i = 0; i < vGames.length; i++) {
			if (!games[vGames[i]][4].includes(tag)) {
				vGames.splice(i, 1)
				i--
			}
		}
	}
	for (let i = 0; i < vGames.length; i++) {
		if (games[vGames[i]][4].includes("Beta") != beta) {
			vGames.splice(i, 1)
			i--
		}
	}
	return vGames
}