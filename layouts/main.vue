<template>
  <v-app light>
    <v-app-bar app color="primary">
      <!--<span><img src="./assets/favicon.png" alt=""/></span>-->
      <v-toolbar-title>
        <nuxt-link to="/" class="heading-5 link-black">
          はかなや's Homepage
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-layout wrap row>
          <v-flex xs9>
            <nuxt />
          </v-flex>
          <v-flex xs3>
            <v-card outlined>
              <v-list>
                <v-subheader>
                  目次
                </v-subheader>
                <v-list-item-group>
                  <v-list-item
                    v-for="(content, i) in contents"
                    :key="i"
                    :to="`/${content.id}`"
                    nuxt
                  >
                    <v-list-item-title>{{ content.title }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
        <v-footer absolute>
          <v-col class="text-center" cols="12">
            (c){{ new Date().getFullYear() }} —
            <strong
              ><a href="https://github.com/ephemeral9794/">
                ephemeral9794
              </a>
            </strong>
          </v-col>
        </v-footer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from '@vue/composition-api'
import { Content, MicroCMSResult } from '@/types/microcms'

export default defineComponent({
  setup(_props, context) {
    const contents = ref<Content[]>()

    watchEffect(async () => {
      const result: MicroCMSResult = await context.root.$axios.$get('/blog')
      contents.value = result.contents
    })

    return {
      contents
    }
  }
})
</script>

<style lang="scss">
$black: rgb(255, 255, 255);
a.link-black {
  color: $black !important;
  text-decoration: none;
}
</style>
