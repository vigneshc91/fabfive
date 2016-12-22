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

    public static USER_TYPE = {
        'superAdmin' : 1,
        'admin' : 2,
        'user' : 3
    }

    public static PAGINATION_SIZE:number = 10;
}