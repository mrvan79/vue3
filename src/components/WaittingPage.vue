    <template>
    <div class="waiting-page">
        <i class="loading-icon fas fa-spinner"></i>
        <div class="message">
        <span
            v-for="(char, index) in message"
            :key="index"
            :class="['char', { active: isActive(index) }]"
        >
            {{ char }}
        </span>
        </div>
        <div class="pulse"></div>
    </div>
    </template>
    
    <script>
    import axios from "axios";
    import Cookies from "js-cookie";
    export default {
    name: "WaitingPage",
    data() {
        return {
        message: "処理中です。お待ちください...",
        activeIndex: 0,
        uuid: this.getUUIDFromURL(),
        };
    },
    created() {
        this.startBlinking();
    },
    mounted() {
        this.setUUIDCookie();
    },
    methods: {
        startBlinking() {
        setInterval(() => {
            this.activeIndex = (this.activeIndex + 1) % 
            this.message.length; // Cập nhật chỉ số ký tự đang nhấp nháy
        }, 300); // Thay đổi mỗi 300ms
        },
        isActive(index) {
        return index === this.activeIndex; // Kiểm tra ký tự hiện tại có đang nhấp nháy không
        },
        getUUIDFromURL() {
        const params = new URLSearchParams(window.location.search); // Lấy các tham số từ URL
        return params.get("uuid"); // Lấy giá trị của tham số uuid
        },

        setUUIDCookie() {
        const uuidModel = {
            uuid: this.uuid, // Tạo đối tượng chứa uuid
        };
        // Gọi API để thiết lập cookie
        axios
            .post("http://192.168.3.90:8081/set-uuid-cookie", uuidModel)
            .then((response) => {
            if (response.status === 200) {
                const { uuid } = response.data;
                Cookies.set('uuid', uuid, { expires: 3650 });
            }
            })
            .catch((error) => {
            console.error("Có lỗi xảy ra khi gọi API:", error); // Xử lý lỗi
            });
        },
    },
    };
    </script>
    
    <style scoped>
    .waiting-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #e3f2fd, #bbdefb); /* Nền gradient */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ cho div */
    position: relative; /* Để có thể sử dụng absolute cho hiệu ứng khác */
    overflow: hidden; /* Ẩn phần thừa */
    }

    .loading-icon {
    font-size: 80px; /* Kích thước lớn cho biểu tượng */
    color: #1976d2; /* Màu xanh dương tươi sáng */
    animation: spin 1s linear infinite; /* Vòng quay */
    filter: drop-shadow(
        0 0 10px rgba(0, 123, 255, 0.5)
    ); /* Hiệu ứng đổ bóng cho biểu tượng */
    }

    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }

    .message {
    margin-top: 20px;
    font-size: 26px; /* Kích thước chữ lớn */
    font-weight: bold; /* Làm đậm chữ */
    color: #424242; /* Màu chữ tối hơn */
    }

    .char {
    display: inline-block; /* Để mỗi ký tự có thể nhấp nháy riêng lẻ */
    transition: color 0.3s ease; /* Hiệu ứng chuyển đổi màu chữ */
    }

    .char.active {
    color: #2196f3; /* Màu chữ khi nhấp nháy */
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); /* Đổ bóng cho chữ khi nhấp nháy */
    }

    /* Hiệu ứng nhấp nháy cho nền */
    .pulse {
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.2); /* Màu nền nhẹ nhàng */
    border-radius: 50%;
    animation: pulse-animation 2s infinite; /* Hiệu ứng nhấp nháy */
    top: 50%; /* Giữa màn hình */
    left: 50%; /* Giữa màn hình */
    transform: translate(-50%, -50%); /* Căn giữa */
    pointer-events: none; /* Không ảnh hưởng đến tương tác người dùng */
    }

    @keyframes pulse-animation {
    0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 1;
    }
    50% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.5;
    }
    100% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 1;
    }
    }
    </style>
    