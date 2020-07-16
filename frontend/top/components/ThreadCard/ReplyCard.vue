<style lang="scss" scoped>
.reply-body {
  white-space: pre-wrap;
}
</style>

<template>
  <article class="content card">
    <div class="card-content">
      <p class="reply-body" v-html="reply.body"></p>
      <p class="has-text-right">{{reply.poster}} [{{reply.created_at}}]</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    reply: {
      type: Object,
      default: {}
    }
  }
};
</script>>
