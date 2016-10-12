<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class HomeController extends Controller
{
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
}
