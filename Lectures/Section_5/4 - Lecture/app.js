var data = {
    title: 'The VueJs Instance',
    showParagraph: false
}

var vm1 = new Vue({
    el: '#app1',
    data: data,
    methods: {
        show: function(){
            this.showParagraph = true;
            this.updateTitle("The VueJs Instance (Updated)");
        },
        updateTitle: function(title){
            this.title = title;
        }
    },
    computed: {
        lowerCaseTitle: function(){
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value){
            alert('Title changed, new value: ' + value);
        }
    }
});

console.log(vm1.$data === data);

setTimeout(function(){
    vm1.title = "Change by Timer";
    vm1.show();
}, 3000);

// Does Not Work!!
vm1.newProp = "Doesn't Work!!"
// Does Not Work!!

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The Second Instance',
        showParagraph: false
    },
    methods: {
        show: function(){
            this.showParagraph = true;
            this.updateTitle("The Second Instance (Updated)");
        },
        updateTitle: function(title){
            this.title = title;
        },
        onChange: function(){
            vm1.title = 'Changed!';
        }
    },
    computed: {
        lowerCaseTitle: function(){
            return this.title.toLowerCase();
        }
    }
});