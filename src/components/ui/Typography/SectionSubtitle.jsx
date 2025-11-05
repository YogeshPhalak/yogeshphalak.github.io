import React from 'react';
import {twMerge} from 'tailwind-merge';

const SectionSubtitle = ({children, className}) => {
    return (
        <p
            className={twMerge(
                'text-center text-slate-600 dark:text-gray-400 mb-12',
                className // This also lets you add extra classes
            )}
        >
            {children}
        </p>
    );
};

export default SectionSubtitle;