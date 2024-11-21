const reviewTotalDisplay = document.querySelector('#reviews')!
const returningUserDisplay = document.querySelector('#returning-user')!
const userNameDisplay = document.querySelector('#user-name')!

let isOpen : boolean

const reviews = [
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

function showReviewTotal (value : number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '| last reviewed by ' + 
    reviewer + ' '+ iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
    firstName: string; 
    lastName: string;
    isReturning: boolean;
    age: number
} = {
    firstName: ' Thando',
    lastName: 'Funeka',
    isReturning: true,
    age: 20
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName + you.lastName)