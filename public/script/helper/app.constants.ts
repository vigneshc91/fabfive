export class AppConstants {

    static get RouteUrl():string {
        if(window.location.hostname == 'localhost'){
            return  'fabfive';
        } else {
            return '';
        }
    }
}