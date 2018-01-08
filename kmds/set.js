module.exports.run = ([key, value], config) => {
    config.set(`kvp.${key}`, value)
    return `set ${key}:${value}`
}