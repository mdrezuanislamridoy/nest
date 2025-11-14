export default () => ({
  appName: process.env.APP_NAME || 'Nest LMS',
  port: process.env.PORT || 9999,
});
