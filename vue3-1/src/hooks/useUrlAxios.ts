import { ref } from 'vue'
import axios from 'axios';
function useUrlAxios(url: string) {
    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    axios.get(url).then(res => {
        console.log(res, '111111');
        result.value = res.data
        loading.value = false
        loaded.value = true
    }).catch(err => {
        error.value = err
        loading.value = false
    })
    console.log(result, loading, loaded, error, '--------------------------')
    return {
        result,
        loading,
        loaded,
        error
    }
}
export default useUrlAxios