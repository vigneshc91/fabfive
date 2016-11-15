<?php

use Illuminate\Database\Seeder;

use App\Helper\AppConstants;
use App\User;

class CreateSuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $isSuperAdminExist = User::where('user_type', AppConstants::userType['superAdmin'])->count();
        
        if($isSuperAdminExist == 0){
            User::create([
                'first_name' => AppConstants::SUPER_ADMIN_FIRST_NAME,
                'last_name' => AppConstants::SUPER_ADMIN_LAST_NAME,
                'email' => AppConstants::SUPER_ADMIN_EMAIL,
                'password' => bcrypt(AppConstants::SUPER_ADMIN_PASSWORD),
                'user_type' => AppConstants::userType['superAdmin'],
                'status' => AppConstants::userStatus['activated']
            ]);
        }

    }
}
