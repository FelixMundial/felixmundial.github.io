<template>
  <div class="theme-container">
    <div class="content">
      <h1 class="title">
        <i class="el-icon-loading"></i> 404</h1>
      <blockquote class="msg">{{ current404Msg }}</blockquote>
      <router-link to="/">
        <div class="home-link">
          👉 Country road, take me home{{ selectedSuspensionPoint }} 👈
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
const _404MsgPool = [
  `此地空无一物～`,
  `我是谁？我从哪里来？要到哪里去？`,
  `走丢啦～`,
  `链接崩了？`
];

export default {
  data () {
    return {
      current404Msg: '',
      suspensionPoints: [
              '.', '..', '...'
      ],
      selectedSuspensionPoint: '.',
      currentTimeInSeconds: 0
    }
  },
  methods: {
    get404Msg () {
      if (this.current404Msg === '') {
        this.current404Msg = _404MsgPool[Math.floor(Math.random() * _404MsgPool.length)]
      }
    },
    getSuspensionPointsPeriodically () {
      if (this.currentTimeInSeconds === 0) {
        this.currentTimeInSeconds = new Date().getSeconds()
      }
      this.selectedSuspensionPoint = this.suspensionPoints[this.currentTimeInSeconds++ % 3]
    }
  },
  mounted () {
    this.get404Msg()
    setInterval(this.getSuspensionPointsPeriodically, 1000)
  }
}
</script>

<style scoped>
  @import '../../public/fonts/font.css';

  .content {
    text-align: center;
    margin: 10%;
  }
  .title {
    color: red;
    font-family: "American Typewriter",serif;
  }
  .msg {
    font-size: 120%;
  }
  .home-link {
    font-size: 110%;
    margin: 20px;
    font-family: "8-bit Operator+",sans-serif;
  }
</style>
