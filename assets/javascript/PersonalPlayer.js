const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const player = $(".player-music");
const playing = $(".playing__modal");

const personal = $(".personal");

// artist: "Nhiều ca sĩ",

const libraryData = [
  {
    name: "Sơn Tùng M-TP",
    key: "album-sontungmtp",
    background:
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/e/c/39ec11680e2b34f7b58d271d468ae763.jpg",
    listMusic: [
      {
        song: "Lạc Trôi (Masew Mix)",
        artist: "Sơn Tùng M-TP, Masew",
        path: "./assets/music/sontungmtp/Lac-Troi-Masew-Mix-Son-Tung-M-TP-Masew.mp3",
        thumbnail:
          "./assets/music/sontungmtp/images/lac-troi-teasing-artwork-ngang-logo-1481512811.jpg",
      },
      {
        song: "Chạy Ngay Đi",
        artist: "Sơn Tùng M-TP",
        path: "./assets/music/sontungmtp/Chay-Ngay-Di-Son-Tung-M-TP.mp3",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/vi/thumb/8/85/Chay_ngay_di.png/220px-Chay_ngay_di.png",
      },
      {
        song: "Anh Sai Rồi",
        artist: "Sơn Tùng M-TP",
        path: "./assets/music/sontungmtp/Anh-Sai-Roi-Son-Tung-M-TP.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000b273381382d833a3003b43602abb",
      },
      {
        song: "Nắng Ấm Xa Dần (Team Sơn Tùng M-TP - Slim V - DJ",
        artist: "Sơn Tùng M-TP",
        path: "./assets/music/sontungmtp/Nang-Am-Xa-Dan-Team-Son-Tung-M-TP-Slim-V-DJ-Trang-Moon-Son-Tung-M-TP.mp3",
        thumbnail:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/1/e/1e2bdfe6129407f4a061e841b261cb5c_1425293642.jpg",
      },
      {
        song: "Em Của Ngày Hôm Qua (Slim V Remix)",
        artist: "Sơn Tùng M-TP",
        path: "./assets/music/sontungmtp/Em-Cua-Ngay-Hom-Qua-Slim-V-Remix-Son-Tung-M-TP.mp3",
        thumbnail:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/4/a40c3d3ebdb380b907546400905b35a0_1470191137.jpg",
      },
      {
        song: "Chắc Ai Đó Sẽ Về (DJ DSmall Remix)",
        artist: "Sơn Tùng M-TP, DJ DSmall",
        path: "./assets/music/sontungmtp/Chac-Ai-Do-Se-Ve-DJ-DSmall-Remix-Son-Tung-M-TP-DJ-DSmall.mp33",
        thumbnail:
          "https://i1.sndcdn.com/artworks-000158731060-bn1u4e-t500x500.jpg",
      },
    ],
  },
  {
    name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",

    key: "top100nhactree",
    background:
      "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/0/9/5/4/09542fd83e019d4734587f836bc9bbc0.jpg",
    listMusic: [
      {
        song: "Em Là Kẻ Đáng Thương",
        artist: "Phát Huy T4",
        path: "./assets/music/top100nhactre/Em Là Kẻ Đáng Thương.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000b273e6f362e9f1966e14e0056764",
      },
      {
        song: "Ngoài 30",
        artist: "Thái Học",
        path: "./assets/music/top100nhactre/Ngoài 30.mp3",
        thumbnail:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/e/3/4/ce34451501c9e64070402a50f7660c07.jpg",
      },
      {
        song: "Khuất Lối",
        artist: "H-Kray",
        path: "./assets/music/top100nhactre/Khuất Lối.mp3",
        thumbnail:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/a/5/4/0a542ce401be49c5ea47edee1a25dcf1.jpg",
      },
      {
        song: "Đừng Lo Nhé! Có Anh Đây",
        artist: "Thiên Tú",
        path: "./assets/music/top100nhactre/Đừng Lo Nhé! Có Anh Đây.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000b273d02f6f5066b8c014d61755b0",
      },
    ],
  },

  {
    name: "Work Chill",
    artist: "Nhiều ca sĩ",

    key: "album-WorkChill",
    background:
      "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/6/4/6/b/646b5e03b1782df37c097d5ef7f612d1.jpg",
    listMusic: [
      {
        song: "Workin' On It (Acoustic)",
        artist: "Meghan Trainor",
        path: "./assets/music/workChill/Workin.mp3",
        thumbnail:
          "https://i2.wp.com/wiseloaded.com/wp-content/uploads/2020/07/Meghan-Trainor-%E2%80%93-Workin%E2%80%99-on-It-Acoustic.jpg?fit=700%2C699&ssl=1",
      },
      {
        song: "Best Part",
        artist: "Daniel Caesar, H.E.R.",
        path: "./assets/music/workChill/Best Part.mp3",
        thumbnail: "https://i.ytimg.com/vi/vBy7FaapGRo/maxresdefault.jpg",
      },
      {
        song: "Kill Bill (Acoustic)",
        artist: "SZA",
        path: "./assets/music/workChill/Kill Bill (Acoustic).mp3",
        thumbnail: "https://i1.sndcdn.com/artworks-n8uzDjhU8EgB-0-t500x500.jpg",
      },
      {
        song: "at my worst",
        artist: "Creamy, Sølace, 11:11 Music Group",
        path: "./assets/music/workChill/at my worst.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000b273d872030fa341d61b4f4b5a4f",
      },
      {
        song: "Stand by Me (Acoustic Version)",
        artist: "Sarah Menescal",
        path: "./assets/music/workChill/Stand by Me (Acoustic Version).mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000b273edfc755f1232e56b5865bb35",
      },
    ],
  },

  {
    name: "Nhạc trẻ hay nhất mọi thời đại 2022",
    artist: "Nhiều ca sĩ",

    key: "album-nhactre",
    background: "assets/music/nhactre/images/music.jpg",
    listMusic: [
      {
        song: "ANH YÊU VỘI THẾ",
        artist: "LaLa Trần",
        path: "./assets/music/nhactre/AnhYeuVoiThe.mp3",
        thumbnail: "./assets/music/nhactre/images/AnhYeuVoiThe.jpg",
      },
      {
        song: "Hôm Nay Anh Rất Mệt (Acoustic)",
        artist: "Nguyễn Văn Chung, Ngô Thành Dương",
        path: "./assets/music/nhactre/HomNayAnhRatMet.mp3",
        thumbnail: "./assets/music/nhactre/images/HomNayAnhRatMet.jpg",
      },
      {
        song: "Mẹ Em Nhắc Anh",
        artist: "Orange, Hamlet Trương",
        path: "./assets/music/nhactre/MeNhacTenAnh.mp3",
        thumbnail: "./assets/music/nhactre/images/MeNhacTenAnh.jpg",
      },
      {
        song: "Một Người Nhẹ Nhàng Hơn",
        artist: "TRANG và Tiên Tiên",
        path: "./assets/music/nhactre/MotNguoiNheNhangHon.mp3",
        thumbnail: "./assets/music/nhactre/images/MotNguoiNheNhangHon.jpg",
      },
      {
        song: "Thương Em",
        artist: "Châu Khải Phong x Chu Bin x Akira Phan",
        path: "./assets/music/nhactre/ThuongEm.mp3",
        thumbnail: "./assets/music/nhactre/images/ThuongEm.jpg",
      },
      {
        song: "Tình Thương Mến Thương",
        artist: "Trường Sơn, Bảo Chung",
        path: "./assets/music/nhactre/TinhThuongMenThuong.mp3",
        thumbnail: "./assets/music/nhactre/images/TinhThuongMenThuong.jpg",
      },
      {
        song: 'Vai "Ác"',
        artist: "Phạm Quỳnh Anh",
        path: "./assets/music/nhactre/VaiAc.mp3",
        thumbnail: "./assets/music/nhactre/images/VaiAc.jpg",
      },
    ],
  },
  // {
  //   name: "Nhạc Phim Của Báo Thủ!",
  //   key: "album-tiktok",
  //   background:
  //     "https://avatar-ex-swe.nixcdn.com/playlist/share/2021/03/25/8/0/f/8/1616666831528.jpg",
  //   listMusic: [
  //     {
  //       song: "Yêu Giang Sơn Càng Yêu Mỹ Nhân",
  //       artist: "Tiểu A Phong",
  //       path: "./assets/music/tiktok/01.mp3",
  //       thumbnail: "./assets/music/tiktok/images/01.jpg",
  //     },
  //     {
  //       song: "Melody Of The Night - piano",
  //       artist: "Jin Shi",
  //       path: "./assets/music/tiktok/02.mp3",
  //       thumbnail: "./assets/music/tiktok/images/02.jpg",
  //     },
  //     {
  //       song: "Yêu Giang Sơn Càng Yêu Mỹ Nhân",
  //       artist: "Tiểu A Phong",
  //       path: "./assets/music/tiktok/04.mp3",
  //       thumbnail: "./assets/music/tiktok/images/04.jpg",
  //     },
  //     {
  //       song: "Yêu Giang Sơn Càng Yêu Mỹ Nhân",
  //       artist: "Tiểu A Phong",
  //       path: "./assets/music/tiktok/05.mp3",
  //       thumbnail: "./assets/music/tiktok/images/05.jpg",
  //     },
  //     {
  //       song: "Yêu Giang Sơn Càng Yêu Mỹ Nhân",
  //       artist: "Tiểu A Phong",
  //       path: "./assets/music/tiktok/06.mp3",
  //       thumbnail: "./assets/music/tiktok/images/06.jpg",
  //     },
  //     {
  //       song: "Yêu Giang Sơn Càng Yêu Mỹ Nhân",
  //       artist: "Tiểu A Phong",
  //       path: "./assets/music/tiktok/07.mp3",
  //       thumbnail: "./assets/music/tiktok/images/07.jpg",
  //     },
  //   ],
  // },
];

// Render Albums
libraryRender();
function libraryRender() {
  personal.innerHTML = `
    <div class='library active'>
      <div class='library__head'>
            <h3>Thư Viện Nghe Là Nghiện</h3>
      </div>
      <div class='library__body'>
        <div class='library__subtitle'>
            <h5>Đã thêm gần đây</h5>
        </div>
        <div class='library__albums'>
          <div class='albums__parent'>
            ${libraryData
              .map((obj) => {
                if (obj.artist === undefined) {
                  return `
                <div class='albums__child'>
                      <div class='album__image'>
                            <figure style='background-image: url(${obj.background})'></figure>
                      </div>
                      <div class='album__name'>
                            ${obj.name}
                      </div>
                      
                </div>
                `;
                } else {
                  return `
                <div class='albums__child'>
                      <div class='album__image'>
                            <figure style='background-image: url(${obj.background})'></figure>
                      </div>
                      <div class='album__name'>
                            ${obj.name}
                      </div>
                      <div class='album__artist'>
                            ${obj.artist}
                      </div>
                </div>
                `;
                }
              })
              .join("")}
          </div>
        </div>
      </div>
    </div>
    <div class='playlist'>
    </div>
  `;
  $$(".albums__child").forEach((elem, index) => {
    elem.onclick = () => {
      musicApp.start(
        libraryData[index].listMusic,
        libraryData[index].key,
        true
      );

      setTimeout(() => $(".info__audio-current").play());
      zmp3Storage.set("ALBUM_INDEX", index);

      // active playlist, remove active library
      $(".library").classList.remove("active");
      $(".playlist").classList.add("active");
      $(".header").style = "--header-nav-left-display: none";
    };
  });
}

// musicApp

const musicApp = {
  // Variable
  isMouse: false,

  // TrackBarRender
  trackThumbRender(ratio, track) {
    if (track) {
      return `
      border-radius: 4px;
      background: linear-gradient(
        to right,
        var(--progressbar-active-bg) 0%,
        var(--progressbar-active-bg) ${ratio}%,
        var(--progressbar-player-bg) ${ratio}%,
        var(--progressbar-player-bg) 100%
      )`;
    } else {
      return `
        <div class="thumb__bar" 
        style="border-radius: 50%;background-color: var(--progressbar-active-bg);transform: translate(${
          ratio - 6
        }px, -3.5px);"></div>
      `;
    }
  },

  // Player Render
  PlayerRender() {
    player.innerHTML = `
  <div class="player">
    <div class="player__wrapper">
      <div class="player__media">
        <div class="media__image player__image">
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 512 512"
            class="thumb-note note-1"
          >
            <path
              d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
            ></path>
          </svg>
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 384 512"
            class="thumb-note note-2"
          >
            <path
              d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"
            ></path>
          </svg>
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 512 512"
            class="thumb-note note-3"
          >
            <path
              d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
            ></path>
          </svg>
          <svg
            fill="var(--progressbar-active-bg)"
            viewBox="0 0 384 512"
            class="thumb-note note-4"
          >
            <path
              d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"
            ></path>
          </svg>
          <figure class="media__thumbnail"></figure>
        </div>
  
        <div class="media__body">
          <div class="media__info">
            <div class="info__song-wrapper">
              <h3 class="info__song-current"></h3>
            </div>
            <p class="info__artist-current"></p>
            <audio class="info__audio-current" src=""></audio>
          </div>
          <div class="media__option">
            <button>${icon.favorite}</button>
            <button>${icon.more}</button>
          </div>
        </div>
      </div>
  
      <div class="player__control">
        <div class="music__action">
          <button class="btn__shuffle">${icon.shuffle}</button>
          <button class="btn__prev">${icon.skipPrev}</button>
          <button class="btn__play">${icon.playRounded}</button>
          <button class="btn__next">${icon.skipNext}</button>
          <button class="btn__repeat">${icon.repeat}</button>
        </div>
        <div class="music__timeline">
          <div class="time left">00:88</div>
          <div class="timeline__duration">
            <div class="track__wrapper">
              <div class="track__bar duration__track"></div>
              <input
                class="input__duration"
                type="range"
                value="0"
                step="0.000001"
              />
            </div>
          </div>
          <div class="time right">05:33</div>
        </div>
      </div>
  
      <div class="player__subcontrol">
        <button class="btn__movie">${icon.movie}</button>
        <button class="btn__mic">${icon.mic}</button>
        <button class="btn__window">${icon.branding}</button>
        <div class="music__volume">
          <button class="btn__volume">${icon.volumeUp}</button>
          <div class="track__wrapper">
            <div class="track__bar volume__track"></div>
            <input class="input__volume" type="range" value="0" />
          </div>
        </div>
        <div class="music__divide"></div>
        <button class="btn__queue">${icon.queueMusic}</button>
      </div>
      <button class="player__btn-close">
        <span class="player__ic-close"></span>
      </button>
    </div>
  </div>
  
  
          `;

    // Set CurrentTime, durationTrack, durationThumb
    const inputDuration = $(".input__duration");
    const btnPlay = $(".btn__play");

    const durationTrack = $(".duration__track");
    const volumeTrack = $(".volume__track");
    const audio = $(".info__audio-current");
    const btnVolume = $(".btn__volume");
    // Set currentTime to Storage
    const currentTime = zmp3Storage.get(this.keyStorage)?.currentTime;
    currentTime && (audio.currentTime = currentTime);
    // Set volume to Storage
    const volumeCurrent = zmp3Storage.get(this.keyStorage)?.volumeCurrent;
    const volumeMuted = zmp3Storage.get(this.keyStorage)?.volumeMuted;

    const playerBtnClose = $(".player__btn-close");

    if (volumeMuted) {
      audio.muted = volumeMuted;
      volumeTrack.style = this.trackThumbRender(0, true);
      volumeTrack.innerHTML = this.trackThumbRender(0);
      btnVolume.innerHTML = icon.volumeMute;
    } else {
      audio.volume = volumeCurrent ? volumeCurrent : 0.7;
      volumeTrack.style = this.trackThumbRender(audio.volume * 100, true);
      setTimeout(
        () =>
          (volumeTrack.innerHTML = this.trackThumbRender(
            audio.volume * volumeTrack.offsetWidth
          ))
      );
      btnVolume.innerHTML = icon.volumeUp;
    }

    // Window matches mobile 739px
    if (window.matchMedia("(max-width: 740px)").matches) {
      btnPlay.innerHTML = icon.playArrow;
      $(".player__image").classList.add("thumb__mobile");
    } else {
      btnPlay.innerHTML = icon.playRounded;
      $(".player__image").classList.remove("thumb__mobile");
    }

    // Player onclick show nowPlaying
    player.onclick = (e) => {
      if (
        e.target.tagName !== "BUTTON" &&
        e.target.tagName !== "SPAN" &&
        e.target.tagName !== "INPUT"
      ) {
        player.classList.add("now-playing");
        // player.style.backgroundImage = `url(${currentSong.thumbnail})`
        const image = $(".media__thumbnail").querySelector("img");
        player.style.backgroundImage = `url(${image.src}`;
        durationTrack.innerHTML = this.trackThumbRender(
          (audio.currentTime / audio.duration) * durationTrack.offsetWidth
        );
        volumeTrack.innerHTML = this.trackThumbRender(
          audio.volume * volumeTrack.offsetWidth
        );
      }
    };

    // playerBtnClose hide nowPlaying
    playerBtnClose.onclick = () => {
      player.classList.remove("now-playing");
      player.style.backgroundImage = "var(--miniplayer-bg-img-root)";
      durationTrack.innerHTML = this.trackThumbRender(
        (audio.currentTime / audio.duration) * durationTrack.offsetWidth
      );
      volumeTrack.innerHTML = this.trackThumbRender(
        audio.volume * volumeTrack.offsetWidth
      );
    };
  },

  // Playlist Render
  playListRender() {
    $(".playlist").innerHTML = `
        <div class='playlist__back'>
              ${icon.arrowBack}
        </div>
        <div class='playlist__parent'>
            <div class='playlist__slide'>
                <div class='slide__wrapper'>
                    ${this.album
                      .map(
                        (obj) =>
                          `
                          <div class='slide__item fourth'>
                            <figure><img src='${obj.thumbnail}'></figure>
                          </div>
                        `
                      )
                      .join("")}
                </div>
            </div>
            <div class='playlist__body'>
            <div class='playlist__title'>
                <div class=''>Bài hát</div>
                <div class=''>Thời gian</div>
                <div class=''>Tùy chọn</div>
            </div>

                ${this.album
                  .map(
                    (obj) =>
                      `
                      <div class='level playlist__child'>
                            <div class='level__left'>
                                <div class='media__left media__image'>
                                    <figure class='playlist__thumbnail'>
                                      <img src='${obj.thumbnail}'>
                                      <div class='opacity'></div>
                                      <button class='btn__playing'>
                                        ${icon.playArrow}
                                      </button>
                                    </figure>
                                </div>
                                <div class='media__info'>
                                    <div class='info__song'>${obj.song}</div>
                                    <p class='info__artist'>${obj.artist}</p>
                                    <audio class='info__audio' src='${obj.path}'></audio>
                                </div>
                            </div>
                            
                            <div class='level__center'>
                              <span class='info__duration'>03:33</span>
                            </div>
                            <div class='media__option'>
                              <button class="media__option__heart">${icon.favorite}</button>
                              <button class="media__option__more">${icon.more}</button>
                            </div>
                      </div>
                        `
                  )
                  .join("")}
            </div>
        </div>
        `;
    // Load duration playlist
    $$(".info__duration").forEach((elem, index) => {
      $$(".info__audio")[index].onloadedmetadata = () => {
        elem.textContent = this.formatTime($$(".info__audio")[index].duration);
      };
    });

    // playlist__back
    $(".playlist__back").onclick = () => {
      $(".library").classList.add("active");
      $(".playlist").classList.remove("active");
      $(".header").style = "--header-nav-left-display: flex";
    };
  },

  playingRender() {
    playing.innerHTML = `
    <div class="playing__btn-close">
      <span class='playing__btn-close-ic'></span>
    </div>
    `;
    //
    const playingBtnClose = $(".playing__btn-close");
    playingBtnClose.onclick = () => {
      playing.style.top = 100 + "%";
    };
  },

  // AutoRun Slide Item
  autoRunSlide() {
    const slideWrapper = $(".slide__wrapper");
    const slideItems = $$(".slide__item");
    let indexLastItem = slideItems.length - 1;
    let i = 0;

    autoRun();
    let timeId = setInterval(autoRun, 2000);
    function autoRun() {
      let first, second, third, prev;

      first = i;

      second = i + 1;
      second > indexLastItem && (second = 0);

      third = second + 1;
      third > indexLastItem && (third = 0);

      prev = i - 1;
      prev < 0 && (prev = indexLastItem);

      slideItems[first].className = "slide__item first";
      slideItems[second].className = "slide__item second";
      slideItems[third].className = "slide__item third";
      slideItems[prev].className = "slide__item fourth";

      i++;
      i > indexLastItem && (i = 0);
    }

    // clearTimeId onmouseenter
    slideWrapper.onmouseenter = () => clearInterval(timeId);

    // setTimeId onmouseleave
    slideWrapper.onmouseleave = () => (timeId = setInterval(autoRun, 2000));
  },

  // Set Current Song
  curentSong() {
    let currentSong = this.album[this.indexSong];
    $(
      ".player .media__thumbnail"
    ).innerHTML = `<img src='${currentSong.thumbnail}'>`;
    $(
      ".info__song-current"
    ).innerHTML = ` <div>${currentSong.song}</div> <div>${currentSong.song}</div>`;
    $(".info__artist-current").textContent = currentSong.artist;
    $(".info__audio-current").src = currentSong.path;

    // Set Current Song -- Active Current Song
    $$(".playlist__child").forEach((elem, index) => {
      if (index === this.indexSong) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });

    // Set Current Song -- Set btn_playing Playlist
    $$(".btn__playing").forEach((elem) => (elem.innerHTML = icon.playArrow));

    // Set background if class Nowplaying
    $(".player-music.now-playing") &&
      ($(
        ".player-music.now-playing"
      ).style.backgroundImage = `url(${currentSong.thumbnail})`);

    // Set Current Song -- Set Local Storage
    zmp3Storage.set(this.keyStorage, {
      ...zmp3Storage.get(this.keyStorage),
      indexSong: this.indexSong,
      arrShuffle: this.arrShuffle,
    });
  },

  // Check IndexRepeat
  checkIndexRepeat() {
    if (this.indexBtnRepeat === 0) {
      $(".btn__repeat").classList.remove("active");
    } else if (this.indexBtnRepeat === 1) {
      $(".btn__repeat").innerHTML = icon.repeatOne;
      $(".btn__repeat").classList.add("active");
    } else if (this.indexBtnRepeat === 2) {
      $(".btn__repeat").classList.add("active");
    } else {
      $(".btn__repeat").innerHTML = icon.repeat;
    }
  },

  // Check IndexShuffle
  checkIndexShuffle() {
    this.indexBtnShuffle === 0
      ? $(".btn__shuffle").classList.remove("active")
      : $(".btn__shuffle").classList.add("active");
  },

  // Shuffle Song
  shuffleSong() {
    let indexShuffle;
    do {
      indexShuffle = Math.floor(Math.random() * this.album.length);
    } while (this.arrShuffle.includes(indexShuffle));

    this.indexSong = indexShuffle;
    this.arrShuffle.push(indexShuffle);
    this.arrShuffle.length === this.album.length && (this.arrShuffle = []);
  },

  // Format time
  formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    sec < 10 && (sec = "0" + sec);
    min < 10 && (min = "0" + min);
    return `${min}:${sec}`;
  },

  // ListenEvent
  listenEvent() {
    const audio = $(".info__audio-current");

    const btnPlay = $(".btn__play");
    const btnNext = $(".btn__next");
    const btnPrev = $(".btn__prev");
    const btnShuffle = $(".btn__shuffle");
    const btnRepeat = $(".btn__repeat");
    const timeLeft = $(".time.left");
    const durationTrack = $(".duration__track");
    const inputDuration = $(".input__duration");
    const timeRight = $(".time.right");

    const btnMovie = $(".btn__movie");
    const btnMic = $(".btn__mic");
    const btnWindow = $(".btn__window");
    const btnVolume = $(".btn__volume");
    const volumeTrack = $(".volume__track");
    const inputVolume = $(".input__volume");
    const btnQueue = $(".btn__queue");

    const btnsPlaying = $$(".btn__playing");
    const windowMatches739px = window.matchMedia("(max-width: 740px)");

    // ListenEvent -- btnPlay click
    btnPlay.onclick = () => {
      audio && audio.paused ? audio.play() : audio.pause();
    };

    // ListenEvent -- btnNext click
    btnNext.onclick = () => {
      if (this.indexBtnShuffle === 1) {
        this.shuffleSong();
      } else {
        this.indexSong++;
        this.indexSong === this.album.length && (this.indexSong = 0);
      }
      this.curentSong();
      btnPlay.innerHTML === icon.playRounded ||
      btnPlay.innerHTML === icon.playArrow
        ? audio.pause()
        : audio.play();
    };

    // ListenEvent -- btnPrev click
    btnPrev.onclick = () => {
      if (this.indexBtnShuffle === 1) {
        this.shuffleSong();
      } else {
        this.indexSong--;
        this.indexSong < 0 && (this.indexSong = this.album.length - 1);
      }
      this.curentSong();
      btnPlay.innerHTML === icon.playRounded ||
      btnPlay.innerHTML === icon.playArrow
        ? audio.pause()
        : audio.play();
    };

    // ListenEvent -- btnRepeat click
    btnRepeat.onclick = () => {
      this.indexBtnRepeat++;
      this.indexBtnRepeat > 2 && (this.indexBtnRepeat = 0);
      if (this.indexBtnRepeat === 0) {
        btnRepeat.classList.remove("active");
      } else if (this.indexBtnRepeat === 1) {
        btnRepeat.innerHTML = icon.repeatOne;
        btnRepeat.classList.add("active");
      } else {
        btnRepeat.innerHTML = icon.repeat;
      }

      // set localStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        indexBtnRepeat: this.indexBtnRepeat,
      });
    };

    // ListenEvent -- btnShuffle onclick
    btnShuffle.onclick = () => {
      this.indexBtnShuffle === 0
        ? (this.indexBtnShuffle = 1)
        : (this.indexBtnShuffle = 0);
      this.indexBtnShuffle === 0
        ? btnShuffle.classList.remove("active")
        : btnShuffle.classList.add("active");

      // set localStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        indexBtnShuffle: this.indexBtnShuffle,
      });
    };

    // ListenEvent -- btnsPlaying onclick
    btnsPlaying.forEach((elem, index) => {
      elem.onclick = () => {
        if (this.indexSong !== index) {
          this.indexSong = index;
          this.curentSong();
          audio.play();
        } else {
          btnPlay.click();
        }
      };
    });

    // ListenEvent -- Audio Onplay
    audio.onplay = () => {
      btnPlay.innerHTML = icon.pauseRounded;
      btnsPlaying[this.indexSong].innerHTML = icon.iconPlaying;

      // Window matches mobile 739px
      if (window.matchMedia("(max-width: 739px)").matches) {
        btnPlay.innerHTML = icon.pause;
      }
    };
    // ListenEvent -- Audio Onpause
    audio.onpause = () => {
      btnPlay.innerHTML = icon.playRounded;
      btnsPlaying[this.indexSong].innerHTML = icon.playArrow;

      // Window matches mobile 739px
      if (window.matchMedia("(max-width: 739px)").matches) {
        btnPlay.innerHTML = icon.playArrow;
      }
    };

    // ListenEvent -- Audio Onended
    audio.onended = () => {
      if (this.indexBtnRepeat === 1) {
        audio.play();
      } else if (
        this.indexBtnRepeat === 0 &&
        this.indexSong === this.album.length - 1
      ) {
        audio.pause();
      } else {
        btnNext.click();
        audio.paused && audio.play();
      }
    };

    // ListenEvent -- Audio Onloadedmetadata
    audio.onloadedmetadata = () => {
      timeRight.textContent = this.formatTime(audio.duration);
    };

    // ListenEvent -- Audio Timeupdate
    audio.ontimeupdate = () => {
      if (!this.isMouse) {
        let currentTime = audio.currentTime;
        let ratioTime = (currentTime / audio.duration) * 100;
        !ratioTime && (ratioTime = 0);

        timeLeft.textContent = this.formatTime(currentTime);
        durationTrack.style = this.trackThumbRender(ratioTime, true);
        // Audio Timeupdate -- ratioBar

        let ratioBar = (ratioTime / 100) * durationTrack.offsetWidth;
        durationTrack.innerHTML = this.trackThumbRender(ratioBar);
        inputDuration.value = ratioTime;

        // Audio Timeupdate -- setLocalStorage
        zmp3Storage.set(this.keyStorage, {
          ...zmp3Storage.get(this.keyStorage),
          currentTime,
        });
      }

      // audio.paused
      if (audio.paused) {
        player.classList.remove("playing");
      } else {
        player.classList.add("playing");
      }
    };

    // ListenEvent -- inputDuration__Mousedown
    inputDuration.onmousedown = () => {
      this.isMouse = true;
    };

    // ListenEvent -- inputDuration__Oninput
    inputDuration.oninput = (e) => {
      timeLeft.textContent = this.formatTime(
        (e.target.value / 100) * audio.duration
      );
      durationTrack.style = this.trackThumbRender(e.target.value, true);
      // inputDuration -- Ratio Bar
      let ratioBar = (e.target.value / 100) * durationTrack.offsetWidth;
      durationTrack.innerHTML = this.trackThumbRender(ratioBar);
    };

    // ListenEvent -- inputDuration__Onchange
    inputDuration.onchange = (e) => {
      this.isMouse = false;
      audio.currentTime = (e.target.value / 100) * audio.duration;

      // ListenEvent -- inputDuration__setLocalStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        currentTime: audio.currentTime,
      });
    };

    // ListenEvent -- btnVolume onclick
    btnVolume.onclick = () => {
      audio.volume === 0 && (audio.muted = true);
      audio.muted = audio.muted ? (audio.muted = false) : (audio.muted = true);

      if (audio.muted) {
        volumeTrack.style = this.trackThumbRender(0, true);
        volumeTrack.innerHTML = this.trackThumbRender(0);
        btnVolume.innerHTML = icon.volumeMute;
      } else {
        volumeTrack.style = this.trackThumbRender(audio.volume * 100, true);
        volumeTrack.innerHTML = this.trackThumbRender(
          audio.volume * volumeTrack.offsetWidth
        );
        btnVolume.innerHTML = icon.volumeUp;
      }

      // set LocalStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        volumeCurrent: audio.volume,
        volumeMuted: audio.muted,
      });
    };

    // ListenEvent -- inputVolume__Oninput
    inputVolume.oninput = (e) => {
      audio.volume = inputVolume.value / 100;
      audio.volume === 0 ? (audio.muted = true) : (audio.muted = false);

      volumeTrack.style = this.trackThumbRender(e.target.value, true);
      // inputVolume -- Thumb__Bar
      let ratioBar = (e.target.value / 100) * volumeTrack.offsetWidth;
      volumeTrack.innerHTML = this.trackThumbRender(ratioBar);

      audio.volume
        ? (btnVolume.innerHTML = icon.volumeUp)
        : (btnVolume.innerHTML = icon.volumeMute);

      // set LocalStorage
      zmp3Storage.set(this.keyStorage, {
        ...zmp3Storage.get(this.keyStorage),
        volumeCurrent: audio.volume,
        volumeMuted: audio.muted,
      });
    };

    // Window matches mobile 739px
    windowMatches739px.onchange = () => {
      if (windowMatches739px.matches) {
        btnPlay.innerHTML = audio.paused ? icon.playArrow : icon.pause;
      } else {
        btnPlay.innerHTML = audio.paused ? icon.playRounded : icon.pauseRounded;
      }
    };
  },

  //   Start app
  start(album, keyStorage, autoplay) {
    this.album = album;
    this.keyStorage = keyStorage;
    this.indexSong = zmp3Storage.get(keyStorage)?.indexSong || 0;
    this.indexBtnRepeat = zmp3Storage.get(keyStorage)?.indexBtnRepeat || 0;
    this.indexBtnShuffle = zmp3Storage.get(keyStorage)?.indexBtnShuffle || 0;
    this.arrShuffle = zmp3Storage.get(keyStorage)?.arrShuffle || [];
    this.autoplay = autoplay ? (this.autoplay = true) : (this.autoplay = false);

    this.PlayerRender();
    this.playListRender();
    this.playingRender();
    this.curentSong();
    this.listenEvent();
    this.autoRunSlide();
    this.checkIndexRepeat();
    this.checkIndexShuffle();

    // player.style.display = "flex";
    player.classList.add("active");
    $(".sidebar").style.height = "var(--sidebar-height)";
  },
};

// if has key Storage run musicApp
const ALBUM_INDEX = zmp3Storage.get("ALBUM_INDEX");

if (ALBUM_INDEX !== null) {
  musicApp.start(
    libraryData[ALBUM_INDEX].listMusic,
    libraryData[ALBUM_INDEX].key
  );
}
