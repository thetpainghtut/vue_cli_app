<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Detail of an Item</h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="item.item_photo" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{item.item_name}}</h5>
                <p class="card-text">{{ item.item_desc }} This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>
                  <span class="mr-2"> <b-icon icon="tag-fill" variant="info"></b-icon> {{item.brand.name}}</span>
                  <span> <b-icon icon="tag-fill" variant="dark"></b-icon> {{item.subcategory.name}}</span>
                </p>
                
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                <input type="number" name="qty" value="1" class="form-control w-25 d-inline-block">

                <a href="#" class="ml-3 btn btn-info">Add To Cart</a>

              </div>
            </div>
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
        item: null
      }
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData(){
        let id = this.$route.params.id;
        this.$http.get('http://osapi.maythetpaing.me/api/items/'+id)
            .then(res =>{
              console.log(res);
              this.item = res.data.item;
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