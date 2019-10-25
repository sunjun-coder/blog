<template>
  <div class="demo-button">
    <div>
      <hosjoy-button @click="buttonClick">默认按钮</hosjoy-button>
      <hosjoy-button type="primary" @click="buttonClick">主要按钮</hosjoy-button>
      <hosjoy-button type="success" @click="buttonClick">成功按钮</hosjoy-button>
      <hosjoy-button type="info" @click="buttonClick">信息按钮</hosjoy-button>
      <hosjoy-button type="warning" @click="buttonClick">警告按钮</hosjoy-button>
      <hosjoy-button type="danger" @click="buttonClick">危险按钮</hosjoy-button>
    </div>
  </div>
</template>

<script>
import hosjoyButton from '../src/hosjoyButton'
export default {
  name: 'hosJoyButton',
  components: {
    hosjoyButton
  },
  methods: {
      buttonClick(done){
          setTimeout(() => {
              done()
          }, 3000);
      }
  }
}
</script>

