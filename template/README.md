# <%= name %>

> <%= description %>

## Build Setup

``` bash
# install dependencies
$ <%= pm %> install

# serve with hot reload at localhost:3000
$ <% if (pm === 'npm') { %><%= pm %> run dev<% } else if (pm === 'yarn') { %><%= pm %> dev<% } %>

# build for production and launch server
$ <% if (pm === 'npm') { %><%= pm %> run build<% } else if (pm === 'yarn') { %><%= pm %> build<% } %>
$ <%= pm %> start
<% if (server === 'firebase') { %>
# build for production and serve firebase locally
$ <% if (pm === 'npm') { %><%= pm %> run build:firebase<% } else if (pm === 'yarn') { %><%= pm %> build<% } %>
$ <%= pm %> start:firebase
<% } %>
# generate static project
$ <% if (pm === 'npm') { %><%= pm %> run generate<% } else if (pm === 'yarn') { %><%= pm %> generate<% } %>
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
