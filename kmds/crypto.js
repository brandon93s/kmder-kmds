module.exports = {
    type: "http",
    url: "https://api.cryptonator.com/api/ticker/{0}-{1}",
    jp: "$.ticker",
    log: (Reporter, value) => {
        Reporter.prettyJson(value[0])
    }
}
