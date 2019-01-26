<template>
  <div ref="navs" class="view">
    <!-- nav -->
    <div ref="left" class="left"></div>
    <div ref="right" class="right">
      <!-- copy -->
      <!-- main -->
      <!-- eslint-disable -->
      <div class="T1" v-for="(T1,K1) in novelty">
        <h1 class="PageT1">
          <v-svg :data="'#icon-'+T1.Name"></v-svg>{{ T1.pageT1 }}
        </h1>
        <div class="T2" v-for="(T2,K2) in T1.pageC1">
          <h2 class="PageT2">
            <v-svg :data="'#icon-'+T2.Name"></v-svg>{{ T2.pageT2 }}
          </h2>
          <div class="main">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from 'API'
export default {
  data () {
    return {
      novelty: [],
      type: false,
      showValue: false,
      Copy: {
        Href: '',
        Name: '',
        New: '',
        Img: '',
        Title: '',
        K1: 0,
        K2: 0,
        K3: 0,
        Num: ''
      },
      title: ''
    }
  },
  mounted () {
    console.log()
    API.List().then(res => {
      this.novelty = res
    }, (err) => {
      return err
    })
  }
}
</script>

<style>
.view {
  display: flex;
}
.right {
  padding-right: 18px;
  padding-left: 18px;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
}

.right.PageT1 {
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  margin: 20px auto;
  font-size: 14px;
  box-shadow: 0 4px 16px 1px rgba(0, 0, 0, 0.05);
}
</style>
