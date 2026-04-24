export type UserLoginFormData = {
  email: string
  password: string
}

export type UserRegisterFormData = {
  name: string
  email: string
  password: string
  confirmPassword?: string
}

export type UserSessionData = {
  name: string
  email: string
  image?: string | null | undefined
}
