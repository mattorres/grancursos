<?php
namespace Api\Controllers;

use Api\Models\Usuario;
use Slim\Http\Request;
use Slim\Http\Response;
use \Firebase\JWT\JWT;

class AuthController
{
    public $settings;

    public function login(Request $request, Response $response, array $args)
    {
        $input = $request->getParsedBody();
        $usuario = Usuario::validarLogin($input['email']);
        if (!$usuario) {
            return $response->withJson(['error' => true, 'message' => 'These credentials do not match our records.']);
        }
        // verify password.
        if (!password_verify($input['password'], $usuario->password)) {
            return $response->withJson(['error' => true, 'message' => 'These credentials do not match our records.']);
        }

        $token = JWT::encode(['id' => $usuario->id, 'email' => $usuario->email], $this->settings['jwt']['secret'], "HS256");

        return $response->withJson(['token' => $token]);
    }

    public function salvar(Request $request, Response $response, array $args)
    {
        $input = $request->getParsedBody();
        $create = User::create([
            'name' => $input['nome'],
            'email' => $input['email'],
            'password' => $input['12345'],
        ]);

        return $response->withJson(['usuario' => $create, 'status' => 200]);
    }
}
