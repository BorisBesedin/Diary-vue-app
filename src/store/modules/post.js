export default {
    actions: {
        getPosts (context) {
            if (localStorage.posts) {
                const posts = JSON.parse(localStorage.posts);

                context.commit('updatePosts', posts);
            }
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        createPost(state, post) {
            state.posts.unshift(post);
        },
        deletePost(state, num) {
            state.posts = state.posts.filter(post => post.number !== num);
        },
        updatePostId(state) {
            state.posts.forEach((post, i) => {
                post.id = i + 1;
                post.number = state.posts.length - i;
            });
        },
        showCurrentPost(state, id) {
            state.currentPost = id;
        }
    },
    state: {
        posts: [],
        currentPost: 1
    },
    getters: {
        AllPosts(state) {
            return state.posts;
        },
        currentPost(state) {
            return state.currentPost;
        }
    }
};