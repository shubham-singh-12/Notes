function validateForm(username, password) {
    try {
        if (!username || username.trim() === "") {
            throw new Error("Username cannot be empty!");
        }
        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters!");
        }
        console.log("✅ Form is valid!");
        return true;
    } catch (error) {
        console.log("❌ Validation failed:", error.message);
        return false;
    } finally {
        console.log("Validation check complete.");
    }
}

validateForm("", "12345");                      // Username cannot be empty!
validateForm("Harry", "123");                   // Password must be at least 6 characters!
validateForm("Harry", "123456");                // ✅ Form is valid!