# Nuxt.js, Firebase Cloud Function and Hosting Integration

> An optimized cloud function to render Nuxt.js app.

## Setup

```bash
# install dependencies
$ <% if (pm === 'npm') { %><%= pm %> install<% } else if (pm === 'yarn') { %><%= pm %><% } %>

# simulate firebase hosting locally
$ firebase serve --only functions,hosting
# or with port
$ firebase serve --only functions,hosting -p 9090
```

For detailed explanation about firebase cloud function, checkout [Cloud Functions for Firebase](https://firebase.google.com/docs/functions).