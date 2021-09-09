// Put your application javascript here
const store = Vue.reactive({
    state: {
        cartState: []
    },
    async getCart() {
        try {
            const res = await axios.get("/cart.js")
            this.state.cartState.unShift(res.data)
        } catch (e) {
            console.error(e)
        }

    }
})

const miniCartState