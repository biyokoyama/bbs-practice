<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a
      class="pagination-previous"
      v-if="showPrev"
      @click="clickPrev">
      ←
    </a>
    <a
      class="pagination-next"
      v-if="showNext"
      @click="clickNext">
      →
    </a>
    <!-- ナンバリングなしの簡易版
    <ul class="pagination-list">
      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
      <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
      <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
    </ul> -->
  </nav>
</template>

<script>
export default {
  props: {
    pagenum: {
      type: Number,
      default: 1
    },
    totalpagenum: {
      type: Number,
      default: 1
    }
  },
  computed: {
    showPrev() {
      return this.pagenum > 1;
    },
    showNext() {
      return this.pagenum < this.totalpagenum;
    }
  },
  methods: {
    clickPrev() {
      this.$emit('click:prev');
    },
    clickNext() {
      this.$emit('click:next');
    }
  }
}
</script>
