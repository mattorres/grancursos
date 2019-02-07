<?php
namespace Api\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';
    protected $fillable = ['nome', 'email', 'password'];
    protected $hidden = array('password');
    // public function validarLogin($args)
    // {
    //     $usuario = $select = DB::select('SELECT email FROM usuarios WHERE email=' . $args['email']);
    //     return $usuario;
    // }

    public function validarLogin($args)
    {
        $usuario = Usuario::where('email', $args)->first();
        return $usuario;
    }

}
