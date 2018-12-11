import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  routerPlus: {
    enable: true,
    package: 'egg-router-plus'
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};

export default plugin;
