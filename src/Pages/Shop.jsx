import React from 'react';
import Hero from '../Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';

import NewCollections from '../Components/NewCollections/NewCollections';

const Shop = () => {
    return (
        <div>
            <Hero></Hero>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollections></NewCollections>
        </div>
    );
};

export default Shop;