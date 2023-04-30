import { Selector } from 'testcafe';
import {env} from "../testcafe.config";

fixture`Login Page`
    .page`https://opensource-demo.orangehrmlive.com/`;

test('Logo and Title', async t => {
    // tc-1
    await t.expect(Selector('img[alt="company-branding"]').getAttribute('alt')).eql('company-branding');

    // tc-2
    await t.expect(Selector('h5').withText('Login').textContent).eql('Login');

    // tc-3
    await t.expect(Selector('div.orangehrm-demo-credentials').exists).ok();

    // tc-4
    await t.expect(Selector('p').withText('Username : Admin').textContent).eql('Username : Admin');

    // tc-5
    await t.expect(Selector('p').withText('Password : admin123').textContent).eql('Password : admin123');

    // tc-6
    await t.expect(Selector('i.bi-person.oxd-input-group__label-icon').exists).ok();

    // tc-7
    await t.expect(Selector('label').withText('Username').textContent).eql('Username');

    // tc-8
    await t.expect(Selector('input[placeholder="Username"]').exists).ok();

    // tc-9
    await t.expect(Selector('i.bi-key.oxd-input-group__label-icon').exists).ok();

    // tc-10
    await t.expect(Selector('label').withText('Password').textContent).eql('Password');

    // tc-11
    await t.expect(Selector('input[placeholder="Password"]').exists).ok();

    // tc-12
    await t.expect(Selector('button').withText('Login').exists).ok();

    // tc-13
    await t.expect(Selector('p').withText('Forgot your password?').textContent).eql('Forgot your password? ');

    // tc-14
    await t.expect(Selector('div.orangehrm-copyright-wrapper').exists).ok();

    // tc-15
    await t.expect(Selector('a').withAttribute('href', 'https://www.linkedin.com/company/orangehrm/mycompany/').exists).ok();

    // tc-16
    await t.expect(Selector('a').withAttribute('href', 'https://www.facebook.com/OrangeHRM/').exists).ok();

    // tc-17
    await t.expect(Selector('a').withAttribute('href', 'https://twitter.com/orangehrm?lang=en').exists).ok();

    // tc-18
    await t.expect(Selector('a').withAttribute('href', 'https://www.youtube.com/c/OrangeHRMInc').exists).ok();
});

test('Incorrect Login', async t => {
  // tc-19
  await t.typeText('input[placeholder="Username"]', 'testuser');

  // tc-20
  await t.expect(Selector('input[placeholder="Username"]').value).eql('testuser');

  // tc-21
  await t.typeText('input[placeholder="Password"]', env.password);

  // tc-22
  await t.expect(Selector('input[placeholder="Password"]').value).eql(env.password);

  // tc-23
  await t.click(Selector('button').withText('Login'));

  // tc-24
  await t.expect(Selector('p').withText('Invalid credentials').textContent).eql('Invalid credentials');

  // tc-25
  await t.selectText('input[placeholder="Username"]').pressKey('backspace');
  await t.selectText('input[placeholder="Password"]').pressKey('backspace');

  // tc-26
  await t.typeText('input[placeholder="Username"]', env.username);

  // tc-27
  await t.expect(Selector('input[placeholder="Username"]').value).eql(env.username);

  // tc-28
  await t.typeText('input[placeholder="Password"]', 'testpassword');

  // tc-29
  await t.expect(Selector('input[placeholder="Password"]').value).eql('testpassword');

  // tc-30
  await t.click(Selector('button').withText('Login'));

  // tc-31
  await t.expect(Selector('p').withText('Invalid credentials').textContent).eql('Invalid credentials');
});

test('Login and Logout', async t => {
  // tc-32
  await t.typeText('input[placeholder="Username"]', env.username);

  // tc-33
  await t.expect(Selector('input[placeholder="Username"]').value).eql(env.username);

  // tc-34
  await t.typeText('input[placeholder="Password"]', env.password);

  // tc-35
  await t.expect(Selector('input[placeholder="Password"]').value).eql(env.password);

  // tc-36
  await t.click(Selector('button').withText('Login'));

  // tc-37
  await t.expect(Selector('h6').withText('Dashboard').textContent).eql('Dashboard');

  // tc-38
  await t.expect(Selector('span[class="oxd-userdropdown-tab"]').exists).ok();

  // tc-39
  await t.expect(Selector('img[class="oxd-userdropdown-img"]').exists).ok();

  // tc-40
  await t.expect(Selector('p[class="oxd-userdropdown-name"]').exists).ok();

  // tc-41
  await t.click('span[class="oxd-userdropdown-tab"]');

  // tc-42
  await t.expect(Selector('ul[role="menu"]').exists).ok();

  // tc-43
  await t.expect(Selector('a').withText("About").exists).ok();

  // tc-44
  await t.expect(Selector('a').withText("Support").exists).ok();

  // tc-45
  await t.expect(Selector('a').withText("Change Password").exists).ok();

  // tc-46
  await t.expect(Selector('a').withText("Logout").exists).ok();

  // tc-47
  await t.click(Selector('a').withText("Logout"));

  // tc-48
  await t.expect(Selector('h5').withText("Login").innerText).eql('Login');
});