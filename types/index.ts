export interface User {
  email: string
  token: string
  username: string
  bio: string
  image: string
}

export interface Province {
  id: number,
  nama: string
}

export type Tag = string

export type ResponseType<K extends string, V> = Promise<{ [P in K]: V }>

export type ResponseTypes<T> = Promise<T>

export type OptionalPick<T, K extends keyof T> = Pick<Partial<T>, K>

export type Optional<T, K extends keyof T> = OptionalPick<T, K> & Omit<T, K>

export type CustomErrors = {
  errors: {
    errorName: string[]
  }
}
