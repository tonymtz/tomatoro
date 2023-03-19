export function ifClient (fn: () => void) {
  if (typeof window !== 'undefined') {
    fn()
  }
}
