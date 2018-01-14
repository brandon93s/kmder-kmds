const got = require('got')

const help = `
  [default]           Show top US headlines
  <search term>       Search headlines by term
  key                 Update or retrieve API Key
`

const configKey = 'news.apikey'
const key = (key, config) => {
    if (key) { 
        config.set(configKey, key)
    } else {
        key = config.get(configKey)
    }

    return key
}

const news = async (args, config) => {
    const k = key(null, config)
    if (!k) {
        return `An API Key required to use the news command\nRegister for an API Key at https://newsapi.org\nSet your API Key with 'kmd news key <key>'`
    }

    let url = `https://newsapi.org/v2/top-headlines?apiKey=${k}`

    let query = args.join('%20')
    if (query) {
        url += `&q=${query}`
    } else {
        url += '&country=us'
    }

    const response = await got(url, {json: true})
    const articles = response.body.articles.slice(0, 10) 

    if (articles.length === 0) return 'No results'

    return articles.map(a => {
        return {
            title: a.title,
            summary: a.description,
            source: a.source.name,
            url: a.url,
            date: a.publishedAt
        }
    })
}

module.exports.run = async (args, config) => {
    const subcommand = args[0] || ''
    switch (subcommand.toLowerCase()) {
        case 'help':
            return help
        case 'key':
            return `API Key: ${key(args[1], config)}`
        default:
            return news(args, config)
    }
}

module.exports.log = (Reporter, value) => {
    Reporter.prettyJson(value)
}