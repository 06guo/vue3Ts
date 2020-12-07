import { ref } from 'vue'

const nowTime = ref('')
const getTime = () => {
    const time = new Date()
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    const minite = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    nowTime.value = hours + ':' + minite + ':' + seconds
}
export {
    nowTime,
    getTime
}