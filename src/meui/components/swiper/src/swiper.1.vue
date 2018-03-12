<template>
  <div class="stack-wrapper">
    <ul class="stack">
      <li class="stack-item" :style="`transform: translate3d(0px, 0px, ${range}px);z-index: 10;opacity:${range /220}`">
      </li>
      <li class="stack-item" style="transform: translate3d(-80px, 0px, 0px) rotateY(40deg);z-index: 1;">
      </li>
      <li class="stack-item" style="transform: translate3d(80px, 0px, 0px) rotateY(-40deg);z-index: 1;">
      </li>
    </ul>
    <div class="range">
      <input type="range" min="1" max="220" v-model="range">
      {{range}}
    </div>

  </div>
</template>
<script>
export default {
  name:'me-swiper',
  data() {
    return {
      range:220
    }
  }
}
</script>

<style>
.range{
  transform: translateY(100px)
}
.stack {
  width: 205px;
  height: 120px;
  position: relative;
  perspective: 1200px;
  perspective-origin: 50% 50%;
}
.stack-item{
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  user-select: none;
  pointer-events: auto;
}
.stack-item:nth-child(1){
  background:darkslateblue;
  opacity: .4;
}
.stack-item:nth-child(2){
  background:darkolivegreen
}
.stack-item:nth-child(3){
  background:cadetblue
}
</style>
