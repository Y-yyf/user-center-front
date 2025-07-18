import { Footer } from '@/components';
import { register} from '@/services/ant-design-pro/api';

import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, history, SelectLang, useIntl, Helmet } from '@umijs/max';
import { message, Tabs } from 'antd';
import Settings from '../../../../config/defaultSettings';
import React, { useState } from 'react';

import { createStyles } from 'antd-style';
import {PLANET_LINK, SYSTEM_LOGO} from '@/constant';
import {LockOutlined, UserOutlined} from "@ant-design/icons";



const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});



const Lang = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.lang} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};



const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { styles } = useStyles();
  const intl = useIntl();


  //表单提交
  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword,checkPassword} = values;
    //校验
    if(userPassword!==checkPassword){
      message.error('两次密码输入不一致');
      return;
    }
    try {
      // 注册
      const id = await register({ ...values, type });
      if (id) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      //console.log(msg);
      // 如果失败去设置用户错误信息
      //setUserLoginState(user);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '注册失败，请重试！',
      });

      message.error(defaultLoginFailureMessage);
    }
  };


  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.login',
            defaultMessage: '注册页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <Lang />
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          submitter={{
            searchConfig:{
              submitText: "注册",
          }
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}

          logo={<img alt="logo" src= {SYSTEM_LOGO} />}
          title="编程导航学习中心"
          subTitle={<a href={PLANET_LINK} target='_blank' rel={'noreferrer'}> 最好的编程学习环境 </a> }
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.login.accountLogin.tab',
                  defaultMessage: '账户密码注册',
                }),
              },
            ]}
          />


          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  "size": 'large',
                  "prefix": <UserOutlined/>,
                }}
                placeholder="请输入账号"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.userAccount.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder="请输入密码"
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min:8,
                    type: 'string',
                    message: '密码长度不能小于8位！',
                  }
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder="请确认密码"
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min:8,
                    type: 'string',
                    message: '密码长度不能小于8位！',
                  }
                ]}
              />
              <ProFormText
                name="planetCode"
                fieldProps={{
                  "size": 'large',
                  "prefix": <UserOutlined/>,
                }}
                placeholder="请输入星球编号"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.userAccount.required"
                        defaultMessage="星球编号是必填项!"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
