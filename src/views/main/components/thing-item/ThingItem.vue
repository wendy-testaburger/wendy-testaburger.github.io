<template>
    <div>
        {{thing.title}}
        {{thing.title}}
        {{thing.title}}
        
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

</style>