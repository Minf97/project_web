<template>
  <div
    class="container"
    :style="{ '--opacity': opacity }"
    @click="cancelLoginBox"
  >
    <div class="a" @click="popLoginBox">
      <div class="b">
        <span>广油星社</span>
      </div>
    </div>
    <!-- 登录框 -->
    <div class="loginBox" :style="{ '--display': isDisplay }">
      <div class="inputClass">
        <form action="index.html">
          <!-- 一行两列，栅格排列，4 - 18 -->
          <el-row class="inputLine">
            <el-col :span="4" class="inputText">
              <label for="userAccount">账 号：</label>
            </el-col>
            <el-col :span="18">
              <el-input
                id="userAccount"
                v-model="userAccount"
                placeholder="请输入内容"
              ></el-input>
            </el-col>
          </el-row>

          <!-- 一行两列，栅格排列，4 - 18 -->
          <el-row class="inputLine">
            <el-col :span="4" class="inputText">
              <label for="userPassword">密 码：</label>
            </el-col>
            <el-col :span="18">
              <el-input
                id="userPassword"
                v-model="userPassword"
                placeholder="请输入密码"
                show-password
              ></el-input>
            </el-col>
          </el-row>

          <!-- 提交按钮 -->
          <el-row type="flex" justify="center">
            <el-button type="info">登录</el-button>
          </el-row>
          <a href="#" class="registerRoute">没有账号？点击注册</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isDisplay: "none",
      opacity: 0,
      userAccount: "",
      userPassword: "",
    };
  },
  methods: {
    //   点击别处，登录框消失，遮罩层消失
    cancelLoginBox() {
      if (this.isDisplay == "block") this.isDisplay = "none";
      this.opacity = 0;
      console.log("触发cancelLoginBox函数");
    },
    popLoginBox() {
      // 设置一个延时，避免与上面cancelLoginBox冲突
      setTimeout(() => {
        this.isDisplay = "block";
      }, 30);
      console.log("触发popLoginBox函数");
      //   遮罩层动画渐变效果，需优化 ********************
      const x = setInterval(() => {
        this.opacity += 0.2;
        console.log("1");
        if (this.opacity >= 1) clearInterval(x);
      }, 20);
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #000;
  background-image: url("../assets/sbpk.jpg");
  /* 保持图片的横纵比，并缩小成刚好覆盖body的大小 */
  background-size: cover;
  /* 上下滚动页面时，图片不跟随动，永远在屏幕上 */
  background-attachment: fixed;
  display: flex;
  justify-content: center;
}
/* 遮罩层 */
.container::after {
  /* display: var(--display); */
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  /* 遮罩层颜色 */
  background-color: rgba(0, 0, 0, 0.6);
  opacity: var(--opacity);
}

.a {
  user-select: none;
  position: relative;
  top: 180px;
  width: 500px;
  height: 120px;
  border: solid 10px #fff;
  box-shadow: 0 0 70px rgb(190, 40, 210);
  display: flex;
  justify-content: center;
  align-items: center;
  /* 设置鼠标移上去时变成小手形状 */
  cursor: pointer;
}

.a::after {
  content: "";
  position: absolute;
  width: 500px;
  height: 120px;
  box-shadow: 0 0 5px rgba(190, 40, 210);
  background-color: rgba(100, 30, 225, 0.4);
}

.a:hover {
  animation: a 1.5s;
}

@keyframes a {
  0%,
  34%,
  68%,
  100% {
    border: solid 10px #fff;
    box-shadow: 0 0 70px rgb(190, 40, 210);
  }

  17%,
  51%,
  85% {
    border: solid 10px rgba(255, 0, 0, 0.5);
    box-shadow: 0 0 90px rgba(255, 0, 0, 0.8);
  }
}

.b,
.b::before {
  z-index: 999;
  color: #fff;
  position: absolute;
  font-size: 65px;
  font-weight: 900;
  /* 设置字体间距 */
  letter-spacing: 12px;
}

.b::before {
  content: "广油星社";
  text-shadow: -5px -5px 0px rgb(211, 250, 9), 5px 5px 0px rgb(25, 10, 240);
  /* 使用缩放的方式创建可见显示取余，括号里的四个值分别是top，right，bottom，left */
  clip-path: inset(100% 0px 0px 0px);
}

.a:hover .b::before {
  /* steps设置逐帧动画，值越小越卡顿 */
  animation: move 1.25s steps(2);
}

/* 这是制造混乱的位置和高宽，可以自行改变，随机的 */
@keyframes move {
  0% {
    clip-path: inset(80% 0px 0px 0px);
    transform: translate(-20px, -10px);
  }

  10% {
    clip-path: inset(10% 0px 85% 0px);
    transform: translate(10px, 10px);
  }

  20% {
    clip-path: inset(80% 0px 0px 0px);
    transform: translate(-10px, 10px);
  }

  30% {
    clip-path: inset(10% 0px 85% 0px);
    transform: translate(0px, 5px);
  }

  40% {
    clip-path: inset(50% 0px 30% 0px);
    transform: translate(-5px, 0px);
  }

  50% {
    clip-path: inset(10% 0px 30% 0px);
    transform: translate(5px, 0px);
  }

  60% {
    clip-path: inset(40% 0px 30% 0px);
    transform: translate(5px, 10px);
  }

  70% {
    clip-path: inset(50% 0px 30% 0px);
    transform: translate(-10px, 10px);
  }

  80% {
    clip-path: inset(80% 0px 5% 0px);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: inset(80% 0px 0px 0px);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: inset(80% 0px 0px 0px);
    transform: translate(0px, 0px);
  }
}

.loginBox {
  z-index: 99;
  display: var(--display);
  position: absolute;
  width: 380px;
  height: 400px;
  top: 185px;
  left: 526px;
  border-radius: 20px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(7px);
  /* 提升层次感 */
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.inputClass {
  position: relative;
  top: 120px;
}

.inputText {
  position: relative;
  top: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.inputLine {
  margin-bottom: 20px;
}

.registerRoute {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5px;
  color: #fff;
  text-decoration: none;
}
.registerRoute:hover {
  text-decoration: underline;
  text-shadow: 0 0 5px rgb(0, 0, 0, 0.8);
}
</style>