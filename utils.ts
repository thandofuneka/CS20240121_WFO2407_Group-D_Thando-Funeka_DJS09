// Add these at the top, outside any function
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user-name') as HTMLElement
const userName = document.querySelector('#user') as HTMLElement


import { LoyaltyUser } from './enum'
import { Review } from './interface'




export function showReviewTotal (value : number, reviewer: string, isLoyalty: LoyaltyUser) {
    if (reviewTotalDisplay) {
        const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ' '
        reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + 
        reviewer + ' '+ iconDisplay
    }
}

export function populateUser(isReturning: boolean, userName: string) {
    if (returningUserDisplay && isReturning === true) {
        returningUserDisplay.innerHTML = 'back'
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}

export function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews: Review[] ) : Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}


