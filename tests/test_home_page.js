import { Selector } from 'testcafe';

import {env} from "../testcafe.config";

fixture`Home Page`
    .beforeEach(async t => {
        await t.typeText('input[placeholder="Username"]', env.username);
        await t.typeText('input[placeholder="Password"]', env.password);
        await t.click(Selector('button').withText('Login'));
    })
    .page`https://opensource-demo.orangehrmlive.com/`;


test('Dashboard Header', async t => {
  // tc-1
  await t.expect(Selector('h6').withText('Dashboard').textContent).eql('Dashboard');

  // tc-2
  await t.expect(Selector('span[class="oxd-userdropdown-tab"]').exists).ok();

  // tc-3
  await t.expect(Selector('img[class="oxd-userdropdown-img"]').exists).ok();

  // tc-4
  await t.expect(Selector('p[class="oxd-userdropdown-name"]').exists).ok();
});

test('Side Navbar', async t => {
    // tc-5
    await t.expect(Selector('nav[aria-label="Sidepanel"]').exists).ok();

    // tc-6
    await t.expect(Selector('button[class="oxd-icon-button oxd-main-menu-button"]').exists).ok();

    // tc-7
    await t.expect(Selector('img[alt="client brand banner"]').exists).ok();

    // tc-8
    await t.expect(Selector('*[class="oxd-icon oxd-menu-icon"]').exists).ok();

    // tc-9
    await t.expect(Selector('input[placeholder="Search"]').exists).ok();

    // tc-10
    await t.expect(Selector(':nth-child(1) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-11
    await t.expect(Selector('span').withText('Admin').textContent).eql('Admin');

    // tc-12
    await t.expect(Selector(':nth-child(2) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-13
    await t.expect(Selector('span').withText('PIM').textContent).eql('PIM');

    // tc-14
    await t.expect(Selector(':nth-child(3) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-15
    await t.expect(Selector('span').withText('Leave').textContent).eql('Leave');

    // tc-16
    await t.expect(Selector(':nth-child(4) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-17
    await t.expect(Selector('span').withText('Time').textContent).eql('Time');

    // tc-18
    await t.expect(Selector(':nth-child(5) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-19
    await t.expect(Selector('span').withText('Recruitment').textContent).eql('Recruitment');

    // tc-20
    await t.expect(Selector(':nth-child(6) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-21
    await t.expect(Selector('span').withText('My Info').textContent).eql('My Info');

    // tc-22
    await t.expect(Selector(':nth-child(7) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-23
    await t.expect(Selector('span').withText('Performance').textContent).eql('Performance');

    // tc-24
    await t.expect(Selector(':nth-child(8) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-25
    await t.expect(Selector('span').withText('Dashboard').textContent).eql('Dashboard');

    // tc-26
    await t.expect(Selector(':nth-child(9) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-27
    await t.expect(Selector('span').withText('Directory').textContent).eql('Directory');

    // tc-28
    await t.expect(Selector(':nth-child(10) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-29
    await t.expect(Selector('span').withText('Maintenance').textContent).eql('Maintenance');

    // tc-30
    await t.expect(Selector(':nth-child(11) > .oxd-main-menu-item > .oxd-icon').exists).ok();

    // tc-31
    await t.expect(Selector('span').withText('Buzz').textContent).eql('Buzz');

    // tc-32
    await t.click(Selector('button[class="oxd-icon-button oxd-main-menu-button"]'));

    // tc-33
    await t.expect(Selector('img[alt="client brand logo"]').exists).ok();
});

test('Dashboard Page', async t => {
    // tc-34
    await t.expect(Selector('p').withText('Time at Work').textContent).eql('Time at Work');

    // tc-35
    await t.expect(Selector('p').withText('My Actions').textContent).eql('My Actions');

    // tc-36
    await t.expect(Selector('p').withText('Quick Launch').textContent).eql('Quick Launch');

    // tc-37
    await t.expect(Selector('p').withText('Buzz Latest Posts').textContent).eql('Buzz Latest Posts');

    // tc-38
    await t.expect(Selector('p').withText('Employees on Leave Today').textContent).eql('Employees on Leave Today');

    // tc-39
    await t.expect(Selector('p').withText('Employee Distribution by Sub Unit').textContent).eql('Employee Distribution by Sub Unit');

    // tc-40
    await t.expect(Selector('p').withText('Employee Distribution by Location').textContent).eql('Employee Distribution by Location');
});
