<template>
  <div class="">
    <link
      href="https://fonts.googleapis.com/css?family=Bowlby+One+SC"
      rel="stylesheet"
      type="text/css"
    />
    <div class="br">
      <div class="br-cube">
        <div class="br-cube-face br-cube-face-full br-cube-t">4 0 4 ERROR</div>
        <div class="br-cube-face br-cube-tl">SORRY</div>
        <div class="br-cube-face br-cube-tf">PAGE</div>
        <div class="br-cube-face br-cube-tr">NOT</div>
        <div class="br-cube-face br-cube-tb">FOUND</div>

        <div class="br-cube-face br-cube-ml">&nbsp;&nbsp;&nbsp;NOT</div>
        <div class="br-cube-face br-cube-mf">FOUND</div>
        <div class="br-cube-face br-cube-mr">4 0 4</div>
        <div class="br-cube-face br-cube-mb">4 0 4</div>

        <div class="br-cube-face br-cube-dl text-right">TRY</div>
        <div class="br-cube-face br-cube-df">AGAIN</div>
        <div class="br-cube-face br-cube-dr">ERROR</div>
        <div class="br-cube-face br-cube-db">4 0 4</div>
        <div class="br-cube-face br-cube-face-full br-cube-d">4 0 4 ERROR</div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  components: {},
  // eslint-disable-next-line vue/multi-word-component-names
  name: "404",
};
</script>
<style scoped>
.glytch-cancel {
  display: none;
}

.br {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: inherit;

  font-size: 50px;
  line-height: 1em;
  text-align: justify;
  perspective: 6.2em;
}
.br-cube {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 3.1em;
  width: 3.1em;
  border: 1px solid transparent;
  transform-style: preserve-3d;
  transform: rotateY(45deg) rotateX(0);
  animation: datspintho 2.5s 0.5s ease-in-out infinite;
}
.br-cube-face {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 33.33333333%;
  width: 100%;
  background-color: transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.br-cube-face-full {
  height: 100%;
}
.br-cube-t {
  transform: rotateX(90deg) translateZ(1.55em);
}
.br-cube-tf {
  transform: translateY(-1.0333333333em) translateZ(1.55em);
}
.br-cube-tr {
  transform: translateY(-1.0333333333em) rotateY(90deg) translateZ(1.55em);
}
.br-cube-tl {
  transform: translateY(-1.0333333333em) rotateY(-90deg) translateZ(1.55em);
}
.br-cube-tb {
  transform: translateY(-1.0333333333em) translateZ(-1.55em) rotateY(180deg);
}
.br-cube-mf {
  transform: rotateY(10deg) translateZ(1.55em);
}
.br-cube-mr {
  transform: rotateY(100deg) translateZ(1.55em);
}
.br-cube-ml {
  transform: rotateY(-80deg) translateZ(1.55em);
}
.br-cube-mb {
  transform: translateZ(-1.55em) rotateY(190deg);
}
.br-cube-d {
  transform: rotateY(-10deg) rotateX(-90deg) translateZ(1.55em);
}
.br-cube-df {
  transform: rotateY(-10deg) translateY(1.0333333333em) translateZ(1.55em);
}
.br-cube-dr {
  transform: rotateY(-10deg) translateY(1.0333333333em) rotateY(90deg)
    translateZ(1.55em);
}
.br-cube-dl {
  transform: rotateY(-10deg) translateY(1.0333333333em) rotateY(-90deg)
    translateZ(1.55em);
}
.br-cube-db {
  transform: rotateY(-10deg) translateY(1.0333333333em) translateZ(-1.55em)
    rotateY(180deg);
}
.text-right {
  text-align: right;
}
@keyframes datspintho {
  60% {
    transform: rotateY(405deg) rotateX(-360deg);
  }
  61% {
    transform: rotateY(405deg) rotateX(-360deg);
  }
  100% {
    transform: rotateY(405deg) rotateX(-360deg);
  }
}
</style>
