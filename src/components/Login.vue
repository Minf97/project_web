<template>
  <!-- 背景 -->
  <div class="container">
    <div
      class="a"
      @click="emitPop(), zIndexChange()"
      :style="{ '--z-index': zIndex }"
    >
      <div class="b">
        <span>广油星社</span>
      </div>
    </div>
    <LoginBox />
  </div>
</template>

<script>
import LoginBox from "./LoginBox_zheZhaoCeng.vue";

import { mapMutations, mapState } from "vuex";
export default {
  name: "Login",
  components: { LoginBox },
  data() {
    return {
      pop: true,
    };
  },
  methods: {
    emitPop() {
      //   事件全局总线，向组件LoginBox_zheZhaoCeng发送数据
      this.$bus.$emit("pop", this.pop);
      console.log("向组件emit了pop");
      //   把 zIndex 调成CSS无法解析的数值，这样边框消失，文字也可以凸显出来 **********
    },
    ...mapMutations("LoginStore", ["zIndexChange"]),
  },
  computed: {
    ...mapState("LoginStore", ["zIndex"]),
  },
  mounted() {},
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

.a {
  z-index: var(--z-index);
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
</style>