import { Request, Response} from 'express';
class IndexController {

    public index(req: Request, res: Response) {

        res.json({text:'the api is in /api/games'})
    }
}

export const indexController = new IndexController();