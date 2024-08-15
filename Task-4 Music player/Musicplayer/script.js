document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const stopButton = document.getElementById('stop-button');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const trackTitle = document.getElementById('track-title');

    // Array of tracks
    const tracks = [
        { title: 'Pure Motivation', src: 'pure-motivation-158726.mp3' },
        { title: 'Energizante Motivation', src: 'energizante-motivation-197455.mp3' }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        if (index >= 0 && index < tracks.length) {
            audioPlayer.src = tracks[index].src;
            trackTitle.textContent = tracks[index].title;
            audioPlayer.play();
        }
    }

    playButton.addEventListener('click', () => {
        audioPlayer.play();
    });

    pauseButton.addEventListener('click', () => {
        audioPlayer.pause();
    });

    stopButton.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
    });

    prevButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
    });

    // Load the initial track
    loadTrack(currentTrackIndex);
});
