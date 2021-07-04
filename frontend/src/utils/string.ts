export const capitalizeFirstLetter = (text: string): string => {
  return text?.charAt(0).toUpperCase() + text?.slice(1) || ''
}

const filterEmptyValues = (list: unknown[]) => {
  return list?.filter((item) => item) || []
}

export const joinWithSeparator = (
  list: unknown[],
  separator = ', '
): string => {
  const filteredList = filterEmptyValues(list)

  return filteredList.join(separator)
}
