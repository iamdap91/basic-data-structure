class CustomHashSet {

    data = {};
    length = 0;
    // _default = new Date();

    contains = (val) => {
        val = val.toString();
        return (!!this.data[val] && this.data.hasOwnProperty(val));
    };

    add = (val) => {
        if (!this.contains(val.toString())) {
            this.length++;
        }
        this.data[val.toString()] = val;
    };

    remove = (val) => {
        val = val.toString();
        if (!this.contains(val)) {
            return false;
        } else {
            delete this.data[val.toString()];
            this.length--;
            return true;
        }
    };

    clear = () => {
        for (var val in this.data) {
            if (this.data.hasOwnProperty(val)) {
                delete this.data[val];
            }
        }
        this.length = 0;
    }

    isEmpty = () => (this.length === 0);

    getSize = () => this.length;

    toArray = () => {
        const arr = [];
        for (let [key, value] of Object.entries(this.data)) {
            arr.push(value);
        }
        return arr;
    }
}

const cHashSet = new CustomHashSet();
for (let i = 0; i< 10; i++){
    cHashSet.add(`value ${i}`);
}

console.log(cHashSet.toArray());

