<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Order List</h2>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <input type="text" name="search" v-model="q" class="form-control" @keyup="filter()" placeholder="Search order ...">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Voucherno</th>
              <th>Total</th>
              <th>Customer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,index) in orders" :key="index">
              <td>{{index+1}}</td>
              <td>{{order.order_voucherno}}</td>
              <td>{{order.order_total}}</td>
              <td>{{order.order_user.user_name}}</td>
              <td>
                <a href="#" class="btn btn-info">Detail</a>
              </td>
            </tr>
          </tbody>
        </table>
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
        orders: null,
      }
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData(){
        this.$http.get('http://osapi.thetpainghtut.com/api/v1/orders')
            .then(res =>{
              console.log(res);
              this.orders = res.data.orders;
            })
            .catch(err=>{
              console.log(err);
              this.error = true;
            })
            .finally(()=>{
              this.loading = false;
            })
      },
      filter(){
        return this.q;
      }
    }
  }
</script>

<style type="text/css">
  
</style>