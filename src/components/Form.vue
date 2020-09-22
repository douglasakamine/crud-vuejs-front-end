<template>
  <b-form @submit.prevent="saveUser" @reset="blankForm" class="p-2 mb-2">

    <b-form-group id="input-group-1" label="Your Name:" label-for="input-1" class="font-weight-bold">
     <b-form-input id="input-1" required placeholder="Enter name">
      </b-form-input>
      </b-form-group>

    <b-form-group id="input-group-2" label="Email address:" label-for="input-2" class="font-weight-bold">
      <b-form-input id="input-2" type="email" required placeholder="Enter email">
      </b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Your Username:" label-for="input-3" class="font-weight-bold">
      <b-form-input id="input-3" required placeholder="Enter username">
      </b-form-input>
     </b-form-group>

      <b-button type="submit" variant="primary" class="m-1">Submit</b-button>
      <b-button type="reset" variant="danger" class="m-1">Reset</b-button>
    </b-form>
</template>

<script>

export default {
  methods: {
    saveUser () {
      this.$store.dispatch('addUser', {
        name: event.target[0].value,
        email: event.target[1].value,
        username: event.target[2].value,
        edit: false
      })
      this.blankForm()
    },
    blankForm () {
      event.target[0].value = ''
      event.target[1].value = ''
      event.target[2].value = ''
    }
  }
}
</script>

<style scoped>
form {
  border: 1px solid black;
  border-radius: 0.5em;
}
</style>
