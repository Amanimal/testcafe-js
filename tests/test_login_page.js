import { Selector } from 'testcafe';
import {env} from "../testcafe.config";

fixture`Login Page`
    .page`https://opensource-demo.orangehrmlive.com/`;

// test('Logo and Title', async t => {
//     // tc-1
//     await t.expect(Selector('img[alt="company-branding"]').getAttribute('alt')).eql('company-branding');
//
//     // tc-2
//     await t.expect(Selector('h5').withText('Login').textContent).eql('Login');
//
//     // tc-3
//     await t.expect(Selector('div.orangehrm-demo-credentials').visible).ok();
//
//     // tc-4
//     await t.expect(Selector('p').withText('Username : Admin').textContent).eql('Username : Admin');
//
//     // tc-5
//     await t.expect(Selector('p').withText('Password : admin123').textContent).eql('Password : admin123');
//
//     // tc-6
//     await t.expect(Selector('i.bi-person.oxd-input-group__label-icon').visible).ok();
//
//     // tc-7
//     await t.expect(Selector('label').withText('Username').textContent).eql('Username');
//
//     // tc-8
//     await t.expect(Selector('input[placeholder="Username"]').visible).ok();
//
//     // tc-9
//     await t.expect(Selector('i.bi-key.oxd-input-group__label-icon').visible).ok();
//
//     // tc-10
//     await t.expect(Selector('label').withText('Password').textContent).eql('Password');
//
//     // tc-11
//     await t.expect(Selector('input[placeholder="Password"]').visible).ok();
//
//     // tc-12
//     await t.expect(Selector('button').withText('Login').visible).ok();
//
//     // tc-13
//     await t.expect(Selector('p').withText('Forgot your password?').textContent).eql('Forgot your password? ');
//
//     // tc-14
//     await t.expect(Selector('div.orangehrm-copyright-wrapper').visible).ok();
//
//     // tc-15
//     await t.expect(Selector('a').withAttribute('href', 'https://www.linkedin.com/company/orangehrm/mycompany/').visible).ok();
//
//     // tc-16
//     await t.expect(Selector('a').withAttribute('href', 'https://www.facebook.com/OrangeHRM/').visible).ok();
//
//     // tc-17
//     await t.expect(Selector('a').withAttribute('href', 'https://twitter.com/orangehrm?lang=en').visible).ok();
//
//     // tc-18
//     await t.expect(Selector('a').withAttribute('href', 'https://www.youtube.com/c/OrangeHRMInc').visible).ok();
// });

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
  await t.expect(Selector('p:contains("Invalid credentials")').textContent).eql('Invalid credentials');

  // tc-25
  await t.typeText('input[placeholder="Username"]', '');
  await t.typeText('input[placeholder="Password"]', '');

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
  await t.expect(Selector('p:contains("Invalid credentials")').textContent).eql('Invalid credentials');
});