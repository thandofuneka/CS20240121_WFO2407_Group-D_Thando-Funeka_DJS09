import { showReviewTotal, populateUser } from './utils'
let isOpen : boolean

//Reviews
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

//Solutions

const you: {
    firstName: string; 
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: ' Thando',
    lastName: 'Funeka',
    isReturning: true,
    age: 20,
    stayedAt: ['durban', 'johannesburg', 'cape town']
}

//Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName + you.lastName)



