import { Selector } from 'testcafe';

fixture`Interact With the Page`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Click test', async t => {
    const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

    await t
        .click(selectBasedOnText);
});

test('Double click test', async t => {
    const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

    await t
        .doubleClick(selectBasedOnText);
});

test('Right click test', async t => {
    const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

    await t
        .rightClick(selectBasedOnText);
});

test('Press Key test', async t => {
    await t
        .click('#tried-test-cafe')
        // pressing 'Space' imitates clicking the checkbox again
        .pressKey('space');
});

test('Type Text test', async t => {
    await t
        .typeText('#developer-name', 'John Doe');
});

test('Select Text test', async t => {
    await t
        .typeText('#developer-name', 'John Doe')
        .selectText('#developer-name')
        .pressKey('delete');
});

test('Drag test', async t => {
    const triedCheckbox = Selector('label').withText('I have tried TestCafe');

    await t
        .click(triedCheckbox)
        .drag('#slider', 360, 0, { offsetX: 10, offsetY: 10 });
});