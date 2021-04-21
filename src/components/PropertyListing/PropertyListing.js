import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import useFetch from '../../services/useFetch';

const PropertyListing = () => {
    const { data } = useFetch('properties');

    return (
        <div className="PropertyListing">
            {
                data && data.map((property, index) => <PropertyCard key={index} {...property}/>)
            }
        </div>
    )
};

export default PropertyListing;
