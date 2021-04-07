new Vue({

    el: "#root",

    data: {
      emailList: [],
    },

    mounted() {

        // ritorno una mail casuale per 10 volte con un ciclo
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => (this.emailList.push(resp.data.response)));
        }
        
    },
});