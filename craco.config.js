// const CracoAlias = require('craco-alias');

// module.exports = {
//   plugins: [
//     {
//       plugin: CracoAlias,
//       options: {
//         source: 'options',
//         baseUrl: './',
//         aliases: {
//           '@Components': './src/Components/',
//           '@Img': '../common/img/*'
//         }
//       }
//     }
//   ]
// };

const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  // ...
  webpack: {
    alias: {
      '@components': resolvePath('./src/Components'),
      '@assets': resolvePath('./src/assets'),
      '@services': resolvePath('./src/services')
    }
  }
  // ...
};
