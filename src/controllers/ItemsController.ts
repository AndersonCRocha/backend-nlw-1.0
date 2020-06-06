import { Request, Response } from 'express'
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return{
                id: item.id,
                title: item.title,
<<<<<<< HEAD
                image_url: `http://192.168.0.102:3333/uploads/${item.image}`
=======
                image_url: `http://localhost:3333/uploads/${item.image}`
>>>>>>> a7d479694ed46f730f40d29cd32c9e4c70f4a306
            }
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;