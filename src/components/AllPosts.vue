<template>
    <div class="all-posts">
        <h2>All posts</h2>
        <ul class="list">
            <li v-for="item in posts" :key="item.id" @click="showPost(item.id)">
                <div class="container">
                    <span class="id"> {{ item.number}}: </span>
                    <h3 class="title">{{ item.title }}</h3>
                </div>                
                <span class="date">{{ item.date }}, {{ item.time }} </span>
            </li>
        </ul>
        <button class="show-btn" @click="showList">All posts</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: ['posts'],
    methods: {
        ...mapMutations(['showCurrentPost']),
        showList() {
            document.querySelector('.all-posts').classList.toggle('list-showed');
        },
        showPost(id) {
            this.showCurrentPost(id);
            this.showList();
        }
    }
}
</script>

<style scoped>
    .all-posts {
        display: flex;
        flex-direction: column;
        position: fixed;
        padding: 20px;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        height: 100vh;
        background-color: #000000;
        color: #ffffff;
        z-index: 10;
        transition: 0.5s ease-in-out;
    }

    .list-showed {
        transform: translateX(0);
        transition: 0.5s ease-in-out;
    }

    .list {
        margin-top: 20px;
        flex-grow: 1;
        width: 280px;
        padding: 20px;
        list-style: none;
        background-color: #ffffff;
        color: #000000;
        overflow: scroll;
    }

    @media (max-width: 600px) {
        .list {
            width: 260px;
        }
    }

    .container {
        display: flex;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 5px;
        cursor: pointer;
        flex-wrap: wrap;
    }

    li:hover {
        background-color: #e1e1e1;
    }
    .id, .title {
        font-size: 16px;
        font-weight: normal;
    }

    .title {
        margin-left: 10px;
    }

    .date {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.4;
    }

    .show-btn {
        position: absolute;
        top: 25%;
        right: -60px;
        transform: translateY(-50%) rotate(90deg);
        height: 50px;
        width: 100px;
        background-color: #ffffff;
        border: 5px solid #000000;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
    }
</style>