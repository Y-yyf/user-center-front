import { PLANET_LINK } from '@/constant';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage='鱼皮出品';
  const currentYear=new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'planet',
          title: '知识学习',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://www.codefather.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 鱼皮 Github</>,
          href: 'https://github.com/liyupi',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
