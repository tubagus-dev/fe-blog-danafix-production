const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ['localhost'],
      },
      env: {
        api_url: 'https://apis.dfx-id.site',
        api_service: '/loanApplication/',
      },
    };
  }

  return {
    images: {
      domains: ['localhost'],
    },
    env: {
      api_url: 'https://api.dfx.danafix.id',
      api_service: '/loanApplication/',
    },
  };
};
