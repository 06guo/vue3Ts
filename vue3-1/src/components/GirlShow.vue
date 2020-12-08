<template>
    <div>
        <img :src="result && result.imgUrl" alt="">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
    async setup () {
        const rowData = await axios.get('https://apiblog.jspang.com/default/getGirl')
        return {
            result: rowData.data
        }
    }
})
</script>

<style scoped>

</style>