import React from 'react';


const Blogs = () => {
    return (
        <div>
            <h3>Difference between authorization and authentication</h3>
            <p>Authentication and Authorization are the first line of defense of any online platform. Both of them handle task in their own way. Authentication is the verification system of the user. It identifies who the user is. Then the authentication system selects what resource that user can access. So, first comes the authentication parts and if a user passes that verification system then comes the authorization system. User can change the authentication options. But authorization system is handled by the organization.</p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Google firebase is a mobile or web application development platform. It is developed by google. It offers database, deployment and cloud services. To implement authentication we have to do couple of things. They are:
                <p>Add firebase to JS project.</p>
                <p>Create firebase project.</p>
                <p>Enable Sign-in method.</p>
                <p>Creat user by passing email and pass to "createUserWithEmailAndPassword".</p>
                <p> Creat new account by passing email and pass to "signInWithEmailAndPassword".</p>
                <p>If we want to signout, we can just call "signOut()".</p>
            </p>
            <h3>What other services does firebase provide other than authentication</h3>
            <p><b>Firebase products are:</b></p>
            <p>Cloud Firestore</p>
            <p>Realtime Database</p>
            <p>Remote Config</p>
            <p>Firebase ML</p>
            <p>Cloud Function</p>
            <p>Authentication</p>
            <p>Cloud Messanging</p>
            <p>Hosting</p>
            <p>Cloud Storage</p>
            <p>Google Analytics</p>
            <p>Perfomance Monitore</p>
            <p>Test Lab</p>
            <p>App Distribution</p>
            <p>Dynamic Links</p>















        </div>
    );
};

export default Blogs;