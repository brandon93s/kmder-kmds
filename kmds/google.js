const opn = require('opn')

module.exports.run = async (args) => {
    let query = args.join(" ")
    await opn(`https://www.google.com/search?q=${encodeURIComponent(query)}`)
    return `Google search for "${query}" opened in default browser...`
}