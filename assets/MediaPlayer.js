function MediaPlayer(config) {
	this.media = config.el;
	this.plugins = config.plugins || [];

	this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function () {
	this.plugins.forEach(plugin => {
		plugin.run(this)
	})
}

MediaPlayer.prototype.play = function () {
	this.media.play();
};

MediaPlayer.prototype.pause = function () {
	this.media.pause();
};

MediaPlayer.prototype.tooglePlay = function () {
	if(this.media.paused) {
		this.play()
	} else {
		this.pause();
	}
}

MediaPlayer.prototype.mute = function (state) {
	this.media.muted = state;
}

MediaPlayer.prototype.unmute = function (state) {
	this.media.muted = state;
}

MediaPlayer.prototype.toogleMute = function () {
	if(this.media.muted) {
		this.unmute(!this.media.muted);
	} else {
		this.mute(!this.media.muted);
	}
}

export default MediaPlayer;