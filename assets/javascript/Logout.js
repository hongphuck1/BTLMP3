const logout = document.querySelector(".logout--user");

if (logout) {
  logout.addEventListener("click", () => {
    isLogin = !isLogin;
    setConfigLogin("isLogin-MP3", isLogin);

    setTimeout(() => {
      window.location.reload();
    }, 500);
  });
}
