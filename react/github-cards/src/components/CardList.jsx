import React from 'react';

import Card from './Card';
import githubProfile from '../data/githubProfile';

function CardList(props) {
    return (
        <>
            {githubProfile.map(profile => <Card {...profile} />)}
        </>
    );
};

export default CardList;
