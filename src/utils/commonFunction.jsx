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

export const getColorMap = () => {
  let colorMap = [
    '#f05d1d',
    '#f16529',
    '#f16e35',
    '#f27641',
    '#f37f4d',
    '#f48758',
    '#f59064',
    '#f59870',
    '#f6a17c',
    '#f7aa88',
    '#f8b294',
    '#f9bba0',
    '#f9c3ac',
    '#faccb8',
    '#fbd4c4',
    '#fcddcf',
    '#fde5db',
    '#fdeee7',
    '#fef6f3',
    '#ffffff',
  ]
  return colorMap
}
