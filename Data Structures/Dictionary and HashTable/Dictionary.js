class Dictionary{
    constructor(){
        let items = {};

        this.has = function(key){
            return key in items;
        }

        this.set = function(key, value){
            items[key] = value;
        };

        this.delete = function(key){
            if(this.has(key)){
                delete items[key];
                return true;
            }
            else{
                return false;
            }
        };

        this.get = function(key){
            if (this.has(key)){
                return items[key];
            }
            else{
                return undefined;
            }
        }

        this.values = function(){
            return Object.values(items);
        }
        this.keys = function(){
            return Object.keys(items);
        }
        this.size = function(){
            return Object.keys(items).length;
        }
        this.clear = function(){
            items = {};
        }
        this.getItems = function(){
            return items;
        }
    }
}

let dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.cm');
dictionary.set('Tyrion', 'tyrion@email.com');
dictionary.size();