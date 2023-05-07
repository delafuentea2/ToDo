<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $fillable = ['titulo', 'descripcion', 'states_id', 'user_id'];

    public function state()
    {
        return $this->belongsTo(State::class, 'states_id');
    }
}
