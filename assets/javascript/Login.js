const islogin = document.querySelectorAll(".nav__login");
islogin.forEach((item) => {
  if (item) {
    item.addEventListener("click", () => {
      login();
    });
  }
});

const login = () => {
  const layout = document.querySelector(".layout");

  const element = document.createElement("div");
  element.classList.add("login");
  element.innerHTML = `
          <div class="login--close" onclick="handleCloseLogin()">
              <i class="fa-regular fa-circle-xmark"></i>
          </div>
          <div class="login__main">
  
                    <div class="login__register-name">Đăng Nhập</div>
                    <form class="login__register-form" id="form-1" action="">
                      <!-- invalid -->
      
                      <!-- input nhập Email -->
                      <div class="login__form-group">
                        <input
                          id="email"
                          name="email"
                          class="input"
                          type="email"
                          placeholder="Email hoặc tên tài khoản"
                        />
                        <span class="login__form-messenger"></span>
                      </div>
      
                      <!-- input nhập mật khẩu -->
                      <div class="login__form-group">
                        <input
                          id="password"
                          name="password"
                          class="input"
                          type="password"
                          placeholder="Password"
                        />
                        <span class="login__form-messenger"></span>
                      </div>
      
                      <div class="login__form-submit" type="submit" onclick="handleSubmit()">Đăng Nhập</div>
                      </form>
                    <div class="login__register-signup">Not a member? <span class="login__register-sigup " onclick={registerForm()}>Sigup</span></div>
                    <div class="login__open">
                      <h1 class="login__open__text">Đăng nhập thành công...Vui lòng đợi!</h1>
                      <i class="fa-solid fa-spinner login__open__icon"></i>
                    </div>
                  </div>
          <div class="login__Account">
              <span>Đăng Nhập Thành Công!</span>
          </div>
          <div class="login__notAccount">
              <span>Thông tin tài khoảng không chính xác!</span>
              <div class="btn-close">
                  <button onclick="handleCloseError()" class="btn-close-error">Đóng</button>
              </div>
          </div>
          <div class="succes-login"><div>
          `;

  layout.appendChild(element);

  //   handleKeyEnter();
};

const handleCloseLogin = () => {
  const removeLogin = document.querySelector(".login");
  removeLogin.style.animation = "hideLogin 3s ease forwards";
  setTimeout(() => {
    removeLogin.remove();
  }, 1000);
};

// xử lý enter đăng nhập
const handleKeyEnter = () => {
  window.addEventListener("keypress", (e) => {
    // If the user presses the "Enter" key on the keyboard
    const showSuccesLoginActive = document.querySelector(
      ".login__Account.active"
    );

    if (!showSuccesLoginActive) {
      if (e.key === "Enter") {
        // Cancel the default action, if needed
        e.preventDefault();
        const showErrorLogins = document.querySelector(".login__notAccount");
        if (showErrorLogins) {
          showErrorLogins.classList.toggle("active");
        } else {
          handleSubmit();
        }
      }
    } else {
      alert("đăng nhập rồi má, spam ít thôi...");
    }
  });
};

const handleSubmit = (e) => {
  const emailLogin = document.querySelector("#email");
  const passwordLogin = document.querySelector("#password");
  const showErrorLogin = document.querySelector(".login__notAccount");
  const showSuccesLogin = document.querySelector(".login__Account");
  const showSuccesLoginIcon = document.querySelector(".succes-login");
  const userSuccess = document.querySelector(".nav__account--logo");

  const acount = JSON.parse(localStorage.getItem("Acount"));

  //   lặp lại check dữ liệu tài khoản
  for (let i = 0; i < acount.length; i++) {
    if (
      emailLogin.value === acount[i].email ||
      (emailLogin.value === acount[i].taikhoanLogin &&
        passwordLogin.value === acount[i].password)
    ) {
      i = acount.length;
      isLogin = !isLogin;
      setConfigLogin("isLogin-MP3", isLogin);
      showSuccesLogin.classList.add("active");
      showSuccesLoginIcon.classList.add("active");

      setTimeout(() => {
        handleCloseLogin();
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }, 2000);
    }
  }
  //   kiểm tra xem đã đăng nhập đúng chưa, nếu sai thì show toast
  if (!isLogin) {
    {
      showErrorLogin.classList.add("active");
      emailLogin.value = "";
      passwordLogin.value = "";
    }
  }
};

// xử lý đóng thông báo đăng nhập sai
const handleCloseError = () => {
  const showErrorLogin = document.querySelector(".login__notAccount");
  showErrorLogin.classList.remove("active");
};
