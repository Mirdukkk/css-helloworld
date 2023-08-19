export interface AvatarContent {
    url: string
    name: string
    description: string
}

export const avatars: AvatarContent[] = [
  {
    url: 'https://cdn.discordapp.com/avatars/419524085736013834/dbcb5e6fd4ff0e7702e052ccea0bafa2.webp?size=128',
    name: 'Александр',
    description: 'Он успешный'
  },
  {
    url: 'https://cdn.discordapp.com/avatars/405258156063850497/e90929870d679547d0c9826fedc0dcbf.webp?size=128',
    name: 'Алексей',
    description: 'Он тоже успешный'
  },
  {
    url: 'https://cdn.discordapp.com/avatars/441954631539490857/a_cdac9500326ac4f6dc38ac5e8c0c7f0a.webp?size=128',
    name: 'Андрей',
    description: 'Он будет успешным'
  }
]
