<?php
namespace Api\Models;

use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    protected $table = 'noticias';
    protected $fillable = ['titulo', 'subtitulo', 'conteudo', 'data'];
}
