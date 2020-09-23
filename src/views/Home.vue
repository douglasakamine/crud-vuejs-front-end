<template>
  <div class="home">
      <header>
        <h2>User CRUD in VueJS example</h2>
      </header>
      <b-container class="mt-3">
        <b-row>
          <b-col-3 class="m-1">
            <Form />
          </b-col-3>
          <b-col-7 class="m-1"><UserTable /></b-col-7>
        </b-row>
      </b-container>
   <footer class="fixed-bottom bg-dark text-white text-center">
     <p class="mb-2 small">Developed by Douglas Akamine | This example is using Vue Js and Bootstrap</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import UserTable from '@/components/UserTable.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    UserTable,
    Form
  }
}
</script>

<style>
header {
  background-color: #434371;
  color: white;
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;
  height: 50px;
}
h2 {
  padding: 5px;
  width: auto;
  margin: auto;
  text-align: center;
}
</style>
