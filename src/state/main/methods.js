
const methods = {

    get(key){
        return this.state[key]
    },

    async incrementCountBy2(){
        await this.setters.setNum1(this.state.num1 + 1)
        await this.setters.setNum1(this.state.num1 + 1)
    },

    thisKeyword(){
        return Object.keys(this)
    }

}

export default methods;


export const namespacedMethods = {
    someNamespacedMethods: {
        retrieveValue(key){
            return this.otherNamespacedMethods.retrieveValue(key)
        }
    },

    otherNamespacedMethods: {
        retrieveValue(key){
            return this.state[key]
        }
    }
}
