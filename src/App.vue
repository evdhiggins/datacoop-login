<template lang="pug">
v-app(id="app")
  v-content(app)
    transition(
      :enter-active-class="transitionEnterName"
      :leave-to-class="transitionLeaveName"
      mode="out-in"
    )
      router-view
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionEnterName: null,
      transitionLeaveName: null
    };
  },
  watch: {
    $route: function(to, from) {
      const toDepth = this.getDepth(to.path);
      const fromDepth = this.getDepth(from.path);

      // The page content should animate to/from such that navigations 'deeper' slide to the left,
      //    and 'outward' navigation animates to the right.
      // Same-level navigation displayes an animation to & from the left side
      this.transitionEnterName =
        toDepth > fromDepth
          ? "animated bounceInRight"
          : "animated bounceInLeft";
      this.transitionLeaveName =
        toDepth < fromDepth
          ? "animated bounceOutRight"
          : "animated bounceOutLeft";

      return true;
    }
  },
  methods: {
    // Return the path depth based on the number of slashes.
    // Add a level if content doesn't end in "/", as "/one" is deeper than "/"
    getDepth(path) {
      if (typeof path !== "string") {
        return 0;
      }
      let depth = path.split("/").length;
      depth += path.split("/")[depth - 1] === "" ? 0 : 1;
      return depth;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Commented out due to issue with style-loader. Currently loaded from CDN, instead.
// @import "animate.css";
</style>
