export function makeId(length = 5) {
  var id = ""
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < length; i++) {
    id += possible.charAt(getRandomInt(0, possible.length))
  }
  return id
}

export function saveToStorage(key, value) {
  localStorage[key] = JSON.stringify(value)
}

export function loadFromStorage(key, defaultValue = null) {
  var value = localStorage[key] || defaultValue
  return JSON.parse(value)
}

export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

export function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

export function randomBoolean() {
  return Math.random() >= 0.5 ? true : false
}

export function makeLorem(size = 100) {
  const words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color",
    "of nature",
    "tuned",
    "to",
    "a live channel",
    "All",
    "this happened",
    "more or less",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    "a pleasure",
    "to",
    "burn",
  ]
  var txt = ""
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)]
    if (size >= 1) txt += " "
  }
  return txt
}

export function makeEmailAddresse() {
  
  let userEmail = ["user@appsus.com"]

  const others = [
    "momo@momo.com",
    "kiki@kiki.com",
    "pulu@pulu.com",
    "blabla@blabla.com",
    "pipo@pipo.com",
    "siver@siver.com",
    "derw@derw.com",
    "situ@situ.com",
  ]

  const result =
    Math.random() >= 0.5
      ? userEmail.push(others[Math.floor(Math.random() * others.length)])
      : userEmail.unshift(others[Math.floor(Math.random() * others.length)])
  return userEmail
}

export function debounce(func, time) {
  let timeoutId
  return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
          func(...args)
      }, time)
  }
}
export function getExistingProperties(obj) {
  const truthyObj = {}
  for (const key in obj) {
      const val = obj[key]
      if (val || typeof val === 'boolean') {
          truthyObj[key] = val
      }
  }
  return truthyObj
}

export function animateCSS(el, animation='bounce') {
  const prefix = 'animate__'
  return new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`
      el.classList.add(`${prefix}animated`, animationName)
      function handleAnimationEnd(event) {
          event.stopPropagation()
          el.classList.remove(`${prefix}animated`, animationName)
          resolve('Animation ended')
      }

      el.addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}