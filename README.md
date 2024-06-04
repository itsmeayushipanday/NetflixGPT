I have made a login page which container a header with title netflix. Used relative absolute concept of css to make sure that netflix is visible.

then I had made a sign in sign up form. firslty I had mase a sign in form simply and then I have reused the same form and converted it into a sing up form using use state function help. made sure that if isSignInForm is true, then sign in form things occur else sign up form components occur.

Used useRef hook for form validation. created validate.js file in utils which contains all the validated email, password and name fields.

Firebase deployment

then I have used createUserWithEmailAndPassword this thing from firebase autentication to authenticate my sign up page. uses getAuth() method. I have done all this in my login.js file. after that as soon as I filled the sign up form, I got registered with Firebase as a user.
After that I have written the sign in form authentication logic using signInWithEmailAndPassword from the firebase authentication sigin documentation. I have done all this in my login.js file. after that as soon as I filled the sign up form, I got registered with Firebase as a user.

now push the user object to a redux store where it will be accessible anytime and then as soon as we click on sign up or sign in form then user will be directed to the browse page.

2:52 backkkkkkkk
