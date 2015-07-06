import { Router } from 'express';

export default function() {
	var routes = Router();

	// add middleware here
  routes.get("/",
    (req, res) => res.json({
      name: 'cqrs-experiment',
      version: '0.0.1'}
  ));

  routes.post('/',
      (req, res) => {
        console.log(req.body);
      }
  );

	return routes;
}
