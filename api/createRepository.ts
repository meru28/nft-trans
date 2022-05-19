import { Context } from '@nuxt/types'
import { ErrorType } from '@/constants'
import { userRepository, UserRepository, daerahRepository, DaerahRepository } from '@/api'

export type Repository = {
  user: UserRepository,
  daerah: DaerahRepository
}

/**
 * @see https://axios.nuxtjs.org
 * @see https://github.com/gothinkster/realworld/tree/3155494efe68432772157de38a90c49b3698897f/api
 */
const createRepository = ({ app, $axios, redirect }: Context): Repository => {
  // $axios.setHeader('Authorization', 'Bearer' + app.$cookies.get('token'))
  $axios.onError((error) => {
    if (!error.response) {
      return
    }

    const code = error.response.status

    if (code === ErrorType.Unprocessable) {
      return Promise.reject(error.response.data.errors)
    }

    if (code === ErrorType.Unauthorized) {
      redirect('/login')

      return
    }

    if (code === ErrorType.Forbidden) {
      app?.router?.back()

      return
    }

    if (code === ErrorType.NotFound) {
      redirect('/')
    }
  })

  return {
    user: userRepository($axios),
    daerah: daerahRepository($axios)
  }
}

export default createRepository