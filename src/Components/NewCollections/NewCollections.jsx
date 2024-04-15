import React from 'react';

import new_collections from '../Assests/new_collections'
import NewCollection from './NewCollection';

const NewCollections = () => {
    return (
        <div className='new-collections'>
            {
                new_collections.map(collection => <NewCollection key={collection.id} collection={collection}></NewCollection>)
            }

            
        </div>
    );
};

export default NewCollections;