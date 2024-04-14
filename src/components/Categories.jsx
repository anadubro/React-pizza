import React from 'react';


export default function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const onCLickCategory = (index) => {
        setActiveIndex(index);
    }
  return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                    <li key={i} onClick={() => onCLickCategory(i)} className={activeIndex === i ? "active" : ""}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}