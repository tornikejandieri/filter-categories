const menu = [
    { name: 'Espresso-Depresso', category: 'coffee', id: 1 },
    { name: 'Cappuccino', category: 'coffee', id: 2 },
    { name: 'Latte', category: 'coffee', id: 3 },
    { name: 'Dark Coffee', category: 'coffee', id: 4 },
    { name: 'Black Tea', category: 'tea', id: 5 },
    {name: 'Yellow Tea', category: 'tea', id: 6},
    {name: 'Cake of Death', category: 'cake', id: 7}
]


export default menu



/* 

The pseudocode: 

1. get data
2. set data into a state
3. render data into component, pass the data with props
4. get unique categories with Set()
5. set unique categories into a different state
6. pass category state into category component
7. write filter logic
8. pass filter logic into category component
9. render filtering category buttons

*/