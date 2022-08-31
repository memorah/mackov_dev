<template>
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
              <LogoPhone />
              <BackgroundHome />
              <MenuItems />
            </div>

            <div class="screen-2">
              <section>
                <i class="gg-lock-unlock"></i>
                <Time />
                <div class="notification">
                  <div class="notification-bg"></div>
                  <div class="header">
                    <section>
                      <div class="red-icon">!</div>
                      <span>NEW APPLICATION INSTALED</span>
                    </section>
                    <span>1m ago</span>
                  </div>
                  <div class="body">
                    <strong>MACKOV.dev</strong>
                    <span>A app was recognised that may be interested</span>
                  </div>
                </div>
                <Cube />
              </section>
              <div class="s-2-bottom">
                <span class="unlock-text">Swipe up to open</span>
                <div class="navigation-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phone-back"></div>
    </div>
  </main>
</template>

<script>
import LogoPhone from "./LogoPhone.vue";
import Time from "./ScreensaverTime.vue";
import Cube from "./ScreensaverCube.vue";
import BackgroundHome from "./BackgroundHome.vue";
import MenuItems from "./MenuItems.vue";

export default {
  name: "PhoneMenu",
  components: {
    LogoPhone,
    Time,
    BackgroundHome,
    MenuItems,
    Cube,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
