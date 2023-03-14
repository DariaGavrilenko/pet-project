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
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@constants': resolvePath('./src/constants'),
      '@helpers': resolvePath('./src/helpers'),
      '@pages': resolvePath('./src/pages'),
      '@api': resolvePath('./src/api'),
      '@hooks': resolvePath('./src/hooks')
    }
  }
  // ...
};
