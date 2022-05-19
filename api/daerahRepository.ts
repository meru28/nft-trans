import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ResponseType, Province } from '@/types'

type ProvinceResponse = ResponseType<'province', Province>
export const daerahRepository = (axios: NuxtAxiosInstance) => ({
  getProvince(): ProvinceResponse {
    return axios.$get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
  }
})

export type DaerahRepository = ReturnType<typeof daerahRepository>
