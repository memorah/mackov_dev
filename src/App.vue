<template>
  <div id="app">
    <main>
      <div class="iphone-12">
        <div class="buttons">
          <div class="sound-off"></div>
          <div class="volume-up"></div>
          <div class="volume-down"></div>
        </div>
        <div class="phone-front">
          <div class="antenna antenna-1"></div>
          <div class="antenna antenna-2"></div>

          <div class="antenna-vertical antenna-v-1"></div>
          <div class="antenna-vertical antenna-v-2"></div>
          <div class="border">
            <div class="screen">
              <div class="notch">
                <div class="speaker"></div>
                <div class="camera">
                  <div class="lens-1"></div>
                </div>
              </div>

              <div class="screen-1">
                <router-view />
              </div>
            </div>
          </div>
        </div>
        <div class="phone-back"></div>
      </div>
    </main>
  </div>
</template>
<script></script>

<style>
/*font*/
@font-face {
  font-family: Anurati;
  src: url(./fonts/Anurati-Regular.otf);
}
body ::-webkit-scrollbar {
  display: none;
}

body {
  background-color: #0f0f0f;
  background-repeat: no-repeat;
  min-height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 90% 99.4%
  );
  overflow-x: hidden;
  margin: 0;
}
div {
  width: inherit;
}
#app,
a {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #f2e9e9;
  text-decoration: none;
}

.menuicon {
  width: 25px;
  top: 2rem;
  right: 2rem;
  padding: 0 7.5px;
  transition: 0.3s ease-out;
}
.menuicon:hover {
  width: 22px;
}
.menuicon-cancel {
  width: 35px;
  top: 2rem;
  right: 2rem;
  padding: 0;
  transition: 0.3s ease-out;
}
.menuitem {
  width: auto;
  height: 3rem;
  padding: 10px;
  transition: 0.3s ease-out;
}
li {
  list-style: none;
}
ul {
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  z-index: inherit;
}
.position-absolute {
  position: absolute;
}
.position-fixed {
  position: fixed;
}
.logo-icon {
  top: 2rem;
  left: 2rem;
}
.logo-icon img {
  width: 50px;
  transition: 0.3s ease-out;
}
.logo-icon img:hover {
  width: 45px;
}
.linkedin-icon {
  bottom: 2rem;
  left: 2rem;
}
.git-icon {
  bottom: 2rem;
  right: 2rem;
}
.git-icon img:hover,
.linkedin-icon img:hover {
  width: 30px;
}
.git-icon img,
.linkedin-icon img {
  width: 35px;
  transition: 0.3s ease-out;
}
.menuitem:hover {
  height: 2.8rem;
}
.menuicon-cancel:hover {
  width: 32px;
}
.text-link:hover,
.grey-link:hover,
.logo-icon img:hover,
.linkedin-icon img:hover,
.git-icon img:hover,
.menuicon:hover,
.menuicon-cancel:hover,
.menuitem:hover {
  filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.9));
  -webkit-filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.9));
  -moz-filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.9));
}
.main-bg,
.main-bg-desktop {
  width: 100%;
  height: 100%;

  font-family: Anurati !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #252525;
  text-shadow: 0px 7px 10px #000000;
  top: 0;
  left: 0;
  z-index: 0;
  padding-top: 0;
}
.main-bg span,
.main-bg-desktop span {
  padding-top: 2vw;
}
.main-bg-desktop {
  font-size: 25vw;
  line-height: 25vw;
}
.main-bg {
  font-size: 12rem;
  line-height: 12rem;
}
a {
  z-index: inherit;
}

h1,
h2 {
  font-size: 0.9rem;
}
h2 {
  font-size: 0.9rem;
  margin: 0;
  font-weight: 400;
  margin-top: 10px;
}
p {
  font-size: 0.9rem;
  -webkit-margin-before: 0rem;
  margin-block-start: 0rem;
  -webkit-margin-after: 0em;
  margin-block-end: 0em;
}
li p {
  -webkit-margin-after: 1rem;
  margin-block-end: 1rem;
}
h1,
h2,
ul {
  -webkit-margin-before: 0;
  margin-block-start: 0;
}
h1,
h2,
p {
  text-shadow: 0px 7px 10px #100e0e;
}
.main-bg span {
  transform: rotate(90deg);

  /* Legacy vendor prefixes that you probably don't need... */

  /* Safari */
  -webkit-transform: rotate(90deg);

  /* Firefox */
  -moz-transform: rotate(90deg);

  /* IE */
  -ms-transform: rotate(90deg);

  /* Opera */
  -o-transform: rotate(90deg);

  /* Internet Explorer */
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.text-content ul {
  padding-top: 0;
  margin-inline: 5%;
}

.text-content ul li {
  text-align: left;
  margin-bottom: 1rem;
}

.text {
  opacity: 0.6;
}
a.text:hover {
  opacity: 1;
}
.important-text {
  opacity: 1;
  font-weight: 600;
}
.grey-link {
  opacity: 0.6;
}
.grey-link:hover {
  opacity: 1;
}
li img {
  width: 100%;
}

/*carusel main styles*/
.carousel__pagination-button {
  background-color: #fefefe !important;
  opacity: 0.7;
}

.carousel__pagination-button--active {
  background-color: #fefefe !important;
  opacity: 1;
}
/*phone styles*/

:root {
  --ggs: 0.6;
}
i {
  display: inline-block !important;
}
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iphone-12 {
  width: 46.5vh;
  height: 93.5vh;
  position: relative;
  z-index: 1;
}
.iphone-12 .buttons .sound-off {
  box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.5) inset;
  background: #6b6b6b;
  background: linear-gradient(144deg, rgb(226, 223, 222) 0%, #adadad 100%);
  width: 4px;
  height: 105px;
  position: absolute;
  top: 20vh;
  right: -4px;
  border-radius: 2px;
}
.iphone-12 .buttons .volume-up {
  box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.5) inset;
  background: #333333;
  background: linear-gradient(144deg, rgb(226, 223, 222) 0%, #adadad 100%);
  width: 4px;
  height: 55px;
  position: absolute;
  top: 20vh;
  left: -4px;
  border-radius: 2px;
}
.iphone-12 .buttons .volume-down {
  box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.5) inset;
  background: #474747;
  background: linear-gradient(144deg, rgb(226, 223, 222) 0%, #adadad 100%);
  width: 4px;
  height: 55px;
  position: absolute;
  top: 28.4vh;
  left: -4px;
  border-radius: 2px;
}
.phone-front {
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #adadad;
  box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.5) inset;
  border-radius: 6.5vmin;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-front .antenna {
  background-color: #e0dcdc;
  width: 100%;
  height: 0.5em;
  position: absolute;
  left: 0;
  z-index: -1;
}
.phone-front .antenna.antenna-1 {
  top: 5em;
}
.phone-front .antenna.antenna-2 {
  bottom: 5em;
}
.phone-front .antenna-vertical {
  background-color: #e0dcdc;
  width: 0.5em;
  height: 50%;
  position: absolute;
  z-index: -1;
}
.phone-front .antenna-vertical.antenna-v-1 {
  top: 0;
  right: 6em;
}
.phone-front .antenna-vertical.antenna-v-2 {
  bottom: 0;
  left: 6em;
}
.phone-front .border {
  width: 97.5%;
  height: 98.5%;
  background-color: #000004;
  border-radius: 6vmin;
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-front .border .screen {
  position: relative;
  width: 93.5%;
  height: 97%;
  border-radius: 4.5vmin;

  overflow-x: hidden;
  overflow-y: scroll;
}
.phone-front:hover .border .screen .screen-2 {
  /*top: -2000px;*/
  transition: all 1.6s;
}
.phone-front .border .screen .notch {
  background-color: #000004;
  position: absolute;
  top: -5px;
  width: 50%;
  height: 3.7vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.phone-front .border .screen .notch .speaker {
  width: 24%;
  height: 14%;
  border-radius: 50px;
  background-color: #202021;
  box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.37) inset;
  margin-bottom: 0.4em;
}
.phone-front .border .screen .notch .camera {
  width: 0.65em;
  height: 0.65em;
  margin-left: 0.55em;
  border-radius: 100px;
  background-color: #1a1a22;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4em;
}
.phone-front .border .screen .notch .camera .lens-1 {
  width: 0.3em;
  height: 0.3em;
  border-radius: 50px;
  background: #7b95ff;
  background: linear-gradient(
    144deg,
    rgba(123, 149, 255, 1) 0%,
    rgba(0, 0, 0, 1) 48%,
    rgba(123, 149, 255, 1) 100%
  );
}
.screen-1 {
  width: 100%;
  min-height: 100%;
  border-radius: 4.5vmin;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 90% 99.4%
  );
  z-index: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}
.screen-intro {
  width: 100%;
  min-height: 100%;
  border-radius: 4.5vmin;
  z-index: 1;
  transition: all 1.6s;
}
.screen-1 .navigation-bar {
  width: 35%;
  height: 4px;
  background-color: #fefeff;
  border-radius: 20px;
  margin-bottom: 2%;
}
.start-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
}
.start-btn .navigation-bar {
  width: 35%;
  min-width: 120px;
  height: 4px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  margin-bottom: 5px;
}
.start-btn .unlock-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2px;
}

.phone-back {
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 50px #000 8c;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 65px;
}
.info {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  min-width: 300px;
  border-radius: 10px;
  padding: 0.6rem;
  position: fixed;
  right: 2.5vw;
  bottom: 4vh;
  overflow: hidden;
  box-shadow: 0px 0px 40px #000 0f;
}
.info .mb-1 {
  margin-bottom: 0.6rem;
}
.info .info-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.626);
  -webkit-filter: blur(10px);
  filter: blur(10px);
  z-index: -1;
}
.info .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
}
.info .header section {
  display: flex;
  align-items: center;
  flex-flow: row;
}
.info .header section span {
  margin-left: 0.5rem;
  font-size: 0.7rem;
}
.info .header span,
.info .header a {
  font-size: 0.7rem;
}
.info .header .red-icon {
  color: #fefeff;
  background-color: red;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
}
.info .body {
  display: flex;
  flex-flow: column;
  margin-top: 0.5rem;
}
.info .body span,
.info .body strong,
.info .body a {
  font-size: 0.8rem;
  color: black;
}

.gg-lock-unlock {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 12px;
  height: 6px;
  border: 2px solid;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  border-bottom: transparent;
  margin-top: -18px;
  margin-left: -2px;
  margin-bottom: 20px;
}
.gg-lock-unlock::after,
.gg-lock-unlock::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
}
.gg-lock-unlock::after {
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px;
  background-color: #fff;
  width: 16px;
  height: 10px;
  border-radius: 2px;
  left: -4px;
  top: 10px;
}
.gg-lock-unlock::before {
  width: 2px;
  height: 6px;
  background: currentColor;
  left: -2px;
  top: 4px;
}
/*menu styles*/
.container {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 6rem 0 0 0;
  z-index: 1;
}
.row {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(min(30%, 100%), 1fr));
  gap: 1rem;
  justify-items: center;
  z-index: inherit;
  margin-top: 1.5rem;
}
/* The animation code */
@-webkit-keyframes animation-v1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes animation-v1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animation-v1 {
  -webkit-animation: animation-v1 1s;
  animation: animation-v1 1s;

  -webkit-animation-timing-function: ease-in-out;

  animation-timing-function: ease-in-out;
}
.card {
  width: 8vh;
  height: 8vh;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;

  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(
    139deg,
    rgba(230, 230, 230, 0.18) 0%,
    rgba(75, 75, 75, 0.18) 40%,
    rgba(0, 0, 0, 0.18) 60%
  );
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 2vh;

  transition: 1s ease-out;
  text-shadow: 0px 7px 10px #100e0e;
  font-size: 1.5rem;
  font-weight: bold;
  transition: opacity 2s ease-out;
}
.card:before {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  min-width: 50px;
  min-height: 50px;
  mix-blend-mode: hard-light;
  background-image: inherit;
  background-size: 100%;
  opacity: 1;
  transition: 0.3s ease-out;
  background-repeat: no-repeat;
  border-radius: inherit;
}
.card:hover:before {
  -webkit-animation: animate 0.9s linear infinite;
  animation: animate 0.9s linear infinite;
}

@-webkit-keyframes animate {
  0% {
    background-color: transparent;
    background-position: 0 0;
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  10% {
    background-color: transparent;
    background-position: 5px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  20% {
    background-color: transparent;
    background-position: -5px 0;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  30% {
    background-color: transparent;
    background-position: 3px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  40% {
    background-color: transparent;
    background-position: 0 5px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  50% {
    background-position: 0 -3px;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    background-color: transparent;
  }
  55% {
    background-position: 0 -3px;
    background-color: darkgray;
  }

  60% {
    background-color: transparent;
    background-position: 0 2px;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  70% {
    background-color: transparent;
    background-position: 0 -1px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  80% {
    background-color: transparent;
    background-position: -2px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  81% {
    background-color: transparent;
    background-position: 2px 0;
    filter: drop-shadow(3px 5px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
  100% {
    background-color: transparent;
    background-position: 0 0;
    -webkit-filter: hue-rotate(380deg);
    filter: hue-rotate(380deg);
    filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
}

@keyframes animate {
  0% {
    background-color: transparent;
    background-position: 0 0;
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  10% {
    background-color: transparent;
    background-position: 5px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  20% {
    background-color: transparent;
    background-position: -5px 0;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  30% {
    background-color: transparent;
    background-position: 3px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  40% {
    background-color: transparent;
    background-position: 0 5px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  50% {
    background-position: 0 -3px;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    background-color: transparent;
  }
  55% {
    background-position: 0 -3px;
    background-color: darkgray;
  }

  60% {
    background-color: transparent;
    background-position: 0 2px;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  70% {
    background-color: transparent;
    background-position: 0 -1px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  80% {
    background-color: transparent;
    background-position: -2px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  81% {
    background-color: transparent;
    background-position: 2px 0;
    filter: drop-shadow(3px 5px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
  100% {
    background-color: transparent;
    background-position: 0 0;
    -webkit-filter: hue-rotate(380deg);
    filter: hue-rotate(380deg);
    filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
}
.icon-div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  width: 10vh;
  margin: 1vh;
  z-index: 1;
}
.icon-div h2 {
  text-align: center;
}
@media screen and (max-height: 800px) {
  .main-bg {
    padding-top: 0;
    font-size: 8.5rem;
    line-height: 8.5rem;
  }
}
@media screen and (max-height: 700px) {
  .iphone-12 .buttons .sound-off {
    height: 80px;
  }
  .iphone-12 .buttons .volume-up,
  .iphone-12 .buttons .volume-down {
    height: 45px;
  }
}
@media screen and (max-height: 600px) {
  .iphone-12 .buttons .sound-off {
    height: 70px;
  }
  .iphone-12 .buttons .volume-up,
  .iphone-12 .buttons .volume-down {
    height: 35px;
  }
  .slider {
    display: none;
  }
  .screen-2 .gg-lock-unlock {
    color: 2;
    margin-top: 50%;
  }
  .main-bg {
    font-size: 7rem;
    line-height: 7rem;
  }
}
@media screen and (max-height: 450px) {
  .iphone-12 .buttons .sound-off,
  .iphone-12 .buttons .volume-up,
  .iphone-12 .buttons .volume-down {
    display: none;
  }
}
@media screen and (max-width: 500px), (max-height: 450px) {
  .iphone-12,
  .phone-front .border,
  .phone-front .border .screen {
    width: 100%;
    height: 100%;
  }
  .notch,
  .antenna,
  .antenna-vertical,
  .buttons {
    display: none !important;
  }
  .phone-back,
  .phone-front,
  .phone-front .border,
  .screen-1,
  .phone-front .border .screen {
    border-radius: 0;
    background-color: unset;
    box-shadow: none;
  }
  .screen-2 {
    border-radius: 0;
  }
}
.text-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: hidden;
  margin-top: 6rem;
  z-index: 1;
}
@media only screen and (max-width: 600px) {
  p {
    font-size: calc(12px + 6 * ((100vw - 320px) / 680));
  }
  .main-bg {
    padding-top: 0;
    font-size: 12rem;
    line-height: 12rem;
  }
  .main-bg span {
    padding-top: 11vw;
  }
  .menuicon {
    width: 15px;
    top: 1rem;
    right: 1rem;
  }
  .menuicon:hover {
    width: 12px;
  }
  .menuitem {
    height: 2rem;
  }
  .menuitem:hover {
    height: 1.8rem;
  }
  .menuicon-cancel {
    width: 25px;
    top: 1rem;
    right: 1rem;
  }
  .menuicon-cancel:hover {
    width: 20px;
  }

  .logo-icon {
    top: 1rem;
    left: 1rem;
  }
  .logo-icon img {
    width: 40px;
  }
  .logo-icon img:hover {
    width: 35px;
  }
  .linkedin-icon {
    bottom: 1rem;
    left: 1rem;
  }
  .git-icon {
    bottom: 1rem;
    right: 1rem;
  }
  .git-icon img:hover,
  .linkedin-icon img:hover {
    width: 20px;
  }
  .git-icon img,
  .linkedin-icon img {
    width: 25px;
    transition: 0.3s ease-out;
  }
  .card {
    font-size: 0.9rem;
    margin: 10px 0 0 0;
  }
  .row {
    margin-top: 0rem;
  }
  .text-content ul {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 4rem;
  }
}
@media screen and (max-width: 900px) {
  body {
    margin: 0 !important;
  }
}
@media (hover: none) {
  .card:hover:before {
    -webkit-animation: none;
    animation: none;
  }
}
/*1*/
</style>
