<?php

namespace Api\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'eventos';
    protected $fillable = ['titulo', 'subtitulo', 'descricao', 'local', 'data', 'horario'];
}
