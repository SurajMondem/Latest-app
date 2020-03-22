const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        "/v2/stats/diff/country",
        proxy({
            target: "http://api.coronatracker.com",
            changeOrigin: true
        })
    )
};
