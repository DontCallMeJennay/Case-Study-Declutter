Vue.component('adoptable-plant', {
    template: `<div>
    <img class="thumbnail" v-bind:src="pic" alt="plant available for adoption">
    <h4>{{name}}</h4>
    <p>{{description}}</p>
    <input type='submit' value='I want this one!' class='action' />
    </div>`,
    props: ['name', 'pic', 'description']
})

Vue.component('event-item', {
    template: `<article class="event">
    <div><img class="responsive" v-bind:src='pic' alt='event ad picture'></div>
    <div><h4> {{ name }}! </h4><p class="date">{{ date }}</p>
    <p>{{ description}} </p></div></article>`,
    props: ['name', 'date', 'pic', 'description']
})

var AdoptionList = new Vue({
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

var EventList = new Vue({
    el: '#event-list',
    components: {
        name: 'event-item'
    },
    data: {
        events: [{
            date: "October 1, 2017",
            description: `Pincushion protea bells of Ireland columbine. Lupin statice flame tip monkeyflower. Stock moth orchid gorse. Spotted rock-rose bottlebrush peruvian lily. Wormwood orchid scorpion orchid, dog rose rock-rose. Oxlip star of bethlehem bee orchid flower grass of parnassus. Lilac globe artichoke.`,
            name: "Super duper event #1",
            pic: "/build/images/event.jpg"
        },
        {
            date: "September 7th, 2017",
            description: `Florem ipsum ulster mary houndstongue stonecrop. Tansy cowbane pasqueflower safflower stock spurge summer snowflake. Petal statice glory lily globe amarath, amazon lily st john’s wort. Yarrow gillyflower, tuberose goosefoot safari sunset peruvian lily september flower. Spring gentian kangaroo paw flame lily amaryllis blossom bloody crane's-bill. Dandelion rosemary sticky catchfly. Bottlebrush bell heather spotted rock-rose alpine thistle.`,
            name: "Stupendous Fun Day #2",
            pic: "/build/images/event.jpg"
        },
        {
            date: "August 18th, 2017",
            description: `Blue throatwort, Kansas feather round-leaved sundew. Bloom tjenkenrientjee dill red rose. Kangaroo paw sugarbush sea holly ox-eye daisy. Sweet William dorset heath, spider orchid balloon flower. Turtle head false goat’s beard amazon lily sneezeweed.`,
            name: "It's Summer, Yo",
            pic: "/build/images/event.jpg"
        }]
    }
})

Vue.component('story-item', {
    template: `<article class='success'>
            <h3> {{ title }} </h3>
            <p> {{ date }} </p>
            <div>
                <img class="trim float" :src='pic' alt='happy plant pic' />
            </div>
            <div>
                <p> {{ info }} </p>
                <p>-- {{ author }} </p>
            </div>
            </article>`,
    props: ['title', 'date', 'pic', 'info', 'author']
})

var SuccessStories = new Vue({
    el: '#story-list',
    components: {
        name: 'story'
    },
    data: {
        stories: [{
            author: "Rose Madder",
            date: "September 25th, 2017",
            pic: "/build/images/story2.jpg",
            info: `"Bergamot, snapdragon false goat’s beard lupin montbretia bird of paradise cornflower. Transvaal daisy tansy mistletoe pincushion protea foxglove. Turtle head spring gentian queen Anne’s lace. Oxlip plumed thistle spray carnation thistle. Grape hyacinth, summer snowflake ipsum!"`,
            title: `"Acacia masterwort"`
        },
        {
            author: "Daisy Jones",
            date: "September 18th, 2017",
            pic: "/build/images/story1.jpg",
            info: `"Marigold oxlip cosmos arum pincushion protea floss flower. Jersey lily marguerite hop. Poppy flamingo flower blue throatwort spring gentian. Lily of the valley sweet William, anemone. Kansas feather scots primrose lily tazetta ulster mary flowering onion foxtail lily. Sticky catchfly drumstick moth orchid cowbane flowering cherry brodiaea waratah. Broom, safari sunset rosebay willowherb michaelmas daisy guernsey lily. Sturt's desert rose snapdragon september flower."`,
            title: `"Marigold oxlip cosmos arum pincushion protea floss flower?"`
        },
        {   
            author: "Anonymous",
            date: "August 12th, 2017",
            pic: "/build/images/story3.jpg",
            info: `"Waxflower sweet William bloom. Red rose snow on the mountain sunflower rosebay willowherb. Foxtail lily acacia, queen Anne’s lace. Violet balloon flower prince of Wales feather cosmos heather anemone. Dune helleborine glory lily christmas rose houndstongue. Eustoma snapdragon bilberry st john’s wort queen Fabiola lily statice. Poppy bluebell spotted rock-rose september flower. Bogbean goosefoot prairie gentian stock. Ox-eye daisy dog rose sea holly baby’s breath. Drumstick."`,
            title: `"Drumstick."`

        }]
    }
})