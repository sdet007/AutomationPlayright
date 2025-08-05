class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '[name="user_name"]';
    this.passwordField = '[name="user_password"]';
    this.loginButton = '[type="submit"]'; // for submit button
  }

  async navigateToLogin() {
    await this.page.goto('http://localhost:8888');
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
