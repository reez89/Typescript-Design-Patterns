// as usual let's create an interface, in this case for our user.

interface User {
    isAdmin(isAdmin: string): void ;
    info(message: string): void;
    privileges(message: string[]): void;  
}

// then we define a class for each type of user that we have, and the properties that we want to show.
class IsAdmin implements User{
    isAdmin(isAdmin: string): void {
       console.log(isAdmin)
    }
    info(message: string): void {
       console.log(message);
    }
    privileges(message: string[]): void {
        console.log(message);
    }

}

class CommonUser implements User {
    isAdmin(isAdmin: string): void {}
    info(message: string): void {
        console.log(message);
    }
    privileges(message: string[]): void {}
}

////////////

// let's create now our factory methods, in this case will return a user type based on isAdmin method.
class UserFactory {
    public static createUser(user: any): User {
        if(user.isAdmin === 'admin') {
            return new IsAdmin()
        }else {
            return new CommonUser()
        }
    }
}

// let's test our code now by creating a test variable where we assign our createUser.
// if the user will be an admin, all the methods set in the clas before, will show a message, else we will be able to see only the user infos.
// to check it, try to change the property isAdmin, from 'admin' to anything you want.

const user = {
    isAdmin: 'admin',
}


const test = UserFactory.createUser(user)

test.info('email, pw, etc')
test.isAdmin('admin')
test.privileges(['create','read','update','delete'])
