new Vue({

    el: "#root",

    data: {
      emailList: [],
    },

    mounted() {

      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => (this.emailList.push(resp.data.response)));
        }
        
    },
});