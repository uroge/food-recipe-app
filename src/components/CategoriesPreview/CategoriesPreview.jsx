import React from 'react';

import SingleCategory from './SingleCategory/SingleCategory';
import './CategoriesPreview.scss';

const CategoriesPreview = React.forwardRef((props, ref) => (
    <div className="categories-preview" ref={ref}>
        <div className="preview">
        {props.categories
        .map((category) => (
            <SingleCategory
            key={category.idCategory}
            title={category.strCategory}
            image={category.strCategoryThumb}
            link={`/category/${category.strCategory}`} />
        ))}
        </div>
    </div>
));

export default CategoriesPreview;