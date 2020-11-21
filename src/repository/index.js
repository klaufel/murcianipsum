const DEFAULT_MAX_PHRASE = 4
const DEFAULT_MAX_LINE = 6
const DEFAULT_MAX_PARAGRAPHS = 3

export const getRandom = max => Math.floor(Math.random() * max)

export const upperCaseFirst = str => str.replace(/^\w/, c => c.toUpperCase())

export const getString = (values, tag) =>
  values.map(value => (tag ? `<p>${value}</p>\n\n` : `${value}\n\n`)).join('')

export const genPhrase = ({phrases, number = DEFAULT_MAX_PHRASE}) => {
  let paragraph = ''

  for (let i = 1; i <= number; i++) {
    const random = getRandom(phrases.length)
    const phrase = `${phrases[random]}`
    const randomPhrase = getRandom(number)

    paragraph += phrase
    if (i < number) paragraph += (i === randomPhrase) === number ? ', ' : ' '
    else paragraph += '.'
  }

  return upperCaseFirst(paragraph)
}
export const genLine = ({phrases, number = DEFAULT_MAX_LINE}) => {
  let paragraph = ''

  for (let i = 1; i <= number; i++) {
    const phrase = genPhrase({phrases})

    if (i === number) paragraph += phrase
    else paragraph += `${phrase} `
  }

  return paragraph
}

export const genParagraphs = ({phrases, number = DEFAULT_MAX_PARAGRAPHS}) => {
  const paragraph = []

  for (let i = 1; i <= number; i++) {
    paragraph.push(genLine({phrases}))
  }

  return paragraph
}
