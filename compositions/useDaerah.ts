import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { reactive, useContext, toRef } from '@nuxtjs/composition-api'
import { Province } from '~/types'

type State = {
  province: Province
}

const initState = {
  province: {
    id: 0,
    nama: ''
  }
}

const state = reactive<State>(initState)

export default function useDaerah () {
  const { $repository } = useContext()

  const fetchProvince = async () => {
    const response = await $repository.daerah.getProvince()
    state.province = response.province
  }

  return {
    fetchProvince
  }
}
