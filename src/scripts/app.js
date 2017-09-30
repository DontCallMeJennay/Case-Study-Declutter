Vue.component('adoptable-plant', {
    template: `<div>
    <img class="thumbnail" v-bind:src="pic" alt="plant available for adoption">
    <h4>{{name}}</h4><p>{{description}}</p></div>`,
    props: ['name', 'pic', 'description'],
})

new Vue({
    el: '#vue-app',
    components: {
        name: 'adoptable-plant'
    },
    data: {
        plants: [{
                name: "Prayer plant",
                pic: "../../build/images/plant1.jpg",
                description: "A hardy, low-light indoor plant. Take this plant home today!"
            },
            {
                name: "Unknown, variegated",
                pic: "../../build/images/plant2.jpg",
                description: "An ideal transplant for a sophisticated outdoor garden. Take this plant home today!"
            },
            {
                name: "Mixed pot",
                pic: "../../build/images/plant3.jpg",
                description: "Take this lovely duo home today!"
            },
            {
                name: "Unknown, purple flowering",
                pic: "../../build/images/plant4.jpg",
                description: "A striking outdoor shrub. Take this plant home today!"
            },
            {
                name: "Culinary basil",
                pic: "../../build/images/plant5.jpg",
                description: "Looks good enough to eat. Take this plant home today!"
            },
            {
                name: "African violets",
                pic: "../../build/images/plant6.jpg",
                description: "Experienced plant-keepers will be rewarded with beautiful blooms. Take this plant home today!"
            }
        ]
    },
    methods: {

    },
    computed: {

    }
})