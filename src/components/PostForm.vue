<template>
    <form @submit.prevent="submit">
        <button class="close" type="button" @click="$emit('close-popup')"></button>
        <input type="text" v-model="title" placeholder="title" required>
        <textarea type="text" v-model="body" placeholder="your text" rows="10" required></textarea>
        <button class="submit button" type="submit">create post</button>
    </form> 
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: ['num'],
    data() {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations(['createPost', 'updatePostId', 'showCurrentPost']),
        submit() {
            this.createPost({
                id: 1,
                number: 1,
                title: this.title,
                body: this.body,
                date: new Date().toDateString(),
                time: new Date().toTimeString().split(' ')[0]
            });
            this.title = '';
            this.body = '';
            this.updatePostId();
            this.showCurrentPost(1)
            this.$emit('close-popup');
        }
    }
}
</script>

<style scoped>
    form {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 650px;
        background-color: #161515;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 5px 5px 0 #000000;
        transition: 0.5s ease-in-out;
        z-index: 12;
    }

    .showed {
        transform: translate(-50%, 0);
        transition: 0.5s ease-in-out;
    }

    input {
        width: 200px;
        font-size: 20px;
        padding: 10px;
        background-color: #000000;
        border: none;
        border-bottom: 2px solid #ffffff;
        color: #ffffff;
    }

    textarea {
        width: 100%;
        margin-top: 20px;
        font-size: 16px;
        line-height: 24px;
        padding: 10px;
        resize: none;
        border-radius: 5px;
    }

    .submit {
        margin-top: 20px;
    }       
</style>