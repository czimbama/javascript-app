

function getLyrics(){
    let i = Math.floor(Math.random() * lyrics.length)
    
    let lyricsOut = document.getElementById('lyrics');
    lyricsOut.innerText = lyrics[i].lyrics;

    let artistOut = document.getElementById('artist');
    artistOut.innerText = lyrics[i].artist;


    let songOut = document.getElementById('song');
    songOut.innerText = lyrics[i].song;


    let albumOut = document.getElementById('album');
    albumOut.innerText = lyrics[i].album;

    console.log(lyrics[i]);
}