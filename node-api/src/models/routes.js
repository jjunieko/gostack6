const express = require('express');

const routes = require('routes');


const ProductsController = require('./controlles/ProductsController');


routes.get("./products", ProductsController.index);

module.express = routes;