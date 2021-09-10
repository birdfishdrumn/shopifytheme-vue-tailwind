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

const miniCartState = Vue.reactive({
    hidden: true
})

const toggleMiniCart = {
    openCart() {
        miniCartState.hidden = !miniCartState.hidden
        menuState.hidden = true
    }
}

const menuState = Vue.reactive({
    hidden: true
})

const toggleMenu = {
    openMenu() {
        menuState.hidden = !menuState.hidden
        miniCartState.hidden = true
    }
}

const toggleClose = {
    closeAll() {
        miniCartState.hidden = true
        menuState.hidden = true
    }
}