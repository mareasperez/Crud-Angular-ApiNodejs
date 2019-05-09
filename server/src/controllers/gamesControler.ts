import { Request, Response} from 'express';
import pool from '../database'
class GamesController {

    public index(req: Request, res: Response) {
        const result = pool.query('DESCRIBE games');

        res.send("aqui esta el api de los games 2")
    }
}

export const gamesController = new GamesController();

