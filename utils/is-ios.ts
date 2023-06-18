export function isIOS () {
  const browserInfo = navigator?.userAgent?.toLowerCase()

  return (browserInfo.match('iphone') || browserInfo.match('ipad')) ||
    (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform))
}
