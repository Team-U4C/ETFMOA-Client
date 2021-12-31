export const addComma2Number = (price) => {
  if (price === undefined) return
  const type = typeof price
  var index

  if (type == 'string') {
    price = price.replace(',', '')
  } else if (type == 'number') {
    price += ''
  }

  index = price.indexOf('.')
  if (index != -1) {
    price = price.substring(0, index)
  }

  const array = price.split('').reverse()
  const result = []
  array.forEach((value, index) => {
    result.push(value)
    if (index % 3 == 2 && index != array.length - 1) {
      result.push(',')
    }
  })

  return result.reverse().join('')
}
