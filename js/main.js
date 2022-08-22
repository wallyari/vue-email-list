const app = new Vue(
    {
        el: '#app',
        data: {
            emails: [ ] //creo una lista di mail
        },
        methods: {},
        mounted: function() {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.emails.push(response.data.response);
                        //è il valore che verrà compilato da Axios nel momomento in cui verrà effettuata la richiesta del client 
                    });
                }
        }
    }
);