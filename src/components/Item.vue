<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Get All Items</h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <input type="text" name="search" v-model="q" class="form-control" @keyup="filter()">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-3" v-for="item in items" :key="item.item_id">
        <div class="card">
          <img :src="item.item_photo" class="img-fluid">
          <div class="card-body">
            <h5 class="card-title">{{item.item_name}}</h5>
            <p class="card-text">{{ item.item_desc }} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link :to="/item/+item.item_id">
              <a href="#" class="btn btn-primary">Detail</a>
            </router-link>
            <button class="ml-3 btn btn-info" @click="addItem(item.item_id)">Add To Cart</button>
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
        q:null,
        error: false,
        loading: true,
        items: null,
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
        this.$http.get('http://osapi.thetpainghtut.com/api/v1/items')
            .then(res =>{
              console.log(res);
              this.items = res.data.items;
            })
            .catch(err=>{
              console.log(err);
              this.error = true;
            })
            .finally(()=>{
              this.loading = false;
            })
      },
      addItem(id) {
        // ensure they actually typed something
        const item = this.items.find(item => item.item_id == id);

        console.log(item);
        if (!item) {
          return;
        }
        let temp = {
          id:item.item_id,
          name:item.item_name,
          qty:1
        }
        this.mycart.push(temp);
        this.saveItems();
      },
      saveItems() {
        const parsed = JSON.stringify(this.mycart);
        localStorage.setItem('cart', parsed);
      },
      filter(){
        this.$http.get('http://osapi.thetpainghtut.com/api/v1/filter_item',{
              params: {
                q: this.q
              }
            })
            .then(res =>{
              console.log(res);
              this.items = res.data.items;
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