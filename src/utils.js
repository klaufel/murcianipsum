export const getRandom = max => Math.floor(Math.random() * max)

export const upperCaseFirst = str => str.replace(/^\w/, c => c.toUpperCase())

export const getString = (values, tag) =>
  values.map(value => (tag ? `<p>${val}</p>\n\n` : `${value}\n\n`)).join('')

export const genLine = (phrases, maxLine = 20) => {
  const length = phrases.length
  let paragraph = ''

  for (let i = 1; i <= maxLine; i++) {
    const random = getRandom(length)
    const genParagraph = `${phrases[random]}`
    if (i === 1) {
      paragraph += `${upperCaseFirst(genParagraph)} `
    } else if (i < maxLine) {
      paragraph += `${genParagraph} `
    } else {
      paragraph += `${genParagraph}.`
    }
  }

  return paragraph
}

export const genParagraphs = (phrases, number = 3) => {
  const paragraph = []

  for (let i = 1; i <= number; i++) {
    paragraph.push(genLine(phrases))
  }

  return paragraph
}
