<template>
    <li>
        <div class="post-header">
            <span class="number"> Post № {{ post.number }} </span>
            <span class="data"> {{ post.data }} </span>
            <button class="close post-close" @click="confirm = true"></button>
        </div>
        <div class="post-main">
            <h2 class="post-title">{{post.title}}</h2>
            <p class="post-text">{{post.body}}</p>
        </div>
        <Confirm v-if="confirm" @confirm="remove(post.number), confirm = false" @no-confirm="confirm = false" />          
    </li>
</template>

<script>
import { mapMutations } from 'vuex';
import Confirm from './Confirm';
export default {
    data () {
        return {
            confirm: false
        }
    },
    props: ['post'],
    components: { Confirm },
    methods: {
        ...mapMutations(['deletePost', 'updatePostId']),
        remove(num) {
            this.deletePost(num);
            this.updatePostId();
        }
    }
}
</script>

<style scoped>
    @keyframes fade {
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0);
        }
    }
    li {
        border: 1px solid #a1a1a1; 
        animation: fade .5s;   
    }
    .post-header {
        padding: 15px;
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-right: 60px;
        background-color: #000000;
        color: #ffffff;
    }
    .post-close::after,
    .post-close::before {
        background-color: #ffffff;
    }

    .number,
    .data {
        font-size: 16px;
    }

    .data {
        opacity: 0.5;
    }

    .post-main {
        padding: 20px;
    }

    .post-title {
        font-size: 24px;
    }

    .post-text {
        margin-top: 20px;
        font-size: 18px;
        line-height: 28px;
        text-align: left;
    }
</style>