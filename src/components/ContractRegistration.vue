<template>
  <p>契約登録</p>
  <div>
    <h1>UUID</h1>
    <p v-if="uuidDisplay">UUID từ server: {{ uuidDisplay }}</p>
    <p v-else>Đang tải UUID...</p>
  </div>
</template>

<script>
// import axios from "axios";
import Cookies from "js-cookie";

export default {
  name: "ContractRegistration",

  data() {
    return {
      uuidDisplay: "",
      uuid: "",
      cookies: {},
    };
  },
  mounted() {
    const uuidFromCookies = Cookies.get("uuid");
    //Kiểm tra xem UUID đã có trong cookies chưa
    if (uuidFromCookies) {
      console.log("UUID cua ban la :"+uuidFromCookies);
      // Nếu UUID tồn tại trong cookies, hiển thị nó
      this.uuidDisplay = uuidFromCookies;
      console.log("co uuid:", this.uuidDisplay);
    }
    else {
      this.$router.push('/ErrorPage');
    }
  },
  methods: {
    getCookieValue(cookieName) {
    // Tạo một biến để lưu giá trị cookie
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    // Duyệt qua tất cả các cookie
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        // Kiểm tra xem cookie có tên mong muốn hay không
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    // Nếu không tìm thấy cookie
    return "";
}
  }
};
</script>

<style>
/* Thêm style nếu cần */
</style>
