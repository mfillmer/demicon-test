export interface Name {
  first: string
  last: string
  title: string
}

export interface User {
  email: string
  gender: string
  name: Name
}

export interface Country {
  name: string
  users: User[]
}

export interface BackendResponse {
  countries: Country[]
}
