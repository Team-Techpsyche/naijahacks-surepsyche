<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyModel extends Model
{
    protected $table = "surveys";

    public $timestamps = false;

    protected $fillable = [
        'questions',
    ];
}
