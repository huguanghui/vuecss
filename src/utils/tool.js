export const open = (text) => {
  console.group('AXIOS' + text)
}

export const close = () => {
  console.groupEnd()
}

export const toast = (str, icon) => {
  console.group('showToast')
  console.groupEnd()
}
