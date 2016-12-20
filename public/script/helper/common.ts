export class Common {
    
    set authToken(token: string){
        localStorage.setItem('token', token);
    }

    get authToken():string {
        return  localStorage.getItem('token');
    }

    clearToken():boolean {
        localStorage.clear();
        return true;
    }
}