const IslocalLogin = JSON.parse(localStorage.getItem("isLogin-MP3"));
// console.log(IslocalLogin);
// const imageUser = document.createElement("img");
let imageUser = "./assets/images/logoPhuc.jpg";
let isLogin = IslocalLogin;
let islogOut = !isLogin;
let isShowNav = true;
// console.log(isLogin);
// console.log(islogOut);
// user account

// user account
const accountUser = [
  {
    title: "Tài Khoản Của Tôi",
    icon: "fa-solid fa-user",
  },
  {
    title: "Nâng cấp VIP",
    icon: "fa-solid fa-ranking-star",
  },
  {
    title: "Mua code VIP",
    icon: "fa-solid fa-star",
  },
  {
    title: "Tải lên",
    icon: "fa-solid fa-arrow-up-from-bracket",
  },
  {
    title: "Đăng Xuất",
    icon: "fa-solid fa-arrow-right-from-bracket",
    other: "mfooter mfirst logout--user",
  },
];

// Settings Data
const settingData = [
  {
    title: "Danh sách chặn",
    iconLeft: `<span class="material-symbols-outlined">block</span>`,
    iconRight: ``,
    other: "",
  },
  {
    title: "Chất lượng nhạc",
    iconLeft: `<span class="material-symbols-outlined">high_quality</span>`,
    iconRight: `<span class="menu__arrow material-symbols-outlined">arrow_forward_ios</span>`,
    other: "",
  },
  {
    title: "Giao diện",
    iconLeft: `<span class="material-symbols-outlined">play_circle</span>`,
    iconRight: `<span class="menu__arrow material-symbols-outlined">arrow_forward_ios</span>`,
    other: "",
  },
  {
    title: "Giới thiệu",
    iconLeft: `<span class="material-symbols-outlined">info</span>`,
    iconRight: ``,
    other: "mfooter mfirst",
  },
  {
    title: "Liên hệ",
    iconLeft: `<span class="material-symbols-outlined">call</span>`,
    iconRight: ``,
    other: "mfooter",
  },
  {
    title: "Quảng cáo",
    iconLeft: `<span class="material-symbols-outlined">event</span>`,
    iconRight: ``,
    other: "mfooter",
  },
  {
    title: "Thỏa thuận sử dụng",
    iconLeft: `<span class="material-symbols-outlined">feed</span>`,
    iconRight: ``,
    other: "mfooter",
  },
  {
    title: "Chính sách bảo mật",
    iconLeft: `<span class="material-symbols-outlined">verified_user</span>`,
    iconRight: ``,
    other: "mfooter",
  },
];

// Header Icons
const headerIcon = {
  iconArrowLeft: `<span class="material-symbols-outlined"> west </span>`,
  iconArrowRight: `<span class="material-symbols-outlined"> east </span>`,
  iconSearch: `<span class="material-symbols-outlined"> search </span>`,
  iconTrend: `<span class="material-symbols-outlined"> trending_up </span>`,
};
// Nav Right Data
const navRightData = [
  {
    isLoginForm: isShowNav,
    title: "",
    class: "nav__theme",
    icon: `<svg width="20" height="20" viewBox="0 0 20 20"><defs><linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%"><stop offset="0%" stop-color="#F81212"></stop><stop offset="100%" stop-color="red"></stop></linearGradient><linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%"><stop offset="0%" stop-color="#00F"></stop><stop offset="100%" stop-color="#0031FF"></stop></linearGradient><linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%"><stop offset="0%" stop-color="#FFA600"></stop><stop offset="100%" stop-color="orange"></stop></linearGradient><linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%"><stop offset="0%" stop-color="#13EFEC"></stop><stop offset="100%" stop-color="#00E8DF"></stop></linearGradient><filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur></filter><filter id="301mo6jeah" width="312.7%" height="312.7%" x="-106.4%" y="-106.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur></filter><filter id="b2zvzgq7fj" width="295%" height="295%" x="-97.5%" y="-97.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur></filter><filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur></filter><path id="qtpqrj1oda" d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"></path><path id="jggzvnjgfc" d="M0 0H20V20H0z"></path><path id="2eiwxjmc7m" d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"></path></defs><g fill="none" fill-rule="evenodd" transform="translate(2 3)"><mask id="tinejqaasb" fill="#fff"><use xlink:href="#qtpqrj1oda"></use></mask><use fill="#FFF" fill-opacity="0" xlink:href="#qtpqrj1oda"></use><g mask="url(#tinejqaasb)"><g transform="translate(-2 -3)"><mask id="uf3ckvfvpf" fill="#fff"><use xlink:href="#jggzvnjgfc"></use></mask><use fill="#D8D8D8" xlink:href="#jggzvnjgfc"></use><circle cx="8.9" cy="6.8" r="9" fill="url(#j32lhg93hd)" filter="url(#4a7imk8mze)" mask="url(#uf3ckvfvpf)"></circle><circle cx="9.3" cy="13.7" r="5.5" fill="url(#hjoavsus6g)" filter="url(#301mo6jeah)" mask="url(#uf3ckvfvpf)"></circle><circle cx="15.9" cy="6.9" r="6" fill="url(#la1y5u3dvi)" filter="url(#b2zvzgq7fj)" mask="url(#uf3ckvfvpf)"></circle><circle cx="16.4" cy="17.7" r="7.5" fill="url(#2dsmrlvdik)" filter="url(#a1wq161tvl)" mask="url(#uf3ckvfvpf)"></circle></g></g><use fill="#FFF" fill-opacity="0.05" xlink:href="#2eiwxjmc7m"></use></g></svg>`,
    component: ``,
  },
  {
    isLoginForm: isShowNav,

    title: "",
    class: "nav__vip",
    icon: `<span class="material-symbols-outlined"> diamond </span>`,
    component: ``,
  },
  // {
  //   title: "",
  //   class: "nav__upload",
  //   icon: `<span class="material-symbols-outlined"> upload </span>`,
  //   component: ``,
  // },
  {
    isLoginForm: isShowNav,

    title: "",
    class: "nav__setting",
    icon: `<span class="material-symbols-outlined"> settings </span>`,
    component: `${SettingsMenu(settingData)}`,
  },
  {
    isLoginForm: isLogin,
    title: "",
    class: "nav__account",
    icon: `<img class="nav__account--logo" src="${imageUser}" alt="">`,
    component: `${AccountUser(accountUser)}`,
  },
  {
    isLoginForm: islogOut,
    title: "",
    class: "nav__account nav__login ",
    icon: `<span>Đăng Nhập</span>`,
    component: ``,
  },
];

// Search Data
const searchData = {
  suggest: [
    "tại sao em ra đi",
    "đông về em ở đâu",
    "Dương Hồng Phúc debut",
    "nhóm nhạc hkt",
    "cách làm giàu bằng mp3",
    "học web có gì vui?",
  ],
  suggestion: [
    {
      title: "Sơn Tùng M-TP",
      text: "Nghệ sĩ • 29Tr quan tâm",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/a/a/b/8aab7a0386dd9c24b90adcc5ef5a7814.jpg",
    },
    {
      title: "Dương Hồng Phúc",
      text: "Ca sĩ • 1Người quan tâm",
      image:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/323774190_865855394708815_5506286141177953306_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CxBM0CkzZdIAX8jJMro&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC98wVGUHNhqrtZPmN1FP2KJdEL1UyjIty0M3E1Ae25DA&oe=6413EAE0",
    },
  ],
};

// Render Header
const headerTag = document.querySelector(".header");
headerTag.innerHTML = Header();
function Header() {
  return `
          <div class="nav-left">
            <button class="arrow__left">
              ${headerIcon.iconArrowLeft}
            </button>
            <button class="arrow__right">
              ${headerIcon.iconArrowRight}
            </button>

            <form class="search">
              <input
                class="search__input"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
              />
              <button class="search__icon">
                ${headerIcon.iconSearch}
              </button>
              <!-- Tippy search -->
              <div class="tippys search__suggest">
                  ${TippySearch(searchData)}
              </div>
            </form>
          </div>

          <div class="nav-right">
              ${navRightData
                .map((obj) => {
                  if (obj.isLoginForm) {
                    return `
                      <button class = '${obj.class}'>
                          ${obj.icon}
                          ${obj.component}

                      </button>
                  `;
                  }

                  //     return `
                  //     <button class = '${obj.class}'>
                  //         ${obj.icon}
                  //         ${obj.component}

                  //     </button>
                  // `;
                })
                .join("")}
          </div>
        `;
}

// render account
function AccountUser(accountUser) {
  return `
  <div class="tippys account__user ">
      ${accountUser
        .map((item) => {
          return `
          <div class="user-item ${item.other}">
            <i class="${item.icon}"> </i>
            <span>${item.title}</span>
          </div>
        `;
        })
        .join("")}
  </div>

  `;
}

// Render Tippy Search
function TippySearch(searchData) {
  return `
            <div class="search__suggest--content">
                <div class="suggest__title">Đề xuất cho bạn</div>
                ${searchData.suggest
                  .map(
                    (str) =>
                      `
                        <div class="suggest__items">
                            <span>${headerIcon.iconTrend}</span>
                            <span>${str}</span>
                        </div>
                        `
                  )
                  .join("")}
                <div class="suggest__suggestion">
                    <div class="suggest__title">Gợi ý kết quả</div>
                    ${searchData.suggestion
                      .map(
                        (obj) =>
                          `
                        <div class="media suggest__items">
                        <div class="media__thumb">
                          <img
                            src="${obj.image}"
                            alt=""
                          />
                        </div>
                        <div class="media__body">
                          <h3>${obj.title}</h3>
                          <p>${obj.text}</p>
                        </div>
                      </div>
                            `
                      )
                      .join("")}
                </div>
            </div>
        `;
}

// Render Settings Menu
function SettingsMenu(settingData) {
  return `
        <div class="tippys settings__menu">
            ${settingData
              .map(
                (obj) =>
                  `
                    <div class="menu__list ${obj.other}">
                        ${obj.iconLeft}
                        <div class="body">${obj.title}</div>
                        ${obj.iconRight}
                    </div>
                    `
              )
              .join("")}
        </div>
        `;
}
