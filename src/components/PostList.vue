<template>
    <div class="container">
        <ul class="posts">
            <Post v-bind:class="{showed: post.id === current}" class="item" v-for="post in posts" :key="post.id" v-bind:post="post"/>
        </ul>

        <AllPosts v-bind:posts="posts" />
    </div>
</template>

<script>
import Post from './Post';
import AllPosts from './AllPosts';
export default {
    props: ['posts', 'current'],
    data () {
        return {
            confirm: false
        }
    },
    components: {
        Post, AllPosts
    },
    methods: {

    }
}
</script>

<style scoped>
.container {
    position: relative;
    margin-top: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.posts {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    flex-grow: 1;
    width: 600px;
    list-style: none;
}

.item {
    display: none;
    flex-grow: 1;
}

.showed {
    display: block;
}

@media (max-width: 600px) {
    .container {
        margin: 0 auto;
        margin-top: 20px;
        width: 90%;
    }
    .posts {
        width: 100%;
    }
}
</style>