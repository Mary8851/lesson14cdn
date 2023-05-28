const app = Vue.createApp({
    data() {
            return {
                name: '',
                surname: '',
                patronymic: '',
                selected: '',
                checked: [],
                radio: '',
                textarea: ''
            }
        }
    },
);

app.mount('#app')