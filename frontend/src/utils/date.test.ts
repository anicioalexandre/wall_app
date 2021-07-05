import { formatDate } from './date'

describe('date utils test', () => {
  describe('formatDate()', () => {
    it('formats a date', async () => {
      const dateFormatted = formatDate('2021-07-04T03:22:58.608758Z')

      expect(dateFormatted).toBe('7/4/2021 • 3:22:58 AM')
    })

    it('handles invalid dates', async () => {
      const dateFormatted = formatDate('wrong date')

      expect(dateFormatted).toBe('Invalid Date')
    })
  })
})
