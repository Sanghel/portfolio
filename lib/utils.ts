export const validateString = (value: unknown, maxLenght: number) => {
  if (!value || typeof value!=='string' || value.length > maxLenght) {
    // throw new Error('Value must be a string');
    return false
  }
  return true
}

export const getErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (error && typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong'
  }
  return message
}