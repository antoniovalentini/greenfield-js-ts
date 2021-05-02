<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">blog-frontend</h1>
      <div class="links">
        <a
          href="http://localhost:3000/blog/hello"
          rel="noopener noreferrer"
          class="button--green"
        >
          Blog
        </a>
        <a
          href="https://github.com/antoniovalentini"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
        <h1>Latest from the blog</h1>
        <div v-if="error">
          {{ error }}
        </div>
        <div v-else>
          <Articles :articles="articles"></Articles>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Articles from '~/components/Articles.vue';
import axios from 'axios';

export interface Article {
  title: string;
  content: string;
}

export default Vue.extend({
  data() {
    return {
      articles: [] as Article[],
      error: null,
    }
  },
  components: {
    Articles
  },
  async mounted() {
    try {
      const md = require('markdown-it')();
      const result = await axios.get('http://localhost:1337/articles/');
      result.data.forEach((art: any) => {
        this.articles.push(
          {
              title: art.title,
              content: md.render(art.content),
          }
        )
      });
    } catch (error) {
      this.error = error;
    }
    
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
