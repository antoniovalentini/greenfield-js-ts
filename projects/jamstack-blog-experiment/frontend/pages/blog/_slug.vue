<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="links">
        <a
          href="http://localhost:3000/"
          rel="noopener noreferrer"
          class="button--green mt-3 mb-3"
        >
          Home
        </a>
      </div>
    <article>
      <nuxt-content :document="article" />
    </article>
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
  </div>
</template>