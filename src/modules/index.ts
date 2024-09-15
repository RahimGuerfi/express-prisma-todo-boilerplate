import { Router } from 'express';

import todo from './todo/todo.route';

const router = Router();

router.use('/todos', todo);

export default router;
