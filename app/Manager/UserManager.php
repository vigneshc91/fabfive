<?php

namespace App\Manager;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use JWTAuth;

use App\Helper\AppConstants;
use App\User;

class UserManager {

    public function login($input) {
        try {
            
            $email = $input['email'];
            $password = $input['password'];

            $login = JWTAuth::attempt(['email' => $email, 'password' => $password, 'status' => AppConstants::userStatus['activated']]);
            
            return $login;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function logout(){
        try{

            return true;

        } catch(Exception $e) {
            throw $e;
        }
    }

    public function changePassword($loggedInUser, $input){
        try {

            $oldPassword = $input['old_password'];
            $newPassword = bcrypt($input['new_password']);

            $userId = $loggedInUser->id;

            $user = User::find($userId);

            if(!Hash::check($oldPassword, $user->password)){
                return false;
            } else {
                $user->password = $newPassword;
                $user->save();
                return true;
            }


        } catch(Exception $e){
            throw $e;
        }
    }

    public function forgotPassword($input){
        try {

            $email = $input['email'];

            $user = User::where('email', $email)->first();
            if($user == null || $user->reset_token != null){
                return false;
            } else {
                $resetToken = md5(rand());
                $user->reset_token = $resetToken;
                $user->save();

                $data = [
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'resetToken' => AppConstants::APP_URL . "user/resetPassword/" . $resetToken
                ];

                // Send forgot password reset link to user
                Mail::send('emails.forgotPassword', $data, function ($message) use($email) {
                    $message->subject("Forgot Password FabFive");
                    $message->to($email);
                });

                return true;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function verifyResetToken($token){
        try {

            $user = User::where('reset_token', $token)->first();

            if($user == null) {
                return false;
            } else {
                return true;
            }

        } catch(Excetion $e){
            throw $e;
        }
    }

    public function resetPassword($input)
    {
        try {

            $resetToken = $input['reset_token'];
            $password = $input['password'];

            $user = User::where('reset_token', $resetToken)->first();
            if($user == null){
                return false;
            } else {
                $user->password = bcrypt($password);
                $user->reset_token = null;
                $user->save();

                return true;
            }

        } catch(Excetion $e){
            throw $e;
        }
    }

    public function getUserById($input)
    {
        try {

            $userId = $input['user_id'];

            $user = User::find($userId);
            if($user->user_type == AppConstants::userType['user']){
                $user->address;
            }
            return $user;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function getUsersList($input)
    {
        try {

            $start = $input['start'];
            $size = $input['size'];

            if(!empty($input['user_type'])){
                $userType = $input['user_type'];
                if($userType == AppConstants::userType['user']){
                    $result = User::where('user_type', $userType)
                                ->join('address', 'users.id' , '=', 'address.user_id')
                                ->skip($start)->take($size)->get();
                } else{
                $result = User::where('user_type', $userType)->skip($start)->take($size)->get();
                }
            } else {
                $result = User::skip($start)->take($size)->get();
            }

            return $result;

        } catch(Exception $e){
            throw $e;
        }
    }
    
}