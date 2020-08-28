<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Detail of an Item</h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3" v-if="item">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="item.item_photo" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{item.item_name}}</h5>
                <p class="card-text">{{ item.item_desc }} This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>
                  <span class="mr-2"> <b-icon icon="tag-fill" variant="info"></b-icon> {{item.brand.brand_name}}</span>
                  <span> <b-icon icon="tag-fill" variant="dark"></b-icon> {{item.subcategory.subcategory_name}}</span>
                </p>
                
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                <input type="number" name="qty" v-model="qty" class="form-control w-25 d-inline-block">

                <button class="ml-3 btn btn-info" @click="addItem()">Add To Cart</button>

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
        item: null,
        qty:1,
        mycart: []
      }
    },
    mounted(){
      if (localStorage.getItem('cart')) {
        try {
          this.mycart = JSON.parse(localStorage.getItem('cart'));
        } catch(e) {
          localStorage.removeItem('cart');
        }
      }
      this.getData();
    },
    methods:{
      getData(){
        let id = this.$route.params.id;
        this.$http.get('http://osapi.thetpainghtut.com/api/v1/items/'+id)
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
      },
      addItem() {
        // ensure they actually typed something
        if (!this.item) {
          return;
        }
        let temp = {
          id:this.item.item_id,
          name:this.item.item_name,
          qty:parseInt(this.qty)
        }
        this.mycart.push(temp);
        this.saveItems();
      },
      saveItems() {
        const parsed = JSON.stringify(this.mycart);
        localStorage.setItem('cart', parsed);
      }
    }
  }
</script>

<style type="text/css">
  
</style>