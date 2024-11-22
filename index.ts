import { showReviewTotal, populateUser, showDetails } from './utils'
import { Permissions, LoyaltyUser } from './enum'
import { Price, Country } from './types' 

const propertyContainer = document.querySelector('.properties') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement
let isLoggedIn : boolean
isLoggedIn = true

//Reviews
const reviews: ({
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
} | {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
})[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said'
    },
]

//Solutions

const you: {
    firstName: string; 
    lastName: string;
    permissions: Permissions;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
    
} = {
    firstName: 'Thando',
    lastName: 'Funeka',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 20,
    stayedAt: ['durban', 'johannesburg', 'cape town']
}


//Properties
const properties : {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
    };
    contactDetails: [number, string];
    isAvailable: boolean;
}[] = [
    {
        image: './images/Colombia-property.jpeg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contactDetails: [1234567890, 'colombian@shack.com'],
        isAvailable: true
    },
    {
        image: './images/Poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk', 
            code: 34903,
            country: 'Poland'
        },
        contactDetails: [1234567890, 'polish@cottage.com'],
        isAvailable: false
    },
    {
        image: './images/London-property.jpeg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contactDetails: [1234567890, 'london@flat.com'],
        isAvailable: true
    }
]


//Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName + ' ' + you.lastName)

//add properties to the DOM
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions === Permissions.ADMIN, card, properties[i].price)
}

//Time, Location and temperature

let currentLocation: [string, string, number] = ['Durban', '12:47', 30]
footer.innerHTML = currentLocation[0] + ' | ' + currentLocation[1] + ' | ' + currentLocation[2] + '°C'




