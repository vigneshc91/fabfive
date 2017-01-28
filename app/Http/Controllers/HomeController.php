<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Helper\ServiceResponse;
use App\Helper\AppConstants;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\Manager\HomeManager;
use App\Subscription;

class HomeController extends Controller
{
    
    function __construct() {
        $this->homeManager = new HomeManager();
    }
    
    public function index(){
        return view('home.welcome');
    }

    public function contact(){
        return view('home.contact');
    }

    public function aboutUs(){
        return view('home.aboutUs');
    }

    public function equity(){
        return view('home.equity');
    }

    public function commodity(){
        return view('home.commodity');
    }

    public function debtMarket(){
        return view('home.debtMarket');
    }

    public function mutualFund(){
        return view('home.mutualFund');
    }

    public function wealthInsurance(){
        return view('home.wealthInsurance');
    }

    public function subscribe(Request $request)
    {
        $response = new ServiceResponse(); 
        try {

            $input = $request->only('email');
            
            $subscriptionValidation = Validator::make($input, Subscription::$subscriptionRule);
            if(!$subscriptionValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->homeManager->subscribe($input)){
                $response->status = true;
                $response->result = SuccessConstants::SUBSCRIBED_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::ALREADY_SUBSCRIBED;
                return json_encode($response);
            }

        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

    public function unsubscribe($id)
    {
        try {

            if($this->homeManager->unsubscribe($id)){
                return view('home.unsubscribe')->with('message', SuccessConstants::UNSUBSCRIBED_SUCCESSFULLY);
            } else {
                return view('home.unsubscribe')->with('message', ErrorConstants::UNSUBSCRIBE_FAILED);
            }

        } catch(Exception $e){

        }
    }

    public function contactMail(Request $request)
    {
        $response = new ServiceResponse(); 
        try {

            $input = $request->only('name', 'email', 'message');
            
            $contactValidationRule = array(
                'name' => 'required',
                'email' => 'required',
                'message' => 'required',
            );

            $contactValidation = Validator::make($input, $contactValidationRule);
            if(!$contactValidation->passes()){
                $response->status = false;
                $response->result = ErrorConstants::REQUIRED_FIELDS_EMPTY;
                return json_encode($response);
            }

            if($this->homeManager->contact($input)){
                $response->status = true;
                $response->result = SuccessConstants::CONTACT_SUCCESSFULLY;
                return json_encode($response);
            } else {
                $response->status = false;
                $response->result = ErrorConstants::CONTACT_FAILED;
                return json_encode($response);
            }
        } catch(Exception $e){
            $response->status = false;
            $response->result = $e;
            return json_encode($response);
        }
    }

}
