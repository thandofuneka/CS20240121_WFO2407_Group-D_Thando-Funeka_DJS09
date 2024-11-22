import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils'
import { Permissions, LoyaltyUser } from './enum'
import { Property, Review, ReviewWithDescription, User } from './interface'

const propertyContainer = document.querySelector('.properties') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement
const reviewsContainer = document.querySelector('.reviews') as HTMLElement
const button = document.querySelector('button') as HTMLButtonElement
const container = document.querySelector('.container') as HTMLElement
let isLoggedIn : boolean
isLoggedIn = true

//Reviews
const reviews: (Review | ReviewWithDescription)[] = [
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

const you: User = {
    firstName: ' Thando',
    lastName: 'Funeka',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 20,
    stayedAt: ['durban', 'johannesburg', 'cape town']
}


//Properties
const properties : Property[] = [
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
populateUser(you.isReturning, you.firstName)


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

let count = 0
function addReviews(array: (Review | ReviewWithDescription)[] ) : void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewsContainer?.appendChild(card)
        }
        container?.removeChild(button)
    }
}
button.addEventListener('click', () => addReviews(reviews))

//Time, Location and temperature

let currentLocation: [string, string, number] = ['Durban', '12:47', 30]
footer.innerHTML = currentLocation[0] + ' | ' + currentLocation[1] + ' | ' + currentLocation[2] + '°C'




