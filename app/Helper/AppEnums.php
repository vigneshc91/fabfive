<?php

namespace App\Helper;

abstract class UserType {
    const superAdmin = 1;
    const admin = 2;
    const user = 3;
}

abstract class UserStatus {
    const pending = 0;
    const activated = 1;
}

abstract class ResetStatus {
    const initial = 0;
    const initiated = 1;
}

abstract class Gender {
    const male = 1;
    const female = 2;
    const others = 3;
}
