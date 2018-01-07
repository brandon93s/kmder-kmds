const opn = require('opn')

module.exports.run = (args) => {
    let query = args.join(" ")
    opn(`https://www.google.com/search?q=${encodeURIComponent(query)}`, {app: 'edge'})
    return `Google search for "${query}" opened in default browser...`
}