console.log("Welcome To Ganna");




// Initialization of variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {SongName : "Let Me Love You" , filePath: "songs/1.mp3" , coverPath: "cover/1.jpg "},
    {SongName : "Rich Kid" , filePath: "songs/2.mp3" , coverPath: "cover/2.jpg "},
    {SongName : "Excuses" , filePath: "songs/3.mp3" , coverPath: "cover/3.jpg "},
    {SongName : "One Dance" , filePath: "songs/4.mp3" , coverPath: "cover/4.jpg "},
    {SongName : "La Da De" , filePath: "songs/5.mp3" , coverPath: "cover/5.jpg "},
    {SongName : "Savage Love" , filePath: "songs/6.mp3" , coverPath: "cover/6.jpg "},
    {SongName : "No Lie" , filePath: "songs/7.mp3" , coverPath: "cover/7.jpg "},

]
songItems.forEach ((element, i) => {
   
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText = songs[i].SongName;
})

//Handle Music
//Handle Play/Pause/Click

masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1 ;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0 ;
    }
})

//Listen Events
audioElement.addEventListener('timeupdate', ()=>{

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        })
    
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
         console.log(e.target);
         makeAllPlays();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play');
         e.target.classList.add('fa-pause');
         audioElement.src = `songs/${songIndex}.mp3`;
         mastersongname.innerText = songs[songIndex-1].SongName ;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        // document.getElementsByClassName('container').style.background=url('1.jpg');
        
    })

})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1 ;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex-1].SongName ;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex = songIndex - 1 ;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex-1].SongName ;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})