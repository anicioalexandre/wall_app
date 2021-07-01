import { capitalizeFirstLetter } from './string'

describe('string utils test', () => {
  describe('capitalizeFirstLetter()', () => {
    it('capitalizes a string', async () => {
      const result = capitalizeFirstLetter('some Text')

      expect(result).toBe('Some Text')
    })

    it('handle undefined entries', async () => {
      const result = capitalizeFirstLetter(undefined)

      expect(result).toBe('')
    })

    it('handle undefined entries', async () => {
      const result = capitalizeFirstLetter(null)

      expect(result).toBe('')
    })
  })
})
