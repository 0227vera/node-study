module.exports = () => {
    var name = 'salvatore';
    this.changeName = changeName => {
       name = changeName;
    };
    this.getName = () => {
        return name
    }
    this.setName = newname => {
        name = newname;
    }
    return this
};