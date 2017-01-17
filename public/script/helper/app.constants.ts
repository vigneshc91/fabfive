export class AppConstants {

    static get RouteUrl():string {
        if(window.location.hostname == 'localhost'){
            return  'fabfive';
        } else {
            return '';
        }
    }

    static get RouterUrl():string {
        if(window.location.hostname == 'localhost'){
            return  '/fabfive';
        } else {
            return '';
        }
    }

    static get AppUrl():string {
        if(window.location.hostname == 'localhost'){
            return  'http://localhost/fabfive/';
        } else {
            return  'http://' + window.location.hostname + '/';
        }
    }

    static get ImageUrl():string {
        return this.AppUrl + "storage/app/public/"; 
    }

    public static USER_TYPE = {
        'superAdmin' : 1,
        'admin' : 2,
        'user' : 3
    }

    public static PAGINATION_SIZE:number = 10;

    public static MAX_VALUE: number = 99999999;
    
    public static VENDOR_NAMES = {
        1: "EQUITY",
        2: "COMMODITY",
        3: "MUTUAL FUND",
        4: "LIFE INSURANCE",
        5: "HEALTH INSURANCE",
        6: "GENERAL INSURANCE"
    };

    public static VENDOR_VALUES = {
        "EQUITY": 1,
        "COMMODITY": 2,
        "MUTUAL_FUND": 3,
        "LIFE_INSURANCE": 4,
        "HEALTH_INSURANCE": 5,
        "GENERAL_INSURANCE": 6
    };

    public static VENDOR_TYPES = [
            {
                name: 'EQUITY',
                value: 1 
            },
            {
                name: 'COMMODITY',
                value: 2
            },
            {
                name: "MUTUAL FUND",
                value: 3 
            },
            {
                name: "LIFE INSURANCE",
                value: 4 
            },
            {
                name: "HEALTH INSURANCE",
                value: 5 
            },
            {
                name: "GENERAL INSURANCE",
                value: 6 
            }
        ];

    public static GENDER_NAMES = {
        1: "Male",
        2: "Female"
    };

    public static GENDER_TYPES = [
        {
            name: 'Male',
            value: 1
        },
        {
            name: 'Female',
            value: 2
        }
    ];

    public static MUTUAL_FUND_NAMES = {
        1: 'SIP',
        2: 'ONE TIME INVESTMENT'
    };
    
    public static MUTUAL_FUND_TYPES = [
        {
            name: 'SIP',
            value: 1
        },
        {
            name: 'ONE TIME INVESTMENT',
            value: 2
        }
    ];
}