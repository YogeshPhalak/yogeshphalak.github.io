import React from 'react';
import {twMerge} from 'tailwind-merge';

const SectionTitle = ({children, className}) => {
    return (
        <h2
            className={twMerge(
                'text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent',
                className // This lets you add *extra* classes from the outside
            )}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;