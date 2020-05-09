<template>
<div>
    Hi!!!
    <thing-item v-for="item in things" :key="item.id" :thing="item">
    </thing-item>
</div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import things from '@/things/info'
import ThingItem from './components/thing-item/ThingItem.vue'

@Component({
    components: {
        ThingItem,
    },
})
export default class Main extends Vue {
    things = things;
}
</script>

<style lang="scss">

</style>