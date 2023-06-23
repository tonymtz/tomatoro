export const isCleanInput = (input: string) => {
  return /^[a-zA-Z0-9\s\-]{1,50}$/.test(input)
}
