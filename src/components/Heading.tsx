import React from 'react';

interface PropsType {
    title: string; // Use a colon instead of a period
}

const Heading: React.FC<PropsType> = ({ title }) => { // Destructure title from props
    return (

        <div className='text-center text-4xl pb-8'>
            <p className='border-b-4 inline-block pb-2'>{title}</p>
        </div>

    );
}

export default Heading;