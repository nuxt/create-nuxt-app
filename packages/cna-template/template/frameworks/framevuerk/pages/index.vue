<template>
  <fvMain>
    <fvSidebar v-model="sidebar" class="sidebar">
      <div class="fv-text-center fv-padding">
        <fvAvatar name="Default User" src="https://randomuser.me/api/portraits/women/44.jpg" size="128px" />
        <h2 class="fv-padding-sm">
          Default User
        </h2>
      </div>
      <fvList parent>
        <fvListItem class="selected">
          <i class="material-icons">sentiment_very_satisfied</i> Welcome
        </fvListItem>
        <fvListItem disabled>
          <i class="material-icons">person</i> Profile
        </fvListItem>
        <fvListItem disabled>
          <i class="material-icons">mail</i> Messages
        </fvListItem>
        <fvListItem disabled>
          <i class="material-icons">event_available</i> Events
        </fvListItem>
        <fvListItem disabled>
          <i class="material-icons">photo</i> Pictures
        </fvListItem>
      </fvList>
    </fvSidebar>
    <fvContent>
      <fvHeader>
        <fvButton class="fv-margin-end fv-hidden-lg fv-hidden-xl" @click="toggleSidebar">
          <i class="material-icons">menu</i>
        </fvButton>
        <div class="fv-margin-end">
          <FramevuerkLogo />
        </div>
        <div class="fv-grow">
          <h2 class="fv-hidden-xs">
            Framevuerk
          </h2>
          <small class="fv-hidden-sm fv-hidden-xs"> Generated Nuxt + Framevuerk Template </small>
        </div>
        <fvButton class="fv-margin-end" @click.prevent="toggleDocsMenu">
          <i class="material-icons">list</i>
          <span class="fv-hidden-xs fv-hidden-sm"> Documents </span>
          <fvMenu v-model="docsMenu">
            <div>
              <div class="fv-border-bottom fv-padding">
                <label class="fv-text-light"> <i class="material-icons">list</i> Documents </label>
              </div>
              <div class="fv-padding">
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://www.framevuerk.com/"><i class="material-icons">link</i> Framevuerk Docs</a>
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://github.com/framevuerk/framevuerk"><i class="material-icons">link</i> Framevuerk on Github</a>
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://nuxtjs.org/"><i class="material-icons">link</i> Nuxt Docs</a>
                <a class="fv-link fv-block" target="_blank" rel="noopener noreferrer" href="https://github.com/nuxt/nuxt.js"><i class="material-icons">link</i> Nuxt on GitHub</a>
              </div>
            </div>
          </fvMenu>
        </fvButton>
        <fvButton class="fv-margin-end">
          <i class="material-icons">clear</i>
          <span class="fv-hidden-xs fv-hidden-sm"> Cancel </span>
        </fvButton>
        <fvButton>
          <i class="material-icons">done</i>
          <span class="fv-hidden-xs fv-hidden-sm"> Submit </span>
        </fvButton>
      </fvHeader>
      <div class="content fv-padding">
        <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" />
        <div class="content__header fv-margin-bottom fv-padding">
          <div class="fv-padding fv-margin-bottom fv-text-center">
            <Logo />
          </div>
          <p>
            <b>Framevuerk</b> is a Fast, Responsive, Without Dependencies, Both Direction Support and Configurable UI Framework based on <b>Vue.js</b>.
            In this template we just add it to <b>Nuxt.js</b> and put some of most usable component inside a form to show you how it's look like.
          </p>
        </div>
        <div class="content__body fv-border fv-radius fv-shadow">
          <label class="fv-control-label fv-padding"> <i class="material-icons">person_add</i> Create New User </label>
          <div class="fv-padding container">
            <fvForm class="fv-row">
              <fvFormElement class="fv-col-md-6" label="First Name">
                <fvInput v-model="exmps.firstName" placeholder="Enter First Name" />
              </fvFormElement>
              <fvFormElement class="fv-col-md-6" label="Last Name">
                <fvInput v-model="exmps.lastName" placeholder="Enter Last Name" />
              </fvFormElement>
              <fvFormElement class="fv-col-12" label="Gender" inline>
                <fvCheck v-model="exmps.gender" content="m">
                  Men
                </fvCheck>
                <fvCheck v-model="exmps.gender" content="f">
                  Women
                </fvCheck>
                <fvCheck v-model="exmps.gender" :content="null">
                  Other
                </fvCheck>
              </fvFormElement>
              <fvFormElement class="fv-col-12" label="Home to Work Distance">
                <template slot="label" slot-scope="scope">
                  {{ scope.label }}
                  <span class="fv-margin-start-sm fv-text-primary">
                    <span v-if="exmps.htw">~{{ exmps.htw }}km</span>
                  </span>
                </template>
                <fvRange v-model="exmps.htw" :data="{from: 1, to: 35}" />
              </fvFormElement>
              <fvFormElement class="fv-col-sm-4" label="Is Maried?" inline>
                <fvSwitch v-model="exmps.married" @input="exmps.marriageDate = undefined" />
              </fvFormElement>
              <fvFormElement class="fv-col-sm-8" label="Date of Marriage">
                <fvDatepicker v-model="exmps.marriageDate" placeholder="Enter Date of Marriage" :disabled="!exmps.married" />
              </fvFormElement>
              <fvFormElement class="fv-col" label="Living Continent">
                <fvSelect
                  v-model="exmps.continent"
                  placeholder="Enter Living Continent"
                  :options="['Africa','Antarctica','Asia','Europe','North America','Australia/Oceania','South America']"
                  text-key=""
                  value-key=""
                  disabled-key=""
                />
              </fvFormElement>
              <fvFormElement class="fv-col-12" label="Biography">
                <fvTextarea v-model="exmps.bio" placeholder="Enter Your Biography" auto-height />
              </fvFormElement>
            </fvForm>
          </div>
        </div>
      </div>
    </fvContent>
  </fvMain>
</template>

<script>
import Logo from '~/components/Logo.vue'
import FramevuerkLogo from '~/components/FramevuerkLogo.vue'

export default {
  components: {
    Logo,
    FramevuerkLogo
  },
  data () {
    return {
      sidebar: false,
      docsMenu: false,
      slider: 'One',
      exmps: {
        htw: 13,
        firstName: undefined,
        lastName: undefined,
        gender: 'm',
        continent: undefined,
        married: undefined,
        marriageDate: undefined,
        bio: undefined
      }
    }
  },
  methods: {
    toggleSidebar () {
      this.sidebar = !this.sidebar
    },
    toggleDocsMenu () {
      setTimeout(() => {
        this.docsMenu = !this.docsMenu
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  max-width: 768px;
}

.sidebar {
  min-width: 300px;
}
</style>
