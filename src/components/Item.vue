<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Get All Items</h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-4" v-for="item in items" :key="item.item_id">
        <div class="card">
          <img :src="item.item_photo" class="img-fluid">
          <div class="card-body">
            <h5 class="card-title">{{item.item_name}}</h5>
            <p class="card-text">{{ item.item_desc }} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link :to="/item/+item.item_id">
              <a href="#" class="btn btn-primary">Detail</a>
            </router-link>
            <a href="#" class="ml-3 btn btn-info">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data() {
      return {
        error: false,
        loading: true,
        items: null
      }
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData(){
        this.$http.get('http://osapi.maythetpaing.me/api/items')
            .then(res =>{
              console.log(res);
              this.items = res.data;
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
  
</style>