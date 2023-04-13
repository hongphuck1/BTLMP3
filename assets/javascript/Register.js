const register = document.querySelector(".login__register-sigup");
const login1 = document.querySelector(".nav__login");

const registerForm = () => {
  const layoutRegister = document.querySelector(".layout");
  const element = document.createElement("div");
  element.classList.add("register");
  element.innerHTML = `
  <div class="login--close" onclick="handleCloseRegister()">
              <i class="fa-regular fa-circle-xmark"></i>
          </div>

      <div class="register-bar">
        <div class="register-name">Đăng Ký Tài Khoản</div>
        <div class="register-title">
            Vui lòng nhập đầy đủ thông tin phía dưới.
        </div>
      <form action="" id="form-1" class="register-form">
        <!--.form-input.invalid -->
        <div class="form-input">
          <label for="fullname" class="form-input-name">Tên đầy đủ</label>
          <input id="fullname" type="text" placeholder="VD: Hồng Phúc" />
          <div class="form-messenger"></div>
        </div>
        <div class="form-input">
          <label for="fullnameLogin" class="form-input-name">Tên Tài Khoản</label>
          <input id="fullnameLogin" type="text" placeholder="VD: duonghongphuc" />
          <div class="form-messenger"></div>
        </div>
        <div class="form-input">
          <label for="email" class="form-input-name">Email</label>
          <input id="email" type="email" placeholder="VD: email@gmail.com" />
          <div class="form-messenger"></div>
        </div>
        <div class="form-input">
          <label for="password" class="form-input-name">Mật Khẩu</label>
          <input id="password" type="password" placeholder="Nhập mật khẩu" />
          <div class="form-messenger"></div>
        </div>
        <div class="form-input">
          <label for="password_confirmation" class="form-input-name"
            >Nhập lại mật khẩu</label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Nhập mật khẩu"
          />
          <div class="form-messenger"></div>
        </div>
        <div onclick={handleRegister()} class="register-btn">Đăng ký</div>
      </form>
      <div class="register-rules">
        Bằng cách đăng ký, bạn đồng ý với <u>điều khoản sử dụng</u> của chúng
        tôi
      </div>
    </div>
          `;
  layoutRegister.appendChild(element);

  handleCloseLogin();
};

const ACOUNTS = JSON.parse(localStorage.getItem("Acount")) || [];

const handleRegister = () => {
  const taikhoan = document.getElementById("fullname");
  const taikhoanLogin = document.getElementById("fullnameLogin");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("password_confirmation");

  if (
    taikhoan === "" ||
    taikhoanLogin === "" ||
    email === "" ||
    password.value === "" ||
    passwordConfirmation.value === ""
  ) {
    alert("Vui lòng nhập đầy đủ");
  } else if (taikhoanLogin.value.length < 6) {
    alert("Vui lòng nhập 'Tên Tài Khoản' lớn hơn 6 kí tự !");
  } else if (password.value.length < 6) {
    alert("Vui lòng nhập Mật Khẩu lớn hơn 6 kí tự !");
    password.value = "";
    passwordConfirmation.value = "";
  } else if (password.value != passwordConfirmation.value) {
    alert("Mật khẩu không trùng khớp, vui lòng nhập lại!");
    password.value = "";
    passwordConfirmation.value = "";
  } else {
    // chưa sử lý được check trùng email

    // nhận các dữ liệu vào abject
    const account = {
      id: ACOUNTS.length + 1,
      taikhoan: taikhoan.value,
      taikhoanLogin: taikhoanLogin.value,
      email: email.value,
      password: password.value,
      passwordConfirmation: passwordConfirmation.value,
    };

    // thêm các dữ liệu đã nhập vào array ACOUNTS
    ACOUNTS.push(account);

    // Lưu trữ tài khoản trên localStorage
    localStorage.setItem("Acount", JSON.stringify(ACOUNTS));

    alert("Đăng Kí Tài Khoản Thành Công!");
    setTimeout(() => {
      login();
      handleCloseRegister();
    }, 2000);
  }
};

const handleCloseRegister = () => {
  const removeRegister = document.querySelector(".register");
  removeRegister.style.animation = "hideAnimationRegister 3s ease forwards";

  setTimeout(() => {
    removeRegister.remove();
  }, 1000);
};
