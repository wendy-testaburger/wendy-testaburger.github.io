<template>
    <div class="thing-item">
        <div class="thing-item__image">
            <img :src="require(`@/things/photos/${thing.id}/1.jpg`)">
        </div>
        <div class="thing-item__info">
            <div class="thing-item__title center bold">
                {{thing.title}}
            </div>
            <div class="thing-item__brand">
                <span class="bold">Бренд:</span>
                {{thing.brand}}
            </div>
            <div class="d-flex justify-space-between">
                <div class="thing-item__size">
                    <span class="bold">Размер:</span>
                    {{thing.size}}
                </div>
                <div class="thing-item__price">
                    <span class="bold">Цена:</span>
                    {{thing.price}} грн.
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch, Prop} from 'vue-property-decorator';

@Component({
    components: {
    },
})
export default class ThingItem extends Vue {
    @Prop() thing: any;
}
</script>

<style lang="scss">
    .thing-item {
        width: 300px;
        border-radius: $border-radius;
        background-color: $bg-card;
        // padding: 10px;

        &__image {
            img {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
                max-width: 100%;
            }
        }

        &__info {
            padding: 10px 20px;

            &>div {
                margin-bottom: 10px;
            }
        }


        // &>div:nth-child(n+3) {
        //     margin-left: 20px;
        // }
    }
</style>