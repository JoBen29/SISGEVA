<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class clienteController extends Controller
{
    function index() {
        $clientes = Cliente::orderBy('id', 'desc') -> paginate();
        return view("personas.index", compact('clientes'));
    }

    function create() {}

    function show() {}

    function update() {}

    function delete() {}
}
