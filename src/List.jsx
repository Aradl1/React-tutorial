function List({ category, items }) {
    const listItems = items.map((item) => (
        <li key={item.id}>
            {item.name}: {item.calories} calories
        </li>
    ));

    return (
        <div>
            <h2>{category}</h2>
            <ul>{listItems}</ul>
        </div>
    );
}

export default List;