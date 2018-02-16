# <%= name %>

> <%= description %>

## Build Setup

``` bash
# install dependencies
$ cd src
$ <%= pm %> install

# serve with hot reload at localhost:3000
$ cd src
$ <% if (pm === 'npm') { %><%= pm %> run dev<% } else if (pm === 'yarn') { %><%= pm %> dev<% } %>

# build for production and launch server
$ cd src
$ <% if (pm === 'npm') { %><%= pm %> run build<% } else if (pm === 'yarn') { %><%= pm %> build<% } %>
$ <%= pm %> start
<% if (server === 'firebase') { %>
# build for production and serve firebase locally
$ cd src
$ <% if (pm === 'npm') { %><%= pm %> run build<% } else if (pm === 'yarn') { %><%= pm %> build<% } %>
$ <% if (pm === 'npm') { %><%= pm %> run copy:dist<% } else if (pm === 'yarn') { %><%= pm %> copy:dist<% } %>
$ <%= pm %> start:firebase
<% } %>
# generate static project
$ <% if (pm === 'npm') { %><%= pm %> run generate<% } else if (pm === 'yarn') { %><%= pm %> generate<% } %>
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
