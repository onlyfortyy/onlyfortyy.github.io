'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/耶.jpg",
    posterUrl: "./assets/images/耶.jpg",
    title: "第几个100天",
    album: "100天",
    year: "2025-05-20",
    artist: "林俊杰",
    musicPath: "./assets/music/第几个100天.mp3",
  },
  {
    backgroundImage: "./assets/images/表白.jpg",
    posterUrl: "./assets/images/表白.jpg",
    title: "慢慢喜欢你",
    album: "表白啦~ ヾ(≧▽≦*)o",
    year: "2025-02-09",
    artist: "莫文蔚",
    musicPath: "./assets/music/慢慢喜欢你.mp3",
  },
  {
    backgroundImage: "./assets/images/等电梯.jpg",
    posterUrl: "./assets/images/等电梯.jpg",
    title: "暖暖",
    album: "第一个情人节欸~ 🥰",
    year: "2025-02-14",
    artist: "梁静茹",
    musicPath: "./assets/music/暖暖.mp3",
  },
  {
    backgroundImage: "./assets/images/耳环.jpg",
    posterUrl: "./assets/images/耳环.jpg",
    title: "就是爱你",
    album: "亮闪闪的耳环~ 🤩",
    year: "2025-02-20",
    artist: "陶喆",
    musicPath: "./assets/music/就是爱你.mp3",
  },
  {
    backgroundImage: "./assets/images/星星.jpg",
    posterUrl: "./assets/images/星星.jpg",
    title: "多远都要在一起",
    album: "一起看星星 ( ´･･)ﾉ(._.`)",
    year: "2025-02-28",
    artist: "邓紫棋",
    musicPath: "./assets/music/多远都要在一起.mp3",
  },
  {
    backgroundImage: "./assets/images/麻薯.jpg",
    posterUrl: "./assets/images/麻薯.jpg",
    title: "爱，很简单",
    album: "终于吃到糯唧唧~",
    year: "2025-03-04",
    artist: "陶喆",
    musicPath: "./assets/music/爱，很简单.mp3",
  },
  {
    backgroundImage: "./assets/images/房间棒.jpg",
    posterUrl: "./assets/images/房间棒.jpg",
    title: "房间",
    album: "红星桥！快乐老家~ ˃ ᵕ ˂ )✰.ᐟ.ᐟ",
    year: "2025-03-08",
    artist: "刘瑞琦",
    musicPath: "./assets/music/房间.mp3",
  },
  {
    backgroundImage: "./assets/images/牵手.jpg",
    posterUrl: "./assets/images/牵手.jpg",
    title: "小手拉大手",
    album: "嘻嘻",
    year: "2025-03-08",
    artist: "梁静茹",
    musicPath: "./assets/music/小手拉大手.mp3",
  },
  {
    backgroundImage: "./assets/images/路上.jpg",
    posterUrl: "./assets/images/路上.jpg",
    title: "幸福洋果子店",
    album: "去吃炸猪排！",
    year: "2025-04-04",
    artist: "梁静茹",
    musicPath: "./assets/music/幸福洋果子店.mp3",
  },
  {
    backgroundImage: "./assets/images/人民北路.jpg",
    posterUrl: "./assets/images/人民北路.jpg",
    title: "特别的人",
    album: "特别的人 - 人民北路",
    year: "2025-04-18",
    artist: "方大同",
    musicPath: "./assets/music/特别的人.mp3",
  },
  {
    backgroundImage: "./assets/images/美女花花.jpg",
    posterUrl: "./assets/images/美女花花.jpg",
    title: "喜欢你",
    album: "哇！喜欢花花美铝~ MgAl",
    year: "2025-05-05",
    artist: "陈洁仪",
    musicPath: "./assets/music/喜欢你_陈洁仪.mp3",
  },
  {
    backgroundImage: "./assets/images/彭山2.jpg",
    posterUrl: "./assets/images/彭山2.jpg",
    title: "葡萄成熟时",
    album: "在一起就很开心呀 我头发怎么怪怪滴",
    year: "2025-05-09",
    artist: "陈奕迅",
    musicPath: "./assets/music/葡萄成熟时.mp3",
  },
  {
    backgroundImage: "./assets/images/彭山22.jpg",
    posterUrl: "./assets/images/彭山22.jpg",
    title: "快乐女孩",
    album: "你总说自己不好看,但我觉得真的好乖的",
    year: "要做快乐女孩呀",
    artist: "刘惜君",
    musicPath: "./assets/music/快乐女孩.mp3",
  },
  {
    backgroundImage: "./assets/images/花两次.jpg",
    posterUrl: "./assets/images/花两次.jpg",
    title: "岁月里的花",
    album: "花花的世界~一点点小受挫不要紧的哟",
    year: "2025-02-19",
    artist: "刘惜君",
    musicPath: "./assets/music/岁月里的花.mp3",
  },
  {
    backgroundImage: "./assets/images/花花.jpg",
    posterUrl: "./assets/images/花花.jpg",
    title: "倒带",
    album: "回头看来，时间真的好快呀",
    year: "一定会一直幸福下去滴！！！",
    artist: "蔡依林",
    musicPath: "./assets/music/倒带.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);