class loading_scene extends Phaser.Scene {

    constructor () {
        super({key:'loading_scene'});
    }
	
	preload() {
		this.socket = io();
		
		this.socket.emit('crpTokenHandshake', window.location.href.split(/[=,&]+/)[2]);
		
		this.socket.on('alreadyLoggedIn', function (message) {
			window.location.href = message;
			return;
		});
		
		this.socket.on('notLoggedIn', function (message) {
			window.history.pushState("object or string", "Clear return params", "/#");
			// TODO: Add more to this functionality like a message about saving progress
			window.onbeforeunload = function () {return false;}
		});
		
		this.load.image('star', 'assets/star_gold.png');
		
		this.load.image("tiles", "assets/spritesheets/45a71fb70eda0e7a608f09bf4a13fd6a.png");
		this.load.image("tiles2", "assets/spritesheets/45a71fb70eda0e7a608f09bf4a13fd6a.png");
		this.load.image("grass2", "assets/spritesheets/grass-tile-3.png");
		this.load.spritesheet("walk_template", "assets/spritesheets/walk_template.png", { frameWidth: 60, frameHeight: 110});
		
		this.load.spritesheet("title_crystal", "assets/spritesheets/crystal-qubodup-ccby3-32-blue.png", { frameWidth: 32, frameHeight: 32});
		this.load.image("title_bg", "assets/spritesheets/parallax-mountain-bg.png");
		this.load.image("start", "assets/spritesheets/start.png");
		this.load.image("start_hover", "assets/spritesheets/start_hover.png");
		this.load.image("settings", "assets/images/gear_image2.png");
		this.load.image("settings_hover", "assets/images/gear_image2_hover.png");
		this.load.image("character_name_textbox", "assets/images/character_name_textbox.png");
		this.load.image("character_name_textbox_focus", "assets/images/character_name_textbox_focus.png");
		this.load.image("character_boarder", "assets/images/character_boarder.png");
		this.load.image("character_boarder_hover", "assets/images/character_boarder_hover.png");
		
		this.load.image("ui_upscaled", "assets/spritesheets/ui_upscaled.png");
		
		this.load.tilemapTiledJSON("map3", "assets/spritesheets/untitled3.json");

		
		this.load.image("grass1", "assets/spritesheets/grassTiles.png");
		this.load.tilemapTiledJSON("mapInfinite", "assets/spritesheets/new.json");
		
		this.load.audio('theme_music', 'assets/audio/music/Soliloquy.mp3');

		this.load.image('checked_checkbox', "assets/images/Checked_checkbox.png");
		this.load.image('unchecked_checkbox', "assets/images/Unchecked_checkbox.png");
		this.load.image('hover_checkbox', "assets/images/hover_checkbox.png");
		this.load.image('track', "assets/images/track.png");
		this.load.image('bar', "assets/images/bar.png");
		this.load.image('bar_hover', "assets/images/bar_hover.png");

		this.load.image('save_settings', "assets/images/save_settings.png");
		this.load.image('save_settings_hover', "assets/images/save_settings_hover.png");

		this.load.image('x_button', "assets/images/X_button.png");

		this.load.image('bullet', "assets/spritesheets/bullet.png");
		this.load.image('bullet2', "assets/spritesheets/bullet2.png");
		this.load.image('bullet3', "assets/spritesheets/bullet3.png");

		//TODO: Use this line to change the cursor when hovering over contexts
		//in the game. Default to a aiming site [X] for shooting direction or
		//a sword icon if attack with weapon is equipped, etc.
		this.input.setDefaultCursor('url(assets/Cursors/cursor.cur), pointer');
		
		let loadingBar = this.add.graphics({
			fillStyle: {
				color: 0xffffff //white
			}
		});
		
		this.load.on("progress", (percent)=>{
			loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
			console.log(percent);
		});
		this.load.on("complete", ()=> {
			console.log("done");
		});
	}
	
    create () {
		console.log("Loading");
		console.log("starting character scene");
		//TODO: get rid of this option and remove nickname submittions on the front page.
		var name = document.getElementById("nickname").value;
		if(name) {
			this.scene.start('game_scene', {socket:this.socket, character_name: name});
		} else {
			this.scene.start('character_scene', {socket:this.socket});
		}
		this.scene.stop('loading_scene');
		console.log("stopped loading scene");
    }
}