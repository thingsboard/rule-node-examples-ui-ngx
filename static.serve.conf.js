const STATIC_SERVE_CONFIG = {
  '/static/rulenode/custom-nodes-config.js': {
    'target': 'dist/custom-nodes-config/fesm2015/custom-nodes-config.js'
  },
  '/static/rulenode/custom-nodes-config.js.map': {
    'target': 'dist/custom-nodes-config/fesm2015/custom-nodes-config.js.map'
  }
}

module.exports = STATIC_SERVE_CONFIG;
