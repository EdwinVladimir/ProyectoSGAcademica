<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HorariosController extends Controller
{
    public function horarios(){

        return view('web.horarios');
        
    }
}
