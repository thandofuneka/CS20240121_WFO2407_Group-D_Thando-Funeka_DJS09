import { LoyaltyUser, Permissions } from "./enum";
import { Country, Price } from "./types";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface ReviewWithDescription extends Review {
    description: string;
}

export interface Property {
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
    }   

export interface User {
    firstName: string;
    lastName: string;
    permissions: Permissions;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
}
