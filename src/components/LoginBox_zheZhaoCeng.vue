<template>
  <div class="container">
    <!-- 遮罩层 -->
    <div
      class="zheZhaoCeng"
      :style="{ '--opacity': opacity, '--display': isDisplay }"
      @click="cancelLoginBox()"
    ></div>
    <!-- 登录框 -->
    <div
      class="loginBox"
      :style="{ '--opacity': opacity, '--display': isDisplay }"
    >
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
  name: "LoginBox_zheZhaoCeng",
  data() {
    return {
      opacity: 0,
      //   思考：这里 isDisplay 可以更改，利用 v-show 或许性能更好
      isDisplay: "none",
      userAccount: "",
      userPassword: "",
    };
  },
  methods: {
    //   弹出<登录框>和<遮罩层>
    popLoginBox() {
      console.log("触发popLoginBox函数");
      // 设置一个延时，避免与上面cancelLoginBox冲突
      setTimeout(() => {
        this.isDisplay = "block";
      }, 30);
      //   遮罩层动画渐变效果，需优化 ********************
      const x = setInterval(() => {
        this.opacity += 0.2;
        console.log("1");
        if (this.opacity >= 1) clearInterval(x);
      }, 20);
    },
    // 点击别处，使<登录框>和<遮罩层>消失
    cancelLoginBox() {
      console.log("在LoginBox组件中触发cancelLoginBox函数");
      if (this.isDisplay == "block") this.isDisplay = "none";
      this.opacity = 0;
      this.$store.state.zIndex = 1;
    },
  },
  mounted() {
    // console.log(this.$bus);
    this.$bus.$on("pop", (pop) => {
      console.log("我收到了数据pop：", pop);
      if (pop === true) {
        //   我草 函数要加()才可以触发，一开始 this.popLoginBox 是无法触发函数的 这个BUG改了一早上2021-9-4
        this.popLoginBox();
      }
    });
  },
  beforeDestroy() {
    this.$bus.$off("pop");
  },
};
</script>

<style scoped>
/* 遮罩层 */
.zheZhaoCeng {
  display: var(--display);
  opacity: var(--opacity);
  z-index: 2;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  /* 遮罩层颜色 */
  background-color: rgba(0, 0, 0, 0.6);
}
/* form表单内的 */
.loginBox {
  display: var(--display);
  opacity: var(--opacity);
  z-index: 3;
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