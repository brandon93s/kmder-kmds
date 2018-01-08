module.exports.run = ([key], config) => {
    config.delete(`kvp.${key}`)
    return `deleted ${key}`
}