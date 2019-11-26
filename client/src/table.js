toggleComplete = id => {
    console.log("Hi, I am here..");
    this.setState({
        object: this.state.object.map(line => {
            if (line.id === id) {
                line.completed = !line.completed;
            }
            return line;
        })
    });
};
render(){

    let classes = "";
    classes += this.state.toggleComplete === completed ? "warning" : "primary";
}