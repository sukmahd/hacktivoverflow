<template>
  <div>
    <div class="form-group">
      <input v-model="formQuest.title" data-toggle="collapse" data-target="#demo" class="form-control" placeholder="Click Here to start new Question..." type="text">
    </div>
    <div class="collapse" id="demo">
      <div class="form-group">
        <textarea v-model="formQuest.content" class="form-control" placeholder="Content...." rows="3"></textarea>
      </div>
      <div class="form-group text-right">
        <button v-if="user" @click="postQuest()" type="button" class="btn btn-warning">Create Topic</button>
        <button v-else type="button" class="btn btn-danger" disabled>Login First</button>
        <button type="button" class="btn btn-default" data-toggle="collapse" data-target="#demo">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import { mapActions } from 'vuex'
  export default{
    name: 'addquestion',
    data: function () {
      return {
        formQuest: {
          title: '',
          content: '',
          get author () {
            return localStorage.getItem('id')
          }
        }
      }
    },
    computed: {
      user () {
        return this.$store.state.username
      }
    },
    methods: {
      ...mapActions([
        'pushQuestions'
      ]),
      postQuest: function () {
        this.pushQuestions(this.formQuest)
        this.formQuest.title = ''
        this.formQuest.content = ''
      }
    }
  }
</script>
