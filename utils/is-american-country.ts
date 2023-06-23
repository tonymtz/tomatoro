const americanCountries = [
  'US', 'MX', 'CA', 'AR', 'BO', 'CL', 'CO', 'CR', 'DO', 'EC', 'GT', 'HN',
  'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE', 'BR', 'CU', 'JM', 'HT',
  'BS', 'BZ', 'SR', 'GY', 'GF', 'MQ', 'GP', 'AW', 'CW', 'SX', 'BQ', 'AI',
  'VG', 'VI', 'KY', 'BM', 'GD', 'LC', 'VC', 'KN', 'MF', 'BL', 'TT', 'TC',
  '419',
]

export const isAmericanCountry = (local: string): boolean => {
  const [, countryCode] = /[_-](.+)/.exec(local) || []

  return americanCountries.includes(countryCode || '')
}
