
class PlayerController {

	constructor(options) {
		this.options = options;
		this.currentClip = {};
		this.parser = new DOMParser();
	}

	playClip(clipOptions) {
		let player = new Player();
		player.playlist = new Playlist();

		this.currentClip.clipUrl = clipOptions.clipUrl;
		this.currentClip.clipId = clipOptions.clipId;

		let mediaItem = new MediaItem('video', clipOptions.clipUrl);
		mediaItem.title = clipOptions.clipTitle;
		mediaItem.artworkImageURL = clipOptions.clipImage;
		player.playlist.push(mediaItem);
		player.play();

	}

}

export {PlayerController};