import { Router } from 'express';

export default function() {
	var routes = Router();

	// add middleware here
  routes.get("/",
    (req, res) => res.json({
      name: 'cqrs-experiment',
      version: '1.0.0'}
  ));

	return routes;
}
