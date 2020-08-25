<template>
    <div class="confirm">
        <div class="container">
            <p class="text">Delete this post?</p>
            <div class="buttons">
                <button class="button-yes button" @click="$emit('confirm')">Yes</button>
                <button class="button-no button" @click="$emit('no-confirm')">No</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.confirm {
    position: fixed;
    padding: 40px 20px;
    width: 90%;
    max-width: 360px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 2px solid #000000;
    box-shadow: 0 0 10px 0 #000000;
    z-index: 20;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
}

@media (max-width: 600px) {
    .confirm {
        width: 90%;
        max-width: 300px;
    }
    .buttons {
        flex-direction: column;
    }
    .button-yes {
        margin-bottom: 10px;
    }
}

.text {
    font-size: 24px;
}
</style>