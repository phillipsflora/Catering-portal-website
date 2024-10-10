firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('userName').textContent = user.displayName;
        document.getElementById('userEmail').textContent = user.email;
        // Fetch more details from Firestore if needed
        let userId = user.uid;
        let docRef = db.collection('users').doc(userId);
        docRef.get().then((doc) => {
            if (doc.exists) {
                let userData = doc.data();
                document.getElementById('userPhone').textContent = userData.phone;
            }
        });
    } else {
        // Redirect to login if user is not logged in
        window.location.href = 'login.html';
    }
});