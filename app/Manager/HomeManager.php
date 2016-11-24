<?php

namespace App\Manager;

use App\Helper\AppConstants;
use App\Subscription;

class HomeManager {

    public function subscribe($input)
    {
        try {

            $email = $input['email'];

            $subscription = Subscription::where('email', $email)->first();
            if($subscription == null){
                Subscription::create([
                    'email' => $email,
                    'status' => AppConstants::subscriptionType['subscribed']
                ]);

                return true;
            } else if($subscription->status == AppConstants::subscriptionType['unsubscribed']) {
                $subscription->status = AppConstants::subscriptionType['subscribed'];
                $subscription->save();
                return true;
            } else {
                return false;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function unsubscribe($id)
    {
        try {

            $subscription = Subscription::find($id);
            
            if($subscription == null || $subscription->status == AppConstants::subscriptionType['unsubscribed']){
                return false;
            } else {
                $subscription->status = AppConstants::subscriptionType['unsubscribed'];
                $subscription->save();
                return true;
            }
            

        } catch(Exception $e){
            throw $e;
        }
    }

}