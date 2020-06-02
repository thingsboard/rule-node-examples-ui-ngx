const STATIC_SERVE_CONFIG = {
  '/static/rulenode/custom-nodes-config.js': {
    'target': 'dist/custom-nodes-config/bundles/custom-nodes-config.umd.js'
  },
  '/static/rulenode/custom-nodes-config.umd.js.map': {
    'target': `dist/custom-nodes-config/bundles/custom-nodes-config.umd.js.map`
  }
}

module.exports = STATIC_SERVE_CONFIG;
