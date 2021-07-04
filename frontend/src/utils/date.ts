export const formatDate = (date: string): string => {
  const dateInstance = new Date(date)
  const formattedDate = dateInstance.toLocaleString('en-US').replace(',', ' •')

  return formattedDate
}
