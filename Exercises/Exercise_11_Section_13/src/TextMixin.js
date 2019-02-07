export const textMixin = {
    data() {
        return { 
            someNewText: "We are the champions my friend!" 
        };
    },
    computed: {
        someNewTextFiltered() {
            return this.someNewText.split("").reverse().join(""); 
        },
        textCountFiltered() {
            return this.someNewText + ' (' + this.someNewText.toString().length + ')';
        }
    }
}