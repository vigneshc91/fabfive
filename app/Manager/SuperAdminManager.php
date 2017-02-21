<?php

namespace App\Manager;

use Illuminate\Support\Facades\Mail;

use App\Helper\AppConstants;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\User;

class SuperAdminManager {

    public function createAdmin($user, $input){
        try{

            $firstName = $input['first_name'];
            $lastName = $input['last_name'];
            $email = $input['email'];
            $password = substr( md5(rand()), 0, 8);
            $verificationToken = md5(rand());

            $user = User::where('email', $email)->count();
            
            if($user == 0){
                User::create([
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email,
                    'password' => bcrypt($password),
                    'user_type' => AppConstants::userType['admin'],
                    'verification_token' => $verificationToken,
                    'status' => AppConstants::userStatus['pending']
                ]);

                $data = [
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'verificationToken' => AppConstants::APP_URL . "superAdmin/verifyAdmin/" . $verificationToken,
                    'password' => $password
                ];

                // Send verification email to the admin
                Mail::send('emails.welcomeAdmin', $data, function ($message) use($email) {
                    $message->subject("Welcome to FabFive");
                    $message->to($email);
                });

                return true;
            } else {
                return false;
            }
 
        } catch(Exception $e){
            throw $e;
        }
    }

    public function verifyAdmin($token){
        try{

            $user = User::where('verification_token', $token)->first();
            if(!$user || $user->status == AppConstants::userStatus['activated']){
                return false;
            } else {
                $user->status = AppConstants::userStatus['activated'];
                $user->verification_token = null;
                $user->save();
                return true;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function deleteAdmin($input)
    {
        try{

            $userId = $input['user_id'];

            $user = User::find($userId);
            if($user == null){
                return false;
            } else {
                $user->delete();
                return true;
            }

        } catch(Exception $e){
            throw $e;
        }
        
    }

    public function getStatForSuperAdmin()
    {
        try{

            $admin = User::where('user_type', AppConstants::userType['admin'])->count();
            $user = User::where('user_type', AppConstants::userType['user'])->count();
            $result = array(
                'admin' => $admin,
                'user' => $user
            );

            return $result; 

        } catch(Exception $e){
            throw $e;
        }
        
    }
    
}