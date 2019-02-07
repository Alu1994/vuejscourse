export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        };
    },
    // A more performatic filter using computed properties
    computed: {
        filteredFruits() {
            return this.fruits.filter((fruit) => {
                return fruit.match(this.filterText);
            });
        }
    },
    created() {
        console.log('Created');
    }
}