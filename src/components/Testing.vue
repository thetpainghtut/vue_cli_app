<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Using NEWS API</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12" v-for="(article,i) in articles" :key="i">
        <a :href="article.url" target="_blank">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img :src="article.urlToImage" class="img-fluid">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-dark">{{article.title}}</h5>
                  <p class="card-text text-dark">{{article.description}}</p>
                  <p class="card-text"><small class="text-muted">{{article.publishedAt}}</small></p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Testing',
    props: {
      name: null
    },
    data(){
      return {
        articles: null
      }
    },
    mounted(){
      this.getItems();
    },
    methods:{
      getItems() {
        this.$http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-27&sortBy=publishedAt&apiKey=a82bfaa005944a2ab394fdb6bd06775c')
            .then(res =>{
              console.log(res);
              this.articles = res.data.articles;
            })
            .catch(err=>{
              console.log(err);
              this.error = true;
            })
            .finally(()=>{
              this.loading = false;
            })
      }
    }
  }
</script>

<style type="text/css">
  .card-body{
    text-align: left !important;
  }

  a{
    text-decoration: none !important;
  }
</style>