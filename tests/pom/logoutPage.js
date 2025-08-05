class LogoutPage {
    constructor(page) {
        this.page = page;
        this.avatarImage = page.locator('//span[text()=" Administrator"]/../../td[2]/img[@src="themes/softed/images/user.PNG"]');
        this.logoutOption = page.locator('//a[text()="Sign Out"]');  // Adjust text if needed
    }

    async logout() {
        await this.avatarImage.hover();            // Step 1: Hover
        await this.page.waitForTimeout(500);       // Optional: wait for UI animation
        await this.logoutOption.click();           // Step 2: Click "Sign Out"
    }
}
module.exports = LogoutPage;