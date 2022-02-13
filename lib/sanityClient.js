import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'usz3b3ow',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skMTpnly1jgAbcgWub4fYwhKWpd0eyp48j92ynaRH32nLiGKLoshKtmzyyRSrqooK9HaRfH5WbGwtbpLeXHEVyO4uTokc3TTYRK8SD5fZparsmH7N3T8QPTXZe5lrbfUMRaKoqR7mf4XI9PoyUf0nVL79LVylPv3Ykt0QDsFkxJR7ueq2lRz',
  useCdn: false,
})
