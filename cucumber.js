module.exports = {
  default: {
    require: ['features/steps/*.js', 'support/*.js'],
    format: ['html:reports/report.html'],
    publishQuiet: true,
    parallel: 1,
    timeout: 60000,
  },
};
