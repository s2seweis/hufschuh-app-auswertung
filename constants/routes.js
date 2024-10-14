// also change in gatsby-config.js
const apiBase = "http://localhost:3210"
// const apiBase = "https://api.hufschuh.app"

const routes = {
  /* MAIN */
  app: "/",
  evaluate: "/evaluate",

  /* API */
  api: {
    base: apiBase,
    login: `${apiBase}/auth/local`,
    user: id => `${apiBase}/users/${id}`,
    horses: `${apiBase}/horses`,
    horseComments: `${apiBase}/horse-comments`,
    horseComment: id => `${apiBase}/horse-comments/${id}`,
  },
}

export default routes
