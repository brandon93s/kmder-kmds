module.exports.run = ([key, defaultValue], config) => {
    key = key ? `kvp.${key}` : 'kvp'
    return config.get(key, defaultValue)
}