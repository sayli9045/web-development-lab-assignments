// These updater functions receive the previous state and return the next counter value.
export const counterTransitions = {
  increment: (currentCount) => currentCount + 1,
  decrement: (currentCount) => Math.max(0, currentCount - 1),
  reset: () => 0,
  setToTen: () => 10,
}

export function hasReachedTen(count) {
  return count === 10
}
