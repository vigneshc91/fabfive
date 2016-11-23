<?php

namespace App\Manager;

use App\Helper\AppConstants;
use App\Helper\SuccessConstants;
use App\Helper\ErrorConstants;
use App\Company;

class AdminManager {
    
    public function createCompany($input)
    {
        try {
         
            $type = $input['type'];
            $name = $input['name'];

            Company::create([
                'type' => $type,
                'name' => $name
            ]);

            return true;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function editCompany($input)
    {
        try {

            $companyId = $input['company_id'];

            $company = Company::find($companyId);
            if($company == null){
                return false;
            } else {
                if(isset($input['type']) && strlen($input['type']) > 0){
                    $company->type = $input['type'];
                }

                if(isset($input['name']) && strlen($input['name']) > 0){
                    $company->name = $input['name'];
                }

                $company->save();
                return true;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function deleteCompany($input)
    {
        try {

            $companyId = $input['company_id'];

            $company = Company::find($companyId);

            if($company == null){
                return false;
            } else {
                $company->delete();
                return true;
            }

        } catch(Exception $e){
            throw $e;
        }
    }

    public function getCompanyById($input)
    {
        try {

            $companyId = $input['company_id'];

            $company = Company::find($companyId);

            return $company;

        } catch(Exception $e){
            throw $e;
        }
    }

    public function getCompanyList($input)
    {
        try {

            $start = $input['start'];
            $size = $input['size'];

            if(!empty($input['type'])){
                $type = $input['type'];
                $result = Company::where('type', $type)->skip($start)->take($size)->get();
            } else {
                $result = Company::skip($start)->take($size)->get();
            }

            return $result;

        } catch(Exception $e){
            throw $e;
        }
    }

}