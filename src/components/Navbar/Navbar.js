import React from 'react'
import {Link } from 'react-router-dom'
import { Button,Menu,Typography,Avatar } from 'antd'
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined} from '@ant-design/icons'
import icon from '../../images/cryptocurrency.png'
function Navbar() {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'/>
            <Link style={{textDecoration:'none'}} to='/'>Cryptoverse</Link>
            <Typography.Title/>
            <Menu theme='dark'>
              <Menu.Item icon={<HomeOutlined/>}>
                <Link style={{textDecoration:'none'}} to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined/>}>
                <Link style={{textDecoration:'none'}} to='/cryptocurriencies'>Cryptocurriencies</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link style={{textDecoration:'none'}} to='/exchanges'>Exchanges</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined/>}>
                <Link style={{textDecoration:'none'}} to='/news'>News</Link>
              </Menu.Item>

            </Menu>
            

        </div>

    </div>
  )
}

export default Navbar