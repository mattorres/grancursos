<?php
namespace Api\Controllers;

use Slim\Http\Request;
use Slim\Http\Response;

class EventoController
{

    public function index(Request $request, Response $response, array $args)
    {
        $eventos = Evento::all();
        return $this->response->withJson(['eventos' => $eventos, "status" => 200]);
    }
}
