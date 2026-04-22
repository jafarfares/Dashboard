import React from "react"
// import { ElementType } from "react"
export interface NavItem{
    title:string,
    icon?: React.ElementType, //ElementType :- component in react mean icon
    url?:string,
    items?:NavItem[], // array inside NavItem like this 
    // items: [
    //{ title: "Users", url: "/users" },
    //{ title: "Roles", url: "/roles" }
    //]
    badge?: string
}