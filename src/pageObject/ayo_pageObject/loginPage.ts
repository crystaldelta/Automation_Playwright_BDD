export const loginPage = {

    ayo_officialLink: '//div[contains(@class, "header-top-section")]//child::h4[text() ="visit "]//child::a[text()="mentoring.ayo.com.au"]',
    ayo_bannerImage: '//div[contains(@class, "header-banner-image")]//child::img[@class= "header-logo-image" and @alt = "Header logo"]',
    ayo_loginLogoText: '//p[text() = "Login to AYO"]//parent::div//child::div[@class=" login-logo"]',
    ayo_loginMessage: '//div[contains(@class , "login-section")]//child::p[text() = " Please use your registered username to access the Learning Management System. "]',

    ayo_username: '//div[contains(@class, "input-box")]//child::label[text() = "Username"]//following-sibling::input[@id = "email"]',
    ayo_password: '//div[contains(@class, "input-box")]//child::label[text() = "Password"]//following-sibling::input[@id = "password"]',
    ayo_logiBtn: '//button[@id="submit"]',

    ayo_forgotPassword: '//div[contains(@class, "forgot-pwd")]//child::a[@id= "forgot-password-link"]',
    ayo_resetPassword_header: '//div[@class= "password-reset-content"]//child::h2[text() = "Password reset"]',
    ayo_resetPassword_instructions: '//div[@class= "password-reset-content"]//child::div//p[text() = "Please enter your registered username to receive instructions for setting a new password."]',
    ayo_resetPassword_btn: '//button[@id="pwd_reset_button"]',
    ayo_resetPassword_cancel: '//button[@id="cancel_button"]',
    ayo_resetModal_close: '//button[@class = "close-modal"]//child::img',
};