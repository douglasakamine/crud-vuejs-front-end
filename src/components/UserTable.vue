<template>
<div class="overflow-auto">
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
                <td colspan="2"></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="user.index">

                <td v-show="!user.edit">{{ user.name }}</td>
                <td v-show="user.edit"><input type="text" v-model="user.name" required></td>

                <td v-show="!user.edit">{{ user.username }}</td>
                <td v-show="user.edit"><input type="text" v-model="user.username" required></td>

                <td v-show="!user.edit">{{ user.email }}</td>
                <td v-show="user.edit"><input type="email" v-model="user.email" required></td>

                 <td v-show="!user.edit"><b-button variant="warning" @click="editUser(index)">Edit</b-button></td>
                 <td v-show="user.edit"><b-button variant="success" @click="userModified(index)">Done</b-button></td>

                 <td><b-button variant="danger" @click="deleteUser(index)">Delete</b-button></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },
  methods: {
    editUser (index) {
      this.users[index].edit = !this.users[index].edit
    },
    deleteUser (index) {
      if (confirm('Are you sure you want to remove this user?')) {
        this.$store.dispatch('deleteUser', index)
      }
    },
    userModified (index) {
      this.users[index].edit = !this.users[index].edit
    }
  }
}
</script>

<style scoped>
table {
    margin: auto;
    width: 900px;
    border: black 2px solid;
}
thead {
    background-color: #79AEA3;
    border: 1px solid black;
}
thead tr td {
    text-align: center;
    font-weight: bold;
}
tbody tr{
    border: 1px solid black;
}
tbody tr td {
    text-align: center;
}

</style>
