<template>
    <div>
        <h1>{{result}}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve({result: '测试一下'})
            }, 2000)
        })
    }
})
</script>

<style lang="scss" scoped>

</style>