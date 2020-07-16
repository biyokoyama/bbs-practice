<style lang="scss" scoped>
.thread-body {
  white-space: pre-wrap;
}
</style>

<template>
  <article class="content card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{thread.title}}</p>
        </div>
      </div>
      <div class="content">
        <p class="thread-body" v-html="thread.body"></p>
        <p class="has-text-right">
          {{thread.poster}} [{{thread.created_at}}]
        </p>
      </div>
      <div class="content">
        <ReplyCard
          v-for="reply in thread.replys"
          :key="reply.id"
          :reply="reply" />
        <ReplyFormCard />
      </div>
    </div>
  </article>
</template>

<script>
import ReplyCard from './ThreadCard/ReplyCard.vue';
import ReplyFormCard from './ThreadCard/ReplyFormCard.vue';

export default {
  components: {
    ReplyCard,
    ReplyFormCard
  },
  props: {
    thread: {
      type: Object,
      default: {}
    }
  }
};
</script>
