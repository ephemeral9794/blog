<template>
  <v-app light>
    <v-content class="mx-auto">
      <v-container>
        <v-card outlined max-width="240">
          <v-card-title class="mx-auto">
            はかなや's Homepage
          </v-card-title>
        </v-card>
        <v-layout row wrap>
          <v-flex>
            <nuxt />
          </v-flex>
          <!--<v-flex>
				<v-card class="ml-auto" max-width="300">
					<v-card-title>
						詳細
					</v-card-title>
				</v-card>
			</v-flex>-->
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {}
})
</script>
