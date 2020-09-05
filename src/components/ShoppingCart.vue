<template>
  <div class="container">
    
    <div class="row my-3">

      <div class="col-md-12" v-if="error">
        <h2 v-if="orderStatus" class="text-success">Your Order Successfully Completed!</h2>
        <h2 v-else>There is no item in your cart!</h2>
        <button class="btn btn-danger" @click="shopping()">continue shopping</button>
      </div>

      <section class="col-md-12" v-else>
        <div class="row">
          <div class="col-md-12">
            <h2>Shopping Cart</h2>
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in mycart" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td>{{item.qty}}</td>
                  <td>{{item.qty*item.price}}</td>
                </tr>
              </tbody>
              <tfoot class="tfoot-dark">
                <tr>
                  <td colspan="4">Total</td>
                  <td>{{getTotal}}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-8">
            <textarea class="form-control" v-model="notes" placeholder="Something notes"></textarea>
          </div>

          <div class="col-md-4">
            <button class="btn btn-lg btn-danger" @click="checkout()">checkout</button>
          </div>
        </div>
      </section>

      <!-- <div class="col-md-12" v-if="orderStatus">
        <h3>Your Order Successfully Completed!</h3>
        <button class="btn btn-danger" @click="shopping()">continue shopping</button>
      </div> -->
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data() {
      return {
        storeErr: false,
        loading: true,
        error: false,
        mycart : [],
        notes: '',
        orderStatus: false
      }
    },
    mounted(){
      if (localStorage.getItem('cart')) {
        try {
          this.mycart = JSON.parse(localStorage.getItem('cart'));
          if (this.mycart.length<1) {
            this.error = true;
          }
        } catch(e) {
          localStorage.removeItem('cart');
        }
      }else{
        this.error = true;
      }
    },
    computed:{
      getTotal() {
        let total = 0;
        this.mycart.forEach(item => {
          total += item.qty*item.price
        });
        return total;
      }
    },
    methods:{
      shopping(){
        this.$router.replace('/item')
      },
      checkout(){
        // localStorage.clear();
        // this.error = true;
        // this.orderStatus = true;

        this.$http.post('http://osapi.thetpainghtut.com/api/v1/orders',{
              shop_data: JSON.stringify(this.mycart),
              notes: this.notes
            })
            .then(res =>{
              console.log(res);
              // this.items = res.data.items;
              localStorage.clear();
              this.error = true;
              this.orderStatus = true;
            })
            .catch(err=>{
              console.log(err);
              this.storeErr = true;
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