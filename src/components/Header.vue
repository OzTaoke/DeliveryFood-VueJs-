<template>
    <header class="header">
        <div class="container">
            <div class="header-box">
                <router-link to="/" class="header-logo logo">
                    <img src="./../assets/images/logo.svg" alt="logo">
                </router-link>
                <div class="header-controls">
                    <button class="btn btn-primary">
                        <img src="./../assets/icons/user.svg" alt="user">
                        Войти
                    </button>
                    <button class="btn btn-outline" @click="openModal()">
                        <img src="./../assets/icons/cart.svg" alt="cart">
                        Корзина
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    const emit = defineEmits(['toggleModal']);
    const openModal = () => emit('toggleModal');
</script>
  
<style scoped>
.header {
  min-height: 124px;
  display: flex;
  align-items: center;
}

.header-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

</style>