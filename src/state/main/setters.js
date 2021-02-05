
const setters = {

    customSetter(){
        this.setState({num1: 100, str1: "new string"})
    },

    async asyncSetter(){
        await this.setState({num1: this.state.num1 + 1})
        await this.setState({num1: this.state.num1 + 1})
        await this.setState({num1: this.state.num1 + 1})
    }

}

export default setters;
