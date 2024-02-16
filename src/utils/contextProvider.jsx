
import React, { createContext, useState } from 'react'

import item1 from '../assets/images/item-01.jpg'
import item2 from '../assets/images/item-02.jpg'
import item3 from '../assets/images/item-03.jpg'
import item4 from '../assets/images/item-17.jpg'
import item5 from '../assets/images/item-05.jpg'
import item6 from '../assets/images/item-06.jpg'
import item7 from '../assets/images/item-07.jpg'
import item8 from '../assets/images/item-08.jpg'
import item9 from '../assets/images/item-14.jpg'
// import item11 from '../assets/images/item-9.jpg'
import item10 from '../assets/images/shop-item-09.jpg'

export const MyContext = createContext()


export const MyProvider = ({ children }) => {
    
    const [products, setProducts] = useState([
        {
            image: item1,
            title: 'Computer Bag',
            price: 15,
            categorie: 'accessoire',
            categorie2: 'old'
        },
        {
            image: item2,
            title: 'Travel Bag',
            price: 15.,
            categorie: 'men',
            categorie2: 'new'
        },
        {
            image: item3,
            title: 'Jean Jacket',
            price: 40,
            categorie: 'women',
            categorie2: 'sell'

        },
        {
            image: item5,
            title: 'Classique Watch',
            price: 50,
            categorie: 'accessoire',
            categorie2: 'old'

        },
        {
            image: item6,
            title: 'White FooterWear',
            price: 30,
            categorie: 'women',
            categorie2: 'new'

        },
        {
            image: item7,
            title: 'Short ',
            price: 25,
            categorie: 'women',
            categorie2: 'sell'

        },
        {
            image: item8,
            title: 'Brown Watch',
            price: 80,
            categorie: 'accessoire',
            categorie2: 'old'

        },
        {
            image: item9,
            title: 'T-shirt polo',
            price: 41,
            categorie: 'men',
            categorie2: 'new'

        },
        {
            image: item4,
            title: 'Converse',
            price: 70,
            categorie: 'men',
            categorie2: 'sell'

        },
        {
            image: item10,
            title: 'sunglasses',
            price: 70,
            categorie: 'accessoire',
            categorie2: 'sell'
        },
        // {
        //     image: item10,
        //     title: 'sunGlesses',
        //     price: 30,
        //     categoerie: 'kid',
        //     categorie2: 'old'
        // },
    ])

    return (
        <>
            <MyContext.Provider value={[products, setProducts ]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
