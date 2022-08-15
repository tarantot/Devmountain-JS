const houses = require('./db.json');
var house_id = houses[houses.length - 1]['id'];

module.exports = {

    getHouses: (req, res) => res.status(200).send(houses),
    
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body;
        let newHouse = {id: house_id, address, price, imageURL};
        houses.push(newHouse);
        res.status(200).send(houses);
    },

    updateHouse: (req, res) => {
        let { id } = req.params;
        let { type } = req.body;
        
        if (type !== 'minus' || type !== 'plus') {
            console.log('ERROR')
        } else {
            let index = houses.findIndex(house => house.id === id);
            if (houses[index].price <= 10000 && type === 'minus') {
                houses[index].price = 0;
                res.status(200).send(houses);
            } else if (type === 'plus') {
                houses[index].price += 10000;
                res.status(200).send(houses);
            } else if (type === 'minus') {
                houses[index].price -= 10000;
                res.status(200).send(houses);
            } else {
                res.sendStatus(400).send('Oops, something went wrong...');
            }
        }
    },

    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
}