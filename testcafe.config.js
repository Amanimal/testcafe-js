module.exports = {
  env: {
    username: 'Admin',
    password: 'admin123',
  },
  browsers: ['chrome', 'edge', 'firefox'], // Add the browsers here
  baseUrl: 'https://opensource-demo.orangehrmlive.com/',
  src: './tests/*.js',
  screenshots: {
    path: './screenshots',
  },
  videoPath: './videos',
  reporter: [
    {
      name: 'spec',
      output: './reports/specs.txt',
    },
    {
      name: 'spec',
      output: './reports/report.html'
    },
  ],
};