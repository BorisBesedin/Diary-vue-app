<template>
  
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <h1>Diary</h1>
        <button class="add-post button" @click="openPopup">create post</button>  
      </div> 
      <span class="count">total posts: {{ AllPosts.length }}</span>     
      <PostList v-bind:posts="AllPosts" v-bind:current="currentPost" />

      <PostForm class="form" v-bind:class="{showed: popupOpened}" @close-popup="closePopup" />
      
    </div>
    <div class="overlay" v-if="popupOpened"></div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      popupOpened: false
    };
  },
  computed: mapGetters(["AllPosts", "currentPost"]),
  methods: {
    ...mapActions(["getPosts"]),
    openPopup() {
      if (!this.popupOpened) {
        this.popupOpened = true;
      }
    },
    closePopup() {
      if (this.popupOpened) {
        this.popupOpened = false;
      }
    },
  },
  components: { PostForm, PostList },
  async mounted() {
    this.getPosts();
  },
  watch: {
    AllPosts: function () {
      localStorage.setItem("posts", JSON.stringify(this.AllPosts));
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff;
  min-width: 320px;
}

#app {  
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  height: 100vh;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.7;
  z-index: 11;
}

.wrapper {
  width: 95%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

h1 {
  position: relative;
  text-transform: uppercase;
  font-size: 40px;
}

.button {
  width: 150px;
  background-color: #000000;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  color: #ffffff;
  transition: 0.3s ease-in-out;
}

.add-post {
  margin-left: 20px;
}

.button:hover {
  box-shadow: 0 0px 0px 3px #ffffff inset;
  transition: 0.3s ease-in-out;
}

.count {
  margin-top: 30px;
  opacity: 0.5;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.close::before,
.close::after {
  position: absolute;
  content: "";
  top: 9px;
  left: 0;
  height: 2px;
  width: 20px;
  background-color: #ffffff;
}

.close::after {
  transform: rotate(-45deg);
}
.close::before {
  transform: rotate(45deg);
}

@media (max-width: 600px) {
  .header {
    margin-top: 20px;
  }

  .count {
    margin-top: 20px;
  }
}
</style>
