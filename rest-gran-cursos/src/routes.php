<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->group('/api', function () use ($app) {
    $app->post('/evento/salvar', 'Api\Controllers\EventoController:salvar');
    $app->get('/evento', 'Api\Controllers\EventoController:index');
});

$app->group('/noticia', function () use ($app) {
    $app->get('/noticia', 'Api\Controllers\NoticiaController:listar');
});
$app->post('/auth/login', 'Api\Controllers\AuthController:login');
$app->post('/auth/salvar', 'Api\Controllers\AuthController:salvar');
