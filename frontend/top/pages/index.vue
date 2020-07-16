<template>
  <div class="section">
    <div class="container">
      <div class="content">
        <h1 class="title has-text-centered">BbsPractice</h1>
        <ThreadFormCard />
        <ThreadCard
          v-for="thread in threads"
          :key="thread.id"
          :thread="thread" />
        <ThreadPagination
          :pagenum="pagenum"
          :totalpagenum="totalpagenum"
          @click:prev="goToPrevPage"
          @click:next="goToNextPage" />
      </div>
    </div>
  </div>
</template>

<script>
import ThreadFormCard from '~/top/components/ThreadFormCard.vue';
import ThreadCard from '~/top/components/ThreadCard.vue';
import ThreadPagination from '~/top/components/ThreadPagination.vue';

// const
const COUNT_PER_PAGE = 3;

// dummy data
import sampleThreads from '~/top/sampledata/sampleThreads.js';
const sampleTotalpagenum = Math.ceil(sampleThreads.length / COUNT_PER_PAGE);

// vue export
export default {
  components: {
    ThreadFormCard,
    ThreadCard,
    ThreadPagination
  },
  data() {
    return {
      pagenum: 1,
      threads: []
    }
  },
  mounted() {
    this.fetchThreads();
  },
  computed: {
    totalpagenum() {
      return sampleTotalpagenum;
    }
  },
  methods: {
    fetchThreads() {
      this.threads = sampleThreads.slice(
        COUNT_PER_PAGE*(this.pagenum-1),
        COUNT_PER_PAGE*(this.pagenum)
      );
    },
    goToPrevPage() {
      this.pagenum--;
      this.fetchThreads();
      this.scrollToTop();
    },
    goToNextPage() {
      this.pagenum++;
      this.fetchThreads();
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo({ top: 0 });
    }
  }
};
</script>
