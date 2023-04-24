fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

test('My second test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});