import { reactive } from 'vue'
import { restsArray } from './../constans/rests';
import { goodsArray } from './../constans/goods';

export const store = reactive({
    isOpen: false,
    rests: restsArray,
    goods: goodsArray,
    toggleModel(value) {
        this.isOpen = value
    }
})