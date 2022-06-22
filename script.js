
console.log("Welcome to Spotify");
let song_number = 0;
let start = false;
let songs = [
    {songName: "Song 1",filePath : "1.mp3" , isliked : false},
    {songName: "Song 2",filePath : "2.mp3" , isliked : false},
    {songName: "Song 3",filePath : "3.mp3" , isliked : false},
    {songName: "Song 4",filePath : "4.mp3" , isliked : false},
    {songName: "Song 5",filePath : "5.mp3" , isliked : false},
    {songName: "Song 6",filePath : "6.mp3" , isliked : false},
    {songName: "Song 7",filePath : "7.mp3" , isliked : false},
]
let play = document.querySelector("#playicon");
let gificon = document.querySelectorAll(".gif");
let curr_song = new Audio("1.mp3");
let song_info = document.querySelector(".songinfo");
let progress = document.querySelector("#progressbar");

curr_song.addEventListener("timeupdate",function () {
   let time = parseInt((curr_song.currentTime/curr_song.duration)*100); 
   progress.value = time;
});

// New Add Event Listener learnt
progress.addEventListener("change",function () {
    curr_song.currentTime = (progress.value*curr_song.duration)/100;
})
let song_list = document.querySelectorAll(".songs");

play.addEventListener("click",function name() {

    if(start == false)
    {
        start = true;
        play.setAttribute("src","16427.png");
        curr_song.play();
        song_info.style.display = "block";
        song_info.innerHTML = "Playing "+ songs[song_number].songName;
        gificon[song_number].style.display = "block";
    }
    else
    {
        start = false;
        play.setAttribute("src","play.png");
        song_info.style.display = "none";
        curr_song.pause();
        gificon[song_number].style.display = "none";
    }
});
// New Add Event Listener learnt
curr_song.addEventListener("timeupdate",function () {
    let time = parseInt((curr_song.currentTime/curr_song.duration)*100); 
    progress.value = time;
 });

for (let i = 0; i < song_list.length; i++) {
    song_list[i].addEventListener("click",function () {
        curr_song.pause();
        gificon[song_number].style.display = "none";
        curr_song = new Audio(songs[i].filePath);
        play.setAttribute("src","16427.png");
        song_number = i;
        start = true;
        gificon[song_number].style.display = "block";

        // New Add Event Listener learnt
        curr_song.addEventListener("timeupdate",function () {
            let time = parseInt((curr_song.currentTime/curr_song.duration)*100); 
            progress.value = time;
         });
        curr_song.play();
        song_info.style.display = "block";
        song_info.innerHTML = "Playing "+ songs[song_number].songName;
    });
}
let back = document.querySelector("#back");
back.addEventListener("click",function () {
        curr_song.pause();
        gificon[song_number].style.display = "none";
        song_number--;
        if(song_number < 0)
        song_number += songs.length;
        song_number %= songs.length;
        curr_song = new Audio(songs[song_number].filePath);
        play.setAttribute("src","16427.png");
        start = true;
        gificon[song_number].style.display = "block";

        // New Add Event Listener learnt
        curr_song.addEventListener("timeupdate",function () {
            let time = parseInt((curr_song.currentTime/curr_song.duration)*100); 
            progress.value = time;
         });
        curr_song.play();
        song_info.style.display = "block";
        song_info.innerHTML = "Playing "+ songs[song_number].songName;
});
let forward = document.querySelector("#forward");
forward.addEventListener("click",function () {
        curr_song.pause();
        gificon[song_number].style.display = "none";
        song_number++;
        song_number %= songs.length;
        curr_song = new Audio(songs[song_number].filePath);
        play.setAttribute("src","16427.png");
        start = true;
        gificon[song_number].style.display = "block";

        // New Add Event Listener learnt
        curr_song.addEventListener("timeupdate",function () {
            let time = parseInt((curr_song.currentTime/curr_song.duration)*100); 
            progress.value = time;
         });
        curr_song.play();
        song_info.style.display = "block";
        song_info.innerHTML = "Playing "+ songs[song_number].songName;
});
let heart =document.querySelectorAll(".heart");

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click",function () {
        if(songs[i].isliked== false)
        {
            heart[i].setAttribute("src","red_heart.png")
            songs[i].isliked = true;
        }
        else
        {
            console.log("Nayan");
            heart[i].setAttribute("src","icons8-heart-with-arrow-50.png")
            songs[i].isliked = false;
        }
    });   
}
