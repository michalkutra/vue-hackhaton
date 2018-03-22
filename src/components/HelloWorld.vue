<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul v-if="!isLoading">
      <li
        v-for="(slot, key) in slots"
        :key="key"
      >
        {{ slot.start }}
      </li>
    </ul>
    <p v-else>
      Loading...
    </p>
  </div>
</template>

<script>
import request from './../plugins/request/src/request';
import moment from 'moment';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  async created () {
    this.slots = await this.fetchSlots();
  },

  data () {
    return {
      slots: {},
      isLoading: true,
    }
  },

  methods: {
    async fetchSlots() {
      const response = await request({
        http: {
          url: `v3/doctors/461660/addresses/662044/slots`,
          params: {
            start: moment().utc().format(),
            end: moment().utc().add(14, 'w').format(),
            with: ['slot.services'],
          },
        },
      });

      this.isLoading = false;

      return response.items;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
