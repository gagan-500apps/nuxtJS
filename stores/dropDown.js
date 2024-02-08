import {defineStore} from "pinia"

export const userForm =defineStore('form', ()=>{

    const dropDown=[
        {id:1, route:'/javascript/regex', name:'Regex'},
        {id:2, route:'/javascript/prototype', name:'Prototype'},
        {id:3, route:'/javascript/api', name:'API Data'},
        {id:4, route:'/javascript/memoryManagement', name:'Memory Management'},
        {id:5, route:'/javascript/oop', name:'OOP'},
        {id:6, route:'/javascript/sorting', name:'Sorting'}
    ]
    return {dropDown}
})

