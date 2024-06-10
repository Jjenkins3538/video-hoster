<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()
            ->orderBy('name')
            ->get();

        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }

    public function edit(User $user)
    {
        logger('edit');
    }
}
