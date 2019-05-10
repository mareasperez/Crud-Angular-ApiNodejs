import { Request, Response } from 'express';
import pool from '../database'
class GamesController {

    public async list(req: Request, res: Response) {

        const games = await pool.query('Select * from games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('Select * from games where id =? ', [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "juego no encontrado" })
        res.json({ message: "un juego encontrao :v" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
    }

    public async delete(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        const games = await pool.query('delete  from games where id =? ', [id]);
        res.status(404).json({ text: "juego no encontrado" })
       
    }

    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await pool.query('update games set ? where id =? ',[req.body,id]);
        res.json({ texto: "juego actualizado" + req.params.id });

    }
}

export const gamesController = new GamesController();

