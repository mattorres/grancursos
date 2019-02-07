<?php
namespace Api\Controllers;

use Api\Models\Noticia;
use Slim\Http\Request;
use Slim\Http\Response;

class NoticiaController
{

    public function listar(Request $request, Response $response, array $args)
    {
        $noticias = Noticia::all();
        return $response->withJson(['eventos' => $noticias, "status" => 200]);
    }
}
