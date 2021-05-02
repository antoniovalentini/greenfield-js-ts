<template>
  <div>
    <div v-for="article in this.articles" :key="article.id">
      <div class="card" style="text-align: left">
      <div class="card-body">
        <h2 class="card-title" style="text-align: center">{{ article.title }}</h2>
        <p class="card-text" v-html="article.content"></p>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['articles'],
}
</script>
