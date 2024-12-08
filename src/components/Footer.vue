<template>
          <footer class="footer">
            <div class="container">
                <div class="footer-box">
                    <router-link to="/" class="footer-logo logo">
                        <img src="./../assets/images/logo.svg" alt="logo">
                    </router-link>
                    <div class="footer-nav">
                        <ul>
                            <li><router-link to="/">Ресторанам</router-link></li>
                            <li><router-link to="/">Курьерам</router-link></li>
                            <li><router-link to="/">Пресс-центр</router-link></li>
                            <li><router-link to="/">Контакты</router-link></li>
                        </ul>
                    </div>
                    <div class="footer-social">
                        <img src="./../assets/icons/instagram.svg" alt="instagram">
                        <img src="./../assets/icons/facebook.svg" alt="facebook">
                        <img src="./../assets/icons/vkontakte.svg" alt="vk">
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

.footer {
    min-height: 156px;
    display: flex;
    align-items: center;
    padding: 60px 0;
}

.footer-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    gap: 36px;
}

.footer-nav {
    flex-grow: 1;
}

.footer-nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 15px;
}

.footer-nav li {
    font-weight: 400;
    font-size: 18px;
    color: #595959;
}

.footer-socials {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}

</style>