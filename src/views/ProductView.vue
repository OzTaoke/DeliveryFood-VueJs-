<template>
   <section class="products">
        <div class="container">
            <div class="products-wrapper">
                <div 
                class="products-card"
                v-for="goods in store.goods" 
                :key="goods.id"
                >
                    <div class="products-card__image">
                        <img :src="getUrl(goods.image)" alt="goods">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description--row">
                            <h5 class="products-card__description--name">{{ goods.title }}</h5>
                        </div>
                        <div class="products-card__description--row">
                            <p class="products-card__description--text">{{ goods.desc }}</p>
                        </div>
                        <div class="products-card__description--row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">
                                    {{ goods.btn }}
                                    <img src="./../assets/icons/cart-white.svg" alt="user">
                                </button>
                                <span class="products-card__description-controls--price">{{ goods.price }} ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { store } from './../store/index';
const getUrl = (name) => new URL(`../assets/images/goods/${name}`, import.meta.url)
</script>
