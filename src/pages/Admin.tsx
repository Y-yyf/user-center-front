
import React from 'react';
import {PageContainer} from '@ant-design/pro-layout'
import {Outlet} from 'umi';

const Admin = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContainer>
      {children}
      <Outlet/>
    </PageContainer>
  );
};



//import React from 'react';

//export default Admin;

// const Admin: React.FC=(props) => {
//
//   const {children}=props;
//   return(
//     <PageHeaderWrapper>
//       {children}
//     </PageHeaderWrapper>
//   );
// };


// const Admin: React.FC = () => {
//
//
//
//   const intl = useIntl();
//   return (
//
//       <PageContainer
//         content={intl.formatMessage({
//           id: 'pages.admin.subPage.title',
//           defaultMessage: 'This page can only be viewed by admin',
//         })}
//       >
        {/*<Card>*/}
        {/*  <Alert*/}
        {/*    message={intl.formatMessage({*/}
        {/*      id: 'pages.welcome.alertMessage',*/}
        {/*      defaultMessage: 'Faster and stronger heavy-duty components have been released.',*/}
        {/*    })}*/}
        {/*    type="success"*/}
        {/*    showIcon*/}
        {/*    banner*/}
        {/*    style={{*/}
        {/*      margin: -12,*/}
        {/*      marginBottom: 48,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  <Typography.Title level={2} style={{ textAlign: 'center' }}>*/}
        {/*    <SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You*/}
        {/*  </Typography.Title>*/}
        {/*</Card>*/}
        {/*<p style={{ textAlign: 'center', marginTop: 24 }}>*/}
        {/*  Want to add more pages? Please refer to{' '}*/}
        {/*  <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">*/}
        {/*    use block*/}
        {/*  </a>*/}
        {/*  。*/}
        {/*</p>*/}
//        </PageContainer>
//   );
// };

export default Admin;






