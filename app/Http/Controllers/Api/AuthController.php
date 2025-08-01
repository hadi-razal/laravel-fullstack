<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){

      $data = $request->validated();

     $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
      ]);

      $token = $user->createToken('main')->plainTextToken;


      return response(compact('user', 'token'), 201);

    }

    public function Login(LoginRequest $request){

        $credentials = $request->validated();

        if($credentials.email && $credentials.password){

            if(!Auth::attempt($credentials)){

                return response(['message' => 'Please provide a valid credentials'], 401);
            }

            $user = Auth::user();
            $user->createToken('main')->plainTextToken;

            return response(compact('user', 'token'), 200);
        }


    }

    public function logout(Request $request){

        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response('', 200);


        
    }

}
