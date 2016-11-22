<?php

namespace App\Manager;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

use App\Helper\AppConstants;
use App\User;

class UserManager {

    public function login($input) {
        try {
            
            $email = $input['email'];
            $password = $input['password'];

            $login = Auth::attempt(['email' => $email, 'password' => $password, 'status' => AppConstants::userStatus['activated']]);
            
            return $login;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function logout(){
        try{

            return Auth::logout();

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
            if($user == null){
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
    
}