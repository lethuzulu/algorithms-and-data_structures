class HashTable{
    constructor(){
        let table = [];

        this.put = function(key, value){

        }
        this.remove = function(key){

        }
        this.get = function(key){

        }

        function loseloseHashCode(key){
            let hash = 0;
            for(let i = 0; i < key.length; i++){
                hash += key.charCodeAt(i);
            }
            return hash%37;

        }
    }
}