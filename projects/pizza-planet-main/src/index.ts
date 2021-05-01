import express, {Application} from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';

const app: Application = express();
// Use dotenv to manage application configuration data
const port = process.env.PORT || 3000;

console.log('START!');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// custom express middleware
app.use((_, __, next) => {
  console.log("I'm a custom middleware");
  next();
});

app.get('/', async (_, res) => {
  res.send('Hello World');
});

app.use('/pizze', routes.pizze);
app.use('/session', routes.session);
app.use('/ping', routes.ping);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
