import { Router } from 'express';
import taskRoutes from './taskRoutes';
import tasklistRoutes from './taskListRoutes';

const router = Router();

router.use('/task', taskRoutes);
router.use('/list', tasklistRoutes)

 export default router;