const reviewTotalDisplay = document.querySelector('#reviews')!
const returningUserDisplay = document.querySelector('#returning-user')!
const userNameDisplay = document.querySelector('#user-name')!

export function showReviewTotal (value : number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '| last reviewed by ' + 
    reviewer + ' '+ iconDisplay
}


export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}
