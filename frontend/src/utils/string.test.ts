import { capitalizeFirstLetter, joinWithSeparator } from './string'

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

  describe('joinWithSeparator()', () => {
    const list = ['foo', 'bar', 'baz']

    it('joins the list in a single string', () => {
      expect(joinWithSeparator(list)).toEqual('foo, bar, baz')
    })

    it('ignores empty values', () => {
      const listWithEmpty = ['foo', 'bar', 1, '', null, undefined]

      expect(joinWithSeparator(listWithEmpty)).toEqual('foo, bar, 1')
    })

    it('returns empty string', () => {
      expect(joinWithSeparator(undefined)).toEqual('')
    })
    it('returns empty string', () => {
      expect(joinWithSeparator(null)).toEqual('')
    })
    it('returns the received term', () => {
      const term = 'foo'

      expect(joinWithSeparator([term])).toEqual(term)
    })
    it('joins the list with it', () => {
      expect(joinWithSeparator(list, ' ')).toEqual('foo bar baz')
    })
  })
})
