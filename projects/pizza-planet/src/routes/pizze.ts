import {Router} from 'express';
import {v4 as uuidv4} from 'uuid';
import models from '../models/db';

const router = Router();

router.get('/', (_, res) => {
  return res.send(Object.values(models.pizze));
});

router.get('/:pizzaId', (req, res) => {
  return res.send(models.pizze[req.params.pizzaId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const pizza = {
    name: req.body.name,
  };
  models.pizze[id] = pizza;
  return res.send(pizza);
});

router.put('/:pizzaId', (req, res) => {
  return res.send(`PUT HTTP method on pizza/${req.params.pizzaId} resource`);
});

router.delete('/:pizzaId', (req, res) => {
  return res.send(`DELETE HTTP method on pizza/${req.params.pizzaId} resource`);
});

export default router;
