class Set {
    constructor() {
        let items = {};

        this.add = function (value) {
            if (!this.has(value)) {
                items[value] = value;
                return true;
            }
            return false;
        };
        this.delete = function (value) {
            if (this.has(value)) {
                delete items[value];
                return true;
            } else {
                return false;
            }
        };
        this.has = function (value) {
            return items.hasOwnProperty(value);
        };
        this.clear = function () {
            items = {};
        };
        this.size = function () {
            return Object.keys(items).length;
        };
        this.values = function () {
            return Object.values(items);
        };
        this.union = function (otherSet) {
            let unionSet = new Set();

            let values = this.values();

            for (let i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }

            values = otherSet.values();

            for (let i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }

            return unionSet;
        };
        this.interstion = function (otherSet) {
            let intersection = new Set();
            let values = this.values();

            for (let i = 0; i < values.length; i++) {
                if (otherSet.has(values[i])) {
                    intersection.add(values[i]);
                }
            }
            return intersection;
        };
        this.difference = function (otherSet) {
            let difference = new Set();
            let values = this.values;

            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    difference.add(values[i]);
                }
            }

            return difference;
        };
        this.subset = function (otherSet) {
            if (this.size() > otherSet.size()) {
                return false;
            } else {
                let values = this.values();
                for (let i = 0; i < this.values.length; i++) {
                    if (!otherSet.has[values]) {
                        return false;
                    }
                }
                return true;
            }
        };
    }
}
